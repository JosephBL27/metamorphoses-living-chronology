/*
 * The gazetteer, part three: Italy, Sicily, the west — and the poem's places
 * that are not on any coast.
 *
 * OTHERWORLD entries carry no `at`. They are not plotted, because plotting the
 * House of Sleep at a longitude would be a lie the rest of the chart has spent
 * its effort not telling. A mappa mundi solved the same problem the same way:
 * what is real is drawn, and what is beyond the world is written in the margin.
 */

export const WEST = [
  {
    name: "Rome", greek: "Rhômê (Ῥώμη)", roman: "Roma", kind: "city",
    at: [12.48, 41.89],
    what: "Where the poem arrives: a plague ended by a foreign snake, a dictator turned into a comet, and a poet claiming he will outlast both.",
    culture: "The whole fifteen books bend toward this point. Ovid's Rome is a city that imports its gods — Aesculapius sails up the Tiber as a serpent — and then makes one of its own out of a murdered politician. He puts his own survival in the same sentence and lets the comparison stand.",
    books: [14, 15], episodes: ["Romulus & Hersilia", "Aesculapius comes to Rome", "Julius Caesar", "Ovid's epilogue", "Tages & Cipus"],
    figures: ["Romulus", "Hersilia", "Julius Caesar", "Augustus", "Aesculapius", "Cipus", "Venus", "Jupiter"]
  },
  {
    name: "Latium", greek: "Latínê (Λατίνη)", roman: "Latium", kind: "region",
    at: [12.90, 41.60],
    extent: [[12.1, 41.1], [14.1, 42.3]],
    what: "Picus and Canens' country, Pomona's orchard, and the ground Aeneas had to fight Turnus for.",
    culture: "The plain Rome grew out of, and in Ovid a place of small local gods rather than Olympians — a king who becomes a woodpecker, a wife who sings herself into air, a nymph who cares only about grafting fruit trees. Roman religion at its oldest and least imperial.",
    books: [14], episodes: ["Picus, Canens & Circe", "Vertumnus & Pomona", "Aeneas' apotheosis", "Diomedes in Italy"],
    figures: ["Picus", "Canens", "Circe", "Pomona", "Vertumnus", "Aeneas", "Turnus"]
  },
  {
    name: "Ardea", greek: "Ardéa (Ἀρδέα)", roman: "Ardea", kind: "city",
    at: [12.55, 41.61],
    what: "Turnus' capital, burned to the ground — and out of its ashes rose a heron that took the city's name.",
    culture: "A Rutulian town that really existed and really declined. Ovid turns the decline into a metamorphosis: the bird beats the ruins with its wings, and *ardea* is still the Latin word for heron.",
    books: [14], episodes: ["Aeneas' apotheosis"],
    figures: ["Turnus", "Aeneas"]
  },
  {
    name: "Cumae & Lake Avernus", greek: "Kýmê (Κύμη)", roman: "Cumae", kind: "oracle",
    at: [14.05, 40.85],
    what: "The Sibyl's cave and the entrance to the underworld Aeneas went down through and came back up.",
    culture: "Italy's oldest Greek colony and its most famous oracle. The Sibyl's own story is Ovid's sharpest study in wishing badly: she asked Apollo for as many years as there were grains in a handful of dust, and forgot to ask that they be young ones.",
    books: [14], episodes: ["Cumaean Sibyl", "Achaemenides & Macareus"],
    figures: ["Aeneas", "Apollo", "Anchises"]
  },
  {
    name: "Circe's Aeaea", greek: "Aiaíê (Αἰαίη)", roman: "Circaeum", kind: "region",
    at: [13.09, 41.24],
    extent: [[12.85, 41.05], [13.35, 41.45]],
    what: "The headland where Circe kept her herbs, turned Ulysses' men into pigs, and ruined three lives out of jealousy.",
    culture: "Ovid relocates Homer's floating island to a real Italian promontory — Monte Circeo, visible from the coast road south of Rome. Everything that goes wrong in Book XIV goes through this woman: Scylla's dogs, Picus' feathers, and a crew who kept their minds inside pigs.",
    books: [14], episodes: ["Glaucus, Scylla & Circe", "Achaemenides & Macareus", "Picus, Canens & Circe"],
    figures: ["Circe", "Glaucus", "Scylla", "Picus", "Canens", "Ulysses", "Macareus"]
  },
  {
    name: "Caieta", greek: "Kaiếtê (Καιήτη)", roman: "Caieta", kind: "city",
    at: [13.57, 41.21],
    what: "The harbour where Aeneas buried his nurse, and where a Greek marooned by Ulysses joined a Trojan fleet.",
    culture: "A small port with a large irony attached: Achaemenides, abandoned in the Cyclops' cave by his own Greek captain, is picked up and treated decently by the Trojans he had come to destroy.",
    books: [14], episodes: ["Achaemenides & Macareus"],
    figures: ["Aeneas", "Achaemenides", "Macareus", "Ulysses"]
  },
  {
    name: "Pithecusae", greek: "Pithêkoûsai (Πιθηκοῦσαι)", roman: "Pithecusae", kind: "island",
    at: [13.90, 40.73],
    what: "Monkey Island — where Jupiter turned a race of habitual liars into apes and left them able to gesture but not speak.",
    culture: "Ischia, in the bay of Naples, and one of the first Greek settlements in Italy. Ovid takes the name at face value and builds an aetiology for it: the Cercopes cheated with their mouths, so their mouths were the thing taken away.",
    books: [14], episodes: ["Cercopes"],
    figures: ["Jupiter"]
  },
  {
    name: "Croton", greek: "Krótôn (Κρότων)", roman: "Croton", kind: "city",
    at: [17.13, 39.08],
    what: "The southern Italian city Myscelus founded on a dream, and where Numa heard Pythagoras explain that nothing keeps its form.",
    culture: "A real Greek colony famous for athletes, doctors, and for hosting Pythagoras' school. Ovid gives it the poem's thesis statement: everything flows, cities and bodies and species alike, and only change itself does not change.",
    books: [15], episodes: ["Myscelus & Croton", "Pythagoras"],
    figures: ["Pythagoras", "Myscelus", "Numa", "Hercules"]
  },
  {
    name: "Apulia", greek: "Apoulía (Ἀπουλία)", roman: "Apulia", kind: "region",
    at: [16.60, 41.10],
    extent: [[15.4, 39.7], [18.6, 42.1]],
    what: "Where Diomedes settled after Troy and refused to fight another Trojan, having learned what wounding Venus costs.",
    culture: "The heel of Italy, and a place Greek veterans really were said to have settled. Diomedes' companions, who insulted Venus once too often, became quiet white seabirds still seen on that coast.",
    books: [14], episodes: ["Diomedes in Italy"],
    figures: ["Diomedes", "Venus", "Turnus"]
  },
  {
    name: "Mount Etna", greek: "Aítnê (Αἴτνη)", roman: "Aetna", kind: "mountain",
    at: [14.99, 37.75],
    what: "The volcano pinning Typhoeus down, whose thrashing brought Pluto up to inspect the island — and to see Proserpina.",
    culture: "Ceres lit her searching torches here. Ovid's geology is mythological and exact: the giant under the mountain shifts, Sicily shakes, the king of the dead comes up to check his roof, and a girl picking violets is taken because of it.",
    books: [5, 13, 14], episodes: ["Pluto & Proserpina", "Galatea, Acis & Polyphemus"],
    figures: ["Ceres", "Pluto", "Proserpina", "Polyphemus", "Typhoeus"]
  },
  {
    name: "Enna & the pool of Pergus", greek: "Énna (Ἔννα)", roman: "Henna", kind: "city",
    at: [14.28, 37.57],
    what: "The wood by the lake where Proserpina was picking flowers when the ground opened.",
    culture: "The centre of Sicily and the centre of its Ceres cult. Ovid's detail is the one everyone remembers: she cried for her mother and for the flowers spilling out of her loosened tunic in the same breath, and he says the loss of the flowers was a child's grief.",
    books: [5], episodes: ["Pluto & Proserpina", "Cyane & Ascalaphus"],
    figures: ["Proserpina", "Pluto", "Ceres", "Cyane"]
  },
  {
    name: "Syracuse & Ortygia", greek: "Syrákousai (Συράκουσαι)", roman: "Syracusae", kind: "city",
    at: [15.29, 37.07],
    what: "Where Arethusa surfaces after running under the sea from Greece, and where she tells Ceres what she saw below.",
    culture: "Sicily's great city, whose harbour island really has a freshwater spring — which the ancients explained by having the Peloponnesian river Alpheus run beneath the Mediterranean to reach it. Ovid makes the spring a witness: she went underground, so she saw Proserpina crowned.",
    books: [5], episodes: ["Arethusa & Alpheus", "Cyane & Ascalaphus"],
    figures: ["Arethusa", "Alpheus", "Ceres", "Proserpina", "Diana"]
  },
  {
    name: "The Sicilian shore", greek: "Sikelía (Σικελία)", roman: "Sicilia", kind: "region",
    at: [13.36, 38.12],
    extent: [[12.3, 36.5], [15.7, 38.4]],
    what: "Where Polyphemus sang his courtship from a headland and then threw a piece of the mountain at his rival.",
    culture: "The Cyclops in love, combing his hair with a rake and trimming his beard with a scythe — Ovid at his most comic, immediately before he is at his most brutal. Galatea's answer to the murder is to turn her lover's blood into a river that is still running.",
    books: [13, 14], episodes: ["Galatea, Acis & Polyphemus"],
    figures: ["Galatea", "Acis", "Polyphemus"]
  },

  /* ------------------------------------------------- Latium's smaller places */
  {
    name: "Alba Longa", greek: "Álba (Ἄλβα)", roman: "Alba Longa", kind: "city",
    at: [12.65, 41.75],
    what: "The town Ascanius founded, and the seat of the fourteen kings Ovid runs through in twenty lines to get from Aeneas to Romulus.",
    culture: "Rome's mother city in the official story, and in the poem a piece of throat-clearing done at speed: Ovid lists the Alban kings the way a genealogy is recited before the interesting part, pausing only for the ones who turn into something. It is where Roman legend keeps the centuries it cannot fill.",
    books: [14, 15], episodes: ["Aeneas' apotheosis", "Romulus & Hersilia", "Egeria & Hippolytus"],
    figures: ["Ascanius", "Romulus", "Numa", "Aeneas"]
  },
  {
    name: "Aricia & the grove of Diana", greek: "Arikía (Ἀρικία)", roman: "Aricia", kind: "grove",
    at: [12.67, 41.72],
    what: "The lake and wood where a nymph would not stop crying for her husband until Diana dissolved her into a spring.",
    culture: "A real cult site on the Alban hills — Diana's grove by the lake the Romans called the goddess' mirror, staffed by a priest who held office until someone killed him. Ovid puts two of the poem's last transformations here: Hippolytus, torn apart in Greece and reassembled in Italy as the minor god Virbius, and Egeria, who becomes the water.",
    books: [15], episodes: ["Egeria & Hippolytus"],
    figures: ["Egeria", "Hippolytus", "Numa", "Diana"]
  },
  {
    name: "Etruria & Tarquinii", greek: "Tyrsēnía (Τυρσηνία)", roman: "Etruria", kind: "region",
    at: [11.76, 42.25],
    extent: [[10.6, 41.6], [12.4, 43.9]],
    what: "The country north of the Tiber where a ploughman turned up a furrow and a full-grown boy climbed out of it teaching prophecy.",
    culture: "Rome's teacher in everything to do with reading the future — entrails, lightning, the fate of cities. Ovid's Tages is the only figure in the poem born out of a field, and what he brings is a technology: the discipline the Etruscans sold to Rome and Rome never quite trusted.",
    books: [3, 14, 15], episodes: ["Tages & Cipus", "Tyrrhenian pirates"],
    figures: ["Tages", "Cipus", "Bacchus", "Acoetes"]
  },
  {
    name: "Zancle", greek: "Zánklê (Ζάγκλη)", roman: "Messana", kind: "city",
    at: [15.55, 38.19],
    what: "The sickle-shaped harbour on the Sicilian side of the strait, in sight of both the whirlpool and the dogs.",
    culture: "Messina, whose Greek name means the sickle its harbour makes. Ovid uses it as the fixed point from which the strait's two horrors are measured, and it is where Ulysses' fleet and Aeneas' fleet pass through the same water a decade apart with entirely different results.",
    books: [13, 14], episodes: ["Glaucus", "Glaucus, Scylla & Circe", "Achaemenides & Macareus"],
    figures: ["Scylla", "Ulysses", "Aeneas", "Achaemenides"]
  },
  {
    name: "Liguria", greek: "Ligystikế (Λιγυστική)", roman: "Liguria", kind: "region",
    at: [8.60, 44.40],
    extent: [[7.5, 43.8], [10.0, 45.0]],
    what: "Cycnus' kingdom, which he walked out of to mourn a cousin on a riverbank until he was a swan.",
    culture: "The coast at the top of Italy, and the poem's quietest abdication: a king leaves his cities and his people, goes to sit by the water where a boy fell out of the sky, and thins into a bird that keeps out of the air. Ovid says plainly why the swan stays low — it remembers the fire.",
    books: [2], episodes: ["The Heliades & Cycnus"],
    figures: ["Cycnus", "Phaethon", "Sol"]
  },
  {
    name: "The Apennines", greek: "Apénnina (Ἀπέννινα)", roman: "Apenninus", kind: "mountain",
    at: [13.10, 42.47],
    what: "Italy's spine, listed among the peaks that caught when the sun's chariot came down too close.",
    culture: "The range that runs the whole length of the peninsula and decides where Italians can farm. Ovid names it in the burning catalogue with the Alps beside it, so the fire that ruins Africa is shown reaching Rome's own country too — the disaster is not somewhere else.",
    books: [2], episodes: ["The solar chariot"],
    figures: ["Phaethon", "Sol"]
  },
  {
    name: "The Alps", greek: "Álpeis (Ἄλπεις)", roman: "Alpes", kind: "mountain",
    at: [10.30, 46.20],
    what: "The cloud-topped wall at the top of the world, burning with the rest of it.",
    culture: "Rome's northern rampart and the barrier every invasion of Italy is measured against. In the poem they are one item in the list of mountains that took fire, which is the catalogue's whole rhetorical point: when the sky burns, the things that were supposed to be permanent are the ones named.",
    books: [2], episodes: ["The solar chariot"],
    figures: ["Phaethon", "Sol"]
  }
];

/*
 * The poem's places that are nowhere.
 *
 * Kept off the chart on purpose. A map that plots the House of Rumour at a
 * coordinate is claiming something the poem does not, and the honest
 * alternative is the one the medieval cartographers used: draw the world, and
 * write what lies outside it around the edge.
 */
export const OTHERWORLD = [
  {
    name: "Chaos", greek: "Cháos (Χάος)", roman: "Chaos", kind: "otherworld",
    what: "The rough unsorted mass before anything had an edge — no sun, no shore, no element holding its shape.",
    culture: "Ovid defines it almost entirely by negation, listing what was not yet there. It is the poem's zero point, and the Flood is a deliberate return to it.",
    books: [1], episodes: ["Creation", "The Great Flood"], figures: ["Ovid's narrator"]
  },
  {
    name: "The Palace of the Sun", greek: "Hêlíou Oîkos", roman: "Regia Solis", kind: "otherworld",
    what: "A palace of bronze, gold and ivory at the eastern edge of the world, its doors engraved with a map of the ordered cosmos.",
    culture: "The one building in the poem described as a work of art in its own right — and what is engraved on its doors is the world the Creation made. Phaethon walks past a picture of the ordered universe on his way to wreck it.",
    books: [2], episodes: ["Phaethon at the Sun's palace", "The solar chariot"], figures: ["Sol", "Phaethon", "Clymene"]
  },
  {
    name: "The Underworld", greek: "Háidês (Ἅιδης)", roman: "Inferi", kind: "otherworld",
    what: "Pluto's kingdom, reached through Taenarus or Avernus, where Orpheus made the only successful argument ever heard in that court.",
    culture: "Ovid's dead are not tormented so much as occupied — Tantalus reaching, Ixion turning, the Danaids filling jars. Orpheus stops all of it for the length of one song, and the Furies cry for the first time.",
    books: [4, 5, 10, 14], episodes: ["Orpheus & Eurydice", "Cyane & Ascalaphus", "Athamas & Ino", "Cumaean Sibyl"],
    figures: ["Pluto", "Proserpina", "Orpheus", "Eurydice", "Tisiphone", "Ascalaphus"]
  },
  {
    name: "The House of Sleep", greek: "Hýpnou Oîkos", roman: "Domus Somni", kind: "otherworld",
    what: "A Cimmerian cave the sun never reaches, with no door that could creak, no cockerel, no dog, and Lethe running over pebbles outside.",
    culture: "The poem's finest piece of negative description: Ovid builds the room entirely out of the noises that are not in it. Poppies grow at the entrance, and Morpheus lives there — the dream who can imitate any human being exactly.",
    books: [11], episodes: ["House of Sleep", "Ceyx & Alcyone"], figures: ["Alcyone", "Ceyx", "Juno"]
  },
  {
    name: "The House of Rumour", greek: "Phêmês Oîkos", roman: "Domus Famae", kind: "otherworld",
    what: "A house of echoing bronze at the meeting point of earth, sea and sky, with a thousand openings, no doors, and no silence.",
    culture: "Everything said anywhere arrives here, is repeated, and leaves larger. Credulity, Error, Panic and Sedition live in it. It is how Troy knows the Greek fleet is coming before it arrives — and Ovid's own account of how stories, including his, actually travel.",
    books: [12], episodes: ["House of Fame"], figures: ["Ovid's narrator"]
  },
  {
    name: "The encircling Ocean", greek: "Ôkeanós (Ὠκεανός)", roman: "Oceanus", kind: "otherworld",
    what: "The water running round the whole rim of the world, into which the constellations set — except the two Juno forbade.",
    culture: "Not a sea but a boundary, and the reason the Bears never dip below the horizon: Juno asked Ocean and Tethys never to receive them, so Callisto is denied even the rest of setting.",
    books: [1, 2, 13], episodes: ["Creation", "Callisto", "Glaucus"], figures: ["Oceanus", "Tethys", "Callisto", "Glaucus"]
  },
  {
    name: "The Styx", greek: "Stýx (Στύξ)", roman: "Styx", kind: "otherworld",
    what: "The black marsh the gods swear by, on an oath that cannot be taken back — which is how most of the poem's disasters are arranged.",
    culture: "The Styx is a plot device with a topography. Sol swears by it before hearing what his son wants; Jupiter swears by it before Semele asks to see him as he really is; and in both cases the god spends the rest of the scene explaining why the thing he is now obliged to do will kill the person asking. Ovid's gods are not undone by their power but by their own paperwork.",
    books: [1, 2, 3, 10, 12, 14, 15], episodes: ["Phaethon at the Sun's palace", "Semele", "Orpheus & Eurydice", "Cumaean Sibyl"],
    figures: ["Jupiter", "Sol", "Semele", "Phaethon", "Orpheus"]
  },
  {
    name: "Tartarus", greek: "Tártaros (Τάρταρος)", roman: "Tartarus", kind: "otherworld",
    what: "The deep prison under the underworld, where Saturn was thrown and the famous punishments are still running.",
    culture: "Ovid's Tartarus is a workshop of unfinished tasks: Tantalus reaching, Sisyphus pushing, Ixion turning, the Danaids filling jars that empty, Tityos with his liver growing back. All of it stops for the length of Orpheus' song — the wheel stands still, the vultures leave the liver — and the moment Ovid chooses to prove the song worked is the moment the punishments pause.",
    books: [1, 4, 10], episodes: ["The Four Ages", "Athamas & Ino", "Orpheus & Eurydice"],
    figures: ["Saturn", "Tisiphone", "Orpheus", "Juno"]
  },
  {
    name: "Lethe", greek: "Lếthê (Λήθη)", roman: "Lethe", kind: "otherworld",
    what: "The stream of forgetting, running over pebbles outside the cave of Sleep with a whisper that invites you to lie down.",
    culture: "The only sound in the House of Sleep, and the only one that belongs there. Ovid builds the god's chamber out of absences — no door that could creak, no cockerel, no dog, no voice — and then gives it this one noise, water going by, which is what forgetting sounds like when it is being described by a poet who intends to be remembered.",
    books: [11, 15], episodes: ["House of Sleep", "Ceyx & Alcyone", "Pythagoras"],
    figures: ["Somnus", "Morpheus", "Iris", "Alcyone"]
  },
  {
    name: "The court of heaven", greek: "Ouranoû aulế", roman: "Palatia Caeli", kind: "otherworld",
    what: "The road of stars the gods live along, which Ovid describes as a heavenly Palatine with the lesser divinities housed off the main street.",
    culture: "The poem's boldest single joke and its most serious political sentence at once. Jupiter summons a council, and Ovid describes the venue in the exact vocabulary of Augustan Rome — a grand approach, a good address, the nobility on the frontage — then adds, with a straight face, that if he may be permitted the expression, this is the Palatine of the great sky.",
    books: [1, 2, 9, 14, 15], episodes: ["Lycaon", "The Great Flood", "Romulus & Hersilia", "Julius Caesar"],
    figures: ["Jupiter", "Juno", "Venus", "Mars", "Romulus"]
  },
  {
    name: "The road of the Sun", greek: "Hodós Hêlíou", roman: "Iter Solis", kind: "otherworld",
    what: "The steep track through the signs of the zodiac that a father describes in detail to a son who is not listening.",
    culture: "The clearest set of directions in the poem, and the only ones that go wrong because they are followed by the wrong person. Ovid's Sun explains the gradient at the start, the terror of the height at noon, the plunge at the end, and the animals in the way — the Bull's horns, the Scorpion's arms, the Crab. The route is real celestial mechanics turned into a road with hazards, and the boy takes it anyway.",
    books: [2], episodes: ["Phaethon at the Sun's palace", "The solar chariot"],
    figures: ["Sol", "Phaethon", "Jupiter"]
  },
  {
    name: "The garden of the Hesperides", greek: "Kêpos Hesperídôn", roman: "Horti Hesperidum", kind: "otherworld",
    what: "The orchard of golden apples at the world's western edge, which is exactly why its guardian would not let a traveller in.",
    culture: "Atlas refuses Perseus hospitality because of an old oracle about a son of Jupiter coming for the fruit — and by refusing, he meets a son of Jupiter carrying a head that turns men to stone. Ovid's point is precise: the prophecy is fulfilled by the attempt to prevent it, and a mountain range is the result.",
    books: [4, 9], episodes: ["Perseus & Atlas", "Death of Hercules"],
    figures: ["Atlas", "Perseus", "Hercules", "Medusa"]
  }
];
