/*
 * The catasterism ring.
 *
 * The outermost band of the instrument is not decoration for its own sake:
 * each of the fifteen books carries a constellation the poem itself has a
 * claim on, drawn as an engraved star diagram. Star positions are normalized
 * to a 0–1 box and rendered parametrically, so the figures are data rather
 * than fifteen hand-drawn paths.
 *
 * `claim` states the connection honestly. Some are Ovid's own catasterisms
 * (Callisto's Bear, Ariadne's Crown); others are the constellation a Roman
 * reader would already associate with the book's material. Where the link is
 * associative rather than textual, the wording says so.
 */

export const CATASTERISMS = [
  {
    book: 1,
    name: "Virgo",
    latin: "Virgo",
    english: "The Maiden",
    figure: "Astraea",
    claim: "Justice, the last of the immortals to leave the blood-soaked earth at the end of the Iron Age, was identified in antiquity with the constellation of the Maiden.",
    stars: [[0.20, 0.30], [0.34, 0.42], [0.50, 0.32], [0.48, 0.54], [0.64, 0.44], [0.60, 0.74]],
    edges: [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [2, 4]]
  },
  {
    book: 2,
    name: "Ursa Major",
    latin: "Ursa Maior",
    english: "The Great Bear",
    figure: "Callisto",
    claim: "Ovid's own: Jupiter snatches Callisto and her son into the sky, and Juno persuades Ocean never to let the Bear bathe in his water — which is why it does not set.",
    stars: [[0.12, 0.30], [0.15, 0.48], [0.35, 0.54], [0.39, 0.38], [0.56, 0.34], [0.74, 0.30], [0.90, 0.40]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6]]
  },
  {
    book: 3,
    name: "Delphinus",
    latin: "Delphinus",
    english: "The Dolphin",
    figure: "The Tyrrhenian pirates",
    claim: "Ovid turns the crew that tried to sell Bacchus into dolphins; the constellation is the tradition's memorial for a dolphin's service to a god.",
    stars: [[0.36, 0.28], [0.52, 0.22], [0.60, 0.38], [0.44, 0.46], [0.22, 0.64]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4]]
  },
  {
    book: 4,
    name: "Perseus",
    latin: "Perseus",
    english: "The Champion",
    figure: "Perseus",
    claim: "The hero of the book's last movement stands in the northern sky beside Andromeda, Cepheus, and Cassiopeia — the whole Ethiopian family placed together.",
    stars: [[0.48, 0.16], [0.46, 0.38], [0.30, 0.62], [0.66, 0.32], [0.70, 0.60], [0.34, 0.24]],
    edges: [[0, 1], [1, 2], [1, 3], [3, 4], [0, 5], [5, 1]]
  },
  {
    book: 5,
    name: "Pegasus",
    latin: "Pegasus",
    english: "The Winged Horse",
    figure: "Pegasus",
    claim: "Born from Medusa's blood and named in this book as the horse whose hoof opened the Muses' spring on Helicon, where the whole contest of song takes place.",
    stars: [[0.26, 0.28], [0.68, 0.24], [0.72, 0.66], [0.30, 0.70], [0.10, 0.50], [0.04, 0.68]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5]]
  },
  {
    book: 6,
    name: "Aquila",
    latin: "Aquila",
    english: "The Eagle",
    figure: "Jupiter's eagle",
    claim: "The eagle is one of the twenty-one divine disguises Arachne weaves into her cloth; the constellation is the same bird, and the association is Roman rather than Ovidian.",
    stars: [[0.50, 0.40], [0.38, 0.32], [0.62, 0.48], [0.18, 0.56], [0.82, 0.26], [0.52, 0.74]],
    edges: [[1, 0], [0, 2], [1, 3], [1, 4], [0, 5]]
  },
  {
    book: 7,
    name: "Draco",
    latin: "Draco",
    english: "The Dragon",
    figure: "The sleepless dragon",
    claim: "The Colchian serpent that never slept, and the winged team that carries Medea over Greece; the celestial Dragon coils around the pole in the same posture.",
    stars: [[0.08, 0.72], [0.22, 0.60], [0.34, 0.68], [0.48, 0.52], [0.62, 0.58], [0.74, 0.40], [0.86, 0.44], [0.92, 0.26]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 5]]
  },
  {
    book: 8,
    name: "Corona Borealis",
    latin: "Corona Borealis",
    english: "The Northern Crown",
    figure: "Ariadne",
    claim: "Ovid's own: Bacchus takes the diadem from Ariadne's forehead and throws it into the sky, where the jewels stop and stay as fixed fires.",
    stars: [[0.18, 0.60], [0.28, 0.44], [0.40, 0.34], [0.53, 0.32], [0.66, 0.40], [0.76, 0.52], [0.82, 0.66]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]
  },
  {
    book: 9,
    name: "Hercules",
    latin: "Hercules",
    english: "The Kneeling Man",
    figure: "Hercules",
    claim: "The book's central apotheosis: what could not burn on Oeta went up, and the constellation is where the tradition put it.",
    stars: [[0.36, 0.36], [0.56, 0.32], [0.62, 0.52], [0.40, 0.56], [0.22, 0.20], [0.74, 0.18], [0.30, 0.80], [0.68, 0.82]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 5], [3, 6], [2, 7]]
  },
  {
    book: 10,
    name: "Sagitta",
    latin: "Sagitta",
    english: "The Arrow",
    figure: "Cupid's arrow",
    claim: "The book turns on a single graze: Cupid's arrow catches his mother while she kisses him, and everything after it — Adonis, Myrrha, Atalanta — follows from that wound.",
    stars: [[0.16, 0.58], [0.40, 0.48], [0.62, 0.40], [0.84, 0.32], [0.12, 0.44], [0.22, 0.70]],
    edges: [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5]]
  },
  {
    book: 11,
    name: "Lyra",
    latin: "Lyra",
    english: "The Lyre",
    figure: "Orpheus",
    claim: "The instrument that stopped the Underworld floats down the Hebrus still sounding; the constellation is the lyre itself, set in the sky after the singer's death.",
    stars: [[0.28, 0.16], [0.44, 0.40], [0.64, 0.44], [0.56, 0.74], [0.36, 0.68]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]]
  },
  {
    book: 12,
    name: "Sagittarius",
    latin: "Sagittarius",
    english: "The Archer",
    figure: "The Centaurs",
    claim: "The book's great set piece is a war between Lapiths and centaurs; the Archer is the sky's centaur, and the association is traditional rather than Ovid's own.",
    stars: [[0.20, 0.46], [0.34, 0.30], [0.50, 0.36], [0.62, 0.24], [0.74, 0.42], [0.62, 0.58], [0.38, 0.60], [0.24, 0.64]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [2, 5]]
  },
  {
    book: 13,
    name: "Canis Major",
    latin: "Canis Maior",
    english: "The Great Dog",
    figure: "Hecuba",
    claim: "The queen of Troy ends the book barking on a Thracian headland; the Dog is the sky's animal of the same name, and Roman readers made the link.",
    stars: [[0.34, 0.28], [0.24, 0.52], [0.46, 0.56], [0.58, 0.72], [0.72, 0.58], [0.52, 0.40]],
    edges: [[0, 5], [5, 1], [5, 2], [2, 3], [3, 4], [4, 5]]
  },
  {
    book: 14,
    name: "Ara",
    latin: "Ara",
    english: "The Altar",
    figure: "Aeneas Indiges",
    claim: "The book in which three mortals are given altars — Aeneas as Indiges, Romulus as Quirinus, Hersilia as Hora; the Altar is the sky's own place of cult.",
    stars: [[0.28, 0.34], [0.72, 0.34], [0.34, 0.52], [0.66, 0.52], [0.28, 0.70], [0.72, 0.70]],
    edges: [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]]
  },
  {
    book: 15,
    name: "Ophiuchus",
    latin: "Ophiuchus / Serpentarius",
    english: "The Serpent-Bearer",
    figure: "Aesculapius",
    claim: "The god who sails up the Tiber as a crested serpent is the same figure the sky holds with a snake in both hands — the poem's last transformation before Rome's own.",
    stars: [[0.50, 0.14], [0.34, 0.34], [0.66, 0.34], [0.32, 0.68], [0.68, 0.68], [0.08, 0.48], [0.92, 0.48]],
    edges: [[0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 6], [1, 2]]
  }
];

export function catasterismFor(bookId) {
  return CATASTERISMS.find(entry => entry.book === bookId) || null;
}
