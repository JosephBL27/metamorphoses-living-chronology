---
name: Metamorphoses — A Living Chronology
description: A mythographic reading instrument modeled on a Renaissance astronomical volvelle.
colors:
  lapis-night: "#101D38"
  lapis-field: "#173A62"
  mineral-red: "#D85A42"
  sun-gold: "#F0B84B"
  verdigris: "#63A69F"
  vellum-white: "#F4ECDD"
  ink-black: "#16191D"
  fog-blue: "#B9CAD2"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.2rem, 7.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Avenir Next, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  hairline: "2px"
  control: "6px"
  panel: "14px"
  circle: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.mineral-red}"
    textColor: "{colors.vellum-white}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "{colors.lapis-field}"
    textColor: "{colors.vellum-white}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
---

# Design System: Metamorphoses — A Living Chronology

## Overview

**Creative North Star: "The Grand Ovidian Instrument"**

The interface behaves like a rare astronomical instrument designed to orient a reader inside mythic time. It combines the authoritative geometry of Renaissance scientific diagrams, public-domain Ovidian folios, bold mineral pigments, and the immediacy of a contemporary data interface. It refuses the category-standard beige literary museum page: lapis owns the field, diagrammatic rings carry navigation, and vellum appears as an active reading material rather than a generic background.

The production form is a **contained portal**, not a long article. The volvelle and current-book folio share one viewport; chronology, atlas, lexicon, method, and the whole-poem orbis occupy animated workspace layers reached from persistent navigation. Episode and theme rings open a reversible vellum focus folio in place, preserving both reading position and the wheel as spatial memory. On mobile that folio becomes a constrained, internally scrolling reading sheet while a crescent of the instrument remains visible above it.

**Key Characteristics:**

- Monumental concentric geometry used for real navigation
- One cinematic orbis workspace that opens from the wheel’s solar seal
- A dense scholar’s atlas with a manipulable, image-bearing relationship network and entity concordance
- One complete study apparatus for every episode: specific cast, place, motifs, terms, cultural thread, prompts, and continuity
- Dense labels disciplined by strong focus and progressive disclosure
- Mineral color fields with deliberate tonal wear, engraved linework, registration marks, celestial sparks, and fine grain
- A calm, high-contrast reading layer set against the active instrument
- Layered navigation with no page-length traversal between study modes

## Colors

The palette is a full set of named manuscript pigments on a deep lapis field.

### Primary

- **Lapis Night** (#101D38): dominant page field and global navigation.
- **Mineral Red** (#D85A42): current book, transformations, and primary actions.

### Secondary

- **Sun Gold** (#F0B84B): chronology anchors, focus rings, and selected facts.
- **Verdigris** (#63A69F): themes, continuity, and progress states.

### Neutral

- **Vellum White** (#F4ECDD): reading surfaces and primary text on dark fields.
- **Ink Black** (#16191D): text on vellum and diagram strokes.
- **Fog Blue** (#B9CAD2): secondary type and inactive geometry.

**The Pigment Field Rule.** Color belongs to whole diagram rings, bands, and states. It is never scattered as unrelated decorative accents.

## Typography

**Display Font:** Bodoni Moda (with Didot and Georgia fallbacks)  
**Body Font:** Manrope (with Avenir Next fallback)  
**Label Font:** Archivo Narrow (with Arial Narrow fallback)

**Character:** Display type is engraved and monumental; body copy is contemporary and quiet; narrow labels behave like catalog inscriptions around a scientific plate.

### Hierarchy

- **Display** (700, clamp(3.2rem, 7.4vw, 6rem), 0.86): first-view title and era numerals only.
- **Headline** (700, clamp(2rem, 4vw, 4rem), 0.98): book and section titles.
- **Title** (650, 1.15rem, 1.2): episode and entity names.
- **Body** (450, 1rem, 1.65): explanations, capped at 72ch.
- **Label** (700, 0.75rem, 0.12em, uppercase): controls, dates, and taxonomy.

**The Two-Scale Rule.** Each major composition pairs one monumental statement with small, exact inscriptions; avoid undifferentiated middle-sized type.

## Layout

Desktop uses a 12-column field with the volvelle occupying roughly 8 columns and a persistent reading console occupying 4. A fifteen-book rail closes the first viewport. The wheel diameter is constrained by both viewport height and column width so every ring remains visible. Chronology, orbis, atlas, lexicon, and method replace the instrument in the same bounded stage rather than accumulating down the page. Below 900px the instrument and folio divide the viewport vertically, persistent navigation moves to a bottom dock, and each workspace scrolls only within itself.

## Elevation & Depth

Depth comes from nested planes, inset rules, registered linework, and controlled shadows only where an object lifts for interaction. The volvelle uses inner shadows and crossing rings to feel assembled; content panels remain materially flat.

**The Instrument Rule.** Shadows imply a movable part or lifted sheet. Static information does not float.

## Shapes

Circles and arcs own navigation. Reading panels use lightly clipped 14px corners; controls use precise 6px corners; taxonomy marks and dividers remain squared. Hairline concentric strokes, not rounded cards, organize dense information.

## Components

### Buttons

- **Shape:** compact instrument tabs with 6px corners.
- **Primary:** mineral red with vellum text.
- **Hover / Focus:** slight lift and a 2px sun-gold focus outline.
- **Secondary:** lapis field with a fog-blue border.

### Chips

- **Style:** narrow inscribed labels with visible borders; never pill-shaped unless they sit on a circular track.
- **State:** selected chips fill with their semantic pigment and add a small registration notch.

### Cards / Containers

- **Corner Style:** 14px only for reading sheets; timeline rows and indexes use rules instead of card borders.
- **Background:** vellum for dense reading; lapis or translucent blue for navigation.
- **Shadow Strategy:** only active or lifted sheets cast a shadow.
- **Internal Padding:** 24–40px.

### Inputs / Fields

- **Style:** dark instrument wells with a fine fog-blue border.
- **Focus:** sun-gold border and ring; no glow.
- **Error / Disabled:** mineral red text for errors; reduced opacity plus explanatory text for disabled states.

### Navigation

Global navigation is a slim indexed rail. The active view is marked by a moving gold registration line and persistent text label, never color alone.

### Volvelle

The signature navigation component contains concentric era, book, episode, and theme rings. Turning, dragging, scrolling, keyboard arrows, or selecting an index all produce the same explicit current-book state. Every episode and theme segment is keyboard actionable and opens a focus folio with related figures, themes, terminology, and onward paths. Reduced motion snaps between states and workspace layers without choreography.

### Episode dossier

The focus folio is a working commentary leaf, not a synopsis modal. Its engraved plate, scene heading, metamorphic motion, episode-specific portrait cast, related lenses, motif register, terminology, classical thread, close-reading questions, and previous/next continuity form a single scrollable apparatus. The visual crops are explicitly labeled as an illustrative register rather than literal portraits.

### Illustrated atlas

The relationship graph uses native SVG clipping and image elements to set public-domain folio crops into book, episode, divine, mortal, and creature medallions. Pigment washes, category rings, fine orbital strokes, and labeled relations preserve legibility over spectacle. D3 owns only force, drag, zoom, and selection; GSAP animates entry opacity and scale without competing with D3’s positional transforms.

### Motion

Motion follows the mechanics of an instrument and the reveal of a manuscript: rings counter-turn, registration marks align, sheets enter along a physical edge, medallions resolve in sequence, and constellated ornaments drift almost imperceptibly. No animation blocks input. Reduced-motion mode removes ambient drift, network reveals, and sheet choreography while preserving every state change.

## Do's and Don'ts

### Do:

- **Do** use circles, arcs, registration marks, and engraved rules to expose relationships.
- **Do** keep reading text on quiet, high-contrast surfaces.
- **Do** make every approximate date visibly approximate.
- **Do** let one large interactive structure own the first viewport.

### Don't:

- **Don't** default the whole page to cream paper or generic bookish warmth.
- **Don't** reduce the design to a stack of rounded cards.
- **Don't** use ornamental classical columns, laurel clip art, or faux-marble chrome.
- **Don't** hide essential labels behind hover-only behavior.
- **Don't** use color as the only signal for era, state, or progress.

---

## Additions from the breadth overhaul

These are deliberate extensions of the system above, not drift. They are declared in `tokens.css`, which loads before `styles.css` and is the single home for the design tokens.

### Tonal ramps

The eight documented hues name the *identities* of the system; an engraved parchment surface additionally needs steps between them. Two ramps are declared:

- **Engraved gold** — `--engrave`, `--engrave-soft`, `--engrave-faint`, `--engrave-line`, `--engrave-star`. The linework scale on the dark plate: registration ticks, spokes, constellation strokes, and star fill. Never used for text.
- **Parchment ink** — `--parchment-ink` through `--parchment-ink-4`, plus `--parchment-gold-1` through `--parchment-gold-4` and `--parchment-gold-edge`. The reading surface's text scale, from body copy down to captions, and the warm golds used for small-cap labels on parchment. Every step in this ramp clears 4.5:1 on `--parchment` and `--parchment-bright`.

**The ramp rule.** A new literal colour is a bug. If a surface needs a tone that is not on a ramp, extend the ramp in `tokens.css` and say what the step is for.

### The catasterism ring

The outermost band is not decoration for its own sake. Each of the fifteen books carries a constellation the poem has a claim on, drawn as an engraved star diagram generated from normalized point data in `data/catasterisms.js`. Some are Ovid's own catasterisms (Callisto's Bear, Ariadne's Crown); where the link is associative rather than textual, the record says so. The band is content that happens to be ornament, which is why it is legible rather than atmospheric.

### Rendering layers

The instrument is built in three stacked groups, in this order:

1. **Ornament** — inert, `pointer-events: none`, `aria-hidden`. Generated once from parameters in `lib/ornament.js`: meridians, star field, catasterisms, plate rings.
2. **Wheel** — the data-driven era, book, episode, and theme bands, plus the registration ticks and spokes that must read *across* the coloured fills rather than under them.
3. **Sun** — the medallion and its motto ring, drawn last so nothing prints across the engraved face.

No ring hard-codes a path. Geometry lives in `lib/radial.js` as pure functions.

### Stemma

The genealogical workspace uses the same radial vocabulary at a different scale: concentric generation rings, elbow edges that run radially then along an arc, and a dashed vermilion mark on figures named in the open book. Charts are capped at three generations and seven children per node — an honest full rendering of Ovid's divine families is an unreadable starburst, so the diagram states what it omits (`+n more`) and the adjacent list carries everyone.

### Figure dossier

A parchment overlay, not a modal: it sits above every workspace, does not trap focus, and closes on Escape or on changing workspace. Names appear in three registers — Greek, Roman, and the moniker Ovid actually uses — because the poem's Latin names and the tradition's Greek ones are both things a reader arrives with.

**The register rule.** Wherever a figure is named at more than passing length, show at least the Greek and Latin registers beside the display name. A name in one language only is an incomplete record.

### Genealogy: rings are generations

The descent charts were rebuilt after a review found a founder, his daughters, and his grandsons on a single ring. Three rules now hold, and are enforced by tests:

1. **Ring index equals generation.** Descent is modelled as a directed acyclic graph — a child has two parents, and a figure reachable by two paths still occupies one ring — and every figure is ranked by longest path from the chart's roots (`lib/genealogy-layout.js`). Tree depth is not used, because it is not generation.
2. **A spouse sits beside their partner, never below them.** Marriage is a separate mark: a short vermilion tie along the ring, distinct from the gold elbow of descent.
3. **One node per figure.** Both parents' edges converge on it.

Nodes carry an engraved folio medallion rather than an empty disc, cropped by the same deterministic hash the console and the folio cast use, so a figure keeps the same face everywhere. Node and label sizes are expressed in chart units scaled by the plate's extent, so a six-generation chart puts the same number of screen pixels on a face as a two-generation one.

**The chart-honesty rule.** Where a chart omits or caps anything, it says so on the plate. Where Ovid records no descent, the chart is empty and the list carries the figures — a diagram must not invent a structure the poem does not supply.

### Curved ring labels

Episode and theme names ride `textPath` baselines on their own sector, which gives a label the arc of its band instead of the chord across it. Truncation is computed from the available arc rather than a fixed character count, and the flip decision that keeps text right-way-up uses the angle the reader will actually see — the instrument turns, so a label authored in the upper half can be read in the lower one.

Contrast over coloured bands comes from `paint-order: stroke fill` with a dark halo, not a drop shadow: it holds at any size and does not smear the serifs.
