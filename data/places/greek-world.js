/*
 * The gazetteer, part one: Greece, the Aegean, and the north.
 *
 * Every entry is a place the poem actually names. `at` is real longitude and
 * latitude — the map is a portolan chart in its manners, not in its geometry,
 * and a reader who checks it against an atlas should find it honest.
 *
 * Fields:
 *   name     the moniker the interface uses
 *   greek    / roman — the two registers, matching the figure gazetteer
 *   kind     city | region | mountain | river | island | sea | oracle | strait
 *   at       [longitude, latitude]
 *   what     what the place is, in a sentence
 *   culture  who lived there and what they were known for
 *   books    book numbers it figures in
 *   episodes episode titles, matching the poem's own titles
 *   figures  the figures the poem attaches to it
 */

export const GREEK_WORLD = [
  {
    name: "Thebes", greek: "Thêbai (Θῆβαι)", roman: "Thebae", kind: "city",
    at: [23.32, 38.32],
    what: "The seven-gated city Cadmus founded where a cow lay down, built by men who grew out of a dragon's teeth.",
    culture: "A Boeotian citadel with a Phoenician founder and a Greek myth of autochthony — its nobles claimed descent from the Sown Men, soldiers who came out of the ground already armed. Ovid makes it the poem's first tragic house: four books of Thebes end with every branch of Cadmus' family destroyed.",
    books: [3, 4, 6], episodes: ["Cadmus & the dragon", "Actaeon", "Semele", "Tiresias", "Pentheus & Bacchus", "Athamas & Ino", "Niobe"],
    figures: ["Cadmus", "Harmonia", "Pentheus", "Agave", "Semele", "Tiresias", "Niobe", "Amphion", "Ino", "Athamas"]
  },
  {
    name: "Mount Cithaeron", greek: "Kithairôn (Κιθαιρών)", roman: "Cithaeron", kind: "mountain",
    at: [23.26, 38.19],
    what: "The wooded mountain above Thebes where the god's rites were held and Pentheus was torn apart on them.",
    culture: "Boeotia's boundary range and its standing wild place — where Theban women went to worship Bacchus away from the city, and where a Theban king who followed them did not come back.",
    books: [3], episodes: ["Actaeon", "Pentheus & Bacchus"],
    figures: ["Pentheus", "Agave", "Autonoe", "Ino", "Actaeon", "Bacchus / Dionysus"]
  },
  {
    name: "Athens", greek: "Athênai (Ἀθῆναι)", roman: "Athenae", kind: "city",
    at: [23.73, 37.98],
    what: "Minerva's city, where Theseus arrives unrecognised and is nearly poisoned by his father's wife.",
    culture: "The poem treats Athens as the seat of craft and of law — Minerva's olive won it from Neptune, and it is the city that sends tribute to the Minotaur and then stops. Its royal house supplies Procne, Philomela and Orithyia, and its worst stories are all marriages.",
    books: [2, 6, 7, 8], episodes: ["Battus & Aglauros", "Tereus, Procne & Philomela", "Boreas & Orithyia", "Aegeus & Theseus", "Calydonian Boar Hunt"],
    figures: ["Theseus", "Aegeus", "Medea", "Procne", "Philomela", "Minerva", "Aglauros", "Herse"]
  },
  {
    name: "Eleusis", greek: "Eleusís (Ἐλευσίς)", roman: "Eleusis", kind: "city",
    at: [23.54, 38.04],
    what: "The town where Ceres, searching for her daughter, was given barley-water by an old woman and mocked for drinking it.",
    culture: "Home of the Mysteries — the most famous initiation cult in the Greek world, built on exactly the story Ovid is telling: a mother, a stolen daughter, and the grain that stops and starts again. Ovid keeps the myth and leaves the ritual alone.",
    books: [5], episodes: ["Pluto & Proserpina", "Triptolemus & Lyncus"],
    figures: ["Ceres", "Proserpina", "Triptolemus"]
  },
  {
    name: "Delphi", greek: "Delphoí (Δελφοί)", roman: "Delphi", kind: "oracle",
    at: [22.50, 38.48],
    what: "Apollo's oracle at the foot of Parnassus, won by killing the Python that lay across it.",
    culture: "The Greek world's navel — the omphalos stone marked the point where two eagles released from opposite ends of the earth met. Every consultation in the poem that goes through Delphi is answered in a riddle, and every riddle has to be interpreted rather than obeyed.",
    books: [1, 3, 11], episodes: ["Deucalion & Pyrrha", "Apollo & Daphne", "Cadmus & the dragon", "Midas' ears"],
    figures: ["Apollo", "Themis", "Deucalion", "Pyrrha", "Cadmus"]
  },
  {
    name: "Mount Parnassus", greek: "Parnassós (Παρνασσός)", roman: "Parnasus", kind: "mountain",
    at: [22.62, 38.53],
    what: "The twin-peaked mountain whose summit stayed above the Flood, and where the last two people alive came ashore.",
    culture: "Sacred to Apollo and the Muses together. In Ovid it does the work an ark does elsewhere: the one point of land left when the sea has taken everything, and therefore the place the second human race begins.",
    books: [1, 2, 11], episodes: ["The Great Flood", "Deucalion & Pyrrha"],
    figures: ["Deucalion", "Pyrrha", "Apollo"]
  },
  {
    name: "Mount Helicon", greek: "Helikôn (Ἑλικών)", roman: "Helicon", kind: "mountain",
    at: [22.87, 38.34],
    what: "The Muses' mountain, with the spring Pegasus opened by striking the rock with his hoof.",
    culture: "The address of poetry itself: Hesiod met the Muses here, and Ovid sends Minerva up to inspect the fountain and hear the Muses complain about singing contests. The whole of Book V's inner song is told on this mountain.",
    books: [5], episodes: ["Pyreneus & the Muses", "Pierides & Muses", "Pluto & Proserpina"],
    figures: ["Minerva", "Calliope", "Urania"]
  },
  {
    name: "Aulis", greek: "Aulís (Αὐλίς)", roman: "Aulis", kind: "city",
    at: [23.60, 38.40],
    what: "The strait where the Greek fleet lay windbound until Agamemnon gave up his daughter at the altar.",
    culture: "A muster point rather than a city — the narrow water between Boeotia and Euboea where a thousand ships waited on a goddess's temper. Ovid spends more lines on the omen of the snake and the birds than on the sacrifice itself.",
    books: [12], episodes: ["Aulis, the serpent, and Iphigenia"],
    figures: ["Agamemnon", "Iphigenia", "Calchas", "Diana"]
  },
  {
    name: "Argos", greek: "Árgos (Ἄργος)", roman: "Argos", kind: "city",
    at: [22.73, 37.63],
    what: "Juno's own city, and the country Jupiter covered in daylight darkness to hide what he was doing in it.",
    culture: "The oldest kingship in the Greek myths and Juno's favourite seat, which is precisely why Jupiter's assault on the river-god's daughter there is such an insult. Argos also exiles Myscelus for emigrating, and pardons him when the ballot changes colour.",
    books: [1, 15], episodes: ["Io", "Myscelus & Croton"],
    figures: ["Io", "Inachus", "Juno", "Jupiter", "Argus", "Myscelus"]
  },
  {
    name: "Mycenae", greek: "Mykênai (Μυκῆναι)", roman: "Mycenae", kind: "city",
    at: [22.76, 37.73],
    what: "Agamemnon's citadel, named by Pythagoras among the great powers that have already fallen.",
    culture: "In the poem's last book Mycenae is evidence rather than a setting: Pythagoras lists it with Troy and Sparta as a city that was once everything and is now a name, to argue that Rome's turn will come too.",
    books: [12, 15], episodes: ["Pythagoras"],
    figures: ["Agamemnon", "Pythagoras"]
  },
  {
    name: "Epidaurus", greek: "Epídauros (Ἐπίδαυρος)", roman: "Epidaurus", kind: "oracle",
    at: [23.08, 37.63],
    what: "Aesculapius' healing sanctuary, which Rome sent an embassy to and left carrying a serpent.",
    culture: "The ancient world's most famous hospital: the sick slept in the precinct and were treated according to what they dreamed. Its god really did travel to Rome after a plague, and the temple on the Tiber island really was built for him — Ovid is retelling documented history as metamorphosis.",
    books: [15], episodes: ["Aesculapius comes to Rome"],
    figures: ["Aesculapius", "Apollo"]
  },
  {
    name: "Sparta & Amyclae", greek: "Spártê (Σπάρτη)", roman: "Sparta", kind: "city",
    at: [22.43, 37.07],
    what: "The Laconian city where Apollo's discus killed Hyacinthus, and where the festival for him is still kept.",
    culture: "Ovid is interested in Sparta only as the place that remembers: the Hyacinthia was a real Spartan festival, and he ends the story by pointing at it — the boy became a flower, and the flower became a public holiday that was still on the calendar when he wrote.",
    books: [10, 15], episodes: ["Hyacinthus", "Pythagoras"],
    figures: ["Hyacinthus", "Apollo"]
  },
  {
    name: "Troezen", greek: "Troizên (Τροιζήν)", roman: "Troezen", kind: "city",
    at: [23.34, 37.51],
    what: "Theseus' birthplace, where his father left a sword under a rock for a son who could lift it.",
    culture: "A small Argolid city whose whole role in the poem is a token — the ivory-hilted sword that stops Aegeus' hand at the last instant. Achelous later entertains Theseus here on his way home from Calydon.",
    books: [7, 8], episodes: ["Aegeus & Theseus", "Achelous & Hercules"],
    figures: ["Theseus", "Aegeus"]
  },
  {
    name: "Corinth", greek: "Kórinthos (Κόρινθος)", roman: "Ephyre", kind: "city",
    at: [22.93, 37.94],
    what: "Where Medea burned Jason's new bride and killed her own two sons, dispatched by Ovid in a single line.",
    culture: "The isthmus city, rich and cosmopolitan. Ovid's refusal to dwell here is deliberate: Euripides had already written the definitive Corinthian Medea, so Ovid gives it one line and spends eighty on her flying over Greece instead.",
    books: [7], episodes: ["Medea's flight"],
    figures: ["Medea", "Jason"]
  },
  {
    name: "Arcadia", greek: "Arkadía (Ἀρκαδία)", roman: "Arcadia", kind: "region",
    at: [22.15, 37.60],
    extent: [[21.6, 37.1], [22.7, 38.1]],
    what: "The mountain interior where Lycaon served his cannibal dinner, Callisto was hunted, and Syrinx became a set of pipes.",
    culture: "The oldest and roughest part of Greece, whose people claimed to predate the moon. In Ovid it is not yet the gentle pastoral of later poetry — it is a country of wolves, rustic gods and unprotected girls, and the poem's very first metamorphosis happens here.",
    books: [1, 2, 5, 8], episodes: ["Lycaon", "Pan & Syrinx", "Callisto", "Arethusa & Alpheus", "Calydonian Boar Hunt"],
    figures: ["Lycaon", "Callisto", "Arcas", "Pan", "Syrinx", "Atalanta", "Arethusa"]
  },
  {
    name: "Mount Lycaeus", greek: "Lýkaion (Λύκαιον)", roman: "Lycaeus", kind: "mountain",
    at: [21.97, 37.46],
    what: "The Arcadian peak Syrinx was coming down from when Pan saw her.",
    culture: "The mountain of Zeus Lykaios, whose rites carried an old rumour of human sacrifice and of men who became wolves for nine years — the tradition standing directly behind Lycaon's punishment.",
    books: [1], episodes: ["Pan & Syrinx", "Lycaon"],
    figures: ["Syrinx", "Pan", "Lycaon"]
  },
  {
    name: "Calydon", greek: "Kalydôn (Καλυδών)", roman: "Calydon", kind: "city",
    at: [21.55, 38.38],
    what: "The Aetolian city whose king forgot Diana's altar and got a boar the size of a bull.",
    culture: "The setting for the last great heroic hunt before Troy, and Ovid stages it as a catalogue of Greece's finest killing each other's chances. It ends not with the boar but with a family: an aunt-slaying nephew, a mother burning a log, and a house extinguished.",
    books: [8, 9], episodes: ["Calydonian Boar Hunt", "Meleager & Althaea", "Achelous & Hercules"],
    figures: ["Meleager", "Althaea", "Atalanta", "Oeneus", "Deianira", "Achelous"]
  },
  {
    name: "Thessaly & Tempe", greek: "Thessalía (Θεσσαλία)", roman: "Thessalia", kind: "region",
    at: [22.42, 39.62],
    extent: [[21.5, 38.9], [23.3, 40.2]],
    what: "The wide plain the Peneus runs through — Daphne's country, Medea's herb-gathering ground, and the Lapiths' home.",
    culture: "Ancient Greece's byword for witchcraft and for horses. Ovid uses it for both: Medea flies over it collecting roots by moonlight, and the wedding that turns into the battle of Lapiths and Centaurs is a Thessalian one.",
    books: [1, 7, 8, 12], episodes: ["Apollo & Daphne", "Aeson rejuvenated", "Erysichthon & Mestra", "Centauromachy", "Caenis / Caeneus"],
    figures: ["Daphne", "Peneus", "Apollo", "Medea", "Aeson", "Erysichthon", "Mestra", "Caenis / Caeneus"]
  },
  {
    name: "Iolcus", greek: "Iôlkós (Ἰωλκός)", roman: "Iolcos", kind: "city",
    at: [22.94, 39.36],
    what: "The port the Argo sailed from and came back to, where Medea boiled a ram into a lamb to prove a point.",
    culture: "A Thessalian harbour whose royal quarrel — Pelias holding a throne that belongs to Jason's line — sets the whole Argonautic voyage in motion, and whose resolution is the coldest murder in the poem: daughters killing their father because they were shown a trick.",
    books: [7], episodes: ["Aeson rejuvenated", "Pelias", "The dragon & Golden Fleece"],
    figures: ["Jason", "Medea", "Aeson", "Pelias"]
  },
  {
    name: "Mount Olympus", greek: "Ólympos (Ὄλυμπος)", roman: "Olympus", kind: "mountain",
    at: [22.35, 40.09],
    what: "The gods' seat, which Ovid describes as a heavenly Palatine with the lesser divinities housed off the main road.",
    culture: "Ovid's most pointed joke: he renders the Greek Olympus as Augustan Rome, with a Milky Way for a main street, atria for the great gods and side-streets for the rest. The gods hold a senate, and Jupiter presides like a princeps.",
    books: [1, 2], episodes: ["Lycaon", "The Great Flood"],
    figures: ["Jupiter", "Juno", "Mars", "Minerva", "Apollo"]
  },
  {
    name: "Mount Oeta", greek: "Oítê (Οἴτη)", roman: "Oeta", kind: "mountain",
    at: [22.30, 38.80],
    what: "Where Hercules built his own pyre, spread the lion skin on it, and lay down as if at a banquet.",
    culture: "The place a mortal stopped being one. Ovid's account is precise about the mechanism: the fire takes everything Hercules had from his mother, and what belongs to his father is carried up and set among the stars.",
    books: [9], episodes: ["Death of Hercules"],
    figures: ["Hercules", "Philoctetes", "Jupiter", "Deianira"]
  },
  {
    name: "Trachis", greek: "Trachís (Τραχίς)", roman: "Trachin", kind: "city",
    at: [22.55, 38.80],
    what: "Ceyx's peaceful kingdom, and the shore where Alcyone waited for a ship that had already broken up.",
    culture: "The one court in the poem described as quiet and well governed — which is exactly why Ovid ruins it. Peleus takes refuge here with blood on his hands, and the king who shelters him drowns going to ask an oracle why his own house is unlucky.",
    books: [11], episodes: ["Peleus & Psamathe", "Ceyx's voyage", "Ceyx & Alcyone"],
    figures: ["Ceyx", "Alcyone", "Peleus"]
  },
  {
    name: "Aegina", greek: "Aígina (Αἴγινα)", roman: "Aegina", kind: "island",
    at: [23.43, 37.75],
    extent: [[23.35, 37.65], [23.52, 37.82]],
    what: "The island Juno emptied with a plague and Jupiter refilled by turning a column of ants into men.",
    culture: "Ovid gives the plague a clinical, un-mythic register — dogs and cattle first, then bodies in the roads and no room on the pyres — and then the strangest consolation in the poem: a people bred from insects who keep the ants' thrift, toughness and patience. They become Achilles' Myrmidons.",
    books: [7], episodes: ["Aeacus & the Myrmidons"],
    figures: ["Aeacus", "Cephalus", "Juno", "Jupiter"]
  },
  {
    name: "Delos", greek: "Dêlos (Δῆλος)", roman: "Delos", kind: "island",
    at: [25.27, 37.39],
    what: "The floating island that stopped moving to let Latona give birth, and where Aeneas is entertained on his way west.",
    culture: "Apollo's birthplace and the Aegean's sacred centre — an island so holy that nobody was permitted to be born or to die on it. Its priest-king Anius gives Aeneas guest-gifts and the story of four daughters who could turn anything into corn, wine and oil.",
    books: [3, 6, 13], episodes: ["Aeneas' departure & Oenotrophi"],
    figures: ["Latona", "Apollo", "Diana", "Anius", "Aeneas"]
  },
  {
    name: "Naxos", greek: "Náxos (Νάξος)", roman: "Naxos", kind: "island",
    at: [25.44, 37.07],
    what: "Where Theseus left Ariadne asleep, where Bacchus found her, and where the pirates never arrived.",
    culture: "The largest Cycladic island and Bacchus' own. Ovid attaches both his Bacchic set-pieces to it: the crew who tried to steer past it and became dolphins, and the abandoned princess whose crown was thrown into the sky as a constellation.",
    books: [3, 8], episodes: ["Tyrrhenian pirates", "The Minotaur & Labyrinth"],
    figures: ["Bacchus / Dionysus", "Ariadne", "Theseus", "Acoetes"]
  },
  {
    name: "Chios", greek: "Chíos (Χίος)", roman: "Chios", kind: "island",
    at: [26.14, 38.37],
    what: "Where the Tyrrhenian sailors put in for water and came back aboard with a beautiful, unsteady boy.",
    culture: "A wine island — which is the joke. The crew pick up a drunk-looking youth on the most famous wine-producing coast in the Aegean and cannot work out what they are holding until vines are climbing their own mast.",
    books: [3], episodes: ["Tyrrhenian pirates"],
    figures: ["Bacchus / Dionysus", "Acoetes"]
  },
  {
    name: "Euboea & Cenaeum", greek: "Eúboia (Εὔβοια)", roman: "Euboea", kind: "island",
    at: [23.30, 38.60],
    extent: [[22.9, 37.9], [24.6, 39.1]],
    what: "The headland where Hercules put on the poisoned shirt to make his thank-offering to Jupiter.",
    culture: "The long island shadowing the Greek mainland. Its Cenaean cape is where a victory sacrifice becomes an execution — and where the servant Lichas, thrown into the sea, hardens in mid-air into a rock sailors will not step on.",
    books: [9], episodes: ["Death of Hercules"],
    figures: ["Hercules", "Lichas", "Iole"]
  },
  {
    name: "Crete", greek: "Krêtê (Κρήτη)", roman: "Creta", kind: "island",
    at: [24.81, 35.24],
    extent: [[23.4, 34.7], [26.4, 35.8]],
    what: "Minos' kingdom: the Labyrinth, the Minotaur, Daedalus' workshop, and the temple where Iphis changed sex.",
    culture: "The poem's engineering state. Everything Cretan in Ovid is built — a maze designed to defeat its own designer, wings assembled from feathers and wax, a wooden cow. It is also the one place where a prayer to an Egyptian goddess is answered without irony.",
    books: [7, 8, 9], episodes: ["The Minotaur & Labyrinth", "Daedalus & Icarus", "Scylla & Minos", "Iphis & Ianthe"],
    figures: ["Minos", "Pasiphae", "Daedalus", "Icarus", "Ariadne", "Iphis", "Ianthe", "Telethusa"]
  },
  {
    name: "Cyprus", greek: "Kýpros (Κύπρος)", roman: "Cyprus", kind: "island",
    at: [33.00, 35.00],
    extent: [[32.2, 34.5], [34.7, 35.8]],
    what: "Venus' island: Pygmalion's workshop, the Propoetides' hardening, Myrrha's crime, and Adonis' birth out of a tree.",
    culture: "Where Venus came ashore, and therefore the island where every story is about desire going right or catastrophically wrong. Ovid packs four of them into Orpheus' song, and they run from a statue coming alive to a daughter in her father's bed — the same appetite, differently aimed.",
    books: [10, 14], episodes: ["Propoetides & Cerastae", "Pygmalion", "Myrrha", "Adonis born", "Iphis & Anaxarete"],
    figures: ["Venus", "Pygmalion", "Myrrha", "Cinyras", "Adonis", "Anaxarete"]
  },
  {
    name: "Lesbos & the Hebrus mouth", greek: "Lésbos (Λέσβος)", roman: "Lesbos", kind: "island",
    at: [26.20, 39.20],
    extent: [[25.8, 38.9], [26.7, 39.5]],
    what: "Where the river carried Orpheus' head and lyre, still singing, and the banks answered.",
    culture: "The island that became the home of Greek lyric. Ovid does not say so directly — he simply floats the first poet's head downriver to its shore and lets the reader make the connection about where song went next.",
    books: [11], episodes: ["Death of Orpheus"],
    figures: ["Orpheus", "Eurydice"]
  },
  {
    name: "Thrace", greek: "Thrákê (Θρᾴκη)", roman: "Thracia", kind: "region",
    at: [25.50, 41.50],
    extent: [[23.4, 40.4], [28.6, 42.6]],
    what: "Tereus' kingdom and Orpheus' — the country where the tongue is cut out and the singer is torn apart.",
    culture: "To a Greek or Roman, the near barbarian north: horse country, cold, and Bacchic. Ovid gives it his two most violent stories and lets them rhyme — one woman silenced and answering in weaving, one man silenced and answering in a river.",
    books: [6, 11, 13], episodes: ["Tereus, Procne & Philomela", "Boreas & Orithyia", "Death of Orpheus", "Hecuba & Polydorus"],
    figures: ["Tereus", "Procne", "Philomela", "Orpheus", "Boreas", "Orithyia", "Hecuba", "Polymestor"]
  },
  {
    name: "Mount Rhodope", greek: "Rhodópê (Ῥοδόπη)", roman: "Rhodope", kind: "mountain",
    at: [24.60, 41.60],
    what: "The bare Thracian hill where Orpheus sat down with his lyre and the trees came to him.",
    culture: "Ovid's stage for the only concert in the poem: a hill with no shade at all until twenty-six species of tree walk up and make a wood. Everything in Book X is sung from this spot.",
    books: [10, 11], episodes: ["Orpheus' audience", "Death of Orpheus"],
    figures: ["Orpheus"]
  },
  {
    name: "Scythia", greek: "Skythía (Σκυθία)", roman: "Scythia", kind: "region",
    at: [34.00, 47.00],
    extent: [[28.0, 43.5], [50.0, 50.5]],
    what: "The frozen waste where Famine lives among the stones, and where a king tried to murder the man who brought agriculture.",
    culture: "The edge of the known world to the north — treeless, cropless, and therefore the only address at which Ceres could find Hunger. Ovid will not send Ceres in person; the two cannot be in the same place.",
    books: [8, 5], episodes: ["Erysichthon & Mestra", "Triptolemus & Lyncus"],
    figures: ["Ceres", "Erysichthon", "Triptolemus", "Lyncus"]
  },
  {
    name: "Colchis & the Phasis", greek: "Kolchís (Κολχίς)", roman: "Colchis", kind: "region",
    at: [41.67, 42.25],
    extent: [[39.9, 41.4], [43.1, 43.3]],
    what: "The far end of the Black Sea, where the Golden Fleece hung on an oak guarded by a sleepless dragon.",
    culture: "The eastern limit of Greek seafaring and the home of the sun-god's granddaughter. Its king sets tasks meant to kill, and its princess supplies the drugs that defeat them — the poem's longest study of somebody choosing the worse course while seeing the better.",
    books: [7], episodes: ["Jason & Medea", "The dragon & Golden Fleece"],
    figures: ["Medea", "Jason", "Aeetes"]
  },
  {
    name: "Tomis", greek: "Tómis (Τόμις)", roman: "Tomis", kind: "city",
    at: [28.65, 44.17],
    what: "The Black Sea town Augustus banished Ovid to, eight years after the poem was finished.",
    culture: "Not named in the Metamorphoses — the poem was complete before the exile. It is on this chart because the epilogue's claim is tested here: Ovid wrote that wherever Roman power reached he would be read, and then spent his last decade at the far edge of it, writing letters home that survived too.",
    books: [15], episodes: ["Ovid's epilogue"],
    figures: ["Ovid's narrator", "Augustus"]
  },

  /* ------------------------------------------------ the provinces of Greece */
  {
    name: "Attica", greek: "Attikế (Ἀττική)", roman: "Attica", kind: "region",
    at: [23.70, 38.05],
    extent: [[23.0, 37.6], [24.2, 38.4]],
    what: "Athens' own country: the olive, the Marathonian bull, the mysteries at Eleusis, and a north wind who came down to steal a princess.",
    culture: "A small, poor, rocky triangle that produced the poem's most self-satisfied city. Ovid gives Attica the story of its own naming — the contest of Minerva and Neptune, woven into a tapestry — and then spends most of his Athenian books on things that go wrong inside families: a jealous sister, a poisoned cup, a husband testing a wife until she fails.",
    books: [2, 6, 7, 8], episodes: ["Battus & Aglauros", "Boreas & Orithyia", "Aegeus & Theseus", "Cephalus & Procris"],
    figures: ["Minerva", "Cecrops", "Aglauros", "Erechtheus", "Orithyia", "Theseus", "Cephalus", "Procris"]
  },
  {
    name: "Boeotia", greek: "Boiôtía (Βοιωτία)", roman: "Boeotia", kind: "region",
    at: [23.20, 38.38],
    extent: [[22.7, 38.0], [23.7, 38.8]],
    what: "Thebes' country, and the poem's unluckiest: four books of one family destroyed branch by branch, with a spring of poetry on the hill above.",
    culture: "Ovid's Boeotia is a landscape of consequences. Cadmus sows dragon's teeth here and the crop kills itself; Actaeon takes a wrong turning in a valley here; Narcissus finds a pool; Athamas throws his own son. The Muses' mountain stands over all of it, which is a placement the poem does not comment on and does not need to.",
    books: [2, 3, 4, 5, 6], episodes: ["Cadmus & the dragon", "Actaeon", "Echo & Narcissus", "The Minyades", "Athamas & Ino", "Niobe"],
    figures: ["Cadmus", "Actaeon", "Narcissus", "Echo", "Pentheus", "Ino", "Athamas", "Niobe"]
  },
  {
    name: "Argolis", greek: "Argolís (Ἀργολίς)", roman: "Argolis", kind: "region",
    at: [22.80, 37.55],
    extent: [[22.4, 37.2], [23.4, 38.0]],
    what: "The plain of Argos and Mycenae — Io's country, Perseus' inheritance, and the ground the doctor-god was fetched from to save Rome.",
    culture: "The oldest heartland of Greek legend and, in the poem, the place people leave: Io driven out by a gadfly, Perseus born in a box on the sea, Myscelus sailing west under orders from Hercules to found Croton. Argolis is where the poem's families begin and almost never where they end.",
    books: [1, 4, 5, 9, 15], episodes: ["Io", "Perseus & Phineus", "Iolaus & the sons of Callirhoe", "Myscelus & Croton"],
    figures: ["Io", "Inachus", "Perseus", "Danae", "Acrisius", "Myscelus", "Aesculapius"]
  },
  {
    name: "Aetolia", greek: "Aitôlía (Αἰτωλία)", roman: "Aetolia", kind: "region",
    at: [21.50, 38.50],
    extent: [[21.0, 38.2], [22.2, 38.9]],
    what: "Calydon's country: a boar the size of a bull, a hunt that turns on a woman, and a mother with a log and a fire.",
    culture: "Rough, wooded, and full of rivers that are also people — the Achelous at one edge and the Evenus at the other, both of whom lose fights in this poem. Ovid's Aetolia is where heroic company is shown at its worst: a famous hunting party that mostly injures itself, and a prize awarded for reasons everyone present can see.",
    books: [8, 9], episodes: ["Calydonian Boar Hunt", "Meleager & Althaea", "Achelous & Hercules", "Nessus & Deianira"],
    figures: ["Meleager", "Atalanta", "Althaea", "Oeneus", "Achelous", "Deianira", "Hercules"]
  },
  {
    name: "Elis & Olympia", greek: "Êlis (Ἦλις)", roman: "Elis", kind: "region",
    at: [21.55, 37.68],
    extent: [[21.1, 37.4], [22.1, 38.1]],
    what: "The country of the great river and the great games, where a huntress bathing in the Alpheus was seen and had to run.",
    culture: "Sacred ground in a way the rest of Greece agreed on: a truce was called across the Greek world for the festival held here. Ovid uses it for something quieter and worse — the moment a girl realises the water she is cooling off in has a voice, and that the voice is directly behind her.",
    books: [2, 5, 6], episodes: ["Arethusa & Alpheus", "Pelops"],
    figures: ["Arethusa", "Alpheus", "Pelops", "Diana"]
  },
  {
    name: "Phocis & Daulis", greek: "Phôkís (Φωκίς)", roman: "Phocis", kind: "region",
    at: [22.62, 38.55],
    extent: [[22.1, 38.2], [23.1, 38.9]],
    what: "The country Delphi stands in — fertile land while it was land — and the woods where a sister was locked in a hut with her tongue cut out.",
    culture: "Ovid names Phocis at the Flood as a place that was fertile ground when ground existed, which is the whole method of that book in one clause. Later it supplies the setting for the poem's most extreme violence: Tereus' hut in the forest, the loom that reports the crime without speaking, and the meal that answers it.",
    books: [1, 6], episodes: ["The Great Flood", "Deucalion & Pyrrha", "Tereus, Procne & Philomela"],
    figures: ["Deucalion", "Pyrrha", "Tereus", "Procne", "Philomela", "Itys"]
  },
  {
    name: "Pieria", greek: "Pieria (Πιερία)", roman: "Pieria", kind: "region",
    at: [22.40, 40.30],
    extent: [[22.0, 40.0], [22.9, 40.7]],
    what: "The Muses' own country at the foot of Olympus, and the home of nine sisters vain enough to challenge them to a singing match.",
    culture: "The Pierides' story is the poem's clearest statement about art and power. They sing the gods fleeing to Egypt in animal shapes — an accurate and unflattering account — and lose to a song about Ceres. Then they are turned into magpies, and Ovid notes that they kept their fluency, which in a magpie is the whole insult.",
    books: [5], episodes: ["Pierides & Muses", "Pluto & Proserpina"],
    figures: ["Calliope", "Urania", "Minerva"]
  },
  {
    name: "Phthia", greek: "Phthía (Φθία)", roman: "Phthia", kind: "city",
    at: [22.35, 39.05],
    what: "Peleus' kingdom, where a man who married a sea-goddess raised the son who would outlive his own name.",
    culture: "The smallest famous kingdom in Greek legend, and the poem treats it as a place a man retires to in disgrace: Peleus arrives having killed his half-brother, is purified by a stranger, and immediately loses his herds to a wolf. Ovid is not interested in Achilles' upbringing; he is interested in a father who had to be forgiven twice before the hero could exist.",
    books: [11, 12], episodes: ["Peleus & Thetis", "Peleus & Psamathe", "Death of Achilles"],
    figures: ["Peleus", "Thetis", "Achilles", "Psamathe", "Ceyx"]
  },
  {
    name: "Megara", greek: "Mégara (Μέγαρα)", roman: "Megara", kind: "city",
    at: [23.34, 37.99],
    what: "The city whose king had one purple hair holding up his kingdom, and one daughter who cut it off for a man who was disgusted.",
    culture: "On the isthmus, therefore permanently in someone's way. Ovid's Scylla is the poem's most uncomfortable study of infatuation reasoning with itself: a long soliloquy in which she talks herself past treason, her father and her city, wins nothing, and is dragged through the sea behind the ship of the man she betrayed them for.",
    books: [7, 8], episodes: ["Scylla & Minos", "Medea's flight"],
    figures: ["Scylla", "Nisus", "Minos", "Medea"]
  },
  {
    name: "Marathon", greek: "Marathốn (Μαραθών)", roman: "Marathon", kind: "city",
    at: [23.96, 38.15],
    what: "The plain with the bull on it that Hercules brought from Crete and nobody since had managed to kill.",
    culture: "Famous later for an entirely different reason. In the poem it is one line in Theseus' résumé — the list a father recites, with growing relief, of everything his newly recognised son had already done before either of them knew who the other was. The list is the reconciliation.",
    books: [7], episodes: ["Aegeus & Theseus"],
    figures: ["Theseus", "Aegeus", "Medea"]
  },
  {
    name: "Pylos", greek: "Pýlos (Πύλος)", roman: "Pylos", kind: "city",
    at: [21.70, 36.91],
    what: "Nestor's city, sacked by Hercules — which is why the old man tells the Greek camp a very long story and leaves one brother out of it.",
    culture: "Ovid's finest study of a narrator with an agenda. Nestor spends a whole night on the battle of Lapiths and Centaurs, and when challenged about omitting Hercules he admits it freely: the man killed eleven of his brothers, and he will praise anyone else. The Metamorphoses' longest battle scene is framed by a grudge.",
    books: [2, 12], episodes: ["Periclymenus", "Centauromachy", "Battus & Aglauros"],
    figures: ["Nestor", "Periclymenus", "Hercules", "Neptune"]
  },

  /* ----------------------------------------------------- mountains and gates */
  {
    name: "Mount Pelion", greek: "Pếlion (Πήλιον)", roman: "Pelion", kind: "mountain",
    at: [23.10, 39.40],
    what: "Chiron's mountain: piled on Ossa by giants, cut for the Argo, and the scene of the worst wedding reception in the poem.",
    culture: "The most productive mountain in Greek legend. The centaur who taught medicine to Aesculapius and manners to Achilles lived on it; the ship that opened the Black Sea was cut from its timber; and Peleus' marriage to a sea-goddess was celebrated in a cave here, from which the poem eventually gets the Trojan War.",
    books: [1, 2, 7, 11, 12], episodes: ["Coronis & Ocyroe", "Peleus & Thetis", "Centauromachy", "Medea's flight"],
    figures: ["Chiron", "Ocyroe", "Peleus", "Thetis", "Achilles", "Jason"]
  },
  {
    name: "Mount Ossa", greek: "Óssa (Ὄσσα)", roman: "Ossa", kind: "mountain",
    at: [22.68, 39.80],
    what: "The middle mountain of the three the giants stacked to reach heaven, and the one Jupiter's bolt knocked off first.",
    culture: "Ovid's giants are engineers rather than monsters: they do not fight the sky, they build toward it, and the whole rebellion is described as masonry. Their blood soaks the ground and produces a race of men who despise the gods, which is Ovid's way of saying that a defeated idea does not stop existing.",
    books: [1, 2, 7], episodes: ["The Four Ages", "Medea's flight", "The solar chariot"],
    figures: ["Jupiter", "Medea"]
  },
  {
    name: "Mount Pindus", greek: "Píndos (Πίνδος)", roman: "Pindus", kind: "mountain",
    at: [21.20, 39.70],
    what: "The long range down the spine of northern Greece, catching fire with everything else.",
    culture: "The watershed that decides which side of Greece a river runs down. Ovid puts it in the burning catalogue and again under Medea's chariot — the two passages in the poem that survey Greece from the air, one destroying it and one merely passing over.",
    books: [2, 7], episodes: ["The solar chariot", "Medea's flight"],
    figures: ["Phaethon", "Medea"]
  },
  {
    name: "Mount Othrys", greek: "Óthrys (Ὄθρυς)", roman: "Othrys", kind: "mountain",
    at: [22.55, 39.03],
    what: "The Titans' old stronghold south of Thessaly's plain, in the fire and under the serpent chariot.",
    culture: "The mountain the older gods held during the war with the Olympians — the losing side's headquarters. Ovid does not tell that war, which is a decision worth noticing in a poem that begins with the Four Ages: the coup that installed Jupiter happens between two lines, and everything afterwards is his administration.",
    books: [2, 7], episodes: ["The solar chariot", "Medea's flight"],
    figures: ["Saturn", "Jupiter", "Medea"]
  },
  {
    name: "Mount Cyllene", greek: "Kyllếnê (Κυλλήνη)", roman: "Cyllene", kind: "mountain",
    at: [22.28, 37.95],
    what: "Mercury's birthplace in northern Arcadia, and the country he was crossing with stolen cattle when a farmhand promised twice not to tell.",
    culture: "The second-highest mountain in the Peloponnese and the home of the poem's most casually cruel god. The Battus episode is a sting operation: Mercury takes the man's oath, comes back in another shape, offers a better bribe, gets the confession, and turns him into the stone that still bears the name of a snitch.",
    books: [1, 2, 7, 11], episodes: ["Battus & Aglauros", "Pan & Syrinx", "Medea's flight"],
    figures: ["Mercury", "Battus", "Pan", "Argus"]
  },
  {
    name: "Mount Athos", greek: "Áthôs (Ἄθως)", roman: "Athos", kind: "mountain",
    at: [24.22, 40.16],
    what: "The peninsula-mountain standing out of the north Aegean, alight in Phaethon's catalogue.",
    culture: "A landmark to every ship in the northern Aegean and a byword for a mountain that goes straight into deep water. Ovid's fire catalogue works by naming things that cannot burn — a sea-cliff, a snow range, a river — and then burning them, so that the reader's sense of what is fixed is dismantled item by item.",
    books: [2], episodes: ["The solar chariot"],
    figures: ["Phaethon", "Sol"]
  },
  {
    name: "Mount Haemus", greek: "Haîmos (Αἷμος)", roman: "Haemus", kind: "mountain",
    at: [25.50, 42.75],
    what: "The Thracian range that was once a king, turned to rock with his queen for taking the names of Jupiter and Juno.",
    culture: "Woven into Minerva's tapestry as a warning: the border of her design is a series of mortals who competed with gods and are now landscape. Haemus and Rhodope stand at one corner of it, a married pair petrified for a piece of vanity, and Arachne looks at the finished cloth and starts weaving anyway.",
    books: [2, 6, 10], episodes: ["Arachne & Minerva", "The solar chariot", "Death of Orpheus"],
    figures: ["Minerva", "Arachne", "Orpheus"]
  },
  {
    name: "Mount Caucasus", greek: "Kaúkasos (Καύκασος)", roman: "Caucasus", kind: "mountain",
    at: [43.50, 43.00],
    what: "The cold range at the world's northeast corner, where Famine lives in a stony field scratching for grass with her nails.",
    culture: "Ovid's Famine is one of the great personifications in Latin: skin over ribs, knee-joints swollen, hip-bones standing out, and a hunger that she is given permission to enter a man with. The messenger sent to fetch her is warned not to get close, and Ovid makes the geography do the work — the place is as far from Ceres as a place can be.",
    books: [2, 8], episodes: ["Erysichthon & Mestra", "The solar chariot"],
    figures: ["Ceres", "Erysichthon", "Mestra"]
  },
  {
    name: "Taenarum", greek: "Taínaron (Ταίναρον)", roman: "Taenarum", kind: "descent",
    at: [22.48, 36.39],
    what: "The cave at the southern tip of the mainland that Orpheus walked down through, carrying nothing but an instrument.",
    culture: "Greece's southernmost cape and its most used door to the dead. Everything about Orpheus' descent is unarmed: no sword, no golden bough, no escort. He argues, and the argument is a legal one — I am not here to fight your dog, she was owed more years, and if you refuse I am not going back either. It is the only petition the underworld ever grants.",
    books: [10], episodes: ["Orpheus & Eurydice", "Orpheus' audience"],
    figures: ["Orpheus", "Eurydice", "Pluto", "Proserpina"]
  },
  {
    name: "Gargaphie", greek: "Gargaphíê (Γαργαφίη)", roman: "Gargaphie", kind: "grove",
    at: [23.28, 38.25],
    what: "Diana's own valley of cypress and pine, with a spring at the bottom of it and no roof but the rock.",
    culture: "Ovid is careful to say the cave was not built — the rock had made an arch by itself, and art had imitated nature nowhere here. That detail is the episode's defence case: nothing was staged, nobody was at fault, a young man took a wrong turning after a good morning's hunting, and the goddess had no answer available except to make sure he could not tell anyone.",
    books: [3], episodes: ["Actaeon"],
    figures: ["Actaeon", "Diana", "Autonoe", "Cadmus"]
  },
  {
    name: "Dodona", greek: "Dôdốnê (Δωδώνη)", roman: "Dodona", kind: "oracle",
    at: [20.79, 39.55],
    what: "Jupiter's oak grove in the mountains, where the god answered by moving the leaves and the priests listened.",
    culture: "The oldest oracle in Greece and the least legible: no verse, no priestess, only a tree in wind. Ovid gives its acorns a second life on Aegina, where the oak Aeacus prays under is grown from a Dodonaean seed — so the ants that become a nation come from Jupiter's own timber, which is the point of the prayer being answered at all.",
    books: [7, 13], episodes: ["Aeacus & the Myrmidons", "Aeneas' departure & Oenotrophi"],
    figures: ["Aeacus", "Jupiter", "Aeneas"]
  },

  /* --------------------------------------------------------- the archipelago */
  {
    name: "Samos", greek: "Sámos (Σάμος)", roman: "Samos", kind: "island",
    at: [26.98, 37.75],
    what: "Passed on the left by a boy who was flying, and left for good by a philosopher who would not eat anything with a face.",
    culture: "Two departures, five books apart. Icarus sees Samos go by below him in the moment before he climbs; Pythagoras leaves it voluntarily, hating its tyrant, and ends up in Italy explaining that nothing dies and everything is somebody's grandmother. The island the poem's longest speech comes from is one it never lands on.",
    books: [8, 15], episodes: ["Daedalus & Icarus", "Pythagoras", "Myscelus & Croton"],
    figures: ["Icarus", "Daedalus", "Pythagoras", "Juno"]
  },
  {
    name: "Icaria", greek: "Ikaría (Ἰκαρία)", roman: "Icaria", kind: "island",
    at: [26.05, 37.60],
    what: "The island named after the boy in the water below it, by the father who was still holding a pair of wings.",
    culture: "A place that exists only as a memorial. Ovid gives the naming twice over — the sea and the land both take the name — and then, in the poem's cruellest cut, has a partridge watch the burial from a nearby branch, chattering with delight, because Daedalus once threw that boy off a roof too.",
    books: [8], episodes: ["Daedalus & Icarus", "Perdix"],
    figures: ["Icarus", "Daedalus", "Perdix"]
  },
  {
    name: "Salamis", greek: "Salamís (Σαλαμίς)", roman: "Salamis", kind: "island",
    at: [23.50, 37.96],
    what: "Telamon's island, and Ajax's, whose name the flower kept after the armour went to somebody who could talk.",
    culture: "The poem's plainest verdict on rhetoric. Ajax speaks first and speaks badly — soldierly, resentful, factually correct. Ulysses speaks second, and wins on delivery. Ovid's judgement is in the aftermath: the strongest man in the army kills himself in his own field, and the purple flower that grows there is lettered AI AI, which is both a Greek groan and the beginning of his name.",
    books: [7, 13], episodes: ["Ajax & Ulysses", "Death of Ajax", "Aeacus & the Myrmidons"],
    figures: ["Ajax", "Telamon", "Ulysses", "Aeacus", "Peleus"]
  },
  {
    name: "Lemnos", greek: "Lêmnos (Λῆμνος)", roman: "Lemnos", kind: "island",
    at: [25.23, 39.92],
    what: "Where the Greeks left a man with an infected foot and the bow they later found they could not win the war without.",
    culture: "Vulcan's island, where he landed after Jupiter threw him out of heaven — so the poem's forge and the poem's abandoned archer share the same rock. Ulysses admits the marooning in open court and defends it, then admits he had to go back for him, and expects the admission to count as candour.",
    books: [13], episodes: ["Ajax & Ulysses"],
    figures: ["Philoctetes", "Ulysses", "Vulcan"]
  },
  {
    name: "Scyros", greek: "Skŷros (Σκῦρος)", roman: "Scyros", kind: "island",
    at: [24.55, 38.90],
    what: "The court where Achilles was hidden in a dress, and where a pedlar laid out jewellery with one sword among it.",
    culture: "Ulysses' best story about himself, told by Ulysses. Thetis knew what Troy would cost and hid her son among a king's daughters; Ovid lets Ulysses describe how he found him, and the trick — girls' things on a table, one weapon, and a boy's hand going straight to it — is the sort of detail the speech is designed around.",
    books: [13], episodes: ["Ajax & Ulysses"],
    figures: ["Achilles", "Ulysses", "Thetis"]
  },
  {
    name: "Ceos & Carthaea", greek: "Kéôs (Κέως)", roman: "Ceos", kind: "island",
    at: [24.33, 37.62],
    what: "The fields where a boy kept a tame stag with gilded horns, killed it by accident, and asked to mourn forever.",
    culture: "Ovid's gentlest transformation and his saddest reason for one. Cyparissus does not want to be saved, healed or consoled; he asks to be allowed to grieve for as long as there is time, and Apollo, who loved him, grants exactly that. The cypress has stood at Mediterranean funerals ever since, doing the job it asked for.",
    books: [7, 10], episodes: ["Cyparissus", "Medea's flight"],
    figures: ["Cyparissus", "Apollo", "Medea"]
  },
  {
    name: "Paros", greek: "Páros (Πάρος)", roman: "Paros", kind: "island",
    at: [25.15, 37.08],
    what: "The marble island, seen from above by a boy testing his wings and from the deck by a king raising a fleet.",
    culture: "The stone every good Greek statue was cut from, which puts it quietly in Pygmalion's story too — the sculptor's ivory is described with the same vocabulary of whiteness and warmth. Minos calls here recruiting, and Ovid runs the Cyclades past in a single sentence, the way a fleet actually passes them.",
    books: [7, 8], episodes: ["Daedalus & Icarus", "Aeacus & the Myrmidons"],
    figures: ["Minos", "Icarus", "Daedalus"]
  },
  {
    name: "Andros", greek: "Ándros (Ἄνδρος)", roman: "Andros", kind: "island",
    at: [24.85, 37.83],
    what: "Where Anius' four daughters fled when Agamemnon came for the grain their touch could produce, and where they became doves.",
    culture: "A footnote to the war that shows what the war actually ran on. The Oenotrophi could turn what they touched into corn, wine and oil, so the Greek command requisitioned them; their father's guest-friend on Andros gave them up under threat; they prayed mid-capture and flew. Logistics, in the Metamorphoses, is also a metamorphosis.",
    books: [13], episodes: ["Aeneas' departure & Oenotrophi"],
    figures: ["Anius", "Aeneas", "Agamemnon"]
  },
  {
    name: "Seriphos", greek: "Sériphos (Σέριφος)", roman: "Seriphus", kind: "island",
    at: [24.50, 37.15],
    what: "The small island a mother and a baby washed up on in a wooden chest, and that the baby came back to with a head in a bag.",
    culture: "Every version of Perseus turns on the same joke: the king who sent him for the Gorgon's head to get rid of him receives the Gorgon's head. Ovid keeps the island offstage and lets Minos' fleet mention it in passing — a whole heroic cycle reduced to a name on a recruiting list, which is how the poem treats most of the famous stories it is not currently telling.",
    books: [5, 7], episodes: ["Perseus & Phineus", "Aeacus & the Myrmidons"],
    figures: ["Perseus", "Danae", "Minos"]
  },
  {
    name: "Cythera", greek: "Kýthêra (Κύθηρα)", roman: "Cythera", kind: "island",
    at: [23.00, 36.23],
    what: "The island Venus came ashore on out of the sea, and the one she leaves when Adonis is hunting badly.",
    culture: "The first land the goddess touched, and thereafter the address the poem gives her when it wants to say she is elsewhere. Ovid's Venus is at her most human in Book X: warning a young man about animals that do not run away, being ignored, hearing the groan from her chariot in mid-air, and turning back.",
    books: [10], episodes: ["Death of Adonis", "Adonis born", "Pygmalion"],
    figures: ["Venus", "Adonis", "Cupid"]
  }
];
