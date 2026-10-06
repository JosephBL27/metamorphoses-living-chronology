/*
 * The gazetteer, part four: the waters.
 *
 * A sea chart that names only its towns is half a chart. Ovid's rivers are not
 * scenery — they are characters with faces and grievances: the Peneus is
 * Daphne's father and has to watch, the Achelous loses a horn in a wrestling
 * match and tells the story himself, the Inachus is the one god who cannot join
 * the search because he is busy weeping into his own current.
 *
 * The seas are here for the same reason plus one more. A portolan letters its
 * water — MARE AEGEVM ran across the middle of the Aegean in tracked capitals,
 * because the sea is the part of the chart a sailor is actually on. Ovid's
 * water is likewise where a great deal happens: a boy falls out of the sky into
 * one, a king drowns crossing another, a girl runs beneath a third from Greece
 * to Sicily without surfacing.
 */

/** Rivers and straits — drawn as marks, at the mouth or the crossing. */
export const RIVERS = [
  {
    name: "The Peneus", greek: "Pêneiós (Πηνειός)", roman: "Peneus", kind: "river",
    at: [22.35, 39.88],
    what: "Daphne's father, and the river she was standing in when she asked him to destroy the body that had caused the trouble.",
    culture: "The river that drains all Thessaly and cuts the gorge of Tempe on its way out. Ovid gives him the poem's first impossible parental position: a god powerful enough to grant the prayer, and powerful only in the way that turns his daughter into a tree. He is later shown at home in a cave with the other Thessalian rivers coming to console — or congratulate — him, and nobody is sure which.",
    books: [1], episodes: ["Apollo & Daphne"],
    figures: ["Daphne", "Peneus", "Apollo"]
  },
  {
    name: "The Inachus", greek: "Ínachos (Ἴναχος)", roman: "Inachus", kind: "river",
    at: [22.72, 37.65],
    what: "Io's father, the only river-god absent from the assembly of rivers, because he was underground in his own spring, in mourning.",
    culture: "The Argolid's chief river and the founding ancestor of Argos. Ovid's cruellest domestic scene happens on his bank: his daughter, now a white heifer, lets him stroke her and feed her grass, and can only tell him who she is by writing two letters in the dust with her hoof.",
    books: [1], episodes: ["Io"],
    figures: ["Io", "Inachus", "Jupiter", "Juno"]
  },
  {
    name: "The Ladon", greek: "Ládôn (Λάδων)", roman: "Ladon", kind: "river",
    at: [21.78, 37.72],
    what: "The Arcadian water Syrinx could not cross, where she begged her sisters to change her and became a stand of marsh reed.",
    culture: "A tributary of the Alpheus running through the emptiest part of Arcadia. The episode is a compressed replay of Daphne with one addition that matters more than the chase: Pan, holding a handful of reeds, hears the wind complain in them, and invents an instrument out of the sound a loss makes.",
    books: [1], episodes: ["Pan & Syrinx"],
    figures: ["Syrinx", "Pan", "Mercury", "Argus"]
  },
  {
    name: "The Alpheus", greek: "Alpheiós (Ἀλφειός)", roman: "Alpheus", kind: "river",
    at: [21.45, 37.60],
    what: "The hunter who would not stop at the shore: he followed Arethusa under the sea from Elis to Sicily and came up in her spring.",
    culture: "The great river of Elis, past Olympia to the Ionian sea, and the subject of a belief the ancients held seriously — that it ran beneath the water and surfaced at Ortygia in Syracuse. Ovid takes the hydrology as given and makes it a pursuit, so that a geographic curiosity becomes the poem's most claustrophobic escape: sweat turning to water, and the pursuer in the water with her.",
    books: [2, 5], episodes: ["Arethusa & Alpheus", "The solar chariot"],
    figures: ["Arethusa", "Alpheus", "Diana", "Ceres"]
  },
  {
    name: "The Cephisus", greek: "Kêphisós (Κηφισός)", roman: "Cephisos", kind: "river",
    at: [22.90, 38.45],
    what: "Narcissus' father, who took a water-nymph by force in his own current and fathered the most beautiful boy in Boeotia.",
    culture: "The river of Phocis and Boeotia, which floods the Copaic basin and has no proper outlet to the sea. Ovid's genealogy is pointed: the boy who will die of his own reflection is the son of a river, and the first question ever asked about him — will he live long? — gets the answer that has puzzled readers since, if he does not come to know himself.",
    books: [1, 3, 7], episodes: ["Echo & Narcissus", "The Great Flood", "Medea's flight"],
    figures: ["Narcissus", "Liriope", "Tiresias"]
  },
  {
    name: "The Achelous & the Echinades", greek: "Achelôios (Ἀχελῷος)", roman: "Achelous", kind: "river",
    at: [21.13, 38.34],
    what: "The river who wrestled Hercules for Deianira, lost a horn, and hosts Theseus for a night of storytelling with the stump under a wreath.",
    culture: "Greece's largest river, and the poem's most companionable narrator: he tells his own defeat over dinner, in his own hall, with obvious embarrassment and no self-pity. The islands at his mouth are nymphs he swept out to sea for forgetting to invite him to a feast — the Echinades — and one of them, Perimele, he threw there himself.",
    books: [8, 9], episodes: ["Baucis & Philemon", "Erysichthon & Mestra", "Achelous & Hercules", "Nessus & Deianira"],
    figures: ["Achelous", "Hercules", "Deianira", "Theseus", "Lelex", "Perimele"]
  },
  {
    name: "The Evenus", greek: "Euēnos (Εὔηνος)", roman: "Evenus", kind: "river",
    at: [21.70, 38.42],
    what: "The crossing where Nessus offered to carry Deianira over, and where Hercules' arrow reached him from the far bank.",
    culture: "An Aetolian river, fast and awkward to ford, which is the whole mechanism of the episode. The centaur's revenge is patient in a way the poem rarely allows: he gives the woman his poisoned blood as a love-charm and tells her to keep it, and it works exactly as intended several years and one rival later.",
    books: [9], episodes: ["Nessus & Deianira", "Death of Hercules"],
    figures: ["Nessus", "Deianira", "Hercules"]
  },
  {
    name: "The Maeander", greek: "Maíandros (Μαίανδρος)", roman: "Maeander", kind: "river",
    at: [27.35, 37.62],
    what: "The river so lost in its own turnings that Ovid uses it to explain the Labyrinth, and whose grandson Caunus was loved by his sister.",
    culture: "The Carian river whose name became the word for a wandering line. Ovid's simile is exact and slightly showing off: the water plays back and forth, meets itself coming, and does not know whether it is heading for the source or the sea — which is what Daedalus built, and what Byblis' letter to her brother does to itself for eighty lines.",
    books: [2, 8, 9], episodes: ["The Minotaur & Labyrinth", "Byblis & Caunus", "The solar chariot"],
    figures: ["Byblis", "Caunus", "Daedalus", "Minos"]
  },
  {
    name: "The Marsyas", greek: "Marsýas (Μαρσύας)", roman: "Marsyas", kind: "river",
    at: [30.10, 38.05],
    what: "The clearest river in Phrygia, and the tears of everyone who watched a satyr flayed for losing a music competition.",
    culture: "Ovid's shortest aetiology and his most disgusting episode: the god skins the loser alive, and Ovid stays in the room, describing exposed sinew and the drum of the lungs, until the country's fauns and nymphs and shepherds have wept enough water to make a river. The name still belongs to a real tributary of the Maeander at Celaenae.",
    books: [6], episodes: ["Marsyas"],
    figures: ["Marsyas", "Apollo"]
  },
  {
    name: "The Scamander & Simois", greek: "Skámandros (Σκάμανδρος)", roman: "Xanthus", kind: "river",
    at: [26.32, 39.90],
    what: "The two rivers of the Trojan plain — one of which the sun set boiling on the day Phaethon lost the reins.",
    culture: "Homer's battlefield rivers, and Ovid treats them with a deliberate lightness that is its own comment: the Xanthus burns in a catalogue of scorched water, and the plain they water is where the poem's longest war is disposed of in a book and a half, mostly by having two men argue about armour.",
    books: [2, 12, 13], episodes: ["The solar chariot", "Cygnus & Achilles", "Fall of Troy & Polyxena"],
    figures: ["Achilles", "Hector", "Aeneas"]
  },
  {
    name: "The Thermodon", greek: "Thermốdôn (Θερμώδων)", roman: "Thermodon", kind: "river",
    at: [36.60, 41.20],
    what: "The Amazons' river, whose queen wore the belt Hercules was sent to take.",
    culture: "On the Black Sea's southern shore, and in Greek geography the edge of the plausible world — the place where women rule and fight, which is to say the place a Greek used to think about the arrangement at home. Ovid gives it a line in the burning catalogue and a line in the list of labours, and lets the reader supply the rest.",
    books: [2, 9, 12], episodes: ["The solar chariot", "Death of Hercules", "Centauromachy"],
    figures: ["Hercules", "Hippolyta"]
  },
  {
    name: "The Euphrates", greek: "Euphrátês (Εὐφράτης)", roman: "Euphrates", kind: "river",
    at: [40.20, 35.00],
    what: "The river of Babylon, past the tomb where two children died of the same misreading on the same night.",
    culture: "The eastern limit of the world Roman armies argued about, and in the poem the water beside the poem's most domestic tragedy. Ovid's Babylon is not exotic: it is a street, a shared wall, a chink in the brick, and two families who will not talk to each other.",
    books: [2, 4], episodes: ["Pyramus & Thisbe", "The solar chariot"],
    figures: ["Pyramus", "Thisbe", "Semiramis"]
  },
  {
    name: "The Ister", greek: "Ístros (Ἴστρος)", roman: "Danuvius", kind: "river",
    at: [28.75, 45.15],
    what: "The great northern river at the edge of the empire, a few days' ride from the town Ovid died in.",
    culture: "The Danube, and the frontier: on the far bank the Sarmatians, on this one Tomis. It burns in Phaethon's catalogue like every other river, but the biographical fact sits under the line — the poet listing the world's waters had, by the time he finished the poem, been sent to live beside this one.",
    books: [2], episodes: ["The solar chariot"],
    figures: ["Phaethon", "Sol"]
  },
  {
    name: "The Tanais", greek: "Tánais (Τάναϊς)", roman: "Tanais", kind: "river",
    at: [39.30, 47.20],
    what: "The river the ancients made the boundary between Europe and Asia, steaming in the general fire.",
    culture: "The Don, running into the Sea of Azov, and the conventional dividing line of the two continents — which makes its inclusion in the burning catalogue a small structural joke. When the sky catches fire, the border between the continents boils like everything else.",
    books: [2], episodes: ["The solar chariot"],
    figures: ["Phaethon", "Sol"]
  },
  {
    name: "The Numicius", greek: "Noumíkios (Νουμίκιος)", roman: "Numicius", kind: "river",
    at: [12.43, 41.52],
    what: "The small Latin stream told to wash away everything in Aeneas that could die, and to carry it out to sea.",
    culture: "A minor watercourse with an enormous job. Ovid's apotheosis is a laundering: the river takes the mortal part, the immortal part is anointed and given a name — Indiges — and the Latins have a god who used to be a refugee. The mechanism is bureaucratic and the poem knows it.",
    books: [14], episodes: ["Aeneas' apotheosis"],
    figures: ["Aeneas", "Venus", "Jupiter"]
  },
  {
    name: "The Tiber & its island", greek: "Thýbris (Θύβρις)", roman: "Tiberis", kind: "river",
    at: [12.47, 41.89],
    what: "The river the god came up as a serpent, and the island he came ashore on to end the plague.",
    culture: "Rome's working river and its front door. The Tiber island really did carry a temple of Aesculapius, built after a plague and after an embassy to Epidaurus — Ovid is retelling documented Roman history as a metamorphosis.",
    books: [14, 15], episodes: ["Aesculapius comes to Rome", "Picus, Canens & Circe"],
    figures: ["Aesculapius", "Canens"]
  },
  {
    name: "The Eridanus", greek: "Êridanós (Ἠριδανός)", roman: "Eridanus", kind: "river",
    at: [11.60, 44.90],
    what: "The great northern river Phaethon fell into, burning, and where his sisters wept themselves into poplars.",
    culture: "Identified by Romans with the Po. Its banks produce the poem's neatest piece of natural history: the Heliades' tears harden in the sun into amber, the river carries it away, and Roman brides wear it.",
    books: [2], episodes: ["The solar chariot", "The Heliades & Cycnus"],
    figures: ["Phaethon", "Clymene", "Cycnus", "Sol"]
  },
  {
    name: "The strait of Scylla & Charybdis", greek: "Porthmós (Πορθμός)", roman: "Fretum Siculum", kind: "strait",
    at: [15.62, 38.25],
    what: "Two miles of water with a whirlpool on one side and a girl with dogs growing out of her waist on the other.",
    culture: "The Strait of Messina, genuinely dangerous to ancient shipping, and the poem's clearest case of a hazard given a biography. Ovid spends far longer on how Scylla became what she is — a jealous witch, a poisoned pool, a woman looking down at her own body — than on the danger she poses to anyone sailing through.",
    books: [13, 14], episodes: ["Glaucus", "Glaucus, Scylla & Circe", "Achaemenides & Macareus"],
    figures: ["Scylla", "Circe", "Glaucus", "Ulysses", "Aeneas"]
  },
  {
    name: "The Hellespont", greek: "Hellếspontos (Ἑλλήσποντος)", roman: "Hellespontus", kind: "strait",
    at: [26.40, 40.22],
    what: "The narrow water between the continents, with a queen of Troy buried barking on its European shore.",
    culture: "Named for a girl who fell off a golden ram into it, and the seam where Europe is handed to Asia. Ovid uses the far bank for the end of Hecuba: taken as plunder, she kills the king who murdered her last son, is stoned, and answers with a howl — and the promontory keeps the name the Bitch's Tomb.",
    books: [11, 13], episodes: ["Hecuba & Polydorus", "Peleus & Thetis"],
    figures: ["Hecuba", "Polydorus", "Polymestor", "Priam"]
  }
];

/*
 * The seas.
 *
 * Lettered across the water rather than pinned to a point, because that is what
 * a sea is and what a chart of this kind does with one. `extent` is the water
 * the name runs over; `at` is only where the mark and the record hang.
 */
export const SEAS = [
  {
    name: "The Aegean", greek: "Aigaîon pélagos (Αἰγαῖον)", roman: "Mare Aegaeum", kind: "sea",
    at: [25.20, 37.90],
    extent: [[23.2, 35.6], [27.3, 40.4]],
    what: "The crowded water between Greece and Asia: a boy falls out of the sky into it, a king drowns crossing it, and a fleet works south through it twice.",
    culture: "More island than sea, and in the poem the busiest surface on the chart. Nearly every voyage the Metamorphoses traces crosses it, and its two most famous casualties are both failures of judgement rather than seamanship — a boy who climbed, and a husband who sailed in the wrong season against his wife's explicit warning.",
    books: [7, 8, 11, 13], episodes: ["Daedalus & Icarus", "Ceyx's voyage", "Ceyx & Alcyone", "Aeneas' departure & Oenotrophi"],
    figures: ["Icarus", "Daedalus", "Ceyx", "Alcyone", "Aeneas"]
  },
  {
    name: "The Icarian sea", greek: "Ikárion pélagos (Ἰκάριον)", roman: "Mare Icarium", kind: "sea",
    at: [26.20, 37.35],
    extent: [[25.5, 36.7], [27.4, 37.9]],
    what: "The stretch of water that carries a boy's name because he came down in it, and the feathers stayed on the surface.",
    culture: "The poem's purest aetiology of grief: a sea and an island both named after a child whose only fault was pleasure at being able to fly. Ovid keeps the father in frame for the whole descent — calling a name that is no longer a name, seeing the feathers, and reading the water.",
    books: [8], episodes: ["Daedalus & Icarus"],
    figures: ["Icarus", "Daedalus"]
  },
  {
    name: "The Ionian sea", greek: "Iónion pélagos (Ἰόνιον)", roman: "Mare Ionium", kind: "sea",
    at: [18.60, 38.10],
    extent: [[16.4, 35.9], [21.2, 40.1]],
    what: "The water Arethusa crossed underneath, in her own current, from Elis to a spring in Syracuse.",
    culture: "The open sea between Greece and Sicily, and the poem's main westward road: Aeneas' fleet, Ceres' torch-lit search, and one nymph running the whole distance below the surface with a river-god in the water behind her. The Greeks did not think that impossible; they thought it hydrology.",
    books: [5, 13, 14], episodes: ["Arethusa & Alpheus", "Aeneas' departure & Oenotrophi", "Achaemenides & Macareus"],
    figures: ["Arethusa", "Alpheus", "Ceres", "Aeneas"]
  },
  {
    name: "The Tyrrhenian sea", greek: "Tyrsēnikón pélagos (Τυρσηνικόν)", roman: "Mare Tyrrhenum", kind: "sea",
    at: [11.90, 40.10],
    extent: [[9.6, 38.2], [14.3, 42.3]],
    what: "Where a crew of pirates found ivy on the oars, a god in the hold, and their own hands turning to fins.",
    culture: "The sea off Italy's west coast, and Bacchus' proving ground. Ovid's version is told by a survivor under interrogation, which gives the transformation its unusual angle: the narrator watches his shipmates go over the side as dolphins while he stands at the tiller, the one man who had said they should let the boy go.",
    books: [3, 14], episodes: ["Tyrrhenian pirates", "Glaucus, Scylla & Circe", "Cercopes"],
    figures: ["Bacchus", "Acoetes", "Circe", "Ulysses"]
  },
  {
    name: "The Adriatic", greek: "Adrías (Ἀδρίας)", roman: "Mare Hadriaticum", kind: "sea",
    at: [15.80, 42.60],
    extent: [[13.2, 40.6], [18.9, 45.2]],
    what: "The long gulf between Italy and Illyria, with a Greek hero settled on the near shore and his crew turned to white birds.",
    culture: "The water Rome's east coast faces, and Ovid's last stop for the wreckage of Troy: Diomedes, unable to go home, farming in Apulia, and refusing point-blank to fight Aeneas again. It also runs up toward Illyria, where Cadmus and Harmonia finish the poem's first house as a pair of snakes.",
    books: [4, 14], episodes: ["Cadmus & Harmonia", "Diomedes in Italy"],
    figures: ["Diomedes", "Cadmus", "Harmonia", "Venus"]
  },
  {
    name: "The Black Sea", greek: "Póntos Euxeinos (Πόντος Εὔξεινος)", roman: "Pontus Euxinus", kind: "sea",
    at: [34.50, 43.20],
    extent: [[28.2, 41.0], [41.3, 45.6]],
    what: "The sea the Argo went to the far end of for a fleece, and the sea the poet was sent to the near end of and did not come back from.",
    culture: "Ironically named the Hospitable, and in Greek eyes the road out of the known world toward Colchis, gold and sorcery. The Metamorphoses is finished on its western shore. Every mile of coast on this water carries one of the two facts: the poem's most dangerous woman came from the far end, and its author died at the near one.",
    books: [7, 15], episodes: ["Jason & Medea", "The dragon & Golden Fleece", "Ovid's epilogue"],
    figures: ["Jason", "Medea", "Aeetes", "Ovid"]
  },
  {
    name: "The Libyan sea", greek: "Libykón pélagos (Λιβυκόν)", roman: "Mare Libycum", kind: "sea",
    at: [19.50, 33.60],
    extent: [[15.0, 31.4], [27.5, 34.9]],
    what: "The empty southern water Perseus flew over with the head, dripping, so that Libya grew snakes.",
    culture: "The crossing between Crete and Africa, and the least travelled part of the poem's chart — which is exactly why Ovid sends a man through the air over it. The blood that falls on the way is the poem's tidiest piece of natural history: it explains why the desert below is full of serpents, and it explains it in one line.",
    books: [4, 5], episodes: ["Perseus & Atlas", "Perseus & Andromeda"],
    figures: ["Perseus", "Medusa", "Atlas", "Andromeda"]
  }
];
