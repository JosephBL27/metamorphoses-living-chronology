/*
 * Coverage check for the genealogical registry.
 *
 * Reports (a) episode cast names that resolve to no figure record, and
 * (b) `acts` keys that do not match a real episode title — the two ways this
 * dataset can silently drift out of alignment with the poem's own index.
 */

import { EPISODE_STUDY } from "../episode-study.js";
import { getFigure, figureAct, FIGURES, figureCount } from "../data/genealogy/index.js";

const flatten = value => String(value).replace(/[’‘]/g, "'").trim().toLowerCase();
const episodeTitles = new Set(Object.keys(EPISODE_STUDY).map(flatten));
const castNames = new Set();
Object.values(EPISODE_STUDY).forEach(entry => entry.cast.forEach(name => castNames.add(name)));

const unresolved = [...castNames].filter(name => !getFigure(name)).sort();

const strayActs = [];
FIGURES.forEach(figure => {
  Object.keys(figure.acts || {}).forEach(key => {
    if (!episodeTitles.has(flatten(key))) strayActs.push(`${figure.name} → "${key}"`);
  });
});

const withoutAct = [];
Object.entries(EPISODE_STUDY).forEach(([title, entry]) => {
  entry.cast.forEach(name => {
    if (getFigure(name) && figureAct(name, title)?.scope === "standing") {
      withoutAct.push(`${title} → ${name}`);
    }
  });
});

console.log(`figures: ${figureCount()}`);
console.log(`episodes: ${episodeTitles.size}`);
console.log(`distinct cast names: ${castNames.size}`);
console.log(`\nUNRESOLVED CAST NAMES (${unresolved.length}):`);
unresolved.forEach(name => console.log(`  ${name}`));
console.log(`\nSTRAY ACT KEYS (${strayActs.length}):`);
strayActs.forEach(entry => console.log(`  ${entry}`));
console.log(`\nRESOLVED BUT NO EPISODE-SPECIFIC ACT (${withoutAct.length}):`);
withoutAct.slice(0, 400).forEach(entry => console.log(`  ${entry}`));
