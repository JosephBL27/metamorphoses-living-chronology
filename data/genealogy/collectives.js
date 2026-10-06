/*
 * Collectives, creatures, objects, waters, and the natural agents that Ovid
 * treats as participants rather than scenery. These records carry no descent
 * — a mulberry tree has no father — but they do carry the same two questions
 * the poem asks of everyone: what is this, and what is it doing here.
 */

export const COLLECTIVES = [
  /* ------------------------------------------------------------- peoples and hosts */
  {
    name: "The human race",
    kind: "collective",
    greek: "génos anthrṓpōn",
    roman: "genus humanum",
    ovid: "made “either of divine seed, or of earth still holding traces of its kindred sky”",
    order: "Species",
    domain: "The four ages, the Flood, and everything after",
    who: "Ovid offers two incompatible origins for humanity in consecutive lines and does not choose between them. The species is then destroyed, remade from stones, and left permanently hard.",
    books: [1],
    prominence: 2,
    acts: {
      "The Four Ages": "Declines through gold, silver, bronze, and iron: from a world with no laws and no need of them to one with boundary stones, mining, sails, poison, and sons counting their fathers' years."
    }
  },
  {
    name: "The Arcadian household",
    kind: "collective",
    greek: "— (Lycaon's court)",
    roman: "familia Lycaonis",
    ovid: "the court that worships a stranger while its king plans to murder him",
    order: "Royal household",
    domain: "Arcadia",
    who: "The people of Lycaon's palace, who correctly recognise a god when their king does not. They are the poem's first demonstration that ordinary people read divinity better than rulers do.",
    books: [1],
    prominence: 3,
    acts: {
      "Lycaon": "Begin the prayers that Lycaon mocks; the palace burns over them when Jupiter has had enough."
    }
  },
  {
    name: "The Spartoi",
    aliases: ["the sown men", "the earthborn warriors"],
    kind: "collective",
    greek: "Spartoí (Σπαρτοί)",
    roman: "Sparti",
    ovid: "“a crop of men,” rising point of spear first, then helmet, then shoulders",
    order: "Earthborn warriors",
    domain: "Thebes",
    house: "The house of Cadmus",
    who: "The armed men grown from a dragon's teeth, who kill each other down to five and then found a city. Theban identity in this poem is founded on autochthony and on civil war at the same instant.",
    books: [3],
    prominence: 2,
    acts: {
      "Cadmus & the dragon": "Come up out of the furrows fully armed, tell the terrified sower to stay out of a civil war, and fight until five are left — who lay down their weapons on Echion's word and become Cadmus' citizens."
    }
  },
  {
    name: "The Theban descendants",
    kind: "collective",
    greek: "— (the house of Cadmus)",
    roman: "domus Cadmi",
    ovid: "a family in which “no one should be called happy before his last day”",
    order: "Dynasty",
    domain: "Thebes",
    house: "The house of Cadmus",
    who: "Cadmus' children and grandchildren considered as a single unit of catastrophe: Actaeon, Semele, Ino, Pentheus, Learchus, Melicertes. Ovid keeps a running tally so the reader can feel the family being subtracted.",
    books: [3, 4],
    prominence: 2,
    acts: {
      "Cadmus & Harmonia": "The reason the founder finally asks to be a snake — a grandson torn apart, a daughter burned, another driven into the sea, and a great-grandson dashed on a rock."
    }
  },
  {
    name: "The Tyrrhenian pirates",
    kind: "collective",
    greek: "Tyrrhēnoì lēistaí",
    roman: "nautae Tyrrheni",
    ovid: "the crew whose bodies curve “like a bow bent back” as they go over the side",
    order: "Ship's company",
    domain: "The Tyrrhenian sea",
    who: "Sailors who take a beautiful sleeping boy aboard for profit and are converted into dolphins mid-mutiny. Ovid narrates the transformation from the deck, one man at a time, with the helmsman watching.",
    books: [3],
    prominence: 2,
    acts: {
      "Tyrrhenian pirates": "Overrule the one honest man aboard, set course for Egypt instead of Naxos, and find the ship rooted in ivy and the deck full of phantom beasts. Medon goes dark and finned first; the rest follow, and the sea fills with a school where a crew had been."
    }
  },
  {
    name: "The helmsman",
    aliases: ["Acoetes as steersman"],
    kind: "collective",
    greek: "kybernḗtēs",
    roman: "gubernator",
    ovid: "the one man on board who says “this is a god, whoever he is”",
    order: "Ship's officer",
    domain: "The Tyrrhenian sea",
    who: "The steersman who objects to the abduction and is spared for it. In Ovid's frame he is Acoetes himself, telling the story to a king who does not believe a word.",
    books: [3],
    prominence: 3,
    acts: {
      "Tyrrhenian pirates": "Refuses to change course, is shoved from the tiller, and is the only member of the crew still standing on two legs when the ship stops."
    }
  },
  {
    name: "The Lycian peasants",
    kind: "collective",
    greek: "Lýkioi (Λύκιοι)",
    roman: "agrestes Lycii",
    ovid: "the farmers who “are still not ashamed to quarrel under the water”",
    order: "Villagers",
    domain: "A pond in Lycia",
    who: "The people who refuse a thirsty nursing mother a drink from a public pond and stir up the mud to spoil it. Their punishment keeps them exactly where and how they behaved.",
    books: [6],
    prominence: 2,
    acts: {
      "Latona & the Lycians": "Block the goddess from the water, jump in to churn the silt, and find their voices coarsening and their necks disappearing; they are frogs now, and still shouting."
    }
  },
  {
    name: "The Thracian household",
    kind: "collective",
    greek: "— (Tereus' court)",
    roman: "domus Terei",
    ovid: "a palace where a woman is kept in a hut in the woods for a year",
    order: "Royal household",
    domain: "Thrace",
    who: "The court in which the poem's worst crime is concealed — servants who do not read the tapestry they carry, and a household that stages a festival over a locked door.",
    books: [6],
    prominence: 3,
    acts: {
      "Tereus, Procne & Philomela": "Provides the guard on the hut, the servant who unknowingly carries the woven message, and the Bacchic crowd that gives Procne her cover."
    }
  },
  {
    name: "The Argonauts",
    kind: "collective",
    greek: "Argonaûtai (Ἀργοναῦται)",
    roman: "Argonautae",
    ovid: "“the flower of Greece” aboard the first long ship",
    order: "Expedition",
    domain: "The voyage to Colchis",
    who: "The crew of the Argo, whom Ovid declines to catalogue — a pointed refusal, since the catalogue is the expected epic gesture and he has just spent Book VI setting up two of its members.",
    books: [7],
    prominence: 3,
    acts: {
      "The dragon & Golden Fleece": "Watch the trials, take the Fleece aboard, and sail for Iolcus with the king's daughter as an unexpected part of the cargo."
    }
  },
  {
    name: "The plague-stricken Aeginetans",
    kind: "collective",
    greek: "— (the people of Aegina)",
    roman: "populus Aeginae",
    ovid: "the dead who are “thrown onto other men's pyres, and there are not enough pyres”",
    order: "Population",
    domain: "Aegina",
    who: "The island's original inhabitants, wiped out by Juno's plague in the poem's most clinical passage: Ovid tracks the disease through animals, then symptoms, then the collapse of burial itself.",
    books: [7],
    prominence: 2,
    acts: {
      "Aeacus & the Myrmidons": "Die in numbers that overwhelm the rites; the sick throw themselves into wells, the temples fill with unburied bodies, and the survivors stop trying."
    }
  },
  {
    name: "The ants / Myrmidons",
    aliases: ["Myrmidons", "the ants"],
    kind: "collective",
    greek: "Myrmidónes (Μυρμιδόνες)",
    roman: "Myrmidones",
    ovid: "a people “who keep the thrift and endurance of the shape they came from”",
    order: "People",
    domain: "Aegina; later, Achilles' troops at Troy",
    who: "The column of ants on Jupiter's oak, turned into the population that replaces the dead. Ovid insists the new people kept the ants' character — patient, acquisitive, and very hard to discourage — which is the joke behind their later career under Achilles.",
    books: [7],
    prominence: 2,
    acts: {
      "Aeacus & the Myrmidons": "Pour down the trunk in a dream, stand up taller at each step, lose legs, gain size, and are in the courtyard by morning shouting for their king."
    }
  },
  {
    name: "The Cretan fleet",
    kind: "collective",
    greek: "— (the navy of Minos)",
    roman: "classis Minois",
    ovid: "the ships that made the Aegean a Cretan lake",
    order: "Navy",
    domain: "The Aegean",
    who: "Minos' sea power, and the reason the whole eastern Mediterranean has to answer his summons after his son's death. Ovid uses the fleet as an index of what makes a king in this part of the poem.",
    books: [8],
    prominence: 3,
    acts: {
      "Scylla & Minos": "Lies off Megara through a long siege, and sails away with a princess swimming after it."
    }
  },
  {
    name: "The Leleges",
    kind: "collective",
    greek: "Léleges (Λέλεγες)",
    roman: "Leleges",
    ovid: "the old Carian people through whose country Byblis runs",
    order: "People",
    domain: "Caria",
    who: "The pre-Greek inhabitants of Caria, named to place Byblis' long collapse in a landscape with its own history.",
    books: [9],
    prominence: 3,
    acts: {
      "Byblis & Caunus": "Watch the princess pass through their territory on the way to the fall that turns her into a spring."
    }
  },
  {
    name: "The Propoetides",
    kind: "collective",
    greek: "Propoitídes (Προποιτίδες)",
    roman: "Propoetides",
    ovid: "the women who lose their blush and then everything the blush implied",
    order: "Women of Amathus",
    domain: "Cyprus",
    house: "The Cyprian line",
    who: "The first women in the world, Ovid says, to sell themselves — and the reason Pygmalion gives up on women entirely. Their transformation into flint is described as barely a change at all.",
    books: [10],
    prominence: 2,
    acts: {
      "Propoetides & Cerastae": "Deny that Venus is a goddess, are made to prostitute themselves, and — the shame gone out of their faces — harden into stone with very little alteration required."
    }
  },
  {
    name: "The Cerastae",
    kind: "collective",
    greek: "Kerástai (Κεράσται)",
    roman: "Cerastae",
    ovid: "“the horned men,” who sacrifice their guests at an altar of hospitality",
    order: "People of Cyprus",
    domain: "Amathus in Cyprus",
    who: "Cypriots who kill visitors on the altar of Jupiter the Hospitable — the most exact inversion of xenia in the poem. Venus turns them into bulls, which is the shape their name already implied.",
    books: [10],
    prominence: 3,
    acts: {
      "Propoetides & Cerastae": "Butcher guests at the guest-god's altar until Venus, unwilling to depopulate her own island, settles for changing their form instead."
    }
  },
  {
    name: "The festival worshippers",
    kind: "collective",
    greek: "— (Venus' Cyprian festival)",
    roman: "cultores Veneris",
    ovid: "the crowds at the Cyprian rite where a sculptor makes a wish he dare not phrase",
    order: "Congregation",
    domain: "Cyprus",
    who: "The island's population at Venus' great feast — the public occasion that gives Pygmalion cover for a private request.",
    books: [10],
    prominence: 3,
    acts: {
      "Pygmalion": "Fill the festival with sacrifices and gilded horns while one man at the altar asks for a wife “like” his ivory girl and cannot say the true wish out loud."
    }
  },
  {
    name: "The Ciconian Maenads",
    aliases: ["the Ciconian women", "the Maenads"],
    kind: "collective",
    greek: "Kikónides (Κικόνιδες)",
    roman: "Ciconum matres",
    ovid: "the women whose shouting “took the stones' hearing away” so the missiles could land",
    order: "Bacchic celebrants",
    domain: "Thrace",
    who: "The women who kill Orpheus. Ovid's crucial detail is technical: their weapons refuse to hit him until the noise of the flutes and drums drowns the lyre — the song only fails once it cannot be heard.",
    books: [11],
    prominence: 2,
    acts: {
      "Death of Orpheus": "Throw a thyrsus, then stones that fall at his feet in apology, then — once the horns are loud enough — everything to hand; afterwards Bacchus roots each of them in the ground as an oak."
    }
  },
  {
    name: "The Greeks",
    aliases: ["the Achaeans", "the Greek chiefs"],
    kind: "collective",
    greek: "Akhaioí (Ἀχαιοί)",
    roman: "Danai / Achivi",
    ovid: "the army that waits ten years, and then argues about a suit of armour",
    order: "Expeditionary force",
    domain: "Aulis and Troy",
    who: "The Greek host, and — in Book XIII — a jury. Ovid's interest is less in what they do at Troy than in how they decide things, which he stages as a Roman courtroom.",
    books: [12, 13],
    prominence: 2,
    acts: {
      "Aulis, the serpent, and Iphigenia": "Held at Aulis by a wind that will not turn, and forced to accept a price they can all see.",
      "Cygnus & Achilles": "Watch the duel and take the field afterwards in a battle Ovid summarises in a sentence.",
      "Ajax & Ulysses": "Sit as the panel that hears both speeches and awards the arms to the better speaker.",
      "Death of Ajax": "Find in the morning that their verdict has cost them their second-best fighter.",
      "Death of Achilles": "Watch the greatest of them reduced to an urn, and immediately begin arguing about who inherits the armour."
    }
  },
  {
    name: "The sailors",
    aliases: ["the crew of Ceyx"],
    kind: "collective",
    greek: "naûtai (ναῦται)",
    roman: "nautae",
    ovid: "the crew who “call for their parents, their homes, and the children they left”",
    order: "Ship's company",
    domain: "The Aegean crossing to Claros",
    who: "Ceyx's crew, and the anonymous casualties of the poem's longest storm. Ovid individualises them only at the end, when each man's last thought turns out to be domestic.",
    books: [11],
    prominence: 3,
    acts: {
      "Ceyx's voyage": "Work the ship competently through the first hours, lose the rigging, the mast, and finally the hull, and go down calling names — while their king can only manage one."
    }
  },
  {
    name: "The Achaean judges",
    kind: "collective",
    greek: "— (the court at Croton)",
    roman: "iudices",
    ovid: "the panel whose black pebbles all come out white",
    order: "Tribunal",
    domain: "Argos",
    who: "The court that condemns Myscelus for obeying a god, and whose verdict is overturned by the god changing the ballots in the urn.",
    books: [15],
    prominence: 3,
    acts: {
      "Myscelus & Croton": "Cast their votes for a foregone conviction, and watch every stone in the urn turn from black to white before the count is announced."
    }
  },
  {
    name: "Midas' servants",
    kind: "collective",
    greek: "— (the royal household)",
    roman: "famuli",
    ovid: "the household setting a table nobody can eat from",
    order: "Household staff",
    domain: "Phrygia",
    who: "The people who lay out the meal that demonstrates the curse. Their ordinary competence is what makes the failure visible.",
    books: [11],
    prominence: 3,
    acts: {
      "Midas' golden touch": "Bring the bread, the meat, and the wine that turn hard, metallic, and undrinkable in the king's hands — the first evidence that a granted wish can be a sentence."
    }
  },
  {
    name: "The Trojans",
    kind: "collective",
    greek: "Trôes (Τρῶες)",
    roman: "Troiani",
    ovid: "a people defending a city against a rumour before the ships arrive",
    order: "Population and army",
    domain: "Troy",
    house: "The Trojan house",
    who: "The defenders, whose city Ovid destroys in a few lines after spending a whole book on the House of Fame that announced it.",
    books: [12, 13],
    prominence: 3,
    acts: {
      "Cygnus & Achilles": "Meet the Greek landing with Cygnus and Hector at the front, and lose the first engagement.",
      "Fall of Troy & Polyxena": "Lose the city, the king, the temples, and finally the right to bury their own dead without permission."
    }
  },
  {
    name: "The Trojan women",
    kind: "collective",
    greek: "Trōiádes (Τρῳάδες)",
    roman: "matres Troianae",
    ovid: "the captives who “gather the ashes of their own house in their arms”",
    order: "Captives",
    domain: "The Thracian shore",
    house: "The Trojan house",
    who: "The surviving women of Troy, distributed as property and made to watch the last sacrifices. Ovid gives their collective grief more attention than the sack itself.",
    books: [13],
    prominence: 2,
    acts: {
      "Fall of Troy & Polyxena": "Cling to the doorposts and the images of their gods, and are taken away by ship.",
      "Hecuba & Polydorus": "Hold their queen back from the sea, and then help her carry out the revenge on Polymestor."
    }
  },
  {
    name: "The Memnonides",
    kind: "collective",
    greek: "Memnonídes (Μεμνονίδες)",
    roman: "Memnonides",
    ovid: "birds “born from the fire, that fight and fall back into the ashes they came from”",
    order: "Memorial birds",
    domain: "The tomb of Memnon",
    who: "Birds generated from a funeral pyre who re-enact their origin annually. They are the poem's most literal statement that commemoration and violence can be the same practice.",
    books: [13],
    prominence: 3,
    acts: {
      "Memnon": "Rise from the smoke, circle the pyre three times, split into two flocks, and kill each other above the grave — and do it again every year on the same day."
    }
  },
  {
    name: "The Oenotrophi",
    aliases: ["the daughters of Anius"],
    kind: "collective",
    greek: "Oinotrópoi (Οἰνοτρόποι)",
    roman: "Oenotrophi",
    ovid: "the sisters whose touch made “grain, and wine, and the grey-green olive”",
    order: "Priestesses of Delos",
    domain: "Delos and Andros",
    who: "Anius' daughters, given a supply-chain miracle by Bacchus and immediately requisitioned by an army. Their escape into doves is Ovid's comment on what wars do to gifts.",
    books: [13],
    prominence: 3,
    acts: {
      "Aeneas' departure & Oenotrophi": "Feed the Greek fleet until the Greeks decide to own them; two escape to Euboea, and when the others are dragged aboard in chains they call on Bacchus and go up as white doves."
    }
  },
  {
    name: "The transformed companions",
    aliases: ["Diomedes' companions"],
    kind: "collective",
    greek: "— (the crew of Diomedes)",
    roman: "socii Diomedis",
    ovid: "men who “take a shape not far from a swan's”",
    order: "Ship's company",
    domain: "Apulia",
    who: "Diomedes' surviving crew, feathered for Acmon's insult. Their loss is why the Greek hero has no army to lend the Latins.",
    books: [14],
    prominence: 3,
    acts: {
      "Diomedes in Italy": "Try to shout Acmon down, start to change while doing it, and end as a flock along the Adriatic that has never been quite identified."
    }
  },
  {
    name: "The Cypriot mourners",
    kind: "collective",
    greek: "— (the funeral of Iphis)",
    roman: "— (the funeral procession)",
    ovid: "the procession that passes under a window",
    order: "Funeral crowd",
    domain: "Salamis in Cyprus",
    who: "The people carrying Iphis' body, whose route is the mechanism of Anaxarete's punishment.",
    books: [14],
    prominence: 3,
    acts: {
      "Iphis & Anaxarete": "Carry the bier past the house of the woman who refused him, and give her the last thing she will ever look at as a living person."
    }
  },
  {
    name: "The Roman and Sabine peoples",
    kind: "collective",
    greek: "— (Rome and the Sabines)",
    roman: "Romani Sabinique",
    ovid: "two peoples “made one under a single law”",
    order: "Populations",
    domain: "Rome",
    house: "The Roman succession",
    who: "The founding merger of the Roman state, reported by Ovid as an accomplished administrative fact rather than a story — the poem is speeding up now that it is inside history.",
    books: [14],
    prominence: 3,
    acts: {
      "Romulus & Hersilia": "Governed jointly by Romulus and Tatius, and left leaderless when the founder is taken up."
    }
  },
  {
    name: "The Roman people",
    kind: "collective",
    greek: "— (the Roman populace)",
    roman: "populus Romanus",
    ovid: "the crowd that lines the Tiber to meet a snake, and the mouths that will keep the poem alive",
    order: "Population",
    domain: "Rome",
    house: "The Roman succession",
    who: "The audience of the poem's last book — witnesses to a divine arrival, a refused kingship, an assassination, and finally the readers to whom Ovid entrusts his own survival.",
    books: [15],
    prominence: 2,
    acts: {
      "Aesculapius comes to Rome": "Crowd both banks and burn incense as the ship comes up the river, and watch the god take the island.",
      "Julius Caesar": "Absorb the omens, the murder, and the comet, and are told by the poem what the sequence means.",
      "Ovid's epilogue": "Named as the medium of the poet's immortality — read “on the lips of the people,” which makes the audience the last transformative agent in the poem."
    }
  },
  {
    name: "The Roman Senate",
    kind: "collective",
    greek: "— (the Roman senate)",
    roman: "senatus",
    ovid: "the body that measures out land for a man who refused to rule it",
    order: "Governing council",
    domain: "Rome",
    house: "The Roman succession",
    who: "The institution Cipus protects by staying outside the gate, and which repays him with as much land as a yoke of oxen can plough between dawn and dusk.",
    books: [15],
    prominence: 3,
    acts: {
      "Tages & Cipus": "Hears the praetor's warning about himself, honours him for it, and has the horned outline carved on the bronze of the gate."
    }
  },
  {
    name: "The Roman envoys",
    kind: "collective",
    greek: "— (the embassy to Epidaurus)",
    roman: "legati Romani",
    ovid: "ambassadors sent to Delphi and redirected to a smaller town",
    order: "Embassy",
    domain: "Delphi and Epidaurus",
    house: "The Roman succession",
    who: "The delegation sent to fetch a cure for the plague, and the reason a Greek god ends up with a temple on the Tiber island.",
    books: [15],
    prominence: 3,
    acts: {
      "Aesculapius comes to Rome": "Ask Apollo for help and are told to go to his son; they petition a reluctant Epidaurus and sail home with a serpent coiled on the stern."
    }
  },
  {
    name: "The people of Epidaurus",
    kind: "collective",
    greek: "Epidaúrioi (Ἐπιδαύριοι)",
    roman: "Epidaurii",
    ovid: "a city divided about whether to let its god emigrate",
    order: "Population",
    domain: "Epidaurus",
    who: "The Greeks who are asked to give up their own patron deity to a foreign power, and whose objection is overruled by the god himself.",
    books: [15],
    prominence: 3,
    acts: {
      "Aesculapius comes to Rome": "Argue among themselves through a whole day's council, and wake to find the serpent has already boarded the Roman ship."
    }
  },
  {
    name: "The listening Crotoniates",
    kind: "collective",
    greek: "Krotōniâtai (Κροτωνιᾶται)",
    roman: "Crotoniatae",
    ovid: "the audience of the poem's one lecture",
    order: "Population",
    domain: "Croton",
    who: "The citizens of Croton who sit through four hundred lines of philosophy — the poem's only depiction of an audience for pure argument rather than story.",
    books: [15],
    prominence: 3,
    acts: {
      "Pythagoras": "Gather to hear the exiled Samian explain flux, transmigration, and the ethics of not eating anything with a soul in it."
    }
  },
  {
    name: "The conspirators",
    kind: "collective",
    greek: "— (the assassins of Caesar)",
    roman: "coniurati",
    ovid: "the men “who dared what nothing had ever dared before”",
    order: "Assassins",
    domain: "Rome; the senate house",
    house: "The Roman succession",
    who: "Caesar's killers, described by Ovid in a single furious clause and otherwise unnamed. The poem is not interested in their politics, only in the fact that they made a deification necessary.",
    books: [15],
    prominence: 3,
    acts: {
      "Julius Caesar": "Bring the daggers into the curia despite every warning sign the poem has just catalogued, and by killing a man make a god."
    }
  },
  {
    name: "The Scythians",
    kind: "collective",
    greek: "Skýthai (Σκύθαι)",
    roman: "Scythae",
    ovid: "the people of a country “where the ground is bare and the trees are bare”",
    order: "People",
    domain: "Scythia",
    who: "The northern population to whom Triptolemus brings grain — and, elsewhere, the neighbours of the field where Famine lives.",
    books: [5, 8],
    prominence: 3,
    acts: {
      "Triptolemus & Lyncus": "Receive the first cultivated seed from a flying missionary their king then tries to murder."
    }
  },
  {
    name: "The inhospitable neighbors",
    kind: "collective",
    greek: "— (the Phrygian villagers)",
    roman: "vicini",
    ovid: "“a thousand houses” that were bolted, and one that was not",
    order: "Villagers",
    domain: "Phrygia",
    who: "The community drowned for refusing two travellers a bed. Their marsh is the negative space around Baucis and Philemon's temple.",
    books: [8],
    prominence: 3,
    acts: {
      "Baucis & Philemon": "Bar their doors against the disguised gods and are under water by morning — a swamp where a village was, with waterfowl on it."
    }
  },
  {
    name: "The judging nymphs",
    kind: "collective",
    greek: "Nýmphai (Νύμφαι)",
    roman: "nymphae",
    ovid: "the panel that swears by its own rivers before voting",
    order: "Judges",
    domain: "Helicon",
    who: "The nymphs empanelled to judge the contest between the Muses and the Pierides. Ovid is careful to note that they swear an oath first — the poem's contests always have procedure.",
    books: [5],
    prominence: 3,
    acts: {
      "Pierides & Muses": "Hear both performances and find unanimously for the goddesses of Helicon."
    }
  },
  {
    name: "The gods in disguise",
    kind: "collective",
    greek: "— (the woven catalogue)",
    roman: "di mutati",
    ovid: "bull, eagle, swan, satyr, shower of gold, serpent, flame, shepherd, horse, bird, ram, dolphin",
    order: "Divine shapes",
    domain: "Arachne's tapestry",
    who: "The twenty-one transformations Arachne weaves into her cloth — every one of them a disguise adopted for an assault. Presented together, they stop looking like separate stories and start looking like a method.",
    books: [6],
    prominence: 2,
    acts: {
      "Arachne & Minerva": "Fill the mortal weaver's cloth from edge to edge, each rendered so exactly that Ovid says you could recognise both the god and the place; the border of ivy and flowers around them is the only decoration."
    }
  },

  /* --------------------------------------------------------- creatures and animals */
  {
    name: "The dragon of Mars",
    aliases: ["the Theban serpent"],
    kind: "creature",
    greek: "drákōn Áreos",
    roman: "serpens Martius",
    ovid: "gold-crested, three-tongued, three-rowed of teeth, and sacred",
    order: "Sacred serpent",
    domain: "The spring at Thebes",
    house: "The house of Cadmus",
    who: "Mars' guardian snake, whose killing founds Thebes and curses it. The voice that asks Cadmus why he is staring at a serpent — because he will be one — is heard at the moment of the kill and answered a book later.",
    books: [3],
    prominence: 2,
    acts: {
      "Cadmus & the dragon": "Kills the water party, is pinned to an oak by a spear, and leaves behind the teeth that become the city's first citizens."
    }
  },
  {
    name: "The sleepless dragon",
    kind: "creature",
    greek: "drákōn ágrypnos",
    roman: "draco pervigil",
    ovid: "“the guardian that had never known sleep”",
    order: "Guardian serpent",
    domain: "The grove of the Golden Fleece at Colchis",
    who: "The last obstacle between Jason and the Fleece, and the first thing in the poem to be defeated by pharmacology rather than force.",
    books: [7],
    prominence: 3,
    acts: {
      "The dragon & Golden Fleece": "Sprinkled with a juice of Lethean herbs and put out with three repetitions of a formula — the only creature in the poem killed by a recipe."
    }
  },
  {
    name: "The winged dragons",
    kind: "creature",
    greek: "drákontes pterōtoí",
    roman: "dracones alati",
    ovid: "the team that carries a woman over the whole map of Greece",
    order: "Chariot serpents",
    domain: "The air above Thessaly and the islands",
    who: "Medea's flying team, and the poem's only long aerial travelogue: Ovid uses their flight-path to catalogue a dozen transformation stories he does not otherwise have room for.",
    books: [7],
    prominence: 3,
    acts: {
      "Medea's flight": "Carry her from Corinth over Cerambus, Pitane, Cos, Rhodes, and half a dozen other places whose stories are named and dropped in a line each."
    }
  },
  {
    name: "The Calydonian boar",
    kind: "creature",
    greek: "kápros Kalydṓnios",
    roman: "aper Calydonius",
    ovid: "eyes like fire, bristles like spear-shafts, and “foam on its shoulders the colour of a river in flood”",
    order: "Divine beast",
    domain: "Calydon",
    who: "Diana's answer to a forgotten sacrifice, and the animal around which a whole heroic generation organises itself and comes apart.",
    books: [8],
    prominence: 2,
    acts: {
      "Calydonian Boar Hunt": "Wrecks the vines and the standing grain, kills the dogs, gores Ancaeus, takes Atalanta's arrow behind the ear, and is finally put down by Meleager with two casts."
    }
  },
  {
    name: "The boar",
    aliases: ["the boar of Adonis"],
    kind: "creature",
    greek: "kápros",
    roman: "aper",
    ovid: "the animal Venus specifically warned about",
    order: "Wild beast",
    domain: "Cyprus",
    who: "The boar that kills Adonis — an ordinary animal doing an ordinary thing, which is what makes the death land so hard after a book of divine machinery.",
    books: [10],
    prominence: 3,
    acts: {
      "Death of Adonis": "Shakes the spear out of its shoulder, runs the frightened boy down, and buries its tusks in his groin."
    }
  },
  {
    name: "The Centaurs",
    kind: "creature",
    greek: "Kéntauroi (Κένταυροι)",
    roman: "Centauri",
    ovid: "“the cloud-born,” who cannot hold their wine and cannot be killed with furniture, mostly",
    order: "Hybrids",
    domain: "Thessaly",
    who: "The half-horse people of Thessaly, whose behaviour at a wedding produces the poem's longest battle. Ovid's centauromachy is a catalogue of improvised weapons and unusually specific wounds.",
    books: [9, 12],
    prominence: 2,
    acts: {
      "Caenis / Caeneus": "Attend the wedding as guests of a people they are related to.",
      "Centauromachy": "Grab the women between courses, and fight the Lapiths with altars, candelabra, roof-beams, whole trees, and a stag's antlers taken off the wall."
    }
  },
  {
    name: "The Lapiths",
    kind: "collective",
    greek: "Lapíthai (Λαπίθαι)",
    roman: "Lapithae",
    ovid: "the wedding party that becomes an army before the tables are cleared",
    order: "People",
    domain: "Thessaly",
    who: "Pirithous' people, and the human half of the poem's most famous brawl. Nestor's account gives most of them a name and a death.",
    books: [12],
    prominence: 3,
    acts: {
      "Centauromachy": "Defend the bride and the hall, lose several of their best to thrown masonry, and hold the field."
    }
  },
  {
    name: "Actaeon's hounds",
    kind: "collective",
    greek: "kýnes Aktaíōnos",
    roman: "canes Actaeonis",
    ovid: "thirty-five of them, named one by one — Melampus, Ichnobates, Laelaps, Theron, Hylaeus…",
    order: "Hunting pack",
    domain: "Cithaeron",
    who: "The most famous dogs in Latin poetry. Ovid gives them a full roll-call precisely so that the reader knows each animal by name before it starts eating its owner.",
    books: [3],
    prominence: 2,
    acts: {
      "Actaeon": "Pick up the scent of a stag that is their master, run him down across his own hunting ground, and hold him while his friends call for him to come and watch."
    }
  },
  {
    name: "The lioness",
    kind: "creature",
    greek: "léaina",
    roman: "leaena",
    ovid: "an animal with a bloody mouth that wanted a drink and nothing else",
    order: "Wild beast",
    domain: "The spring outside Babylon",
    who: "The agent of the whole Pyramus and Thisbe catastrophe, and entirely innocent: it kills nobody, tears a dropped veil, and leaves.",
    books: [4],
    prominence: 3,
    acts: {
      "Pyramus & Thisbe": "Comes to the spring to wash the blood off its jaws, finds an abandoned veil, and shakes it — creating the evidence that kills two people."
    }
  },
  {
    name: "The raven",
    kind: "creature",
    greek: "kórax (κόραξ)",
    roman: "corvus",
    ovid: "“once as white as any bird,” and now the colour of what it said",
    order: "Bird",
    domain: "Thessaly; the reporting of news",
    who: "The informer whose reward for accuracy is permanent blackness. Ovid pairs it with a crow who tries to warn it, in a nested inset that is really an essay on why not to carry news to power.",
    books: [2],
    prominence: 2,
    acts: {
      "Coronis & Ocyroe": "Sets out to tell Apollo about Coronis, ignores a crow's long cautionary tale on the way, delivers the report, and is dyed black for it."
    }
  },
  {
    name: "The white bull",
    kind: "creature",
    greek: "taûros leukós",
    roman: "taurus niveus",
    ovid: "“the colour of untrodden snow,” with horns you would take for a craftsman's work",
    order: "Divine disguise",
    domain: "The Tyrian shore",
    who: "Jupiter in animal form, and the poem's most carefully described disguise: Ovid spends more lines on the bull's appearance and manners than on the abduction itself.",
    books: [2],
    prominence: 2,
    acts: {
      "Europa": "Grazes, lies down, allows itself to be garlanded and stroked, accepts a rider, walks into the shallows, and swims."
    }
  },
  {
    name: "The mating serpents",
    kind: "creature",
    greek: "óphies",
    roman: "serpentes",
    ovid: "“two great snakes joined in the wood,” struck twice, seven years apart",
    order: "Instrument of change",
    domain: "A wood on Cyllene",
    who: "The two snakes whose interruption changes Tiresias' sex, and whose second interruption changes it back. Ovid never explains the mechanism; the poem is content to let a rule exist without a reason.",
    books: [3],
    prominence: 3,
    acts: {
      "Tiresias": "Struck with a stick and turn a man into a woman; struck again in the same place seven years later, they undo it."
    }
  },
  {
    name: "The sacred stag",
    kind: "creature",
    greek: "élaphos hierós",
    roman: "cervus sacer",
    ovid: "the tame deer with gilded horns and a jewelled collar, that let children ride it",
    order: "Beloved animal",
    domain: "Ceos",
    who: "Cyparissus' pet, killed by accident in the heat of noon — the poem's clearest example of a loss with no villain in it at all.",
    books: [10],
    prominence: 3,
    acts: {
      "Cyparissus": "Lies down in the shade to escape the heat and takes its owner's javelin without seeing it coming."
    }
  },
  {
    name: "The wolf",
    kind: "creature",
    greek: "lýkos",
    roman: "lupus",
    ovid: "the beast “with a mouth foaming and clotted, and eyes flooded red”",
    order: "Punitive beast",
    domain: "The pastures of Trachis",
    who: "Psamathe's instrument of revenge, which kills for the pleasure of it rather than for food — and is finally stopped by being turned to marble mid-bite.",
    books: [11],
    prominence: 3,
    acts: {
      "Peleus & Psamathe": "Comes out of the marshes into Ceyx's herds, kills far more than it eats, and is frozen into stone while its jaws are still closed on a carcass."
    }
  },
  {
    name: "The sea monster",
    aliases: ["the sea monsters"],
    kind: "creature",
    greek: "kêtos (κῆτος)",
    roman: "belua / pistrix",
    ovid: "the thing that “parts the water with its breast like a fast ship under oars”",
    order: "Sea beast",
    domain: "The Ethiopian coast; the strait",
    who: "Ovid uses the same kind of creature twice — the monster sent against Andromeda, and the dogs that ring Scylla's waist. Both are punishments delivered by water.",
    books: [4, 14],
    prominence: 3,
    acts: {
      "Perseus & Andromeda": "Comes in to collect the sacrifice and is fought in the air and the surf until Perseus has struck it five times.",
      "Glaucus, Scylla & Circe": "The barking heads that replace a woman's lower body, which she cannot run from because they are attached."
    }
  },
  {
    name: "The rejuvenated ram",
    kind: "creature",
    greek: "krios",
    roman: "aries",
    ovid: "the animal that goes into the pot old and comes out bleating for milk",
    order: "Demonstration animal",
    domain: "Iolcus",
    who: "The proof of concept that persuades Pelias' daughters. Ovid's staging is that of a conjuring trick performed for a specific mark.",
    books: [7],
    prominence: 3,
    acts: {
      "Pelias": "Slaughtered, boiled with the right herbs, and skips out of the cauldron as a lamb looking for a udder."
    }
  },
  {
    name: "The serpent and sparrows",
    kind: "creature",
    greek: "— (the omen at Aulis)",
    roman: "serpens et passeres",
    ovid: "eight nestlings and their mother, and a snake turned to stone with the feathers still in it",
    order: "Omen",
    domain: "Aulis",
    who: "The prodigy that fixes the war's length. Ovid keeps the arithmetic explicit — nine birds, nine years — because the whole point of an omen is that it can be counted.",
    books: [12],
    prominence: 3,
    acts: {
      "Aulis, the serpent, and Iphigenia": "Climbs a plane tree in front of the whole army, eats a nest and its mother, and is petrified in the act as confirmation."
    }
  },
  {
    name: "The sea eagle and ciris",
    kind: "creature",
    greek: "halietós kaì keîris",
    roman: "haliaeetus et ciris",
    ovid: "an osprey and a small bird that can never rest on the same water",
    order: "Transformed birds",
    domain: "The sea off Megara",
    who: "Nisus and Scylla in their final forms, locked into permanent pursuit — the poem's most efficient way of making a family crime last forever.",
    books: [8],
    prominence: 3,
    acts: {
      "Scylla & Minos": "The father dives at the daughter every time she tries to settle, and neither of them can stop."
    }
  },
  {
    name: "The Cercopes",
    kind: "collective",
    greek: "Kérkōpes (Κέρκωπες)",
    roman: "Cercopes",
    ovid: "a people “left able to complain, but not to lie”",
    order: "Tricksters",
    domain: "Pithecusae",
    who: "A race of liars turned into apes on an island named for them. Their punishment removes the specific faculty they abused, which is Ovid's usual arithmetic.",
    books: [14],
    prominence: 3,
    acts: {
      "Cercopes": "Perjure and cheat until Jupiter shortens their limbs, wrinkles their faces, and takes away articulate speech — leaving a chatter."
    }
  },
  {
    name: "The horses of the Sun",
    kind: "creature",
    greek: "híppoi Hēlíou",
    roman: "equi Solis",
    ovid: "Pyrois, Eous, Aethon, and Phlegon — “fire-breathing, and fed on ambrosia”",
    order: "Divine team",
    domain: "The sun's road",
    who: "Four horses that know the route and can feel that the driver does not. Ovid's account of the disaster is a study in weight: the chariot is too light without its usual load, and everything follows from that.",
    books: [2],
    prominence: 2,
    acts: {
      "The solar chariot": "Feel the unfamiliar lightness, leave the worn track, bolt through the constellations, and drag the car low enough to set the earth on fire."
    }
  },
  {
    name: "The Hours",
    kind: "collective",
    greek: "Hôrai (Ὧραι)",
    roman: "Horae",
    ovid: "the goddesses who yoke the team while the boy is being talked out of it",
    order: "Divine attendants",
    domain: "The palace of the Sun",
    who: "The seasons and hours personified, who prepare the chariot on schedule regardless of the argument going on beside them — the poem's quietest piece of dramatic irony.",
    books: [2],
    prominence: 3,
    acts: {
      "Phaethon at the Sun's palace": "Bring the horses out and put them under the yoke while the father is still explaining why this cannot be allowed to happen."
    }
  },
  {
    name: "The dream-shapes",
    aliases: ["Icelos", "Phobetor", "Phantasos"],
    kind: "collective",
    greek: "óneiroi (ὄνειροι)",
    roman: "somnia",
    ovid: "Morpheus for people, Icelos for beasts, Phantasos for earth and stone and water",
    order: "Dream gods",
    domain: "The House of Sleep",
    who: "Sleep's thousand sons, of whom three are specialised. Ovid's taxonomy of dreaming by subject matter is entirely his own invention and has never been improved on.",
    books: [11],
    prominence: 2,
    acts: {
      "House of Sleep": "Lie scattered across the cavern floor like a harvest, and are sorted through by their father until he finds the one whose speciality is human faces."
    }
  },
  {
    name: "The shades",
    kind: "collective",
    greek: "skiaí (σκιαί)",
    roman: "umbrae",
    ovid: "“the bloodless people,” who stop and listen",
    order: "The dead",
    domain: "The Underworld",
    who: "The audience for the only performance that ever stopped the Underworld's machinery: Tantalus stops reaching, Ixion's wheel halts, Sisyphus sits on his rock, and the Furies cry for the first time.",
    books: [10],
    prominence: 2,
    acts: {
      "Orpheus & Eurydice": "Weep at the song; every punishment in Hades pauses for its duration, which is the poem's highest claim for what art can do — and it still is not enough."
    }
  },
  {
    name: "The transmigrating soul",
    kind: "collective",
    greek: "psykhḗ (ψυχή)",
    roman: "anima",
    ovid: "“the same spirit, in different bodies” — omnia mutantur, nihil interit",
    order: "Philosophical principle",
    domain: "Every body in the poem",
    who: "The Pythagorean thesis that gives the whole Metamorphoses a theory: nothing is destroyed, everything changes, and the soul moves between shapes as wax takes new impressions.",
    books: [15],
    prominence: 1,
    acts: {
      "Pythagoras": "Argued for at length as the reason not to eat meat, and — read back across fourteen books — as the reason a poem of transformations can end by claiming its author will survive his own body."
    }
  },

  /* ------------------------------------------------------ waters, plants, objects */
  {
    name: "The winds",
    aliases: ["the storm winds"],
    kind: "force",
    greek: "ánemoi (ἄνεμοι)",
    roman: "venti",
    ovid: "Eurus to the dawn, Zephyr to the evening, Boreas to the north, Auster to the wet south",
    order: "Elemental powers",
    domain: "The whole ordered world",
    who: "Assigned their quarters in the creation and released as instruments of policy thereafter — the Flood, the storm that kills Ceyx, the calm of the halcyon days.",
    books: [1, 11],
    prominence: 3,
    acts: {
      "The Great Flood": "Jupiter locks up the north wind and lets the wet south out, with rain running from its beard and its wings.",
      "Ceyx's voyage": "Fight each other over the ship until the sea is standing in walls, and take the vessel apart plank by plank."
    }
  },
  {
    name: "The river nymphs",
    aliases: ["the fountain nymphs", "the sea nymphs", "the Naiads", "the nymphs"],
    kind: "collective",
    greek: "Nēiádes / Nēreídes",
    roman: "Naides / Nereides",
    ovid: "the sisters who answer a prayer by changing the body that made it",
    order: "Water divinities",
    domain: "Springs, rivers, pools, and the sea",
    who: "The poem's most frequently invoked minor divinities. They rescue, transform, mourn, bury, and occasionally pursue — and they are almost always the last resort of someone being chased.",
    books: [1, 4, 5, 9, 10, 13],
    prominence: 2,
    acts: {
      "Pan & Syrinx": "Hear the nymph's plea at the Ladon and turn her into the reeds that will be cut for the pipe.",
      "Salmacis & Hermaphroditus": "The company Salmacis will not join, which is what marks her as an anomaly before she does anything.",
      "Achelous & Hercules": "Named as the ones who took the broken horn, filled it with fruit and flowers, and made it the cornucopia.",
      "Adonis born": "Take the child out of the tree, lay him on grass, and wash him in his mother's tears.",
      "Byblis & Caunus": "Take pity on the exhausted girl as she falls in Caria, and — since she will not stop crying — turn her into the one thing that can weep forever: a spring under a dark oak.",
      "Galatea, Acis & Polyphemus": "The company Galatea belongs to, and the audience for the story she tells about a summer that ended badly."
    }
  },
  {
    name: "The trees",
    kind: "collective",
    greek: "déndra",
    roman: "arbores",
    ovid: "twenty-six species catalogued as they arrive: oak, poplar, laurel, hazel, ash, vine, pine, and the rest",
    order: "Audience",
    domain: "A bare hill in Thrace",
    who: "The forest that walks to Orpheus. Ovid turns the catalogue — normally a device for ships or armies — into an audience list, and slips Cyparissus in at the end so the last tree named has a story.",
    books: [10],
    prominence: 3,
    acts: {
      "Orpheus' audience": "Come to the hill one species at a time and make a shade for the singer, who has been sitting in the open with nothing over him."
    }
  },
  {
    name: "The rocks",
    kind: "collective",
    greek: "pétrai",
    roman: "saxa",
    ovid: "stones that “forget to fall” while the lyre is going",
    order: "Audience",
    domain: "Thrace",
    who: "Part of the same audience as the trees and the animals — and, later, the same objects that will be thrown at him once the music can no longer be heard.",
    books: [10, 11],
    prominence: 3,
    acts: {
      "Orpheus' audience": "Move toward the song, and drop at his feet in apology when the Maenads first throw them."
    }
  },
  {
    name: "The wild animals",
    kind: "collective",
    greek: "thēría",
    roman: "ferae",
    ovid: "the beasts that come and sit down",
    order: "Audience",
    domain: "Thrace",
    who: "The third part of Orpheus' audience, and Ovid's shorthand for total persuasion: a lyre that stops predation is a lyre that ought to be able to stop death.",
    books: [10],
    prominence: 3,
    acts: {
      "Orpheus' audience": "Gather with the birds and the trees, and are still there when the singing stops."
    }
  },
  {
    name: "The reeds",
    kind: "object",
    greek: "kálamoi",
    roman: "harundines",
    ovid: "“a thin and complaining sound” in the marsh, and later a whole field that will not keep a secret",
    order: "Plants",
    domain: "Arcadia and Phrygia",
    who: "The poem's most reliable medium. Reeds carry Syrinx's voice into an instrument and Midas' secret out of a hole in the ground — in both cases turning a body or a confidence into something audible.",
    books: [1, 11],
    prominence: 3,
    acts: {
      "Pan & Syrinx": "Catch the wind where the nymph was, and give the god the idea for the pipe.",
      "Midas' ears": "Grow over the buried whisper and repeat it every autumn when the south wind moves them."
    }
  },
  {
    name: "The mulberry tree",
    kind: "object",
    greek: "sykáminos",
    roman: "morus",
    ovid: "the tree whose fruit “is dark when ripe, in memory”",
    order: "Plant",
    domain: "Outside Babylon",
    who: "The witness that becomes the memorial. Ovid gives it the only speaking role among the poem's plants — Thisbe addresses it directly and asks it to keep the colour.",
    books: [4],
    prominence: 3,
    acts: {
      "Pyramus & Thisbe": "Stands white-fruited over the meeting place, takes the blood into its roots, and has borne dark berries ever since; the ashes of both lovers rest in one urn beneath it."
    }
  },
  {
    name: "The hyacinth flower",
    kind: "object",
    greek: "hyákinthos",
    roman: "hyacinthus",
    ovid: "petals inscribed AI AI — the god's own cry, printed",
    order: "Plant",
    domain: "Sparta and the Trojan plain",
    who: "The poem's clearest fusion of grief and writing: a flower with letters on it, which then turns out to spell a second dead hero's name as well.",
    books: [10, 13],
    prominence: 3,
    acts: {
      "Hyacinthus": "Comes up from the blood on the Spartan grass with Apollo's lament written into it.",
      "Death of Ajax": "Rises again from Ajax's blood, and the same two letters are now read as the start of his name — one flower, two griefs, and a pun Ovid does not apologise for."
    }
  },
  {
    name: "The Anemone",
    kind: "object",
    greek: "anemṓnē (ἀνεμώνη)",
    roman: "anemone",
    ovid: "“the wind opens it, and the same wind takes it apart”",
    order: "Plant",
    domain: "Cyprus",
    who: "Adonis' flower, named for the wind, and lasting less than a day. It is the last transformation in Orpheus' book and the most fragile in the poem.",
    books: [10],
    prominence: 3,
    acts: {
      "Death of Adonis": "Springs from nectar poured on blood within the hour, is the colour of a pomegranate seed, and is scattered by the same breeze that opens it."
    }
  },
  {
    name: "The sacred oak",
    kind: "object",
    greek: "drŷs hierá",
    roman: "quercus sacra",
    ovid: "a tree “as big as a wood,” hung with tablets and garlands from answered prayers",
    order: "Sacred tree",
    domain: "Ceres' grove in Thessaly; and Jupiter's oak on Aegina",
    who: "Two great trees hold the poem's opposite outcomes: Ceres' oak, cut down by a man who is then eaten by his own hunger, and Jupiter's oak, which delivers a new population.",
    books: [7, 8],
    prominence: 3,
    acts: {
      "Erysichthon & Mestra": "Bleeds when the axe goes in, and the dryad inside speaks her curse from under the bark.",
      "Aeacus & the Myrmidons": "Carries the column of ants that becomes a people, and rustles without wind as the sign that the prayer has been heard."
    }
  },
  {
    name: "The discus",
    kind: "object",
    greek: "dískos",
    roman: "discus",
    ovid: "the weight that “struck the ground, and came back into his face”",
    order: "Object",
    domain: "The Spartan playing field",
    who: "The instrument of Hyacinthus' death, and the poem's clearest statement that an accident needs no malice to be permanent.",
    books: [10],
    prominence: 3,
    acts: {
      "Hyacinthus": "Thrown high by a god showing off, it lands and rebounds into a boy running in to catch it."
    }
  },
  {
    name: "The river Pactolus",
    kind: "object",
    greek: "Paktōlós (Πακτωλός)",
    roman: "Pactolus",
    ovid: "“the river whose sands have been rich ever since”",
    order: "River",
    domain: "Lydia",
    who: "The stream that takes Midas' curse off him and keeps it. Ovid's aetiology explains a genuine Lydian gold industry with a story about a man who could not eat.",
    books: [11],
    prominence: 3,
    acts: {
      "Midas' golden touch": "Receives the king at its source, washes the power out of his body, and turns its own bed to metal."
    }
  },
  {
    name: "The river Marsyas",
    kind: "object",
    greek: "Marsýas (Μαρσύας)",
    roman: "Marsyas",
    ovid: "“the clearest river in Phrygia,” made of tears",
    order: "River",
    domain: "Phrygia",
    who: "A river composed of the grief of everyone who watched a flaying. Ovid's causal chain — tears soak into the earth, the earth cannot hold them, the water runs out to the sea — is the poem's most physical account of mourning.",
    books: [6],
    prominence: 3,
    acts: {
      "Marsyas": "Runs out of the ground where the satyrs, nymphs, shepherds, and country gods had been weeping, and carries the name down to the sea."
    }
  },
  {
    name: "The river Hebrus",
    kind: "object",
    greek: "Hébros (Ἕβρος)",
    roman: "Hebrus",
    ovid: "the water that carries a head and a lyre, both still sounding",
    order: "River",
    domain: "Thrace",
    who: "The river that takes Orpheus' remains to the sea, and the reason the story of his voice outlasting his body is geographically specific.",
    books: [11],
    prominence: 3,
    acts: {
      "Death of Orpheus": "Receives the head and the lyre, and floats them down midstream making a sound the banks answer, until the sea carries them to Lesbos."
    }
  },
  {
    name: "The river Evenus",
    kind: "object",
    greek: "Eúēnos (Εὔηνος)",
    roman: "Evenus",
    ovid: "the swollen crossing where a centaur offers to be useful",
    order: "River",
    domain: "Aetolia",
    who: "The flooded ford that creates the opportunity Nessus needs. Everything in the Hercules sequence follows from a river being too high to wade with a passenger.",
    books: [9],
    prominence: 3,
    acts: {
      "Nessus & Deianira": "Runs high with winter rain, so that a man carrying weapons has to hand his wife to someone else."
    }
  },
  {
    name: "The breeze / Aura",
    aliases: ["Aura", "the breeze"],
    kind: "force",
    greek: "aúra (αὔρα)",
    roman: "aura",
    ovid: "the word that is both a cool wind and a girl's name, and kills a marriage",
    order: "Air; and a misunderstanding",
    domain: "The woods above Athens",
    who: "The poem's deadliest pun. Cephalus calls to the breeze to come and cool him; his wife, hidden in the bushes, hears a woman's name. Ovid builds an entire tragedy out of a single ambiguous noun.",
    books: [7],
    prominence: 2,
    acts: {
      "Cephalus & Procris": "Invoked daily by an overheated hunter in language a jealous listener cannot distinguish from a love song."
    }
  },
  {
    name: "The personified Night",
    aliases: ["Night", "Nox"],
    kind: "force",
    greek: "Nýx (Νύξ)",
    roman: "Nox",
    ovid: "the power invoked with the stars and the moon before a rejuvenation",
    order: "Primordial power",
    domain: "Darkness, and the hours when magic works",
    who: "One of the powers Medea addresses at the start of her great incantation — Ovid's most complete surviving Latin ritual formula, and the model for every witch's speech after it.",
    books: [7],
    prominence: 3,
    acts: {
      "Aeson rejuvenated": "Called on with Hecate, the earth, the winds, the mountains, and the rivers in the invocation that authorises the whole procedure."
    }
  },
  {
    name: "The thousand voices",
    kind: "collective",
    greek: "phōnaì myríai",
    roman: "voces mille",
    ovid: "“the whole house murmurs, and repeats what it hears, and doubles it”",
    order: "Acoustic phenomenon",
    domain: "The House of Fame",
    who: "The sound inside Rumour's bronze building — not words but the physical fact of transmission, which Ovid describes as a sea heard from far off, or thunder after the storm has passed.",
    books: [12],
    prominence: 3,
    acts: {
      "House of Fame": "Fill every hour of the day and night, mixing truth with invention, so that nothing leaves the building in the shape it arrived."
    }
  },
  {
    name: "The gods of the sea",
    aliases: ["the sea gods"],
    kind: "collective",
    greek: "theoì thalássioi",
    roman: "di maris",
    ovid: "the powers who take pity “after so much grief”",
    order: "Marine divinities",
    domain: "The sea",
    who: "The collective that receives Ino, Melicertes, Glaucus, and finally Ceyx and Alcyone — the poem's standing mechanism for converting a drowning into a divinity.",
    books: [4, 11, 13],
    prominence: 3,
    acts: {
      "Ceyx & Alcyone": "Take pity on the pair and change both, so that a marriage survives its own drowning.",
      "Glaucus": "Receive a mortal fisherman and put him through the hundred-river purification that makes him one of them."
    }
  },
  {
    name: "The Sirens",
    kind: "creature",
    greek: "Seirênes (Σειρῆνες)",
    roman: "Sirenes",
    ovid: "“the daughters of Achelous,” given wings so they could search, and keeping the faces of girls",
    order: "Bird-women",
    domain: "The Sicilian sea",
    who: "In Ovid's version the Sirens are Proserpina's companions who asked for wings to look for her — a benign origin for creatures the tradition otherwise treats as pure predation.",
    books: [5],
    prominence: 3,
    acts: {
      "Cyane & Ascalaphus": "Ask the gods for wings to search the sea for their lost friend, and are granted feathers, claws, and — because the singing must be preserved — a girl's face and a human voice."
    }
  },
  {
    name: "The satyrs and nymphs",
    kind: "collective",
    greek: "Sátyroi kaì Nýmphai",
    roman: "Satyri et Nymphae",
    ovid: "the countryside that weeps until the ground gives way",
    order: "Rural divinities",
    domain: "Phrygia",
    who: "The mourners at Marsyas' flaying, whose grief is quantified: enough tears to saturate the earth and become a river.",
    books: [6],
    prominence: 3,
    acts: {
      "Marsyas": "Weep with the shepherds and the country gods until the soil cannot absorb any more and the water runs off as the clearest stream in the region."
    }
  },
  {
    name: "The rejected lovers",
    kind: "collective",
    greek: "— (Narcissus' suitors)",
    roman: "spreti amatores",
    ovid: "“many youths and many girls” who wanted him, and one who prayed",
    order: "Suitors",
    domain: "Boeotia",
    who: "The queue of people Narcissus refuses, one of whom formulates the curse that the poem then grants: may he love, and never possess what he loves.",
    books: [3],
    prominence: 3,
    acts: {
      "Echo & Narcissus": "Are turned away in turn, and supply the prayer that Nemesis approves."
    }
  },
  {
    name: "The letter-bearing servant",
    kind: "collective",
    greek: "— (Byblis' messenger)",
    roman: "famulus",
    ovid: "the man carrying a tablet he has not read and cannot survive delivering",
    order: "Household servant",
    domain: "Miletus",
    who: "The go-between who watches his mistress hesitate, drop the tablet, retrieve it, and hand it over — and is nearly killed for what is written on it.",
    books: [9],
    prominence: 3,
    acts: {
      "Byblis & Caunus": "Waits through the writing and the rewriting, delivers the letter, and comes back frightened to report that the answer was violence."
    }
  },
  {
    name: "The watching fisherman and shepherd",
    kind: "collective",
    greek: "— (the witnesses below)",
    roman: "piscator et pastor",
    ovid: "“someone with a trembling rod, or a shepherd leaning on his crook — and they thought they were gods”",
    order: "Witnesses",
    domain: "The sea between Crete and Ionia",
    who: "The three onlookers who see two men flying and draw the obvious conclusion. Ovid uses them to establish the altitude, the wonder, and the mistake all at once.",
    books: [8],
    prominence: 3,
    acts: {
      "Daedalus & Icarus": "Look up from a rod, a plough, and a crook, and take a craftsman and a boy for divinities."
    }
  },
  {
    name: "The Etruscan ploughman",
    kind: "collective",
    greek: "— (the Etruscan farmer)",
    roman: "arator Tyrrhenus",
    ovid: "the man who turns up a lump of soil that starts talking",
    order: "Farmer",
    domain: "Etruria",
    who: "The first witness to Tages, and the accidental founder of Etruscan divination.",
    books: [15],
    prominence: 3,
    acts: {
      "Tages & Cipus": "Sees the clod move by itself, watches it take a human shape, and hears the science of foretelling delivered from a furrow."
    }
  },
  {
    name: "The haruspex",
    kind: "collective",
    greek: "hieroskópos",
    roman: "haruspex",
    ovid: "the reader of entrails who confirms the worst possible good news",
    order: "Diviner",
    domain: "Rome",
    who: "The Etruscan specialist who tells Cipus that the horns mean a crown — the interpretation that turns a bodily oddity into a political crisis.",
    books: [15],
    prominence: 3,
    acts: {
      "Tages & Cipus": "Reads the victim, goes pale, and says that if the man goes through the gate he will be king — and Rome will be a monarchy again."
    }
  },
  {
    name: "The oracle",
    kind: "collective",
    greek: "khrēstḗrion",
    roman: "oraculum",
    ovid: "the answer that is always exact and never clear",
    order: "Divine response",
    domain: "Delphi, Ammon, Themis' shrine, and the Sibyl's cave",
    who: "The poem's recurring instrument of compressed language. Every oracle in the Metamorphoses is correct; the drama is always in the reading, from Deucalion's stones to Atalanta's warning against marriage.",
    books: [1, 3, 4, 7, 8, 10, 15],
    prominence: 2,
    acts: {
      "Atalanta & Hippomenes": "Tells Atalanta she has no use for a husband and will lose herself while still alive — a prophecy she takes as a ban and Ovid lets her fulfil in both senses."
    }
  },
  {
    name: "The Cypriot altar",
    kind: "object",
    greek: "bōmós",
    roman: "ara",
    ovid: "an altar of Jupiter the Hospitable, stained with the blood of guests",
    order: "Sacred object",
    domain: "Amathus in Cyprus",
    who: "The stone that makes the Cerastae's crime legible: it is not just murder, it is murder performed on the furniture of hospitality.",
    books: [10],
    prominence: 3,
    acts: {
      "Propoetides & Cerastae": "Serves as the killing block for visitors, which is what a passing goddess notices before she decides what to do about it."
    }
  },
  {
    name: "The rejected lovers of Pomona",
    aliases: ["the satyrs of the orchard"],
    kind: "collective",
    greek: "— (Pomona's suitors)",
    roman: "petitores",
    ovid: "satyrs, Pans, Silvanus, and Priapus — all locked out",
    order: "Rural divinities",
    domain: "Latium",
    who: "The queue of rustic gods Pomona refuses before Vertumnus works out that the way in is a story rather than a proposal.",
    books: [14],
    prominence: 3,
    acts: {
      "Vertumnus & Pomona": "Come to the orchard wall and are kept outside it, establishing that the god who succeeds does so by a different method entirely."
    }
  }
];
