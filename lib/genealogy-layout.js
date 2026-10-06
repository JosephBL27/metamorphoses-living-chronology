/*
 * Genealogy layout.
 *
 * A descent chart is not a tree. A child has two parents, a figure can be
 * reached by more than one path, and a spouse belongs beside their partner
 * rather than below them. Laying this out as a tree is what puts a founder,
 * his daughters, and his grandsons on the same row.
 *
 * This module therefore models descent as a directed acyclic graph and ranks
 * every figure by generation — longest path from the chart's roots — so a row
 * always means "one generation further from the founder", in every chart,
 * without exception.
 *
 * Nothing here touches the DOM. It takes an accessor object so it can be run
 * against the registry, a subset of it, or a test fixture.
 */

/**
 * Collect the figures reachable from `rootNames` by descent, plus the
 * partners of everyone included — a stemma without spouses is not a stemma.
 */
export function descentGraph(rootNames, { getFigure, childrenOf, maxGenerations = 4, include = null }) {
  const nodes = new Map();
  const parents = new Map();
  const children = new Map();
  const unions = [];

  const admit = figure => {
    if (!figure || nodes.has(figure.name)) return nodes.get(figure.name) || null;
    nodes.set(figure.name, figure);
    parents.set(figure.name, new Set());
    children.set(figure.name, new Set());
    return figure;
  };

  const link = (parentName, childName) => {
    if (!nodes.has(parentName) || !nodes.has(childName) || parentName === childName) return;
    parents.get(childName).add(parentName);
    children.get(parentName).add(childName);
  };

  // Breadth-first descent, bounded by generation so a chart stays a chart.
  const seeds = rootNames.map(name => getFigure(name)).filter(Boolean);
  seeds.forEach(admit);
  let frontier = seeds;
  for (let depth = 0; depth < maxGenerations && frontier.length; depth += 1) {
    const next = [];
    frontier.forEach(figure => {
      childrenOf(figure.name)
        .filter(child => (include ? include(child) : true))
        .forEach(child => {
          const wasNew = !nodes.has(child.name);
          admit(child);
          link(figure.name, child.name);
          if (wasNew) next.push(child);
        });
    });
    frontier = next;
  }

  // Second parents: if a figure already in the graph has another recorded
  // parent who is also present, that edge exists too and must be drawn.
  [...nodes.values()].forEach(figure => {
    [figure.father, figure.mother].filter(Boolean).forEach(parentName => {
      const parent = getFigure(parentName);
      if (parent && nodes.has(parent.name)) link(parent.name, figure.name);
    });
  });

  // Partners join at their spouse's rank. They are drawn as a union tie, not
  // as descent, which is what keeps a wife off her husband's children's row.
  [...nodes.values()].forEach(figure => {
    (figure.consorts || []).forEach(consortName => {
      const consort = getFigure(consortName);
      if (!consort || consort.name === figure.name) return;
      const alreadyRelated = parents.get(figure.name)?.has(consort.name)
        || children.get(figure.name)?.has(consort.name);
      if (alreadyRelated) return;
      if (!nodes.has(consort.name)) {
        // Only admit an outside partner when they share children with someone
        // already here; otherwise every god drags in a dozen lovers.
        const sharesChildren = childrenOf(consort.name).some(child => nodes.has(child.name));
        if (!sharesChildren) return;
        admit(consort);
        [figure.father, figure.mother].forEach(() => {});
        childrenOf(consort.name).forEach(child => {
          if (nodes.has(child.name)) link(consort.name, child.name);
        });
      }
      const key = [figure.name, consort.name].sort().join("␟");
      if (!unions.some(union => union.key === key)) {
        unions.push({ key, a: figure.name, b: consort.name });
      }
    });
  });

  return { nodes, parents, children, unions };
}

/**
 * Narrow a graph to the figures a reader is actually looking at, keeping the
 * line unbroken: everyone matched by `keep`, every ancestor that connects
 * them, and the partners of anyone retained. Pruning to matches alone would
 * leave a chart of orphans with no descent to read.
 */
export function pruneGraph(graph, keep) {
  const retained = new Set([...graph.nodes.keys()].filter(keep));

  const addAncestors = name => {
    graph.parents.get(name)?.forEach(parentName => {
      if (retained.has(parentName)) return;
      retained.add(parentName);
      addAncestors(parentName);
    });
  };
  [...retained].forEach(addAncestors);

  graph.unions.forEach(({ a, b }) => {
    if (retained.has(a) || retained.has(b)) {
      retained.add(a);
      retained.add(b);
    }
  });

  const nodes = new Map();
  const parents = new Map();
  const children = new Map();
  retained.forEach(name => {
    if (!graph.nodes.has(name)) return;
    nodes.set(name, graph.nodes.get(name));
    parents.set(name, new Set([...graph.parents.get(name)].filter(value => retained.has(value))));
    children.set(name, new Set([...graph.children.get(name)].filter(value => retained.has(value))));
  });
  const unions = graph.unions.filter(({ a, b }) => nodes.has(a) && nodes.has(b));

  return { nodes, parents, children, unions };
}

/**
 * Generation rank by longest path. Roots are 0; every other figure sits one
 * row beyond its latest parent, so a grandchild can never share a row with a
 * child. Cycles — which bad data can introduce — are broken rather than
 * allowed to hang the layout.
 */
export function generationRanks(graph) {
  const { nodes, parents, children, unions } = graph;
  const indegree = new Map();
  nodes.forEach((_, name) => indegree.set(name, parents.get(name).size));

  const queue = [...nodes.keys()].filter(name => indegree.get(name) === 0);
  const rank = new Map([...nodes.keys()].map(name => [name, 0]));
  const settled = new Set();

  while (queue.length) {
    const name = queue.shift();
    settled.add(name);
    children.get(name).forEach(childName => {
      rank.set(childName, Math.max(rank.get(childName), rank.get(name) + 1));
      indegree.set(childName, indegree.get(childName) - 1);
      if (indegree.get(childName) === 0) queue.push(childName);
    });
  }

  // Anything left is inside a cycle: place it one past its deepest settled
  // parent and move on, rather than dropping it from the chart.
  nodes.forEach((_, name) => {
    if (settled.has(name)) return;
    const parentRanks = [...parents.get(name)]
      .filter(parentName => settled.has(parentName))
      .map(parentName => rank.get(parentName));
    rank.set(name, parentRanks.length ? Math.max(...parentRanks) + 1 : 0);
  });

  // A partner with no parents in this chart belongs on their spouse's row —
  // they entered the line by marriage, not by descent.
  //
  // When BOTH partners have parents here, neither moves. Levelling them to the
  // deeper of the two was quietly wrong: Jupiter marries Semele, who is
  // Cadmus's daughter four generations down, and the rule dragged Jupiter off
  // his brother Juno's row and down beside his own great-great-nieces. A god
  // marrying far below his own generation is the poem's habit, not a defect in
  // the data, and the chart should say so rather than flatten it.
  unions.forEach(({ a, b }) => {
    const aRooted = parents.get(a).size > 0;
    const bRooted = parents.get(b).size > 0;
    if (aRooted && !bRooted) rank.set(b, rank.get(a));
    else if (bRooted && !aRooted) rank.set(a, rank.get(b));
  });

  return rank;
}

/* ------------------------------------------------------- the layered stemma */

/*
 * Rings were the wrong grammar. A ring can carry a generation, but it cannot
 * carry the thing a descent chart exists to show — that *these* children come
 * from *that* marriage. On a ring, forty medallions sit shoulder to shoulder
 * and every parent line becomes an arc crossing every other arc.
 *
 * The layered form below is the one classical stemmata and genograms have
 * always used, because it reads: a generation is a row, a marriage is a rule
 * between two portraits, and a family is a bracket dropping from that marriage
 * to a bar from which the children hang. Siblings are contiguous by
 * construction, and no two figures can overlap — placement is clamped against
 * its neighbours rather than trusted to a heuristic.
 */

const mean = values => values.reduce((total, value) => total + value, 0) / values.length;

/**
 * Group children by the exact set of parents the chart holds for them. A
 * family — not a person — is the unit a descent chart is actually drawn from.
 */
function buildFamilies(graph, rank) {
  const families = new Map();
  [...graph.nodes.keys()].sort((a, b) => a.localeCompare(b)).forEach(name => {
    const parentNames = [...graph.parents.get(name)].sort();
    if (!parentNames.length) return;
    const key = parentNames.join("␟");
    if (!families.has(key)) {
      families.set(key, {
        key,
        parents: parentNames,
        children: [],
        generation: Math.max(...parentNames.map(parent => rank.get(parent)))
      });
    }
    families.get(key).children.push(name);
  });
  return families;
}

/**
 * A drawing unit is one person or one couple. Couples are a single unit so a
 * marriage rule is always short and the bracket below it always vertical.
 * A marriage that produced children in this chart claims its partners first.
 */
function buildUnits(graph, rank, families) {
  const partner = new Map();
  const claim = (a, b) => {
    if (a === b || partner.has(a) || partner.has(b)) return;
    if (rank.get(a) !== rank.get(b)) return;
    partner.set(a, b);
    partner.set(b, a);
  };
  [...families.values()]
    .filter(family => family.parents.length === 2)
    .sort((a, b) => b.children.length - a.children.length || a.key.localeCompare(b.key))
    .forEach(family => claim(family.parents[0], family.parents[1]));
  graph.unions.forEach(({ a, b }) => claim(a, b));

  const units = [];
  const unitOf = new Map();
  const taken = new Set();
  [...graph.nodes.keys()].sort((a, b) => a.localeCompare(b)).forEach(name => {
    if (taken.has(name)) return;
    taken.add(name);
    const spouse = partner.get(name);
    const members = spouse && !taken.has(spouse) ? [name, spouse] : [name];
    if (members.length === 2) taken.add(spouse);
    const unit = { id: units.length, members, generation: rank.get(name) };
    units.push(unit);
    members.forEach(member => unitOf.set(member, unit));
  });
  return { units, unitOf };
}

/**
 * Depth-first from the founders. Because the walk descends a whole line before
 * starting the next, every family's children land beside each other and every
 * cousin block lands beside its own cousins — the ordering a hand-drawn stemma
 * has without trying. This is why no crossing-minimisation pass is needed here.
 */
function orderRows(units, unitOf, families, rowCount) {
  const familiesByParent = new Map();
  families.forEach(family => family.parents.forEach(parent => {
    if (!familiesByParent.has(parent)) familiesByParent.set(parent, []);
    familiesByParent.get(parent).push(family);
  }));

  const rows = Array.from({ length: rowCount }, () => []);
  const seen = new Set();
  const visit = unit => {
    if (seen.has(unit.id)) return;
    seen.add(unit.id);
    rows[unit.generation].push(unit);
    unit.members
      .flatMap(member => familiesByParent.get(member) || [])
      .flatMap(family => family.children)
      .forEach(child => {
        const childUnit = unitOf.get(child);
        if (childUnit) visit(childUnit);
      });
  };

  // Longest lines first, so the trunk of the house sits on the left and the
  // cadet branches fall in beside it rather than through it.
  const reach = unit => unit.members
    .flatMap(member => familiesByParent.get(member) || [])
    .reduce((total, family) => total + family.children.length, 0);
  units
    .filter(unit => unit.generation === 0)
    .sort((a, b) => reach(b) - reach(a) || a.members[0].localeCompare(b.members[0]))
    .forEach(visit);
  units.forEach(unit => visit(unit));
  return rows;
}

/**
 * Lay the ordered rows out horizontally. Each pass asks every unit where it
 * would like to sit — over its children, or under its parents — and then
 * clamps that wish between its neighbours. Overlap is therefore impossible
 * however the data is shaped; the passes only decide how well centred the
 * chart looks, never whether it collides.
 */
function assignColumns(rows, unitOf, families, { slotWidth, pairGap, unitGap, passes = 10 }) {
  rows.flat().forEach(unit => {
    unit.width = unit.members.length > 1 ? pairGap + slotWidth : slotWidth;
  });

  const packedWidth = row => row.reduce((total, unit) => total + unit.width + unitGap, -unitGap);
  const canvasWidth = Math.max(0, ...rows.map(packedWidth));

  const settle = (row, desired) => {
    let cursor = 0;
    row.forEach(unit => {
      unit.lo = cursor + unit.width / 2;
      cursor += unit.width + unitGap;
    });
    const slack = Math.max(0, canvasWidth - (cursor - unitGap));
    row.forEach(unit => {
      const want = desired.get(unit.id) ?? unit.x ?? unit.lo;
      unit.x = Math.min(Math.max(want, unit.lo), unit.lo + slack);
    });
    // Forward then backward: the first guarantees separation, the second
    // recovers any centring the first had to give up.
    for (let index = 1; index < row.length; index += 1) {
      const floor = row[index - 1].x + row[index - 1].width / 2 + unitGap + row[index].width / 2;
      if (row[index].x < floor) row[index].x = floor;
    }
    for (let index = row.length - 2; index >= 0; index -= 1) {
      const ceiling = row[index + 1].x - row[index + 1].width / 2 - unitGap - row[index].width / 2;
      row[index].x = Math.max(row[index].lo, Math.min(row[index].x, ceiling));
    }
  };

  const childUnits = unit => {
    const found = new Set();
    unit.members.forEach(member => families.forEach(family => {
      if (!family.parents.includes(member)) return;
      family.children.forEach(child => {
        const childUnit = unitOf.get(child);
        if (childUnit && childUnit.generation > unit.generation) found.add(childUnit);
      });
    }));
    return [...found];
  };
  const parentUnits = unit => {
    const found = new Set();
    families.forEach(family => {
      if (!unit.members.some(member => family.children.includes(member))) return;
      family.parents.forEach(parent => {
        const parentUnit = unitOf.get(parent);
        if (parentUnit && parentUnit.generation < unit.generation) found.add(parentUnit);
      });
    });
    return [...found];
  };

  rows.forEach(row => settle(row, new Map()));
  for (let pass = 0; pass < passes; pass += 1) {
    // Odd passes pull children under their parents, even passes pull parents
    // over their children. Ending upward is deliberate: a stemma is read from
    // the founder down, so the founder should sit above the line it began.
    const upward = pass % 2 === 1;
    const order = upward ? [...rows.keys()].reverse() : [...rows.keys()];
    order.forEach(index => {
      const desired = new Map();
      rows[index].forEach(unit => {
        const anchors = (upward ? childUnits(unit) : parentUnits(unit))
          .filter(other => other.x !== undefined)
          .map(other => other.x);
        if (anchors.length) desired.set(unit.id, mean(anchors));
      });
      settle(rows[index], desired);
    });
  }
  return rows;
}

/**
 * The layered descent chart: rows of generations, marriages as rules, families
 * as brackets. Returns pure geometry — nothing here knows it will become SVG.
 */
export function familyLayout(graph, {
  nodeRadius = 30,
  slotWidth = 112,
  pairGap = 104,
  unitGap = 18,
  rowGap = 150,
  // Room under a portrait for its name, so brackets start below the label
  // rather than through it.
  labelClearance = 26
} = {}) {
  const rank = generationRanks(graph);
  const families = buildFamilies(graph, rank);
  const { units, unitOf } = buildUnits(graph, rank, families);
  const rowCount = Math.max(0, ...[...rank.values()]) + 1;
  const rows = orderRows(units, unitOf, families, rowCount);
  assignColumns(rows, unitOf, families, { slotWidth, pairGap, unitGap });

  const placed = new Map();
  rows.flat().forEach(unit => {
    const y = unit.generation * rowGap;
    unit.members.forEach((name, index) => {
      const offset = unit.members.length > 1 ? (index === 0 ? -pairGap / 2 : pairGap / 2) : 0;
      placed.set(name, {
        name,
        figure: graph.nodes.get(name),
        generation: unit.generation,
        x: unit.x + offset,
        y,
        partner: unit.members.length > 1 ? unit.members[1 - index] : null,
        side: unit.members.length > 1 ? (index === 0 ? -1 : 1) : 0
      });
    });
  });

  // A marriage is a rule along the row it sits on. Where the pair already
  // shares a bracket, that bracket says everything a long tie would: drawing
  // one anyway gives a god with six consorts six rules across the row and
  // buries the chart. So a distant tie is drawn only for a couple whose issue
  // this chart does not hold — the one case nothing else records.
  // Every seated couple gets its rule, whether or not the registry recorded a
  // consort: two figures the chart has put side by side because they share
  // children *are* a marriage in this grammar, and leaving the rule off made
  // the pair read as two unrelated neighbours.
  const seated = new Set();
  const marriages = rows.flat()
    .filter(unit => unit.members.length === 2)
    .map(unit => {
      const [a, b] = unit.members.map(name => placed.get(name));
      seated.add([a.name, b.name].sort().join("␟"));
      return a.x <= b.x
        ? { from: a, to: b, adjacent: true }
        : { from: b, to: a, adjacent: true };
    });

  // Distant ties get their own lane per row. A god with five lovers otherwise
  // lays five dashes along one line, and the reader sees a single rule rather
  // than five separate marriages.
  const lanes = new Map();
  graph.unions.forEach(({ a, b }) => {
    const key = [a, b].sort().join("␟");
    if (seated.has(key) || families.has(key)) return;
    const from = placed.get(a);
    const to = placed.get(b);
    if (!from || !to || from.y !== to.y) return;
    const lane = lanes.get(from.y) ?? 0;
    lanes.set(from.y, lane + 1);
    marriages.push(from.x <= to.x
      ? { from, to, adjacent: false, lane }
      : { from: to, to: from, adjacent: false, lane });
  });

  // Every family becomes a bracket: parents drop to a junction, the junction
  // drops to a bar, and each child rises to the bar. Children on a row further
  // down than their siblings get their own bar rather than a diagonal.
  const brackets = [];
  families.forEach(family => {
    const parents = family.parents.map(name => placed.get(name)).filter(Boolean);
    const children = family.children.map(name => placed.get(name)).filter(Boolean);
    if (!parents.length || !children.length) return;
    const parentY = Math.max(...parents.map(parent => parent.y));
    const junctionX = mean(parents.map(parent => parent.x));
    // The junction clears the parents' names. A bracket that starts at the
    // portrait's edge instead draws a rule straight through the label of any
    // figure who has no spouse to offset it against.
    const junctionY = parentY + nodeRadius + labelClearance + 22;
    const byRow = new Map();
    children.forEach(child => {
      if (!byRow.has(child.y)) byRow.set(child.y, []);
      byRow.get(child.y).push(child);
    });
    byRow.forEach((group, childY) => {
      const xs = group.map(child => child.x);
      brackets.push({
        key: `${family.key}␟${childY}`,
        parents,
        children: group,
        junctionX,
        junctionY,
        parentY,
        dropFrom: parentY + nodeRadius + labelClearance,
        barY: childY - nodeRadius - 30,
        barFrom: Math.min(junctionX, ...xs),
        barTo: Math.max(junctionX, ...xs),
        childY,
        direct: group.length === 1 && Math.abs(group[0].x - junctionX) < 0.5,
        // A child can sit two rows down when its other parent is deeper. The
        // drop then crosses a generation it has no business in, so it is
        // marked rather than drawn as an ordinary rule.
        skips: childY - parentY > rowGap * 1.5
      });
    });
  });

  const people = [...placed.values()];
  const xs = people.map(person => person.x);
  const ys = people.map(person => person.y);
  const rowBands = rows
    .map((row, generation) => ({
      generation,
      y: generation * rowGap,
      count: row.reduce((total, unit) => total + unit.members.length, 0)
    }))
    .filter(band => band.count > 0);

  return {
    people,
    marriages,
    brackets,
    rows: rowBands,
    nodeRadius,
    rowGap,
    slotWidth,
    generationCount: rowBands.length,
    bounds: {
      left: Math.min(...xs) - slotWidth / 2,
      right: Math.max(...xs) + slotWidth / 2,
      top: Math.min(...ys) - nodeRadius - 10,
      // Room for the last row's names and nothing more: a tall chart already
      // has to scroll, so every spare pixel below is one the reader must drag.
      bottom: Math.max(...ys) + nodeRadius + 46
    }
  };
}

/**
 * Everyone above and below one figure. Lighting this line and dimming the rest
 * is what makes a crowded house readable — it answers "where does this person
 * come from and what did they found" without the reader tracing rules by eye.
 */
export function lineageOf(graph, name) {
  const line = new Set([name]);
  const climb = current => graph.parents.get(current)?.forEach(parent => {
    if (line.has(parent)) return;
    line.add(parent);
    climb(parent);
  });
  const fall = current => graph.children.get(current)?.forEach(child => {
    if (line.has(child)) return;
    line.add(child);
    fall(child);
  });
  climb(name);
  fall(name);
  return line;
}

/**
 * Whole-poem ranking. Every figure with a recorded parent is one generation
 * below their latest parent; everyone else is a founder. Used by the master
 * genealogy, where the point is a single consistent scale across the poem.
 */
export function globalGenerations({ figures, getFigure }) {
  const parents = new Map();
  const children = new Map();
  const byName = new Map(figures.map(figure => [figure.name, figure]));

  figures.forEach(figure => {
    parents.set(figure.name, new Set());
    children.set(figure.name, new Set());
  });
  figures.forEach(figure => {
    [figure.father, figure.mother].filter(Boolean).forEach(parentName => {
      const parent = getFigure(parentName);
      if (!parent || !byName.has(parent.name) || parent.name === figure.name) return;
      parents.get(figure.name).add(parent.name);
      children.get(parent.name).add(figure.name);
    });
  });

  const graph = { nodes: byName, parents, children, unions: [] };
  const rank = generationRanks(graph);

  // Partners without parents of their own settle beside their spouse, so a
  // consort is never listed a generation away from the person they married.
  let moved = true;
  let guard = 0;
  while (moved && guard < 4) {
    moved = false;
    guard += 1;
    figures.forEach(figure => {
      if (parents.get(figure.name).size) return;
      const spouseRanks = (figure.consorts || [])
        .map(name => getFigure(name))
        .filter(spouse => spouse && byName.has(spouse.name) && parents.get(spouse.name).size)
        .map(spouse => rank.get(spouse.name));
      if (!spouseRanks.length) return;
      const target = Math.max(...spouseRanks);
      if (rank.get(figure.name) !== target) {
        rank.set(figure.name, target);
        moved = true;
      }
    });
  }

  return { rank, parents, children };
}
