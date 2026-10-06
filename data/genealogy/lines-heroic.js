/*
 * The heroic generation, Books VII–XI: Colchis and the Argo, the Cretan
 * house, the Aeacids of Aegina, Calydon, the labours and death of Hercules,
 * Orpheus' Cyprian songs, and the Trojan prelude at Trachis.
 */

export const HEROIC_LINES = [
  /* ----------------------------------------------------- Colchis and the Argo */
  {
    name: "Jason",
    aliases: ["Aesonides"],
    kind: "hero",
    greek: "Iásōn (Ἰάσων)",
    roman: "Iason",
    ovid: "“Aesonides” — the son of Aeson, named by his father even when he is being unfaithful to everyone",
    order: "Prince of Iolcus",
    domain: "Thessaly and Colchis; the Golden Fleece",
    house: "The renewed human race",
    father: "Aeson",
    consorts: ["Medea", "Creusa"],
    children: ["Medea's two sons"],
    who: "The leader of the Argonauts, and in Ovid a curiously thin figure: he asks, promises, and profits. The poem gives Medea the psychology and Jason the results, which is itself a judgement.",
    books: [7],
    prominence: 1,
    acts: {
      "Jason & Medea": "Asks Aeetes for the Fleece, accepts the impossible terms, and then swears by Hecate's grove and by his host's own father the Sun that he will marry the girl who can save him.",
      "The dragon & Golden Fleece": "Yokes the fire-breathing bulls, sows the teeth, sets the earthborn warriors against each other, drugs the sleepless serpent with Medea's herbs, and sails home with prize and wife.",
      "Aeson rejuvenated": "Asks Medea to take years off his own life and give them to his father — the one generous thing he does in the poem, and the request that authorises everything that follows.",
      "Pelias": "Benefits from a murder he does not commit and is not shown objecting to.",
      "Medea's flight": "Takes a new bride at Corinth, and so occasions the deaths of Creusa, Creon, and his own two sons."
    }
  },
  {
    name: "Medea",
    kind: "sorceress",
    greek: "Mḗdeia (Μήδεια)",
    roman: "Medea",
    ovid: "the Colchian who says “I see the better course and approve it; I follow the worse”",
    order: "Princess of Colchis, priestess of Hecate",
    domain: "Herbs, incantation, the dragon-chariot",
    house: "The house of the Sun",
    father: "Aeetes",
    mother: "Idyia",
    siblings: ["Chalciope", "Absyrtus"],
    consorts: ["Jason", "Aegeus"],
    children: ["Two sons at Corinth", "Medus (by Aegeus)"],
    who: "Granddaughter of the Sun, and the poem's most powerful mortal. Ovid gives her the longest interior monologue in the Metamorphoses and then, in a deliberately brutal contraction, disposes of the murders in a handful of lines — as if once the mind is understood, the acts need no elaboration.",
    books: [7],
    prominence: 1,
    acts: {
      "Jason & Medea": "Argues with herself in a hundred and thirty lines — duty against desire, father against stranger, the safe course against the one she takes — and arrives at the grove of Hecate having already decided.",
      "The dragon & Golden Fleece": "Supplies the drug that makes Jason fireproof, and sings the sleepless dragon to sleep with juice of a herb and three repetitions of a formula.",
      "Aeson rejuvenated": "Performs the poem's great ritual set-piece: nine days in the dragon-car gathering herbs across Thessaly, two altars to Hecate and Youth, black-fleeced sheep, and a bronze cauldron in which an old man's blood is exchanged for something that makes him forty years younger.",
      "Pelias": "Demonstrates the method on an old ram, which comes out of the pot a lamb, and lets the king's daughters do the cutting themselves — the one killing she arranges without touching.",
      "Medea's flight": "Kills Creusa and Creon with a poisoned gift, kills her own children, and escapes in the serpent-drawn chariot over a catalogue of Greek landscapes that Ovid narrates like a flight-path.",
      "Aegeus & Theseus": "Marries the old Athenian king, recognises his unacknowledged son at the table, and has almost got the aconite to his lips when Aegeus sees the sword and knocks the cup away."
    }
  },
  {
    name: "Aeetes",
    kind: "mortal",
    greek: "Aiḗtēs (Αἰήτης)",
    roman: "Aeetes",
    ovid: "the Colchian king who sets terms he expects to be fatal",
    order: "King of Colchis",
    domain: "Colchis; the guarded Fleece",
    house: "The house of the Sun",
    father: "Sol / Phoebus",
    siblings: ["Circe", "Pasiphaë"],
    children: ["Medea", "Chalciope", "Absyrtus"],
    who: "Son of the Sun, brother of Circe and Pasiphaë, and father of Medea — which puts the poem's three most formidable magical women in one immediate family.",
    books: [7],
    prominence: 2,
    acts: {
      "Jason & Medea": "Names his price: the brazen-footed bulls, the sown teeth, the sleepless dragon. He is not refusing so much as setting a fee no one has ever paid.",
      "The dragon & Golden Fleece": "Watches the trials completed one after another by a man he has already written off, and loses the Fleece, the dragon, and his daughter in an afternoon."
    }
  },
  {
    name: "Chalciope",
    kind: "mortal",
    greek: "Khalkiópē (Χαλκιόπη)",
    roman: "Chalciope",
    ovid: "the sister named in Medea's deliberation as one of the ties she is about to cut",
    order: "Princess of Colchis",
    domain: "Colchis",
    house: "The house of the Sun",
    father: "Aeetes",
    siblings: ["Medea", "Absyrtus"],
    who: "Medea's elder sister. She has no scene of her own in Ovid; she exists in the monologue, as part of the family Medea decides she can live without.",
    books: [7],
    prominence: 3,
    acts: {
      "Jason & Medea": "Counted among father, sister, brother, and homeland in the balance Medea draws up — and outweighed."
    }
  },
  {
    name: "Absyrtus",
    kind: "mortal",
    greek: "Ápsyrtos (Ἄψυρτος)",
    roman: "Absyrtus",
    ovid: "the brother whose death is passed over in a single clause",
    order: "Prince of Colchis",
    domain: "Colchis",
    house: "The house of the Sun",
    father: "Aeetes",
    siblings: ["Medea", "Chalciope"],
    who: "Medea's young brother, killed and scattered to slow her father's pursuit. Ovid's silence about it is famously loud: the most notorious act in her story gets almost no words.",
    books: [7],
    prominence: 3,
    acts: {
      "Medea's flight": "Alluded to as the first of the killings on Medea's record — the crime Ovid declines to narrate, leaving the reader to supply what the poem will not."
    }
  },
  {
    name: "Aeson",
    kind: "mortal",
    greek: "Aísōn (Αἴσων)",
    roman: "Aeson",
    ovid: "the old man who wakes to find “forty years gone from his body”",
    order: "Deposed king of Iolcus",
    domain: "Thessaly",
    house: "The renewed human race",
    children: ["Jason"],
    who: "Jason's father, too old to attend his son's wedding, and the beneficiary of the poem's one successful rejuvenation. His restored body is the proof that makes the fraud on Pelias possible.",
    books: [7],
    prominence: 2,
    acts: {
      "Aeson rejuvenated": "Drained of old blood through an opened throat, filled with the cauldron's brew, and stands up with dark hair, filled-out limbs, and no memory of the last four decades — asking how it can be that he was this man once before."
    }
  },
  {
    name: "Pelias",
    kind: "mortal",
    greek: "Pelías (Πελίας)",
    roman: "Pelias",
    ovid: "the usurper who is killed by his daughters' obedience",
    order: "King of Iolcus",
    domain: "Thessaly",
    house: "The renewed human race",
    children: ["The daughters of Pelias"],
    who: "The king who sent Jason after the Fleece expecting not to see him again. His death is Ovid's most efficient irony: he is destroyed by love administered according to instructions.",
    books: [7],
    prominence: 2,
    acts: {
      "Pelias": "Asleep and guarded while Medea's chant holds the household; his daughters, weeping and looking away, strike at a father they are trying to save, and he rises far enough on his elbows to ask what they are doing before Medea cuts his throat."
    }
  },
  {
    name: "The daughters of Pelias",
    aliases: ["the Peliades"],
    kind: "collective",
    greek: "Peliádes (Πελιάδες)",
    roman: "Peliades",
    ovid: "the sisters who strike “not knowing where the blows fell, because they would not look”",
    order: "Princesses of Iolcus",
    domain: "Thessaly",
    house: "The renewed human race",
    father: "Pelias",
    who: "The poem's purest victims of a demonstration. They are shown a miracle, given a method, and told that hesitation is the only thing that can go wrong.",
    books: [7],
    prominence: 2,
    acts: {
      "Pelias": "Watch an old ram come out of the cauldron as a lamb, compete to prove their devotion, and cut their father open with their faces turned away."
    }
  },
  {
    name: "Creon",
    kind: "mortal",
    greek: "Kréōn (Κρέων)",
    roman: "Creon",
    ovid: "the Corinthian king who is burned with his daughter",
    order: "King of Corinth",
    domain: "Corinth",
    house: "The renewed human race",
    children: ["Creusa"],
    who: "The father of Jason's second bride, and collateral in Medea's revenge. Ovid gives him no words at all.",
    books: [7],
    prominence: 3,
    acts: {
      "Medea's flight": "Dies in the fire that takes his daughter and his palace when Medea's poisoned gift is put on."
    }
  },
  {
    name: "Creusa",
    aliases: ["Glauce"],
    kind: "mortal",
    greek: "Kreoûsa (Κρέουσα) / Glaúkē",
    roman: "Creusa",
    ovid: "“the new bride,” unnamed in Ovid's compressed account",
    order: "Princess of Corinth",
    domain: "Corinth",
    house: "The renewed human race",
    father: "Creon",
    consorts: ["Jason"],
    who: "Jason's second wife, destroyed by a wedding gift. Ovid's version keeps her almost anonymous — the poem is not interested in her, only in what her existence does to Medea.",
    books: [7],
    prominence: 3,
    acts: {
      "Medea's flight": "Burns with the palace when the poisoned crown and robe take hold."
    }
  },
  {
    name: "Medea's children",
    kind: "collective",
    greek: "— (unnamed in Ovid)",
    roman: "— (unnamed in Ovid)",
    ovid: "“her own sons,” killed in the same clause as the palace fire",
    order: "Children of Jason and Medea",
    domain: "Corinth",
    house: "The house of the Sun",
    father: "Jason",
    mother: "Medea",
    who: "The two boys Medea kills. Euripides gives them a scene of enormous length; Ovid gives them half a line, and the compression is itself the comment.",
    books: [7],
    prominence: 3,
    acts: {
      "Medea's flight": "Killed by their mother in the same sentence that reports the burning of Corinth — a deliberate refusal to dramatise what the whole tradition has already dramatised."
    }
  },
  {
    name: "Aegeus",
    kind: "mortal",
    greek: "Aigeús (Αἰγεύς)",
    roman: "Aegeus",
    ovid: "the father who recognises a sword just in time",
    order: "King of Athens",
    domain: "Athens",
    house: "The Athenian kings",
    consorts: ["Aethra", "Medea"],
    children: ["Theseus"],
    who: "Theseus' father, who shelters Medea and nearly poisons his own unrecognised son at his own table. His single act in the poem is a piece of last-instant recognition.",
    books: [7],
    prominence: 2,
    acts: {
      "Aegeus & Theseus": "Hands his guest-son the cup of aconite Medea prepared, sees the ivory hilt on the young man's sword, and strikes the poison out of his hand — after which Athens celebrates as though it had been given a second founding."
    }
  },
  {
    name: "Aethra",
    kind: "mortal",
    greek: "Aíthra (Αἴθρα)",
    roman: "Aethra",
    ovid: "the mother at Troezen who kept the sword under a stone",
    order: "Princess of Troezen",
    domain: "Troezen",
    house: "The Athenian kings",
    consorts: ["Aegeus", "Neptune"],
    children: ["Theseus"],
    who: "Theseus' mother, who raised him away from Athens and sent him with the tokens that would identify him. She is present in the poem only as the reason the recognition works.",
    books: [7],
    prominence: 3,
    acts: {
      "Aegeus & Theseus": "Named as the source of the sword whose hilt saves her son's life at his father's table."
    }
  },

  /* ------------------------------------------------------ Aegina and the Aeacids */
  {
    name: "Aeacus",
    kind: "mortal",
    greek: "Aiakós (Αἰακός)",
    roman: "Aeacus",
    ovid: "the king who repopulates an island from an ant column, and calls the new people Myrmidons",
    order: "King of Aegina",
    domain: "Aegina; just kingship",
    house: "The Aeacids",
    father: "Jupiter",
    mother: "Aegina",
    consorts: ["Endeis", "Psamathe"],
    children: ["Peleus", "Telamon", "Phocus"],
    who: "Son of Jupiter and the nymph whose name the island bears, grandfather of Achilles and Ajax, and — in a tradition Ovid gestures at — one of the judges of the dead. His narration of the plague is the poem's most clinical passage.",
    books: [7],
    prominence: 1,
    acts: {
      "Aeacus & the Myrmidons": "Describes the plague that emptied his kingdom in unsparing medical detail, then tells how he prayed at Jupiter's oak, dreamed of ants pouring down its trunk, and woke to find the dream standing in his courtyard as an army."
    }
  },
  {
    name: "Telamon",
    kind: "hero",
    greek: "Telamṓn (Τελαμών)",
    roman: "Telamon",
    ovid: "the Aeacid who sails on the Argo and stands at the Calydonian hunt",
    order: "Prince of Aegina, king of Salamis",
    domain: "Salamis; the heroic generation before Troy",
    house: "The Aeacids",
    father: "Aeacus",
    mother: "Endeis",
    siblings: ["Peleus", "Phocus"],
    children: ["Ajax"],
    who: "Peleus' brother, Ajax's father, and one of Hercules' companions at the first sack of Troy — which is why his son's claim to Achilles' armour comes with a family history.",
    books: [7, 8, 11, 13],
    prominence: 2,
    acts: {
      "Calydonian Boar Hunt": "Joins the muster of heroes and trips over a root at the critical moment — Ovid keeps the comic detail.",
      "Laomedon & Hesione": "Receives Hesione as his prize when Hercules takes Troy the first time, a grant that later underwrites Ajax's standing among the Greeks."
    }
  },
  {
    name: "Phocus",
    kind: "hero",
    greek: "Phôkos (Φῶκος)",
    roman: "Phocus",
    ovid: "the half-brother “killed by his brothers' hands,” whose mother sends the wolf",
    order: "Prince of Aegina",
    domain: "Aegina",
    house: "The Aeacids",
    father: "Aeacus",
    mother: "Psamathe",
    siblings: ["Peleus", "Telamon"],
    who: "The half-brother Peleus and Telamon kill, and the reason Peleus spends the poem in exile. His death is never narrated directly; it is the crime that all of Book XI is quietly about.",
    books: [7, 11],
    prominence: 3,
    acts: {
      "Peleus & Psamathe": "The murdered son whose mother sends the wolf against the herds of Trachis in payment."
    }
  },
  {
    name: "Cephalus",
    kind: "hero",
    greek: "Képhalos (Κέφαλος)",
    roman: "Cephalus",
    ovid: "the husband who tests his wife and “wins the case he most wanted to lose”",
    order: "Prince of Athens, envoy to Aegina",
    domain: "Athens; hunting; the fatal javelin",
    house: "The Athenian kings",
    consorts: ["Procris", "Aurora"],
    who: "The poem's most painful study of suspicion. Everything he does to secure his marriage destroys it, and the instrument of the final disaster is the gift his wife gave him to make peace.",
    books: [7],
    prominence: 1,
    acts: {
      "Cephalus & Procris": "Carried off by Aurora, released with a poisoned doubt, returns disguised to test Procris' fidelity and breaks it by persistence; reconciles, receives the never-missing javelin and the hound Laelaps, and then — resting from the hunt and calling on the breeze he names Aura — is overheard by his hidden wife and kills her with the spear she gave him."
    }
  },
  {
    name: "Procris",
    kind: "mortal",
    greek: "Prókris (Πρόκρις)",
    roman: "Procris",
    ovid: "the wife whose last request is that no “Aura” should ever take her place",
    order: "Princess of Athens",
    domain: "Athens; the hunt",
    house: "The Athenian kings",
    father: "Erechtheus",
    siblings: ["Orithyia"],
    consorts: ["Cephalus"],
    who: "Tested unfairly, shamed into flight, reconciled with gifts, and finally killed by a misheard word. Ovid gives her a dying line that mistakes the whole situation and is, for that reason, unbearable.",
    books: [7],
    prominence: 1,
    acts: {
      "Cephalus & Procris": "Yields at last to a disguised stranger's persistence, flees to Diana's company, comes back with the javelin and the hound, and — hearing that her husband calls to some Aura in the woods — hides in the brush to catch him, moves, and takes the spear in her chest. She dies asking him not to marry the breeze."
    }
  },
  {
    name: "Laelaps",
    kind: "creature",
    greek: "Laílaps (Λαῖλαψ)",
    roman: "Laelaps",
    ovid: "the hound fixed in marble mid-stride, still leaning after a fox that will never be caught",
    order: "Divine hound",
    domain: "Pursuit that cannot fail",
    house: "The primordial succession",
    who: "The dog destined to catch whatever it chases, set against the Teumessian fox destined never to be caught. Ovid resolves the paradox the only way it can be resolved: a god turns them both to stone in mid-course.",
    books: [7],
    prominence: 3,
    acts: {
      "Cephalus & Procris": "Slipped from the leash after the uncatchable vixen; the two of them circle the plain until some god freezes both, one still lunging and one still swerving."
    }
  },

  /* -------------------------------------------------------------- Crete and Megara */
  {
    name: "Minos",
    kind: "mortal",
    greek: "Mínōs (Μίνως)",
    roman: "Minos",
    ovid: "the Cretan king “great in war and greater in his fleet,” who grows old ashamed of his own house",
    order: "King of Crete",
    domain: "Crete; sea power; law",
    house: "The Cretan house",
    father: "Jupiter",
    mother: "Europa",
    consorts: ["Pasiphaë"],
    children: ["Ariadne", "Phaedra", "Androgeos", "Deucalion of Crete"],
    who: "Jupiter's son, the Mediterranean's great naval power, and the man whose household produces the Minotaur. Ovid's Minos is defined by what he cannot stop being associated with — a monster he had nothing to do with fathering.",
    books: [7, 8, 9],
    prominence: 1,
    acts: {
      "Aegeus & Theseus": "Musters allies across the islands to avenge his son Androgeos, and is refused at Aegina by Aeacus.",
      "Scylla & Minos": "Besieges Megara for months; when a princess hands him the city by treachery, he refuses to touch her, declares her a disgrace to the age, and sails.",
      "The Minotaur & Labyrinth": "Hides the family shame in Daedalus' Labyrinth and feeds it Athenian tribute every ninth year.",
      "Daedalus & Icarus": "Holds Daedalus on the island as an asset that cannot be allowed to leave — which is what forces the craftsman into the air."
    }
  },
  {
    name: "Pasiphaë",
    kind: "mortal",
    greek: "Pasipháē (Πασιφάη)",
    roman: "Pasiphae",
    ovid: "the queen “who took a bull instead of a man,” named only in glancing shame",
    order: "Queen of Crete",
    domain: "Crete",
    house: "The house of the Sun",
    father: "Sol / Phoebus",
    siblings: ["Aeetes", "Circe"],
    consorts: ["Minos", "the Cretan bull"],
    children: ["The Minotaur", "Ariadne", "Phaedra", "Androgeos"],
    who: "Daughter of the Sun, sister of Circe and Aeetes, and mother of the Minotaur. Ovid handles her at speed, and the speed is telling: this is the one Cretan fact the poem is unwilling to linger on.",
    books: [8, 9],
    prominence: 2,
    acts: {
      "The Minotaur & Labyrinth": "Named as the origin of the hybrid — the queen whose adultery with a bull is the “disgrace of the family” Minos builds a maze to hide."
    }
  },
  {
    name: "The Minotaur",
    kind: "creature",
    greek: "Minṓtauros (Μινώταυρος)",
    roman: "Minotaurus",
    ovid: "“the twin-formed shame,” half bull and half man, fed twice on Athenian blood",
    order: "Hybrid",
    domain: "The Labyrinth at Cnossos",
    house: "The Cretan house",
    father: "The Cretan bull",
    mother: "Pasiphaë",
    who: "The creature at the centre of the maze, whose existence turns architecture into concealment. Ovid spends more words on the building than on the monster, which is the point: the Labyrinth is the real subject.",
    books: [8],
    prominence: 2,
    acts: {
      "The Minotaur & Labyrinth": "Confined by a structure whose designer confused the eye by turning a road back on itself, and killed by Theseus, who finds the way out again by retracing a thread."
    }
  },
  {
    name: "Daedalus",
    kind: "mortal",
    greek: "Daídalos (Δαίδαλος)",
    roman: "Daedalus",
    ovid: "the craftsman who “turned his mind to arts unknown, and altered nature”",
    order: "Athenian artificer",
    domain: "Building, mechanism, flight, the Labyrinth",
    house: "The Athenian kings",
    consorts: ["Naucrate"],
    children: ["Icarus"],
    siblings: ["Perdix's mother (his sister)"],
    who: "The poem's rival maker — an artist whose works are functional, dangerous, and morally unreadable. He builds a prison, escapes it, kills a more gifted apprentice, and loses his own son to the invention that got him out.",
    books: [8],
    prominence: 1,
    acts: {
      "The Minotaur & Labyrinth": "Builds a structure so confusing that he can barely find the exit himself, and later hands Ariadne the thread that unbuilds it.",
      "Daedalus & Icarus": "Lays feathers out in ascending order like a shepherd's pipe, binds them with thread and wax, and briefs his son on the middle course — then watches the wings come apart over the sea and curses his own art.",
      "Perdix": "Threw his sister's son off Minerva's citadel out of jealousy at the boy's invention of the saw; the partridge that watches him bury Icarus is that nephew, and it is the only creature that claps."
    }
  },
  {
    name: "Icarus",
    kind: "mortal",
    greek: "Íkaros (Ἴκαρος)",
    roman: "Icarus",
    ovid: "the boy who “began to enjoy his daring flight” — and the sea that took his name",
    order: "Son of Daedalus",
    domain: "Flight; the middle course refused",
    house: "The Athenian kings",
    father: "Daedalus",
    mother: "Naucrate",
    who: "The child playing with feathers and wax while his father works, and the poem's most famous casualty of exhilaration. Ovid keeps the tenderness in the technical detail: the boy's hands are in the way the whole time the wings are being made.",
    books: [8],
    prominence: 1,
    acts: {
      "Daedalus & Icarus": "Grabs at the drifting feathers and softens the wax with his thumb while his father works; airborne, he leaves the guided path for the open sky, loses the wings to the sun, and calls his father's name into water that closed over it.",
      "Perdix": "Buried by his father while a partridge — the cousin Daedalus murdered — chatters with delight from a nearby oak."
    }
  },
  {
    name: "Perdix / Talos",
    aliases: ["Perdix", "Talos", "the partridge"],
    kind: "mortal",
    greek: "Pérdix (Πέρδιξ) / Tálōs",
    roman: "Perdix",
    ovid: "“the bird that does not build its nest in trees, nor fly high, and remembers why”",
    order: "Athenian apprentice",
    domain: "Invention; the saw and the compass",
    house: "The Athenian kings",
    parentageNote: "Ovid names only the relationship — Daedalus' sister sent him her son to be taught.",
    who: "Daedalus' twelve-year-old nephew, who invented the saw from a fish's spine and the compasses from two iron arms — and was thrown off the Acropolis for it. Minerva caught him mid-fall and made him a bird that has never trusted height since.",
    books: [8],
    prominence: 2,
    acts: {
      "Perdix": "Invents, is envied, is pushed, and is saved into a body that keeps the fear: the partridge nests on the ground, flies low, and remembers the fall."
    }
  },
  {
    name: "Ariadne",
    kind: "mortal",
    greek: "Ariádnē (Ἀριάδνη)",
    roman: "Ariadne",
    ovid: "the princess left on Dia, whose crown Bacchus “set among the stars as a circle”",
    order: "Princess of Crete",
    domain: "Crete and Naxos; the thread, and the Corona Borealis",
    house: "The Cretan house",
    father: "Minos",
    mother: "Pasiphaë",
    siblings: ["Phaedra", "Androgeos"],
    consorts: ["Theseus", "Bacchus / Dionysus"],
    who: "The one who solves the maze, is abandoned for it, and is compensated with a constellation. Ovid handles the abandonment in a clause and the catasterism in a set-piece — a proportion that tells you where his sympathies are directed.",
    books: [8],
    prominence: 2,
    acts: {
      "The Minotaur & Labyrinth": "Gives Theseus the thread, sails with him, is put ashore on Dia and left there; Bacchus finds her, takes her, and throws her diadem into the sky, where the jewels stop as fixed fires."
    }
  },
  {
    name: "Theseus",
    kind: "hero",
    greek: "Thēseús (Θησεύς)",
    roman: "Theseus",
    ovid: "the Athenian “whose coming Athens celebrated as though a god had arrived”",
    order: "Prince, then king of Athens",
    domain: "Athens; the Labyrinth; the Calydonian hunt",
    house: "The Athenian kings",
    father: "Aegeus",
    mother: "Aethra",
    consorts: ["Ariadne", "Phaedra", "Hippolyta"],
    children: ["Hippolytus"],
    who: "Ovid's Theseus is less a monster-killer than an audience: he spends most of Books VIII and XII listening to other people's stories at dinner. The poem uses him to hold its longest sequence of inset narration together.",
    books: [7, 8, 9, 12, 15],
    prominence: 1,
    acts: {
      "Aegeus & Theseus": "Arrives unrecognised in Athens and is nearly poisoned by his father's wife; the sword identifies him and the city holds a feast.",
      "The Minotaur & Labyrinth": "Kills the Minotaur, retraces the thread, and sails with Ariadne — whom he leaves behind.",
      "Calydonian Boar Hunt": "One of the muster, and the reason the survivors end up at Achelous' table afterwards.",
      "Achelous & Hercules": "Held up by the flooded river on his way home, and given hospitality — which produces the whole inset sequence of the book's end.",
      "Centauromachy": "Fights at Pirithous' wedding, kills the centaur who dragged the bride out by the hair, and is the reason Nestor tells the whole story.",
      "Egeria & Hippolytus": "The father whose curse, and whose credulity about Phaedra, kills his own son."
    }
  },
  {
    name: "Scylla",
    aliases: ["Scylla of Megara", "Scylla of the strait"],
    kind: "mortal",
    greek: "Skýlla (Σκύλλα)",
    roman: "Scylla",
    ovid: "two different women share this name in the poem, and Ovid lets the collision stand",
    order: "Princess of Megara — and, separately, a sea monster of the strait",
    domain: "Megara; and the rock opposite Charybdis",
    house: "The renewed human race",
    father: "Nisus",
    parentageNote: "The descent belongs to the Megarian Scylla. The Scylla of the strait in Books XIII–XIV is a different figure, and Ovid gives her no parents at all.",
    consorts: ["Glaucus (sought — the Sicilian Scylla)"],
    who: "Ovid uses the name twice. The Megarian Scylla betrays her city and father for love of Minos and becomes the ciris bird. The Sicilian Scylla is Galatea's confidante, poisoned by Circe into a ring of barking dogs at the waist, and finally the rock in the strait. The poem does not reconcile them, and the doubling is part of how it works.",
    books: [8, 13, 14],
    prominence: 1,
    acts: {
      "Scylla & Minos": "Watches the siege from the tower, falls for the enemy king, cuts the purple lock her father's life depends on, and carries it to a man who recoils from her. She swims after his fleet clinging to the stern until her father — now a sea eagle — drives her off, and she becomes the ciris.",
      "Galatea, Acis & Polyphemus": "Combs Galatea's hair on the beach and listens to the story of Acis and the Cyclops, still human and still safe.",
      "Glaucus, Scylla & Circe": "Bathes in the pool Circe has poisoned and finds a belt of barking dogs where her waist was; unable to escape her own lower body, she takes station in the strait and takes ships apart out of spite."
    }
  },
  {
    name: "Nisus",
    kind: "mortal",
    greek: "Nîsos (Νῖσος)",
    roman: "Nisus",
    ovid: "the king with “one purple hair among the white,” on which a city stands",
    order: "King of Megara",
    domain: "Megara; the talismanic lock",
    house: "The renewed human race",
    children: ["Scylla"],
    who: "The king whose life and city depend on a single coloured hair, and whose daughter cuts it. His afterlife as a sea eagle exists only so that he can keep attacking her.",
    books: [8],
    prominence: 3,
    acts: {
      "Scylla & Minos": "Loses hair, city, and life in one night, and comes back as the osprey that will not let the ciris settle on the water."
    }
  },

  /* -------------------------------------------------------------------- Calydon */
  {
    name: "Meleager",
    kind: "hero",
    greek: "Meléagros (Μελέαγρος)",
    roman: "Meleager",
    ovid: "the hunter whose life is “a log kept in a chest”",
    order: "Prince of Calydon",
    domain: "Calydon; the boar hunt",
    house: "The house of Calydon",
    father: "Oeneus",
    mother: "Althaea",
    consorts: ["Atalanta (admired)"],
    who: "The best of the Calydonian hunters, killed by his mother because he killed her brothers. Ovid's version turns almost entirely on the physics of the brand: as the wood burns, the man feels himself going out, and cannot name the cause.",
    books: [8],
    prominence: 1,
    acts: {
      "Calydonian Boar Hunt": "Kills the boar after a chaotic hunt in which most of the heroes miss, wound each other, or run — and gives the hide to Atalanta because she drew first blood.",
      "Meleager & Althaea": "Kills his mother's brothers when they take the trophy from Atalanta, and then burns from the inside as the brand catches; he calls out for his father, his brother, his sisters, and his mother, and dies without knowing which of them did it."
    }
  },
  {
    name: "Atalanta",
    kind: "hero",
    greek: "Atalántē (Ἀταλάντη)",
    roman: "Atalanta",
    ovid: "the huntress “whose face you would call a boy's on a girl, or a girl's on a boy”",
    order: "Huntress of Arcadia (or Boeotia)",
    domain: "The hunt; the footrace",
    house: "The renewed human race",
    parentageNote: "Called the daughter of Iasus in Arcadian sources and of Schoeneus in Boeotian ones; Ovid never settles which Atalanta he means.",
    consorts: ["Hippomenes"],
    who: "The one woman at the Calydonian hunt and the fastest runner in Greece. Ovid runs two Atalanta stories — the hunt and the race — without ever confirming whether they are the same woman, and quietly declines to settle it.",
    books: [8, 10],
    prominence: 1,
    acts: {
      "Calydonian Boar Hunt": "Draws first blood with an arrow behind the boar's ear, is awarded the spoils by a man half in love with her, and becomes the cause of the fight that kills him.",
      "Meleager & Althaea": "Receives the hide, has it snatched away by Meleager's uncles, and so triggers the killings that end the house.",
      "Atalanta & Hippomenes": "Warned by an oracle against marriage, she sets a footrace with death as the forfeit, finds herself wanting to lose, and is beaten by three golden apples and her own hesitation; punished with her husband for defiling Cybele's shrine, she becomes one of the goddess' lions."
    }
  },
  {
    name: "Oeneus",
    kind: "mortal",
    greek: "Oineús (Οἰνεύς)",
    roman: "Oeneus",
    ovid: "the king who forgot one altar in a good year",
    order: "King of Calydon",
    domain: "Calydon; the harvest offering",
    house: "The house of Calydon",
    consorts: ["Althaea"],
    children: ["Meleager", "Deianira", "Tydeus"],
    who: "The king whose oversight brings the boar. Ovid is careful to say the omission was not contempt but forgetfulness — which makes Diana's response the poem's clearest case of divine disproportion.",
    books: [8, 9],
    prominence: 3,
    acts: {
      "Calydonian Boar Hunt": "Offers first-fruits to every god but Diana, and finds his fields wrecked by a boar with a hide no spear will go through."
    }
  },
  {
    name: "Althaea",
    kind: "mortal",
    greek: "Altháia (Ἀλθαία)",
    roman: "Althaea",
    ovid: "the mother who “four times moved to put the brand on the fire, and four times drew back”",
    order: "Queen of Calydon",
    domain: "Calydon; the brand",
    house: "The house of Calydon",
    consorts: ["Oeneus"],
    children: ["Meleager", "Deianira"],
    who: "The poem's most divided figure. Her deliberation — sister against mother, brothers against son, four advances and four retreats at the hearth — is one of the great psychological passages in Latin poetry, and she kills herself immediately after winning the argument.",
    books: [8],
    prominence: 1,
    acts: {
      "Meleager & Althaea": "Carries the preserved brand to the fire in funeral procession for her brothers, argues both sides aloud, throws it in with her face turned away, and hangs herself when the news comes back."
    }
  },
  {
    name: "Plexippus",
    kind: "mortal",
    greek: "Pléxippos (Πλήξιππος)",
    roman: "Plexippus",
    ovid: "one of the two uncles who take a woman's trophy away",
    order: "Prince of Pleuron",
    domain: "Calydon",
    house: "The house of Calydon",
    siblings: ["Toxeus", "Althaea"],
    who: "Althaea's brother, killed by his nephew for taking the boar's hide from Atalanta. His death is what forces his sister to choose between two kinds of family.",
    books: [8],
    prominence: 3,
    acts: {
      "Meleager & Althaea": "Snatches the spoils and tells Atalanta to keep her hands off honours that belong to men; Meleager kills him where he stands."
    }
  },
  {
    name: "Toxeus",
    kind: "mortal",
    greek: "Toxeús (Τοξεύς)",
    roman: "Toxeus",
    ovid: "the second uncle, killed “while he was still hesitating”",
    order: "Prince of Pleuron",
    domain: "Calydon",
    house: "The house of Calydon",
    siblings: ["Plexippus", "Althaea"],
    who: "Plexippus' brother, killed in the same moment. Ovid gives him one line and a hesitation — enough to make him a person before he is a corpse.",
    books: [8],
    prominence: 3,
    acts: {
      "Meleager & Althaea": "Run through while still deciding whether to avenge his brother — the second death that decides Althaea's."
    }
  },
  {
    name: "Ancaeus",
    kind: "hero",
    greek: "Ankaîos (Ἀγκαῖος)",
    roman: "Ancaeus",
    ovid: "the hunter who announces what a man's weapons can do, and is opened by the boar mid-sentence",
    order: "Arcadian hunter",
    domain: "Arcadia; the Calydonian hunt",
    house: "The renewed human race",
    who: "The boaster of the hunt. Ovid times his death with comic precision — the axe is still raised when the tusks go in.",
    books: [8],
    prominence: 3,
    acts: {
      "Calydonian Boar Hunt": "Tells the company to stand back and learn the difference between a woman's arrows and a man's weapons, raises his double axe on tiptoe, and is gutted before it comes down."
    }
  },

  /* --------------------------------------------------- hospitality and hunger */
  {
    name: "Baucis",
    kind: "mortal",
    greek: "Baukís (Βαυκίς)",
    roman: "Baucis",
    ovid: "the old woman who chases the one goose round the yard and cannot catch it",
    order: "Phrygian peasant",
    domain: "Phrygia; hospitality",
    house: "The renewed human race",
    consorts: ["Philemon"],
    who: "Half of the poem's only happy ending. She and her husband have been poor together their whole lives, and their reward is a temple, a priesthood, and permission to die at the same moment.",
    books: [8],
    prominence: 1,
    acts: {
      "Baucis & Philemon": "Sets the wobbling table straight with a potsherd, rubs it with mint, serves everything the cottage has, and notices with alarm that the wine keeps refilling itself; at the end she becomes a linden while her husband becomes an oak, and each says goodbye while the bark is still rising."
    }
  },
  {
    name: "Philemon",
    kind: "mortal",
    greek: "Philḗmōn (Φιλήμων)",
    roman: "Philemon",
    ovid: "the old man whose only request is that neither should have to see the other's grave",
    order: "Phrygian peasant",
    domain: "Phrygia; hospitality",
    house: "The renewed human race",
    consorts: ["Baucis"],
    who: "Baucis' husband of a lifetime, who asks the gods for a priesthood and a shared death rather than wealth. Ovid, through Lelex, offers the story as proof — against a sceptic at Achelous' table — that the gods have power.",
    books: [8],
    prominence: 1,
    acts: {
      "Baucis & Philemon": "Climbs the hill with the gods to see his valley become a marsh and his cottage a marble temple, asks to serve it and to die in the same hour as his wife, and gets both — leafing over into an oak as she becomes a linden."
    }
  },
  {
    name: "Erysichthon",
    kind: "mortal",
    greek: "Erysíkhthōn (Ἐρυσίχθων)",
    roman: "Erysichthon",
    ovid: "the man “who despised the gods and burned no incense on their altars,” and at the end ate himself",
    order: "Thessalian nobleman",
    domain: "Thessaly; sacrilege and appetite",
    house: "The renewed human race",
    children: ["Mestra"],
    who: "The poem's counter-example to Baucis and Philemon, told in the same conversation: a man who cuts down a goddess' tree and is given an appetite that consumes his estate, his daughter, and finally his own limbs.",
    books: [8],
    prominence: 1,
    acts: {
      "Erysichthon & Mestra": "Takes an axe to Ceres' sacred oak, kills the servant who objects, and hears the dryad inside curse him as she dies. Famine enters him in his sleep; he eats through his fortune, sells his daughter repeatedly, and at last begins on his own body."
    }
  },
  {
    name: "Mestra",
    kind: "mortal",
    greek: "Mḗstra (Μήστρα)",
    roman: "Mestra",
    ovid: "the daughter “sold again and again,” who comes home each time in another shape",
    order: "Thessalian noblewoman",
    domain: "Shape-changing",
    house: "The renewed human race",
    father: "Erysichthon",
    consorts: ["Neptune"],
    who: "Given Neptune's gift of shape-shifting after he takes her, and then used by her father as a renewable asset. Her transformations are the only ones in the poem performed as a commercial cycle.",
    books: [8],
    prominence: 2,
    acts: {
      "Erysichthon & Mestra": "Prays on the shore to escape the buyer, becomes a fisherman, and denies to her own purchaser that she has seen any girl at all — then returns to her father to be sold again as mare, bird, cow, and deer."
    }
  },

  /* ------------------------------------------------------------------ Hercules */
  {
    name: "Hercules",
    aliases: ["Heracles", "Alcides", "Tirynthius"],
    kind: "hero",
    greek: "Hēraklês (Ἡρακλῆς)",
    roman: "Hercules",
    ovid: "“Alcides,” the Tirynthian — and finally “what he had from his father,” taken up into the sky",
    order: "Hero, then god",
    domain: "Strength, labour, the clearing of monsters",
    house: "The renewed human race",
    father: "Jupiter",
    mother: "Alcmene",
    consorts: ["Deianira", "Iole", "Hebe"],
    children: ["Hyllus"],
    who: "The poem's one full apotheosis of a mortal by merit, and the model for every later deification in it — Aeneas, Romulus, Caesar. Ovid narrates his death at extraordinary physical length precisely so that the burning-away of the mortal part can be literal.",
    books: [9, 11, 12, 15],
    prominence: 1,
    acts: {
      "Achelous & Hercules": "Wrestles a river god for Deianira through three shapes and tears off the horn of the third.",
      "Nessus & Deianira": "Swims the Evenus with his weapons while the centaur ferries his wife, and shoots Nessus through the chest when he tries to run off with her.",
      "Death of Hercules": "Puts on the shirt Deianira sent, feels the poison take, tries to tear it off with his own skin, throws Lichas into the sea, builds his pyre on Oeta, and lies down on the lion's hide with a look Ovid describes as that of a guest at a banquet.",
      "Galanthis": "Nearly not born at all: Juno's spell keeps Alcmene in labour for seven days until a servant's lie startles the goddess into unclasping her hands.",
      "Iolaus & the sons of Callirhoe": "Asks Hebe to give his old companion Iolaus his youth back — the request that sets the gods quarrelling.",
      "Laomedon & Hesione": "Rescues Hesione, is cheated of the promised horses, and takes Troy the first time in payment.",
      "Periclymenus": "Shoots the shape-shifting grandson of Neptune out of the sky in the moment he has become an eagle.",
      "Cercopes": "Named in the sequence of his passage through the islands, where a race of liars is turned into apes.",
      "Myscelus & Croton": "Appears in a dream to Myscelus, orders him to leave his homeland and found a city on the Aesar, and then bends Croton's law to save him from execution for obeying."
    }
  },
  {
    name: "Deianira",
    kind: "mortal",
    greek: "Dēiáneira (Δηϊάνειρα)",
    roman: "Deianira",
    ovid: "the wife who sends a gift and “does not know what she is sending”",
    order: "Princess of Calydon",
    domain: "Calydon and Trachis",
    house: "The house of Calydon",
    father: "Oeneus",
    mother: "Althaea",
    siblings: ["Meleager"],
    consorts: ["Hercules", "Achelous (sought)"],
    children: ["Hyllus"],
    who: "Won in a wrestling match, threatened by a centaur, and finally the unwitting agent of her husband's death. Ovid's version keeps her innocent of intent and entirely responsible for outcome.",
    books: [9],
    prominence: 1,
    acts: {
      "Achelous & Hercules": "The prize in the contest between a river and a hero, and — Ovid notes — the loser in both outcomes.",
      "Nessus & Deianira": "Carried across the river by the centaur, and told with his dying breath that his poisoned blood is a charm against a rival's love.",
      "Death of Hercules": "Hearing of Iole, weighs several courses, chooses the shirt, and kills herself when the messenger returns with the news of what it did."
    }
  },
  {
    name: "Nessus",
    kind: "creature",
    greek: "Néssos (Νέσσος)",
    roman: "Nessus",
    ovid: "the centaur who says as he dies, “I shall not die unavenged”",
    order: "Centaur",
    domain: "The ford of the Evenus",
    house: "The primordial succession",
    who: "A ferryman with an agenda, whose revenge is delayed by years and delivered through his victim's wife. He is the poem's most patient killer.",
    books: [9],
    prominence: 2,
    acts: {
      "Nessus & Deianira": "Offers to carry Deianira across, runs off with her instead, takes an arrow through the chest, and spends his last breath persuading her to keep the poisoned blood as a love charm.",
      "Death of Hercules": "Collects on a promise made years earlier: the blood soaked into the shirt is still carrying the Hydra's venom from the arrow that killed him."
    }
  },
  {
    name: "Lichas",
    kind: "mortal",
    greek: "Líkhas (Λίχας)",
    roman: "Lichas",
    ovid: "the herald hurled into the sea, who “hardened in the air as he flew”",
    order: "Herald",
    domain: "Euboea; the message he did not read",
    house: "The renewed human race",
    who: "The messenger who delivered the shirt, and who is killed for it while hiding behind a rock. Ovid describes his transformation mid-flight, which makes him the poem's only figure changed while airborne and unconscious.",
    books: [9],
    prominence: 3,
    acts: {
      "Death of Hercules": "Found trembling in a hollow of rock, whirled three times round and thrown out over the Euboean sea; the rain freezes out of him as he goes, and he lands as a small rock that sailors still avoid naming."
    }
  },
  {
    name: "Hyllus",
    kind: "hero",
    greek: "Hýllos (Ὕλλος)",
    roman: "Hyllus",
    ovid: "the son given his father's last instructions and his father's new wife",
    order: "Son of Hercules",
    domain: "Trachis and Oeta",
    house: "The renewed human race",
    father: "Hercules",
    mother: "Deianira",
    consorts: ["Iole"],
    who: "Hercules' son, who receives the dying orders, marries Iole, and hears Alcmene and Iole exchange the two birth stories that fill the middle of Book IX.",
    books: [9],
    prominence: 3,
    acts: {
      "Death of Hercules": "Takes his father's charge on Oeta and carries out the funeral of a man who does not, in the end, need one.",
      "Galanthis": "The husband whose household frames the conversation between Alcmene and Iole about difficult births."
    }
  },
  {
    name: "Alcmene",
    kind: "mortal",
    greek: "Alkmḗnē (Ἀλκμήνη)",
    roman: "Alcmena",
    ovid: "the mother whose seven-day labour is broken by a servant's lie",
    order: "Princess of Thebes",
    domain: "Thebes; the birth of Hercules",
    house: "The renewed human race",
    consorts: ["Jupiter", "Amphitryon"],
    children: ["Hercules"],
    who: "Hercules' mother, and the narrator of one of the poem's two great childbirth stories. Her account is unusual for the Metamorphoses in being told by a woman about her own body.",
    books: [9],
    prominence: 2,
    acts: {
      "Galanthis": "Tells Iole how she lay for seven days and nights with Lucina sitting outside, knees crossed and fingers locked, until her servant broke the spell and paid for it."
    }
  },
  {
    name: "Galanthis",
    kind: "mortal",
    greek: "Galanthís (Γαλανθίς)",
    roman: "Galanthis",
    ovid: "the servant girl who laughs at a goddess and is “dragged by the hair she laughed with”",
    order: "Theban servant",
    domain: "The delivery room",
    house: "The renewed human race",
    who: "The poem's most consequential lie. She tells Lucina the birth has happened; the goddess jumps up in surprise, the hands come apart, and Hercules is born. Her punishment fits her method exactly — a mouth that helped becomes a weasel's.",
    books: [9],
    prominence: 2,
    acts: {
      "Galanthis": "Announces a delivery that has not happened, breaks the goddess' posture, and laughs — for which Lucina takes her by the hair, drags her down, and turns her into the weasel that (Ovid says) still gives birth through its mouth."
    }
  },
  {
    name: "Iolaus",
    kind: "hero",
    greek: "Iólaos (Ἰόλαος)",
    roman: "Iolaus",
    ovid: "the old companion “given back his beardless years”",
    order: "Companion of Hercules",
    domain: "Thebes",
    house: "The renewed human race",
    who: "Hercules' nephew and charioteer, restored to youth at his uncle's request — the precedent that makes every other god want the same favour.",
    books: [9],
    prominence: 3,
    acts: {
      "Iolaus & the sons of Callirhoe": "Walks into the house with the years taken off him, and unintentionally starts a divine dispute about whether age can be repealed on request."
    }
  },
  {
    name: "Callirhoe",
    kind: "nymph",
    greek: "Kallirrhóē (Καλλιρρόη)",
    roman: "Callirhoe",
    ovid: "the mother who asks that her infants be made men “at once”",
    order: "Naiad",
    domain: "Acarnania",
    house: "The primordial succession",
    consorts: ["Alcmaeon"],
    children: ["Amphoterus", "Acarnan"],
    who: "A river-nymph who wants her babies grown so that they can avenge their father. Her request is granted, and it is the second half of the argument Themis has to close.",
    books: [9],
    prominence: 3,
    acts: {
      "Iolaus & the sons of Callirhoe": "Asks Jupiter, through Hebe, to age her sons instantly into avengers — a request that opens a queue of gods with similar demands."
    }
  },
  {
    name: "Dryope",
    kind: "mortal",
    greek: "Dryópē (Δρυόπη)",
    roman: "Dryope",
    ovid: "the mother who begs her sister to lift the baby “to my leaves while there is still a mouth”",
    order: "Oechalian princess",
    domain: "Oechalia; the lotus by the lake",
    house: "The renewed human race",
    father: "Eurytus",
    siblings: ["Iole"],
    consorts: ["Andraemon", "Apollo"],
    children: ["Amphissus"],
    who: "Transformed for an act of complete innocence: she picks a flower for her baby. Ovid uses her to press the poem's hardest question — whether there is any relationship at all between what people do and what happens to them.",
    books: [9],
    prominence: 1,
    acts: {
      "Dryope": "Picks purple blossoms from a lakeside lotus to amuse the child at her breast, sees the tree bleed, and finds her feet rooting; she asks that the boy be nursed under her branches, told the truth about her, and kept away from ponds — and then her face closes over."
    }
  },
  {
    name: "Iole",
    kind: "mortal",
    greek: "Iólē (Ἰόλη)",
    roman: "Iole",
    ovid: "the captive whose arrival in the house is the thing Deianira cannot survive",
    order: "Princess of Oechalia",
    domain: "Oechalia and Trachis",
    house: "The renewed human race",
    father: "Eurytus",
    siblings: ["Dryope"],
    consorts: ["Hercules", "Hyllus"],
    who: "Won in war by Hercules, married afterwards to his son, and — through her half-sister Dryope — the teller of one of the book's saddest stories. She occupies almost no narrative space and causes an enormous amount of it.",
    books: [9],
    prominence: 2,
    acts: {
      "Death of Hercules": "Her arrival at Trachis is the news that makes Deianira reach for Nessus' blood.",
      "Dryope": "Tells her half-sister's story to Alcmene, in tears, as the exchange of household griefs."
    }
  },
  {
    name: "Andraemon",
    kind: "mortal",
    greek: "Andraímōn (Ἀνδραίμων)",
    roman: "Andraemon",
    ovid: "the husband who arrives to find a tree where his wife was standing",
    order: "Oechalian nobleman",
    domain: "Oechalia",
    house: "The renewed human race",
    consorts: ["Dryope"],
    children: ["Amphissus"],
    who: "Dryope's husband, who reaches the lakeside in time to embrace the warm bark and nothing else.",
    books: [9],
    prominence: 3,
    acts: {
      "Dryope": "Comes running with her father, holds what is left of her, and kisses the wood."
    }
  },
  {
    name: "Amphissus",
    kind: "mortal",
    greek: "Ámphissos (Ἄμφισσος)",
    roman: "Amphissus",
    ovid: "the child lifted to a mother's leaves for a last feed",
    order: "Son of Dryope",
    domain: "Oechalia",
    house: "The renewed human race",
    father: "Apollo",
    mother: "Dryope",
    who: "The infant in whose service the fatal flower was picked. His mother's last instructions are entirely about him.",
    books: [9],
    prominence: 3,
    acts: {
      "Dryope": "Held up to his mother's branches while she can still speak, and charged to be told, when he is old enough, whose tree this is."
    }
  },
  {
    name: "Byblis",
    kind: "mortal",
    greek: "Byblís (Βυβλίς)",
    roman: "Byblis",
    ovid: "the girl who writes the letter and “blushes and pales at the same word”",
    order: "Princess of Miletus",
    domain: "Caria; the letter, and the spring",
    house: "The renewed human race",
    father: "Miletus",
    siblings: ["Caunus"],
    who: "The poem's fullest anatomy of a desire that its owner cannot approve. She reasons, dreams, drafts, erases, sends, is refused, and finally dissolves into her own tears — a spring that still runs under a dark oak.",
    books: [9],
    prominence: 1,
    acts: {
      "Byblis & Caunus": "Talks herself through every argument for and against, writes and rewrites a wax tablet, entrusts it to a servant who does not know what he is carrying, is thrown out, and follows her brother across Caria until her legs give and her weeping never stops."
    }
  },
  {
    name: "Caunus",
    kind: "mortal",
    greek: "Kaûnos (Καῦνος)",
    roman: "Caunus",
    ovid: "the brother who reads two lines and throws the tablet down",
    order: "Prince of Miletus",
    domain: "Caria",
    house: "The renewed human race",
    father: "Miletus",
    siblings: ["Byblis"],
    who: "Byblis' twin, whose only action in the poem is to refuse and leave. He founds a city in exile and never speaks again in the text.",
    books: [9],
    prominence: 3,
    acts: {
      "Byblis & Caunus": "Reads far enough to understand, hurls the tablet away, nearly kills the messenger, and leaves the country to found a city of his own."
    }
  },
  {
    name: "Iphis",
    aliases: ["Iphis of Crete"],
    kind: "mortal",
    greek: "Îphis (Ἶφις)",
    roman: "Iphis",
    ovid: "the child raised as a boy and given “a boy's face that would have been beautiful on either”",
    order: "Cretan youth",
    domain: "Phaestus in Crete",
    house: "The renewed human race",
    father: "Ligdus",
    mother: "Telethusa",
    consorts: ["Ianthe"],
    who: "Assigned a boy's name and clothes to escape a father's order that a daughter be killed, and in love with a girl she is contracted to marry. Ovid gives her a long and genuinely anguished speech about a desire she believes has no precedent in nature — and then grants the transformation that makes it ordinary.",
    books: [9],
    prominence: 1,
    acts: {
      "Iphis & Ianthe": "Loves Ianthe, is betrothed to her, and spends the days before the wedding arguing that not even Pasiphaë's desire was as impossible as hers. Isis answers her mother's prayer; on the way home from the temple Iphis' stride lengthens, her colour darkens, her hair shortens, and the wedding goes ahead."
    }
  },
  {
    name: "Ianthe",
    kind: "mortal",
    greek: "Iánthē (Ἰάνθη)",
    roman: "Ianthe",
    ovid: "“the most praised of the girls of Phaestus for her beauty”",
    order: "Cretan maiden",
    domain: "Phaestus in Crete",
    house: "The renewed human race",
    consorts: ["Iphis"],
    who: "Iphis' contemporary, classmate, and betrothed, who loves back without any of the complication — Ovid notes that the two burned equally, but not with equal hope.",
    books: [9],
    prominence: 2,
    acts: {
      "Iphis & Ianthe": "Wants the wedding as much as Iphis does and understands none of the obstacle; she is the only person in the story who is simply happy."
    }
  },
  {
    name: "Telethusa",
    kind: "mortal",
    greek: "Telethoûsa (Τελέθουσα)",
    roman: "Telethusa",
    ovid: "the mother who keeps a daughter alive by lying for thirteen years",
    order: "Cretan woman",
    domain: "Phaestus in Crete",
    house: "The renewed human race",
    consorts: ["Ligdus"],
    children: ["Iphis"],
    who: "The poem's most sustained act of maternal defiance. Told to expose a girl, she raises one in disguise, and then keeps postponing a wedding until the goddess who advised her intervenes.",
    books: [9],
    prominence: 2,
    acts: {
      "Iphis & Ianthe": "Receives Isis in a night vision, refuses to kill her newborn, presents her to her husband as a son, invents pretexts to delay the marriage, and finally goes to the temple by night with her hair loose to ask for the change she was promised."
    }
  },
  {
    name: "Ligdus",
    kind: "mortal",
    greek: "Lígdos (Λίγδος)",
    roman: "Ligdus",
    ovid: "the poor and honest man whose one order is monstrous",
    order: "Cretan householder",
    domain: "Phaestus in Crete",
    house: "The renewed human race",
    consorts: ["Telethusa"],
    children: ["Iphis"],
    who: "A decent, poor man who tells his pregnant wife that if the child is a girl it must be killed — and who weeps while saying it. Ovid uses him to show how ordinary the arithmetic of poverty makes an atrocity.",
    books: [9],
    prominence: 3,
    acts: {
      "Iphis & Ianthe": "Gives the order, is deceived for thirteen years, names the child after its grandfather in a name that happens to work for either sex, and arranges the marriage that forces the issue."
    }
  },

  /* ------------------------------------------------------------ Orpheus' book */
  {
    name: "Orpheus",
    kind: "hero",
    greek: "Orpheús (Ὀρφεύς)",
    roman: "Orpheus",
    ovid: "“the Thracian bard,” whose song moves trees, stones, beasts, and finally the dead",
    order: "Singer of Thrace",
    domain: "Song; the descent; the invention of a repertoire",
    house: "The primordial succession",
    father: "Oeagrus",
    parentageNote: "Oeagrus is the usual father; the variant that makes him Apollo's son is one Ovid leaves standing.",
    mother: "Calliope",
    consorts: ["Eurydice"],
    who: "The poem's rival poet, and the narrator of almost the whole of Book X. His failure at the threshold is famous; what Ovid does with it is stranger — he turns the bereaved singer into the author of the poem's most disturbing love stories.",
    books: [10, 11],
    prominence: 1,
    acts: {
      "Orpheus & Eurydice": "Goes down through the Taenarian gate, sings an argument rather than a lament — that Love rules here too, or if the old story is untrue, then nothing does — and is granted his wife on the single condition he then breaks within sight of the upper air.",
      "Orpheus' audience": "Sits on an empty hill and draws a forest to him: Ovid catalogues twenty-six species arriving, and the shade they make is the stage for everything he then sings.",
      "Death of Orpheus": "Torn apart by Ciconian women whose voices drown his lyre; his head and lyre float down the Hebrus still making sound, and his shade finds Eurydice below, where he can walk beside her and look back as often as he likes."
    },
    bookActs: {
      10: "Narrates the whole book after Eurydice's second loss: Cyparissus, Hyacinthus, the Propoetides, Pygmalion, Myrrha, Atalanta, and Adonis. His stated subject is boys loved by gods and girls punished for forbidden desire — a programme that says as much about the singer as the songs."
    }
  },
  {
    name: "Eurydice",
    kind: "nymph",
    greek: "Eurydíkē (Εὐρυδίκη)",
    roman: "Eurydice",
    ovid: "the bride who dies “while the naiads walked with her,” and who says only farewell",
    order: "Dryad",
    domain: "Thrace; the road back",
    house: "The primordial succession",
    consorts: ["Orpheus"],
    who: "Given almost no words in the poem. Her one line at the second loss — a farewell she is not sure he can even hear — is the whole of her characterisation, and it is enough.",
    books: [10, 11],
    prominence: 2,
    acts: {
      "Orpheus & Eurydice": "Bitten on the ankle by a snake in the grass on her wedding day; released on condition, and lost again when he turns. Ovid says she did not complain — what was there to complain of, except being loved?",
      "Death of Orpheus": "Meets him again among the shades, where the poem finally lets them walk together without a rule about looking."
    }
  },
  {
    name: "Cyparissus",
    kind: "mortal",
    greek: "Kypárissos (Κυπάρισσος)",
    roman: "Cyparissus",
    ovid: "the boy who asks to “mourn forever,” and gets it",
    order: "Youth of Ceos",
    domain: "Ceos; the cypress",
    house: "The primordial succession",
    consorts: ["Apollo"],
    who: "The boy whose accidental killing of a tame stag becomes a request for permanent grief. He is the poem's clearest case of a transformation asked for, granted exactly, and immediately regretted by the god who granted it.",
    books: [10],
    prominence: 2,
    acts: {
      "Orpheus' audience": "The cypress among the arriving trees, and the reason Orpheus stops to tell the story.",
      "Cyparissus": "Kills his own garlanded stag with a misthrown javelin in the noon heat, refuses every comfort, and asks the god for a grief without end; his blood turns green, his hair becomes leaves, and Apollo — who cannot take it back — promises to mourn with him at other people's funerals forever."
    }
  },
  {
    name: "Hyacinthus",
    kind: "mortal",
    greek: "Hyákinthos (Ὑάκινθος)",
    roman: "Hyacinthus",
    ovid: "the Spartan boy whose flower carries the letters AI AI",
    order: "Prince of Sparta",
    domain: "Sparta; the discus; the flower",
    house: "The renewed human race",
    father: "Oebalus / Amyclas",
    consorts: ["Apollo"],
    who: "Killed by a discus his lover threw, and preserved as a flower with a cry of grief printed on its petals — the poem's neatest fusion of writing, mourning, and botany.",
    books: [10, 13],
    prominence: 2,
    acts: {
      "Hyacinthus": "Runs in to catch the discus and takes it in the face on the rebound; Apollo holds him, tries every art of medicine he has, and finally writes his own lament into the petals of the flower that comes up out of the blood.",
      "Death of Ajax": "Named again when the same flower springs from Ajax's blood, its letters now readable as the first two of the hero's name."
    }
  },
  {
    name: "Pygmalion",
    kind: "mortal",
    greek: "Pygmalíōn (Πυγμαλίων)",
    roman: "Pygmalion",
    ovid: "the sculptor who “gave his ivory a body no woman was born with”",
    order: "King and sculptor of Cyprus",
    domain: "Cyprus; ivory; the animated image",
    house: "The Cyprian line",
    consorts: ["Pygmalion's statue"],
    children: ["Paphos"],
    who: "The artist who withdraws from women because of the Propoetides and makes one instead. Ovid's account is uncomfortably attentive to what he does to the statue before it is alive — gifts, kisses, a bed, a pillow.",
    books: [10],
    prominence: 1,
    acts: {
      "Pygmalion": "Carves an ivory woman more beautiful than any born, treats her as a lover long before she can respond, and at Venus' festival asks for a bride “like my ivory girl” — not daring the real request. He comes home, kisses her, and the ivory gives under his thumb like wax in the sun."
    }
  },
  {
    name: "Pygmalion's statue",
    aliases: ["the ivory maiden", "Galatea (in later reception only)"],
    kind: "mortal",
    greek: "— (unnamed in Ovid)",
    roman: "— (unnamed in Ovid)",
    ovid: "“the ivory maiden” — Ovid never names her; “Galatea” is an eighteenth-century addition",
    order: "Ivory image, then woman",
    domain: "Cyprus",
    house: "The Cyprian line",
    consorts: ["Pygmalion"],
    children: ["Paphos"],
    who: "The poem's only figure transformed into a person rather than out of one. She is given a body, a marriage, and a daughter, and never a line of speech — an absence the poem's reception has been trying to fill ever since.",
    books: [10],
    prominence: 2,
    acts: {
      "Pygmalion": "Warms under a hand, opens her eyes on her maker and the daylight at the same moment, and blushes — the poem's single instance of a statue's point of view being gestured at and then dropped."
    }
  },
  {
    name: "Paphos",
    kind: "mortal",
    greek: "Páphos (Πάφος)",
    roman: "Paphos",
    ovid: "the child “from whom the island holds its name”",
    order: "Child of the ivory woman; eponym of Paphos",
    domain: "Cyprus",
    house: "The Cyprian line",
    father: "Pygmalion",
    mother: "Pygmalion's statue",
    children: ["Cinyras"],
    who: "The proof that the statue's transformation was complete: a woman made out of ivory bears a child, and the child founds a city. Ovid gives them one line and no story, which is the whole function — the miracle is closed by a birth and the poem moves on to what that birth eventually produces.\n\nTheir sex is genuinely unsettled in the text. Within two lines Ovid writes a masculine relative of Paphos and then a feminine demonstrative, and editors have taken the line both ways since antiquity; the manuscripts do not settle it. This chart keeps the ambiguity rather than choosing.",
    books: [10],
    prominence: 3,
    acts: {
      "Pygmalion": "Is born nine months after Venus attends the wedding, and gives the island the name it still carries — the single line that turns a private miracle into a place on the map.",
      "Myrrha": "Stands between the sculptor and the disaster, unnamed in the telling: Orpheus begins Myrrha's story by tracing Cinyras back through this one child to an ivory woman."
    }
  },
  {
    name: "Myrrha",
    kind: "mortal",
    greek: "Mýrrha (Μύρρα) / Smýrna",
    roman: "Myrrha",
    ovid: "the daughter whose tears “still drip from the tree, and the drops keep her name”",
    order: "Princess of Cyprus",
    domain: "Cyprus; the myrrh tree",
    house: "The Cyprian line",
    father: "Cinyras",
    consorts: ["Cinyras"],
    children: ["Adonis"],
    who: "The poem's most carefully quarantined story: Orpheus warns fathers and daughters to leave the room before he starts. Myrrha argues her case with animal law and human law and knows the difference, which is exactly what makes her unbearable.",
    books: [10],
    prominence: 1,
    acts: {
      "Myrrha": "Reasons her way through a night of self-argument, is cut down from a noose by her nurse, and is brought to her father's bed on three dark nights during a festival when wives sleep apart; discovered by lamplight, she runs for nine months and asks to be neither alive nor dead — and becomes the tree that still weeps resin.",
      "Adonis born": "Bulges, splits, and delivers her son through the bark with Lucina's hands on the wood; the tree cannot hold him, and the boy is laid on soft grass and washed in his mother's tears."
    }
  },
  {
    name: "Cinyras",
    kind: "mortal",
    greek: "Kinýras (Κινύρας)",
    roman: "Cinyras",
    ovid: "the father who “would have been called happy if he had had no children”",
    order: "King of Cyprus",
    domain: "Cyprus",
    house: "The Cyprian line",
    father: "Paphos",
    parentageNote: "Ovid names the descent in full: Pygmalion's ivory woman bore Paphos, and Paphos bore Cinyras.",
    children: ["Myrrha"],
    who: "Deceived in the dark for three nights, and the one who brings the lamp. Ovid keeps him unaware throughout, which places the whole moral weight of the episode on a daughter and a nurse.",
    books: [10],
    prominence: 2,
    acts: {
      "Myrrha": "Asks his daughter what kind of husband she wants and mistakes her answer entirely; takes a girl to bed for three nights on the nurse's arrangement, calls her daughter as a term of affection, and finally brings in a light — after which he goes for his sword and she runs."
    }
  },
  {
    name: "The nurse",
    aliases: ["Myrrha's nurse"],
    kind: "mortal",
    greek: "— (unnamed in Ovid)",
    roman: "— (unnamed in Ovid)",
    ovid: "the old woman who “promised help, and kept the promise”",
    order: "Household servant",
    domain: "Cyprus",
    house: "The Cyprian line",
    who: "The person who prevents a suicide and then arranges an incest, in that order, out of the same devotion. She is the poem's most disturbing servant, and Ovid gives her no name at all.",
    books: [10],
    prominence: 3,
    acts: {
      "Myrrha": "Finds the girl with the rope, extracts the confession by degrees, talks her out of dying, and then — because she has sworn to help — makes the arrangement with a drunk king in the dark."
    }
  },
  {
    name: "Adonis",
    kind: "mortal",
    greek: "Ádōnis (Ἄδωνις)",
    roman: "Adonis",
    ovid: "the boy born from a tree, “who would have been envied even by the god he came to please”",
    order: "Prince of Cyprus",
    domain: "Cyprus; the hunt; the anemone",
    house: "The Cyprian line",
    father: "Cinyras",
    mother: "Myrrha",
    consorts: ["Venus"],
    who: "Born out of a myrrh tree, loved by Venus, and killed by a boar he was warned about. His flower lasts one day; Ovid says the very wind that opens it knocks it apart.",
    books: [10],
    prominence: 1,
    acts: {
      "Adonis born": "Delivered from the bark and raised by naiads; Ovid says he grew so fast that he was loved by the goddess before anyone noticed he was a man.",
      "Atalanta & Hippomenes": "The audience for Venus' cautionary tale — told specifically to explain why he should stay away from lions.",
      "Death of Adonis": "Ignores the warning, puts his dogs on a boar, and takes the tusk in the groin; Venus sprinkles nectar on the blood, and in an hour a blood-coloured flower comes up that the wind tears open and scatters."
    }
  },
  {
    name: "Hippomenes",
    kind: "hero",
    greek: "Hippoménēs (Ἱππομένης)",
    roman: "Hippomenes",
    ovid: "the runner who wins with three apples and forgets to say thank you",
    order: "Boeotian prince",
    domain: "The footrace; Cybele's cave",
    house: "The renewed human race",
    consorts: ["Atalanta"],
    who: "The suitor who thought the race not worth the risk until he saw her run, and then entered anyway. His victory is a piece of applied theology — and his failure to acknowledge it is the reason he ends up in harness.",
    books: [10],
    prominence: 2,
    acts: {
      "Atalanta & Hippomenes": "Prays to Venus, drops the three golden apples one at a time, wins by exactly the seconds she loses picking them up, and then takes his bride into the Great Mother's rock shrine — where the two of them become the lions that draw her car."
    }
  },

  /* ---------------------------------------------- Phrygia, Troy, and Trachis */
  {
    name: "Midas",
    kind: "mortal",
    greek: "Mídas (Μίδας)",
    roman: "Midas",
    ovid: "the king “whose judgement was as poor in music as in gold”",
    order: "King of Phrygia",
    domain: "Phrygia; gold; the ears",
    house: "The renewed human race",
    who: "The poem's only figure to be punished twice for two entirely different kinds of bad judgement. Ovid treats him as comic and then almost tenderly: after the gold, he goes to live in the woods and worships Pan, which is exactly what gets him the ears.",
    books: [11],
    prominence: 1,
    acts: {
      "Midas' golden touch": "Entertains Silenus for ten days, asks for the touch, and discovers at his first meal that bread goes hard in his hand and wine goes solid in his throat; he begs the god to take back the answered prayer and is sent to wash in the Pactolus, which has run gold ever since.",
      "Midas' ears": "Dissents from Tmolus' verdict, is given long grey mobile ears, hides them under a purple turban, and is betrayed by the reeds his barber whispered into."
    }
  },
  {
    name: "Tmolus",
    kind: "god",
    greek: "Tmôlos (Τμῶλος)",
    roman: "Tmolus",
    ovid: "the mountain who “shakes the trees out of his ears to listen”",
    order: "Mountain god",
    domain: "Lydia; the judgement of music",
    house: "The primordial succession",
    who: "The mountain that acts as judge in the Pan and Apollo contest, and whose physical adjustments before ruling are one of Ovid's best jokes.",
    books: [11],
    prominence: 3,
    acts: {
      "Midas' ears": "Clears the woods from his ears, listens to both performers, and orders Pan's pipes to yield to the lyre — a verdict everyone present accepts except one."
    }
  },
  {
    name: "Midas' barber",
    kind: "mortal",
    greek: "— (unnamed in Ovid)",
    roman: "— (unnamed in Ovid)",
    ovid: "the only man who has seen the king's head, and cannot hold it in",
    order: "Royal servant",
    domain: "Phrygia; the whispered secret",
    house: "The renewed human race",
    who: "The keeper of a secret that has to go somewhere. His hole in the ground is the poem's most economical account of how information escapes.",
    books: [11],
    prominence: 3,
    acts: {
      "Midas' ears": "Digs a small pit, whispers what he saw into it, buries it, and walks away — and the reeds that grow there repeat it every time the wind gets up."
    }
  },
  {
    name: "Laomedon",
    kind: "mortal",
    greek: "Lāomédōn (Λαομέδων)",
    roman: "Laomedon",
    ovid: "the king “who denied his word,” and lost a city for it twice",
    order: "King of Troy",
    domain: "Troy; the unpaid wage",
    house: "The Trojan house",
    children: ["Priam", "Hesione"],
    who: "The founder-king whose broken contracts with two gods and one hero build the whole grievance structure of the Trojan books. Everything that happens to Troy in this poem is, at some level, still his invoice.",
    books: [11],
    prominence: 2,
    acts: {
      "Laomedon & Hesione": "Refuses Neptune and Apollo their wages for the walls, refuses Hercules the horses promised for his daughter's rescue, and watches the first sack of Troy follow directly from both."
    }
  },
  {
    name: "Hesione",
    kind: "mortal",
    greek: "Hēsiónē (Ἡσιόνη)",
    roman: "Hesione",
    ovid: "the princess chained to a rock to pay her father's debt",
    order: "Princess of Troy",
    domain: "Troy",
    house: "The Trojan house",
    father: "Laomedon",
    siblings: ["Priam"],
    consorts: ["Telamon"],
    children: ["Teucer"],
    who: "Exposed to a sea monster because of her father's fraud, rescued by Hercules, and handed to Telamon as a prize — which is why Ajax has a Trojan mother and a claim on Troy.",
    books: [11],
    prominence: 3,
    acts: {
      "Laomedon & Hesione": "Fastened to a cliff as the price of Neptune's anger, freed by Hercules, and given to Telamon when her father defaults on the reward."
    }
  },
  {
    name: "Peleus",
    kind: "hero",
    greek: "Pēleús (Πηλεύς)",
    roman: "Peleus",
    ovid: "“happier in his son than in himself,” and an exile for a murder he never explains",
    order: "Prince of Aegina, king of Phthia",
    domain: "Phthia; the marriage to a goddess",
    house: "The Aeacids",
    father: "Aeacus",
    mother: "Endeis",
    siblings: ["Telamon", "Phocus"],
    consorts: ["Thetis"],
    children: ["Achilles"],
    who: "The only mortal in the poem to marry a goddess, and a fratricide in flight for most of his appearances. Ovid keeps the two facts adjacent without ever letting them explain each other.",
    books: [8, 11, 12],
    prominence: 1,
    acts: {
      "Calydonian Boar Hunt": "Among the muster, and the accidental killer of Eurytion in the confusion — one more death he has to leave a country over.",
      "Peleus & Thetis": "Told by Proteus how to hold a shape-changer, he takes her in her own cave and does not let go through bird, tree, and tigress.",
      "Peleus & Psamathe": "Arrives at Trachis as a suppliant with the blood of his half-brother on him, and finds a wolf eating the herds of the man who has just taken him in."
    }
  },
  {
    name: "Ceyx",
    kind: "mortal",
    greek: "Kḗyx (Κήϋξ)",
    roman: "Ceyx",
    ovid: "the king “whose face still held his father's light,” and who drowns saying his wife's name",
    order: "King of Trachis",
    domain: "Trachis; the sea crossing",
    house: "The renewed human race",
    father: "Lucifer / the Morning Star",
    consorts: ["Alcyone"],
    siblings: ["Daedalion"],
    who: "Son of the morning star, host to the exiled Peleus, and half of the poem's one genuinely loving marriage. Ovid gives their parting more emotional detail than any other scene in the Metamorphoses.",
    books: [11],
    prominence: 1,
    acts: {
      "Ceyx's voyage": "Sails for the oracle at Claros against his wife's pleading, watches the storm take the ship apart over several hundred lines, and goes down holding a plank and wishing his body would wash up where she can bury it.",
      "Ceyx & Alcyone": "Comes back to her as Morpheus in a dream, dripping, to tell her plainly that she is a widow — and is finally restored beside her as the other halcyon."
    }
  },
  {
    name: "Alcyone",
    kind: "mortal",
    greek: "Alkyónē (Ἀλκυόνη)",
    roman: "Alcyone",
    ovid: "the wife who runs down the beach and finds “that she is flying”",
    order: "Queen of Trachis",
    domain: "Trachis; the halcyon days",
    house: "The renewed human race",
    father: "Aeolus",
    consorts: ["Ceyx"],
    who: "The poem's great study of a marriage that survives death by being changed rather than ended. Her transformation happens mid-grief, mid-stride, and the couple are given seven calm days each winter to nest on the water.",
    books: [11],
    prominence: 1,
    acts: {
      "Ceyx's voyage": "Argues against the journey with an expert's knowledge of what her father's winds can do, is overruled, and watches the sail out of sight.",
      "House of Sleep": "The recipient of Juno's one mercy — a dream that tells the truth instead of a prayer answered by silence.",
      "Ceyx & Alcyone": "Recognises the body in the surf, runs out along the breakwater, jumps — and finds wings under her; the two of them mate, nest, and keep the sea flat for a week every winter."
    }
  },
  {
    name: "Daedalion",
    kind: "mortal",
    greek: "Daidalíōn (Δαιδαλίων)",
    roman: "Daedalion",
    ovid: "the brother “fierce, and delighting in war,” who throws himself off Parnassus",
    order: "Prince, then hawk",
    domain: "Phocis; violent grief",
    house: "The renewed human race",
    father: "Lucifer / the Morning Star",
    siblings: ["Ceyx"],
    children: ["Chione"],
    who: "Ceyx's brother, told as a counterweight to the book's gentler griefs: where Alcyone becomes a halcyon, Daedalion becomes a hawk that has been hostile to every other bird since.",
    books: [11],
    prominence: 3,
    acts: {
      "Ceyx's voyage": "Told in flashback by Ceyx: after his daughter's death he ran four times at the summit of Parnassus and went off the fifth time, and Apollo caught him into feathers and a hooked beak."
    }
  },
  {
    name: "Chione",
    kind: "mortal",
    greek: "Khiónē (Χιόνη)",
    roman: "Chione",
    ovid: "the girl “sought by a thousand suitors at fourteen,” and shot through the tongue",
    order: "Princess of Phocis",
    domain: "Phocis",
    house: "The renewed human race",
    father: "Daedalion",
    consorts: ["Apollo", "Mercury"],
    children: ["Philammon", "Autolycus"],
    who: "Taken by two gods on the same day and killed for boasting about it. Ovid puts the arrow through the organ that gave the offence, which is his standard grammar for punishment.",
    books: [11],
    prominence: 3,
    acts: {
      "Ceyx's voyage": "Part of Ceyx's account of his brother: she bore twin sons to two gods, said she was better-looking than Diana, and was shot mid-sentence."
    }
  },
  {
    name: "Aesacus",
    kind: "mortal",
    greek: "Aísakos (Αἴσακος)",
    roman: "Aesacus",
    ovid: "the diving bird that “loves the water because it hates itself”",
    order: "Prince of Troy",
    domain: "Ida and the Troad",
    house: "The Trojan house",
    father: "Priam",
    mother: "Alexirhoe",
    consorts: ["Hesperia (pursued)"],
    who: "Priam's son by a nymph, whose pursuit kills a woman by snake-bite and who then cannot manage to kill himself: the sea keeps turning him into a bird before he lands. He closes Book XI, one story before Troy.",
    books: [11],
    prominence: 2,
    acts: {
      "Ceyx's voyage": "Named in the movement that carries the poem from Trachis to Troy; his story is the last thing before the Greek fleet.",
      "Death of Achilles": "Belongs to the Trojan generation whose losses frame Achilles' own end."
    }
  },
  {
    name: "Priam",
    kind: "mortal",
    greek: "Príamos (Πρίαμος)",
    roman: "Priamus",
    ovid: "the king who mourns a son “not knowing he was mourning a bird”",
    order: "King of Troy",
    domain: "Troy",
    house: "The Trojan house",
    father: "Laomedon",
    siblings: ["Hesione"],
    consorts: ["Hecuba"],
    children: ["Hector", "Paris", "Polyxena", "Polydorus", "Cassandra", "Aesacus"],
    who: "Troy's last king, and in this poem mostly a man attending funerals. Ovid keeps him almost entirely off-stage, so that his losses arrive as reports rather than scenes.",
    books: [11, 12, 13],
    prominence: 2,
    acts: {
      "Ceyx's voyage": "Holds a funeral for Aesacus, at which the son in question is present in the air, unrecognised.",
      "Fall of Troy & Polyxena": "Named among the dead when the city falls, so that Hecuba's grief has no one left to share it."
    }
  }
];
