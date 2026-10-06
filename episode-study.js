/*
 * Episode-level study metadata.
 *
 * The poem's episodes do not share a single stable "cast": inset narrators,
 * witnesses, divine agents, victims, and transformed forms move in and out of
 * focus. This registry therefore names the figures and locus for each of the
 * 120 sequences independently. app.js joins these records to the fuller
 * book-level concordance when it needs roles and descriptions.
 */

export const EPISODE_STUDY = {
  "Creation": {
    cast: ["Ovid’s narrator", "Chaos", "Nature / the shaping divinity", "Earth", "Sea", "Sky"],
    locus: "The unformed cosmos",
    motifs: ["separation", "cosmic architecture", "latent order"]
  },
  "The Four Ages": {
    cast: ["Saturn", "Jupiter / Jove", "The human race", "Astraea"],
    locus: "The world across four moral ages",
    motifs: ["decline", "metals", "law", "labor"]
  },
  "Lycaon": {
    cast: ["Jupiter / Jove", "Lycaon", "The Arcadian household", "The gods’ council"],
    locus: "Lycaon’s palace in Arcadia",
    motifs: ["hospitality violated", "savagery disclosed", "divine judgment"]
  },
  "The Great Flood": {
    cast: ["Jupiter / Jove", "Neptune", "The winds", "Deucalion", "Pyrrha"],
    locus: "A world submerged beneath Jupiter’s flood",
    motifs: ["unmaking", "water", "survival", "second creation"]
  },
  "Deucalion & Pyrrha": {
    cast: ["Deucalion", "Pyrrha", "Themis", "Earth / the Great Mother"],
    locus: "Mount Parnassus and the restored earth",
    motifs: ["riddle", "piety", "stones", "human renewal"]
  },
  "Apollo & Daphne": {
    cast: ["Apollo", "Daphne", "Cupid / Amor", "Peneus"],
    locus: "The riverlands of Thessaly",
    motifs: ["pursuit", "counter-wounds", "vow", "appropriated escape"]
  },
  "Io": {
    cast: ["Io", "Jupiter / Jove", "Juno", "Argus Panoptes", "Mercury", "Inachus", "Epaphus"],
    locus: "Argos, then a forced wandering toward Egypt",
    motifs: ["surveillance", "concealment", "wandering", "divine afterlife"]
  },
  "Pan & Syrinx": {
    cast: ["Pan", "Syrinx", "Mercury", "Argus Panoptes", "The river nymphs"],
    locus: "The reeds beside Arcadia’s River Ladon",
    motifs: ["pursuit", "voice after body", "instrument", "inset tale"]
  },

  "Phaethon at the Sun’s palace": {
    cast: ["Phaethon", "Sol / Phoebus", "Clymene", "Epaphus", "The Hours"],
    locus: "The jeweled eastern palace of the Sun",
    motifs: ["paternity", "oath", "ekphrasis", "impossible proof"]
  },
  "The solar chariot": {
    cast: ["Phaethon", "Sol / Phoebus", "Jupiter", "Earth / Tellus", "The horses of the Sun"],
    locus: "The celestial road above a burning earth",
    motifs: ["measure", "failed control", "cosmic heat", "catastrophe"]
  },
  "The Heliades & Cycnus": {
    cast: ["The Heliades", "Cycnus", "Phaethon", "Sol / Phoebus", "Eridanus"],
    locus: "The banks of the Eridanus",
    motifs: ["mourning", "amber", "trees", "swan song"]
  },
  "Callisto": {
    cast: ["Callisto", "Jupiter", "Juno", "Diana", "Arcas"],
    locus: "Diana’s Arcadian grove and the northern sky",
    motifs: ["disguise", "exposure", "maternal recognition", "catasterism"]
  },
  "Coronis & Ocyroe": {
    cast: ["Coronis", "Apollo", "The raven", "Aesculapius", "Chiron", "Ocyroe"],
    locus: "Thessaly, from pyre to Chiron’s cave",
    motifs: ["reporting", "prophecy", "interrupted speech", "healing"]
  },
  "Battus & Aglauros": {
    cast: ["Mercury", "Battus", "Aglauros", "Herse", "Minerva", "Envy"],
    locus: "The countryside and the house of Cecrops at Athens",
    motifs: ["false witness", "envy", "threshold", "petrification"]
  },
  "Europa": {
    cast: ["Europa", "Jupiter", "Mercury", "Agenor", "The white bull"],
    locus: "Phoenicia’s shore and the crossing to Crete",
    motifs: ["divine disguise", "abduction", "sea crossing", "dynastic beginning"]
  },

  "Cadmus & the dragon": {
    cast: ["Cadmus", "Apollo", "The dragon of Mars", "Minerva", "The Spartoi", "Echion"],
    locus: "The spring of Ares and the future site of Thebes",
    motifs: ["foundation", "autochthony", "sown violence", "oracle"]
  },
  "Actaeon": {
    cast: ["Actaeon", "Diana", "Actaeon’s hounds", "Autonoe", "Cadmus"],
    locus: "Diana’s hidden spring on Mount Cithaeron",
    motifs: ["forbidden vision", "misrecognition", "hunter hunted", "speechlessness"]
  },
  "Semele": {
    cast: ["Semele", "Jupiter", "Juno", "Bacchus / Dionysus", "Ino"],
    locus: "The royal house of Thebes",
    motifs: ["deceptive counsel", "divine radiance", "mortal limit", "double birth"]
  },
  "Tiresias": {
    cast: ["Tiresias", "Jupiter", "Juno", "The mating serpents"],
    locus: "Thebes and the gods’ dispute",
    motifs: ["sexed knowledge", "judgment", "blindness", "prophetic sight"]
  },
  "Echo & Narcissus": {
    cast: ["Echo", "Narcissus", "Juno", "Tiresias", "Nemesis", "The rejected lovers"],
    locus: "A secluded woodland pool",
    motifs: ["repetition", "reflection", "failed reciprocity", "bodiless remainder"]
  },
  "Pentheus & Bacchus": {
    cast: ["Pentheus", "Bacchus / Dionysus", "Acoetes", "Agave", "Ino", "Autonoe", "Tiresias"],
    locus: "Thebes and Mount Cithaeron",
    motifs: ["recognition refused", "spectatorship", "disguise", "sparagmos"]
  },
  "Tyrrhenian pirates": {
    cast: ["Bacchus / Dionysus", "Acoetes", "The Tyrrhenian pirates", "The helmsman"],
    locus: "A ship transformed on the Aegean",
    motifs: ["epiphany", "captivity reversed", "vines", "dolphins"]
  },

  "The Minyades": {
    cast: ["The Minyades", "Bacchus / Dionysus", "Leuconoe", "Alcithoe", "Arsippe"],
    locus: "A loom-room in Bacchic Thebes",
    motifs: ["refusal", "domestic labor", "story contest", "nocturnal form"]
  },
  "Pyramus & Thisbe": {
    cast: ["Pyramus", "Thisbe", "The lioness", "The mulberry tree"],
    locus: "Babylon, from the dividing wall to Ninus’ tomb",
    motifs: ["crack in the wall", "misread sign", "blood", "memorial fruit"]
  },
  "Mars & Venus": {
    cast: ["Mars", "Venus", "Vulcan / Mulciber", "Sol / Phoebus", "The assembled gods"],
    locus: "Vulcan’s chamber and the gods’ public gaze",
    motifs: ["exposure", "craft", "adultery", "spectacle"]
  },
  "Leucothoe & Clytie": {
    cast: ["Leucothoe", "Clytie", "Sol / Phoebus", "Orchamus", "Eurynome"],
    locus: "Persia beneath the Sun’s gaze",
    motifs: ["disguise", "jealous report", "burial", "vegetal memory"]
  },
  "Salmacis & Hermaphroditus": {
    cast: ["Salmacis", "Hermaphroditus", "Mercury", "Venus", "The fountain nymphs"],
    locus: "Salmacis’ clear Carian spring",
    motifs: ["coercive union", "mixture", "resistance", "etiology"]
  },
  "Athamas & Ino": {
    cast: ["Athamas", "Ino / Leucothea", "Melicertes / Palaemon", "Juno", "Tisiphone"],
    locus: "The maddened Theban household and the sea",
    motifs: ["fury", "kin violence", "leap", "marine apotheosis"]
  },
  "Cadmus & Harmonia": {
    cast: ["Cadmus & Harmonia", "Bacchus / Dionysus", "The Theban descendants"],
    locus: "Illyria at the end of a Theban exile",
    motifs: ["shared fate", "serpentine form", "dynastic closure", "memory"]
  },
  "Perseus & Atlas": {
    cast: ["Perseus", "Atlas", "Medusa", "Jupiter"],
    locus: "The far western edge of Atlas’ kingdom",
    motifs: ["hospitality refused", "prophecy", "weaponized sight", "mountain"]
  },
  "Perseus & Andromeda": {
    cast: ["Perseus", "Andromeda", "Cepheus", "Cassiopeia", "The sea monster", "Medusa", "Phineus"],
    locus: "The Ethiopian shore and Cepheus’ palace",
    motifs: ["exposure", "rescue bargain", "petrification", "contested marriage"]
  },

  "Perseus & Phineus": {
    cast: ["Perseus", "Phineus", "Andromeda", "Cepheus", "Medusa", "Minerva"],
    locus: "The interrupted wedding feast in Ethiopia",
    motifs: ["banquet battle", "rival claim", "frozen gesture", "gallery of stone"]
  },
  "Pyreneus & the Muses": {
    cast: ["Pyreneus", "The Muses", "Minerva"],
    locus: "Daulis and the rain-darkened road to Helicon",
    motifs: ["false hospitality", "entrapment", "flight", "failed pursuit"]
  },
  "Pierides & Muses": {
    cast: ["The Pierides", "The Muses", "Calliope", "The judging nymphs"],
    locus: "Mount Helicon",
    motifs: ["song contest", "authority", "noise", "magpies"]
  },
  "Pluto & Proserpina": {
    cast: ["Pluto / Dis", "Proserpina", "Ceres", "Venus", "Cupid / Amor", "Jupiter"],
    locus: "The meadow at Henna and the Underworld",
    motifs: ["abduction", "marriage", "seasonal loss", "divided sovereignty"]
  },
  "Cyane & Ascalaphus": {
    cast: ["Cyane", "Pluto / Dis", "Proserpina", "Ascalaphus", "Ceres", "The Sirens"],
    locus: "Sicily’s springs and the Underworld",
    motifs: ["witness", "dissolution", "pomegranate", "punished report"]
  },
  "Arethusa & Alpheus": {
    cast: ["Arethusa", "Alpheus", "Diana", "Ceres"],
    locus: "Arcadia, Ortygia, and the hidden passage beneath the sea",
    motifs: ["pursuit", "water", "concealment", "subterranean passage"]
  },
  "Triptolemus & Lyncus": {
    cast: ["Triptolemus", "Ceres", "Lyncus", "The Scythians"],
    locus: "Scythia at the edge of Ceres’ agricultural mission",
    motifs: ["grain", "culture hero", "treacherous host", "lynx"]
  },

  "Arachne & Minerva": {
    cast: ["Arachne", "Minerva", "Europa", "Leda", "Danaë", "The gods in disguise"],
    locus: "Arachne’s Lydian workshop",
    motifs: ["weaving", "rival images", "divine abuse", "censorship"]
  },
  "Niobe": {
    cast: ["Niobe", "Latona", "Apollo", "Diana", "Amphion", "The Niobids"],
    locus: "The royal house and walls of Thebes",
    motifs: ["boast", "maternal grief", "serial death", "weeping stone"]
  },
  "Latona & the Lycians": {
    cast: ["Latona", "Apollo", "Diana", "The Lycian peasants"],
    locus: "A muddy pool in Lycia",
    motifs: ["thirst", "denied hospitality", "mud", "frogs"]
  },
  "Marsyas": {
    cast: ["Marsyas", "Apollo", "The Muses", "The satyrs and nymphs", "The river Marsyas"],
    locus: "Phrygia beside the river that takes Marsyas’ name",
    motifs: ["music contest", "flaying", "lament", "river origin"]
  },
  "Pelops": {
    cast: ["Pelops", "Tantalus", "Ceres", "Jupiter", "The gods"],
    locus: "Tantalus’ banquet and the gods’ restoration",
    motifs: ["dismemberment", "recognition", "ivory", "repair"]
  },
  "Tereus, Procne & Philomela": {
    cast: ["Tereus", "Procne", "Philomela", "Itys", "Pandion", "The Thracian household"],
    locus: "Athens, Thrace, and the forest prison",
    motifs: ["sexual violence", "silenced testimony", "woven message", "revenge feast"]
  },
  "Boreas & Orithyia": {
    cast: ["Boreas", "Orithyia", "Erechtheus", "Calais", "Zetes"],
    locus: "Athens and the northern wind’s Thracian realm",
    motifs: ["force", "abduction", "wind", "winged descendants"]
  },

  "Jason & Medea": {
    cast: ["Jason", "Medea", "Aeetes", "Cupid / Amor", "Hecate", "Chalciope"],
    locus: "Aeetes’ court and the fields of Colchis",
    motifs: ["divided counsel", "foreign magic", "oath", "heroic dependency"]
  },
  "The dragon & Golden Fleece": {
    cast: ["Jason", "Medea", "Aeetes", "The sleepless dragon", "The Argonauts"],
    locus: "The grove of Mars in Colchis",
    motifs: ["enchantment", "sleep", "quest object", "theft"]
  },
  "Aeson rejuvenated": {
    cast: ["Medea", "Aeson", "Jason", "Hecate", "The personified Night"],
    locus: "A ritual enclosure in Thessaly",
    motifs: ["pharmaka", "dismembered herbs", "blood renewal", "controlled rebirth"]
  },
  "Pelias": {
    cast: ["Medea", "Pelias", "The daughters of Pelias", "Jason", "The rejuvenated ram"],
    locus: "Pelias’ palace at Iolcus",
    motifs: ["deceptive demonstration", "filial piety", "dismemberment", "failed renewal"]
  },
  "Medea’s flight": {
    cast: ["Medea", "Jason", "Absyrtus", "Creon", "Creusa", "Medea’s children", "The winged dragons"],
    locus: "A murderous aerial itinerary from Colchis to Athens",
    motifs: ["escape", "serial crime", "map of transformations", "unpunished mobility"]
  },
  "Aegeus & Theseus": {
    cast: ["Medea", "Aegeus", "Theseus", "Aethra", "Minos"],
    locus: "Aegeus’ palace at Athens",
    motifs: ["unrecognized son", "poisoned cup", "tokens", "recognition"]
  },
  "Aeacus & the Myrmidons": {
    cast: ["Aeacus", "Jupiter", "Juno", "The plague-stricken Aeginetans", "The ants / Myrmidons"],
    locus: "The plague-swept island of Aegina",
    motifs: ["pestilence", "prayer", "ants", "civic replenishment"]
  },
  "Cephalus & Procris": {
    cast: ["Cephalus", "Procris", "Aurora", "The breeze / Aura", "Laelaps"],
    locus: "Attica’s woods and the marriage bed remembered",
    motifs: ["jealous test", "ambiguous word", "hunting gift", "fatal misrecognition"]
  },

  "Scylla & Minos": {
    cast: ["Scylla", "Minos", "Nisus", "The Cretan fleet", "The sea eagle and ciris"],
    locus: "The besieged walls of Megara",
    motifs: ["betrayal", "purple lock", "rejected desire", "pursuit in air"]
  },
  "The Minotaur & Labyrinth": {
    cast: ["The Minotaur", "Minos", "Pasiphaë", "Daedalus", "Theseus", "Ariadne"],
    locus: "Daedalus’ Labyrinth on Crete",
    motifs: ["hybridity", "architecture", "concealment", "thread"]
  },
  "Daedalus & Icarus": {
    cast: ["Daedalus", "Icarus", "Minos", "The watching fisherman and shepherd"],
    locus: "Crete, the open sky, and the Icarian Sea",
    motifs: ["craft", "middle path", "flight", "paternal grief"]
  },
  "Perdix": {
    cast: ["Daedalus", "Perdix / Talos", "Minerva", "Icarus"],
    locus: "Athena’s citadel and Daedalus’ guilty memory",
    motifs: ["invention", "envy", "fall arrested", "partridge"]
  },
  "Calydonian Boar Hunt": {
    cast: ["Meleager", "Atalanta", "Oeneus", "Diana", "The Calydonian boar", "Ancaeus", "Peleus", "Telamon"],
    locus: "The forests and fields of Calydon",
    motifs: ["collective hunt", "divine omission", "female prowess", "spoils"]
  },
  "Meleager & Althaea": {
    cast: ["Meleager", "Althaea", "Atalanta", "Plexippus", "Toxeus", "The Fates"],
    locus: "Calydon and the chamber of the fatal brand",
    motifs: ["divided kinship", "firebrand", "maternal decision", "mourning birds"]
  },
  "Baucis & Philemon": {
    cast: ["Baucis", "Philemon", "Jupiter", "Mercury", "The inhospitable neighbors"],
    locus: "A poor Phrygian cottage and its transformed temple",
    motifs: ["xenia", "recognition", "shared wish", "intertwined trees"]
  },
  "Erysichthon & Mestra": {
    cast: ["Erysichthon", "Ceres", "Fames / Hunger", "Mestra", "Neptune", "The sacred oak"],
    locus: "Ceres’ grove and the marketplace of repeated sale",
    motifs: ["sacrilege", "insatiability", "self-consumption", "protean escape"]
  },

  "Achelous & Hercules": {
    cast: ["Achelous", "Hercules", "Deianira", "Theseus", "The Naiads"],
    locus: "Achelous’ river cave and the remembered wrestling ground",
    motifs: ["rival suitors", "protean combat", "broken horn", "cornucopia"]
  },
  "Nessus & Deianira": {
    cast: ["Nessus", "Deianira", "Hercules", "Achelous", "The river Evenus"],
    locus: "The crossing of the swollen Evenus",
    motifs: ["assault", "poisoned gift", "deceptive memory", "delayed revenge"]
  },
  "Death of Hercules": {
    cast: ["Hercules", "Deianira", "Nessus", "Lichas", "Hyllus", "Jupiter", "Hebe"],
    locus: "Trachis and the pyre on Mount Oeta",
    motifs: ["poisoned garment", "apotheosis", "mortal remainder", "divine recognition"]
  },
  "Galanthis": {
    cast: ["Alcmene", "Hercules", "Juno", "Lucina", "Galanthis"],
    locus: "Alcmene’s obstructed birthing chamber",
    motifs: ["labor", "deceptive laughter", "kneeling animal", "etiology"]
  },
  "Dryope": {
    cast: ["Dryope", "Lotis", "Iole", "Andraemon", "Amphissus"],
    locus: "A lakeside shrine and the lotus tree",
    motifs: ["unwitting wound", "rooted motherhood", "warning", "shrine"]
  },
  "Iolaus & the sons of Callirhoe": {
    cast: ["Iolaus", "Hebe", "Callirhoe", "Jupiter", "Themis", "The gods"],
    locus: "The divine council and the battlefield of Thebes",
    motifs: ["rejuvenation", "accelerated age", "fate", "divine privilege"]
  },
  "Byblis & Caunus": {
    cast: ["Byblis", "Caunus", "The letter-bearing servant", "The Leleges", "The nymphs"],
    locus: "Miletus and Byblis’ wandering through Caria",
    motifs: ["forbidden desire", "self-persuasion", "letter", "dissolving tears"]
  },
  "Iphis & Ianthe": {
    cast: ["Iphis", "Ianthe", "Telethusa", "Ligdus", "Isis"],
    locus: "Phaestus on Crete and the temple of Isis",
    motifs: ["gendered expectation", "concealment", "prayer", "marital transformation"]
  },

  "Orpheus & Eurydice": {
    cast: ["Orpheus", "Eurydice", "Hymenaeus", "Pluto / Dis", "Proserpina", "The shades"],
    locus: "Thrace and the road through the Underworld",
    motifs: ["katabasis", "song", "condition", "second loss"]
  },
  "Orpheus’ audience": {
    cast: ["Orpheus", "The trees", "The rocks", "The wild animals", "Cyparissus"],
    locus: "A treeless Thracian hill becoming a grove",
    motifs: ["enchantment", "gathered nature", "catalogue", "singer as world-maker"]
  },
  "Cyparissus": {
    cast: ["Cyparissus", "Apollo", "The sacred stag"],
    locus: "The shaded fields of Ceos",
    motifs: ["accidental death", "unending grief", "cypress", "memorial"]
  },
  "Hyacinthus": {
    cast: ["Hyacinthus", "Apollo", "Zephyrus", "The discus"],
    locus: "A Spartan athletic field",
    motifs: ["athletic beauty", "deflected object", "lament", "flower inscription"]
  },
  "Propoetides & Cerastae": {
    cast: ["Venus", "The Propoetides", "The Cerastae", "The Cypriot altar"],
    locus: "Amathus on Cyprus",
    motifs: ["impiety", "hospitality violated", "shame", "stone and horns"]
  },
  "Pygmalion": {
    cast: ["Pygmalion", "Pygmalion’s statue", "Venus", "The festival worshippers"],
    locus: "Pygmalion’s Cypriot studio and Venus’ altar",
    motifs: ["artifice", "desire", "ivory", "animation"]
  },
  "Myrrha": {
    cast: ["Myrrha", "Cinyras", "The nurse", "Venus", "The Furies"],
    locus: "Cyprus, the darkened chamber, and Myrrha’s exile",
    motifs: ["forbidden desire", "speech and silence", "deception", "pregnant tree"]
  },
  "Adonis born": {
    cast: ["Myrrha", "Adonis", "Lucina", "The Naiads"],
    locus: "The fissuring myrrh tree",
    motifs: ["tree labor", "birth", "beauty", "maternal remainder"]
  },
  "Atalanta & Hippomenes": {
    cast: ["Atalanta", "Hippomenes", "Venus", "The oracle", "Cybele"],
    locus: "The racecourse and Cybele’s desecrated shrine",
    motifs: ["oracle", "golden apples", "erotic delay", "lions"]
  },
  "Death of Adonis": {
    cast: ["Adonis", "Venus", "The boar", "The Anemone"],
    locus: "The Cypriot hunting ground",
    motifs: ["warning ignored", "blood", "flower", "annual mourning"]
  },

  "Death of Orpheus": {
    cast: ["Orpheus", "The Ciconian Maenads", "Bacchus", "Eurydice", "The river Hebrus"],
    locus: "Thrace, the Hebrus, and the reunited Underworld",
    motifs: ["dismembered song", "unheard music", "poetic survival", "reunion"]
  },
  "Midas’ golden touch": {
    cast: ["Midas", "Bacchus", "Silenus", "Midas’ servants", "The river Pactolus"],
    locus: "Phrygia and the gold-bearing Pactolus",
    motifs: ["misjudged wish", "hunger", "washing away", "etiology"]
  },
  "Midas’ ears": {
    cast: ["Midas", "Apollo", "Pan", "Tmolus", "Midas’ barber", "The reeds"],
    locus: "Mount Tmolus and the whispering reed-bed",
    motifs: ["aesthetic judgment", "concealed shame", "earth as listener", "rumor"]
  },
  "Laomedon & Hesione": {
    cast: ["Laomedon", "Hesione", "Neptune", "Apollo", "Hercules", "Telamon"],
    locus: "The walls and shore of Troy",
    motifs: ["broken contract", "city wall", "sea monster", "rescue debt"]
  },
  "Peleus & Thetis": {
    cast: ["Peleus", "Thetis", "Proteus", "Chiron", "Achilles"],
    locus: "The sea cave on the Thessalian coast",
    motifs: ["prophecy", "shape-shifting resistance", "binding", "dynastic marriage"]
  },
  "Peleus & Psamathe": {
    cast: ["Peleus", "Psamathe", "Phocus", "The wolf", "Thetis"],
    locus: "Trachis and the ravaged cattle fields",
    motifs: ["exile", "maternal revenge", "supplication", "wolf to stone"]
  },
  "Ceyx’s voyage": {
    cast: ["Ceyx", "Alcyone", "Aeolus", "The sailors", "The storm winds"],
    locus: "The Aegean in a night storm",
    motifs: ["foreknowledge", "separation", "shipwreck", "unburied body"]
  },
  "House of Sleep": {
    cast: ["Somnus / Sleep", "Morpheus", "Iris", "The dream-shapes", "Juno"],
    locus: "The silent Cimmerian cave of Sleep",
    motifs: ["ekphrasis", "dream craft", "imitation", "divine message"]
  },
  "Ceyx & Alcyone": {
    cast: ["Ceyx", "Alcyone", "Morpheus", "Juno", "The gods of the sea"],
    locus: "Trachis’ shore and the winter sea",
    motifs: ["dream recognition", "mourning", "halcyon birds", "conjugal reunion"]
  },

  "Aulis, the serpent, and Iphigenia": {
    cast: ["Agamemnon", "Iphigenia", "Diana", "Calchas", "The Greeks", "The serpent and sparrows"],
    locus: "The becalmed Greek camp at Aulis",
    motifs: ["omen", "sacrifice", "substitution", "war departure"]
  },
  "House of Fame": {
    cast: ["Fama / Rumor", "Credulity", "Error", "Joy", "Fear", "The thousand voices"],
    locus: "Fame’s bronze house at the center of the world",
    motifs: ["networked speech", "amplification", "uncertainty", "spectacle"]
  },
  "Cygnus & Achilles": {
    cast: ["Achilles", "Cygnus", "Neptune", "The Greeks", "The Trojans"],
    locus: "The first fighting on Troy’s shore",
    motifs: ["invulnerable body", "strangling", "swan", "war marvel"]
  },
  "Caenis / Caeneus": {
    cast: ["Caenis / Caeneus", "Neptune", "Nestor", "The Centaurs"],
    locus: "Thessaly and the remembered wedding battle",
    motifs: ["sexual violence", "wish", "gendered body", "invulnerability"]
  },
  "Centauromachy": {
    cast: ["Pirithous", "Hippodame", "Theseus", "Nestor", "Eurytus", "The Lapiths", "The Centaurs"],
    locus: "Pirithous’ wedding hall in Thessaly",
    motifs: ["banquet broken", "hybrid violence", "catalogue of wounds", "epic excess"]
  },
  "Periclymenus": {
    cast: ["Periclymenus", "Hercules", "Neptune", "Nestor"],
    locus: "Pylos in Nestor’s embedded war memory",
    motifs: ["shape-shifting combat", "eagle", "heroic exception", "narrator bias"]
  },
  "Death of Achilles": {
    cast: ["Achilles", "Apollo", "Paris", "Neptune", "Thetis", "The Greeks"],
    locus: "Troy’s battlefield and Achilles’ funeral pyre",
    motifs: ["fated weapon", "divine agency", "small ashes", "contested arms"]
  },

  "Ajax & Ulysses": {
    cast: ["Ajax", "Ulysses / Odysseus", "Agamemnon", "The Greek chiefs", "The absent Achilles"],
    locus: "The Greek council before Achilles’ arms",
    motifs: ["rhetorical agon", "merit", "memory", "unstable heroism"]
  },
  "Death of Ajax": {
    cast: ["Ajax", "Ulysses / Odysseus", "The Greek chiefs", "The hyacinth flower"],
    locus: "The Greek camp after the judgment",
    motifs: ["shame", "self-wounding", "flower letters", "compressed metamorphosis"]
  },
  "Fall of Troy & Polyxena": {
    cast: ["Polyxena", "Hecuba", "Neoptolemus", "Achilles’ ghost", "Priam", "The Trojan women"],
    locus: "Fallen Troy and Achilles’ tomb",
    motifs: ["sacrifice", "captivity", "dignity", "spectral demand"]
  },
  "Hecuba & Polydorus": {
    cast: ["Hecuba", "Polydorus", "Polymestor", "The Trojan women", "Agamemnon"],
    locus: "The Thracian shore and Polymestor’s court",
    motifs: ["maternal grief", "gold", "revenge", "human voice lost"]
  },
  "Memnon": {
    cast: ["Memnon", "Aurora", "Jupiter", "The Memnonides", "Achilles"],
    locus: "Memnon’s pyre and the eastern sky",
    motifs: ["maternal petition", "ashes", "memorial birds", "recurring combat"]
  },
  "Aeneas’ departure & Oenotrophi": {
    cast: ["Aeneas", "Anchises", "Ascanius", "Anius", "The Oenotrophi", "Bacchus"],
    locus: "Troy, Delos, and the sea route west",
    motifs: ["survival", "hospitality", "provision", "capture escaped"]
  },
  "Galatea, Acis & Polyphemus": {
    cast: ["Galatea", "Acis", "Polyphemus", "Scylla", "The sea nymphs"],
    locus: "The Sicilian shore beneath Mount Etna",
    motifs: ["pastoral song", "jealous violence", "crushed body", "river god"]
  },
  "Glaucus": {
    cast: ["Glaucus", "The sea gods", "Oceanus", "Tethys", "Circe"],
    locus: "The Boeotian shore and the sea gods’ domain",
    motifs: ["wonder", "magic grass", "marine initiation", "unrequited desire"]
  },

  "Glaucus, Scylla & Circe": {
    cast: ["Glaucus", "Scylla", "Circe", "Hecate", "The sea monsters"],
    locus: "Circe’s island and Scylla’s Sicilian pool",
    motifs: ["rejected desire", "jealous pharmaka", "monstrous lower body", "coastal danger"]
  },
  "Cercopes": {
    cast: ["Hercules", "The Cercopes", "Jupiter"],
    locus: "Lydia during Hercules’ wandering",
    motifs: ["comic capture", "mockery", "black tails", "moral fable"]
  },
  "Cumaean Sibyl": {
    cast: ["The Cumaean Sibyl", "Aeneas", "Apollo", "Achates"],
    locus: "The Sibyl’s cave at Cumae",
    motifs: ["failed bargain", "longevity", "shrinking body", "voice"]
  },
  "Achaemenides & Macareus": {
    cast: ["Achaemenides", "Macareus", "Ulysses / Odysseus", "Aeneas", "Polyphemus", "Circe"],
    locus: "Sicily and the memory of Circe’s island",
    motifs: ["recognition", "abandonment", "survivor testimony", "epic crossover"]
  },
  "Picus, Canens & Circe": {
    cast: ["Picus", "Canens", "Circe", "Saturn", "Janus"],
    locus: "Latium’s sacred woods",
    motifs: ["rejected goddess", "woodpecker", "dissolving song", "Italian aition"]
  },
  "Diomedes in Italy": {
    cast: ["Diomedes", "Venulus", "Acmon", "Venus", "The transformed companions"],
    locus: "Arpi and the Italian courts",
    motifs: ["war afterlife", "blasphemy", "seabirds", "refused alliance"]
  },
  "Aeneas’ apotheosis": {
    cast: ["Aeneas", "Venus", "Numicius", "Jupiter", "Ascanius"],
    locus: "The river Numicius in Latium",
    motifs: ["purification", "mortal residue", "Indiges", "dynastic continuity"]
  },
  "Vertumnus & Pomona": {
    cast: ["Vertumnus", "Pomona", "Iphis of Cyprus", "Anaxarete"],
    locus: "Pomona’s enclosed orchard in Latium",
    motifs: ["disguise", "horticulture", "persuasive inset", "consent"]
  },
  "Iphis & Anaxarete": {
    cast: ["Iphis of Cyprus", "Anaxarete", "Vertumnus", "Pomona", "The Cypriot mourners"],
    locus: "Salamis on Cyprus",
    motifs: ["unreturned desire", "funeral spectacle", "hard heart", "stone"]
  },
  "Romulus & Hersilia": {
    cast: ["Romulus", "Hersilia", "Mars", "Juno", "The Roman and Sabine peoples"],
    locus: "Early Rome and the divine sky",
    motifs: ["civic apotheosis", "widow’s grief", "Quirinus", "Hora"]
  },

  "Myscelus & Croton": {
    cast: ["Myscelus", "Hercules", "Croton", "The Achaean judges"],
    locus: "Achaea and the foundation site of Croton",
    motifs: ["dream command", "law", "white and black stones", "foundation"]
  },
  "Pythagoras": {
    cast: ["Pythagoras", "Numa", "The listening Crotoniates", "The transmigrating soul"],
    locus: "Croton’s philosophical school",
    motifs: ["metempsychosis", "vegetarian ethics", "flux", "cosmic continuity"]
  },
  "Egeria & Hippolytus": {
    cast: ["Egeria", "Hippolytus / Virbius", "Theseus", "Phaedra", "Diana / Trivia", "Aesculapius"],
    locus: "Diana’s grove at Aricia",
    motifs: ["grief", "restoration", "new name", "spring"]
  },
  "Tages & Cipus": {
    cast: ["Tages", "Cipus", "The Etruscan ploughman", "The Roman Senate", "The haruspex"],
    locus: "Etruscan soil and Rome’s city gate",
    motifs: ["earthborn prophecy", "horns", "kingship refused", "civic boundary"]
  },
  "Aesculapius comes to Rome": {
    cast: ["Aesculapius", "The Roman envoys", "Apollo", "The people of Epidaurus", "The Roman people"],
    locus: "Epidaurus, the sea route, and Tiber Island",
    motifs: ["serpent epiphany", "public health", "translation of cult", "arrival"]
  },
  "Julius Caesar": {
    cast: ["Julius Caesar", "Venus", "Jupiter", "Augustus", "The conspirators", "The Roman people"],
    locus: "Rome and the celestial path of Caesar’s soul",
    motifs: ["assassination", "comet", "dynasty", "political apotheosis"]
  },
  "Ovid’s epilogue": {
    cast: ["Ovid’s narrator", "Augustus", "Jupiter", "The Roman people", "Future readers"],
    locus: "Rome, the empire, and the poem’s imagined future",
    motifs: ["poetic monument", "name", "circulation", "survival"]
  }
};

export function getEpisodeStudy(title) {
  return EPISODE_STUDY[title] || {
    cast: [],
    locus: "Within the book’s mythic geography",
    motifs: ["identity", "change", "narrative consequence"]
  };
}

