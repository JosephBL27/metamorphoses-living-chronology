/*
 * Expanded readings for every book and every episode.
 *
 * The episode registry keys are the poem's own episode titles. Those titles
 * contain typographic apostrophes; the readings are authored with plain ones,
 * so lookups run through a normalized index rather than a direct key match.
 */

import { BOOK_READINGS } from "./books.js";
import { EPISODE_READINGS_I_V } from "./episodes-i-v.js";
import { EPISODE_READINGS_V_VIII } from "./episodes-v-viii.js";
import { EPISODE_READINGS_IX_XII } from "./episodes-ix-xii.js";
import { EPISODE_READINGS_XIII_XV } from "./episodes-xiii-xv.js";
import { BOOK_COMMENTARY } from "./book-commentary.js";
import { COMMENTARY_I_V } from "./commentary-i-v.js";
import { COMMENTARY_V_X } from "./commentary-v-x.js";
import { COMMENTARY_XI_XV } from "./commentary-xi-xv.js";
import { BEATS_I_V } from "./beats-i-v.js";
import { BEATS_VI_X } from "./beats-vi-x.js";
import { BEATS_XI_XV } from "./beats-xi-xv.js";

export { BOOK_READINGS, BOOK_COMMENTARY };

const ALL_EPISODE_READINGS = {
  ...EPISODE_READINGS_I_V,
  ...EPISODE_READINGS_V_VIII,
  ...EPISODE_READINGS_IX_XII,
  ...EPISODE_READINGS_XIII_XV
};

const normalize = value => String(value).replace(/[’‘]/g, "'").trim().toLowerCase();

const INDEX = new Map(
  Object.entries(ALL_EPISODE_READINGS).map(([title, reading]) => [normalize(title), reading])
);

export function episodeReading(title) {
  return INDEX.get(normalize(title)) || null;
}

export function bookReading(bookId) {
  return BOOK_READINGS[bookId] || null;
}

const COMMENTARY_INDEX = new Map(
  Object.entries({ ...COMMENTARY_I_V, ...COMMENTARY_V_X, ...COMMENTARY_XI_XV })
    .map(([title, entry]) => [normalize(title), entry])
);

/** Sources, craft, and afterlife for an episode, where they have been written. */
export function episodeCommentary(title) {
  return COMMENTARY_INDEX.get(normalize(title)) || null;
}

export function bookCommentary(bookId) {
  return BOOK_COMMENTARY[bookId] || null;
}

/*
 * What happens, in order.
 *
 * The `reading` is an account of an episode; this is the episode. It exists
 * because the readings, however good, kept leaving the plot to inference — the
 * Lycaon entry never used the word wolf. Every list here names the change
 * outright, and `**double asterisks**` mark it so the interface can too.
 */
const BEATS_INDEX = new Map(
  Object.entries({ ...BEATS_I_V, ...BEATS_VI_X, ...BEATS_XI_XV })
    .map(([title, beats]) => [normalize(title), beats])
);

export function episodeBeats(title) {
  return BEATS_INDEX.get(normalize(title)) || null;
}

export function beatsCount() {
  return BEATS_INDEX.size;
}

export function readingCount() {
  return INDEX.size;
}

export function commentaryCount() {
  return COMMENTARY_INDEX.size;
}
