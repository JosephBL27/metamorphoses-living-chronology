/*
 * Placing names on a chart.
 *
 * The gazetteer is honest about geography, and honest geography is merciless:
 * Thebes, Cithaeron and Athens are within two chart units of each other, and
 * five Arcadian entries sit inside a thumbnail. Printing a label beside every
 * mark produces an unreadable smear exactly where the poem is densest.
 *
 * This is point-feature label placement, the oldest problem in cartography.
 * The method here is the standard greedy one, and the two decisions that make
 * it work are:
 *
 *   1. Labels are tried at eight positions around their mark, in the order a
 *      cartographer would prefer — right of the mark first, then left, then
 *      the diagonals, then above and below.
 *   2. A label that fits nowhere is *dropped*, not squeezed. Its mark stays.
 *      A chart that hides a name until you zoom is telling the truth; a chart
 *      that overprints two names is not.
 *
 * Importance decides who wins a contested spot, so Rome and Troy keep their
 * names at every scale and a minor headland yields.
 */

/** Preference order: a name reads best to the right of its mark, on the line. */
const CANDIDATES = [
  { dx: 1, dy: 0.32, anchor: "start" },
  { dx: -1, dy: 0.32, anchor: "end" },
  { dx: 1, dy: -0.75, anchor: "start" },
  { dx: -1, dy: -0.75, anchor: "end" },
  { dx: 1, dy: 1.35, anchor: "start" },
  { dx: -1, dy: 1.35, anchor: "end" },
  { dx: 0, dy: -1.15, anchor: "middle" },
  { dx: 0, dy: 1.75, anchor: "middle" }
];

const overlaps = (a, b) =>
  a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;

/*
 * Measure the actual type.
 *
 * The first version estimated a label's width at half an em per character.
 * That is roughly right for a grotesque and badly wrong for the italic Bodoni
 * this chart sets its names in, so twelve pairs of names overlapped while the
 * algorithm believed it had placed them cleanly. A canvas context measures the
 * real font, which is the only number that cannot drift from what is drawn.
 */
let measurer = null;

function measureText(text, font) {
  if (typeof document === "undefined") return text.length * 0.5;
  if (!measurer) measurer = document.createElement("canvas").getContext("2d");
  measurer.font = font;
  return measurer.measureText(text).width;
}

/**
 * @param items  [{ name, x, y, label, importance, radius }]
 * @param scale  current zoom; sizes are divided by it so a label occupies the
 *               same number of *screen* pixels however far the chart is zoomed,
 *               which is what makes zooming in reveal more names.
 */
export function placeLabels(items, {
  scale = 1,
  fontSize = 13,
  // Names are drawn with a contrast halo, so what the reader sees is wider and
  // taller than the glyphs by half the stroke on every side. Padding has to
  // cover the halo before it buys any breathing room, or two names that merely
  // touch will visibly collide.
  padding = 5,
  font = 'italic 13px "Bodoni Moda", Didot, Georgia, serif',
  // Ground already spoken for — the capitals a territory or a sea has laid
  // across itself. A town name may not be set on top of a country's name, and
  // the two lettering systems are drawn by different passes, so the second one
  // has to be told where the first one went.
  reserved = []
} = {}) {
  const size = fontSize / scale;
  const pad = padding / scale;

  // Most important first: the greedy pass gives earlier claimants the better
  // positions, so the order here *is* the priority.
  const queue = [...items].sort((a, b) => (b.importance ?? 0) - (a.importance ?? 0));

  /*
   * Every mark is an obstacle from the start, not from its turn.
   *
   * The first version added a mark to the obstacle list as it reached that
   * mark in the queue, so a name placed early knew nothing about the dots of
   * places ranked below it — and Athens was printed straight through the walled
   * city drawn for Eleusis, arriving on the plate as "Athe s". Marks exist
   * whether or not their own name is ever placed, so they are all laid down
   * before a single name is.
   */
  const gapFor = item => (item.radius ?? 4) / scale + 3 / scale;
  const marks = items.map(item => {
    const gap = gapFor(item);
    return {
      name: item.name,
      x0: item.x - gap, x1: item.x + gap,
      y0: item.y - gap, y1: item.y + gap
    };
  });

  const taken = [...reserved];
  const placed = [];
  const hidden = [];

  queue.forEach(item => {
    // Measured at the rendered size, then divided back into chart units.
    const width = measureText(item.label, font) / scale;
    const gap = gapFor(item);

    // A name may sit clear of its own mark — that is where it belongs — but not
    // on anybody else's.
    const others = marks.filter(mark => mark.name !== item.name);

    const spot = CANDIDATES.map(candidate => {
      const x = item.x + candidate.dx * gap;
      const y = item.y + candidate.dy * size;
      const left = candidate.anchor === "start" ? x
        : candidate.anchor === "end" ? x - width
        : x - width / 2;
      return {
        candidate,
        x, y,
        // `y` is the baseline; the box runs one em above it to the descender.
        box: { x0: left - pad, x1: left + width + pad, y0: y - size - pad, y1: y + pad }
      };
    }).find(option =>
      !taken.some(box => overlaps(option.box, box)) &&
      !others.some(mark => overlaps(option.box, mark)));

    if (spot) {
      taken.push(spot.box);
      placed.push({ ...item, labelX: spot.x, labelY: spot.y, anchor: spot.candidate.anchor });
    } else {
      // No room at this zoom. The mark survives; the name waits.
      hidden.push(item);
    }
  });

  return { placed, hidden };
}

/**
 * Importance, derived rather than authored.
 *
 * A place's weight on the chart is how much of the poem happens there — books,
 * then episodes, then figures — so the ranking cannot drift out of step with
 * the gazetteer the way a hand-assigned number would.
 */
export function chartImportance(place) {
  return place.books.length * 6 + place.episodes.length * 2 + place.figures.length;
}

/*
 * Thinning the chart to what the scale can carry.
 *
 * A gazetteer of a hundred and forty places is a smear at the whole-world view
 * and a comfortable chart at four times that, and the difference is not the
 * size of the type — it is how many marks are competing for the same square
 * inch. Dropping labels was the first answer and it was the wrong one: the
 * marks themselves were still there, so the Aegean stayed a grey mass of dots
 * with a handful of names floating over it.
 *
 * So the chart thins. Every place claims a circle of the reader's screen, the
 * most important claim first, and a place that cannot get clear of one already
 * drawn waits for a closer scale. Because the claim is measured in screen
 * pixels rather than chart units, zooming does the rest by itself: the same
 * separation buys more places as the ground stretches under it, which is why
 * closing on a coast keeps revealing gazetteer rather than magnifying it.
 *
 * `separation` is in chart units — the caller divides its screen figure by the
 * current scale, which is the one place that conversion belongs.
 */
export function declutter(items, { separation = 0, keep = [] } = {}) {
  if (separation <= 0) return items.slice();

  const forced = new Set(keep);
  const queue = [...items].sort((a, b) => {
    // A place the reader has asked for is never thinned away, whatever it
    // weighs: the chart must not answer a click by hiding what was clicked.
    const pinned = Number(forced.has(b.name)) - Number(forced.has(a.name));
    return pinned || (b.importance ?? 0) - (a.importance ?? 0);
  });

  const kept = [];
  const min = separation * separation;
  queue.forEach(item => {
    if (forced.has(item.name)) { kept.push(item); return; }
    const clear = kept.every(other => {
      const dx = other.x - item.x;
      const dy = other.y - item.y;
      return dx * dx + dy * dy >= min;
    });
    if (clear) kept.push(item);
  });
  return kept;
}

/**
 * Where a route should bend.
 *
 * Journeys drawn as straight segments read as a diagram of a route rather than
 * a route. A shallow arc, always bowing the same way relative to travel, reads
 * as a course steered — and keeps two legs between the same pair of places
 * from lying on top of each other.
 */
export function routePath(points, { bow = 0.16 } = {}) {
  if (points.length < 2) return "";
  const parts = [`M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`];
  for (let index = 1; index < points.length; index += 1) {
    const [x0, y0] = points[index - 1];
    const [x1, y1] = points[index];
    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    // Perpendicular to the leg, so the bow follows the direction of travel.
    const controlX = midX + (y1 - y0) * bow;
    const controlY = midY - (x1 - x0) * bow;
    parts.push(`Q ${controlX.toFixed(1)} ${controlY.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`);
  }
  return parts.join(" ");
}

/*
 * Lettering a territory.
 *
 * The single most recognisable device on an old map is not the coastline — it
 * is the way a country's name is set: capitals, widely tracked, running right
 * across the land it belongs to, sized to the ground it covers. It does two
 * jobs at once. It names the place, and it *shows how much of the world the
 * place is*, which a dot beside a word can never do.
 *
 * So a territory's type size is derived from its own width rather than chosen:
 * Libya is a wide word across a wide country and Arcadia is a small one across
 * a small country, and the reader learns the relative size of the poem's
 * geography without being told it.
 */
export function territoryLabel(name, [x0, y0, x1, y1], {
  min = 11,
  max = 34,
  fill = 0.74,
  tracking = 0.24,
  family = '"Archivo Narrow", "Helvetica Neue", sans-serif'
} = {}) {
  const width = Math.abs(x1 - x0);
  const height = Math.abs(y1 - y0);
  const text = name.toUpperCase();

  // Binary search the size whose tracked width fills the territory.
  let low = min;
  let high = max;
  for (let step = 0; step < 12; step += 1) {
    const mid = (low + high) / 2;
    const drawn = measureText(text, `600 ${mid}px ${family}`) + text.length * mid * tracking;
    if (drawn > width * fill) high = mid; else low = mid;
  }
  const size = Math.max(min, Math.min(max, low));

  return {
    text,
    size,
    tracking: size * tracking,
    x: (x0 + x1) / 2,
    y: (y0 + y1) / 2 + size * 0.34,
    // A territory too small to letter at the floor size keeps its mark instead.
    fits: measureText(text, `600 ${min}px ${family}`) + text.length * min * tracking <= width * 1.05
      && height > min * 1.1
  };
}

/*
 * A scale bar that means something.
 *
 * Distances on an equirectangular chart are only true along the parallels, and
 * they shrink with latitude. Quoting one number would be a lie of the kind this
 * chart has otherwise avoided, so the bar is computed at the frame's middle
 * latitude and says so.
 */
export function scaleBar(chart, { target = 300 } = {}) {
  const { west, east, north, south } = chart.scale;
  const midLatitude = (north + south) / 2;
  const unitsPerDegree = chart.width / (east - west);
  const kmPerDegree = 111.32 * Math.cos((midLatitude * Math.PI) / 180);

  // Round to something a chart would actually print.
  const steps = [100, 200, 250, 500, 1000];
  const km = steps.reduce((best, step) =>
    Math.abs(step - target) < Math.abs(best - target) ? step : best, steps[0]);

  return {
    km,
    // The Roman mile — mille passuum, about 1.48 km — because this is Ovid's world.
    miles: Math.round(km / 1.48),
    length: (km / kmPerDegree) * unitsPerDegree,
    atLatitude: Math.round(midLatitude)
  };
}

/*
 * A territory's outline.
 *
 * Rectangles were the first attempt and they read as user-interface boxes
 * dropped on a map — the one thing a chart in this language must never look
 * like. A province on an engraved map is bounded by a soft irregular line that
 * was drawn by a hand following a coast and a range.
 *
 * So the bound is an ellipse inscribed in the authored extent, its radius
 * perturbed by a hash of the name. It is deterministic — the same country has
 * the same shape on every render and every reload — and it is honest about
 * what it claims, which is an approximate area rather than a border.
 */
export function territoryOutline(name, [x0, y0, x1, y1], { points = 22, wobble = 0.11 } = {}) {
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const rx = Math.abs(x1 - x0) / 2;
  const ry = Math.abs(y1 - y0) / 2;

  let seed = 0;
  for (let index = 0; index < name.length; index += 1) {
    seed = (seed * 31 + name.charCodeAt(index)) >>> 0;
  }
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const ring = Array.from({ length: points }, (_, index) => {
    const angle = (index / points) * Math.PI * 2;
    const jitter = 1 - wobble + random() * wobble * 2;
    return [
      cx + Math.cos(angle) * rx * jitter,
      cy + Math.sin(angle) * ry * jitter
    ];
  });

  // Closed Catmull-Rom through the ring, emitted as cubics, so the bound is a
  // continuous curve rather than a polygon pretending to be one.
  const parts = [`M ${ring[0][0].toFixed(1)} ${ring[0][1].toFixed(1)}`];
  for (let index = 0; index < points; index += 1) {
    const p0 = ring[(index - 1 + points) % points];
    const p1 = ring[index];
    const p2 = ring[(index + 1) % points];
    const p3 = ring[(index + 2) % points];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    parts.push(`C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`);
  }
  return `${parts.join(" ")} Z`;
}
