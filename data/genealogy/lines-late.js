/*
 * Books XII–XV: the Greek expedition and the war, the contest for Achilles'
 * arms, the fall of Troy, the westward passage through Sicily and Circe's
 * coast, Latium, and the Roman succession down to Ovid himself.
 */

export const LATE_LINES = [
  /* --------------------------------------------------------- Aulis and the war */
  {
    name: "Agamemnon",
    kind: "hero",
    greek: "Agamémnōn (Ἀγαμέμνων)",
    roman: "Agamemnon",
    ovid: "“the son of Atreus,” who is a father before he is a general and stops being one at Aulis",
    order: "King of Mycenae, commander of the Greeks",
    domain: "Mycenae; the fleet",
    house: "The house of Tantalus",
    father: "Atreus",
    consorts: ["Clytemnestra"],
    children: ["Iphigenia", "Orestes", "Electra"],
    who: "Great-grandson of Tantalus and commander of the expedition. Ovid gives him two scenes — a daughter on an altar and an argument about armour — and lets the reader decide which one measures him.",
    books: [12, 13],
    prominence: 2,
    acts: {
      "Aulis, the serpent, and Iphigenia": "Sets the public interest against the father's, and is beaten: Ovid says the king in him defeated the parent, and Iphigenia is brought to the altar in a wedding's clothing.",
      "Ajax & Ulysses": "Presides over the contest for the arms, and hands the verdict to the Greek chiefs rather than deciding it himself.",
      "Hecuba & Polydorus": "Present at the Thracian shore when the Trojan women's grief turns into an execution he does not prevent."
    }
  },
  {
    name: "Iphigenia",
    kind: "mortal",
    greek: "Īphigéneia (Ἰφιγένεια)",
    roman: "Iphigenia",
    ovid: "the girl at the altar “in place of whom a hind is said to have been substituted”",
    order: "Princess of Mycenae",
    domain: "Aulis",
    house: "The house of Tantalus",
    father: "Agamemnon",
    mother: "Clytemnestra",
    who: "Brought to Aulis on a pretext and saved at the last instant by a substitution Ovid reports carefully as a tradition rather than a fact. Her rescue is what allows a thousand ships to sail.",
    books: [12],
    prominence: 2,
    acts: {
      "Aulis, the serpent, and Iphigenia": "Stands at the altar while the priests weep, and is replaced — the poem says — by a deer; Diana is appeased, the wind turns, and the fleet leaves for a war that will not be over for ten years."
    }
  },
  {
    name: "Calchas",
    kind: "seer",
    greek: "Kálkhas (Κάλχας)",
    roman: "Calchas",
    ovid: "the seer who reads nine sparrows and gives the war its length",
    order: "Prophet of the Greeks",
    domain: "Augury",
    house: "The renewed human race",
    who: "The augur who converts an omen into a schedule. His reading of the serpent and the sparrows fixes the war at ten years before a single ship has moved.",
    books: [12],
    prominence: 3,
    acts: {
      "Aulis, the serpent, and Iphigenia": "Interprets the snake that ate eight nestlings and their mother at Aulis: nine birds, nine years, and Troy taken in the tenth. Then he names the price of the winds."
    }
  },
  {
    name: "Achilles",
    aliases: ["Achilles' ghost", "the absent Achilles", "Aeacides"],
    kind: "hero",
    greek: "Akhilleús (Ἀχιλλεύς)",
    roman: "Achilles",
    ovid: "“Aeacides” — and, in death, a voice from the tomb demanding a girl",
    order: "Prince of Phthia, greatest of the Greeks",
    domain: "Troy; the invincible body",
    house: "The Aeacids",
    father: "Peleus",
    mother: "Thetis",
    consorts: ["Deidamia", "Briseis"],
    children: ["Neoptolemus"],
    who: "Ovid's Achilles is deliberately deflated: he wins his first duel by strangling a man he cannot cut, dies to an arrow from the worst fighter in Troy, and is reduced to an urn that Ovid says would barely fill a jar. The poem is measuring epic reputation against physical fact.",
    books: [11, 12, 13],
    prominence: 1,
    acts: {
      "Peleus & Thetis": "The prophesied son greater than his father — the reason a goddess is married to a mortal in the first place.",
      "Cygnus & Achilles": "Breaks three spears on an invulnerable opponent, loses his temper, knocks him down with the shield boss, and throttles him with the straps of his own helmet — and finds an empty suit of armour and a swan.",
      "Death of Achilles": "Killed by Paris' arrow with Apollo guiding it; Ovid's obituary is a jar of ashes and a name that fills the world.",
      "Ajax & Ulysses": "The absent subject of the contest: everything either speaker says is really an argument about what kind of man deserves to inherit him.",
      "Fall of Troy & Polyxena": "Rises from the tomb in full armour to demand Polyxena as a grave-offering, and gets her.",
      "Memnon": "Kills Aurora's son at Troy, giving the dawn a grief that repeats every year."
    }
  },
  {
    name: "Cygnus",
    aliases: ["Cycnus son of Neptune"],
    kind: "hero",
    greek: "Kýknos (Κύκνος)",
    roman: "Cygnus",
    ovid: "the man no weapon marks, who leaves “only a swan and an empty helmet”",
    order: "Trojan ally",
    domain: "Invulnerability",
    house: "The primordial succession",
    father: "Neptune",
    who: "Distinct from the Cycnus of Book II. Neptune's son cannot be pierced, which forces Achilles into the only unheroic kill in his record — and Ovid clearly enjoys it.",
    books: [12],
    prominence: 2,
    acts: {
      "Cygnus & Achilles": "Kills a thousand Greeks, takes three spear-casts without a scratch, taunts the greatest of the Greeks about his parentage, and is strangled under his own chin-straps — at which point his father converts him into the white bird he was named for."
    }
  },
  {
    name: "Caenis / Caeneus",
    aliases: ["Caenis", "Caeneus"],
    kind: "hero",
    greek: "Kainís (Καινίς) / Kaineús",
    roman: "Caenis / Caeneus",
    ovid: "“the most beautiful girl in Thessaly,” and afterwards the warrior no iron would enter",
    order: "Lapith",
    domain: "Thessaly; the centaur war",
    house: "The renewed human race",
    father: "Elatus",
    who: "Raped by Neptune, granted a wish, and choosing to become a man who cannot be wounded. Ovid then stages the centaurs' response — burying an unpierceable body under an entire forest — as an argument about whether a granted wish can be defeated by engineering.",
    books: [12],
    prominence: 1,
    acts: {
      "Caenis / Caeneus": "Asks never to be able to suffer this again, and receives both a male body and impenetrable skin; Nestor tells the story to a table of Greeks who have never heard of him.",
      "Centauromachy": "Kills five centaurs, is attacked with tree-trunks by the rest when weapons bounce, and is buried under a mountain of timber — from which, Ovid reports on someone else's authority, a bird with tawny wings flew out once and was never seen again."
    }
  },
  {
    name: "Nestor",
    kind: "hero",
    greek: "Néstōr (Νέστωρ)",
    roman: "Nestor",
    ovid: "the old man “in his third generation of men,” who tells one very long story and leaves someone out of it",
    order: "King of Pylos",
    domain: "Pylos; memory",
    house: "The renewed human race",
    father: "Neleus",
    siblings: ["Periclymenus"],
    who: "The poem's designated rememberer, and a demonstrably partial one: he narrates the entire centaur war at enormous length and then admits he deliberately omitted Hercules because Hercules killed his brothers.",
    books: [12],
    prominence: 1,
    acts: {
      "Caenis / Caeneus": "Introduces Caeneus as someone he saw with his own eyes, and is pressed by the table for the whole story.",
      "Centauromachy": "Narrates the wedding brawl in detail — every wound, every improvised weapon, every mixing-bowl used as a club.",
      "Periclymenus": "Challenged for leaving Hercules out, he explains that the hero destroyed Pylos and eleven of his brothers, and that he owes him nothing but silence."
    }
  },
  {
    name: "Pirithous",
    kind: "hero",
    greek: "Peiríthoos (Πειρίθοος)",
    roman: "Pirithous",
    ovid: "the Lapith king whose wedding becomes a battle before the meal is finished",
    order: "King of the Lapiths",
    domain: "Thessaly",
    house: "The renewed human race",
    father: "Ixion",
    consorts: ["Hippodame"],
    who: "Theseus' closest friend, whose marriage feast is the setting for the poem's longest and most violent single scene. He also appears earlier as the sceptic at Achelous' table who does not believe in transformations.",
    books: [8, 12],
    prominence: 2,
    acts: {
      "Baucis & Philemon": "The guest who declares the gods have no such power — which is why Lelex tells the story of the linden and the oak.",
      "Centauromachy": "Invites the centaurs to the wedding, and watches one of them try to carry off the bride between courses."
    }
  },
  {
    name: "Hippodame",
    aliases: ["Hippodamia"],
    kind: "mortal",
    greek: "Hippodámeia (Ἱπποδάμεια)",
    roman: "Hippodame",
    ovid: "the bride dragged from her own wedding by the hair",
    order: "Queen of the Lapiths",
    domain: "Thessaly",
    house: "The renewed human race",
    consorts: ["Pirithous"],
    who: "The bride whose abduction starts the centauromachy. She is the cause of the longest fight in the poem and has no lines in it.",
    books: [12],
    prominence: 3,
    acts: {
      "Centauromachy": "Seized by Eurytus at the feast; the other centaurs each grab a woman, and the hall becomes a sacked city in the space of a line."
    }
  },
  {
    name: "Eurytus",
    aliases: ["Eurytus the centaur"],
    kind: "creature",
    greek: "Eúrytos (Εὔρυτος)",
    roman: "Eurytus",
    ovid: "“the fiercest of the fierce centaurs,” drunk before the tables are cleared",
    order: "Centaur",
    domain: "Thessaly",
    house: "The primordial succession",
    who: "The centaur who takes the bride, and the first to die. Theseus kills him with an antique mixing-bowl, which is Ovid's way of noting that the wedding furniture becomes the weaponry.",
    books: [12],
    prominence: 3,
    acts: {
      "Centauromachy": "Grabs Hippodame by the hair, and takes an ancient wine-bowl in the face from Theseus — the blow that starts everything."
    }
  },
  {
    name: "Periclymenus",
    kind: "hero",
    greek: "Periklýmenos (Περικλύμενος)",
    roman: "Periclymenus",
    ovid: "the shape-shifter shot “in the shape he chose last”",
    order: "Prince of Pylos",
    domain: "Pylos; the gift of any form",
    house: "The renewed human race",
    father: "Neleus",
    siblings: ["Nestor"],
    who: "Neptune's descendant, able to take any shape, and killed anyway. His death is Nestor's grievance and the reason the poem's most talkative old man declines to praise Hercules.",
    books: [12],
    prominence: 3,
    acts: {
      "Periclymenus": "Turns into an eagle in the middle of the fight for Pylos and takes one of Hercules' arrows under the wing; his brother has been leaving the story out of his repertoire ever since."
    }
  },
  {
    name: "Paris",
    kind: "mortal",
    greek: "Páris (Πάρις) / Aléxandros",
    roman: "Paris",
    ovid: "the man “whose one glory is a stolen wife,” and one arrow",
    order: "Prince of Troy",
    domain: "Troy",
    house: "The Trojan house",
    father: "Priam",
    mother: "Hecuba",
    consorts: ["Helen", "Oenone"],
    who: "Ovid barely tells his story — the poem assumes you know it — and gives him exactly one decisive act, which is killing the best fighter in the world from a distance with a god steering.",
    books: [12, 13],
    prominence: 2,
    acts: {
      "Death of Achilles": "Draws the bow that Apollo aims: the abductor whose war it is finally kills the man the war was famous for."
    }
  },
  {
    name: "Ajax",
    aliases: ["Ajax son of Telamon", "Telamonian Ajax"],
    kind: "hero",
    greek: "Aías (Αἴας)",
    roman: "Aiax",
    ovid: "the great shield-bearer who “could speak with his hands,” and loses to a man who speaks with his mouth",
    order: "Prince of Salamis",
    domain: "Troy; the seven-fold shield",
    house: "The Aeacids",
    father: "Telamon",
    mother: "Eriboea",
    who: "The second-best fighter among the Greeks, and the poem's clearest casualty of rhetoric. Ovid arranges the contest so that Ajax's case is factually stronger and his delivery hopeless — which is exactly the point Ovid, a professional speaker, is making.",
    books: [12, 13],
    prominence: 1,
    acts: {
      "Ajax & Ulysses": "Argues from deeds, birth, and the defence of the ships; sneers at Ulysses' words, offers to go and fetch the armour back from the Trojans himself, and loses the vote.",
      "Death of Ajax": "Turns his sword on the only body it has never been able to wound, and from the blood on the ground comes up the purple flower whose markings read as the first letters of his name."
    }
  },
  {
    name: "Ulysses / Odysseus",
    aliases: ["Ulysses", "Odysseus", "Laertes' son"],
    kind: "hero",
    greek: "Odysseús (Ὀδυσσεύς)",
    roman: "Ulixes",
    ovid: "“the man of Ithaca,” who wins an argument the poem has already conceded to him",
    order: "King of Ithaca",
    domain: "Ithaca; speech, strategy, and the long return",
    house: "The renewed human race",
    father: "Laertes",
    consorts: ["Penelope", "Circe"],
    children: ["Telemachus"],
    who: "The strategist, and Ovid's proxy for the power of a well-made speech. He wins Achilles' armour with a hundred and fifty lines of argument, and Ovid — who was trained in exactly this — clearly admires the performance while noting what it costs.",
    books: [13, 14],
    prominence: 1,
    acts: {
      "Ajax & Ulysses": "Answers point by point: reframes his own reluctance at Aulis, claims the recruitment of Achilles, the recovery of Philoctetes' bow, the Palladium, and finally asks the chiefs to look at the armour's engraved shield and say who could read it.",
      "Death of Ajax": "Receives the arms, and is the immediate cause of a suicide he did not intend.",
      "Achaemenides & Macareus": "Named as the captain who sailed without one of his own men, and whose crew Circe turned into swine — the story reaching Aeneas from two directions at once."
    }
  },
  {
    name: "Polyxena",
    kind: "mortal",
    greek: "Polyxénē (Πολυξένη)",
    roman: "Polyxena",
    ovid: "the girl who tells her killers not to touch her, and arranges her own clothing as she falls",
    order: "Princess of Troy",
    domain: "Troy; the tomb of Achilles",
    house: "The Trojan house",
    father: "Priam",
    mother: "Hecuba",
    who: "Sacrificed on Achilles' tomb, and given the most composed speech in the poem's Trojan books. Ovid's detail — that even dying she made sure her body stayed decently covered — is one of the great moments in Latin literature.",
    books: [13],
    prominence: 1,
    acts: {
      "Fall of Troy & Polyxena": "Led to the altar, tells Neoptolemus to strike a free woman and not a slave, asks that her body be returned to her mother without ransom, and takes care as she falls to keep herself covered."
    }
  },
  {
    name: "Hecuba",
    kind: "mortal",
    greek: "Hekábē (Ἑκάβη)",
    roman: "Hecuba",
    ovid: "the queen who “barked, in the place where she had lost the power to speak”",
    order: "Queen of Troy",
    domain: "Troy and Thrace",
    house: "The Trojan house",
    consorts: ["Priam"],
    children: ["Hector", "Paris", "Polyxena", "Polydorus", "Cassandra"],
    who: "The poem's endpoint for grief. She loses a city, a husband, and every child in sequence, takes one revenge with her hands, and is finally converted into an animal that can only make noise — after which Ovid says even her enemies pitied her.",
    books: [13],
    prominence: 1,
    acts: {
      "Fall of Troy & Polyxena": "Washes her daughter's wounds with sea-water she has to fetch herself, and finds Polydorus' body in the same trip to the shore.",
      "Hecuba & Polydorus": "Goes to Polymestor with a story about hidden gold, gets him alone, and takes his eyes out with her fingers; when the Thracians stone her she snaps at the rocks, and the sound coming out of her is a dog's."
    }
  },
  {
    name: "Neoptolemus",
    aliases: ["Pyrrhus"],
    kind: "hero",
    greek: "Neoptólemos (Νεοπτόλεμος)",
    roman: "Neoptolemus / Pyrrhus",
    ovid: "the son who performs his father's demand at the tomb",
    order: "Prince of Phthia",
    domain: "Troy",
    house: "The Aeacids",
    father: "Achilles",
    mother: "Deidamia",
    who: "Achilles' son, and the executor of the ghost's request. Ovid gives him no interiority whatsoever, which makes the sacrifice read as administration.",
    books: [13],
    prominence: 3,
    acts: {
      "Fall of Troy & Polyxena": "Draws the sword at his father's tomb and kills Polyxena while she is still finishing her sentence."
    }
  },
  {
    name: "Polydorus",
    kind: "mortal",
    greek: "Polýdōros (Πολύδωρος)",
    roman: "Polydorus",
    ovid: "the son sent away for safety, and washed back “on the shore his mother was standing on”",
    order: "Prince of Troy",
    domain: "Thrace",
    house: "The Trojan house",
    father: "Priam",
    mother: "Hecuba",
    who: "Sent to Thrace with the treasury for safekeeping and murdered for it. His body arriving at his mother's feet is the poem's most exact piece of dramatic timing.",
    books: [13],
    prominence: 2,
    acts: {
      "Hecuba & Polydorus": "Murdered by his guardian, thrown into the sea, and returned by the tide to the exact stretch of beach where his mother has gone to fetch water for another child's corpse."
    }
  },
  {
    name: "Polymestor",
    kind: "mortal",
    greek: "Polymḗstōr (Πολυμήστωρ)",
    roman: "Polymestor",
    ovid: "the Thracian king “who murdered his ward for gold”",
    order: "King of Thrace",
    domain: "Thrace; violated guest-friendship",
    house: "The renewed human race",
    who: "The guardian who kills the child entrusted to him. His blinding is the one revenge in the poem carried out entirely without a weapon.",
    books: [13],
    prominence: 2,
    acts: {
      "Hecuba & Polydorus": "Lured aside by the promise of more Trojan gold, and has his eyes taken out by a woman's hands — after which she keeps going into the sockets."
    }
  },
  {
    name: "Memnon",
    kind: "hero",
    greek: "Mémnōn (Μέμνων)",
    roman: "Memnon",
    ovid: "the Ethiopian whose ashes rise as birds and fight above his own tomb",
    order: "King of the Ethiopians",
    domain: "Troy; the annual combat of the Memnonides",
    house: "The Trojan house",
    father: "Tithonus",
    mother: "Aurora",
    who: "Aurora's son, killed by Achilles, and the origin of one of Ovid's most striking aetiologies: birds generated from a funeral pyre that re-enact the war annually over the grave.",
    books: [13],
    prominence: 2,
    acts: {
      "Memnon": "Burns on the pyre while his mother petitions Jupiter; from the smoke rise birds that circle three times, split into two flocks, and kill each other — and repeat it every year."
    }
  },

  /* ---------------------------------------------------- Sicily and the passage west */
  {
    name: "Aeneas",
    kind: "hero",
    greek: "Aineías (Αἰνείας)",
    roman: "Aeneas",
    ovid: "“the Cytherean hero,” carrying his father and his gods, and at last Indiges",
    order: "Prince of Troy, founder in Latium",
    domain: "Troy, Sicily, Carthage, Cumae, Latium",
    house: "The Trojan house",
    father: "Anchises",
    mother: "Venus",
    consorts: ["Creusa of Troy", "Lavinia"],
    children: ["Ascanius"],
    who: "The hinge between the poem's Greek and Roman halves. Ovid moves him from Troy to Italy in a fraction of the space Virgil needed, and fills the gap with other people's transformation stories — a deliberate refusal to write the Aeneid again.",
    books: [13, 14, 15],
    prominence: 1,
    acts: {
      "Aeneas' departure & Oenotrophi": "Leaves the ruins with his father, his son, and his household gods, and stops at Delos, where Anius tells him what happened to his own children.",
      "Cumaean Sibyl": "Goes down and comes back, and on the road up asks the Sibyl whether she is a goddess — receiving in reply the story of her seven centuries and the dust she should not have counted.",
      "Achaemenides & Macareus": "Takes aboard a man Ulysses abandoned, and hears the Circe stories from a survivor of the other fleet.",
      "Diomedes in Italy": "The subject of the embassy Venulus carries: whether the Greek hero will help the Latins against him.",
      "Aeneas' apotheosis": "Washed clean of the mortal part in the Numicius at his mother's request, and worshipped by the Romans under a new name."
    }
  },
  {
    name: "Anchises",
    kind: "mortal",
    greek: "Ankhísēs (Ἀγχίσης)",
    roman: "Anchises",
    ovid: "the father carried out of a burning city on his son's shoulders",
    order: "Prince of Dardania",
    domain: "Troy and the voyage west",
    house: "The Trojan house",
    consorts: ["Venus"],
    children: ["Aeneas"],
    who: "Venus' mortal lover and Aeneas' father, whose survival of Troy is the image on which the whole Roman idea of pietas rests.",
    books: [13, 14],
    prominence: 3,
    acts: {
      "Aeneas' departure & Oenotrophi": "Carried out of Troy and taken to Delos, where he is greeted by an old guest-friend and hears the story of the Oenotrophi."
    }
  },
  {
    name: "Ascanius",
    aliases: ["Iulus"],
    kind: "mortal",
    greek: "Askánios (Ἀσκάνιος)",
    roman: "Ascanius / Iulus",
    ovid: "the boy “from whom the Julian name descends”",
    order: "Prince of Troy, king of Alba",
    domain: "Latium; Alba Longa",
    house: "The Roman succession",
    father: "Aeneas",
    mother: "Creusa of Troy",
    who: "Aeneas' son and, under the name Iulus, the ancestor the Julian house claimed. His presence in the poem is entirely genealogical: he exists to connect Troy to Augustus.",
    books: [13, 14],
    prominence: 3,
    acts: {
      "Aeneas' departure & Oenotrophi": "Leaves Troy with his father and grandfather, carrying the line forward.",
      "Aeneas' apotheosis": "Succeeds his deified father at Alba, beginning the sequence of kings that Ovid runs through at speed to reach Romulus."
    }
  },
  {
    name: "Anius",
    kind: "seer",
    greek: "Ánios (Ἄνιος)",
    roman: "Anius",
    ovid: "“priest of Apollo and king of men,” who shows his guests an empty house",
    order: "King and priest of Delos",
    domain: "Delos",
    house: "The renewed human race",
    father: "Apollo",
    children: ["The Oenotrophi", "Andros"],
    who: "The priest-king of Delos who receives Aeneas, and whose own children have been taken from him by the Greek war effort. His story rhymes the Trojan loss with a smaller domestic one.",
    books: [13],
    prominence: 3,
    acts: {
      "Aeneas' departure & Oenotrophi": "Welcomes Anchises as an old friend, and tells how Agamemnon's men came for the daughters whose touch made grain, wine, and oil, and how Bacchus turned them into doves as they were being dragged aboard."
    }
  },
  {
    name: "Acis",
    kind: "mortal",
    greek: "Ákis (Ἄκις)",
    roman: "Acis",
    ovid: "the sixteen-year-old “with the first down on his cheeks,” and afterwards a river",
    order: "Sicilian youth, then river god",
    domain: "Sicily; the river Acis under Etna",
    house: "The primordial succession",
    father: "Faunus",
    mother: "Symaethis",
    consorts: ["Galatea"],
    who: "Galatea's lover, crushed under a piece of mountain and released as a river. His transformation is the one act of mercy in an episode otherwise given over to appetite.",
    books: [13],
    prominence: 2,
    acts: {
      "Galatea, Acis & Polyphemus": "Hides with Galatea, is spotted, runs, and takes a hillside in the back; his blood runs red from under the rock, then clears, then splits it, and a reed comes up out of the crack with a river behind it."
    }
  },
  {
    name: "Polyphemus",
    kind: "creature",
    greek: "Polýphēmos (Πολύφημος)",
    roman: "Polyphemus",
    ovid: "the Cyclops who combs his hair with a rake and trims his beard with a scythe, and is in love",
    order: "Cyclops",
    domain: "Sicily; the flocks of Etna",
    house: "The primordial succession",
    father: "Neptune",
    who: "Ovid's boldest tonal experiment: the monster of the Odyssey given a hundred lines of pastoral love song, complete with an inventory of his apples and a proud account of his single enormous eye. The comedy makes the murder worse, not better.",
    books: [13, 14],
    prominence: 1,
    acts: {
      "Galatea, Acis & Polyphemus": "Sits on a wedge of hill, plays a pipe of a hundred reeds, and sings a courtship that begins in flattery and ends in threats; then he sees the lovers, roars so that Etna answers, and throws part of the mountain.",
      "Achaemenides & Macareus": "Reappears through Achaemenides' account of the cave — the blinded giant groping the shoreline, and the man who hid in the woods for months eating berries and watching him."
    }
  },
  {
    name: "Circe",
    kind: "sorceress",
    greek: "Kírkē (Κίρκη)",
    roman: "Circe",
    ovid: "“the daughter of the Sun,” whose herbs are always answered with a wand",
    order: "Goddess-enchantress",
    domain: "Aeaea; herbs, potions, transformation",
    house: "The house of the Sun",
    father: "Sol / Phoebus",
    mother: "Perse",
    siblings: ["Aeetes", "Pasiphaë"],
    consorts: ["Ulysses / Odysseus", "Picus (sought)", "Glaucus (sought)"],
    who: "The poem's most consistently effective magician, and its most consistently rejected woman. Every transformation she performs in Books XIII and XIV is a response to a refusal — which makes her both an agent of enormous power and a study in powerlessness.",
    books: [13, 14],
    prominence: 1,
    acts: {
      "Glaucus": "Approached by a new sea god who wants a love-charm, and is not at all interested in helping him get someone else.",
      "Glaucus, Scylla & Circe": "Offers herself, is refused, and poisons the pool where her rival bathes — turning the woman's lower body into a ring of dogs and then, Ovid notes, hating Ulysses in advance for the same reason.",
      "Achaemenides & Macareus": "Turns Ulysses' crew into swine, is defeated by moly, and keeps the captain a year — the story reported by a man who was in the sty.",
      "Picus, Canens & Circe": "Sees a Latin king out hunting, separates him from his companions with a phantom boar, is refused, and makes him a woodpecker with a red crest and the purple of his cloak still on its wings."
    }
  },
  {
    name: "Achaemenides",
    kind: "mortal",
    greek: "Akhaimenídēs (Ἀχαιμενίδης)",
    roman: "Achaemenides",
    ovid: "the Greek left behind, who would rather die on a Trojan ship than in that cave",
    order: "Companion of Ulysses",
    domain: "Sicily; the Cyclops' island",
    house: "The renewed human race",
    who: "Abandoned by his own side and rescued by the enemy — the poem's neatest reversal of the Trojan war's categories, borrowed from Virgil and given a much better speech.",
    books: [14],
    prominence: 2,
    acts: {
      "Achaemenides & Macareus": "Tells Macareus what it was like in the cave and afterwards: eating acorns, hiding in the woods, watching an unseeing giant feel his way along the cliffs, and finding himself grateful to Trojans."
    }
  },
  {
    name: "Macareus",
    kind: "mortal",
    greek: "Makareús (Μακαρεύς)",
    roman: "Macareus",
    ovid: "the companion who stayed with Aeneas rather than sail on",
    order: "Companion of Ulysses",
    domain: "Aeaea and Caieta",
    house: "The renewed human race",
    who: "The other half of the recognition scene at Caieta, and the narrator of the Circe material. Between them, he and Achaemenides let Ovid retell the whole Odyssey from the crew's point of view.",
    books: [14],
    prominence: 2,
    acts: {
      "Achaemenides & Macareus": "Recognises his old shipmate on the Italian shore and tells him what happened at Aeaea: the pigsty, the moly, the year with Circe, and the story of Picus he heard from one of her maids.",
      "Picus, Canens & Circe": "Relays, at second hand, the whole Latin tragedy of the woodpecker king and the singing wife."
    }
  },
  {
    name: "The Cumaean Sibyl",
    aliases: ["Sibyl", "the Sibyl"],
    kind: "seer",
    greek: "Síbylla (Σίβυλλα)",
    roman: "Sibylla Cumaea",
    ovid: "the prophet who will end as “a voice; only a voice will be left to me”",
    order: "Prophet of Apollo at Cumae",
    domain: "Cumae; the descent to the dead",
    house: "The renewed human race",
    who: "Given as many years as the grains of dust in her hand, and forgetting to ask that they come with youth. She is the poem's most explicit statement about what time does to a body, and her end — pure voice — is a version of what happens to Echo.",
    books: [14],
    prominence: 1,
    acts: {
      "Cumaean Sibyl": "Guides Aeneas down and back, and on the way up explains that she is not a goddess but a woman who has already lived seven hundred years, has three hundred to go, will shrink until nobody can see her, and will end as a voice the fates leave behind."
    }
  },
  {
    name: "Achates",
    kind: "mortal",
    greek: "Akhátēs (Ἀχάτης)",
    roman: "Achates",
    ovid: "the faithful companion, named in passing",
    order: "Companion of Aeneas",
    domain: "The Trojan voyage",
    house: "The Trojan house",
    who: "Aeneas' inseparable friend in Virgil, and in Ovid a single name — a marker that the poem is passing through Virgilian territory without stopping.",
    books: [14],
    prominence: 3,
    acts: {
      "Cumaean Sibyl": "Accompanies Aeneas to Cumae; his presence signals which epic's ground the poem is standing on."
    }
  },

  /* -------------------------------------------------------------------- Latium */
  {
    name: "Picus",
    kind: "mortal",
    greek: "— (an Italian king)",
    roman: "Picus",
    ovid: "the king “whom you would have called handsome before you saw his real face,” and then a woodpecker",
    order: "King of Latium",
    domain: "Latium; the hunt",
    house: "The Roman succession",
    father: "Saturn",
    consorts: ["Canens"],
    who: "An Italian king who refuses a goddess out of loyalty to his wife, and is punished with a bird's body for it. He is the poem's only figure transformed for fidelity.",
    books: [14],
    prominence: 2,
    acts: {
      "Picus, Canens & Circe": "Lured off the hunt by a phantom boar, propositioned, and refuses on the grounds that he belongs to Canens; Circe strikes him twice with a wand and he takes off in purple and red, driving his beak into the wood in fury."
    }
  },
  {
    name: "Canens",
    kind: "nymph",
    greek: "— (an Italian nymph)",
    roman: "Canens",
    ovid: "“the singer,” whose name is what she does, and finally all she is",
    order: "Latin nymph",
    domain: "The Tiber bank; song",
    house: "The Roman succession",
    father: "Janus",
    mother: "Venilia",
    consorts: ["Picus"],
    who: "Named for her voice, and dissolved into it. Her six days of searching and final thinning-away on the Tiber is the poem's late-Italian echo of Echo — the same ending, reached by love rather than punishment.",
    books: [14],
    prominence: 2,
    acts: {
      "Picus, Canens & Circe": "Searches six days and nights without food or sleep, lies down on the Tiber bank, sings her grief out, and thins into air; the Camenae named the place after her."
    }
  },
  {
    name: "Diomedes",
    kind: "hero",
    greek: "Diomḗdēs (Διομήδης)",
    roman: "Diomedes",
    ovid: "the Greek who wounded a goddess and has been paying for it ever since",
    order: "King of Argos, exile in Apulia",
    domain: "Argos and Italy",
    house: "The renewed human race",
    father: "Tydeus",
    who: "The hero who wounded Venus at Troy, and whose punishment is a long Italian exile and the loss of his companions to feathers. Ovid uses him to explain why the Greeks cannot help the Latins against Aeneas.",
    books: [14],
    prominence: 2,
    acts: {
      "Diomedes in Italy": "Refuses Venulus' request for troops, and explains why: he has lost his men, his return, and his country to a goddess he once put a spear into, and has no appetite left for fighting Trojans."
    }
  },
  {
    name: "Venulus",
    kind: "mortal",
    greek: "— (a Latin envoy)",
    roman: "Venulus",
    ovid: "the envoy who comes back with a story instead of an army",
    order: "Envoy of Turnus",
    domain: "Latium and Apulia",
    house: "The Roman succession",
    who: "Sent to buy Greek help against Aeneas and returns with a long account of transformations instead. He is the poem's model of a diplomatic mission that becomes a narrative frame.",
    books: [14],
    prominence: 3,
    acts: {
      "Diomedes in Italy": "Hears the refusal, hears the story of Acmon and the birds, and passes a wild olive tree on the way home that used to be a shepherd."
    }
  },
  {
    name: "Acmon",
    kind: "mortal",
    greek: "Ákmōn (Ἄκμων)",
    roman: "Acmon",
    ovid: "the man who says the worst has already happened, and finds out otherwise",
    order: "Companion of Diomedes",
    domain: "Apulia",
    house: "The renewed human race",
    who: "The companion whose defiance of Venus turns the whole party into birds. His argument — that things cannot get worse — is the poem's most reliably wrong sentence.",
    books: [14],
    prominence: 3,
    acts: {
      "Diomedes in Italy": "Insults the goddess in front of his friends and starts to sprout feathers mid-speech; the rest of the company follow, and they are still nesting along the Adriatic."
    }
  },
  {
    name: "Iphis of Cyprus",
    kind: "mortal",
    greek: "Îphis (Ἶφις)",
    roman: "Iphis",
    ovid: "the lover “of humble birth,” who hangs himself in a doorway",
    order: "Cypriot commoner",
    domain: "Salamis in Cyprus",
    house: "The Cyprian line",
    consorts: ["Anaxarete (unrequited)"],
    who: "Distinct from the Cretan Iphis of Book IX. This one loves above his station, is refused, and stages his death where it cannot be ignored — which is exactly what makes the story usable as a threat.",
    books: [14],
    prominence: 2,
    acts: {
      "Vertumnus & Pomona": "The cautionary example inside Vertumnus' disguise — a lover whose patience was answered with nothing, produced as evidence that refusal has consequences.",
      "Iphis & Anaxarete": "Hangs a garland on the doorpost, makes a last speech to a closed door, and puts his neck in the loop; his funeral passes under her window."
    }
  },
  {
    name: "Anaxarete",
    kind: "mortal",
    greek: "Anaxarétē (Ἀναξαρέτη)",
    roman: "Anaxarete",
    ovid: "the noblewoman “harder than the iron the Chalybes work”",
    order: "Cypriot noblewoman",
    domain: "Salamis in Cyprus",
    house: "The Cyprian line",
    who: "The unmoved beloved, who watches a funeral from a window out of curiosity and finds she cannot look away — because she is turning into stone from the inside out.",
    books: [14],
    prominence: 2,
    acts: {
      "Vertumnus & Pomona": "Held up to Pomona as what happens to a woman who treats a suitor's death as entertainment — the story's whole purpose is to be told at someone.",
      "Iphis & Anaxarete": "Laughs at the garlands, mocks the letters, goes to the window when the procession passes, feels the cold spread from her eyes down, and is still standing there as a statue in the temple of Venus Prospiciens."
    }
  },

  /* ------------------------------------------------------------- Rome's line */
  {
    name: "Romulus",
    aliases: ["Quirinus"],
    kind: "hero",
    greek: "Rhōmýlos (Ῥωμύλος)",
    roman: "Romulus / Quirinus",
    ovid: "the founder taken up “while he was giving laws,” and renamed",
    order: "Founder and first king of Rome",
    domain: "Rome; the founding and the deification",
    house: "The Roman succession",
    father: "Mars",
    mother: "Ilia / Rhea Silvia",
    consorts: ["Hersilia"],
    who: "The second full apotheosis in the poem's Roman sequence, staged as a direct rerun of Hercules': the mortal part dissolves in the air, and what is left is given a new name and a temple.",
    books: [14, 15],
    prominence: 1,
    acts: {
      "Romulus & Hersilia": "Dissolves in mid-air as his father's chariot takes him, “like lead from a broad sling melting in the sky,” and comes down again in Roman cult as Quirinus."
    }
  },
  {
    name: "Hersilia",
    aliases: ["Hora"],
    kind: "mortal",
    greek: "— (a Sabine name)",
    roman: "Hersilia / Hora",
    ovid: "the widow who is “given a star to follow up”",
    order: "Queen of Rome, then goddess",
    domain: "Rome",
    house: "The Roman succession",
    consorts: ["Romulus"],
    who: "Romulus' Sabine wife, deified after him and renamed Hora. Ovid uses the pair to establish that Roman apotheosis comes with a spouse — a template Livia will fit later.",
    books: [14],
    prominence: 2,
    acts: {
      "Romulus & Hersilia": "Mourns publicly until Juno relents; Iris brings her to the Quirinal, a star falls, her hair catches fire from it, and she goes up to meet a husband who names her Hora."
    }
  },
  {
    name: "Myscelus",
    kind: "mortal",
    greek: "Mýskelos (Μύσκελος)",
    roman: "Myscelus",
    ovid: "the man who is tried for obeying a god and acquitted by a miracle of colour",
    order: "Founder of Croton",
    domain: "Argos and southern Italy",
    house: "The renewed human race",
    who: "Ordered by Hercules in a dream to leave his homeland, which is a capital offence where he lives. His acquittal — the black voting-pebbles turning white in the urn — is the poem's most literal transformation of a legal outcome.",
    books: [15],
    prominence: 2,
    acts: {
      "Myscelus & Croton": "Dreams the god's order three times, is arrested at the border, prays in court, and watches every pebble in the urn change colour before the count."
    }
  },
  {
    name: "Croton",
    kind: "mortal",
    greek: "Krótōn (Κρότων)",
    roman: "Croton",
    ovid: "the old host whose name outlives him as a city",
    order: "Italian host of Hercules",
    domain: "Southern Italy",
    house: "The renewed human race",
    who: "The man who once entertained Hercules on his way through Italy, and whose tomb marks the site the god later tells Myscelus to build on.",
    books: [15],
    prominence: 3,
    acts: {
      "Myscelus & Croton": "Named in the god's instructions as the reason for the site — hospitality remembered across generations, and repaid with a city."
    }
  },
  {
    name: "Pythagoras",
    kind: "mortal",
    greek: "Pythagóras (Πυθαγόρας)",
    roman: "Pythagoras",
    ovid: "“a man of Samos,” exiled by tyranny, who taught what the gods do and what nothing is",
    order: "Philosopher of Samos and Croton",
    domain: "Transmigration, vegetarianism, universal flux",
    house: "The renewed human race",
    who: "The poem's late philosophical voice, who supplies a systematic theory for everything the previous fourteen books have shown. Ovid neither endorses nor mocks him at length — the speech simply stands, four hundred lines of it, as the argument the poem has been implying.",
    books: [15],
    prominence: 1,
    acts: {
      "Pythagoras": "Forbids the eating of flesh, describes the soul's passage between bodies, and then delivers the poem's central thesis in its plainest form: nothing perishes, everything is altered; forms are unstable, and time itself devours and remakes what it has made."
    }
  },
  {
    name: "Numa",
    kind: "mortal",
    greek: "Nomâs (Νομᾶς)",
    roman: "Numa Pompilius",
    ovid: "the second king, who “brought back to Rome what he had learned in the Greek city”",
    order: "Second king of Rome",
    domain: "Rome; religious law and ritual",
    house: "The Roman succession",
    consorts: ["Egeria"],
    who: "Rome's peaceful king and religious legislator, whom Ovid sends to Croton to hear Pythagoras — an anachronism the poem commits knowingly, because it needs the philosophy to arrive in Rome by a named road.",
    books: [15],
    prominence: 2,
    acts: {
      "Pythagoras": "Listens to the whole discourse at Croton and carries it home as the basis of the laws and rites he gives the Romans.",
      "Egeria & Hippolytus": "Dies, leaving a wife whose grief has to be dealt with by a goddess."
    }
  },
  {
    name: "Egeria",
    kind: "nymph",
    greek: "Ēgería (Ἠγερία)",
    roman: "Egeria",
    ovid: "the nymph who “melts away in tears until she is the spring itself”",
    order: "Latin nymph",
    domain: "The grove of Aricia; counsel and water",
    house: "The Roman succession",
    consorts: ["Numa"],
    who: "Numa's divine adviser and widow, whose inconsolable mourning is treated by another mourner's story and then, when that fails, by transformation into water.",
    books: [15],
    prominence: 2,
    acts: {
      "Egeria & Hippolytus": "Refuses every consolation; Hippolytus tells her his own story — dragged to death, restored by Aesculapius, and hidden in Italy — and when even that does not help, Diana dissolves her into the spring that still runs in the grove."
    }
  },
  {
    name: "Hippolytus / Virbius",
    aliases: ["Hippolytus", "Virbius"],
    kind: "hero",
    greek: "Hippólytos (Ἱππόλυτος)",
    roman: "Hippolytus / Virbius",
    ovid: "the prince “torn apart by his own horses,” and afterwards a minor god with a new name",
    order: "Prince of Athens, then Italian divinity",
    domain: "Troezen; the grove at Aricia",
    house: "The Athenian kings",
    father: "Theseus",
    mother: "Hippolyta",
    who: "Killed on a false accusation, brought back by Aesculapius, and hidden in Italy under a name that means twice-a-man. He is the bridge between Greek tragedy and Roman cult in one body.",
    books: [15],
    prominence: 2,
    acts: {
      "Egeria & Hippolytus": "Narrates his own death in unflinching detail — the sea-bull, the bolting team, the reins, the body distributed across the rocks — and then explains that Aesculapius' herbs brought him back and Diana gave him age, a mist, and a new name."
    }
  },
  {
    name: "Phaedra",
    kind: "mortal",
    greek: "Phaídra (Φαίδρα)",
    roman: "Phaedra",
    ovid: "the stepmother whose accusation is “either invented, or misread”",
    order: "Queen of Athens",
    domain: "Athens and Troezen",
    house: "The Cretan house",
    father: "Minos",
    mother: "Pasiphaë",
    siblings: ["Ariadne"],
    consorts: ["Theseus"],
    who: "Minos' daughter and Ariadne's sister, whose desire and its denial kill Theseus' son. Ovid lets Hippolytus tell the story, which keeps her motives entirely outside the frame.",
    books: [15],
    prominence: 3,
    acts: {
      "Egeria & Hippolytus": "Named in her stepson's account as the accuser whose charge his father believed without hearing the defence."
    }
  },
  {
    name: "Tages",
    kind: "god",
    greek: "— (an Etruscan divinity)",
    roman: "Tages",
    ovid: "the clod of earth that opens its mouth and teaches",
    order: "Etruscan divinity",
    domain: "Etruria; the art of divination",
    house: "The primordial succession",
    who: "The child-shaped figure who rises out of a ploughed furrow and dictates the Etruscan discipline of reading entrails and lightning. He is the poem's shortest and strangest origin story.",
    books: [15],
    prominence: 3,
    acts: {
      "Tages & Cipus": "Comes up out of a clod under an Etruscan plough, speaks first as earth and then as a man, and gives the Etruscans their whole science of foretelling."
    }
  },
  {
    name: "Cipus",
    kind: "mortal",
    greek: "— (a Roman figure)",
    roman: "Cipus",
    ovid: "the praetor who sees horns in the water and chooses exile over a crown",
    order: "Roman praetor",
    domain: "Rome; the refusal of kingship",
    house: "The Roman succession",
    who: "The poem's one transformation that is answered with a political decision. Told that the horns mean he will be king, he tells the Senate to keep him outside the walls — and Rome gives him as much land as he can plough in a day.",
    books: [15],
    prominence: 2,
    acts: {
      "Tages & Cipus": "Finds horns on his forehead at a stream, has a haruspex confirm what they mean, veils them with laurel, and stands outside the gate telling the people to drive him away rather than let him in as a king."
    }
  },
  {
    name: "Julius Caesar",
    kind: "mortal",
    greek: "Ioúlios Kaîsar (Ἰούλιος Καῖσαρ)",
    roman: "Gaius Iulius Caesar",
    ovid: "the man whose greatest achievement, the poem says, was his son",
    order: "Roman dictator, then god",
    domain: "Rome; the comet of 44 BCE",
    house: "The Roman succession",
    consorts: ["Calpurnia"],
    children: ["Augustus (by adoption)"],
    who: "The last mortal in the poem to be deified, and the one whose deification is documented history rather than myth. Ovid's argument is pointedly genealogical: Caesar had to become a god so that his heir could be a god's son.",
    books: [15],
    prominence: 1,
    acts: {
      "Julius Caesar": "Killed in the senate house despite every omen; his soul is caught by Venus as it leaves, carried up past the moon, and set burning in the sky as a comet with a trailing tail."
    }
  },
  {
    name: "Augustus",
    kind: "mortal",
    greek: "Sebastós (Σεβαστός)",
    roman: "Imperator Caesar Augustus",
    ovid: "“the father of his country,” addressed as a god who has not yet had to become one",
    order: "First Roman emperor",
    domain: "Rome",
    house: "The Roman succession",
    father: "Julius Caesar",
    parentageNote: "Adoptive, not biological: Octavian was Caesar's great-nephew, adopted by will in 44 BCE. The poem's last book treats the adoption as the point of the whole apotheosis.",
    who: "The living ruler at whom the poem's last hundred lines are aimed. Ovid prays for his long absence from heaven, praises him past his adoptive father, and then — in the epilogue — quietly claims a survival that does not depend on him at all.",
    books: [15],
    prominence: 1,
    acts: {
      "Julius Caesar": "The reason the comet matters: Jupiter's speech is a forecast of his reign, and Caesar's star is presented as his credentials.",
      "Ovid's epilogue": "The power whose anger the poet names first among the things that cannot destroy the finished work — a compliment and a boundary in the same clause."
    }
  },
  {
    name: "Ovid's narrator",
    aliases: ["Ovid", "the poet", "Naso"],
    kind: "mortal",
    greek: "Oouídios (Ὀουίδιος)",
    roman: "Publius Ovidius Naso",
    ovid: "“I shall be borne, immortal, above the high stars, and my name will be indestructible”",
    order: "Poet",
    domain: "The poem itself",
    house: "The Roman succession",
    who: "Not a character so much as the poem's operating presence: he invokes, hesitates, editorialises, refuses to narrate, warns his audience, and finally claims for himself the apotheosis he has just granted to Caesar. Born 43 BCE, exiled to Tomis in 8 CE, died 17 or 18 CE.",
    books: [1, 15],
    prominence: 1,
    acts: {
      "Creation": "Opens by asking the gods to breathe on an undertaking they themselves changed, and announces the subject as bodies changed into new forms — carried down in one continuous song from the world's beginning to his own time.",
      "Ovid's epilogue": "Closes with the claim that the work is finished and out of reach: fire, sword, time, and the emperor's anger cannot cancel it, and wherever Roman power reaches, he will be read."
    }
  },
  {
    name: "Future readers",
    kind: "collective",
    greek: "— (the poem's addressees)",
    roman: "ora populi",
    ovid: "“I shall be read on the lips of the people”",
    order: "The poem's audience",
    domain: "Every place Roman power reaches",
    house: "The Roman succession",
    who: "The last agent the poem names. Ovid's immortality is explicitly delegated: the work survives because it is read, which makes the reader the final mechanism of transformation in the Metamorphoses.",
    books: [15],
    prominence: 2,
    acts: {
      "Ovid's epilogue": "Given the job of keeping the poem alive — the closing lines make survival contingent on being spoken aloud rather than on any divine guarantee."
    }
  }
];
