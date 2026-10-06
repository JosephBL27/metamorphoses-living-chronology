/*
 * Primordial powers, Titans, Olympians, the lesser divinities, the divine
 * waters and winds, and the personified forces Ovid treats as agents.
 *
 * `ovid` records the moniker or epithet the poem itself leans on. Where Ovid
 * uses a Greek-derived name in a Latin poem (Dis, Phoebus, Cynthia) that is
 * noted, because it is often the name a reader actually meets on the page.
 */

export const COSMIC_FIGURES = [
  /* ---------------------------------------------------------------- primordial */
  {
    name: "Chaos",
    aliases: ["chaos"],
    kind: "primordial",
    greek: "Kháos (Χάος)",
    roman: "Chaos",
    ovid: "rudis indigestaque moles — “a raw and undivided mass”",
    order: "Primordial state",
    domain: "Undifferentiated matter before form",
    house: "The primordial succession",
    who: "Not a god with a will but the condition preceding all gods: a single confused body in which sea, land, and air are present without being distinct, and nothing keeps its shape long enough to be named.",
    books: [1],
    prominence: 1,
    acts: {
      "Creation": "Opens the poem as the state that must be undone. Ovid describes Chaos entirely by negation — no Titan Sun yet, no Moon renewing her horns, no earth balanced in surrounding air — so that the first transformation in a poem of transformations is the act of separation itself."
    }
  },
  {
    name: "Nature / the shaping divinity",
    aliases: ["Nature", "the shaping divinity", "deus et melior natura"],
    kind: "primordial",
    greek: "Phýsis (Φύσις) / Dēmiourgós",
    roman: "Natura / deus et melior natura",
    ovid: "“a god, and a better nature” — deliberately left unnamed",
    order: "Creative principle",
    domain: "Ordering, separating, and setting limits",
    house: "The primordial succession",
    who: "The unidentified maker who resolves Chaos into a cosmos. Ovid refuses to say which god it was, or whether it was a god at all rather than nature improving on itself — a studied agnosticism that lets the poem begin without committing to any single theology.",
    books: [1],
    prominence: 1,
    acts: {
      "Creation": "Divides sea from land and sky from air, curls the earth into a great ball, sets zones and winds and rivers, and finally makes the human being — either from divine seed or from earth still holding traces of its kindred sky. The whole cosmogony is performed by an agent Ovid declines to name."
    }
  },
  {
    name: "Earth",
    aliases: ["Earth / Tellus", "Earth / the Great Mother", "Tellus", "Terra", "Gaia", "the Great Mother"],
    kind: "primordial",
    greek: "Gaîa (Γαῖα)",
    roman: "Tellus / Terra",
    ovid: "Tellus, and the “great mother” whose bones are stones",
    order: "Primordial power",
    domain: "Land, generation, and the buried dead",
    house: "The primordial succession",
    children: ["The Giants", "Python", "The Furies (variant tradition)"],
    who: "The oldest generative body in the poem: mother of monsters and men, source of the spontaneous life that appears after the Flood, and the only power that speaks back to Jupiter on her own behalf.",
    books: [1, 2, 5],
    prominence: 2,
    acts: {
      "Creation": "Receives shape at the maker's hands — pressed into a sphere, given seas, plains, valleys, and forests — and then produces living forms from her own warmed mud.",
      "Deucalion & Pyrrha": "Is the answer to Themis' riddle. The “great mother” is Earth, and her “bones” are stones; reading the oracle correctly is what allows Deucalion and Pyrrha to remake the human race.",
      "The solar chariot": "Raises her scorched face, hair singed and springs dried, and delivers the formal complaint that finally moves Jupiter to strike Phaethon down. It is the intervention of the victim, not of a rival god, that ends the catastrophe."
    }
  },
  {
    name: "Sea",
    aliases: ["the sea", "Pontus", "Mare"],
    kind: "primordial",
    greek: "Póntos (Πόντος)",
    roman: "Mare / Pontus",
    ovid: "the element “that shakes with waves” once it is given a place",
    order: "Primordial element",
    domain: "The salt waters and their limits",
    house: "The primordial succession",
    who: "One of the three great masses whose separation constitutes the world. In Ovid the sea is less a person than a boundary that other powers keep testing — by flood, by crossing, by drowning, and by transformation into marine gods.",
    books: [1],
    prominence: 3,
    acts: {
      "Creation": "Is drawn off from the mingled mass, given shores to beat against and coasts to enclose, and stocked with swimming life — the middle term between the heavy earth beneath and the weightless fire above."
    }
  },
  {
    name: "Sky",
    aliases: ["the sky", "Caelum", "Aether", "Uranus"],
    kind: "primordial",
    greek: "Ouranós (Οὐρανός) / Aithḗr",
    roman: "Caelum / Aether",
    ovid: "the “weightless fire” that takes the highest place",
    order: "Primordial element",
    domain: "The upper air, the fixed stars, the divine road",
    house: "The primordial succession",
    who: "The topmost zone of the ordered world and, later in the poem, a destination: the place to which apotheosis carries Hercules, Aeneas, Romulus, Caesar, and finally Ovid's own name.",
    books: [1],
    prominence: 3,
    acts: {
      "Creation": "Takes the outermost seat as the lightest element, and is immediately populated — gods take the heavens, stars and divine forms fill the aether, and the constellations become the visible archive that later books keep writing into."
    }
  },

  /* -------------------------------------------------------------------- Titans */
  {
    name: "Saturn",
    aliases: ["Saturnus", "Cronus", "Kronos"],
    kind: "titan",
    greek: "Krónos (Κρόνος)",
    roman: "Saturnus",
    ovid: "the ruler of the Golden Age, later “sent down to shadowy Tartarus”",
    order: "Titan king",
    domain: "The Golden Age; in Italy, the god of the sown field",
    house: "The Olympian house",
    father: "Sky",
    mother: "Earth",
    consorts: ["Ops / Rhea"],
    children: ["Jupiter", "Juno", "Neptune", "Pluto / Dis", "Ceres", "Chiron (by Philyra)"],
    who: "The displaced king of the gods. His reign is the Golden Age — no law, no fear, no ploughing, no boundary stones — and his overthrow by Jupiter is the point at which the poem's moral history begins to decline.",
    books: [1, 14],
    prominence: 2,
    acts: {
      "The Four Ages": "Rules the Golden Age, in which faith and right are kept without enforcement. When he is sent down to Tartarus and the world falls to Jupiter, silver follows gold, the year is divided into seasons, and human beings first take shelter and plough.",
      "Picus, Canens & Circe": "Appears as the father of Picus, anchoring the Latin king in divine descent and quietly reminding the reader that Italy was where the exiled Golden-Age god was said to have settled."
    }
  },
  {
    name: "Hyperion",
    aliases: ["Titan"],
    kind: "titan",
    greek: "Hyperíōn (Ὑπερίων)",
    roman: "Hyperion",
    ovid: "named obliquely: the Sun is “Titan,” the Hyperionid",
    order: "Titan",
    domain: "The light of the elder generation",
    house: "The house of the Sun",
    father: "Sky",
    mother: "Earth",
    children: ["Sol / Phoebus", "Aurora", "Luna"],
    who: "The Titan of light, father of the Sun, the Dawn, and the Moon. Ovid rarely names him directly but constantly invokes him by patronymic, which is why the Sun in the poem is so often simply “Titan.”",
    books: [2],
    prominence: 3
  },
  {
    name: "Themis",
    aliases: ["Themis of the oracle"],
    kind: "titan",
    greek: "Thémis (Θέμις)",
    roman: "Themis",
    ovid: "the oracular goddess of Parnassus, “then holding the oracles”",
    order: "Titan goddess",
    domain: "Divine law, right custom, prophecy",
    house: "The primordial succession",
    father: "Sky",
    mother: "Earth",
    who: "The Titan of established right, who held the Delphic oracle before Apollo. In Ovid she is the voice of law spoken in riddles: her commands are always correct and never plain.",
    books: [1, 9],
    prominence: 2,
    acts: {
      "Deucalion & Pyrrha": "Answers the survivors' prayer with the command to veil their heads, loosen their robes, and throw their great mother's bones behind them. The instruction sounds impious; correctly read, it repopulates the earth.",
      "Iolaus & the sons of Callirhoe": "Closes the gods' quarrel over rejuvenation by delivering a prophecy that reaches past the immediate case to Thebes and Argos, demonstrating that fate, not divine favour, sets the limits of who may be made young again."
    }
  },
  {
    name: "Atlas",
    aliases: ["Atlas the Titan"],
    kind: "titan",
    greek: "Átlas (Ἄτλας)",
    roman: "Atlas",
    ovid: "the giant “greater in body than any man,” then the mountain that bears the sky",
    order: "Titan",
    domain: "The western limit of the world; the sky's weight",
    house: "The primordial succession",
    father: "Iapetus",
    children: ["The Pleiades", "The Hesperides (variant tradition)", "Maia — and so grandfather of Mercury"],
    who: "A Titan of the far west, guardian of the golden-apple orchard, and — after Perseus — the mountain range that holds up the heavens. His transformation is the poem's largest single change of scale.",
    books: [4],
    prominence: 2,
    acts: {
      "Perseus & Atlas": "Refuses hospitality to Perseus because an oracle warned him that a son of Jupiter would strip his golden trees. Perseus produces Medusa's head; beard and hair become forests, shoulders become ridges, bones become stone, and the whole sky with its stars comes to rest on him."
    }
  },
  {
    name: "Prometheus",
    kind: "titan",
    greek: "Promētheús (Προμηθεύς)",
    roman: "Prometheus",
    ovid: "“the son of Iapetus,” maker of the human form",
    order: "Titan",
    domain: "Forethought, craft, the making of humanity",
    house: "The renewed human race",
    father: "Iapetus",
    children: ["Deucalion"],
    who: "The Titan credited in one of Ovid's alternatives with moulding the first human being from earth mixed with rain-water, in the image of the gods. He never appears on stage; he stands behind the human race as a possible origin the poem leaves open.",
    books: [1],
    prominence: 3
  },
  {
    name: "Oceanus",
    kind: "titan",
    greek: "Ōkeanós (Ὠκεανός)",
    roman: "Oceanus",
    ovid: "the encircling stream and its aged king",
    order: "Titan",
    domain: "The world-encircling river and all fresh waters",
    house: "The primordial succession",
    father: "Sky",
    mother: "Earth",
    consorts: ["Tethys"],
    children: ["The Oceanids — including Clymene, Clytie, Eurynome, Perse", "The river gods"],
    who: "The elder water-god who rings the world. His daughters, the Oceanids, thread through the poem as mothers of the ambitious and the abandoned.",
    books: [13],
    prominence: 3,
    acts: {
      "Glaucus": "With Tethys, receives the drowned fisherman and performs the purification — a hundred rivers poured over his head — that turns a mortal into a sea god."
    }
  },
  {
    name: "Tethys",
    kind: "titan",
    greek: "Tēthýs (Τηθύς)",
    roman: "Tethys",
    ovid: "the sea's grandmother, who grants Juno's requests",
    order: "Titan goddess",
    domain: "The nursing waters of the sea",
    house: "The primordial succession",
    father: "Sky",
    mother: "Earth",
    consorts: ["Oceanus"],
    children: ["The Oceanids", "The rivers"],
    who: "Consort of Oceanus and foster-mother of much of the divine sea. She is the power to whom other gods appeal when they want a punishment written into the order of the waters themselves.",
    books: [13],
    prominence: 3,
    acts: {
      "Glaucus": "Joins Oceanus in the rite that strips Glaucus of everything mortal, leaving him with sea-green beard and fish-tail and no way back to the shore he came from."
    }
  },
  {
    name: "Cybele",
    aliases: ["the Great Mother", "Mater Deum", "Rhea"],
    kind: "goddess",
    greek: "Kybélē (Κυβέλη) / Rhéa",
    roman: "Magna Mater / Cybele",
    ovid: "“the mother of the gods,” whose lions draw her chariot",
    order: "Great goddess",
    domain: "Mountains, wild beasts, ecstatic cult",
    house: "The Olympian house",
    who: "The Phrygian Great Mother, worshipped at Rome from 204 BCE. Her temples, her lions, and her insistence on ritual respect make her one of the poem's most reliable punishers of desecrated space.",
    books: [10, 14],
    prominence: 3,
    acts: {
      "Atalanta & Hippomenes": "Punishes the lovers for taking their pleasure inside her sacred cave: manes rise on their necks, fingers curve into claws, and the two who could not wait become the yoked lions that now draw her chariot."
    }
  },

  /* ----------------------------------------------------------------- Olympians */
  {
    name: "Jupiter",
    aliases: ["Jupiter / Jove", "Jove", "Zeus", "the father of the gods"],
    kind: "god",
    greek: "Zeús (Ζεύς)",
    roman: "Iuppiter / Iovis",
    ovid: "“the father,” the Thunderer, and — in his own house — Saturnius",
    order: "Olympian king",
    domain: "Sky, thunder, kingship, oaths, hospitality",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Ops / Rhea",
    siblings: ["Juno", "Neptune", "Pluto / Dis", "Ceres", "Vesta"],
    consorts: ["Juno", "Io", "Callisto", "Europa", "Semele", "Danaë", "Leda", "Alcmene", "Aegina"],
    children: ["Apollo & Diana (by Latona)", "Minerva", "Mercury", "Bacchus", "Perseus", "Hercules", "Minos", "Epaphus", "Arcas", "Aeacus"],
    who: "The ruling god, and the poem's most consequential single agent. He is simultaneously the guarantor of hospitality and law and the serial pursuer whose desires start most of the transformations in the first six books — a contradiction Ovid never resolves and never lets the reader forget.",
    books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
    prominence: 1,
    acts: {
      "The Four Ages": "Takes the world when Saturn falls, and with him the Silver Age begins: the year is cut into seasons, cold arrives, and human beings must build and sow.",
      "Lycaon": "Comes down in human form to test the rumour of human wickedness, is served human flesh by Lycaon, and calls the council of gods that decides on the Flood.",
      "The Great Flood": "Sets aside the thunderbolt for fear of igniting the aether, calls up the south wind and Neptune's rivers instead, and drowns the human race in a deliberately measured act of policy rather than rage.",
      "Io": "Hides his assault on Io under a manufactured darkness, then turns her into a heifer to escape Juno's questioning — and hands the animal over when Juno asks for it as a gift.",
      "The solar chariot": "Ends the fire by killing the boy: thunderbolt against charioteer, one destruction chosen to prevent a larger one. Ovid lets the reader notice that the father of gods saves the cosmos by breaking a father's son.",
      "Callisto": "Takes Diana's own shape to approach Callisto, and afterwards sets her and Arcas among the stars — protection and display in a single act.",
      "Europa": "Puts down the sceptre, becomes a white bull of impossible gentleness, and carries the princess across the sea. Ovid's comment is dry: majesty and love do not sit well together.",
      "Semele": "Bound by an oath sworn on the Styx, arrives in full divinity though he takes his lightest thunderbolts, and burns the woman he came to please.",
      "Tiresias": "Argues idly with Juno over which sex takes more pleasure in love, and calls in the only witness who has been both.",
      "Perseus & Atlas": "Named as Perseus' father by Danaë's shower of gold — the paternity Atlas fears, and which Perseus uses as his claim on hospitality.",
      "Pluto & Proserpina": "Rules on the abduction as a matter of family diplomacy, declaring that Pluto is no unworthy son-in-law, then brokers the compromise that splits Proserpina's year.",
      "Pelops": "Presides over the gods who reassemble the boy Tantalus served them, replacing the missing shoulder with ivory.",
      "Aeacus & the Myrmidons": "Fathers Aeacus, and repopulates plague-emptied Aegina by turning a column of ants on his sacred oak into the people who will be called Myrmidons.",
      "Baucis & Philemon": "Travels Phrygia disguised as a mortal with Mercury, is refused by a thousand houses, and rewards the one poor couple who take him in.",
      "Death of Hercules": "Reassures the anxious gods that only the mortal part of Hercules can burn, and lifts what his own line contributed into the sky.",
      "Iolaus & the sons of Callirhoe": "Grants Callirhoe's request to age her infant sons into avengers, and then has to face the other gods' claims for the same favour.",
      "Memnon": "Hears Aurora's grief for her son and produces the memorial birds that rise from the pyre and fight each year above the ashes.",
      "Cercopes": "Punishes the lying Cercopes by leaving them a shape suited to their character — misshapen apes who can chatter but no longer lie in speech.",
      "Aeneas' apotheosis": "Assents to Venus' request for her son's deification, allowing the river Numicius to wash away everything in Aeneas that could die.",
      "Julius Caesar": "Delivers the great speech on fixed fate to Venus, showing her the bronze records of the future and forecasting Augustus' reign beyond Caesar's death.",
      "Ovid's epilogue": "Stands as the outer limit of what power can reach: the poet claims that neither Jupiter's anger nor fire nor sword nor time can destroy the finished work."
    },
    bookActs: {
      3: "Remains the absent cause of the Theban catastrophes — Semele's death, Bacchus' birth, and the resentment Juno takes out on Cadmus' daughters.",
      6: "Appears in Arachne's tapestry as a serial deceiver in animal shapes, which is precisely the reading Minerva cannot allow to stand."
    }
  },
  {
    name: "Juno",
    aliases: ["Hera", "Saturnia", "the queen of the gods"],
    kind: "goddess",
    greek: "Hḗra (Ἥρα)",
    roman: "Iuno",
    ovid: "Saturnia — the daughter of Saturn, named for her lineage when she is at her most implacable",
    order: "Olympian queen",
    domain: "Marriage, legitimate birth, sovereignty, Argos and Carthage",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Ops / Rhea",
    siblings: ["Jupiter", "Neptune", "Pluto / Dis", "Ceres", "Vesta"],
    consorts: ["Jupiter"],
    children: ["Mars", "Vulcan / Mulciber", "Hebe", "Lucina (identified with her)"],
    who: "Wife and sister of Jupiter, and the poem's most persistent engine of consequence. She almost never punishes the guilty party: the pattern of the first books is that Jupiter acts and a woman is transformed, which makes Juno both an agent of injustice and its clearest witness.",
    books: [1, 2, 3, 4, 7, 9, 11, 12, 14],
    prominence: 1,
    acts: {
      "Io": "Notices the daylight darkness over Argos, comes down, praises the heifer, and asks for it as a present — a request Jupiter cannot refuse without confessing. She then sets Argus to watch it.",
      "Callisto": "Waits until the child is born, then drags the girl by the hair and takes her shape from her; when even that is answered with stars, she persuades Tethys and Oceanus never to let the Bear bathe in their waters.",
      "Semele": "Disguises herself as the old nurse Beroë, plants the doubt, and coaches Semele into demanding the proof that kills her.",
      "Tiresias": "Loses the argument about pleasure and, in disproportionate anger, blinds the witness who ruled against her.",
      "Echo & Narcissus": "Strips Echo of independent speech after the nymph's long conversations kept her from catching Jupiter among the mountain nymphs.",
      "Athamas & Ino": "Goes down to the Underworld in person to fetch Tisiphone, because the survival of Bacchus' aunt is more than she is prepared to tolerate.",
      "Aeacus & the Myrmidons": "Sends the plague on Aegina because the island carries the name of one of Jupiter's lovers.",
      "Galanthis": "Sits with locked knees and folded fingers outside Alcmene's door for seven days and nights to prevent Hercules' birth.",
      "House of Sleep": "Sends Iris to the cave of Sleep to have a truthful dream sent to Alcyone — the one time in the poem her intervention is an act of mercy.",
      "Ceyx & Alcyone": "Cannot bear prayers offered to her for a man already dead, and moves to end the false devotion by telling Alcyone the truth.",
      "Romulus & Hersilia": "Is finally reconciled, and lets Iris bring Hersilia up to join her deified husband as the goddess Hora."
    },
    bookActs: {
      4: "Pursues every surviving branch of Cadmus' family, first through madness and then through the sea.",
      12: "Stands with the Greek side of the Trojan war as the long-running divine grudge that Ovid inherits from Virgil and compresses almost to a footnote."
    }
  },
  {
    name: "Neptune",
    aliases: ["Poseidon", "the ruler of the sea"],
    kind: "god",
    greek: "Poseidôn (Ποσειδῶν)",
    roman: "Neptunus",
    ovid: "“the god of the trident,” brother of the Thunderer",
    order: "Olympian",
    domain: "Sea, earthquake, horses, the shifting of shorelines",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Ops / Rhea",
    siblings: ["Jupiter", "Juno", "Pluto / Dis", "Ceres", "Vesta"],
    consorts: ["Amphitrite", "Medusa", "Caenis", "Mestra (pursued)", "Theophane"],
    children: ["Polyphemus", "Pegasus & Chrysaor (from Medusa's blood)", "Periclymenus' line", "Cygnus"],
    who: "The sea's king, and the poem's specialist in irreversible bodily gifts. More than any other god he grants what is asked — invulnerability, shape-shifting, a change of sex — and the gift always turns out to have an edge.",
    books: [1, 4, 8, 11, 12],
    prominence: 2,
    acts: {
      "The Great Flood": "Summons the rivers, strikes the earth with his trident to open new springs, and lets the sea take the fields — the second half of Jupiter's deliberate drowning.",
      "Erysichthon & Mestra": "Having taken Mestra, grants her the power to change shape, which her father immediately monetises by selling her again and again.",
      "Laomedon & Hesione": "Builds Troy's walls with Apollo for a wage Laomedon refuses to pay, and sends the flood and sea-monster that make the city's first destruction inevitable.",
      "Caenis / Caeneus": "Takes Caenis on the shore and then offers any wish; asked never to suffer this again, he grants both a man's body and a body no weapon can pierce.",
      "Cygnus & Achilles": "Fathers the invulnerable Cygnus, and when Achilles finally throttles him inside his own armour, converts him into the swan whose name he already bore.",
      "Periclymenus": "Gives his descendant the power to take any shape — a gift that ends with Hercules shooting the eagle Periclymenus has just become.",
      "Death of Achilles": "Cannot forgive the killing of Cygnus or the sack of the city whose walls he built, and guides Paris' arrow into Achilles' heel."
    }
  },
  {
    name: "Pluto / Dis",
    aliases: ["Pluto", "Dis", "Hades", "Dis Pater", "the king of the shades"],
    kind: "god",
    greek: "Háidēs (Ἅιδης) / Ploútōn",
    roman: "Dis / Pluto / Orcus",
    ovid: "Dis — the Latin name, punning on wealth, that Ovid prefers for the Underworld's king",
    order: "Olympian",
    domain: "The dead, the buried wealth of the earth",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Ops / Rhea",
    siblings: ["Jupiter", "Juno", "Neptune", "Ceres", "Vesta"],
    consorts: ["Proserpina"],
    who: "Ruler of the third kingdom, the only Olympian brother without a share of the light. Ovid presents him as unusually literal-minded: he takes what he wants at once and then argues, in court, that this was a marriage.",
    books: [5, 10, 14],
    prominence: 2,
    acts: {
      "Pluto & Proserpina": "Struck by Cupid's arrow while inspecting Sicily's foundations for earthquake damage, he sees, seizes, and carries off Proserpina in a single motion — Ovid's blunt line is that he saw, loved, and took her, almost in one instant.",
      "Cyane & Ascalaphus": "Opens a road to Tartarus by hurling his sceptre into Cyane's pool when the nymph blocks his passage.",
      "Orpheus & Eurydice": "Yields to the only song ever to move the bloodless dead, and grants Eurydice on one condition — which turns the gift into a second test the poem knows Orpheus will fail."
    }
  },
  {
    name: "Ceres",
    aliases: ["Demeter", "the harvest goddess"],
    kind: "goddess",
    greek: "Dēmḗtēr (Δημήτηρ)",
    roman: "Ceres",
    ovid: "“the first to break the earth with the curved plough” — the goddess who gave grain and law together",
    order: "Olympian",
    domain: "Grain, cultivation, motherhood, the Eleusinian mysteries",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Ops / Rhea",
    siblings: ["Jupiter", "Juno", "Neptune", "Pluto / Dis", "Vesta"],
    consorts: ["Jupiter"],
    children: ["Proserpina"],
    who: "The goddess who made agriculture possible, and whose grief is the only divine emotion in the poem strong enough to stop the world from feeding itself. Her searches, her rages, and her negotiated compromise structure the whole of Book V.",
    books: [5, 6, 8],
    prominence: 1,
    acts: {
      "Pluto & Proserpina": "Searches the whole earth by torchlight for her daughter, and when a boy mocks her thirst turns him into a spotted newt with a flick of barley-water.",
      "Cyane & Ascalaphus": "Reads Cyane's dissolved grief in the floating girdle, breaks the ploughs and kills the crops of Sicily in retaliation, and finally goes to Jupiter to demand her daughter back.",
      "Arethusa & Alpheus": "Learns from Arethusa, who saw Proserpina enthroned on her passage under the earth, exactly where her daughter has gone.",
      "Triptolemus & Lyncus": "Sends Triptolemus out in her winged-dragon chariot to teach the world to sow, and turns the king who tries to murder her missionary into a lynx.",
      "Pelops": "The one guest at Tantalus' table distracted enough by grief for her lost daughter to eat from the boy's shoulder — the detail that explains why the restored Pelops needed an ivory replacement.",
      "Erysichthon & Mestra": "Cannot come herself to a man cursed with Hunger, since the two powers can never meet, so she sends an Oread to fetch Famine to him."
    }
  },
  {
    name: "Apollo",
    aliases: ["Phoebus", "Phoebus Apollo", "Delius", "Paean"],
    kind: "god",
    greek: "Apóllōn (Ἀπόλλων)",
    roman: "Apollo / Phoebus",
    ovid: "Phoebus, “the unshorn god,” Delius — and, awkwardly, the same epithet he gives the Sun",
    order: "Olympian",
    domain: "Prophecy, archery, healing, music, plague, the lyre",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Latona",
    siblings: ["Diana"],
    consorts: ["Daphne (pursued)", "Coronis", "Leucothoe", "Chione", "Hyacinthus", "Cyparissus"],
    children: ["Aesculapius", "Orpheus (by Calliope, in the tradition Ovid assumes)", "Amphissus (by Dryope)"],
    who: "The god of ordered sound and unerring aim who is, in this poem, almost never in control of his own attachments. Every love he takes up ends as a plant, a bird, a flower, or a corpse — and each becomes an emblem he then wears.",
    books: [1, 2, 3, 4, 6, 10, 11, 13, 14, 15],
    prominence: 1,
    acts: {
      "Apollo & Daphne": "Kills the Python, boasts to Cupid about real archery, and is shot for it. His pursuit ends with a laurel; his consolation speech turns a woman's refusal into his own permanent insignia.",
      "Coronis & Ocyroe": "Kills Coronis on a raven's report, regrets it instantly, saves the unborn Aesculapius from the pyre, and turns the informant's feathers from white to black.",
      "Cadmus & the dragon": "Issues the oracle that stops Cadmus' search for Europa and sends him to follow a cow to the site of Thebes.",
      "Niobe": "Answers his mother's complaint by killing Niobe's seven sons at long range, one after another, with a precision Ovid narrates like a catalogue.",
      "Latona & the Lycians": "Present as the infant whose thirst the Lycian peasants refuse, giving the episode its retrospective outrage.",
      "Marsyas": "Wins the pipe-against-lyre contest and flays the satyr alive — the poem's most physically explicit demonstration of what divine artistic superiority costs the loser.",
      "Cyparissus": "Loves the boy who kills his own tame stag by accident, and grants his request to mourn forever by making him the cypress that stands at funerals.",
      "Hyacinthus": "Throws the discus that the wind turns back on his beloved, and — unable to keep the boy alive — writes his own cry of grief onto the petals of a new flower.",
      "Midas' ears": "Loses the vote of one listener in his contest with Pan and gives Midas the ears his judgement deserved.",
      "Laomedon & Hesione": "Builds Troy's walls with Neptune for a wage that is never paid, planting the grievance that outlives the city.",
      "Death of Achilles": "Guides the arrow: the god who could not save his own loves takes the greatest of the Greeks by directing another man's hand.",
      "Cumaean Sibyl": "Offered the Sibyl as many years as grains in a heap of dust in exchange for her love; refused, he kept the letter of the bargain and withheld the youth.",
      "Aesculapius comes to Rome": "Redirects the Roman envoys from Delphi to Epidaurus, telling them they need his son rather than himself."
    }
  },
  {
    name: "Diana",
    aliases: ["Diana / Trivia", "Artemis", "Cynthia", "Phoebe", "Trivia", "Latonia"],
    kind: "goddess",
    greek: "Ártemis (Ἄρτεμις)",
    roman: "Diana",
    ovid: "Cynthia, Latonia, Trivia — and “the goddess of the crossways” in her Italian, three-formed aspect",
    order: "Olympian",
    domain: "The hunt, wild country, virginity, childbirth, the moon, the crossroads",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Latona",
    siblings: ["Apollo"],
    who: "The huntress who guards her own boundaries absolutely. Her punishments are notable for exactitude rather than cruelty: she turns the man who saw her into the animal he was hunting, and the follower who lost her virginity out of her company.",
    books: [1, 2, 3, 5, 6, 8, 12, 15],
    prominence: 1,
    acts: {
      "Callisto": "Bathes with her company, sees what Callisto has been hiding for nine months, and banishes her from the sacred water — punishing the victim for the state Jupiter left her in.",
      "Actaeon": "Caught bathing without her weapons, throws the only thing to hand — water — and tells the hunter to go and say he saw her, if he can speak at all.",
      "Arethusa & Alpheus": "Answers her own nymph's cry by wrapping her in cloud and then opening the earth so the pursued water can escape under the sea.",
      "Niobe": "Kills Niobe's seven daughters as Apollo killed the sons, sparing only long enough for the mother to beg for the last one.",
      "Latona & the Lycians": "Present as the infant refused water in Lycia — the second half of the offence her mother avenges.",
      "Calydonian Boar Hunt": "Overlooked in Oeneus' harvest offerings, sends the monstrous boar whose hunt fractures a generation of heroes.",
      "Aulis, the serpent, and Iphigenia": "Relents at the altar, substitutes a hind for Iphigenia, and lets the fleet sail — mercy that begins a war.",
      "Egeria & Hippolytus": "As Trivia, hides the restored Hippolytus in her Italian grove under the name Virbius, and finally dissolves the inconsolable Egeria into a spring."
    }
  },
  {
    name: "Minerva",
    aliases: ["Pallas", "Athena", "Tritonia", "Pallas Athena"],
    kind: "goddess",
    greek: "Athēnâ (Ἀθηνᾶ) / Pallás",
    roman: "Minerva",
    ovid: "Pallas, Tritonia — the goddess “born without a mother”",
    order: "Olympian",
    domain: "Craft, weaving, strategy, olive, wisdom, the city",
    house: "The Olympian house",
    father: "Jupiter",
    who: "Born from Jupiter's head, patron of every skill that requires patience. In Ovid she is the god most often called on by other gods to arbitrate craft — and the one whose judgements about art are least trustworthy, because she is a competitor.",
    books: [2, 3, 4, 5, 6, 8],
    prominence: 1,
    acts: {
      "Battus & Aglauros": "Sends Envy into Aglauros' house, having been offended by the Cecropids' handling of the secret basket entrusted to them.",
      "Cadmus & the dragon": "Appears at Cadmus' shoulder after the dragon dies and tells him to sow the teeth — she is the one who turns a killing into a city.",
      "Perseus & Phineus": "Stands beside Perseus with the aegis through the wedding-hall massacre, and afterwards carries Medusa's face on her own shield.",
      "Pyreneus & the Muses": "Visits the Muses on Helicon to see the spring struck open by Pegasus' hoof, and hears the story of Pyreneus' attempt on them.",
      "Arachne & Minerva": "Comes disguised as an old woman, is refused, weaves the four corners of divine punishment into her own cloth, finds no fault in Arachne's, and tears it — then strikes the girl and gives her a spider's endless thread.",
      "Perdix": "Catches the boy Daedalus threw from her citadel and turns him into the partridge that never trusts height again."
    }
  },
  {
    name: "Venus",
    aliases: ["Aphrodite", "Cytherea", "Cypris", "the Idalian goddess"],
    kind: "goddess",
    greek: "Aphrodítē (Ἀφροδίτη)",
    roman: "Venus",
    ovid: "Cytherea, and — crucially for Rome — the mother of Aeneas and ancestress of the Julian house",
    order: "Olympian",
    domain: "Desire, beauty, generation, the sea's foam, Roman ancestry",
    house: "The Olympian house",
    parentageNote: "Ovid keeps both traditions open: daughter of Jupiter in the Homeric line, born from the sea's foam in the Hesiodic.",
    consorts: ["Vulcan / Mulciber", "Mars", "Anchises", "Adonis"],
    children: ["Cupid / Amor", "Aeneas", "Hermaphroditus (by Mercury)"],
    who: "The power that sets almost every plot of the poem in motion, and the one Olympian with a direct genealogical stake in its ending: through Aeneas she is the ancestress of the Julii, which turns the last book's apotheosis into family business.",
    books: [3, 4, 5, 10, 14, 15],
    prominence: 1,
    acts: {
      "Mars & Venus": "Caught with Mars in Vulcan's invisible net and displayed to the assembled gods, she takes her revenge not on her husband but on the Sun who informed on her.",
      "Salmacis & Hermaphroditus": "Mother of the boy; her request, with Mercury's, grants the merged body the further power to unman whoever bathes in that pool.",
      "Pluto & Proserpina": "Sets the entire abduction in motion by ordering Cupid to shoot Dis — explicitly to extend her empire over the third kingdom.",
      "Propoetides & Cerastae": "Punishes Cyprus twice: the Cerastae become bulls for sacrificing guests, and the Propoetides, who denied her divinity, lose their shame and then their softness.",
      "Pygmalion": "Understands what the sculptor does not dare to ask for at her festival, and gives the ivory the warmth his hand tests for.",
      "Myrrha": "Named as the goddess whose anger — or whose absence — stands behind the daughter's impossible desire, in a story Orpheus warns his audience not to hear.",
      "Atalanta & Hippomenes": "Gives Hippomenes the three golden apples from her Cyprian field, then destroys him for forgetting to thank her.",
      "Death of Adonis": "Warns Adonis against the animals that do not run, arrives too late by swan-chariot, and turns his blood into the anemone that a wind opens and the same wind scatters.",
      "Diomedes in Italy": "Turns Acmon and his companions into birds for insulting her while she is still finishing her account with the Greeks who wounded her at Troy.",
      "Aeneas' apotheosis": "Petitions the gods for her son, then has Numicius wash the mortal part away so the rest can be called Indiges.",
      "Julius Caesar": "Runs through heaven trying to raise help against the conspirators, and — failing that — catches Caesar's soul as it leaves and carries it up as a comet."
    }
  },
  {
    name: "Mars",
    aliases: ["Ares", "Gradivus", "Mavors"],
    kind: "god",
    greek: "Árēs (Ἄρης)",
    roman: "Mars / Mavors / Gradivus",
    ovid: "Gradivus — and, for Rome, the father of Romulus and the state's own ancestor",
    order: "Olympian",
    domain: "War, violence, the Roman military calendar",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Juno",
    consorts: ["Venus", "Rhea Silvia (in the Roman foundation myth)"],
    children: ["Romulus & Remus", "The dragon of Thebes (his serpent)"],
    who: "The war god, comparatively marginal in Ovid's Greek material and central in his Roman ending. His serpent begins Thebes; his son begins Rome.",
    books: [3, 4, 14, 15],
    prominence: 2,
    acts: {
      "Cadmus & the dragon": "Owner of the spring-guarding serpent Cadmus kills — the offence that shadows the whole Theban dynasty and eventually turns Cadmus himself into a snake.",
      "Mars & Venus": "Caught in the adultery that Vulcan makes visible; he pays the fine of divine laughter and, Ovid notes, would gladly pay it again.",
      "Romulus & Hersilia": "Claims the promise Jupiter once made him, drives his chariot down through the air, and carries his son off the earth to become Quirinus."
    }
  },
  {
    name: "Mercury",
    aliases: ["Hermes", "Cyllenius", "Atlantiades", "the son of Maia"],
    kind: "god",
    greek: "Hermês (Ἑρμῆς)",
    roman: "Mercurius",
    ovid: "Cyllenius, Atlantiades — the winged god with the sleep-bringing wand",
    order: "Olympian",
    domain: "Messages, boundaries, theft, trade, travellers, the guidance of souls",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Maia",
    consorts: ["Venus", "Herse", "Chione"],
    children: ["Hermaphroditus", "Autolycus", "Pan (in one tradition)"],
    who: "The god who crosses every boundary he is supposed to guard: between gods and mortals, waking and sleep, life and death, truth and story. He is also the poem's other great narrator — the Pan and Syrinx tale is his.",
    books: [1, 2, 4, 8, 11, 14],
    prominence: 2,
    acts: {
      "Io": "Sent to kill Argus, he comes as a goatherd, plays and talks the hundred eyes to sleep, and cuts the head off mid-story.",
      "Pan & Syrinx": "Tells the story of Pan and Syrinx as a sedative — the poem's most explicit demonstration that narrative is a weapon.",
      "Battus & Aglauros": "Tests the herdsman Battus with a bribe and a disguise, turns him to touchstone, then falls for Herse and is obstructed by her sister until Envy does the work for him.",
      "Europa": "Drives Agenor's cattle down to the shore on his father's instructions, positioning the herd Jupiter needs to walk into.",
      "Salmacis & Hermaphroditus": "Father of the boy who ends the book's most disturbing merger; with Venus, he grants the pool its power.",
      "Baucis & Philemon": "Travels with Jupiter in mortal shape and shares the old couple's single goose and beechwood table."
    }
  },
  {
    name: "Vulcan / Mulciber",
    aliases: ["Vulcan", "Mulciber", "Hephaestus"],
    kind: "god",
    greek: "Hḗphaistos (Ἥφαιστος)",
    roman: "Vulcanus / Mulciber",
    ovid: "Mulciber — “the softener,” the smith whose work no one can see through",
    order: "Olympian",
    domain: "Fire, metalwork, invention",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Juno",
    consorts: ["Venus"],
    who: "The maker among the gods, and the only one whose revenge is a piece of engineering. His bronze chains are thinner than thread and finer than a spider's web — the poem's most elegant object, built for humiliation.",
    books: [2, 4],
    prominence: 3,
    acts: {
      "Mars & Venus": "Forges the invisible net, rigs it over the bed, throws the doors open on the trapped pair, and calls the gods in to look — winning the argument and losing the room, since the gods laugh at him too."
    }
  },
  {
    name: "Bacchus / Dionysus",
    aliases: ["Bacchus", "Dionysus", "Liber", "Lyaeus", "Bromius"],
    kind: "god",
    greek: "Diónysos (Διόνυσος)",
    roman: "Bacchus / Liber",
    ovid: "Liber, Lyaeus, Bromius — the twice-born god “whose divinity Thebes will not admit”",
    order: "Olympian",
    domain: "Wine, ecstasy, theatre, release, the dissolution of categories",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Semele",
    consorts: ["Ariadne"],
    who: "The god born from a burnt mother and a divine thigh, whose arrival always forces a city to decide whether it can recognise him. Refusal is the only real crime in his stories, and the punishment is always a loss of self-control that mirrors his own gift.",
    books: [3, 4, 10, 11, 13],
    prominence: 1,
    acts: {
      "Semele": "Rescued from his mother's ashes as an unfinished child and sewn into his father's thigh to be carried to term.",
      "Pentheus & Bacchus": "Arrives at Thebes to a king who calls him a fraud, and lets the city's women do the rest.",
      "Tyrrhenian pirates": "Filling a stolen ship with vines, ivy, phantom beasts, and the smell of wine, he turns the crew overboard as dolphins and spares only the helmsman who told the truth.",
      "The Minyades": "Ignored by three sisters who stay indoors weaving and telling stories through his festival, until their looms sprout ivy and they shrink into bats.",
      "Cadmus & Harmonia": "Retains the family's one surviving honour: his cult is the reason Cadmus' exile ends in transformation rather than obliteration.",
      "Death of Orpheus": "Avenges his own poet on the Ciconian women by rooting them in the ground as oaks.",
      "Midas' golden touch": "Repays Midas for the return of Silenus by granting the wish that nearly starves him, then mercifully names the river that can wash it off.",
      "Aeneas' departure & Oenotrophi": "Gives Anius' daughters the power to turn whatever they touch into grain, wine, and oil, and then saves them as doves when the Greeks come to requisition them."
    }
  },
  {
    name: "Cupid / Amor",
    aliases: ["Cupid", "Amor", "Eros"],
    kind: "god",
    greek: "Érōs (Ἔρως)",
    roman: "Cupido / Amor",
    ovid: "the boy with two arrows — one gold and sharp, one lead and blunt",
    order: "Divine child",
    domain: "Desire, both its arousal and its refusal",
    house: "The Olympian house",
    mother: "Venus",
    who: "The smallest agent with the largest consequences. Ovid's Cupid is an archer with a technical specification: gold to kindle love, lead to repel it, which means the poem's most famous chase is caused by two different arrows in two different bodies.",
    books: [1, 5, 7, 10],
    prominence: 2,
    acts: {
      "Apollo & Daphne": "Answers Apollo's mockery by shooting him with the gold and Daphne with the lead — engineering a pursuit in which neither party can change their mind.",
      "Pluto & Proserpina": "Selects the sharpest arrow in the quiver at his mother's order and shoots the king of the dead, opening the third kingdom to Venus' empire.",
      "Jason & Medea": "Named as the power behind Medea's divided monologue, in which reason and desire argue in the same voice and desire wins by a formal argument.",
      "Myrrha": "Explicitly exonerated by Orpheus: this is not Cupid's arrow but a Fury's torch — the narrator's way of quarantining incest from ordinary love."
    }
  },
  {
    name: "Hymenaeus",
    aliases: ["Hymen"],
    kind: "god",
    greek: "Hyménaios (Ὑμέναιος)",
    roman: "Hymenaeus / Hymen",
    ovid: "the wedding god “in his saffron cloak,” who comes to one marriage without a blessing",
    order: "Divine attendant",
    domain: "Weddings, the marriage torch and song",
    house: "The Olympian house",
    who: "The god invoked at every Roman wedding, and in this poem chiefly a barometer: when he arrives without a smile and with a torch that will not catch, the marriage is already over.",
    books: [9, 10],
    prominence: 3,
    acts: {
      "Orpheus & Eurydice": "Summoned from Crete in saffron to Orpheus' wedding, he brings neither the right words nor a good omen — the torch sputters, smokes, and refuses to burn however hard it is swung."
    }
  },
  {
    name: "Latona",
    aliases: ["Leto"],
    kind: "goddess",
    greek: "Lētṓ (Λητώ)",
    roman: "Latona",
    ovid: "the goddess who bore twins under a palm on floating Delos",
    order: "Titan-born goddess",
    domain: "Motherhood of the twin archers",
    house: "The Olympian house",
    consorts: ["Jupiter"],
    children: ["Apollo", "Diana"],
    who: "Mother of Apollo and Diana, and the poem's exemplar of a divinity whose whole power lies in her children. Insulting her is the fastest way in the Metamorphoses to lose an entire family.",
    books: [6],
    prominence: 2,
    acts: {
      "Niobe": "Hears Niobe boast of fourteen children against her two, and asks her twins for exactly the correction they deliver.",
      "Latona & the Lycians": "Told in flashback: refused a drink from a Lycian pond while nursing the newborn twins, she curses the peasants to live in that water forever — and they are still croaking their abuse from it."
    }
  },
  {
    name: "Sol / Phoebus",
    aliases: ["Sol", "Helios", "the Sun", "Titan", "Hyperion's son", "Phoebus (the Sun)"],
    kind: "god",
    greek: "Hḗlios (Ἥλιος)",
    roman: "Sol",
    ovid: "Phoebus and Titan — Ovid uses “Phoebus” for both the Sun and Apollo, and lets the ambiguity stand",
    order: "Titan-born god",
    domain: "The sun's course, sight, disclosure",
    house: "The house of the Sun",
    father: "Hyperion",
    consorts: ["Clymene", "Perse", "Leucothoe", "Clytie", "Rhode"],
    children: ["Phaethon", "The Heliades", "Aeetes", "Circe", "Pasiphaë"],
    who: "The god who sees everything, which makes him both the poem's chief witness and its worst gossip. His children — Phaethon, Circe, Pasiphaë, Aeetes, Medea's line — inherit brilliance and catastrophic appetite in equal measure.",
    books: [1, 2, 4, 7, 14],
    prominence: 1,
    acts: {
      "Phaethon at the Sun's palace": "Receives his son in a palace of Mulciber's making, swears by the Styx before he hears the request, and then spends the rest of the scene trying to talk the boy out of the one thing he cannot now refuse.",
      "The solar chariot": "Watches the horses take the bit, cannot help, and afterwards hides his face for a day — the world's light going out with grief.",
      "The Heliades & Cycnus": "Present at the Eridanus as his daughters harden into poplars; his tears, and theirs, are the amber the river carries to Roman brides.",
      "Mars & Venus": "Sees the adultery first, as he sees everything, and tells Vulcan — a disclosure Venus repays by making him love Leucothoe.",
      "Leucothoe & Clytie": "Loves Leucothoe in the shape of her own mother, is exposed by the jealous Clytie, and — unable to raise the buried girl — turns her body into the frankincense that now rises to him."
    }
  },
  {
    name: "Aurora",
    aliases: ["Eos", "the Dawn"],
    kind: "goddess",
    greek: "Ēṓs (Ἠώς)",
    roman: "Aurora",
    ovid: "the saffron goddess who opens the eastern doors",
    order: "Titan-born goddess",
    domain: "Dawn",
    house: "The house of the Sun",
    father: "Hyperion",
    consorts: ["Tithonus", "Cephalus (attempted)"],
    children: ["Memnon"],
    who: "The dawn, and one of the poem's few grieving mothers among the gods. Her daily return makes her sorrow structural: she is required to keep bringing light to a world that killed her son.",
    books: [7, 13],
    prominence: 3,
    acts: {
      "Cephalus & Procris": "Carries off the newly married Cephalus, and when he will not stop talking about his wife, releases him with a poisoned suggestion — go, and see whether she was worth it.",
      "Memnon": "Comes to Jupiter in mourning dress to ask for some honour for the son she lost at Troy, and receives the Memnonides: birds that rise from the ashes and fight annually over the tomb."
    }
  },
  {
    name: "Iris",
    kind: "goddess",
    greek: "Îris (Ἶρις)",
    roman: "Iris",
    ovid: "the rainbow messenger “in a thousand colours”",
    order: "Divine messenger",
    domain: "The rainbow, Juno's errands",
    house: "The Olympian house",
    who: "Juno's messenger, and the only figure permitted to enter the House of Sleep and come out again. Her passage through that cave is one of the poem's great set pieces of atmosphere.",
    books: [11, 14],
    prominence: 3,
    acts: {
      "House of Sleep": "Walks into the drowsy Cimmerian cavern in her painted robe, wakes the god just enough to deliver Juno's order, and flees before the air puts her to sleep as well.",
      "Romulus & Hersilia": "Slides down her own arched colours to bring Hersilia up to the Quirinal and into her new divinity as Hora."
    }
  },
  {
    name: "Somnus / Sleep",
    aliases: ["Somnus", "Sleep", "Hypnos"],
    kind: "god",
    greek: "Hýpnos (Ὕπνος)",
    roman: "Somnus",
    ovid: "“the gentlest of the gods,” who lives where no bird crows and no door creaks",
    order: "Divine power",
    domain: "Sleep, and the dispatch of dreams",
    house: "The primordial succession",
    children: ["Morpheus", "Icelos / Phobetor", "Phantasos"],
    who: "The god of a cave with no doors, where the river Lethe runs over pebbles and poppies grow at the entrance. His household of dream-shapes is Ovid's most systematic invention: three sons, each specialised in a different category of appearance.",
    books: [11],
    prominence: 2,
    acts: {
      "House of Sleep": "Barely wakes, keeps sinking back onto his own chin, and manages to nominate Morpheus for the job before falling asleep again mid-instruction."
    }
  },
  {
    name: "Morpheus",
    kind: "god",
    greek: "Morpheús (Μορφεύς)",
    roman: "Morpheus",
    ovid: "the shaper: “no one is more skilled at counterfeiting the walk, the face, the voice”",
    order: "Dream-god",
    domain: "The impersonation of human form in dreams",
    house: "The primordial succession",
    father: "Somnus / Sleep",
    who: "The dream that specialises in people. His brothers do beasts and inanimate things; Morpheus does the human face, and in this poem he uses that skill exactly once, to tell a woman the truth.",
    books: [11],
    prominence: 2,
    acts: {
      "House of Sleep": "Selected for the errand because he alone can counterfeit a man exactly.",
      "Ceyx & Alcyone": "Stands over the sleeping Alcyone as her drowned husband — beard dripping, sea-water running off him — and tells her plainly that she is a widow and should begin the mourning."
    }
  },
  {
    name: "Hebe",
    kind: "goddess",
    greek: "Hḗbē (Ἥβη)",
    roman: "Iuventas / Hebe",
    ovid: "the goddess of youth, given to Hercules in heaven",
    order: "Olympian",
    domain: "Youth, and its restoration",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Juno",
    consorts: ["Hercules"],
    who: "Youth itself, personified and married to the hero who earned immortality. Her power to give back years is precisely what makes the other gods complain.",
    books: [9],
    prominence: 3,
    acts: {
      "Iolaus & the sons of Callirhoe": "Restores Iolaus to fighting age at Hercules' request, and is on the point of swearing never to do it again when Themis intervenes with the case of Callirhoe's sons.",
      "Death of Hercules": "Waits in heaven as the bride the apotheosis is heading toward — the reward that turns a death by poison into a marriage."
    }
  },
  {
    name: "Lucina",
    aliases: ["Eileithyia", "Ilithyia", "Juno Lucina"],
    kind: "goddess",
    greek: "Eileíthyia (Εἰλείθυια)",
    roman: "Lucina",
    ovid: "the goddess “who brings to the light” — invoked at every difficult birth in the poem",
    order: "Birth goddess",
    domain: "Childbirth",
    house: "The Olympian house",
    who: "The power presiding over the moment of birth, and therefore the deity most often obstructed in this poem: Alcmene's labour and Myrrha's delivery are both narrated as struggles with or against her.",
    books: [9, 10],
    prominence: 3,
    acts: {
      "Galanthis": "Sent — or bribed — to sit outside Alcmene's chamber with knotted limbs, holding back a birth for seven days until a servant's lie breaks the spell.",
      "Adonis born": "Comes to the myrrh-tree, lays her hands on the bark, speaks the words of delivery, and takes the child out of the wood his mother has become."
    }
  },
  {
    name: "Hecate",
    kind: "goddess",
    greek: "Hekátē (Ἑκάτη)",
    roman: "Hecate / Trivia",
    ovid: "the triple goddess of the crossroads, invoked by night for what other gods will not do",
    order: "Titan-born goddess",
    domain: "Magic, the crossroads, the moon's dark aspect, herbs",
    house: "The primordial succession",
    who: "The patron of magic, and the deity to whom the poem's two great sorceresses — Medea and Circe — both answer. She never appears in person; she is the authority behind an incantation.",
    books: [7, 14],
    prominence: 3,
    acts: {
      "Jason & Medea": "Named as the goddess of Medea's own grove and the witness of the oath Jason swears there.",
      "Aeson rejuvenated": "Receives the nine days of prayer and the black-fleeced sacrifices that authorise the rejuvenation ritual.",
      "Glaucus, Scylla & Circe": "Stands behind Circe's poisons as the source of a knowledge that turns a rejected proposal into a monster in a strait."
    }
  },
  {
    name: "Nemesis",
    aliases: ["Rhamnusia"],
    kind: "goddess",
    greek: "Némesis (Νέμεσις)",
    roman: "Nemesis / Rhamnusia",
    ovid: "“the Rhamnusian goddess,” who hears the prayers of the slighted",
    order: "Divine power",
    domain: "Retribution for excess and for scorn",
    house: "The primordial succession",
    who: "The corrective power that answers imbalance. In Ovid she does not appear; she simply approves, which makes her the quietest and most inevitable divinity in the poem.",
    books: [3],
    prominence: 3,
    acts: {
      "Echo & Narcissus": "Grants the rejected lover's prayer — that Narcissus should love and never possess what he loves — with a nod that costs her nothing."
    }
  },
  {
    name: "Astraea",
    aliases: ["Justice", "Virgo"],
    kind: "goddess",
    greek: "Astraía (Ἀστραία) / Díkē",
    roman: "Astraea / Iustitia",
    ovid: "the virgin “last of the immortals to leave the blood-soaked earth”",
    order: "Divine power",
    domain: "Justice among human beings",
    house: "The primordial succession",
    who: "Justice personified, and the measure of the world's decline. Her departure at the end of the Iron Age is Ovid's way of dating moral collapse without needing a chronicle.",
    books: [1],
    prominence: 3,
    acts: {
      "The Four Ages": "Abandons the earth when piety lies conquered and every crime has been tried — the last god to give up on the human race before Jupiter proposes drowning it."
    }
  },
  {
    name: "Isis",
    kind: "goddess",
    greek: "Îsis (Ἶσις)",
    roman: "Isis",
    ovid: "the linen-robed Egyptian goddess, whose earlier name in the poem is Io",
    order: "Egyptian goddess",
    domain: "Egypt, transformation, deliverance, the Nile",
    house: "The line of Inachus",
    who: "The Egyptian goddess whom Ovid identifies with the restored Io. Her presence marks the poem's one clean case of a transformation that ends in worship rather than loss.",
    books: [1, 9],
    prominence: 3,
    acts: {
      "Iphis & Ianthe": "Appears to Telethusa in a night vision with her whole Egyptian retinue, tells her to raise the child whatever its sex, and finally grants the change of body that makes the marriage possible."
    }
  },
  {
    name: "Janus",
    kind: "god",
    greek: "— (no Greek equivalent)",
    roman: "Ianus",
    ovid: "the two-faced Italian god of doorways and beginnings",
    order: "Italian god",
    domain: "Doors, gates, beginnings, the year's turn",
    house: "The Roman succession",
    children: ["Canens (by Venilia)"],
    who: "A purely Italian divinity with no Greek counterpart, which Ovid uses as a marker of arrival: once Janus appears, the poem's geography has become Roman.",
    books: [14],
    prominence: 3,
    acts: {
      "Picus, Canens & Circe": "Father of Canens, whose singing wastes into pure voice on the Tiber bank after her husband is lost."
    }
  },
  {
    name: "Vertumnus",
    kind: "god",
    greek: "— (an Etruscan-Italian god)",
    roman: "Vertumnus",
    ovid: "the god “who turns” — the shape-changer of the orchard",
    order: "Italian god",
    domain: "The turning year, orchards, ripening, change of season",
    house: "The Roman succession",
    consorts: ["Pomona"],
    who: "An Italian god of seasonal change whose name means turning. He is the poem's one shape-shifter who uses the power for courtship rather than assault — and who wins, in the end, by dropping the disguise.",
    books: [14],
    prominence: 2,
    acts: {
      "Vertumnus & Pomona": "Comes to Pomona's orchard as reaper, ploughman, vine-dresser, soldier, fisherman, and finally as an old woman who argues his own case, kisses her rather too warmly, and tells her the cautionary tale of Iphis and Anaxarete.",
      "Iphis & Anaxarete": "Tells the story himself, as the old woman, hoping the fate of the hard-hearted Cypriot will frighten Pomona into pity."
    }
  },
  {
    name: "Pomona",
    kind: "goddess",
    greek: "— (an Italian wood-nymph)",
    roman: "Pomona",
    ovid: "the hamadryad “skilled beyond all Latin nymphs in the care of orchards”",
    order: "Italian nymph-goddess",
    domain: "Fruit trees, grafting, pruning, the walled garden",
    house: "The Roman succession",
    consorts: ["Vertumnus"],
    who: "The goddess of cultivated fruit, and the only figure in the poem whose refusal of suitors ends in a marriage she consents to. Her garden is enclosed by choice, and she opens it herself.",
    books: [14],
    prominence: 2,
    acts: {
      "Vertumnus & Pomona": "Keeps her orchard locked against every suitor, is courted through six disguises and one long moral tale, and — when Vertumnus finally appears as himself — needs no further persuasion.",
      "Iphis & Anaxarete": "The audience for the story: the whole cautionary narrative is aimed at her, and Ovid leaves it unclear whether it or the god's beauty does the work."
    }
  },
  {
    name: "Pan",
    kind: "god",
    greek: "Pán (Πάν)",
    roman: "Pan / Faunus",
    ovid: "the Arcadian god “crowned with sharp pine,” half-goat and wholly rustic",
    order: "Rustic god",
    domain: "Flocks, wild Arcadia, panic, the reed pipe",
    house: "The Olympian house",
    father: "Mercury",
    parentageNote: "Fathered by Mercury in one tradition; other sources make him older than the Olympians entirely.",
    consorts: ["Syrinx (pursued)"],
    who: "The goat-god of Arcadia, whose pursuits produce instruments rather than trees. He is also the poem's amateur musician, confident enough to challenge Apollo and lose in front of a mountain.",
    books: [1, 11],
    prominence: 2,
    acts: {
      "Pan & Syrinx": "Pursues the nymph to the Ladon, catches a handful of marsh reeds, hears the wind make a thin complaint in them, and builds the pipe that now carries her name.",
      "Midas' ears": "Plays his rough pipes against Apollo's lyre before Tmolus, loses the verdict, and is defended by exactly one listener."
    }
  },
  {
    name: "Silenus",
    kind: "god",
    greek: "Seilēnós (Σειληνός)",
    roman: "Silenus",
    ovid: "the old foster-father of Bacchus, “unsteady with age and wine”",
    order: "Rustic god",
    domain: "Drunken wisdom, the Bacchic retinue",
    house: "The Olympian house",
    who: "Bacchus' aged tutor and the poem's most benign lost property. Everything Midas is granted follows from having returned him safely.",
    books: [11],
    prominence: 3,
    acts: {
      "Midas' golden touch": "Wanders off from the Bacchic procession, is found by Phrygian farmers and taken to Midas, who entertains him for ten days and nights before returning him to the god."
    }
  },
  {
    name: "Boreas",
    kind: "god",
    greek: "Boréas (Βορέας)",
    roman: "Aquilo / Boreas",
    ovid: "the north wind, who reasons that force suits him better than pleading",
    order: "Wind god",
    domain: "The north wind, cold, violence",
    house: "The primordial succession",
    consorts: ["Orithyia"],
    children: ["Calais", "Zetes"],
    who: "The north wind, and the poem's most self-aware abductor: he explicitly rejects persuasion as unsuited to his nature and acts accordingly.",
    books: [6],
    prominence: 2,
    acts: {
      "Boreas & Orithyia": "Petitions Erechtheus politely for years, is refused, delivers a speech about being true to his own violence, and carries the girl off in a fold of tawny wings."
    }
  },
  {
    name: "Zephyrus",
    kind: "god",
    greek: "Zéphyros (Ζέφυρος)",
    roman: "Favonius / Zephyrus",
    ovid: "the west wind — in this poem, a jealous one",
    order: "Wind god",
    domain: "The west wind, spring",
    house: "The primordial succession",
    who: "The gentle wind of spring, given by Ovid a motive that no gentle wind should have. The poem's most consequential gust is his.",
    books: [10],
    prominence: 3,
    acts: {
      "Hyacinthus": "Named in the tradition Ovid draws on as the rival lover who turns Apollo's discus back onto the boy's face."
    }
  },
  {
    name: "Aeolus",
    kind: "god",
    greek: "Aíolos (Αἴολος)",
    roman: "Aeolus",
    ovid: "the king who shuts the winds in a mountain and lets out only what is asked for",
    order: "Wind king",
    domain: "The custody of the winds",
    house: "The renewed human race",
    children: ["Alcyone", "Ceyx's wife's line"],
    who: "Warden of the winds, and — in the version Ovid follows — Alcyone's father, which gives the storm that kills Ceyx an appalling family irony.",
    books: [11, 14],
    prominence: 3,
    acts: {
      "Ceyx's voyage": "Father of Alcyone; the winds that destroy her husband's ship are, in the tradition Ovid assumes, in his keeping."
    }
  },

  /* ------------------------------------------------------- waters and sea-gods */
  {
    name: "Peneus",
    kind: "river god",
    greek: "Pēneiós (Πηνειός)",
    roman: "Peneus",
    ovid: "the Thessalian river “falling in steep foam from the foot of Pindus”",
    order: "River god",
    domain: "The Peneus and the vale of Tempe",
    house: "The primordial succession",
    children: ["Daphne"],
    who: "The river of Tempe and Daphne's father — the first of the poem's several fathers who are asked to solve a daughter's problem and can only make it permanent.",
    books: [1],
    prominence: 3,
    acts: {
      "Apollo & Daphne": "Pressed by his daughter to grant her perpetual virginity, and finally the one who receives her prayer for release and takes her body into bark and root."
    }
  },
  {
    name: "Inachus",
    kind: "river god",
    greek: "Ínachos (Ἴναχος)",
    roman: "Inachus",
    ovid: "the Argive river, “the only one absent” from the rivers' assembly, grieving in his cave",
    order: "River god",
    domain: "The Inachus and the plain of Argos",
    house: "The line of Inachus",
    children: ["Io"],
    who: "The founding river of Argos and the ancestor from whom the poem's longest genealogical thread runs — through Io to Epaphus, and eventually to Danaë and Perseus.",
    books: [1],
    prominence: 2,
    acts: {
      "Io": "Grieves for a daughter he believes dead, then reads the letters she scratches with her hoof and realises the truth is worse: he cannot die, so his mourning has no end."
    }
  },
  {
    name: "Alpheus",
    kind: "river god",
    greek: "Alpheiós (Ἀλφειός)",
    roman: "Alpheus",
    ovid: "the Elean river who pursues under the sea",
    order: "River god",
    domain: "The Alpheus, Elis, and the Olympian plain",
    house: "The primordial succession",
    who: "The river who will not accept that a boundary of salt water is a boundary. His pursuit of Arethusa is the poem's clearest statement that fresh water can be a character.",
    books: [5],
    prominence: 3,
    acts: {
      "Arethusa & Alpheus": "Takes his own male shape out of the water to chase a bathing nymph, runs her down across Arcadia, and follows her under the sea to Ortygia when Diana opens the earth."
    }
  },
  {
    name: "Achelous",
    kind: "river god",
    greek: "Akhelôos (Ἀχελῷος)",
    roman: "Achelous",
    ovid: "the horned river with the broken horn, host of the poem's longest dinner party",
    order: "River god",
    domain: "The greatest river of Greece; shape-changing",
    house: "The primordial succession",
    consorts: ["Deianira (sought)"],
    who: "A river god who can take three shapes and loses in all of them. He is also one of Ovid's great narrators: much of Books VIII and IX is told from his table.",
    books: [8, 9],
    prominence: 2,
    acts: {
      "Achelous & Hercules": "Wrestles Hercules for Deianira as man, serpent, and bull, and loses a horn in the last shape — after which he tells the whole story himself, wearing a wreath to cover the stump.",
      "Nessus & Deianira": "The defeat that hands Deianira to Hercules and sets the journey on which Nessus makes his offer."
    }
  },
  {
    name: "Eridanus",
    kind: "river god",
    greek: "Ēridanós (Ἠριδανός)",
    roman: "Eridanus / Padus",
    ovid: "the river that receives Phaethon's smoking body and washes his face",
    order: "River god",
    domain: "The great western river; amber",
    house: "The primordial succession",
    who: "The mythic river of the far west, later identified with the Po. It is where the sky's disaster comes to rest, and where the poem's most famous product of grief — amber — is made.",
    books: [2],
    prominence: 3,
    acts: {
      "The Heliades & Cycnus": "Takes Phaethon's fallen body and bathes his scorched face; his banks hold the tomb, the poplars, and the amber the sisters weep."
    }
  },
  {
    name: "Numicius",
    kind: "river god",
    greek: "— (a Latin river)",
    roman: "Numicius",
    ovid: "the horned Latin stream that carries away everything in Aeneas that could die",
    order: "River god",
    domain: "A small river of Latium; ritual purification",
    house: "The Roman succession",
    who: "An obscure Latin river given the most consequential job in the poem's final movement: separating the mortal from the immortal in the founder of Rome's line.",
    books: [14],
    prominence: 3,
    acts: {
      "Aeneas' apotheosis": "Washes away Aeneas' mortal part at Venus' request and carries it silently to the sea, leaving only what can be worshipped as Indiges."
    }
  },
  {
    name: "Proteus",
    kind: "sea god",
    greek: "Prōteús (Πρωτεύς)",
    roman: "Proteus",
    ovid: "the sea's shape-changer, who must be held to be believed",
    order: "Sea god",
    domain: "Prophecy, and unlimited change of form",
    house: "The primordial succession",
    who: "The old man of the sea who can become water, lion, boar, snake, or tree, and who answers questions only after he has run out of shapes. He is the poem's model for every shape-shifter that follows.",
    books: [8, 11],
    prominence: 3,
    acts: {
      "Peleus & Thetis": "Tells Peleus how to hold Thetis: seize her while she sleeps, bind her, and do not let go however many bodies she assumes."
    }
  },
  {
    name: "Thetis",
    kind: "sea goddess",
    greek: "Thétis (Θέτις)",
    roman: "Thetis",
    ovid: "the Nereid “destined to bear a son greater than his father”",
    order: "Nereid",
    domain: "The sea's depths; shape-changing",
    house: "The Aeacids",
    father: "Nereus",
    consorts: ["Peleus"],
    children: ["Achilles"],
    who: "The sea-nymph whose prophesied son was too dangerous for Jupiter to father, and who is therefore married off to a mortal. Everything that follows in the poem's Trojan books proceeds from that decision.",
    books: [11, 12, 13],
    prominence: 2,
    acts: {
      "Peleus & Thetis": "Fights off her mortal suitor as bird, tree, and tigress, and yields only when he holds her through all of them.",
      "Peleus & Psamathe": "Sends her husband to Ceyx and intercedes with her sister-Nereid to lift the wolf from the herds of Trachis.",
      "Death of Achilles": "Mother of the man Apollo and Paris bring down; the armour she had made outlives him and becomes the subject of the next contest."
    }
  },
  {
    name: "Psamathe",
    kind: "sea goddess",
    greek: "Psamáthē (Ψαμάθη)",
    roman: "Psamathe",
    ovid: "the Nereid who sends a wolf out of the sea",
    order: "Nereid",
    domain: "The sands of the shore",
    house: "The Aeacids",
    father: "Nereus",
    consorts: ["Aeacus"],
    children: ["Phocus"],
    who: "Mother of Phocus, and the poem's most economical avenger: one animal, sent inland, does exactly as much damage as her grief requires.",
    books: [11],
    prominence: 3,
    acts: {
      "Peleus & Psamathe": "Sends a monstrous wolf against the cattle of Trachis in payment for her son's murder, and is finally persuaded by Thetis to turn it into a marble statue mid-kill."
    }
  },
  {
    name: "Galatea",
    kind: "sea nymph",
    greek: "Galáteia (Γαλάτεια)",
    roman: "Galatea",
    ovid: "the “milk-white” Nereid whom the Cyclops courts and cannot have",
    order: "Nereid",
    domain: "The Sicilian sea",
    house: "The primordial succession",
    father: "Nereus",
    consorts: ["Acis"],
    who: "A sea-nymph who narrates her own tragedy. Her account of Polyphemus' love song — overheard from a hiding place, with Acis in her arms — is the poem's finest piece of comic and terrible framing at once.",
    books: [13],
    prominence: 2,
    acts: {
      "Galatea, Acis & Polyphemus": "Tells Scylla the story while having her hair combed: how she hid with Acis and listened to a hundred lines of monstrous courtship, and how the singer, discovering them, tore off a piece of the mountain."
    }
  },
  {
    name: "Glaucus",
    kind: "sea god",
    greek: "Glaûkos (Γλαῦκος)",
    roman: "Glaucus",
    ovid: "the fisherman “green-bearded and blue,” new to divinity and bad at it",
    order: "Sea god",
    domain: "Fishermen, prophecy, the coastal waters",
    house: "The primordial succession",
    consorts: ["Scylla (sought)"],
    who: "A mortal fisherman who ate a magical herb, became a sea god, and immediately discovered that immortality does not help with rejection. His appeal to Circe produces the poem's worst possible outcome.",
    books: [13, 14],
    prominence: 2,
    acts: {
      "Glaucus": "Explains his own transformation — the herb that made his catch leap back into the water, his own leap, the hundred rivers of purification — and admits he does not know what use any of it is.",
      "Glaucus, Scylla & Circe": "Asks Circe for a love-charm to win Scylla, refuses Circe's counter-offer of herself, and so causes the poisoning of the pool where Scylla bathes."
    }
  },
  {
    name: "Cyane",
    kind: "nymph",
    greek: "Kyánē (Κυάνη)",
    roman: "Cyane",
    ovid: "“the most famous of the Sicilian nymphs,” who dissolves into her own pool",
    order: "Water nymph",
    domain: "A spring near Syracuse",
    house: "The primordial succession",
    who: "The only figure in the abduction sequence who physically stands in Pluto's way. Her punishment is to lose the body that objected — and she can then only communicate by returning Proserpina's girdle to the surface.",
    books: [5],
    prominence: 2,
    acts: {
      "Cyane & Ascalaphus": "Rises to her waist and tells the god he cannot take a bride this way; when he opens the earth instead, her grief melts her into the water she presided over, and only the floating girdle can tell Ceres what happened."
    }
  },
  {
    name: "Arethusa",
    kind: "nymph",
    greek: "Aréthousa (Ἀρέθουσα)",
    roman: "Arethusa",
    ovid: "the Elean nymph who becomes an Ortygian spring",
    order: "Water nymph",
    domain: "The spring of Ortygia at Syracuse",
    house: "The primordial succession",
    who: "A huntress of Diana's company who is chased by a river, becomes water herself, and travels under the sea to Sicily — which is how she can testify about the Underworld and give Ceres her first real information.",
    books: [5],
    prominence: 2,
    acts: {
      "Arethusa & Alpheus": "Tells her own story: the bathe, the voice from the water, the long chase across Arcadia, the sweat that became a stream, and the passage beneath the sea to a new country.",
      "Cyane & Ascalaphus": "Interrupts Ceres' curse on Sicily to defend the land that sheltered her, and to report what she saw below."
    }
  },
  {
    name: "Syrinx",
    kind: "nymph",
    greek: "Sŷrinx (Σῦριγξ)",
    roman: "Syrinx",
    ovid: "the Nonacrine naiad whose name is now the instrument",
    order: "Water nymph",
    domain: "The Arcadian marshes of the Ladon",
    house: "The primordial succession",
    who: "An Arcadian nymph who followed Diana's discipline and was hunted for it. She is the poem's first demonstration that a transformed body can be made into an artwork by the person who caused the change.",
    books: [1],
    prominence: 2,
    acts: {
      "Pan & Syrinx": "Blocked by the Ladon, begs her sister-waters for a change of form, and becomes the marsh reeds Pan cuts unequally and binds with wax."
    }
  },
  {
    name: "Echo",
    kind: "nymph",
    greek: "Ēkhṓ (Ἠχώ)",
    roman: "Echo",
    ovid: "“a voice, and nothing else” — vocalis nymphe, resonabilis Echo",
    order: "Mountain nymph",
    domain: "Sound returned from stone",
    house: "The primordial succession",
    who: "A nymph punished for talking, reduced to repeating other people's endings, and finally reduced further to sound alone. She is the poem's most precise study of what happens when the power of speech is left but the power to initiate is taken away.",
    books: [3],
    prominence: 1,
    acts: {
      "Echo & Narcissus": "Loves Narcissus and can only say back to him what he has just said; when he recoils from her embrace she wastes into bones and then into voice, which is still answering in the hills when he dies."
    }
  },
  {
    name: "Salmacis",
    kind: "nymph",
    greek: "Salmakís (Σαλμακίς)",
    roman: "Salmacis",
    ovid: "the one naiad “unknown to swift Diana,” who swims instead of hunting",
    order: "Water nymph",
    domain: "A pool in Caria",
    house: "The primordial succession",
    who: "The poem's inverted pursuer: a female figure who does what the gods do, and whose desire produces not a plant or a bird but a permanent merger of two bodies into one.",
    books: [4],
    prominence: 2,
    acts: {
      "Salmacis & Hermaphroditus": "Watches the boy undress, dives after him, wraps around him like ivy or a squid, and prays that they never be separated — which the gods grant with exact and terrible literalism."
    }
  },
  {
    name: "Lotis",
    kind: "nymph",
    greek: "Lōtís (Λωτίς)",
    roman: "Lotis",
    ovid: "the nymph inside the lotus that bleeds when a branch is picked",
    order: "Water nymph",
    domain: "A lakeside tree",
    house: "The primordial succession",
    who: "A nymph who escaped Priapus by becoming a lotus, and whose story exists in this poem only as the explanation for someone else's disaster.",
    books: [9],
    prominence: 3,
    acts: {
      "Dryope": "The nymph inside the flowering lotus Dryope innocently picks for her baby — which is why the tree bleeds and the mother is caught."
    }
  },

  /* --------------------------------------------------------- personified forces */
  {
    name: "Envy",
    aliases: ["Invidia"],
    kind: "personification",
    greek: "Phthónos (Φθόνος)",
    roman: "Invidia",
    ovid: "the goddess eating snake-flesh in a black, bloodless house with no sun",
    order: "Personified force",
    domain: "Envy",
    house: "The primordial succession",
    who: "A personification given a body so specific it becomes an anatomy lesson: pale skin, squinting eyes, teeth furred with rust, a chest green with bile, and no capacity for laughter except at another's pain.",
    books: [2],
    prominence: 2,
    acts: {
      "Battus & Aglauros": "Summoned by Minerva, she crosses Athens blighting everything, breathes into Aglauros' chest, and leaves her with the slow-burning misery that finally hardens into stone."
    }
  },
  {
    name: "Fames / Hunger",
    aliases: ["Fames", "Hunger", "Famine"],
    kind: "personification",
    greek: "Limós (Λιμός)",
    roman: "Fames",
    ovid: "the figure on the stony Scythian field, tearing at sparse grass with her nails and teeth",
    order: "Personified force",
    domain: "Starvation",
    house: "The primordial succession",
    who: "Hunger given a body of visible bone, hollow eyes, and skin through which the organs show. Ovid makes her the exact opposite of Ceres, which is why the two can never occupy the same place.",
    books: [8],
    prominence: 2,
    acts: {
      "Erysichthon & Mestra": "Fetched by an Oread because Ceres cannot come herself, she enters the sleeping Erysichthon, breathes into his mouth and throat, and leaves an appetite that eventually eats its owner."
    }
  },
  {
    name: "Fama / Rumor",
    aliases: ["Fama", "Rumor", "Rumour"],
    kind: "personification",
    greek: "Phḗmē (Φήμη)",
    roman: "Fama",
    ovid: "the goddess of a bronze house at the centre of the world, with a thousand openings and no doors",
    order: "Personified force",
    domain: "Report, rumour, reputation",
    house: "The primordial succession",
    who: "The house where everything said anywhere arrives and is amplified. Ovid places it at the exact junction of earth, sea, and sky — the only structure in the poem with a view of the whole of it.",
    books: [12],
    prominence: 1,
    acts: {
      "House of Fame": "Receives the news of the Greek fleet before the fleet arrives, so that Troy is already defending itself against a war that has not yet reached it. Ovid uses the house to explain how the epic tradition itself works."
    }
  },
  {
    name: "Credulity",
    aliases: ["Credulitas"],
    kind: "personification",
    greek: "— (Ovid's own allegory)",
    roman: "Credulitas",
    ovid: "one of the household of Rumour",
    order: "Personified force",
    domain: "Ready belief",
    house: "The primordial succession",
    who: "One of the four occupants Ovid installs in the House of Fame — the disposition that lets a report become a fact without passing through evidence.",
    books: [12],
    prominence: 3,
    acts: {
      "House of Fame": "Lives in the bronze house with Error, Joy, and Fear, keeping the traffic of stories moving through a building that never sleeps."
    }
  },
  {
    name: "Error",
    kind: "personification",
    greek: "— (Ovid's own allegory)",
    roman: "Error",
    ovid: "one of the household of Rumour",
    order: "Personified force",
    domain: "Mistaken belief",
    house: "The primordial succession",
    who: "Ovid's personification of the wandering that reports do between mouths — the distortion built into transmission itself.",
    books: [12],
    prominence: 3,
    acts: {
      "House of Fame": "Shares the house with Credulity, Joy, and Fear; between them they guarantee that nothing arriving at the building leaves it unaltered."
    }
  },
  {
    name: "Joy",
    aliases: ["Laetitia"],
    kind: "personification",
    greek: "— (Ovid's own allegory)",
    roman: "Laetitia",
    ovid: "“ill-founded gladness” in Rumour's house",
    order: "Personified force",
    domain: "Unwarranted delight",
    house: "The primordial succession",
    who: "The reaction that a welcome rumour produces before anyone has checked it.",
    books: [12],
    prominence: 3,
    acts: {
      "House of Fame": "Named among the residents whose presence makes the house a psychology of reception rather than a mere switchboard."
    }
  },
  {
    name: "Fear",
    aliases: ["Timor"],
    kind: "personification",
    greek: "Phóbos (Φόβος)",
    roman: "Timor",
    ovid: "“sudden terrors” whispering in Rumour's halls",
    order: "Personified force",
    domain: "Dread produced by report",
    house: "The primordial succession",
    who: "The counterpart to Joy: the alarm a rumour causes, which then generates further rumour. Ovid's House of Fame is a closed loop, and Fear is the part that keeps it turning.",
    books: [12],
    prominence: 3,
    acts: {
      "House of Fame": "One of the four dispositions inhabiting the bronze house, ensuring that panic arrives at Troy well ahead of the Greeks."
    }
  },
  {
    name: "The Fates",
    aliases: ["Parcae", "Moirai", "the sisters"],
    kind: "personification",
    greek: "Moîrai (Μοῖραι)",
    roman: "Parcae / Fata",
    ovid: "the sisters who set a brand on a fire and give a newborn its length of life",
    order: "Personified force",
    domain: "The allotted span of a life",
    house: "The primordial succession",
    who: "The three who measure, spin, and cut. In Ovid they are usually invoked rather than shown, with one great exception: they appear at Meleager's cradle and make his life the same length as a piece of wood.",
    books: [8, 15],
    prominence: 2,
    acts: {
      "Meleager & Althaea": "Lay a log on the fire at the newborn's birth and declare that child and brand will last the same time — handing his mother, unknowingly, the power to kill him.",
      "Julius Caesar": "Named by Jupiter as the keepers of the bronze and iron records where the future is already written, and which not even he may alter."
    }
  },
  {
    name: "The Furies",
    aliases: ["Erinyes", "Eumenides", "Dirae"],
    kind: "personification",
    greek: "Erinýes (Ἐρινύες)",
    roman: "Furiae / Dirae",
    ovid: "the sisters with snakes for hair, sitting at the prison gate of Tartarus and combing them",
    order: "Underworld powers",
    domain: "Retribution for crimes against blood",
    house: "The primordial succession",
    who: "The avengers of kin-murder and broken family order. In this poem they are also, more disturbingly, the deities of illicit family desire — Ovid says Myrrha was driven not by Cupid's arrow but by a Fury's torch.",
    books: [4, 10],
    prominence: 2,
    acts: {
      "Athamas & Ino": "Sit combing their snakes when Juno arrives, and send Tisiphone up to Thebes on her errand.",
      "Myrrha": "Named as the true cause of Myrrha's passion, a distinction that lets Orpheus tell the story without making love itself responsible."
    }
  },
  {
    name: "Tisiphone",
    kind: "personification",
    greek: "Tisiphónē (Τισιφόνη)",
    roman: "Tisiphone",
    ovid: "the Fury in a blood-soaked robe, girdled with a living snake",
    order: "Underworld power",
    domain: "The punishment of murder within a family",
    house: "The primordial succession",
    who: "The Fury Juno personally recruits. Her method is not violence but infection: she throws snakes that do not bite, and the poison works entirely on the mind.",
    books: [4],
    prominence: 2,
    acts: {
      "Athamas & Ino": "Comes to the palace with Grief, Terror, Panic, and Madness in her train, throws two snakes from her hair into the royal couple's chests, and leaves them to destroy their own children."
    }
  },
  {
    name: "The Muses",
    aliases: ["Muses", "the Pierian sisters", "the Aonian sisters"],
    kind: "goddess",
    greek: "Moûsai (Μοῦσαι)",
    roman: "Musae",
    ovid: "the “learned sisters” of Helicon, whose spring Pegasus opened with a hoof",
    order: "Divine sisters",
    domain: "Poetry, memory, song, the arts",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Mnemosyne",
    who: "The nine daughters of Memory who guarantee the poem itself. In Book V they are also litigants: they compete, they win, and they punish, which makes the poem's own patrons participants in its logic of transformation.",
    books: [5, 6],
    prominence: 1,
    acts: {
      "Pyreneus & the Muses": "Tell Minerva how the Thracian tyrant Pyreneus offered them shelter from rain and then locked the doors — and how he fell trying to follow their wings off a tower.",
      "Pierides & Muses": "Accept the challenge of nine mortal sisters, answer their giants-and-cowardly-gods song with Calliope's Proserpina, win the nymphs' verdict, and turn the losers into magpies.",
      "Marsyas": "Present as the standard against which Marsyas' pipes are measured and found wanting."
    }
  },
  {
    name: "Calliope",
    kind: "goddess",
    greek: "Kalliópē (Καλλιόπη)",
    roman: "Calliope",
    ovid: "“the eldest of the sisters,” chosen to sing for all nine",
    order: "Muse",
    domain: "Epic poetry",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Mnemosyne",
    children: ["Orpheus"],
    who: "The Muse of epic and, in the tradition Ovid assumes, Orpheus' mother — which makes the poem's greatest singer the son of the voice that sings its longest inset tale.",
    books: [5],
    prominence: 2,
    acts: {
      "Pierides & Muses": "Rises with ivy in her hair, tries a few chords, and delivers the whole of Ceres' search for Proserpina — the poem's longest song inside a song."
    }
  },
  {
    name: "The gods' council",
    aliases: ["the council of the gods", "the assembled gods", "the gods"],
    kind: "collective",
    greek: "— (the Olympian assembly)",
    roman: "concilium deorum",
    ovid: "described as a heavenly Palatine — “if I may be permitted the boldness”",
    order: "Divine assembly",
    domain: "Deliberation about the fate of mortals",
    house: "The Olympian house",
    who: "The gods in session. Ovid's most pointed joke in the poem's first book is to describe their meeting-place as the Palatine of heaven, with lesser gods living off the main road — a Roman senate with weather.",
    books: [1, 4, 9, 14, 15],
    prominence: 2,
    acts: {
      "Lycaon": "Summoned by Jupiter's thunder, they hear the case against the human race and vote — with some private anxiety about who would then tend the altars — for the Flood.",
      "Mars & Venus": "Crowd in to see the trapped lovers, and one of them says aloud that he would not mind such a disgrace himself.",
      "Pelops": "Reassemble the boy Tantalus served them, having eaten only the shoulder that grief distracted Ceres into taking.",
      "Iolaus & the sons of Callirhoe": "Break into open complaint that if one hero's nephew can be made young, so should their own favourites — a divine industrial dispute settled only by Themis."
    }
  }
];
