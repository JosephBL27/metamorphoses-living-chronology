/*
 * The gazetteer, part two: Anatolia, the Levant, Egypt, Africa, and the East.
 * Same shape as the Greek world file.
 */

export const EAST_AND_AFRICA = [
  {
    name: "Phoenicia & Sidon", greek: "Phoiníkê (Φοινίκη)", roman: "Phoenice", kind: "region",
    at: [35.38, 33.56],
    extent: [[34.8, 32.6], [36.3, 35.1]],
    what: "The shore Jupiter drove the cattle down to as a white bull, and carried Europa away from.",
    culture: "The trading coast that gave the Mediterranean its alphabet, its purple dye and its long-range shipping. Ovid makes it the poem's point of departure westward: Europa is taken from here to Crete, and her brother Cadmus is sent after her and forbidden to come home.",
    books: [2, 3], episodes: ["Europa", "Cadmus & the dragon"],
    figures: ["Europa", "Jupiter", "Cadmus", "Agenor", "Mercury"]
  },
  {
    name: "Troy", greek: "Ílion (Ἴλιον)", roman: "Troia", kind: "city",
    at: [26.24, 39.96],
    what: "The city Apollo and Neptune built for a king who refused to pay, sacked twice for it.",
    culture: "Ovid's Troy is a contract dispute before it is a war. Laomedon cheats the gods who raised his walls and then cheats Hercules who saved his daughter, and the city falls the first time for that. Three books later it falls again, and what survives is not a people but a story and a man carrying his father.",
    books: [11, 12, 13, 14], episodes: ["Laomedon & Hesione", "House of Fame", "Cygnus & Achilles", "Death of Achilles", "Ajax & Ulysses", "Fall of Troy & Polyxena", "Hecuba & Polydorus", "Memnon"],
    figures: ["Priam", "Hecuba", "Achilles", "Ajax", "Ulysses", "Aeneas", "Polyxena", "Memnon", "Laomedon", "Hesione"]
  },
  {
    name: "Mount Ida", greek: "Ídê (Ἴδη)", roman: "Ida", kind: "mountain",
    at: [26.85, 39.72],
    what: "The wooded mountain above Troy, whose pines built Aeneas' fleet and whose slopes raised Hermaphroditus.",
    culture: "Sacred to Cybele, which is why the ships cut from it cannot simply burn: when Turnus' ally sets them alight, the goddess turns her own timber into sea-nymphs rather than let it be destroyed.",
    books: [4, 10, 14], episodes: ["Salmacis & Hermaphroditus", "Diomedes in Italy"],
    figures: ["Hermaphroditus", "Cybele", "Aeneas", "Ganymede"]
  },
  {
    name: "Lydia & the Pactolus", greek: "Lydía (Λυδία)", roman: "Lydia", kind: "region",
    at: [27.85, 38.47],
    extent: [[26.7, 37.5], [29.6, 39.3]],
    what: "Arachne's country and Midas' — where a weaver out-wove a goddess and a river was left carrying gold.",
    culture: "The Greek world's byword for wealth and for textiles, and Ovid uses both. Arachne is a dyer's daughter from a small town who is better at the loom than Minerva; Midas washes a curse off in the Pactolus and leaves its sands gold-bearing, which is Ovid's explanation for where Lydian money came from.",
    books: [6, 11], episodes: ["Arachne & Minerva", "Midas' golden touch", "Midas' ears"],
    figures: ["Arachne", "Minerva", "Midas", "Bacchus / Dionysus", "Silenus", "Apollo", "Pan"]
  },
  {
    name: "Mount Sipylus", greek: "Sípylos (Σίπυλος)", roman: "Sipylus", kind: "mountain",
    at: [27.35, 38.60],
    what: "The Lydian mountainside where a whirlwind fixed Niobe as a weeping stone.",
    culture: "A real rock formation that really does seep water, and which locals showed to travellers as Niobe for centuries. Ovid's ending is exact about the mechanism: her tongue freezes, her blood stops, nothing in her can move — and the stone still weeps.",
    books: [6], episodes: ["Niobe"],
    figures: ["Niobe", "Latona", "Apollo", "Diana"]
  },
  {
    name: "Phrygia", greek: "Phrygía (Φρυγία)", roman: "Phrygia", kind: "region",
    at: [30.50, 39.00],
    extent: [[28.9, 37.7], [32.6, 40.1]],
    what: "Baucis and Philemon's country, and Marsyas' — hospitality rewarded in one valley, a satyr flayed in the next.",
    culture: "Rural inland Anatolia, and to a Roman reader an old, slightly comic backwater. Ovid gives it the poem's single kindest story and one of its cruellest, a few hundred lines apart, and lets them sit together without comment.",
    books: [6, 8, 11], episodes: ["Marsyas", "Baucis & Philemon", "Midas' golden touch"],
    figures: ["Baucis", "Philemon", "Marsyas", "Apollo", "Jupiter", "Mercury", "Midas"]
  },
  {
    name: "Caria & Salmacis", greek: "Karía (Καρία)", roman: "Caria", kind: "region",
    at: [27.80, 37.10],
    extent: [[26.9, 36.5], [29.1, 37.9]],
    what: "Where the pool of Salmacis fused a nymph and a boy into one body, and where Byblis dissolved into a spring.",
    culture: "A coast of clear water and old springs, and the source of two of the poem's strangest endings. Ovid records the local belief that the Salmacis pool leaves men weakened — and has Hermaphroditus himself ask for exactly that.",
    books: [4, 9], episodes: ["Salmacis & Hermaphroditus", "Byblis & Caunus"],
    figures: ["Salmacis", "Hermaphroditus", "Byblis", "Caunus", "Miletus"]
  },
  {
    name: "Miletus", greek: "Mílêtos (Μίλητος)", roman: "Miletus", kind: "city",
    at: [27.28, 37.53],
    what: "The city Apollo's son founded, and the home Byblis fled after her brother left the country.",
    culture: "The greatest Ionian port and colony-founder. In the poem it is a family address rather than a power: the father of the twins whose story is the poem's most thoroughgoing account of a desire nobody in it thinks is acceptable, including the person who has it.",
    books: [9], episodes: ["Byblis & Caunus"],
    figures: ["Miletus", "Byblis", "Caunus"]
  },
  {
    name: "Lycia", greek: "Lykía (Λυκία)", roman: "Lycia", kind: "region",
    at: [29.60, 36.40],
    extent: [[28.7, 36.0], [30.7, 37.1]],
    what: "Where peasants stirred up a pool with their feet rather than let a thirsty goddess drink, and became frogs in it.",
    culture: "Southern Anatolia, sheep and reed country. The story is a small one and Ovid tells it with relish: the punishment is not death but permanence — they wanted the pool, so they got it, and they are still swearing at each other from underwater.",
    books: [6], episodes: ["Latona & the Lycians"],
    figures: ["Latona", "Apollo", "Diana"]
  },
  {
    name: "Babylon", greek: "Babylôn (Βαβυλών)", roman: "Babylon", kind: "city",
    at: [44.42, 32.54],
    what: "Semiramis' brick-walled city, where two neighbours talked through a crack in a shared wall and died outside it.",
    culture: "The largest city the ancient imagination could name, and Ovid sets in it the smallest possible story: two houses, one wall, one flaw in the mortar. He ends with an aetiology anyway — the mulberry has been dark red ever since.",
    books: [4], episodes: ["Pyramus & Thisbe"],
    figures: ["Pyramus", "Thisbe"]
  },
  {
    name: "Persia", greek: "Persís (Περσίς)", roman: "Persia", kind: "region",
    at: [52.00, 32.00],
    extent: [[46.0, 26.5], [60.0, 37.5]],
    what: "Where the Sun neglected his course for Leucothoe, and her father buried her alive under a mound of sand.",
    culture: "The eastern empire, and the natural home for a story about the Sun: Persian religion made the sun a god in its own right. Ovid turns the murdered girl into the frankincense shrub, so the incense burned in temples is the same substance as the body.",
    books: [4], episodes: ["Leucothoe & Clytie"],
    figures: ["Leucothoe", "Clytie", "Sol", "Orchamus", "Venus"]
  },
  {
    name: "Arabia", greek: "Arabía (Ἀραβία)", roman: "Arabia", kind: "region",
    at: [45.00, 24.00],
    extent: [[35.0, 13.0], [56.0, 32.0]],
    what: "The nine-month wandering ground of a pregnant Myrrha, and the country the myrrh tree is named for.",
    culture: "The source of the ancient world's incense and perfume trade, and therefore of both myrrh and frankincense — the two substances this poem produces out of women. Ovid makes the luxury trade a record of two crimes.",
    books: [10], episodes: ["Myrrha", "Adonis born"],
    figures: ["Myrrha", "Cinyras", "Adonis"]
  },
  {
    name: "Egypt & the Nile", greek: "Aígyptos (Αἴγυπτος)", roman: "Aegyptus", kind: "region",
    at: [31.20, 30.05],
    extent: [[24.8, 21.8], [34.2, 31.6]],
    what: "Where Io's flight ended, where she knelt on the bank, and where she was made a woman again and then a goddess.",
    culture: "Rome's grain supply and its strangest province — animal-headed gods, and a religion Romans found both ridiculous and irresistible. Ovid identifies Io with Isis without embarrassment, and later has Isis appear in a Cretan bedroom to save a child's life.",
    books: [1, 9], episodes: ["Io", "Iphis & Ianthe"],
    figures: ["Io", "Isis", "Jupiter", "Epaphus", "Telethusa", "Iphis"]
  },
  {
    name: "Memphis", greek: "Mémphis (Μέμφις)", roman: "Memphis", kind: "city",
    at: [31.25, 29.85],
    what: "Where Io, restored and worshipped, bore Jupiter the son whose taunt begins Book II.",
    culture: "Egypt's old capital and the seat of the Apis bull — which is exactly the point, since Io arrived as a cow. Her son Epaphus was identified with Apis by Greeks and Romans alike.",
    books: [1, 2], episodes: ["Io", "Phaethon at the Sun's palace"],
    figures: ["Io", "Isis", "Epaphus", "Phaethon"]
  },
  {
    name: "Ethiopia", greek: "Aithiopía (Αἰθιοπία)", roman: "Aethiopia", kind: "region",
    at: [38.00, 15.00],
    extent: [[32.8, 7.8], [43.2, 18.2]],
    what: "The coast where Andromeda was chained to a rock to pay for her mother's boast about her own beauty.",
    culture: "The southern edge of the mapped world, and in the poem a real kingdom with a king, a queen and a court, not a blank. Its people are also the ones Ovid says were burned dark when Phaethon dropped the chariot — an aetiology he offers without endorsing.",
    books: [2, 4, 5], episodes: ["The solar chariot", "Perseus & Andromeda", "Perseus & Phineus"],
    figures: ["Andromeda", "Perseus", "Cepheus", "Cassiope", "Phineus"]
  },
  {
    name: "Libya", greek: "Libýê (Λιβύη)", roman: "Libya", kind: "region",
    at: [17.00, 27.00],
    extent: [[9.0, 19.8], [25.0, 33.0]],
    what: "The desert Perseus flew over with the Gorgon's head, whose falling blood bred the snakes still there.",
    culture: "North Africa west of Egypt, and to a Roman the archetype of drought. Ovid gives it two origins in one book: the sand is Phaethon's fault, and the serpents are Medusa's.",
    books: [2, 4], episodes: ["The solar chariot", "Perseus & Atlas"],
    figures: ["Perseus", "Medusa", "Atlas"]
  },
  {
    name: "Mount Atlas", greek: "Átlas (Ἄτλας)", roman: "Atlas", kind: "mountain",
    at: [-6.50, 31.10],
    what: "The far-western range that was a king until Perseus showed him the head, and became stone holding up the sky.",
    culture: "The last landmark before the Ocean. Ovid's transformation is a scale joke played straight: the beard becomes forests, the shoulders become ridges, and then he keeps growing until the entire sky is resting on him.",
    books: [4], episodes: ["Perseus & Atlas"],
    figures: ["Atlas", "Perseus", "Medusa"]
  },
  {
    name: "India & the Ganges", greek: "Indía (Ἰνδία)", roman: "India", kind: "region",
    at: [78.00, 25.00],
    extent: [[68.0, 19.5], [88.0, 32.0]],
    what: "The eastern limit, where the Sun rises and where Bacchus is worshipped for his conquests.",
    culture: "The furthest place the poem names, reached by Phaethon on his way to his father's palace and by Bacchus at the head of an army. It is where the world starts each morning, which is why the Palace of the Sun stands at that end of it.",
    books: [2, 4], episodes: ["Phaethon at the Sun's palace", "Cadmus & Harmonia"],
    figures: ["Phaethon", "Sol", "Bacchus / Dionysus"]
  },

  /* ------------------------------------------------------- the Asian coast */
  {
    name: "Mount Tmolus", greek: "Tmôlos (Τμῶλος)", roman: "Tmolus", kind: "mountain",
    at: [27.95, 38.50],
    what: "The Lydian mountain that judged a music contest correctly, and the one listener who disagreed got the ears he deserved.",
    culture: "A mountain sitting as umpire, with its trees pushed back out of its ears to hear better — Ovid's most cheerful piece of animate landscape. The verdict goes to Apollo, Midas objects, and Ovid delivers the punishment as a costume note: the god does not think a head that stupid should keep a human shape of ear.",
    books: [6, 11], episodes: ["Midas' ears", "Arachne & Minerva"],
    figures: ["Midas", "Apollo", "Pan", "Arachne"]
  },
  {
    name: "Claros", greek: "Kláros (Κλάρος)", roman: "Claros", kind: "oracle",
    at: [27.19, 38.00],
    what: "Apollo's oracle in Ionia — the destination Ceyx insisted on sailing to, over his wife's objection, in the wrong season.",
    culture: "One of the four sanctuaries Apollo lists when he is boasting to Cupid, and the reason for the poem's most domestic tragedy. Ceyx wants divine advice about his brother; Alcyone begs him to go by land or take her with him; he compromises by promising to be back before two moons, and Ovid lets the reader hold that promise for four hundred lines.",
    books: [1, 11], episodes: ["Ceyx's voyage", "Ceyx & Alcyone", "Apollo & Daphne"],
    figures: ["Ceyx", "Alcyone", "Apollo"]
  },
  {
    name: "Tenedos", greek: "Ténedos (Τένεδος)", roman: "Tenedos", kind: "island",
    at: [26.05, 39.82],
    what: "The island off Troy that Apollo counts among his own, and behind which a fleet can hide.",
    culture: "Named in Apollo's résumé in Book I, in the same breath as Delphi and Claros — a god listing his property to a child with a bow. By Book XIII it is a name in the ruin of a coastline: the small island every account of Troy's last night needs, because the ships have to go somewhere before they come back.",
    books: [1, 12, 13], episodes: ["Apollo & Daphne", "Fall of Troy & Polyxena"],
    figures: ["Apollo", "Achilles", "Hecuba"]
  },
  {
    name: "The Troad", greek: "Trôiás (Τρῳάς)", roman: "Troas", kind: "region",
    at: [26.60, 39.85],
    extent: [[25.9, 39.3], [27.5, 40.4]],
    what: "The country around the city: Ida above it, two rivers across it, and the beach the Greek fleet lived on for ten years.",
    culture: "The poem's largest single stage. Ovid is uninterested in the fighting and fascinated by the edges — a serpent at the embarkation, a girl sacrificed on a tomb, a queen who ends as a dog, a prince who becomes a diving bird before the war even starts. He gives the whole Iliad about a hundred lines and its aftermath nearly a book.",
    books: [11, 12, 13], episodes: ["Laomedon & Hesione", "Cygnus & Achilles", "Death of Achilles", "Fall of Troy & Polyxena", "Memnon"],
    figures: ["Priam", "Hecuba", "Achilles", "Aesacus", "Polyxena", "Memnon", "Aeneas"]
  },
  {
    name: "Cnossus & the Labyrinth", greek: "Knôsós (Κνωσός)", roman: "Cnosus", kind: "city",
    at: [25.16, 35.30],
    what: "Minos' capital, and the building put up to hide what his wife had done — a house designed so that its own architect nearly could not leave it.",
    culture: "Ovid describes the Labyrinth as a deliberate confusion of the eye, and compares it to the Maeander doubling back on itself, uncertain whether it is going toward the sea or the source. The detail that makes it terrible is administrative: the tribute arrived every ninth year, by treaty, and the third consignment included a volunteer.",
    books: [7, 8], episodes: ["The Minotaur & Labyrinth", "Daedalus & Icarus", "Scylla & Minos"],
    figures: ["Minos", "Pasiphae", "Daedalus", "Theseus", "Ariadne"]
  },
  {
    name: "Phaestus", greek: "Phaistós (Φαιστός)", roman: "Phaestus", kind: "city",
    at: [24.81, 35.05],
    what: "The Cretan town where a poor man told his wife to expose the baby if it was a girl, and she raised it as a boy for thirteen years.",
    culture: "Ovid's most sympathetic treatment of an impossible position, and one of very few episodes that ends well. Iphis' despair is argued out in full — she can find no precedent in nature, and says so — and the answer comes from a goddess rather than an argument: Isis, whose priesthood the mother had appealed to, simply changes the facts on the way home from the temple.",
    books: [9], episodes: ["Iphis & Ianthe"],
    figures: ["Iphis", "Ianthe", "Telethusa", "Isis"]
  },
  {
    name: "Caunus", greek: "Kaûnos (Καῦνος)", roman: "Caunus", kind: "city",
    at: [28.62, 36.83],
    what: "The Carian town founded by a brother who left home rather than answer his sister's letter.",
    culture: "Byblis writes the most self-deceiving document in the poem — eighty lines that begin by not naming the thing and end by naming it — sends it by a slave, and is refused. Ovid's judgement is withheld and his attention is total: she follows him across Caria and Lycia until her legs give out, and she is still crying when she becomes the spring that is still there.",
    books: [9], episodes: ["Byblis & Caunus"],
    figures: ["Byblis", "Caunus", "Miletus"]
  },
  {
    name: "Paphos", greek: "Páphos (Πάφος)", roman: "Paphos", kind: "city",
    at: [32.41, 34.76],
    what: "Venus' city on Cyprus, named after the child born to a sculptor and the statue he had asked to be given a wife like.",
    culture: "The poem's one wholly happy transformation, and it is worth noticing what it costs nobody. Pygmalion is careful in his prayer — he asks for one *like* the ivory girl, not for her — and Venus, who was at her own festival and understood, does the rest. Ovid notes the ivory softening under the thumb the way Hymettan wax does in the sun.",
    books: [10], episodes: ["Pygmalion", "Myrrha", "Adonis born"],
    figures: ["Pygmalion", "Venus", "Paphos", "Cinyras", "Myrrha"]
  },
  {
    name: "Amathus", greek: "Amathoûs (Ἀμαθοῦς)", roman: "Amathus", kind: "city",
    at: [33.14, 34.71],
    what: "The Cypriot town whose men sacrificed their guests until they were given horns, and whose women denied Venus until they could no longer blush.",
    culture: "The two stories Orpheus tells to explain why Pygmalion wanted nothing to do with women, which makes them evidence in a case rather than tales. The Propoetides are the poem's coldest transformation: they lose the ability to be ashamed, and after that the difference between them and flint is only a matter of time.",
    books: [10], episodes: ["Propoetides & Cerastae", "Pygmalion"],
    figures: ["Venus", "Pygmalion", "Orpheus"]
  },
  {
    name: "The Thracian Chersonese", greek: "Chersónêsos (Χερσόνησος)", roman: "Chersonesus", kind: "region",
    at: [26.40, 40.35],
    extent: [[26.0, 40.0], [26.9, 40.7]],
    what: "The long finger of land opposite Troy, where a queen who had lost everything found her last son washed up on the sand.",
    culture: "Hecuba's ground. She is taken as plunder, watches her daughter sacrificed on Achilles' tomb, goes to the water to wash the body, and finds her youngest son there too — murdered for gold by the ally he had been sent to for safety. Her revenge is silent and immediate, and the promontory where she was stoned kept the name the Bitch's Tomb for centuries.",
    books: [13], episodes: ["Hecuba & Polydorus", "Fall of Troy & Polyxena"],
    figures: ["Hecuba", "Polydorus", "Polyxena", "Polymestor", "Priam"]
  }
];
