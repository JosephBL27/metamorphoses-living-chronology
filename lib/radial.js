/*
 * Pure radial geometry for the volvelle and the stemma.
 *
 * Nothing in this module touches the DOM, reads state, or knows what a book
 * is. It converts numbers into path strings and point lists so that every
 * ring in the instrument is generated from data rather than hand-drawn, and
 * so the geometry can be reasoned about (and corrected) in one place.
 *
 * Angle convention: degrees, clockwise, 0° at twelve o'clock.
 */

export const TAU = Math.PI * 2;

export function polar(cx, cy, radius, degrees) {
  const radians = (degrees - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

/** Annular sector between two radii and two angles. */
export function donutPath(cx, cy, inner, outer, start, end) {
  const large = end - start > 180 ? 1 : 0;
  const outerStart = polar(cx, cy, outer, start);
  const outerEnd = polar(cx, cy, outer, end);
  const innerEnd = polar(cx, cy, inner, end);
  const innerStart = polar(cx, cy, inner, start);
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outer} ${outer} 0 ${large} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${inner} ${inner} 0 ${large} 0 ${innerStart.x} ${innerStart.y}`,
    "Z"
  ].join(" ");
}

/** A bare arc, for textPath baselines and hairline rules. */
export function arcPath(cx, cy, radius, start, end, sweep = 1) {
  const from = polar(cx, cy, radius, start);
  const to = polar(cx, cy, radius, end);
  const large = Math.abs(end - start) > 180 ? 1 : 0;
  return `M ${from.x} ${from.y} A ${radius} ${radius} 0 ${large} ${sweep} ${to.x} ${to.y}`;
}

/**
 * Baseline for a curved label centred on a sector. Labels in the lower half
 * of the instrument are drawn on a reversed arc so they read left-to-right
 * instead of upside down.
 */
export function labelArc(cx, cy, radius, start, end, { padding = 1.2, rotation = 0 } = {}) {
  const mid = (start + end) / 2;
  // The instrument turns, so a label authored in the upper half can be read
  // in the lower half. The flip decision has to use the angle the reader will
  // actually see, not the angle the geometry was written at.
  const seen = (((mid + rotation) % 360) + 360) % 360;
  const flipped = seen > 90 && seen < 270;
  const from = start + padding;
  const to = end - padding;
  return flipped
    ? { d: arcPath(cx, cy, radius, to, from, 0), flipped }
    : { d: arcPath(cx, cy, radius, from, to, 1), flipped };
}

/** Evenly divide a full turn into `count` sectors, with an optional gap. */
export function sectors(count, { gap = 0, offset = 0 } = {}) {
  const step = 360 / count;
  return Array.from({ length: count }, (_, index) => ({
    index,
    start: offset + index * step + gap / 2,
    end: offset + (index + 1) * step - gap / 2,
    mid: offset + (index + 0.5) * step
  }));
}

/**
 * Registration ticks. `majorEvery` ticks reach the full length; the rest are
 * drawn short, which is what gives an engraved scale its rhythm.
 */
export function tickMarks(cx, cy, radius, { count = 72, majorEvery = 6, minor = 5, major = 11, offset = 0 } = {}) {
  return Array.from({ length: count }, (_, index) => {
    const angle = offset + (index * 360) / count;
    const length = index % majorEvery === 0 ? major : minor;
    const from = polar(cx, cy, radius, angle);
    const to = polar(cx, cy, radius - length, angle);
    return { angle, isMajor: index % majorEvery === 0, d: `M ${from.x} ${from.y} L ${to.x} ${to.y}` };
  });
}

/**
 * Deterministic scatter for the star field. A seeded generator keeps the sky
 * identical between renders — a field that reshuffles on every state change
 * reads as noise rather than as a plate.
 */
export function seededRandom(seed) {
  let state = seed >>> 0 || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 4294967296;
  };
}

export function starField(cx, cy, inner, outer, { count = 220, seed = 1801 } = {}) {
  const random = seededRandom(seed);
  return Array.from({ length: count }, () => {
    const angle = random() * 360;
    // Square-root distribution keeps density even across the annulus.
    const radius = Math.sqrt(random() * (outer ** 2 - inner ** 2) + inner ** 2);
    const magnitude = random();
    const point = polar(cx, cy, radius, angle);
    return {
      x: Number(point.x.toFixed(2)),
      y: Number(point.y.toFixed(2)),
      r: Number((0.5 + magnitude * 1.5).toFixed(2)),
      opacity: Number((0.18 + magnitude * 0.55).toFixed(2))
    };
  });
}

/**
 * Place a normalized figure (points in 0..1 space) into the annulus at a
 * given angle, scaled to fit `size` and rotated to stand upright relative to
 * the wheel's centre.
 */
export function placeFigure(cx, cy, radius, angle, size, points) {
  const anchor = polar(cx, cy, radius, angle);
  const scale = size;
  return {
    anchor,
    rotation: angle,
    points: points.map(([x, y]) => [
      Number(((x - 0.5) * scale).toFixed(2)),
      Number(((y - 0.5) * scale).toFixed(2))
    ])
  };
}

/**
 * Radial tree layout for the stemma. Leaves are distributed evenly across the
 * available arc; each parent sits at the mean angle of its children, which is
 * what makes a descent read as a descent rather than as a starburst.
 */
export function radialTreeLayout(node, { startAngle = 0, endAngle = 360, innerRadius = 90, ringGap = 78, maxDepth = 4 } = {}) {
  const leaves = [];
  const nodes = [];
  let leafCursor = 0;

  const countLeaves = current => {
    if (!current.children?.length) return 1;
    return current.children.reduce((total, child) => total + countLeaves(child), 0);
  };

  const totalLeaves = Math.max(1, countLeaves(node));
  const span = endAngle - startAngle;

  const walk = (current, depth, parent) => {
    const depthClamped = Math.min(depth, maxDepth);
    const radius = innerRadius + depthClamped * ringGap;
    let angle;
    if (!current.children?.length) {
      angle = startAngle + ((leafCursor + 0.5) / totalLeaves) * span;
      leafCursor += 1;
    } else {
      const childAngles = current.children.map(child => walk(child, depth + 1, current));
      angle = childAngles.reduce((total, child) => total + child.angle, 0) / childAngles.length;
    }
    const point = polar(0, 0, radius, angle);
    const entry = {
      figure: current.figure,
      repeated: current.repeated,
      depth: depthClamped,
      angle,
      radius,
      x: Number(point.x.toFixed(2)),
      y: Number(point.y.toFixed(2)),
      parent: parent || null,
      children: current.children || []
    };
    nodes.push(entry);
    if (!current.children?.length) leaves.push(entry);
    return entry;
  };

  const root = walk(node, 0, null);

  // Second pass: edges drawn as an elbow — radial out, then along the arc —
  // so the diagram reads as a stemma rather than a spider's web.
  const byFigure = new Map(nodes.map(entry => [entry.figure.name, entry]));
  const edges = [];
  nodes.forEach(entry => {
    entry.children.forEach(child => {
      const target = byFigure.get(child.figure.name);
      if (!target || target === entry) return;
      const midRadius = (entry.radius + target.radius) / 2;
      const from = polar(0, 0, entry.radius, entry.angle);
      const bendA = polar(0, 0, midRadius, entry.angle);
      const bendB = polar(0, 0, midRadius, target.angle);
      const to = polar(0, 0, target.radius, target.angle);
      const sweep = target.angle > entry.angle ? 1 : 0;
      edges.push({
        from: entry,
        to: target,
        d: [
          `M ${from.x.toFixed(2)} ${from.y.toFixed(2)}`,
          `L ${bendA.x.toFixed(2)} ${bendA.y.toFixed(2)}`,
          `A ${midRadius} ${midRadius} 0 0 ${sweep} ${bendB.x.toFixed(2)} ${bendB.y.toFixed(2)}`,
          `L ${to.x.toFixed(2)} ${to.y.toFixed(2)}`
        ].join(" ")
      });
    });
  });

  return { root, nodes, leaves, edges, extent: Math.max(...nodes.map(entry => entry.radius)) };
}
