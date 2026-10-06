/*
 * Static ornament for the instrument.
 *
 * Everything here returns SVG markup built from parameters — a star field, a
 * ring of engraved constellations, registration scales, and the sun medallion
 * at the centre. Nothing is hand-drawn twice: repeated geometry is generated,
 * and the only literal path data in the module is the sun's face, which
 * appears exactly once.
 *
 * The whole layer is inert. It is rendered inside a group with pointer events
 * disabled and hidden from assistive technology; the dynamic and interaction
 * layers sit above it.
 */

import { polar, arcPath, starField, tickMarks, sectors } from "./radial.js";
import { CATASTERISMS } from "../data/catasterisms.js";

const fixed = value => Number(value).toFixed(2);

export function renderStarField(cx, cy, inner, outer, options = {}) {
  return starField(cx, cy, inner, outer, options)
    .map(star => `<circle cx="${star.x}" cy="${star.y}" r="${star.r}" opacity="${star.opacity}"/>`)
    .join("");
}

/**
 * One engraved constellation per book, seated in the outer annulus and
 * rotated so each figure stands upright on its own sector.
 */
export function renderCatasterismRing(cx, cy, radius, size, { count = 15, offset = 0 } = {}) {
  const bands = sectors(count, { offset });
  return CATASTERISMS.map((entry, index) => {
    const band = bands[index % bands.length];
    const anchor = polar(cx, cy, radius, band.mid);
    const scale = size;
    const point = ([x, y]) => [fixed((x - 0.5) * scale), fixed((y - 0.5) * scale)];
    const lines = entry.edges
      .map(([from, to]) => {
        const a = point(entry.stars[from]);
        const b = point(entry.stars[to]);
        return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`;
      })
      .join("");
    const dots = entry.stars
      .map((star, starIndex) => {
        const [x, y] = point(star);
        const r = starIndex === 0 ? 2.4 : 1.6;
        return `<circle cx="${x}" cy="${y}" r="${r}"/>`;
      })
      .join("");
    return `<g class="catasterism" data-catasterism="${entry.book}" transform="translate(${fixed(anchor.x)} ${fixed(anchor.y)}) rotate(${fixed(band.mid)})">
      <g class="catasterism-lines">${lines}</g>
      <g class="catasterism-stars">${dots}</g>
    </g>`;
  }).join("");
}

/** Fine registration scale, drawn inward from `radius`. */
export function renderTickRing(cx, cy, radius, options = {}) {
  return tickMarks(cx, cy, radius, options)
    .map(tick => `<path class="tick ${tick.isMajor ? "tick--major" : "tick--minor"}" d="${tick.d}"/>`)
    .join("");
}

/** Evenly spaced hairline spokes, used to divide a band without filling it. */
export function renderSpokes(cx, cy, inner, outer, count, { offset = 0 } = {}) {
  return sectors(count, { offset })
    .map(band => {
      const from = polar(cx, cy, inner, band.start);
      const to = polar(cx, cy, outer, band.start);
      return `<path class="spoke" d="M ${fixed(from.x)} ${fixed(from.y)} L ${fixed(to.x)} ${fixed(to.y)}"/>`;
    })
    .join("");
}

/**
 * Curved labels riding an arc, for era names and scale legends. `items`
 * supply their own angular span so a band can be divided unevenly.
 */
export function renderArcLabels(cx, cy, radius, items, { idPrefix = "arc", className = "", rotation = 0 } = {}) {
  const paths = [];
  const labels = [];
  items.forEach((item, index) => {
    const mid = (item.start + item.end) / 2;
    const seen = (((mid + rotation) % 360) + 360) % 360;
    const flipped = seen > 90 && seen < 270;
    const id = `${idPrefix}-${index}`;
    const d = flipped
      ? arcPath(cx, cy, radius, item.end - 1.4, item.start + 1.4, 0)
      : arcPath(cx, cy, radius, item.start + 1.4, item.end - 1.4, 1);
    paths.push(`<path id="${id}" d="${d}" fill="none"/>`);
    labels.push(
      `<text class="${className}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${item.label}</textPath></text>`
    );
  });
  return `<defs>${paths.join("")}</defs>${labels.join("")}`;
}

/**
 * The central sun medallion: a beaded rim, alternating straight and flame
 * rays, and an engraved face. The face is the one piece of literal path data
 * in the ornament layer, and it is drawn once.
 */
export function renderSunMedallion(cx, cy, radius) {
  const rayCount = 32;
  const rays = sectors(rayCount)
    .map((band, index) => {
      const long = index % 2 === 0;
      const tip = polar(cx, cy, radius * (long ? 1 : 0.86), band.start);
      const spread = long ? 3.1 : 2.2;
      const leftBase = polar(cx, cy, radius * 0.63, band.start - spread);
      const rightBase = polar(cx, cy, radius * 0.63, band.start + spread);
      return `<path class="sun-ray ${long ? "sun-ray--long" : "sun-ray--short"}" d="M ${fixed(leftBase.x)} ${fixed(leftBase.y)} L ${fixed(tip.x)} ${fixed(tip.y)} L ${fixed(rightBase.x)} ${fixed(rightBase.y)} Z"/>`;
    })
    .join("");

  const beads = sectors(56)
    .map(band => {
      const point = polar(cx, cy, radius * 0.585, band.start);
      return `<circle class="sun-bead" cx="${fixed(point.x)}" cy="${fixed(point.y)}" r="0.9"/>`;
    })
    .join("");

  const face = radius * 0.5;
  return `<g class="sun-medallion">
    <g class="sun-rays">${rays}</g>
    <circle class="sun-halo" cx="${cx}" cy="${cy}" r="${fixed(radius * 0.62)}"/>
    ${beads}
    <circle class="sun-disc" cx="${cx}" cy="${cy}" r="${fixed(face)}"/>
    <circle class="sun-disc-rim" cx="${cx}" cy="${cy}" r="${fixed(face * 0.88)}"/>
    ${sunFace(cx, cy, face)}
  </g>`;
}

/*
 * The sun's face, in a 100-unit space scaled to the disc.
 *
 * The first face was outlined like a cartoon and, worse, hand-drawn twice: the
 * two brows, the two eyes and the two cheeks were separate literal paths, so
 * every one of them differed slightly from its partner. A human face is read
 * by its symmetry, and a face whose halves disagree by a few degrees is read
 * as *wrong* long before the viewer can say why. That is where the uncanniness
 * came from, not from the drawing being simple.
 *
 * So the half-face is authored once and mirrored. Symmetry is now a property
 * of the construction rather than of how carefully the curves were matched.
 * The features are modelled the way an engraver models them — an eye is a lens
 * with a lid and a pupil, a cheek is two short strokes, not an outline — and
 * the mouth is closed and level. A serene sun belongs on an instrument; a
 * grinning one belongs on a weather map.
 */
function sunFace(cx, cy, radius) {
  // Proportions follow the ordinary canon of a frontal head: the gap between
  // the eyes is one eye wide, the brow sits a full eye above the lid, and the
  // mouth is narrower than the span between the pupils. Getting these wrong is
  // the other half of why a simple face reads as uncanny.
  const half = [
    `<path class="sun-brow" d="M 21 -54 Q 42 -67 64 -52"/>`,
    // An almond with its upper lid cut heavier than its lower, and a pupil
    // high enough in the socket that the gaze reads level rather than sullen.
    `<path class="sun-eye" d="M 20 -22 Q 42 -40 63 -23 Q 42 -8 20 -22 Z"/>`,
    `<path class="sun-lid" d="M 20 -22 Q 42 -40 63 -23"/>`,
    `<circle class="sun-pupil" cx="42" cy="-22" r="6.2"/>`,
    // The nose is a keel that narrows and stops. An outlined nose on a frontal
    // face always reads as a scar.
    `<path class="sun-keel" d="M 7 -14 Q 9 3 5 13"/>`,
    `<path class="sun-nostril" d="M 6 15 Q 11 18 13 13"/>`,
    // One cheekbone stroke. The second, lower one sat beside the mouth and the
    // eye read the pair as a moustache: at ninety pixels a face carries brows,
    // eyes, a nose and a mouth, and everything else becomes a smudge.
    `<path class="sun-hatch" d="M 36 10 Q 47 15 56 9"/>`
  ].join("");

  // The mouth is nearly level. Every earlier version curved it hard, and at
  // this size a curved stroke of any weight fills in to a dark bar — which is
  // read as a grin or a moustache, never as a mouth.
  return `<g class="sun-face" transform="translate(${cx} ${cy}) scale(${fixed(radius / 100)})">
    <g class="sun-half">${half}</g>
    <g class="sun-half" transform="scale(-1 1)">${half}</g>
    <path class="sun-nose-tip" d="M -6 13 Q 0 17 6 13"/>
    <path class="sun-lip" d="M -22 33 Q -11 29 0 31 Q 11 29 22 33"/>
  </g>`;
}

/**
 * A full circle of small-cap text, used for the motto ring that separates the
 * sun from the innermost band. Drawn on a closed arc so the inscription runs
 * continuously rather than reading as two half-labels.
 */
export function renderCircularInscription(cx, cy, radius, text, { id = "inscription", className = "" } = {}) {
  const top = polar(cx, cy, radius, 0);
  const bottom = polar(cx, cy, radius, 180);
  const d = [
    `M ${fixed(top.x)} ${fixed(top.y)}`,
    `A ${radius} ${radius} 0 1 1 ${fixed(bottom.x)} ${fixed(bottom.y)}`,
    `A ${radius} ${radius} 0 1 1 ${fixed(top.x)} ${fixed(top.y)}`
  ].join(" ");
  return `<defs><path id="${id}" d="${d}" fill="none"/></defs>
    <text class="${className}"><textPath href="#${id}" startOffset="0%">${text}</textPath></text>`;
}

/**
 * The field the instrument is mounted on.
 *
 * Everything here sits *behind* the volvelle and outside it: rhumb lines
 * running off the wheel's centre the way they run off a compass rose on a
 * portolan chart, two vast arcs implying a plate far larger than the page, and
 * a star field thrown across the whole ground. It is drawn in the wheel's own
 * geometry so the page reads as one instrument on one mounting, not a circle
 * pasted onto a gradient.
 *
 * Kept deliberately faint: this is ground, and the moment it competes with the
 * bands it has failed.
 */
export function renderInstrumentField(cx, cy, radius, { width, height, rhumbs = 32 } = {}) {
  const reach = Math.hypot(Math.max(cx, width - cx), Math.max(cy, height - cy));

  const lines = sectors(rhumbs)
    .map((band, index) => {
      const major = index % 4 === 0;
      const from = polar(cx, cy, radius * (major ? 1.02 : 1.14), band.start);
      const to = polar(cx, cy, reach, band.start);
      return `<path class="field-rhumb ${major ? "field-rhumb--major" : ""}" d="M ${fixed(from.x)} ${fixed(from.y)} L ${fixed(to.x)} ${fixed(to.y)}"/>`;
    })
    .join("");

  // Two close rings read as the collar the plate is seated in; the far pair
  // implies a mounting that runs off the page. Both are needed — the close
  // ones alone look like a halo, the far ones alone like stray geometry.
  const arcs = [1.055, 1.105, 1.44, 1.98]
    .map(scale => `<circle class="field-arc" cx="${cx}" cy="${cy}" r="${fixed(radius * scale)}"/>`)
    .join("");

  // Seeded, so the sky is the same sky on every render and every reload.
  const stars = starField(cx, cy, radius * 1.06, reach, { count: 260, seed: 8419 })
    .map(star => `<circle class="field-star" cx="${star.x}" cy="${star.y}" r="${star.r}" opacity="${star.opacity}"/>`)
    .join("");

  // The plate frame: a double rule inset from the panel with a lozenge at each
  // corner, the way an engraved plate is bounded in a folio. It is the one
  // element of the ground that is allowed to be crisp, because a frame that
  // fades reads as a mistake rather than as distance.
  // The frame is only drawn when the panel is big enough to hold one. This is
  // measured geometry, and a measurement taken mid-layout can report a panel a
  // single pixel tall — which produced `height="-45"` and a console error on
  // every phone load until it was caught.
  const inset = 18;
  const gap = 5;
  const frame = width < 90 || height < 90 ? "" : [inset, inset + gap]
    .map(offset => `<rect class="field-rule" x="${offset}" y="${offset}" width="${fixed(width - offset * 2)}" height="${fixed(height - offset * 2)}"/>`)
    .join("");
  const corners = (frame ? [[inset, inset], [width - inset, inset], [inset, height - inset], [width - inset, height - inset]] : [])
    .map(([x, y]) => `<path class="field-corner" d="M ${fixed(x)} ${fixed(y - 5)} L ${fixed(x + 5)} ${fixed(y)} L ${fixed(x)} ${fixed(y + 5)} L ${fixed(x - 5)} ${fixed(y)} Z"/>`)
    .join("");

  return `<g class="field-arcs">${arcs}</g>
    <g class="field-rhumbs">${lines}</g>
    <g class="field-stars">${stars}</g>
    <g class="field-frame">${frame}${corners}</g>`;
}

/**
 * A quiet armillary lattice for the outermost field: meridian arcs that
 * suggest a plate the instrument is mounted on without competing with it.
 */
export function renderMeridians(cx, cy, radius, { count = 12 } = {}) {
  return sectors(count)
    .map(band => {
      const from = polar(cx, cy, radius, band.start);
      const to = polar(cx, cy, radius, band.start + 180);
      const bulge = radius * 0.92;
      return `<path class="meridian-arc" d="M ${fixed(from.x)} ${fixed(from.y)} A ${fixed(bulge)} ${fixed(bulge)} 0 0 1 ${fixed(to.x)} ${fixed(to.y)}"/>`;
    })
    .join("");
}

/* --------------------------------------------------------- the sea chart */

/*
 * Portolan furniture.
 *
 * The reference is the working sea chart of the 14th–16th centuries: a coast
 * traced from real survey, a network of rhumb lines radiating from wind roses
 * set out on the water, and the sea left empty because emptiness is where a
 * navigator draws. Everything here is generated from parameters for the same
 * reason the volvelle is — a chart's rhumb network is thirty-two lines from
 * each of several centres, and drawing that by hand once is a mistake you
 * cannot correct.
 */

/**
 * A wind rose and its rhumbs. On a real chart these were laid out on a hidden
 * circle so the roses interlock; here they are given explicitly so the sea can
 * be left clear where the poem is busiest.
 */
export function renderRhumbNetwork(centres, radius, { winds = 16 } = {}) {
  return centres.map((centre, index) => {
    const lines = sectors(winds)
      .map((band, wind) => {
        const rank = wind % 4 === 0 ? "major" : wind % 2 === 0 ? "half" : "quarter";
        const to = polar(centre[0], centre[1], radius, band.start);
        return `<path class="rhumb rhumb--${rank}" d="M ${fixed(centre[0])} ${fixed(centre[1])} L ${fixed(to.x)} ${fixed(to.y)}"/>`;
      })
      .join("");
    return `<g class="rhumb-node" data-rose="${index}">${lines}</g>`;
  }).join("");
}

/**
 * The compass rose proper: a 16-point star with alternating long and short
 * rays, a ring of bearings, and a fleur marking north — the one piece of
 * decoration a working chart always carried.
 */
export function renderCompassRose(cx, cy, radius) {
  const points = sectors(16)
    .map((band, index) => {
      const long = index % 4 === 0;
      const half = index % 2 === 0;
      const reach = radius * (long ? 1 : half ? 0.66 : 0.44);
      const tip = polar(cx, cy, reach, band.start);
      const spread = long ? 7 : 5;
      const left = polar(cx, cy, radius * 0.13, band.start - spread);
      const right = polar(cx, cy, radius * 0.13, band.start + spread);
      const rank = long ? "cardinal" : half ? "half" : "quarter";
      return `<path class="rose-point rose-point--${rank}" d="M ${fixed(left.x)} ${fixed(left.y)} L ${fixed(tip.x)} ${fixed(tip.y)} L ${fixed(right.x)} ${fixed(right.y)} Z"/>`;
    })
    .join("");

  const bearings = sectors(32)
    .map(band => {
      const outer = polar(cx, cy, radius * 1.18, band.start);
      const inner = polar(cx, cy, radius * 1.1, band.start);
      return `<path class="rose-tick" d="M ${fixed(inner.x)} ${fixed(inner.y)} L ${fixed(outer.x)} ${fixed(outer.y)}"/>`;
    })
    .join("");

  return `<g class="compass-rose">
    <circle class="rose-ring" cx="${cx}" cy="${cy}" r="${fixed(radius * 1.1)}"/>
    <circle class="rose-ring rose-ring--inner" cx="${cx}" cy="${cy}" r="${fixed(radius * 0.13)}"/>
    ${bearings}
    <g class="rose-points">${points}</g>
    <path class="rose-north" d="M ${fixed(cx)} ${fixed(cy - radius * 1.02)} l ${fixed(radius * 0.09)} ${fixed(radius * 0.17)} l ${fixed(-radius * 0.09)} ${fixed(-radius * 0.05)} l ${fixed(-radius * 0.09)} ${fixed(radius * 0.05)} Z"/>
  </g>`;
}

/**
 * Hatching for the open sea, drawn as parallel rules that follow the coast at
 * a distance. An engraver would lay these by hand; here the coast path is
 * offered as a clip and the rules are generated across the whole plate.
 */
export function renderSeaHatch(width, height, { step = 26, angle = 0 } = {}) {
  const lines = [];
  const reach = Math.hypot(width, height);
  const radians = (angle * Math.PI) / 180;
  const dx = Math.sin(radians);
  const dy = Math.cos(radians);
  for (let offset = -reach; offset < reach; offset += step) {
    const x = width / 2 + offset * dy;
    const y = height / 2 - offset * dx;
    lines.push(`<path class="sea-rule" d="M ${fixed(x - dx * reach)} ${fixed(y - dy * reach)} L ${fixed(x + dx * reach)} ${fixed(y + dy * reach)}"/>`);
  }
  return lines.join("");
}
