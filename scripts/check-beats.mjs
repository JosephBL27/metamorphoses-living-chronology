/*
 * Coverage check for the plain "what happens" register.
 *
 * Every episode in the poem must carry one, every list must name a change
 * where the episode contains one, and no list may exist for an episode that
 * does not. Run from the project root: node scripts/check-beats.mjs
 */
import { readFileSync } from "node:fs";
import { episodeBeats, beatsCount } from "../data/readings/index.js";
import { BEATS_I_V } from "../data/readings/beats-i-v.js";
import { BEATS_VI_X } from "../data/readings/beats-vi-x.js";
import { BEATS_XI_XV } from "../data/readings/beats-xi-xv.js";

const source = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const start = source.indexOf("const BOOKS = [");
const books = source.slice(start, source.indexOf("\n];", start));

const episodes = [];
for (const block of books.split("episodes: [").slice(1)) {
  const chunk = block.slice(0, block.indexOf("\n    ]"));
  for (const match of chunk.matchAll(/\n {6}\["((?:[^"\\]|\\.)*)",/g)) episodes.push(match[1]);
}

const normalize = value => String(value).replace(/[’‘]/g, "'").trim().toLowerCase();
const known = new Set(episodes.map(normalize));
const authored = [...Object.keys(BEATS_I_V), ...Object.keys(BEATS_VI_X), ...Object.keys(BEATS_XI_XV)];

const missing = episodes.filter(title => !episodeBeats(title));
const stray = authored.filter(key => !known.has(normalize(key)));
const total = episodes.reduce((sum, title) => sum + (episodeBeats(title)?.length || 0), 0);

// Episodes that genuinely contain no metamorphosis. Anything else without a
// marked change is a summary that has buried the thing the poem is named for.
const CHANGELESS = new Set([
  "Creation", "The Four Ages", "The Great Flood",
  "Phaethon at the Sun's palace", "The solar chariot",
  "Mars & Venus", "House of Fame"
].map(normalize));

const unmarked = episodes.filter(title => {
  if (CHANGELESS.has(normalize(title))) return false;
  return !(episodeBeats(title) || []).some(beat => beat.includes("**"));
});

console.log(`episodes: ${episodes.length}`);
console.log(`beat lists: ${beatsCount()}`);
console.log(`total beats: ${total} (avg ${(total / episodes.length).toFixed(1)} per episode)`);
console.log(`\nEPISODES WITHOUT BEATS (${missing.length}):`);
missing.forEach(title => console.log(`  - ${title}`));
console.log(`\nBEAT LISTS WITH NO EPISODE (${stray.length}):`);
stray.forEach(key => console.log(`  - ${key}`));
console.log(`\nTRANSFORMATION NOT MARKED (${unmarked.length}):`);
unmarked.forEach(title => console.log(`  - ${title}`));

const failed = missing.length + stray.length + unmarked.length;
if (failed) {
  console.error(`\nFAILED: ${failed} problem${failed === 1 ? "" : "s"}.`);
  process.exit(1);
}
console.log("\nOK");
