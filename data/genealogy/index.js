/*
 * Genealogical registry for the Metamorphoses.
 *
 * Every figure record carries four layers of information:
 *
 *   1. NAMES        — the Greek name, the Roman name, and the moniker or
 *                     epithet Ovid actually uses in the poem. Ovid writes in
 *                     Latin and almost always uses the Roman name, so the
 *                     Greek register is supplied for readers coming from
 *                     Homer, the tragedians, or Apollodorus.
 *   2. DESCENT      — house, father, mother, siblings, consorts, children.
 *                     Ancient genealogy is contested; where a parentage is
 *                     disputed the record says so rather than choosing
 *                     silently.
 *   3. WHO THEY ARE — a standing identity, independent of any one episode.
 *   4. WHAT THEY DO — `acts`, keyed by episode title, and `bookActs`, keyed
 *                     by book number. This is the figure's function *here*,
 *                     which is frequently at odds with who they are elsewhere.
 *
 * Records that describe groups, forces, places, or objects use the same
 * shape with `kind` set accordingly and descent fields omitted.
 */

import { COSMIC_FIGURES } from "./cosmic.js";
import { EARLY_LINES } from "./lines-early.js";
import { HEROIC_LINES } from "./lines-heroic.js";
import { LATE_LINES } from "./lines-late.js";
import { COLLECTIVES } from "./collectives.js";

export const HOUSES = [
  {
    id: "primordial",
    name: "The primordial succession",
    latin: "Prima Stirps",
    root: "Earth",
    books: [1, 2],
    note: "Chaos, Earth, and the Titan generations out of which the Olympian order is seized."
  },
  {
    id: "olympian",
    name: "The Olympian house",
    latin: "Domus Olympia",
    root: "Saturn",
    books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    note: "Saturn's children and their offspring: the ruling divine family of the whole poem."
  },
  {
    id: "sun",
    name: "The house of the Sun",
    latin: "Domus Solis",
    root: "Hyperion",
    books: [2, 4, 7, 14],
    note: "Sol and his mortal and immortal children — Phaethon, the Heliades, Aeetes, Circe, Pasiphaë."
  },
  {
    id: "inachus",
    name: "The line of Inachus",
    latin: "Stirps Inachia",
    root: "Inachus",
    books: [1, 2, 4, 5],
    note: "Argos and Egypt: Io, Epaphus, and the descent that reaches Danaë and Perseus."
  },
  {
    id: "agenor",
    name: "The house of Agenor",
    latin: "Domus Agenoris",
    root: "Agenor",
    books: [2, 3, 4],
    note: "The Phoenician line: Europa carried to Crete, Cadmus founding Thebes."
  },
  {
    id: "cadmus",
    name: "The house of Cadmus",
    latin: "Domus Cadmi",
    root: "Cadmus",
    books: [3, 4],
    note: "Thebes: Autonoe, Ino, Semele, Agave, and the grandsons destroyed by divinity."
  },
  {
    id: "cecrops",
    name: "The Athenian kings",
    latin: "Reges Attici",
    root: "Cecrops",
    books: [2, 6, 7, 8, 15],
    note: "Athens from Cecrops through Pandion, Erechtheus, Aegeus, and Theseus."
  },
  {
    id: "deucalion",
    name: "The renewed human race",
    latin: "Genus Renatum",
    root: "Prometheus",
    books: [1, 7, 11],
    note: "Deucalion and Pyrrha, and the Aeolid and Hellenic families descended from them."
  },
  {
    id: "tantalus",
    name: "The house of Tantalus",
    latin: "Domus Tantali",
    root: "Tantalus",
    books: [6, 12, 13],
    note: "Pelops and Niobe, and the Atreid commanders who take the fleet to Troy."
  },
  {
    id: "minos",
    name: "The Cretan house",
    latin: "Domus Minois",
    root: "Europa",
    books: [7, 8],
    note: "Minos, Pasiphaë, the Minotaur, Ariadne, and Phaedra."
  },
  {
    id: "aeacus",
    name: "The Aeacids",
    latin: "Aeacidae",
    root: "Aeacus",
    books: [7, 8, 11, 12, 13],
    note: "Aegina to Achilles: Peleus, Telamon, Ajax, and Neoptolemus."
  },
  {
    id: "calydon",
    name: "The house of Calydon",
    latin: "Domus Oenei",
    root: "Oeneus",
    books: [8, 9],
    note: "Oeneus, Althaea, Meleager, and Deianira."
  },
  {
    id: "cyprus",
    name: "The Cyprian line",
    latin: "Stirps Cypria",
    root: "Pygmalion",
    books: [10],
    note: "Pygmalion's ivory bride through Cinyras, Myrrha, and Adonis."
  },
  {
    id: "troy",
    name: "The Trojan house",
    latin: "Domus Priami",
    root: "Laomedon",
    books: [11, 12, 13, 14, 15],
    note: "Laomedon and Priam, then Aeneas and the line that becomes Rome."
  },
  {
    id: "rome",
    name: "The Roman succession",
    latin: "Successio Romana",
    root: "Aeneas",
    books: [14, 15],
    note: "Ascanius through the Alban kings to Romulus, Numa, Caesar, and Augustus."
  }
];

const ALL = [
  ...COSMIC_FIGURES,
  ...EARLY_LINES,
  ...HEROIC_LINES,
  ...LATE_LINES,
  ...COLLECTIVES
];

/** Strip honorifics, alternates, and typographic noise so lookups are stable. */
export function normalizeFigureName(value = "") {
  return String(value)
    .replace(/[’‘]/g, "'")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Episode titles in the study registry use typographic apostrophes; act keys
 * are authored with plain ones. Match on a normalized key so the two indexes
 * cannot drift apart over a punctuation character.
 */
function normalizeEpisodeKey(value = "") {
  return String(value).replace(/[’‘]/g, "'").trim().toLowerCase();
}

const REGISTRY = new Map();
const ALIASES = new Map();

ALL.forEach(figure => {
  const key = normalizeFigureName(figure.name);
  if (REGISTRY.has(key)) {
    // Later files never silently overwrite earlier ones; merge acts instead.
    const existing = REGISTRY.get(key);
    existing.acts = { ...existing.acts, ...figure.acts };
    existing.bookActs = { ...existing.bookActs, ...figure.bookActs };
    return;
  }
  figure.actIndex = new Map(
    Object.entries(figure.acts || {}).map(([episode, text]) => [normalizeEpisodeKey(episode), text])
  );
  REGISTRY.set(key, figure);
});

ALL.forEach(figure => {
  const canonical = normalizeFigureName(figure.name);
  const names = [figure.name, ...(figure.aliases || [])];
  names.forEach(alias => {
    const key = normalizeFigureName(alias);
    if (!ALIASES.has(key)) ALIASES.set(key, canonical);
    // "Jupiter / Jove" also resolves through each half.
    alias.split(/\s*\/\s*/).forEach(part => {
      const partKey = normalizeFigureName(part);
      if (partKey && !ALIASES.has(partKey)) ALIASES.set(partKey, canonical);
    });
  });
});

export const FIGURES = ALL;

export function getFigure(name) {
  if (!name) return null;
  const key = normalizeFigureName(name);
  const canonical = ALIASES.get(key) || key;
  return REGISTRY.get(canonical) || null;
}

export function hasFigure(name) {
  return Boolean(getFigure(name));
}

/**
 * What this figure is doing in the requested episode — falling back to the
 * book-level function, then to a general statement of identity.
 */
export function figureAct(name, episodeTitle, bookId) {
  const figure = getFigure(name);
  if (!figure) return null;
  const episodeText = episodeTitle && figure.actIndex?.get(normalizeEpisodeKey(episodeTitle));
  if (episodeText) return { text: episodeText, scope: "episode" };
  if (bookId && figure.bookActs?.[bookId]) {
    return { text: figure.bookActs[bookId], scope: "book" };
  }
  return { text: figure.who, scope: "standing" };
}

/** Episodes in which this figure has an authored function, in poem order. */
export function actEpisodes(name) {
  const figure = getFigure(name);
  return figure ? Object.keys(figure.acts || {}) : [];
}

/** Parents that actually resolve to registry records, for tree building. */
function resolvedParents(figure) {
  return [figure.father, figure.mother]
    .filter(Boolean)
    .map(parent => getFigure(parent))
    .filter(Boolean);
}

const CHILD_INDEX = new Map();
ALL.forEach(figure => {
  resolvedParents(figure).forEach(parent => {
    const key = normalizeFigureName(parent.name);
    if (!CHILD_INDEX.has(key)) CHILD_INDEX.set(key, new Set());
    CHILD_INDEX.get(key).add(normalizeFigureName(figure.name));
  });
});

export function childrenOf(name) {
  const figure = getFigure(name);
  if (!figure) return [];
  const keys = CHILD_INDEX.get(normalizeFigureName(figure.name));
  if (!keys) return [];
  return [...keys].map(key => REGISTRY.get(key)).filter(Boolean);
}

/**
 * Build a descent tree from a root figure. `depth` bounds recursion so a
 * house that loops back on itself (Ovid's genealogies frequently do) cannot
 * produce an infinite structure.
 */
export function descentTree(rootName, { depth = 4, bookId = null, seen = null } = {}) {
  const figure = getFigure(rootName);
  if (!figure) return null;
  // One shared visited set for the whole build, not one per branch. A figure
  // with two recorded parents (Phaethon has both Sol and Clymene here) would
  // otherwise be drawn once under each of them.
  const visited = seen || new Set();
  const key = normalizeFigureName(figure.name);
  if (visited.has(key) || depth < 0) {
    return { figure, children: [], repeated: visited.has(key) };
  }
  visited.add(key);
  const children = childrenOf(figure.name)
    .filter(child => (bookId ? !child.books || child.books.includes(bookId) : true))
    .map(child => descentTree(child.name, { depth: depth - 1, bookId, seen: visited }))
    .filter(entry => entry && !entry.repeated);
  return { figure, children, repeated: false };
}

export function housesForBook(bookId) {
  return HOUSES.filter(house => house.books.includes(bookId));
}

/** Figures named in a book, ordered so principals precede supporting cast. */
export function figuresForBook(bookId) {
  return ALL
    .filter(figure => figure.books?.includes(bookId))
    .sort((a, b) => (a.prominence || 3) - (b.prominence || 3) || a.name.localeCompare(b.name));
}

/** Every episode in which a figure is given something explicit to do. */
export function appearances(name) {
  const figure = getFigure(name);
  if (!figure) return [];
  return Object.entries(figure.acts || {}).map(([episode, text]) => ({ episode, text }));
}

export function figureCount() {
  return REGISTRY.size;
}
