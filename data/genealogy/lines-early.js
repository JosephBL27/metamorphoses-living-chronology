/*
 * Mortal and half-mortal lines of Books I–VI: the renewed human race, the
 * house of Inachus at Argos, Agenor's Phoenician line and its Theban branch,
 * the Athenian kings, the house of the Sun, and the descent of Tantalus.
 */

export const EARLY_LINES = [
  /* ------------------------------------------------ the renewed human race */
  {
    name: "Deucalion",
    kind: "mortal",
    greek: "Deukalíōn (Δευκαλίων)",
    roman: "Deucalion",
    ovid: "“no better man, and none more devoted to justice”",
    order: "Flood survivor",
    domain: "Piety, and the second founding of humankind",
    house: "The renewed human race",
    father: "Prometheus",
    consorts: ["Pyrrha"],
    children: ["Hellen — and through him the Greek peoples"],
    who: "The one man Jupiter allows to survive the Flood, chosen for justice rather than strength. With Pyrrha he becomes the ancestor of a human race made from stone, which Ovid says explains why we are a hard species, well suited to labour.",
    books: [1],
    prominence: 1,
    acts: {
      "The Great Flood": "Rows a small boat onto Parnassus with his wife and finds a drowned world: fish in the elm branches, wolves swimming beside sheep, and nothing left to be king of.",
      "Deucalion & Pyrrha": "Prays at Themis' fouled shrine, receives the riddle, and is the one who works out that the great mother is the Earth and her bones are stones. The stones he throws become men."
    }
  },
  {
    name: "Pyrrha",
    kind: "mortal",
    greek: "Pýrrha (Πύρρα)",
    roman: "Pyrrha",
    ovid: "“the most god-fearing of women”",
    order: "Flood survivor",
    domain: "Piety, and the second founding of humankind",
    house: "The renewed human race",
    father: "Epimetheus",
    consorts: ["Deucalion"],
    who: "Deucalion's wife and cousin, and the only other human being left alive. Her horror at the oracle — she refuses outright to insult her mother's ghost — is what forces the riddle to be solved rather than obeyed literally.",
    books: [1],
    prominence: 1,
    acts: {
      "The Great Flood": "Survives with Deucalion on Parnassus and prays to the mountain's Corycian nymphs and to Themis.",
      "Deucalion & Pyrrha": "Refuses to scatter her mother's bones, weeps, and so obliges both of them to reinterpret the command; the stones she throws become women."
    }
  },
  {
    name: "Lycaon",
    kind: "mortal",
    greek: "Lykáōn (Λυκάων)",
    roman: "Lycaon",
    ovid: "the Arcadian tyrant “notorious for savagery” whose name already means wolf",
    order: "King of Arcadia",
    domain: "Arcadia; the violation of hospitality",
    house: "The renewed human race",
    who: "The king whose crime justifies the Flood. Ovid makes the transformation an unmasking rather than a change: the wolf keeps his grey hair, his violent face, and his same eyes, so nothing has actually been added.",
    books: [1],
    prominence: 1,
    acts: {
      "Lycaon": "Mocks the divine signs his people are worshipping, plans to murder his guest in the night, and first serves him a hostage boiled and roasted. The palace burns; he flees to open country and finds his howl has no words in it."
    }
  },
  {
    name: "Daphne",
    kind: "nymph",
    greek: "Dáphnē (Δάφνη)",
    roman: "Daphne",
    ovid: "“Peneia” — the river's daughter, and afterwards the laurel itself",
    order: "River nymph",
    domain: "Wild country, refused marriage, and the laurel",
    house: "The primordial succession",
    father: "Peneus",
    who: "The first pursued figure of the poem, and the one whose escape is most thoroughly annexed. She asks her father for Diana's privilege of perpetual virginity, wins it, and finds that being granted a wish is not the same as being left alone.",
    books: [1],
    prominence: 1,
    acts: {
      "Apollo & Daphne": "Shot with lead, she flees a god shot with gold, and Ovid times the chase like a hound after a hare. At the river she asks to lose the shape that caused the trouble — and gets bark, root, and leaf. Apollo then claims the tree as his emblem and promises that its leaves will crown Roman triumphs."
    }
  },
  {
    name: "Python",
    kind: "creature",
    greek: "Pýthōn (Πύθων)",
    roman: "Python",
    ovid: "“a new thing to the peoples,” born of the earth left warm after the Flood",
    order: "Earthborn serpent",
    domain: "The slopes of Parnassus before Delphi",
    house: "The primordial succession",
    mother: "Earth",
    who: "The great serpent generated spontaneously by the post-Flood mud, whose killing gives Apollo the Pythian Games and his own first grounds for boasting.",
    books: [1],
    prominence: 3,
    acts: {
      "Apollo & Daphne": "Killed by a thousand arrows before the episode proper begins. The victory is the reason Apollo mocks Cupid's bow — which is the reason for everything that follows."
    }
  },

  /* -------------------------------------------------- the line of Inachus */
  {
    name: "Io",
    kind: "mortal",
    greek: "Īṓ (Ἰώ)",
    roman: "Io",
    ovid: "“Inachis” — Inachus' daughter — and, at the end, the linen-robed goddess of Egypt",
    order: "Priestess, then goddess",
    domain: "Argos, then the Nile",
    house: "The line of Inachus",
    father: "Inachus",
    consorts: ["Jupiter"],
    children: ["Epaphus"],
    who: "The poem's first long study of a body used as a hiding place. Io is assaulted, concealed, given away as a gift, watched by a hundred eyes, driven across the world by a gadfly, and finally restored and worshipped — a full arc from victim to deity in one episode.",
    books: [1],
    prominence: 1,
    acts: {
      "Io": "Flees, is caught in manufactured darkness, becomes a heifer, and cannot tell her own father who she is until she scratches two letters in the dust with her hoof. In Egypt Jupiter finally swears off her, Juno relents, and the hair, hooves, and horns retreat — leaving a goddess who is still, Ovid notes, afraid to speak in case she lows."
    }
  },
  {
    name: "Argus Panoptes",
    aliases: ["Argus"],
    kind: "creature",
    greek: "Árgos Panóptēs (Ἄργος Πανόπτης)",
    roman: "Argus",
    ovid: "“the head circled with a hundred eyes,” of which only two ever sleep at once",
    order: "Guardian",
    domain: "Sleepless surveillance",
    house: "The line of Inachus",
    who: "Juno's watchman, and the poem's emblem of total observation. His defeat is not by force but by narrative: Mercury talks him to sleep, which makes storytelling the first weapon in the Metamorphoses to actually work.",
    books: [1],
    prominence: 2,
    acts: {
      "Io": "Tethers the heifer, watches her from a hilltop by day and night, and lets her graze on leaves and lie on bare earth. Beheaded by Mercury, his hundred lights are gathered up by Juno and set in the peacock's tail.",
      "Pan & Syrinx": "The audience for Mercury's inset tale, and the reason it is told — the god keeps talking specifically to close the last two eyes."
    }
  },
  {
    name: "Epaphus",
    kind: "mortal",
    greek: "Épaphos (Ἔπαφος)",
    roman: "Epaphus",
    ovid: "“believed to be sprung from the seed of great Jove,” and worshipped beside his mother",
    order: "Prince of Egypt",
    domain: "Egypt; contested paternity",
    house: "The line of Inachus",
    father: "Jupiter",
    mother: "Io",
    who: "Io's son by Jupiter, born at the Nile once she is restored. His single line of dialogue — a sneer at another boy's claimed father — is what starts Book II and burns half the world.",
    books: [1, 2],
    prominence: 2,
    acts: {
      "Io": "Born at the end of his mother's wandering, and given temples of his own alongside hers.",
      "Phaethon at the Sun's palace": "Tells Phaethon he is a fool to believe his mother about the Sun, and so sends him east to ask for proof."
    }
  },
  {
    name: "Danaë",
    kind: "mortal",
    greek: "Danáē (Δανάη)",
    roman: "Danae",
    ovid: "the woman shut in a bronze tower whom Jupiter reaches “as gold”",
    order: "Princess of Argos",
    domain: "Argos; enclosure and the shower of gold",
    house: "The line of Inachus",
    father: "Acrisius",
    consorts: ["Jupiter"],
    children: ["Perseus"],
    who: "Locked up by a father afraid of a prophecy, and reached anyway. Ovid never narrates her story directly — it appears only as one panel in Arachne's tapestry of divine deception.",
    books: [4, 6],
    prominence: 3,
    acts: {
      "Arachne & Minerva": "Woven into Arachne's cloth as one of Jupiter's disguises: the shower of gold, catalogued alongside the bull, the swan, and the satyr as evidence of what the gods actually do."
    }
  },
  {
    name: "Perseus",
    kind: "hero",
    greek: "Perseús (Περσεύς)",
    roman: "Perseus",
    ovid: "“the son of Jove and the imprisoned woman,” who carries a face in a bag",
    order: "Hero",
    domain: "Flight, the Gorgon's head, Argos and Ethiopia",
    house: "The line of Inachus",
    father: "Jupiter",
    mother: "Danaë",
    consorts: ["Andromeda"],
    who: "The poem's first full-scale hero, and a study in how a weapon changes the person carrying it. Every problem Perseus meets after Medusa is solved the same way — by making the other party stone — until the method becomes indistinguishable from a massacre.",
    books: [4, 5],
    prominence: 1,
    acts: {
      "Perseus & Atlas": "Asks a Titan for a night's lodging on the strength of his father's name, is thrown out, and reaches into the bag. The refusal costs Atlas his body and gives the world a mountain range.",
      "Perseus & Andromeda": "Sees a girl chained to a rock and negotiates terms with her parents before fighting; kills the sea-monster in a long aerial duel, and lays the head down on soft weeds so it will not be bruised — which turns the seaweed into coral.",
      "Perseus & Phineus": "Fights off two hundred armed men at his own wedding, exhausts every conventional weapon, and finally turns his back, holds up the head, and tells anyone still on his side to look away. Phineus is petrified mid-plea."
    }
  },
  {
    name: "Medusa",
    kind: "creature",
    greek: "Médousa (Μέδουσα)",
    roman: "Medusa",
    ovid: "“once most beautiful, and sought by many suitors” — the snake-haired head that keeps working after death",
    order: "Gorgon",
    domain: "Petrifying sight",
    house: "The primordial succession",
    consorts: ["Neptune"],
    children: ["Pegasus", "Chrysaor"],
    who: "A woman whose hair was her great beauty until Minerva punished her for being assaulted in the goddess' own temple. Ovid tells this history only in retrospect, after the head has already been used as a weapon three times.",
    books: [4, 5],
    prominence: 2,
    acts: {
      "Perseus & Atlas": "Her severed head does the work; blood dripping from it across Libya breeds the desert's snakes.",
      "Perseus & Andromeda": "Held down on leaves after the monster fight, she stiffens the seaweed into coral — the one benign use of her power in the poem.",
      "Perseus & Phineus": "Ends the wedding-hall battle, and afterwards passes to Minerva's shield, where the face keeps its office permanently."
    }
  },
  {
    name: "Andromeda",
    kind: "mortal",
    greek: "Androméda (Ἀνδρομέδα)",
    roman: "Andromeda",
    ovid: "the girl who would have been mistaken for marble if the wind had not moved her hair",
    order: "Princess of Ethiopia",
    domain: "Ethiopia; the exposed sacrifice",
    house: "The line of Inachus",
    father: "Cepheus",
    mother: "Cassiopeia",
    consorts: ["Perseus"],
    who: "Chained to a rock to pay for her mother's boast. Ovid's first description makes her indistinguishable from a statue, which quietly aligns her with everything else in the episode that turns to stone.",
    books: [4, 5],
    prominence: 2,
    acts: {
      "Perseus & Andromeda": "Blushes, weeps, and answers the stranger's questions before the monster surfaces; afterwards she is the prize her parents had already promised.",
      "Perseus & Phineus": "The stated cause of the wedding battle — claimed by the uncle who was betrothed to her and did nothing while she was chained up."
    }
  },
  {
    name: "Cepheus",
    kind: "mortal",
    greek: "Kēpheús (Κηφεύς)",
    roman: "Cepheus",
    ovid: "the Ethiopian king who promises a kingdom as dowry",
    order: "King of Ethiopia",
    domain: "Ethiopia",
    house: "The line of Inachus",
    consorts: ["Cassiopeia"],
    children: ["Andromeda"],
    who: "A father who agrees to his daughter's death to save his country, and then bargains her away again to save her life. He is the poem's portrait of ordinary royal helplessness.",
    books: [4, 5],
    prominence: 3,
    acts: {
      "Perseus & Andromeda": "Runs to the rock with his wife, names the offence as hers, and offers Perseus his daughter and the kingdom as the price of a rescue.",
      "Perseus & Phineus": "Tries to reason with his brother in the wedding hall, protests that Andromeda was saved by Perseus and not by him, and then withdraws entirely from a fight he cannot control."
    }
  },
  {
    name: "Cassiopeia",
    kind: "mortal",
    greek: "Kassiópeia (Κασσιόπεια)",
    roman: "Cassiope",
    ovid: "the mother “too proud of her beauty,” whose tongue costs her daughter",
    order: "Queen of Ethiopia",
    domain: "Ethiopia",
    house: "The line of Inachus",
    consorts: ["Cepheus"],
    children: ["Andromeda"],
    who: "The queen whose boast against the sea-nymphs brings the monster. Ovid keeps her almost silent, so that the offence is remembered entirely through its punishment.",
    books: [4],
    prominence: 3,
    acts: {
      "Perseus & Andromeda": "Named as the cause: Ammon's oracle demanded the daughter because the mother compared herself to the Nereids."
    }
  },
  {
    name: "Phineus",
    kind: "mortal",
    greek: "Phineús (Φινεύς)",
    roman: "Phineus",
    ovid: "“the author of the war,” who throws a spear that lands in nothing",
    order: "Prince of Ethiopia",
    domain: "Ethiopia; a claim not backed by action",
    house: "The line of Inachus",
    who: "Andromeda's uncle and betrothed, who did not appear at the rock and appears at the wedding with two hundred men. His petrification catches him begging, and Ovid notes with satisfaction that the marble kept the cowardly expression.",
    books: [4, 5],
    prominence: 2,
    acts: {
      "Perseus & Andromeda": "Named at the close as the man to whom Andromeda had been promised, and who has done nothing to earn her.",
      "Perseus & Phineus": "Starts the massacre with a badly aimed spear, watches his whole faction turn to stone, and finally asks only for his life — at which point he becomes a statue of a man asking for his life."
    }
  },

  /* ---------------------------------------------------- the house of the Sun */
  {
    name: "Phaethon",
    kind: "mortal",
    greek: "Pháethōn (Φαέθων)",
    roman: "Phaethon",
    ovid: "“Phaethon, the fiery one” — the boy whose name is the disaster",
    order: "Son of the Sun",
    domain: "Contested paternity; the sun's road",
    house: "The house of the Sun",
    father: "Sol / Phoebus",
    mother: "Clymene",
    who: "A boy who needs public proof of who his father is, and whose demand for it burns Africa black, dries the rivers, and scars the sky. Ovid's epitaph on him is generous: he dared great things, and fell.",
    books: [1, 2],
    prominence: 1,
    acts: {
      "Phaethon at the Sun's palace": "Walks up to the palace of the Sun, cannot look directly at his father, and asks for a token that will prove his descent. Given an unconditional oath, he asks for the chariot, and will not be talked out of it through a speech that Ovid makes as long and as reasonable as any in the poem.",
      "The solar chariot": "Loses the horses almost immediately, sees the constellations as beasts and panics, drops the reins, scorches the earth, and is struck out of the sky by Jupiter.",
      "The Heliades & Cycnus": "Buried by Italian nymphs beneath an epitaph that names both his ambition and his father, on the bank of the Eridanus."
    }
  },
  {
    name: "Clymene",
    kind: "nymph",
    greek: "Klyménē (Κλυμένη)",
    roman: "Clymene",
    ovid: "the Oceanid who swears by the Sun's own light that she has told the truth",
    order: "Oceanid",
    domain: "The eastern sea",
    house: "The house of the Sun",
    father: "Oceanus",
    consorts: ["Sol / Phoebus", "Merops"],
    children: ["Phaethon", "The Heliades"],
    who: "Phaethon's mother, married to a mortal king but insistent on the divine paternity — and the one who sends her son to verify it. Her grief afterwards is compounded by having to watch four daughters turn into trees.",
    books: [2],
    prominence: 2,
    acts: {
      "Phaethon at the Sun's palace": "Stung by the insult to her word, she throws her arms up to the sun and tells the boy to go east and ask the god himself.",
      "The Heliades & Cycnus": "Wanders the whole earth for the body, finds only a name on a stone, and then tries to hold her daughters back from the bark closing over them."
    }
  },
  {
    name: "The Heliades",
    aliases: ["the daughters of the Sun", "Phaethon's sisters"],
    kind: "collective",
    greek: "Hēliádes (Ἡλιάδες)",
    roman: "Heliades",
    ovid: "“the sisters, weeping tears that the sun hardens”",
    order: "Daughters of the Sun",
    domain: "Mourning, poplars, amber",
    house: "The house of the Sun",
    father: "Sol / Phoebus",
    mother: "Clymene",
    who: "Phaethon's sisters, whose four months of continuous mourning turn them into poplars on the Eridanus. Their tears become amber, which Ovid points out is worn by Roman brides — grief converted into an export.",
    books: [2],
    prominence: 2,
    acts: {
      "The Heliades & Cycnus": "Lie on the tomb for four months until bark climbs their legs; their mother tears at the wood and draws blood, and each daughter asks her to stop because she is hurting them."
    }
  },
  {
    name: "Cycnus",
    kind: "mortal",
    greek: "Kýknos (Κύκνος)",
    roman: "Cycnus",
    ovid: "the Ligurian king “joined to Phaethon by more than blood”",
    order: "King of Liguria",
    domain: "Mourning; the swan",
    house: "The house of the Sun",
    who: "Phaethon's friend and kinsman, who abandons his kingdom to grieve on the riverbank and becomes the first swan — a bird that keeps his fear of the sky and never flies high.",
    books: [2],
    prominence: 3,
    acts: {
      "The Heliades & Cycnus": "Leaves his cities and his people to mourn among the new poplars; his voice thins, feathers cover his hair, his neck lengthens, and he takes to low water because he remembers what fire did."
    }
  },
  {
    name: "Callisto",
    kind: "nymph",
    greek: "Kallistṓ (Καλλιστώ)",
    roman: "Callisto",
    ovid: "“the Nonacrian girl,” who wore her hair in a plain white band",
    order: "Arcadian nymph",
    domain: "Arcadia; Diana's hunt; the northern sky",
    house: "The renewed human race",
    father: "Lycaon",
    consorts: ["Jupiter"],
    children: ["Arcas"],
    who: "One of Diana's huntresses, assaulted by a god wearing Diana's own face, expelled by Diana for the result, transformed by Juno for the same reason, and finally set among the stars where Juno's spite still follows her.",
    books: [2],
    prominence: 1,
    acts: {
      "Callisto": "Loses her shape by degrees — arms roughening, hands hooking, voice becoming a growl — and keeps a human mind inside a bear's body for fifteen years, until her own son levels a hunting spear at her and Jupiter snatches them both into the sky as Ursa Major and Ursa Minor."
    }
  },
  {
    name: "Arcas",
    kind: "mortal",
    greek: "Arkás (Ἀρκάς)",
    roman: "Arcas",
    ovid: "the boy of fifteen who nearly commits the worst possible act of hunting",
    order: "Prince of Arcadia",
    domain: "Arcadia; the Little Bear",
    house: "The renewed human race",
    father: "Jupiter",
    mother: "Callisto",
    who: "Callisto's son, raised without knowing what happened to his mother, and stopped only by divine intervention from killing her. Ovid names Arcadia after him without comment.",
    books: [2],
    prominence: 3,
    acts: {
      "Callisto": "Meets a bear in the woods that will not stop staring at him, and is drawing back the spear when Jupiter takes them both up into the constellations."
    }
  },
  {
    name: "Coronis",
    kind: "mortal",
    greek: "Korōnís (Κορωνίς)",
    roman: "Coronis",
    ovid: "“the most beautiful in Thessaly,” who was faithful only while she was unobserved",
    order: "Princess of Thessaly",
    domain: "Thessaly",
    house: "The house of the Sun",
    consorts: ["Apollo"],
    children: ["Aesculapius"],
    who: "Apollo's lover, killed by his arrow on the strength of a bird's report, and pregnant at the time. Her one line of dialogue asks only that the child not die with her — and it does not.",
    books: [2],
    prominence: 2,
    acts: {
      "Coronis & Ocyroe": "Shot through the breast before she can be questioned, she pulls the arrow out, says that she deserved punishment but her child did not, and dies. Apollo tries every healing art he has, too late, and takes the boy from the burning body."
    }
  },
  {
    name: "Aesculapius",
    aliases: ["Asclepius"],
    kind: "god",
    greek: "Asklēpiós (Ἀσκληπιός)",
    roman: "Aesculapius",
    ovid: "the child taken from the pyre, and at last “the god who comes to Rome as a serpent”",
    order: "Healing god",
    domain: "Medicine, healing, and — dangerously — resurrection",
    house: "The house of the Sun",
    father: "Apollo",
    mother: "Coronis",
    who: "Cut from his dying mother, raised by Chiron, and eventually a god whose cult Rome imports by ship. He is the poem's one figure who crosses from Greek myth into documented Roman religious history.",
    books: [2, 15],
    prominence: 2,
    acts: {
      "Coronis & Ocyroe": "Rescued from his mother's burning body and carried to Chiron's cave, where Ocyroe prophesies both his power to restore the dead and the death it will cost him.",
      "Egeria & Hippolytus": "Named as the physician whose herbs brought Hippolytus back from the dead — the act that earned him the thunderbolt.",
      "Aesculapius comes to Rome": "Appears to the Roman envoys at Epidaurus as a crested golden serpent, boards their ship of his own accord, and lands on the Tiber island to end the plague."
    }
  },
  {
    name: "Chiron",
    kind: "creature",
    greek: "Kheírōn (Χείρων)",
    roman: "Chiron",
    ovid: "“the Philyreian hero,” the centaur who is the exception to the centaurs",
    order: "Centaur",
    domain: "Medicine, music, and the education of heroes",
    house: "The Olympian house",
    father: "Saturn",
    mother: "Philyra",
    children: ["Ocyroe"],
    who: "The wise centaur, tutor of Aesculapius and Achilles, and the only member of his species in the poem who is not a byword for drunken violence. His paternity by Saturn makes him half-brother to Jupiter.",
    books: [2, 11],
    prominence: 3,
    acts: {
      "Coronis & Ocyroe": "Delighted to be given a divine foster-son, and then forced to hear his own daughter prophesy that he will one day beg to be allowed to die.",
      "Peleus & Thetis": "Named among the figures around Peleus' marriage and the rearing of Achilles."
    }
  },
  {
    name: "Ocyroe",
    kind: "nymph",
    greek: "Ōkyróē (Ὠκυρόη)",
    roman: "Ocyrhoe",
    ovid: "“Ocyroe, born on a rushing river,” whose prophecy is cut off in her mouth",
    order: "Centaur's daughter, prophet",
    domain: "Prophecy",
    house: "The Olympian house",
    father: "Chiron",
    mother: "Chariclo",
    who: "A prophet punished for prophesying accurately. Ovid stages her transformation as an interruption of speech: her words thicken into a whinny while she is still trying to finish the sentence.",
    books: [2],
    prominence: 2,
    acts: {
      "Coronis & Ocyroe": "Foretells that the infant Aesculapius will heal the world and be killed for it, and that her own father will want to die and be unable to — and then complains that the fates are stopping her, as her face lengthens and her arms turn to legs."
    }
  },
  {
    name: "Battus",
    kind: "mortal",
    greek: "Báttos (Βάττος)",
    roman: "Battus",
    ovid: "the herdsman whose stone still bears the guilt of a false witness",
    order: "Herdsman",
    domain: "Pylos; broken oaths",
    house: "The renewed human race",
    who: "The only witness to Mercury's cattle theft, bribed to silence with a cow and then bribed again, in disguise, to talk. He fails a test he did not know he was taking twice over.",
    books: [2],
    prominence: 3,
    acts: {
      "Battus & Aglauros": "Swears by a stone that the stone will speak before he does, and is then offered a bull and a cow by the same god in another shape. He talks; Mercury turns him into the touchstone that gave the region its name."
    }
  },
  {
    name: "Aglauros",
    kind: "mortal",
    greek: "Ágraulos (Ἄγραυλος)",
    roman: "Aglauros",
    ovid: "the sister “already gnawed by envy,” who hardens where she sits",
    order: "Princess of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    father: "Cecrops",
    siblings: ["Herse", "Pandrosos"],
    who: "One of Cecrops' daughters, who tries to charge Mercury for access to her sister and is then filled with Envy until the misery calcifies her. Ovid notes that even the stone is grey, the colour her mind had become.",
    books: [2],
    prominence: 2,
    acts: {
      "Battus & Aglauros": "Demands gold from Mercury, receives Envy instead, sits in the doorway refusing to move, and is stone before she can rise — her voice, blood, and colour all going together."
    }
  },
  {
    name: "Herse",
    kind: "mortal",
    greek: "Hérsē (Ἕρση)",
    roman: "Herse",
    ovid: "“as far above her companions as the morning star above the other stars”",
    order: "Princess of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    father: "Cecrops",
    siblings: ["Aglauros", "Pandrosos"],
    consorts: ["Mercury"],
    who: "The sister Mercury sees from the air during the Athenian festival of Minerva. She barely speaks; the episode belongs to her sister's envy rather than to her.",
    books: [2],
    prominence: 3,
    acts: {
      "Battus & Aglauros": "Spotted in the procession carrying sacred offerings on her head, and made the object of a courtship her sister tries to tax."
    }
  },
  {
    name: "Cecrops",
    kind: "mortal",
    greek: "Kékrops (Κέκροψ)",
    roman: "Cecrops",
    ovid: "the earthborn founder whose house the poem visits twice",
    order: "First king of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    children: ["Aglauros", "Herse", "Pandrosos"],
    who: "Athens' autochthonous first king, half serpent in the tradition. He never appears directly; he is the name by which Ovid signals that we are in Athens and in a story about civic identity.",
    books: [2, 6],
    prominence: 3
  },
  {
    name: "Europa",
    kind: "mortal",
    greek: "Eurṓpē (Εὐρώπη)",
    roman: "Europa",
    ovid: "the princess who holds a horn in one hand while the shore recedes",
    order: "Princess of Tyre",
    domain: "Phoenicia, then Crete",
    house: "The house of Agenor",
    father: "Agenor",
    siblings: ["Cadmus"],
    consorts: ["Jupiter"],
    children: ["Minos", "Rhadamanthus", "Sarpedon"],
    who: "The girl whose sea-crossing carries the poem from Asia to Crete and, indirectly, founds Thebes — because her brother is sent to find her and forbidden to come home without her.",
    books: [2, 3, 6],
    prominence: 1,
    acts: {
      "Europa": "Plays with a bull so gentle she garlands its horns and finally sits on its back; it walks into the shallows and then swims. Ovid ends the book on her, mid-sea, with her clothes fluttering and no shore behind her.",
      "Arachne & Minerva": "The first panel of Arachne's tapestry: the bull is so convincing, Ovid says, that you would think it real and the water real."
    }
  },
  {
    name: "Agenor",
    kind: "mortal",
    greek: "Agḗnōr (Ἀγήνωρ)",
    roman: "Agenor",
    ovid: "the father whose order is “find your sister or be exiled”",
    order: "King of Tyre",
    domain: "Phoenicia",
    house: "The house of Agenor",
    children: ["Europa", "Cadmus"],
    who: "The Phoenician king whose impossible command creates a founder. Ovid calls the order both loving and criminal in the same breath, which is the whole moral compression of the episode.",
    books: [2, 3],
    prominence: 3,
    acts: {
      "Europa": "Sends his son Cadmus to search for the daughter Jupiter has taken, on pain of permanent exile — a sentence Ovid describes as pious and wicked at once."
    }
  },

  /* ------------------------------------------------- the house of Cadmus */
  {
    name: "Cadmus",
    kind: "hero",
    greek: "Kádmos (Κάδμος)",
    roman: "Cadmus",
    ovid: "the exile who follows a cow, and at the last “the serpent, harmless, with no venom left”",
    order: "Founder of Thebes",
    domain: "Thebes; the alphabet, in the wider tradition",
    house: "The house of Cadmus",
    father: "Agenor",
    siblings: ["Europa"],
    consorts: ["Harmonia"],
    children: ["Autonoe", "Ino", "Semele", "Agave", "Polydorus"],
    who: "The man who cannot go home, founds a city instead, and lives long enough to see every one of his children and grandchildren destroyed by contact with divinity. His own transformation is the only gentle one in the family.",
    books: [3, 4],
    prominence: 1,
    acts: {
      "Cadmus & the dragon": "Consults Delphi, follows the unyoked cow to the spot where she lies down, loses his men to Mars' serpent, kills it, sows the teeth at Minerva's word, and lets the five surviving Spartoi become his citizens.",
      "Actaeon": "Present as the grandfather whose house the disaster belongs to; Ovid opens the episode by asking what fault there was in an accident.",
      "Cadmus & Harmonia": "Broken by his family's ruin, he wonders aloud whether the serpent he killed was sacred and asks to become one — and is answered at once, with his wife following him into the same shape and the two of them gliding away, still recognising each other."
    }
  },
  {
    // The episode is titled "Cadmus & Harmonia"; the *figure* is Harmonia.
    // Keeping the pair as one record made her a phantom child of her own
    // husband and put a whole generation on the wrong ring.
    name: "Harmonia",
    aliases: ["Cadmus & Harmonia"],
    kind: "mortal",
    greek: "Harmonía (Ἁρμονία)",
    roman: "Harmonia",
    ovid: "the wife “who glides beside him, and does not flee from men”",
    order: "Queen of Thebes",
    domain: "Thebes; exile in Illyria",
    house: "The house of Cadmus",
    father: "Mars",
    mother: "Venus",
    consorts: ["Cadmus"],
    children: ["Autonoe", "Ino", "Semele", "Agave", "Polydorus"],
    who: "Daughter of Mars and Venus, given to Cadmus at a wedding the gods attended — the one marriage in the poem that is neither pursuit nor trick, and which nonetheless produces the most comprehensively destroyed family in it.",
    books: [3, 4],
    prominence: 2,
    acts: {
      "Cadmus & Harmonia": "Watches her husband's body flatten and lengthen, refuses to be left behind, asks the gods to change her too, and is answered mid-embrace. The couple's shared ending is Ovid's only unambiguous mercy in the Theban books."
    }
  },
  {
    name: "Echion",
    kind: "mortal",
    greek: "Ekhíōn (Ἐχίων)",
    roman: "Echion",
    ovid: "one of the five Spartoi who throw down their weapons and accept peace",
    order: "Earthborn Theban",
    domain: "Thebes",
    house: "The house of Cadmus",
    consorts: ["Agave"],
    children: ["Pentheus"],
    who: "A survivor of the sown men, and — through his marriage to Cadmus' daughter — the father of Pentheus. His son's autochthonous, earth-sprung ancestry is exactly what Pentheus keeps appealing to when he tells Thebes to resist a foreign god.",
    books: [3],
    prominence: 3,
    acts: {
      "Cadmus & the dragon": "The first of the earthborn to call for an end to the fratricide; the peace he proposes is what allows the city to exist."
    }
  },
  {
    name: "Actaeon",
    kind: "hero",
    greek: "Aktaíōn (Ἀκταίων)",
    roman: "Actaeon",
    ovid: "the grandson of Cadmus, “a stag, and afraid of his own speed”",
    order: "Hunter, prince of Thebes",
    domain: "Cithaeron; the hunt",
    house: "The house of Cadmus",
    father: "Aristaeus",
    mother: "Autonoe",
    who: "The poem's clearest case of punishment without guilt. Ovid states outright that Actaeon's crime was an error, not a wrong, and then narrates his death by his own hounds at appalling length — fifty of them, named.",
    books: [3],
    prominence: 1,
    acts: {
      "Actaeon": "Calls off the day's hunt at noon, wanders into the wrong valley, is splashed with water, grows horns, and finds that the only voice he has left cannot tell his own dogs who he is. His friends stand around calling for him to come and see the kill."
    }
  },
  {
    name: "Autonoe",
    kind: "mortal",
    greek: "Autonóē (Αὐτονόη)",
    roman: "Autonoe",
    ovid: "the first of Cadmus' daughters to be given a reason to grieve",
    order: "Princess of Thebes",
    domain: "Thebes",
    house: "The house of Cadmus",
    father: "Cadmus",
    mother: "Harmonia",
    siblings: ["Ino", "Semele", "Agave"],
    children: ["Actaeon"],
    who: "Actaeon's mother, and later one of the Bacchants who tear Pentheus apart. The house of Cadmus is arranged so that every sister both suffers a loss and inflicts one.",
    books: [3],
    prominence: 3,
    acts: {
      "Actaeon": "Named as the mother whose grief opens the sequence of Theban disasters.",
      "Pentheus & Bacchus": "One of the two aunts who reach the king first on the mountain and take an arm off him."
    }
  },
  {
    name: "Semele",
    kind: "mortal",
    greek: "Semélē (Σεμέλη)",
    roman: "Semele",
    ovid: "the mother who asks for proof and “cannot bear the gift of heaven”",
    order: "Princess of Thebes",
    domain: "Thebes",
    house: "The house of Cadmus",
    father: "Cadmus",
    mother: "Harmonia",
    siblings: ["Autonoe", "Ino", "Agave"],
    consorts: ["Jupiter"],
    children: ["Bacchus / Dionysus"],
    who: "Jupiter's lover, destroyed by asking for exactly what she was coached to ask for. Her death is the poem's cleanest statement of scale: divinity is not hostile to her, merely too large.",
    books: [3, 4],
    prominence: 1,
    acts: {
      "Semele": "Extracts the same unconditional oath Phaethon did, asks Jupiter to come as he comes to Juno, and is burned by a body she requested — leaving an unfinished child that his father carries to term himself."
    }
  },
  {
    name: "Ino",
    aliases: ["Ino / Leucothea", "Leucothea"],
    kind: "mortal",
    greek: "Inṓ (Ἰνώ) / Leukothéa",
    roman: "Ino / Matuta",
    ovid: "the aunt who nurses Bacchus, and at the end “the white goddess” of the sea",
    order: "Princess of Thebes, then sea goddess",
    domain: "Thebes; then the safety of sailors",
    house: "The house of Cadmus",
    father: "Cadmus",
    mother: "Harmonia",
    siblings: ["Autonoe", "Semele", "Agave"],
    consorts: ["Athamas"],
    children: ["Learchus", "Melicertes / Palaemon"],
    who: "Semele's sister, who raises Bacchus and is destroyed for it. Her leap into the sea with her surviving son converts the family's last member into two Roman cult figures — Matuta and Portunus.",
    books: [3, 4],
    prominence: 1,
    acts: {
      "Semele": "Takes the infant Bacchus in when Jupiter's thigh has finished the work, and raises him in secret.",
      "Pentheus & Bacchus": "One of the ecstatic women on Cithaeron when her nephew comes up the mountain to spy.",
      "Athamas & Ino": "Driven mad by Tisiphone's snakes, she runs to a cliff with Melicertes and jumps; Venus asks Neptune for her family, and the two drowned bodies come out of the water as gods."
    }
  },
  {
    name: "Agave",
    kind: "mortal",
    greek: "Agaúē (Ἀγαυή)",
    roman: "Agave",
    ovid: "the mother who shouts to her sisters to look at the boar she has killed",
    order: "Princess of Thebes",
    domain: "Thebes; Cithaeron",
    house: "The house of Cadmus",
    father: "Cadmus",
    mother: "Harmonia",
    siblings: ["Autonoe", "Ino", "Semele"],
    consorts: ["Echion"],
    children: ["Pentheus"],
    who: "Pentheus' mother, and the instrument of his death. Ovid compresses Euripides' entire recognition scene into a few lines, keeping only the worst of it: she tears off her son's head while calling it a trophy.",
    books: [3],
    prominence: 1,
    acts: {
      "Pentheus & Bacchus": "Sees her son through the god's distortion as a wild boar, raises the cry that brings the whole company, and pulls his head from his shoulders while he is still begging her by name."
    }
  },
  {
    name: "Pentheus",
    kind: "mortal",
    greek: "Pentheús (Πενθεύς)",
    roman: "Pentheus",
    ovid: "“the scorner of the gods,” whose name Ovid never lets us forget means grief",
    order: "King of Thebes",
    domain: "Thebes; civic order against ecstatic religion",
    house: "The house of Cadmus",
    father: "Echion",
    mother: "Agave",
    who: "The king who insists that the new god is a fraud, that his people are behaving disgracefully, and that he can stop it. Ovid gives him the best arguments in the episode and then destroys him with them still in his mouth.",
    books: [3],
    prominence: 1,
    acts: {
      "Pentheus & Bacchus": "Insults Tiresias, harangues the Thebans about their earthborn dignity, has Acoetes arrested and hears his story with contempt, and finally goes up Cithaeron himself to watch — where the first person to see him is his mother."
    }
  },
  {
    name: "Acoetes",
    kind: "mortal",
    greek: "Akoítēs (Ἀκοίτης)",
    roman: "Acoetes",
    ovid: "the Maeonian helmsman who tells the king a story instead of a defence",
    order: "Sailor, Bacchic devotee",
    domain: "The Tyrrhenian sea",
    house: "The renewed human race",
    who: "A poor fisherman's son turned steersman, arrested as one of Bacchus' followers, whose interrogation turns into the longest first-person narrative in the book. He is Ovid's model of a witness whose testimony is true and disbelieved.",
    books: [3],
    prominence: 2,
    acts: {
      "Pentheus & Bacchus": "Brought in chains to be executed, and given time to speak because the king wants a confession; the chains fall off by themselves after Pentheus orders him tortured.",
      "Tyrrhenian pirates": "Narrates how his crew took a beautiful boy aboard at Chios, how he alone objected, and how the ship stopped dead under vines while his shipmates dived overboard and came up curved and dark and finless-legged."
    }
  },
  {
    name: "Tiresias",
    kind: "seer",
    greek: "Teiresías (Τειρεσίας)",
    roman: "Tiresias",
    ovid: "the seer who knew “both sides of Venus,” blind and never wrong",
    order: "Prophet of Thebes",
    domain: "Prophecy; the knowledge of both sexes",
    house: "The house of Cadmus",
    children: ["Manto"],
    who: "The Theban prophet whose authority comes from an unrepeatable experience: seven years lived as a woman after striking two mating snakes, then a return. He is the only mortal in the poem qualified to settle an Olympian argument, and is blinded for doing it.",
    books: [3],
    prominence: 1,
    acts: {
      "Tiresias": "Strikes the snakes twice, seven years apart, and is changed each time; called to arbitrate, he rules for Jupiter, is blinded by Juno, and receives foresight from Jupiter as compensation no god can revoke.",
      "Echo & Narcissus": "Gives his first recorded prophecy about Narcissus — that the boy will live long only if he never comes to know himself — and is vindicated by an outcome nobody understood in advance.",
      "Pentheus & Bacchus": "Warns the king he will be torn to pieces and scattered through the woods, and is insulted for it."
    }
  },
  {
    name: "Narcissus",
    kind: "mortal",
    greek: "Nárkissos (Νάρκισσος)",
    roman: "Narcissus",
    ovid: "the boy of sixteen “who could seem both boy and man,” and finally a flower with a saffron centre",
    order: "Son of a river and a nymph",
    domain: "Boeotia; the untouched pool",
    house: "The primordial succession",
    father: "Cephisus",
    mother: "Liriope",
    who: "Beautiful, universally desired, and incapable of wanting anyone else. Ovid's cruelty is that Narcissus does eventually understand — the poem's most quoted realisation is his own, and it changes nothing.",
    books: [3],
    prominence: 1,
    acts: {
      "Echo & Narcissus": "Rejects Echo, is cursed by a rejected suitor, lies down at a spring no shepherd has troubled, and falls in love with what he takes for another boy in the water. When he grasps that the other boy is himself, he cannot leave, and wastes away still speaking to the surface; even in the Underworld he looks for himself in the Styx."
    }
  },

  /* ----------------------------------------- Book IV's frame and its stories */
  {
    name: "The Minyades",
    aliases: ["the daughters of Minyas", "the Minyeides"],
    kind: "collective",
    greek: "Minyádes (Μινυάδες)",
    roman: "Minyeides",
    ovid: "the sisters who keep the loom going through a god's festival",
    order: "Daughters of Minyas",
    domain: "Orchomenos; weaving; storytelling",
    house: "The renewed human race",
    father: "Minyas",
    who: "Three sisters who refuse Bacchus' rites and stay indoors telling stories to pass the working day — which makes them the narrators of a third of Book IV, and its final victims.",
    books: [4],
    prominence: 1,
    acts: {
      "The Minyades": "Declare Bacchus no true god, keep spinning, and agree to shorten the work with tales; at nightfall the house fills with unseen drums and the smell of saffron, the looms turn to vines, and the sisters shrink into bats — creatures of houses, and of the dusk they wove into."
    }
  },
  {
    name: "Leuconoe",
    kind: "mortal",
    greek: "Leukonóē (Λευκονόη)",
    roman: "Leuconoe",
    ovid: "the second sister, who tells what the Sun did and what was done to him",
    order: "Daughter of Minyas",
    domain: "Orchomenos",
    house: "The renewed human race",
    father: "Minyas",
    siblings: ["Alcithoe", "Arsippe"],
    who: "The Minyad who chooses the Sun as her subject — first as the informant who exposed Venus, then as a lover exposed in turn. She is the poem's neatest demonstration that a narrator's choice of story is itself an argument.",
    books: [4],
    prominence: 2,
    acts: {
      "The Minyades": "Takes her turn at the loom and tells the linked tales of Mars and Venus, and of Leucothoe and Clytie.",
      "Mars & Venus": "Narrates the exposure of the lovers as the reason for what happens next — Venus punishing the Sun through his own heart.",
      "Leucothoe & Clytie": "Follows the Sun through his revenge-love, the buried girl, and the jealous rival who becomes the heliotrope."
    }
  },
  {
    name: "Alcithoe",
    kind: "mortal",
    greek: "Alkithóē (Ἀλκιθόη)",
    roman: "Alcithoe",
    ovid: "the sister who wants a story “nobody has heard”",
    order: "Daughter of Minyas",
    domain: "Orchomenos",
    house: "The renewed human race",
    father: "Minyas",
    siblings: ["Leuconoe", "Arsippe"],
    who: "The third Minyad, who deliberately selects an unfamiliar tale — and picks the story of Salmacis, the most disquieting transformation in the book.",
    books: [4],
    prominence: 2,
    acts: {
      "The Minyades": "Rejects the well-known Theban stories and asks for something unheard-of; the request produces Hermaphroditus.",
      "Salmacis & Hermaphroditus": "Narrates the merging at the Carian pool, and finishes by explaining why its water is still said to unman anyone who swims in it."
    }
  },
  {
    name: "Arsippe",
    kind: "mortal",
    greek: "Arsíppē (Ἀρσίππη)",
    roman: "Arsippe",
    ovid: "the eldest sister, who begins with Babylon",
    order: "Daughter of Minyas",
    domain: "Orchomenos",
    house: "The renewed human race",
    father: "Minyas",
    siblings: ["Leuconoe", "Alcithoe"],
    who: "The first of the three storytellers. The manuscript tradition is unsettled about her name, which Ovid's own framing device rather encourages.",
    books: [4],
    prominence: 2,
    acts: {
      "The Minyades": "Opens the sequence by weighing several possible tales and settling on the Babylonian lovers.",
      "Pyramus & Thisbe": "Narrates the wall, the chink, the lioness, the stained veil, and the mulberry — and states at the end that the gods approved the change of the fruit's colour."
    }
  },
  {
    name: "Pyramus",
    kind: "mortal",
    greek: "Pýramos (Πύραμος)",
    roman: "Pyramus",
    ovid: "“the most beautiful of the young men of the east”",
    order: "Youth of Babylon",
    domain: "Babylon",
    house: "The renewed human race",
    consorts: ["Thisbe"],
    who: "Half of the poem's most influential love story, and a study in reading evidence badly. He finds a bloodied veil and a lion's tracks and draws exactly the wrong conclusion at exactly the wrong speed.",
    books: [4],
    prominence: 2,
    acts: {
      "Pyramus & Thisbe": "Arrives late to the tomb of Ninus, finds the torn veil, blames himself, and falls on his own sword; the blood springing up the mulberry's trunk is what turns the fruit permanently dark."
    }
  },
  {
    name: "Thisbe",
    kind: "mortal",
    greek: "Thísbē (Θίσβη)",
    roman: "Thisbe",
    ovid: "“the loveliest girl of the east,” who asks that one tomb hold them both",
    order: "Maiden of Babylon",
    domain: "Babylon",
    house: "The renewed human race",
    consorts: ["Pyramus"],
    who: "The one who proposed the meeting, survived the lioness, and returned to find the consequence. Her closing speech — asking the parents who kept them apart to bury them together — is the reason the story survived into Shakespeare.",
    books: [4],
    prominence: 2,
    acts: {
      "Pyramus & Thisbe": "Escapes the lioness into a cave and drops her veil, comes back to a dying Pyramus, recognises the scabbard, addresses both fathers and the tree, and kills herself with his sword still warm."
    }
  },
  {
    name: "Leucothoe",
    kind: "mortal",
    greek: "Leukothóē (Λευκοθόη)",
    roman: "Leucothoe",
    ovid: "the girl the Sun approached “in her mother's shape,” buried alive and raised as incense",
    order: "Princess of Persia",
    domain: "Achaemenid Persia",
    house: "The house of the Sun",
    father: "Orchamus",
    mother: "Eurynome",
    consorts: ["Sol / Phoebus"],
    who: "The Sun's own punishment for informing on Venus. She is buried alive by her father and turned into the frankincense tree — so that the god who could not save her receives her every day as smoke.",
    books: [4],
    prominence: 2,
    acts: {
      "Leucothoe & Clytie": "Approached by the Sun disguised as Eurynome, betrayed to her father by a jealous rival, and buried under a heap of sand; the god's nectar dissolves her body into a shoot of frankincense that comes up through the mound."
    }
  },
  {
    name: "Clytie",
    kind: "nymph",
    greek: "Klytíē (Κλυτίη)",
    roman: "Clytie",
    ovid: "the abandoned lover who turns her face after him “and keeps her love though her shape is gone”",
    order: "Oceanid",
    domain: "Devotion turned to fixation",
    house: "The house of the Sun",
    father: "Oceanus",
    consorts: ["Sol / Phoebus"],
    who: "The Sun's discarded lover, who destroys her rival by informing and then destroys herself by watching. Ovid makes her the origin of the heliotrope, a plant defined entirely by its inability to look away.",
    books: [4],
    prominence: 2,
    acts: {
      "Leucothoe & Clytie": "Tells Orchamus what his daughter has done, is rejected by the Sun for it, sits on bare ground for nine days without food or water following his course, and takes root as the flower that still turns."
    }
  },
  {
    name: "Orchamus",
    kind: "mortal",
    greek: "Órkhamos (Ὄρχαμος)",
    roman: "Orchamus",
    ovid: "“seventh in line from ancient Belus,” and merciless",
    order: "King of Persia",
    domain: "Achaemenid Persia",
    house: "The house of the Sun",
    consorts: ["Eurynome"],
    children: ["Leucothoe"],
    who: "A father who answers a daughter's rape by burying her. Ovid gives him no hesitation at all, which is the point: divine violence is followed instantly by human violence in the same episode.",
    books: [4],
    prominence: 3,
    acts: {
      "Leucothoe & Clytie": "Refuses to hear that the Sun forced her, drives her into a deep trench, and piles sand over her while she is still stretching her hands out."
    }
  },
  {
    name: "Eurynome",
    kind: "mortal",
    greek: "Eurynómē (Εὐρυνόμη)",
    roman: "Eurynome",
    ovid: "“the most beautiful woman of the perfumed land,” until her daughter grew up",
    order: "Queen of Persia",
    domain: "Achaemenid Persia",
    house: "The house of the Sun",
    consorts: ["Orchamus"],
    children: ["Leucothoe"],
    who: "Leucothoe's mother, and the shape the Sun borrows to reach her. Her form is the disguise that makes the assault possible.",
    books: [4],
    prominence: 3,
    acts: {
      "Leucothoe & Clytie": "Impersonated by the god, who dismisses the twelve attendant maids in her voice before dropping the disguise."
    }
  },
  {
    name: "Hermaphroditus",
    kind: "god",
    greek: "Hermaphróditos (Ἑρμαφρόδιτος)",
    roman: "Hermaphroditus",
    ovid: "the boy “in whose face you could read both his father and his mother”",
    order: "Divine child",
    domain: "The Carian pool; doubled sex",
    house: "The Olympian house",
    father: "Mercury",
    mother: "Venus",
    who: "A fifteen-year-old on his first journey, whose refusal is overridden and whose body is permanently altered by another's prayer. He is the only figure in the poem who asks for the transformation to be extended to others as revenge.",
    books: [4],
    prominence: 2,
    acts: {
      "Salmacis & Hermaphroditus": "Refuses the nymph, waits for her to leave, undresses and swims — and is caught, held, and merged. Finding himself “half a man,” he asks his parents that anyone who enters the pool should come out the same way, and they grant it."
    }
  },
  {
    name: "Athamas",
    kind: "mortal",
    greek: "Athámas (Ἀθάμας)",
    roman: "Athamas",
    ovid: "the king who mistakes his wife and son for a lioness and cubs",
    order: "King of Boeotia",
    domain: "Orchomenos and Thebes",
    house: "The renewed human race",
    father: "Aeolus",
    consorts: ["Ino", "Nephele"],
    children: ["Learchus", "Melicertes / Palaemon", "Phrixus", "Helle"],
    who: "Ino's husband, driven mad by a Fury as collateral in Juno's campaign against Bacchus' family. His madness is precise: he sees exactly what a hunter sees, and acts on it.",
    books: [4],
    prominence: 2,
    acts: {
      "Athamas & Ino": "Struck by Tisiphone's snake, he shouts to his men to net the lioness in the hall, snatches his own son Learchus from Ino's arms, and dashes him against a stone."
    }
  },
  {
    name: "Melicertes / Palaemon",
    aliases: ["Melicertes", "Palaemon", "Portunus"],
    kind: "mortal",
    greek: "Melikértēs (Μελικέρτης) / Palaímōn",
    roman: "Melicertes / Portunus",
    ovid: "the child who goes into the sea a boy and comes out a god of harbours",
    order: "Prince, then sea god",
    domain: "Harbours and safe landfall",
    house: "The house of Cadmus",
    father: "Athamas",
    mother: "Ino",
    who: "Ino's surviving son, carried off the cliff in her arms and received into the sea as Palaemon — identified at Rome with Portunus, the god of ports.",
    books: [4],
    prominence: 3,
    acts: {
      "Athamas & Ino": "Held against his mother's chest through the leap; Neptune, at Venus' request, gives them both new names, new bodies, and a place among the sea's divinities."
    }
  },

  /* ---------------------------------------------- Book V's contests of song */
  {
    name: "Pyreneus",
    kind: "mortal",
    greek: "Pyreneús (Πυρηνεύς)",
    roman: "Pyreneus",
    ovid: "the Thracian tyrant who forgets he has no wings",
    order: "King in Phocis",
    domain: "Daulis and Phocis; violated hospitality",
    house: "The renewed human race",
    who: "A usurper who offers the Muses shelter from a storm and then locks the doors. His death — chasing them off a tower under the impression that he can fly — is the poem's most concise joke about self-belief.",
    books: [5],
    prominence: 3,
    acts: {
      "Pyreneus & the Muses": "Invites the goddesses in out of the rain, bars the exits, and when they take to the air announces that he will follow by the same road; he steps off the roof and lands face-first."
    }
  },
  {
    name: "The Pierides",
    aliases: ["the daughters of Pierus", "the Emathian sisters"],
    kind: "collective",
    greek: "Piérides (Πιερίδες)",
    roman: "Pierides",
    ovid: "the nine sisters who sing the gods' cowardice and are answered with a flood",
    order: "Daughters of Pierus",
    domain: "Emathia; the contest of song",
    house: "The renewed human race",
    father: "Pierus",
    who: "Nine mortal sisters who challenge the Muses on their own ground and lose. Their chosen song — the gods fleeing Typhoeus in animal disguises — is a coherent reading of the poem's own material, which makes their punishment as pointed as Arachne's.",
    books: [5],
    prominence: 2,
    acts: {
      "Pierides & Muses": "Sing the war of the giants and the gods' undignified escape into animal shapes; when the nymph judges vote unanimously for the Muses, they abuse the verdict and find their arms turning into wings and their complaints into the chatter of magpies."
    }
  },
  {
    name: "Proserpina",
    aliases: ["Persephone", "Proserpine"],
    kind: "goddess",
    greek: "Persephónē (Περσεφόνη) / Kórē",
    roman: "Proserpina / Libera",
    ovid: "the girl gathering violets who lost them all when her tunic slipped — “and this too she grieved for, in her childishness”",
    order: "Queen of the Underworld",
    domain: "Spring, the grain, and the kingdom of the dead",
    house: "The Olympian house",
    father: "Jupiter",
    mother: "Ceres",
    consorts: ["Pluto / Dis"],
    who: "Ceres' daughter, taken to the Underworld and made its queen. The compromise Jupiter brokers — six months above, six below — turns a personal catastrophe into the mechanism of the seasons.",
    books: [5, 10],
    prominence: 1,
    acts: {
      "Pluto & Proserpina": "Picked up mid-play and carried off in a chariot; her first grief, Ovid says with terrible tenderness, is for the flowers she has dropped.",
      "Cyane & Ascalaphus": "Would have been released outright had she not eaten seven pomegranate seeds in the Underworld garden — the technicality that keeps her.",
      "Orpheus & Eurydice": "Sits beside her husband when Orpheus sings, and is the first of the two to be moved."
    }
  },
  {
    name: "Ascalaphus",
    kind: "mortal",
    greek: "Askálaphos (Ἀσκάλαφος)",
    roman: "Ascalaphus",
    ovid: "the informer who becomes “a sluggish screech-owl, a bird of ill omen”",
    order: "Spirit of the Underworld",
    domain: "The Underworld's orchards",
    house: "The primordial succession",
    who: "The one witness who saw Proserpina eat, and could not keep it to himself. His punishment — becoming the owl whose call announces a death — makes the informer permanently audible.",
    books: [5],
    prominence: 3,
    acts: {
      "Cyane & Ascalaphus": "Reports the seven pomegranate seeds and destroys the deal; Proserpina throws Phlegethon water in his face, and he comes up out of it feathered, beaked, and enlarged into an omen."
    }
  },
  {
    name: "Triptolemus",
    kind: "hero",
    greek: "Triptólemos (Τριπτόλεμος)",
    roman: "Triptolemus",
    ovid: "the young man sent out in a dragon-drawn car to scatter “gifts unknown before”",
    order: "Hero of Eleusis",
    domain: "The teaching of agriculture",
    house: "The Athenian kings",
    who: "Ceres' emissary, who takes cultivated grain to the world. He is the poem's only civilising mission, and it is nearly cut short by a host who wants the credit.",
    books: [5],
    prominence: 3,
    acts: {
      "Triptolemus & Lyncus": "Flies to Scythia with the seed, explains his errand and his origins to King Lyncus, and wakes to find his host coming at him with a knife."
    }
  },
  {
    name: "Lyncus",
    kind: "mortal",
    greek: "Lýnkos (Λύγκος)",
    roman: "Lyncus",
    ovid: "the Scythian king who wanted to be the one who gave the world bread",
    order: "King of Scythia",
    domain: "Scythia",
    house: "The renewed human race",
    who: "A host who tries to murder his guest in order to claim the invention of agriculture. Ceres turns him into the animal his name already contained.",
    books: [5],
    prominence: 3,
    acts: {
      "Triptolemus & Lyncus": "Attacks the sleeping missionary and is caught mid-blow by Ceres, who makes him a lynx — spotted, silent, and no longer able to claim anything."
    }
  },

  /* ---------------------------------------- Book VI: art, punishment, revenge */
  {
    name: "Arachne",
    kind: "mortal",
    greek: "Arákhnē (Ἀράχνη)",
    roman: "Arachne",
    ovid: "the Lydian girl “famous not for her birth or her city, but for her art”",
    order: "Weaver of Hypaepa",
    domain: "Weaving; the argument about divine conduct",
    house: "The renewed human race",
    father: "Idmon",
    who: "The poem's most dangerous artist. Her tapestry is a catalogue of divine sexual violence, technically flawless, and Ovid says explicitly that neither Pallas nor Envy could fault it — which is why it has to be destroyed rather than defeated.",
    books: [6],
    prominence: 1,
    acts: {
      "Arachne & Minerva": "Denies she owes anything to Minerva, refuses the disguised goddess' advice to apologise, weaves twenty-one divine rapes into a border of ivy and flowers, and is beaten about the head with a boxwood shuttle. She hangs herself; the goddess lifts her out of the noose, sprinkles her with Hecate's herbs, and leaves her a body that is all belly and spinning fingers."
    }
  },
  {
    name: "Leda",
    kind: "mortal",
    greek: "Lḗda (Λήδα)",
    roman: "Leda",
    ovid: "shown in Arachne's weaving “lying under the swan's wings”",
    order: "Queen of Sparta",
    domain: "Sparta",
    house: "The renewed human race",
    consorts: ["Jupiter", "Tyndareus"],
    children: ["Helen", "Clytemnestra", "Castor & Pollux"],
    who: "Approached by Jupiter as a swan, and the mother of the woman whose abduction starts the Trojan War. Like Danaë, she appears in the poem only as an image inside another woman's artwork.",
    books: [6],
    prominence: 3,
    acts: {
      "Arachne & Minerva": "One panel of the tapestry that makes the divine record legible as a pattern rather than a series of separate stories."
    }
  },
  {
    name: "Niobe",
    kind: "mortal",
    greek: "Nióbē (Νιόβη)",
    roman: "Niobe",
    ovid: "the queen who counts her children out loud, and at the last “weeps still, in marble, on a mountain”",
    order: "Queen of Thebes",
    domain: "Thebes; maternal pride",
    house: "The house of Tantalus",
    father: "Tantalus",
    siblings: ["Pelops"],
    consorts: ["Amphion"],
    children: ["The Niobids — seven sons and seven daughters"],
    who: "The poem's fullest study of a punishment that goes past its own point. Niobe boasts, loses fourteen children in sequence, is finally reduced to stone, and the stone keeps crying — grief outlasting both the body and the offence.",
    books: [6],
    prominence: 1,
    acts: {
      "Niobe": "Interrupts a public sacrifice to Latona to ask why a goddess with two children outranks a queen with fourteen; loses the sons on the plain and the daughters at the biers, begs for the last one and is refused, and stiffens where she stands — tongue, blood, eyes, and neck all going hard together. A whirlwind carries the statue back to her native mountain, where the marble still runs."
    }
  },
  {
    name: "Amphion",
    kind: "mortal",
    greek: "Amphíōn (Ἀμφίων)",
    roman: "Amphion",
    ovid: "the king “who built the walls of Thebes with his lyre”",
    order: "King of Thebes",
    domain: "Thebes; music that moves stone",
    house: "The house of Tantalus",
    father: "Jupiter",
    consorts: ["Niobe"],
    children: ["The Niobids"],
    who: "The musician-king whose playing raised Thebes' walls, married to the woman whose boast brings the city its second catastrophe. He kills himself the moment the sons are dead.",
    books: [6],
    prominence: 3,
    acts: {
      "Niobe": "Named as the husband whose lyre made the city, and who drives a blade into his own chest when the news reaches him."
    }
  },
  {
    name: "The Niobids",
    aliases: ["Niobe's children"],
    kind: "collective",
    greek: "Niobídai (Νιοβίδαι)",
    roman: "Niobidae",
    ovid: "seven sons on the plain and seven daughters at the biers",
    order: "Children of Niobe",
    domain: "Thebes",
    house: "The house of Tantalus",
    father: "Amphion",
    mother: "Niobe",
    who: "Fourteen children killed one by one, at length, by two archers who are never in danger. Ovid's catalogue is deliberately exhausting — the point is that the reader should stop being able to bear it before the gods do.",
    books: [6],
    prominence: 2,
    acts: {
      "Niobe": "The sons are shot at exercise on the plain, the last of them pleading; the daughters are shot in mourning dress beside the corpses, and the youngest dies in her mother's arms after Niobe has begged for her."
    }
  },
  {
    name: "Marsyas",
    kind: "creature",
    greek: "Marsýas (Μαρσύας)",
    roman: "Marsyas",
    ovid: "the satyr who cries “why are you tearing me out of myself?”",
    order: "Satyr",
    domain: "Phrygia; the reed pipes",
    house: "The primordial succession",
    who: "The satyr who challenged Apollo's lyre with Minerva's discarded flute and was flayed for losing. Ovid narrates the skinning in the present tense, organ by organ, and then converts the mourners' tears into the clearest river in Phrygia.",
    books: [6],
    prominence: 2,
    acts: {
      "Marsyas": "Loses the contest and the skin; the countryside gods, his brother satyrs, the nymphs, and every shepherd of the region weep until the ground can hold no more, and the river that takes his name runs out of the earth."
    }
  },
  {
    name: "Pelops",
    kind: "hero",
    greek: "Pélops (Πέλοψ)",
    roman: "Pelops",
    ovid: "the brother who bares his left shoulder “and it was ivory”",
    order: "Prince of Lydia, king of Pisa",
    domain: "The Peloponnese, which takes his name",
    house: "The house of Tantalus",
    father: "Tantalus",
    siblings: ["Niobe"],
    children: ["Atreus", "Thyestes — and so the Atreid line"],
    who: "Niobe's brother, served to the gods as a meal by his own father and reassembled afterwards with an ivory prosthesis. The Peloponnese is named for him, and the Atreid house descends from him to Agamemnon.",
    books: [6],
    prominence: 2,
    acts: {
      "Pelops": "Mourns his sister when all Thebes will not, and in doing so shows the shoulder that proves both his father's crime and the gods' repair."
    }
  },
  {
    name: "Tantalus",
    kind: "mortal",
    greek: "Tántalos (Τάνταλος)",
    roman: "Tantalus",
    ovid: "the ancestor who “once dined with the gods” and pays for it forever",
    order: "King of Lydia",
    domain: "Sipylus; the archetypal punishment",
    house: "The house of Tantalus",
    father: "Jupiter",
    children: ["Pelops", "Niobe"],
    who: "The founder of the poem's most cursed dynasty, who tested the gods' omniscience by serving them his son. Ovid uses him mainly as an explanation: Niobe's arrogance is inherited, and so is Pelops' shoulder.",
    books: [4, 6],
    prominence: 3,
    acts: {
      "Pelops": "Cuts up his son and serves him at a divine banquet; the gods restore the boy, all but the shoulder Ceres had already eaten, which is replaced in ivory."
    }
  },
  {
    name: "Tereus",
    kind: "mortal",
    greek: "Tēreús (Τηρεύς)",
    roman: "Tereus",
    ovid: "the Thracian king “whom the gods of marriage did not attend,” and at last the hoopoe with a crest like a helmet",
    order: "King of Thrace",
    domain: "Thrace; force and the destruction of speech",
    house: "The Athenian kings",
    father: "Mars",
    consorts: ["Procne", "Philomela (by force)"],
    children: ["Itys"],
    who: "The poem's most complete villain. His crime is doubled — the rape and then the tongue — because Ovid is interested less in the violence than in the attempt to make it unreportable, and in the fact that it fails.",
    books: [6],
    prominence: 1,
    acts: {
      "Tereus, Procne & Philomela": "Comes to Athens as an ally, offers to fetch his wife's sister, and burns for her before the ship sails; rapes her in a locked hut in the woods, cuts out her tongue when she promises to tell everyone, and reports her dead. He eats his own son at a private feast, asks where the boy is, and is answered by Philomela throwing the head at him."
    }
  },
  {
    name: "Procne",
    kind: "mortal",
    greek: "Próknē (Πρόκνη)",
    roman: "Procne",
    ovid: "the wife who reads a tapestry and says nothing at all",
    order: "Princess of Athens, queen of Thrace",
    domain: "Athens and Thrace",
    house: "The Athenian kings",
    father: "Pandion",
    siblings: ["Philomela"],
    consorts: ["Tereus"],
    children: ["Itys"],
    who: "The sister whose silence after reading the woven message is more frightening than any speech in the poem. Ovid gives her the single most chilling line of the episode when Itys says he loves her: she looks at him and says, “How like your father you are.”",
    books: [6],
    prominence: 1,
    acts: {
      "Tereus, Procne & Philomela": "Reads the cloth, uses the Bacchic festival as cover to break into the hut and carry her sister out, and — deciding that no revenge is large enough — kills her own son, cooks him, and serves him."
    }
  },
  {
    name: "Philomela",
    kind: "mortal",
    greek: "Philomḗla (Φιλομήλα)",
    roman: "Philomela",
    ovid: "the sister who weaves “purple marks on a white ground,” and afterwards the nightingale",
    order: "Princess of Athens",
    domain: "Athens and Thrace; the survival of testimony",
    house: "The Athenian kings",
    father: "Pandion",
    siblings: ["Procne"],
    who: "The poem's supreme statement that speech is not the only medium of truth. Deprived of her tongue, she moves the message into a loom — and the poem, which is obsessed with what survives a change of form, treats this as its own manifesto.",
    books: [6],
    prominence: 1,
    acts: {
      "Tereus, Procne & Philomela": "Threatens to publish the crime to the woods and the rocks, loses her tongue for it, spends a year locked up, weaves the story into a web, and has it carried out by a servant who cannot read it. At the feast she throws Itys' head into his father's face, unable to speak her triumph."
    }
  },
  {
    name: "Itys",
    kind: "mortal",
    greek: "Ítys (Ἴτυς)",
    roman: "Itys",
    ovid: "the five-year-old who says “mother” at the worst possible moment",
    order: "Prince of Thrace",
    domain: "Thrace",
    house: "The Athenian kings",
    father: "Tereus",
    mother: "Procne",
    who: "The child killed to punish his father. Ovid makes him actively affectionate in his final scene — running to his mother, putting his arms round her neck — precisely so that the reader cannot get through it comfortably.",
    books: [6],
    prominence: 2,
    acts: {
      "Tereus, Procne & Philomela": "Comes in while his mother is deciding, and by resembling his father settles the question; he is killed with a sword, dismembered by both sisters, and served hot."
    }
  },
  {
    name: "Pandion",
    kind: "mortal",
    greek: "Pandíōn (Πανδίων)",
    roman: "Pandion",
    ovid: "the old king who asks his son-in-law to “treat her as a father would”",
    order: "King of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    children: ["Procne", "Philomela", "Erechtheus"],
    who: "The father who gives one daughter away in gratitude for military help, and hands the second over on a request he has no reason to refuse. His grief kills him before he learns what happened.",
    books: [6],
    prominence: 3,
    acts: {
      "Tereus, Procne & Philomela": "Yields to Philomela's own pleading to be allowed to visit her sister, weeps as the ship leaves, and dies of sorrow inside a year."
    }
  },
  {
    name: "Erechtheus",
    kind: "mortal",
    greek: "Erekhtheús (Ἐρεχθεύς)",
    roman: "Erechtheus",
    ovid: "the Athenian king “whose justice and arms were both in question”",
    order: "King of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    father: "Pandion",
    children: ["Orithyia", "Procris", "Chthonia"],
    who: "Pandion's successor, and the father of both Orithyia and Procris — which places him at the head of two of Ovid's darkest marriage stories.",
    books: [6, 7],
    prominence: 3,
    acts: {
      "Boreas & Orithyia": "Refuses the north wind's suit for years, on the grounds of the Thracian alliance that had just destroyed his sisters — a caution that turns out to be entirely justified and entirely ineffective."
    }
  },
  {
    name: "Orithyia",
    kind: "mortal",
    greek: "Ōreíthyia (Ὠρείθυια)",
    roman: "Orithyia",
    ovid: "the princess carried off “while Boreas' wings were still shaking the dust from the fields”",
    order: "Princess of Athens",
    domain: "Athens, then Thrace",
    house: "The Athenian kings",
    father: "Erechtheus",
    consorts: ["Boreas"],
    children: ["Calais", "Zetes"],
    who: "Abducted by the north wind after her father's long refusal, and mother of the two winged Argonauts. Her story is the hinge that carries the poem from Athens into the Argonautic material of Book VII.",
    books: [6],
    prominence: 3,
    acts: {
      "Boreas & Orithyia": "Seized without warning while the wind sweeps the plain, and carried to the Ciconian city where she becomes a queen of the cold."
    }
  },
  {
    name: "Calais",
    kind: "hero",
    greek: "Kálais (Κάλαϊς)",
    roman: "Calais",
    ovid: "one of the twins whose wings arrived with their first beard",
    order: "Winged hero",
    domain: "Flight; the Argo",
    house: "The Athenian kings",
    father: "Boreas",
    mother: "Orithyia",
    siblings: ["Zetes"],
    who: "One of the Boreads. Ovid notes the strange detail that the brothers were born wingless and grew feathers only when their cheeks did — a puberty of the whole body.",
    books: [6, 7],
    prominence: 3,
    acts: {
      "Boreas & Orithyia": "Born with his twin from the abduction, and sails with the Argonauts — the link that carries the narrative into Colchis."
    }
  },
  {
    name: "Zetes",
    kind: "hero",
    greek: "Zḗtēs (Ζήτης)",
    roman: "Zetes",
    ovid: "the second Boread, feathered at the same hour as his brother",
    order: "Winged hero",
    domain: "Flight; the Argo",
    house: "The Athenian kings",
    father: "Boreas",
    mother: "Orithyia",
    siblings: ["Calais"],
    who: "Calais' twin, and with him one of the two Argonauts whose ancestry the poem has just spent an episode establishing — Ovid's way of making the Argo's crew feel like a consequence rather than a list.",
    books: [6, 7],
    prominence: 3,
    acts: {
      "Boreas & Orithyia": "Joins the expedition to Colchis with his brother, closing Book VI on the ship that opens Book VII."
    }
  }
];
