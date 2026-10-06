/*
 * The gazetteer, assembled — plus the journeys.
 *
 * A map of dots answers "where is Thebes". It does not answer the question the
 * poem keeps asking, which is who went where and how far. Ovid's long stories
 * are nearly all itineraries: a girl driven from Argos to the Nile by a gadfly,
 * a fleet working west from a burnt city, a mother crossing the world with a
 * torch. Those routes are drawn as routes.
 */

import { GREEK_WORLD } from "./greek-world.js";
import { EAST_AND_AFRICA } from "./east-and-africa.js";
import { WEST, OTHERWORLD } from "./west-and-otherworld.js";
import { RIVERS, SEAS } from "./waters.js";

export const PLACES = [...GREEK_WORLD, ...EAST_AND_AFRICA, ...WEST, ...RIVERS, ...SEAS];
export { OTHERWORLD, SEAS };

const BY_NAME = new Map(PLACES.map(place => [place.name.toLowerCase(), place]));

export function getPlace(name) {
  return BY_NAME.get(String(name).toLowerCase()) || null;
}

/** Every place the given book touches, in the order the gazetteer holds them. */
export function placesForBook(bookId) {
  return PLACES.filter(place => place.books.includes(bookId));
}

/** Every place that names this figure — the inverse index the dossier needs. */
export function placesForFigure(name) {
  const wanted = String(name).toLowerCase();
  return PLACES.filter(place => place.figures.some(figure => figure.toLowerCase() === wanted));
}

/** Every place an episode is set in or passes through. */
export function placesForEpisode(title) {
  const wanted = String(title).replace(/[’‘]/g, "'").trim().toLowerCase();
  return PLACES.filter(place => place.episodes.some(
    episode => episode.replace(/[’‘]/g, "'").trim().toLowerCase() === wanted
  ));
}

/*
 * The poem's long movements.
 *
 * `legs` are gazetteer names in order. A journey is only listed where Ovid
 * actually traces the route rather than merely mentioning both ends — which is
 * why there is no journey for Perseus, whose flight is a list of places seen
 * from the air, and why Io's has the stations the text gives it.
 */
export const JOURNEYS = [
  {
    id: "io",
    name: "Io's wandering",
    book: 1,
    kind: "flight",
    what: "Driven from her father's river to the Nile by a gadfly Juno sent, in the body of a cow, unable to speak.",
    ends: "She kneels on the bank at Memphis, is given back her own shape, and becomes an Egyptian goddess.",
    legs: ["Argos", "Thrace", "Scythia", "Egypt & the Nile", "Memphis"]
  },
  {
    id: "europa",
    name: "The bull's crossing",
    book: 2,
    kind: "abduction",
    what: "Jupiter, in the shape of a white bull, walks into the shallows off Sidon with a king's daughter on his back and swims.",
    ends: "He comes ashore on Crete and drops the disguise. Her brother is sent after her and forbidden to come home without her.",
    legs: ["Phoenicia & Sidon", "Crete"]
  },
  {
    id: "cadmus",
    name: "Cadmus' search",
    book: 3,
    kind: "quest",
    what: "Sent to find a sister nobody can find, he asks Delphi where to stop instead, and is told to follow a cow.",
    ends: "He founds Thebes, and ends his life in Illyria as a serpent beside his wife.",
    legs: ["Phoenicia & Sidon", "Delphi", "Thebes", "Thrace"]
  },
  {
    id: "ceres",
    name: "Ceres' search",
    book: 5,
    kind: "quest",
    what: "The whole world crossed with torches lit at Etna, day and night, without eating, looking for a daughter.",
    ends: "Arethusa, who runs under the sea, tells her where Proserpina is — not lost, but a queen.",
    legs: ["Enna & the pool of Pergus", "Mount Etna", "Eleusis", "Syracuse & Ortygia", "Enna & the pool of Pergus"]
  },
  {
    id: "argo",
    name: "The Argo's voyage",
    book: 7,
    kind: "voyage",
    what: "Out to the far end of the Black Sea for a fleece, and back with a fleece and a sorceress.",
    ends: "Iolcus, where the sorceress boils an old ram into a lamb and persuades a king's daughters to butcher their father.",
    legs: ["Iolcus", "Troy", "Colchis & the Phasis", "Iolcus"]
  },
  {
    id: "medea",
    name: "Medea's flight",
    book: 7,
    kind: "flight",
    what: "A serpent chariot over Greece, and Ovid's catalogue of transformations she passes above without stopping for any of them.",
    ends: "Corinth, where two children die in one line, and then Athens, the one alliance she should not have made.",
    legs: ["Iolcus", "Thessaly & Tempe", "Corinth", "Athens"]
  },
  {
    id: "daedalus",
    name: "Daedalus and Icarus",
    book: 8,
    kind: "flight",
    what: "Two pairs of wings out of Crete, with one instruction: keep to the middle course, because low the sea soaks the feathers and high the sun melts the wax.",
    ends: "The father lands. The son is in the water that now carries his name, and the feathers are on the surface.",
    legs: ["Crete", "Naxos", "Chios"]
  },
  {
    id: "aeneas",
    name: "Aeneas' voyage",
    book: 13,
    kind: "voyage",
    what: "Out of a burning city with his father on his back and his household gods under his arm, west by stages.",
    ends: "Latium, a war, and a river that washes the mortal part of him away so the rest can be a god.",
    legs: ["Troy", "Delos", "Crete", "The strait of Scylla & Charybdis", "The Sicilian shore", "Caieta", "Cumae & Lake Avernus", "Latium"]
  },
  {
    id: "aesculapius",
    name: "The god who came to Rome",
    book: 15,
    kind: "voyage",
    what: "A Roman embassy sails to a Greek sanctuary for a cure and is given a serpent, which boards the ship itself.",
    ends: "The Tiber island, where the plague stops and a temple is built — the poem's last import before Rome starts making its own gods.",
    legs: ["Rome", "Delphi", "Epidaurus", "The Tiber & its island"]
  }
];

export function journeyLegs(journey) {
  return journey.legs.map(getPlace).filter(Boolean);
}

export function placeCount() {
  return PLACES.length;
}
