/*
 * Book-level readings: what each book argues, how it is put together, and
 * what it hands on to the next one.
 *
 * `extent` gives the approximate length of the book in the Latin hexameters
 * of a standard text. Translations and editions vary; treat it as a sense of
 * scale rather than a citation.
 */

export const BOOK_READINGS = {
  1: {
    extent: "≈ 779 lines",
    argument: "The poem opens by making separation itself the first metamorphosis. Before any body changes, an unnamed god — or nature improving on itself — pulls sea from land and sky from air, and everything that follows depends on that original act of drawing boundaries. Ovid then immediately shows the boundaries failing: the ages decline, human violence rises, and a flood puts the world back into something close to the mass it came out of. The renewed world's very first stories are pursuits, which establishes the pattern the next five books will run on.",
    structure: "Four movements. A cosmogony and a moral history of the four ages; a divine council and the Flood; the reconstitution of humanity from stones; and then two chases in a row — Apollo after Daphne, Jupiter after Io — with the Pan and Syrinx tale nested inside the second as a story told to kill a listener.",
    movements: [
      "Invocation and cosmogony: Chaos ordered into a habitable world",
      "The four ages, the Giants, and the council of gods at Lycaon's crime",
      "The Flood, Deucalion and Pyrrha, and the stones that become people",
      "Python and the first pursuit: Apollo and Daphne",
      "Io, Argus, and the inset tale of Pan and Syrinx",
      "Epaphus' taunt, which opens Book II"
    ],
    argumentOfChange: "Change here is mostly protective in intention and appropriative in effect. Daphne escapes and becomes Apollo's emblem; Io survives and becomes a cult; Syrinx dies as a nymph and returns as an instrument someone else plays.",
    handsOn: "A boy who has just been told his father is not who his mother says — which is the whole engine of Book II."
  },
  2: {
    extent: "≈ 875 lines",
    argument: "Book II is about what happens when something is given to someone who cannot carry it. Phaethon receives an unconditional promise and destroys half the world with it; the raven receives accurate information and is punished for delivering it; Ocyroe receives prophecy and is cut off mid-sentence; Aglauros receives a divine commission and is destroyed by envy. The book is a sustained argument that capacity and entitlement are different things, and that gods are as bad at telling them apart as anyone.",
    structure: "One enormous set piece — the palace, the chariot, the fire, the mourning — followed by a chain of shorter divine punishments linked by Mercury's travels, and closed by Jupiter turning himself into a bull.",
    movements: [
      "The palace of the Sun and the oath sworn on the Styx",
      "The chariot, the burning of the world, and Earth's complaint",
      "The Heliades, Cycnus, and the amber of the Eridanus",
      "Callisto, Arcas, and the two Bears set in the sky",
      "The raven, Coronis, the rescue of Aesculapius, and Ocyroe's interrupted prophecy",
      "Battus at Pylos, Mercury at Athens, Envy, and Aglauros",
      "Europa and the white bull"
    ],
    argumentOfChange: "Catasterism enters the poem here: two of the book's transformations end in the visible sky, which turns the constellations into an archive of divine violence that anyone can look up and check.",
    handsOn: "A princess taken to Crete, and a brother sent after her who is forbidden to come home — the founding of Thebes."
  },
  3: {
    extent: "≈ 733 lines",
    argument: "Every catastrophe in Book III is a failure of sight. Actaeon sees what he should not; Semele asks to see what cannot be survived; Tiresias trades sight for foresight; Narcissus sees only himself; Pentheus refuses to see a god standing in front of him. Ovid builds a whole Theban dynasty on the premise that recognition is the hardest act in the poem and that getting it wrong is invariably fatal.",
    structure: "A foundation story followed by five case studies in misrecognition, all inside one family, with an inset first-person narrative — Acoetes and the pirates — placed as the last piece of evidence Pentheus refuses to accept.",
    movements: [
      "Cadmus, the serpent of Mars, the sown men, and the founding of Thebes",
      "Actaeon at the pool, and the roll-call of his own hounds",
      "Semele, Juno's disguise, and the birth of Bacchus from a thigh",
      "Tiresias, the snakes, the divine argument, and blindness for prophecy",
      "Echo, Narcissus, and the pool that returns nothing",
      "Pentheus, Acoetes' story of the Tyrrhenian pirates, and the sparagmos on Cithaeron"
    ],
    argumentOfChange: "Transformations in this book strip away the capacity to be identified: Actaeon cannot tell his dogs who he is, Echo cannot begin a sentence, and Pentheus is seen by his own mother as a boar.",
    handsOn: "A god whose divinity Thebes has now conceded, and a family that Juno is not finished with."
  },
  4: {
    extent: "≈ 803 lines",
    argument: "This is the book about who gets to tell the story. Three sisters refuse a god's festival and keep working, filling the time with tales — so a third of the book is narrated by mortals who are about to be punished for narrating. Their chosen subjects (lovers who die of a misread sign, an adultery exposed, a body forcibly merged with another) turn out to be a commentary on the frame they sit inside, and the frame closes on them.",
    structure: "A nested frame: the Minyades at the loom tell Pyramus and Thisbe, Mars and Venus, Leucothoe and Clytie, and Salmacis and Hermaphroditus; the frame then breaks, Juno resumes her campaign against Cadmus' house, and the book ends by launching Perseus.",
    movements: [
      "The Minyades refuse Bacchus and begin to tell stories",
      "Pyramus and Thisbe at the tomb of Ninus",
      "Mars, Venus, and Vulcan's invisible net — told by the Sun's own informant",
      "Leucothoe buried alive, and Clytie rooted as the heliotrope",
      "Salmacis and Hermaphroditus at the Carian pool",
      "The sisters become bats; Tisiphone drives Athamas and Ino mad",
      "Cadmus and Harmonia become serpents in Illyria",
      "Perseus, Atlas, Andromeda, and the sea-monster"
    ],
    argumentOfChange: "Three of the book's changes are mergers rather than replacements — blood into a mulberry, a woman into incense, two bodies into one — which makes it the poem's most sustained meditation on what is lost when two things become one.",
    handsOn: "A hero with a weapon that works on anyone who looks at it, walking into a wedding."
  },
  5: {
    extent: "≈ 678 lines",
    argument: "Book V asks who is entitled to sing, and answers it twice — once with a massacre and once with a verdict. Perseus wins his argument by petrifying two hundred men; the Muses win theirs before a panel of nymphs and then turn the losers into magpies. Between the two, Ovid places the poem's longest inset song, Calliope's Proserpina, so that the book's central act of storytelling is itself a competition entry.",
    structure: "A battle scene, then a hand-off: Minerva leaves Perseus and visits Helicon, where the whole rest of the book is a Muse's report of a singing contest, inside which is a Muse's song, inside which are further embedded narrators.",
    movements: [
      "The wedding-hall battle: Phineus, two hundred men, and the Gorgon's head",
      "Minerva on Helicon; Pyreneus and the locked doors",
      "The challenge of the Pierides and their song of the gods in flight",
      "Calliope's reply: Pluto, Proserpina, and Ceres' search",
      "Cyane's dissolution, Ascalaphus' report, and the seven pomegranate seeds",
      "Arethusa's own account of Alpheus and the passage under the sea",
      "Triptolemus, Lyncus, and the verdict against the Pierides"
    ],
    argumentOfChange: "Water dominates: a nymph melts into her pool, another becomes a spring and travels under the sea, and a girdle floating on the surface is the only message that gets through.",
    handsOn: "The principle that contests of art are settled by power — which Book VI immediately tests on a weaver."
  },
  6: {
    extent: "≈ 721 lines",
    argument: "The most brutal book in the poem, and the one most directly about art. Arachne weaves an accurate indictment of the gods and is destroyed for its accuracy rather than its quality; Niobe counts her children out loud and loses all fourteen; Marsyas plays and is skinned; Philomela loses her tongue and moves her testimony into a loom. Ovid's argument is that expression is punished in proportion to how well it works, and that it survives anyway.",
    structure: "Three divine punishments of increasing scale, then a hinge into the human atrocity of the Tereus story, then a short bridge to the Argonauts. The book has no comic relief at all.",
    movements: [
      "Arachne's tapestry, Minerva's tapestry, and the shuttle",
      "Niobe, the fourteen children, and the weeping stone on Sipylus",
      "The Lycian peasants and the pond; Marsyas and the flaying",
      "Pelops' ivory shoulder and the mourning of Thebes",
      "Tereus, Procne, Philomela, the web, and the feast",
      "Boreas and Orithyia, and the birth of the winged Boreads"
    ],
    argumentOfChange: "Almost every transformation here is a demotion into a voice: frogs, a river of tears, birds that cannot stop repeating themselves. The book that punishes speech most severely produces the poem's densest concentration of noise.",
    handsOn: "Two Argonauts, and therefore the ship that opens Book VII."
  },
  7: {
    extent: "≈ 865 lines",
    argument: "Book VII is about knowledge that works, and what it does to the person holding it. Medea's herbs actually function — she really can make an old man young — which makes her the only figure in the poem whose power is technical rather than granted. Ovid gives her the longest interior monologue in the Metamorphoses and then, having established that she knows exactly what she is doing, narrates her crimes at almost telegraphic speed.",
    structure: "A long Medea sequence in three phases (Colchis, Iolcus, Corinth), a bridge through Athens, and then a second half handed to two narrators — Aeacus on the plague and Cephalus on his marriage — who talk while a fleet is being assembled.",
    movements: [
      "Medea's monologue, the oath in Hecate's grove, and the trials at Colchis",
      "The rejuvenation of Aeson: nine days of herbs and a bronze cauldron",
      "Pelias, the demonstration ram, and the daughters who look away",
      "Corinth, the poisoned gift, and the flight over Greece",
      "Aegeus, the cup of aconite, and the recognition of Theseus",
      "Minos' embassy; Aeacus, the plague of Aegina, and the Myrmidons",
      "Cephalus and Procris: the test, the javelin, and the word Aura"
    ],
    argumentOfChange: "Two rejuvenations and one fraudulent rejuvenation put the book's whole argument into the difference between a process that is understood and one that is merely copied.",
    handsOn: "A war between Crete and Athens, and the ships that carry the poem to Book VIII."
  },
  8: {
    extent: "≈ 884 lines",
    argument: "Book VIII is a sustained comparison of making and taking. Daedalus builds; Scylla betrays; Erysichthon consumes; Baucis and Philemon give. Ovid arranges the book so that the two poles — a couple who own almost nothing and share it, and a man whose appetite eats his own daughter and then his own limbs — are told at the same dinner table, by rival narrators arguing about whether the gods have any power at all.",
    structure: "A war and a betrayal, then the Cretan sequence, then the Calydonian hunt, and finally an extended symposium at Achelous' flooded house where four inset stories are told in succession.",
    movements: [
      "Nisus, Scylla, the purple lock, and the birds that cannot share a sea",
      "The Minotaur, the Labyrinth, Ariadne's thread, and her crown among the stars",
      "Daedalus and Icarus; the partridge that watches the burial",
      "The Calydonian boar: the muster, the chaos, and Atalanta's arrow",
      "Meleager, the brand, and Althaea's four advances on the fire",
      "Achelous' table: Theseus, Pirithous, and the argument about divine power",
      "Baucis and Philemon; Erysichthon, Famine, and Mestra"
    ],
    argumentOfChange: "The book's transformations divide sharply by moral register — reward (an oak and a linden, a cornucopia) against punishment (birds locked in pursuit, a body that eats itself) — with almost nothing in between.",
    handsOn: "A river god with a broken horn, still talking — and Hercules, whose story the horn's loss introduces."
  },
  9: {
    extent: "≈ 797 lines",
    argument: "The book of impossible bodies. Hercules is burned out of his mortal half and installed in the sky; Dryope is rooted for picking a flower; Byblis dissolves into a spring because her desire has no available shape; Iphis is given a different body because the one she has cannot marry the person she loves. Ovid puts an apotheosis, an atrocity, and a happy ending in the same eight hundred lines and declines to rank them.",
    structure: "A frame narrated by Achelous, then Hercules' death and deification, then a run of household stories exchanged between women — Alcmene and Iole — and finally two long studies of forbidden desire.",
    movements: [
      "Achelous, Hercules, and the wrestling for Deianira",
      "Nessus at the ford and the poisoned blood kept for years",
      "The shirt, Mount Oeta, and the burning away of the mortal part",
      "Alcmene's seven-day labour and Galanthis' lie",
      "Dryope and the lotus; the gods' quarrel over rejuvenation",
      "Byblis: the letter, the refusal, and the spring under the oak",
      "Iphis and Ianthe, and the intervention of Isis"
    ],
    argumentOfChange: "This is the poem's clearest demonstration that transformation can be a solution as well as a sentence — Iphis is the counter-example that makes the rest of the book's cruelty legible as a choice.",
    handsOn: "A wedding at which the marriage god's torch will not light."
  },
  10: {
    extent: "≈ 739 lines",
    argument: "Almost the entire book is sung by a bereaved man, and the choice of material is the point. Orpheus announces that he will sing of boys loved by gods and of girls punished for illicit desire, and what follows — Cyparissus, Hyacinthus, the Propoetides, Pygmalion, Myrrha, Atalanta, Adonis — is a repertoire assembled by someone who has just lost an argument with death and is working through it in public.",
    structure: "A frame of two failures — the descent and the second loss — around a recital, with a further song nested inside it: Venus telling Adonis about Atalanta, in order to warn him about something he then ignores.",
    movements: [
      "Hymen's guttering torch and Eurydice's death on her wedding day",
      "The descent, the song to the shades, and the look back",
      "Orpheus on the bare hill; the trees arrive; Cyparissus and the stag",
      "Hyacinthus, the discus, and the letters on the petals",
      "The Cerastae, the Propoetides, and Pygmalion's ivory",
      "Myrrha, the nurse, the three nights, and the tree",
      "Adonis' birth; Venus' cautionary tale of Atalanta; the boar"
    ],
    argumentOfChange: "Every change in this book is either a memorial (a cypress, a flower, a resin) or a creation from nothing (a statue given warmth). Orpheus, who could not bring one body back, spends the book singing about bodies converted into lasting objects.",
    handsOn: "A singer whose audience is about to be drowned out."
  },
  11: {
    extent: "≈ 795 lines",
    argument: "Book XI moves from the destruction of art to the perfection of marriage, and then to Troy. Orpheus is killed once his music is inaudible; Midas demonstrates two kinds of catastrophic judgement; and then, in the poem's most tender long sequence, Ceyx and Alcyone are separated by a storm and reunited as birds. The book ends by walking, almost casually, onto the Trojan plain.",
    structure: "Three loosely joined movements — Thrace, Phrygia, Trachis — with an enormous storm at the centre of the third and the House of Sleep as its counterweight.",
    movements: [
      "The death of Orpheus and the oaks that were Maenads",
      "Midas' golden touch and the Pactolus; Midas' ears and the reeds",
      "Laomedon's unpaid wages and the first sack of Troy",
      "Peleus and Thetis; the wolf sent by Psamathe",
      "Ceyx's voyage and the destruction of the ship",
      "The House of Sleep, Morpheus, and the truthful dream",
      "The halcyons; Aesacus and the diving bird"
    ],
    argumentOfChange: "The one transformation in the poem that repairs rather than replaces: a marriage that survives death by changing species, with an annual week of calm weather attached to it as proof.",
    handsOn: "Troy, a fleet, and a war the poem is not going to narrate conventionally."
  },
  12: {
    extent: "≈ 628 lines",
    argument: "Ovid takes the Trojan War and hands most of it to an old man reminiscing at dinner. The actual fighting occupies a few dozen lines; the centaur brawl at a wedding two generations earlier occupies several hundred. The House of Fame, placed at the book's entrance, explains the method: this is a poem about how war reaches us — as report, as anecdote, as the version told by whoever survived and had a grievance.",
    structure: "An omen, a sacrifice, an allegorical building, one duel, and then a very long inset narrative by Nestor that turns out to have a deliberate omission — which someone at the table calls him on.",
    movements: [
      "Aulis: the serpent, the sparrows, Calchas' arithmetic, and Iphigenia",
      "The House of Fame at the junction of earth, sea, and sky",
      "The landing at Troy and the duel with the invulnerable Cygnus",
      "Nestor at dinner: Caenis, Neptune's gift, and the man no iron could enter",
      "The centauromachy in full: mixing-bowls, altars, antlers, and whole trees",
      "Periclymenus, Hercules, and the reason Nestor never mentions him",
      "Apollo, Paris, and the death of Achilles"
    ],
    argumentOfChange: "The book's central transformation — a woman who asks to become a man who cannot be wounded — is also its central argument: that the shape you are given determines what can be done to you.",
    handsOn: "A suit of armour with no owner, and two men who both want it."
  },
  13: {
    extent: "≈ 968 lines",
    argument: "The longest book in the poem, and the one most interested in rhetoric and its consequences. It opens with two speeches that decide who inherits Achilles, and the better speaker wins; it continues through the sack of Troy and the sequence of Trojan women's griefs; and it ends in Sicily with a Cyclops singing a love song. Ovid is measuring what words can do — win an argument, kill a man, make a monster briefly sympathetic.",
    structure: "A courtroom, then a catalogue of losses, then a long westward passage in which the poem hands itself over to new narrators — Anius, Galatea, Scylla — as it moves from Greek to Italian material.",
    movements: [
      "Ajax's speech from deeds; Ulysses' speech from words; the verdict",
      "The suicide of Ajax and the flower with letters on it",
      "The fall of Troy, Polyxena at the tomb, and Hecuba on the shore",
      "Polydorus returned by the tide; the blinding of Polymestor",
      "Aurora, Memnon, and the birds that fight above his ashes",
      "Aeneas at Delos; Anius and the Oenotrophi",
      "Galatea, Acis, and Polyphemus' hundred-reed courtship",
      "Glaucus: a fisherman made a god, and worse off for it"
    ],
    argumentOfChange: "Two transformations here are of grief into an annual event: Memnon's birds and the Trojan women's rites. The poem is starting to convert myth into calendar — which is what it will do to Rome.",
    handsOn: "A sea god in love with a woman who is about to be poisoned by a rival."
  },
  14: {
    extent: "≈ 851 lines",
    argument: "The book of the westward crossing, and of Italian material appearing for the first time. Circe dominates its first half as the poem's last great transformer; then Aeneas is deified, and the register shifts from myth to cult. Ovid keeps his best comic set-piece for the end — a god of the turning year courting an orchard goddess in six disguises — immediately before the poem becomes Roman for good.",
    structure: "Two Circe sequences, a Virgilian compression, a pair of Italian love stories, and an apotheosis, with narration passed between Macareus, Achaemenides, the Sibyl, Diomedes, and Vertumnus.",
    movements: [
      "Scylla poisoned; Glaucus' failed suit and Circe's revenge",
      "The Cumaean Sibyl, the descent, and the seven hundred years",
      "Achaemenides and Macareus: the Cyclops' cave and Circe's sty",
      "Picus, Canens, and the woodpecker's red crest",
      "The war in Latium; Diomedes' refusal and Acmon's birds",
      "Aeneas washed in the Numicius and worshipped as Indiges",
      "Vertumnus and Pomona; Iphis and Anaxarete",
      "Romulus taken up as Quirinus, and Hersilia as Hora"
    ],
    argumentOfChange: "Apotheosis becomes the dominant mode: three deifications in one book, each with a river, a star, or a rainbow attached, establishing the template the last book will apply to a documented Roman.",
    handsOn: "A Rome with two deified founders and a philosophical vacancy."
  },
  15: {
    extent: "≈ 879 lines",
    argument: "The final book supplies the theory. Four hundred lines of Pythagoras explain what the previous fourteen have shown: that nothing is destroyed, that everything is in flux, and that bodies are temporary arrangements the soul passes through. Ovid then applies the doctrine to Rome — a city, a god imported by ship, a dictator turned into a comet — and finally to himself, claiming a survival that requires no god's permission at all.",
    structure: "A founding, a lecture, three Roman transformation stories of increasing political weight, an apotheosis, an address to the living emperor, and a four-line epilogue that quietly changes the subject.",
    movements: [
      "Myscelus, Hercules' command, and the founding of Croton",
      "Pythagoras: vegetarianism, transmigration, and universal flux",
      "Numa carries the doctrine to Rome; Egeria and Hippolytus at Aricia",
      "Tages in the furrow; Cipus and the horns he refuses to bring inside the walls",
      "The plague, the embassy to Epidaurus, and Aesculapius on the Tiber island",
      "The omens, the assassination, and Caesar's soul set burning as a comet",
      "Jupiter's speech on fixed fate and the forecast of Augustus' reign",
      "The epilogue: a work beyond fire, sword, time, and imperial anger"
    ],
    argumentOfChange: "The poem's last transformation is its own: the poet claims the immortality he has just granted to a dictator, and locates it in readers rather than in heaven.",
    handsOn: "The reader — which the epilogue names as the mechanism by which the poem stays alive."
  }
};

export function bookReading(bookId) {
  return BOOK_READINGS[bookId] || null;
}
