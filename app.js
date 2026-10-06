import { drag as d3Drag } from "d3-drag";
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY } from "d3-force";
import { select as d3Select } from "d3-selection";
import { zoom as d3Zoom, zoomIdentity } from "d3-zoom";
import { gsap } from "gsap";
import { getEpisodeStudy } from "./episode-study.js";
import {
  getFigure,
  figureAct,
  appearances,
  childrenOf,
  housesForBook,
  figuresForBook,
  FIGURES,
  HOUSES
} from "./data/genealogy/index.js";
import { episodeReading, episodeBeats, bookReading, episodeCommentary, bookCommentary } from "./data/readings/index.js";
import { catasterismFor } from "./data/catasterisms.js";
import { labelArc } from "./lib/radial.js";
import { descentGraph, pruneGraph, familyLayout, lineageOf, globalGenerations } from "./lib/genealogy-layout.js";
import { PLACES, OTHERWORLD, JOURNEYS, getPlace, placesForBook, placesForFigure, placesForEpisode, journeyLegs } from "./data/places/index.js";
import { CHART, LAND_PATH, GRATICULE_PATH, PLACE_POINTS, PLACE_EXTENTS } from "./data/places/chart.js";
import { placeLabels, chartImportance, declutter, routePath, territoryLabel, territoryOutline, scaleBar } from "./lib/map-layout.js";
import {
  renderStarField,
  renderCatasterismRing,
  renderTickRing,
  renderSpokes,
  renderArcLabels,
  renderCircularInscription,
  renderSunMedallion,
  renderMeridians,
  renderInstrumentField,
  renderRhumbNetwork,
  renderCompassRose,
  renderSeaHatch
} from "./lib/ornament.js";

const ERAS = [
  { name: "Primordial age", short: "Primordial age", range: "Creation → perhaps 1600 BCE", books: [1, 2], color: "#63a69f", note: "Cosmic origins, divine generations, and a time before ordinary history." },
  { name: "Early heroic age", short: "Early heroic age", range: "Approximately 1600–1350 BCE", books: [3, 4, 5, 6], color: "#e0a543", note: "The royal houses of Thebes and Argos; gods and mortals contest art, sight, and authority." },
  { name: "Mature heroic age", short: "Mature heroic age", range: "Approximately 1350–1200 BCE", books: [7, 8, 9, 10, 11], color: "#d85a42", note: "The Argonauts, Theseus, Hercules, Orpheus, and the generation approaching Troy." },
  { name: "Trojan War era", short: "Trojan War", range: "Approximately 1250–1150 BCE", books: [12, 13], color: "#b14936", note: "The Greek expedition, Achilles, the fall of Troy, and the dispersal of survivors." },
  { name: "From Troy to Rome", short: "Troy to Rome", range: "Approximately 1180–700s BCE", books: [14], color: "#3e8a85", note: "Aeneas in Italy, the Latin landscape, Romulus, and Rome’s legendary beginnings." },
  { name: "Roman historical era", short: "Roman history", range: "Approximately 700s BCE–8 CE", books: [15], color: "#345e86", note: "Numa, Roman cult and philosophy, Caesar, Augustus, and Ovid’s poetic survival." }
];

const BOOKS = [
  {
    id: 1, title: "Origins & Desire", lens: "From chaos to the first unstable forms",
    date: "Creation → perhaps before 2000 BCE", setting: "Cosmos, Arcadia, Thessaly, Egypt",
    summary: "Ovid begins with undifferentiated Chaos, orders the elements, and races through the four ages, human violence, and the Flood. The renewed world immediately produces new instability: divine desire turns Daphne into laurel and Io into a wandering cow.",
    episodes: [
      ["Creation", "A god—or nature—separates the tangled mass of Chaos into a habitable cosmos.", "Chaos → ordered elements", "Cosmogony makes separation the poem’s first transformation."],
      ["The Four Ages", "Gold declines through silver and bronze into violent iron; moral history is figured as material change.", "Gold → iron", "Ages are ethical metaphors, not archaeological periods."],
      ["Lycaon", "The Arcadian king tests Jupiter with a cannibal feast and becomes a wolf.", "King → wolf", "Outer form discloses an already-bestial character."],
      ["The Great Flood", "Jupiter drowns the violent human race; Deucalion and Pyrrha survive.", "World → water", "A near return to primordial formlessness."],
      ["Deucalion & Pyrrha", "The survivors throw their mother’s ‘bones’—stones of Earth—behind them to renew humanity.", "Stones → people", "Riddle, ritual, and etymological play remake the species."],
      ["Apollo & Daphne", "Cupid wounds Apollo with desire and Daphne with aversion; flight ends in arboreal transformation.", "Nymph → laurel", "Escape preserves Daphne’s body by making it permanently available as Apollo’s emblem."],
      ["Io", "Jupiter conceals Io as a cow; Juno’s surveillance drives her across the world before restoration and Egyptian divinity.", "Woman → cow → Isis", "Change becomes concealment, suffering, and eventual cult."],
      ["Pan & Syrinx", "The pursued nymph becomes river reeds; Pan turns their altered body into his pipe.", "Nymph → reeds → instrument", "A voice survives through the material produced by flight."]
    ],
    cast: [
      ["Ovid’s narrator", "poet", "Invokes gods who are both the poem’s subject and agents of its changing forms."],
      ["Jupiter / Jove", "god", "Ruler whose punishments and desires repeatedly destabilize mortal bodies."],
      ["Deucalion", "mortal", "Pious flood survivor; with Pyrrha, reconstitutes humanity."],
      ["Pyrrha", "mortal", "Interprets Themis’ oracle with Deucalion and becomes a second mother of humankind."],
      ["Apollo", "god", "Slayer of Python, proud archer, and unsuccessful pursuer of Daphne."],
      ["Daphne", "nymph", "Rejects marriage and escapes Apollo through transformation into laurel."],
      ["Io", "mortal / deity", "Priestess pursued by Jupiter, guarded by Argus, and ultimately identified with Isis."],
      ["Mercury", "god", "Kills Argus after narrating the inset tale of Pan and Syrinx."]
    ],
    themes: [
      ["Order & recurrence", "Cosmic order never abolishes chaos; violence and flood repeatedly threaten to undo formation."],
      ["Power and the body", "Gods change bodies to punish, possess, conceal, or memorialize."],
      ["Speech under pressure", "Io scratches letters with a hoof; Syrinx survives as music; altered bodies seek new media."],
      ["Predation & escape", "Daphne’s flight establishes a pattern in which metamorphosis protects and appropriates at once."]
    ],
    terms: [
      ["Cosmogony", "noun", "An account of the origin and ordering of the cosmos.", "Term"],
      ["Aition", "noun", "An origin-story explaining a custom, name, ritual, object, or natural feature.", "Term"],
      ["Metamorphosis", "noun", "A change of form or substance; Ovid tests whether identity persists through it.", "Term"],
      ["Catasterism", "noun", "Transformation into a constellation or placement among the stars.", "Term"]
    ],
    ties: [
      ["Hesiod’s Ages", "The metallic ages adapt a Greek didactic tradition familiar from Hesiod’s Works and Days, but Ovid compresses and reshapes it."],
      ["Flood traditions", "Deucalion and Pyrrha belong to a wider Mediterranean family of deluge and human-renewal stories."],
      ["Augustan laurel", "Apollo’s appropriation of Daphne as laurel resonates with poetic victory, Roman triumph, and Augustus’ patron god."]
    ]
  },
  {
    id: 2, title: "Fire Across the Sky", lens: "Ambition, surveillance, and celestial scars",
    date: "Perhaps c. 2000–1600 BCE", setting: "Palace of the Sun, sky, Arcadia, Athens, Crete",
    summary: "Phaethon’s demand for proof of paternity nearly burns the cosmos and leaves permanent marks on earth and sky. The book then follows divine desire and punishment through Callisto, Coronis, Ocyroe, Battus, Aglauros, and Europa.",
    episodes: [
      ["Phaethon at the Sun’s palace", "The youth asks the Sun to prove his paternity by granting any wish.", "Doubt → catastrophic proof", "An ekphrastic palace opens onto a lesson about limits."],
      ["The solar chariot", "Unable to hold the celestial path, Phaethon scorches the earth until Jupiter strikes him down.", "World → scorched landscape", "A failed driver explains deserts, darkened peoples, and altered rivers."],
      ["The Heliades & Cycnus", "Phaethon’s sisters become poplars weeping amber; his mourner Cycnus becomes a swan.", "Mourners → trees and bird", "Grief is materialized as landscape and species."],
      ["Callisto", "Jupiter violates Diana’s follower; Juno makes her a bear, and Jupiter later sets mother and son among the stars.", "Nymph → bear → constellation", "Catasterism saves and displays while Juno still contests the honor."],
      ["Coronis & Ocyroe", "A raven reports Coronis’ betrayal; the unborn Aesculapius is rescued, and prophetic Ocyroe becomes a mare.", "Woman → punished body; prophet → mare", "Knowledge and speech carry mortal danger."],
      ["Battus & Aglauros", "Mercury turns a false witness to stone and later petrifies Envy-ridden Aglauros.", "Humans → stone", "Moral fixity becomes literal immobility."],
      ["Europa", "Jupiter takes the form of a tame white bull and carries the princess across the sea to Crete.", "God → bull", "Divine self-transformation enables abduction and begins the Theban sequence."]
    ],
    cast: [
      ["Phaethon", "mortal", "Son of the Sun whose need for recognition exceeds his capacity to control its proof."],
      ["Sol / Phoebus", "god", "Radiant father trapped by an oath into granting a lethal request."],
      ["Callisto", "nymph", "Follower of Diana transformed after Jupiter’s assault."],
      ["Arcas", "mortal / constellation", "Callisto’s son, nearly made to kill his bear-shaped mother."],
      ["Coronis", "mortal", "Apollo’s lover, killed when her infidelity is reported."],
      ["Aesculapius", "god", "Unborn child rescued from Coronis’ pyre; later Rome’s healing god."],
      ["Mercury", "god", "Trickster who tests speech, trust, hospitality, and desire."],
      ["Europa", "mortal", "Phoenician princess whose abduction carries the narrative toward Crete and Thebes."]
    ],
    themes: [
      ["Measure & excess", "Phaethon cannot hold the mean path; failure of proportion threatens the ordered world."],
      ["Seeing and reporting", "Ravens, prophets, and witnesses show that information can transform the informant."],
      ["Celestial memory", "Stars and physical geography become archives of disaster."],
      ["Divine disguise", "The gods alter themselves as readily as mortals, but usually from positions of power."]
    ],
    terms: [
      ["Ekphrasis", "noun", "Vivid verbal description of an artwork, building, object, or visual scene.", "Term"],
      ["Hubris", "noun", "Overreaching that violates human limits or divine order; a useful lens, though not Ovid’s single formula.", "Term"],
      ["Etiology", "noun", "Explanation of causes or origins; in myth, often equivalent to an aition.", "Term"]
    ],
    ties: [
      ["Constellation myth", "Callisto and Arcas connect narrative suffering to the visible Great and Little Bear."],
      ["Kingship and succession", "Phaethon’s paternity crisis anticipates later conflicts where genealogy authorizes power."],
      ["Europa’s afterlife", "Her sea-crossing becomes foundational for Cretan and Theban myth and lends her name to a continent."]
    ]
  },
  {
    id: 3, title: "The House of Cadmus", lens: "Vision, refusal, and Theban catastrophe",
    date: "Perhaps c. 1600–1450 BCE", setting: "Phoenicia, Thebes, Mount Cithaeron",
    summary: "Europa’s brother Cadmus founds Thebes and fathers a dynasty repeatedly destroyed by encounters with divinity. Actaeon sees too much, Semele asks to see too much, Narcissus cannot see beyond himself, and Pentheus refuses to recognize Bacchus.",
    episodes: [
      ["Cadmus & the dragon", "Following Apollo’s oracle, Cadmus kills Mars’ serpent and sows its teeth; armed Spartoi rise from the earth.", "Teeth → warriors", "Thebes begins in autochthony and fratricidal violence."],
      ["Actaeon", "The hunter accidentally sees Diana bathing and is changed into a stag, then killed by his own hounds.", "Hunter → hunted stag", "Identity becomes unreadable to the companions and animals that knew him."],
      ["Semele", "Juno engineers a demand that Jupiter appear in full divinity; Semele burns, while Bacchus is rescued.", "Mortal body → ash; fetus → god", "The unmediated divine cannot fit mortal sight."],
      ["Tiresias", "After living as both man and woman, the seer judges a divine argument and is blinded but granted prophecy.", "Man ↔ woman; sight → foresight", "Embodied knowledge produces authority and punishment."],
      ["Echo & Narcissus", "Echo is reduced to repetition; Narcissus falls for his image and wastes into a flower.", "Nymph → voice; youth → narcissus", "Failed reciprocity links voice without body to image without other."],
      ["Pentheus & Bacchus", "The king denies Bacchus, hears Acoetes’ story, and is torn apart by his mother and the Bacchants.", "King → misrecognized prey", "Refusal to see the god ends in theatrical, collective dismemberment."],
      ["Tyrrhenian pirates", "Sailors who try to kidnap Bacchus become dolphins while vines and beasts overtake the ship.", "Pirates → dolphins", "Fluid divine epiphany overwhelms commercial violence."]
    ],
    cast: [
      ["Cadmus", "founder", "Europa’s brother and founder of Thebes, whose family becomes a laboratory of tragic change."],
      ["Actaeon", "hunter", "Cadmus’ grandson, destroyed when vision crosses a divine boundary."],
      ["Diana", "goddess", "Virgin huntress whose privacy and authority are defended through transformation."],
      ["Semele", "mortal", "Mother of Bacchus, consumed by the sight of Jupiter’s full power."],
      ["Tiresias", "seer", "Crosses sex categories and exchanges sight for prophetic vision."],
      ["Echo", "nymph", "Punished into repetition; her dispersed body leaves an acoustic remainder."],
      ["Narcissus", "mortal", "Beautiful youth trapped by an image he cannot possess."],
      ["Pentheus", "king", "Rationalizing ruler who cannot recognize the new god Bacchus."]
    ],
    themes: [
      ["Dangerous vision", "Seeing a god, a body, or one’s own reflection can shatter the observer."],
      ["Recognition", "Tragedy turns on failed reading: gods go unrecognized, kin mistake kin, names detach from bodies."],
      ["Theater & spectatorship", "Pentheus becomes both spectator and spectacle; Ovid implicates readers in looking."],
      ["The unstable household", "Thebes’ civic foundation cannot contain the divine violence inside its royal family."]
    ],
    terms: [
      ["Epiphany", "noun", "The manifestation or visible appearance of a deity.", "Term"],
      ["Sparagmos", "noun", "Ritual or ecstatic dismemberment, especially in Dionysian myth.", "Term"],
      ["Autóchthony", "noun", "The claim that a people sprang from the land itself.", "Term"]
    ],
    ties: [
      ["Theban tragedy", "Semele and Pentheus sit behind Euripides’ Bacchae; Actaeon and the house of Cadmus echo through Greek tragedy."],
      ["Dionysian poetics", "Bacchus enters as a god of altered identity, performance, narrative seduction, and resistant belief."],
      ["Narcissism and echo", "Modern psychological terms preserve these Ovidian figures while narrowing the poem’s more complex treatment of relation."]
    ]
  },
  {
    id: 4, title: "Tales Against the Loom", lens: "Forbidden stories, unstable bodies, and Perseus",
    date: "Perhaps c. 1500–1400 BCE", setting: "Thebes, Babylon, Orchomenus, North Africa, Ethiopia",
    summary: "The daughters of Minyas refuse Bacchic worship and answer ritual with storytelling. Their inset tales explore secrecy, desire, gendered embodiment, and punitive change before the Theban house collapses and Perseus carries the narrative outward.",
    episodes: [
      ["The Minyades", "Three sisters reject Bacchus’ rites and spin while trading stories; they become bats as the room turns wild.", "Women → bats", "Storytelling competes with ritual until the god absorbs both."],
      ["Pyramus & Thisbe", "Babylonian lovers separated by a wall die through a chain of signs misread; mulberries turn dark with blood.", "White fruit → dark fruit", "Landscape keeps the lovers’ memory."],
      ["Mars & Venus", "The Sun exposes the adulterous gods; Vulcan traps them in a finely wrought net.", "Private act → public spectacle", "An inset tale about surveillance, craft, and shame."],
      ["Leucothoe & Clytie", "The Sun’s desire leads to burial and incense; Clytie wastes into a flower that turns toward him.", "Woman → frankincense; nymph → heliotrope", "Love becomes vegetal fixation and memorial."],
      ["Salmacis & Hermaphroditus", "The nymph’s prayer fuses her body with the resistant youth.", "Two bodies → one double-sexed body", "Ovid frames mixture as both transformation and violation."],
      ["Athamas & Ino", "Juno sends madness into the household; Ino and Melicertes leap into the sea and become deities.", "Mortals → sea gods", "Apotheosis follows domestic catastrophe."],
      ["Cadmus & Harmonia", "The aged founders ask to share one fate and become intertwined serpents.", "Couple → serpents", "The Theban cycle closes with a mutual transformation."],
      ["Perseus & Atlas", "Atlas refuses hospitality; Perseus displays Medusa’s head and makes him a mountain.", "Titan → mountain", "Geography is generated by weaponized sight."],
      ["Perseus & Andromeda", "Perseus rescues the chained princess from a sea monster and petrifies rivals with Medusa.", "Seaweed hardens; enemies → stone", "Heroic rescue is shadowed by repeated coercion and display."]
    ],
    cast: [
      ["Minyades", "storytellers", "Daughters of Minyas who resist Bacchic worship through domestic labor and inset narration."],
      ["Pyramus", "lover", "Babylonian youth whose misreading turns secret love into shared death."],
      ["Thisbe", "lover", "Reads Pyramus’ body and completes the lovers’ fatal pact."],
      ["Salmacis", "nymph", "Pursues Hermaphroditus and prays for permanent bodily union."],
      ["Hermaphroditus", "youth", "Child of Mercury and Venus, fused against his will with Salmacis."],
      ["Cadmus & Harmonia", "founders", "Theban couple whose final shared form closes their dynasty’s central sequence."],
      ["Perseus", "hero", "Son of Jupiter and Danaë; carries Medusa’s head as portable transformative force."],
      ["Andromeda", "princess", "Exposed for her mother’s boast and transferred from monster to heroic marriage."]
    ],
    themes: [
      ["Narration as resistance", "The Minyades tell stories instead of worshipping, but their tales reproduce the god’s world of change."],
      ["Secrecy & exposure", "Cracks, nets, sunlight, rumor, and Medusa’s gaze convert private acts into public consequences."],
      ["Mixture", "Bodies, genres, sexes, and narrative frames refuse stable boundaries."],
      ["Monument and memory", "Fruit, incense, flowers, mountains, and stone become durable records of violence."]
    ],
    terms: [
      ["Frame narrative", "noun", "A story that contains or motivates one or more inset stories.", "Term"],
      ["Androgyny", "noun", "The combination or crossing of culturally gendered traits; distinct from Ovid’s coercive fusion scene.", "Term"],
      ["Petrification", "noun", "Transformation into stone, often triggered by Medusa’s head or emotional hardening.", "Term"]
    ],
    ties: [
      ["Shakespeare", "Pyramus and Thisbe becomes the comic play-within-the-play in A Midsummer Night’s Dream."],
      ["The Medusa tradition", "Ovid’s Perseus sequence helps establish petrifying sight as both monstrous power and heroic technology."],
      ["Hermaphroditus in antiquity", "The figure participates in ancient visual and religious traditions of double-sexed embodiment that exceed modern categories."]
    ]
  },
  {
    id: 5, title: "Contests of Voice", lens: "Who has the authority to tell the world?",
    date: "Perhaps c. 1500–1400 BCE", setting: "Ethiopia, Helicon, Sicily, the Underworld",
    summary: "Perseus defends his marriage through mass petrification, then the Muses recount their contest with the Pierides. Their song centers on Proserpina’s abduction and the contested remaking of Sicily, ending with challengers converted into noisy birds.",
    episodes: [
      ["Perseus & Phineus", "A wedding feast becomes battle; Medusa’s head fixes attackers in a gallery of final gestures.", "Warriors → stone", "Petrification converts narrative action into visual tableau."],
      ["Pyreneus & the Muses", "A tyrant traps the Muses, then falls trying to follow their flight.", "Threat → failed imitation", "Divine mobility defeats possessive hospitality."],
      ["Pierides & Muses", "Mortal sisters challenge the Muses in song and are judged inferior.", "Singers → magpies", "Punishment makes contentious speech perpetual but discredited noise."],
      ["Pluto & Proserpina", "Venus prompts desire; Pluto abducts Proserpina, and Ceres’ grief interrupts the earth’s fertility.", "Maiden → underworld queen; earth → famine", "Marriage, seasonal change, and sovereignty are fused."],
      ["Cyane & Ascalaphus", "Cyane dissolves in grief; Ascalaphus is made an owl for revealing the pomegranate seeds.", "Nymph → water; witness → owl", "Witness and mourning change into environmental forms."],
      ["Arethusa & Alpheus", "The fleeing nymph becomes water and travels underground to Sicily.", "Nymph → spring", "Landscape offers both escape and continued pursuit."],
      ["Triptolemus & Lyncus", "Ceres commissions agriculture; a jealous king tries to kill her emissary and becomes a lynx.", "King → lynx", "Cult and cultivation spread through divine gift and punitive naming."]
    ],
    cast: [
      ["Perseus", "hero", "Completes his Ethiopian episode by turning a crowded court into stone."],
      ["Calliope", "Muse", "Chief singer whose long performance contains the Proserpina cycle."],
      ["Pierides", "mortal singers", "Challenge divine cultural authority and become magpies."],
      ["Proserpina", "goddess", "Abducted daughter who becomes a divided sovereign of two worlds."],
      ["Ceres", "goddess", "Mother whose grief makes agriculture and human survival negotiable."],
      ["Pluto / Dis", "god", "Underworld ruler whose marriage binds death to seasonal return."],
      ["Arethusa", "nymph", "Flees Alpheus through water and becomes a Sicilian spring."],
      ["Triptolemus", "culture hero", "Carries cultivated grain across the world in Ceres’ dragon-drawn car."]
    ],
    themes: [
      ["Cultural authority", "Contests ask who may represent gods, desire, and cosmic order."],
      ["Voice and punishment", "Losing singers retain sound but lose credible human speech."],
      ["Rape and cosmic order", "Proserpina’s abduction is converted into seasonal and political settlement without erasing grief."],
      ["Sicilian geography", "Springs, lakes, fields, and volcanic spaces become a mythographic map."]
    ],
    terms: [
      ["Muse", "noun", "One of nine goddesses who authorize and embody poetic, musical, and intellectual arts.", "Person"],
      ["Katabasis", "noun", "A descent into the underworld; Proserpina’s is forced, later heroes’ descents are journeys.", "Term"],
      ["Hymn", "noun", "A song of praise to a deity; Calliope’s performance recalls the Homeric Hymn to Demeter while altering it.", "Term"]
    ],
    ties: [
      ["Homeric Hymn to Demeter", "Ovid compresses and reframes the Greek hymn’s maternal grief, Eleusinian resonance, and divine negotiation."],
      ["Eleusinian Mysteries", "Demeter/Ceres and Persephone/Proserpina stand behind initiatory cult, though Ovid’s narrative is not a ritual manual."],
      ["Poetic competition", "The Pierides episode prepares Arachne’s visual contest in Book VI: representation itself becomes dangerous."]
    ]
  },
  {
    id: 6, title: "Art Under Judgment", lens: "Making, witnessing, and the violence of power",
    date: "Perhaps c. 1450–1350 BCE", setting: "Lydia, Thebes, Lycia, Phrygia, Thrace, Athens",
    summary: "Arachne’s tapestry challenges Minerva with images of divine sexual violence. Niobe’s boast provokes the destruction of her children. The book moves through artistic and bodily punishment into the horrific Thracian tale of Tereus, Procne, and Philomela.",
    episodes: [
      ["Arachne & Minerva", "The mortal weaver depicts divine deceptions without technical fault; Minerva destroys the work and turns her into a spider.", "Artist → spider", "Perfect craft cannot protect dissident representation."],
      ["Niobe", "The queen boasts over Latona and loses all her children to Apollo and Diana, then hardens into a weeping rock.", "Mother → weeping stone", "Pride and grief become monumental landscape."],
      ["Latona & the Lycians", "Peasants deny water to the goddess and become frogs in the muddied pool.", "Humans → frogs", "Inhospitality shapes voice, habitat, and species."],
      ["Marsyas", "Apollo flays the defeated musical challenger; tears for him gather into a river.", "Body → exposed matter; tears → river", "Artistic competition reaches anatomical violence."],
      ["Pelops", "The gods restore the dismembered youth; an ivory shoulder replaces the missing piece.", "Fragmented body → repaired body", "Identity survives through composite material."],
      ["Tereus, Procne & Philomela", "After rape and mutilation, Philomela weaves testimony; revenge ends with all three changed into birds.", "Royal family → birds", "Textile becomes counter-speech when the tongue is removed."],
      ["Boreas & Orithyia", "The North Wind abandons persuasion, abducts the Athenian princess, and fathers winged sons.", "Wind → embodied force", "The transition toward the Argonautic generation begins through coercive marriage."]
    ],
    cast: [
      ["Arachne", "artist", "Lydian weaver whose truthful images expose divine abuse."],
      ["Minerva / Pallas", "goddess", "Patron of weaving and strategic power; cannot tolerate Arachne’s rival image-world."],
      ["Niobe", "queen", "Defines worth through fertility and becomes an inexhaustible image of grief."],
      ["Latona", "goddess", "Mother of Apollo and Diana whose precarious status underlies devastating retaliation."],
      ["Marsyas", "satyr", "Musical challenger punished with flaying."],
      ["Tereus", "king", "Commits sexual violence and mutilation, then becomes a predatory bird."],
      ["Procne", "queen", "Sister of Philomela; answers Tereus with filicide and cannibal revenge."],
      ["Philomela", "artist / survivor", "Uses woven signs to make testimony when speech is physically removed."]
    ],
    themes: [
      ["Art as testimony", "Tapestry can disclose what official power denies."],
      ["The punitive gaze", "Gods judge representations of themselves and erase the artist rather than the evidence."],
      ["Maternal grief", "Niobe, Latona, and Procne make motherhood a field of rivalry, loss, and terror."],
      ["Voice beyond speech", "Frogs croak, stones weep, rivers flow, and cloth speaks."]
    ],
    terms: [
      ["Agon", "noun", "A contest—athletic, musical, rhetorical, or artistic—with social and often divine stakes.", "Term"],
      ["Textile poetics", "noun", "The use of weaving as a model for making, encoding, and interpreting narrative.", "Term"],
      ["Ekphrasis", "noun", "Vivid description of visual art; both contest tapestries are extended verbal images.", "Term"]
    ],
    ties: [
      ["Greek tragedy", "The Tereus story was treated in Sophocles’ lost Tereus and became a powerful model for revenge tragedy."],
      ["Roman weaving", "Textile production was culturally associated with domestic virtue, making Philomela’s cloth both conventional labor and radical evidence."],
      ["Artist myths", "Arachne becomes a foundational Western story about rivalry between technical mastery and institutional authority."]
    ]
  },
  {
    id: 7, title: "Medea’s Thresholds", lens: "Desire, magic, age, and exile",
    date: "Perhaps c. 1350–1250 BCE", setting: "Colchis, Iolcus, Corinth, Athens, Aegina",
    summary: "Medea’s long interior debate leads to Jason’s success, the rejuvenation of Aeson, Pelias’ death, and her flight across a myth-saturated map. The book shifts to Athens, plague-struck Aegina, and the tragic mistrust between Cephalus and Procris.",
    episodes: [
      ["Jason & Medea", "Medea debates duty against desire, then supplies spells that let Jason yoke bulls, sow dragon teeth, and take the fleece.", "Foreign princess → magical helper", "Ovid makes moral hesitation itself the dramatic event."],
      ["The dragon & Golden Fleece", "Medea drugs the sleepless serpent so Jason can seize the prize.", "Monster → enchanted sleep", "Heroic success depends on female knowledge displaced from its home."],
      ["Aeson rejuvenated", "Medea drains and refills the old man’s body with a pharmakon brewed from cosmic ingredients.", "Old man → youth", "A laboratory-like rite reverses time."],
      ["Pelias", "Medea stages a false rejuvenation demonstration; Pelias’ daughters dismember him and find no rescue.", "King → irreparable fragments", "Imitation without knowledge turns care into murder."],
      ["Medea’s flight", "Her dragon chariot passes over sites that compress a catalogue of other myths.", "Woman → fugitive map-maker", "Geography becomes a rapid index of metamorphic memory."],
      ["Aegeus & Theseus", "Medea attempts to poison the unrecognized returning son; recognition arrives at the last moment.", "Stranger → recognized heir", "A cup and sword resolve a dynastic crisis."],
      ["Aeacus & the Myrmidons", "After plague empties Aegina, Jupiter turns ants into a new people.", "Ants → Myrmidons", "Civic population is regenerated from disciplined small bodies."],
      ["Cephalus & Procris", "Testing, jealousy, and an ambiguous word about ‘Aura’ end with Procris killed by her own gift.", "Love → fatal misreading", "The book closes with truth discovered too late."]
    ],
    cast: [
      ["Medea", "sorceress", "Colchian princess whose knowledge, desire, and mobility dominate the book’s first half."],
      ["Jason", "hero", "Argonaut who receives the prize while depending on Medea’s labor and betrayal."],
      ["Aeson", "mortal", "Jason’s aged father restored to youth by Medea."],
      ["Pelias", "king", "Usurper destroyed by a counterfeit version of renewal."],
      ["Theseus", "hero", "Returns to Athens and is recognized just before Medea can kill him."],
      ["Aeacus", "king", "Pious ruler whose emptied island receives the ant-born Myrmidons."],
      ["Cephalus", "hunter", "Husband whose tests and imprecise language help produce tragedy."],
      ["Procris", "hunter", "Gives Cephalus the unerring spear that accidentally kills her."]
    ],
    themes: [
      ["Knowledge and legitimacy", "Magic works through skilled procedure; copied spectacle without knowledge fails."],
      ["Internal conflict", "Medea’s soliloquy renders identity as an argument between incompatible obligations."],
      ["Renewal and substitution", "Youth, civic populations, and heirs can be replaced—but never without cost."],
      ["Trust and interpretation", "Oaths, rumors, staged evidence, and ambiguous names drive intimate disaster."]
    ],
    terms: [
      ["Pharmakon", "noun", "A Greek term that can mean drug, remedy, poison, or spell—an ambiguity embodied by Medea.", "Term"],
      ["Nostos", "noun", "Homecoming; Theseus’ return and Medea’s permanent displacement complicate heroic return.", "Term"],
      ["Myrmidons", "noun", "The warrior people of Aegina whose name Ovid links to Greek myrmex, ‘ant’.", "Person"]
    ],
    ties: [
      ["Apollonius’ Argonautica", "Ovid condenses an entire Hellenistic epic, foregrounding Medea’s psychology and magical procedure."],
      ["Euripides’ Medea", "Ovid writes with the famous tragic future in view while ending his Colchian sequence before fully retelling it."],
      ["Athens and empire", "Aegeus, Theseus, Cephalus, and Aeacus link heroic genealogy to later Athenian identity."]
    ]
  },
  {
    id: 8, title: "Architectures of Escape", lens: "Boundaries, craft, appetite, and impossible homes",
    date: "Perhaps c. 1300–1220 BCE", setting: "Megara, Crete, Calydon, Aetolia, Phrygia, Thessaly",
    summary: "Minos’ wars lead to Scylla’s betrayal and Daedalus’ escape from the Labyrinth. The Calydonian hunt tests collective heroism; river narratives gather transformations of hospitality, hunger, and exchange around Achelous’ banquet.",
    episodes: [
      ["Scylla & Minos", "The Megarian princess cuts her father Nisus’ life-preserving lock for Minos, who rejects her betrayal.", "Nisus → sea eagle; Scylla → ciris bird", "Pursuit becomes a permanent predator-prey relation."],
      ["The Minotaur & Labyrinth", "Daedalus builds a structure to hide Pasiphaë’s hybrid child; Theseus escapes by Ariadne’s thread.", "Shame → architecture", "The maze externalizes dynastic secrecy and controlled narrative."],
      ["Daedalus & Icarus", "The inventor makes feather-and-wax wings; his son flies too high and falls.", "Humans → birdlike flight", "Craft briefly crosses a species boundary but cannot suspend material limits."],
      ["Perdix", "A gifted nephew threatened by Daedalus becomes a partridge, a bird that keeps low.", "Boy → partridge", "The cautious bird is an ironic counter-form to Icarus."],
      ["Calydonian Boar Hunt", "A neglected goddess sends a boar; Atalanta draws first blood among a tense coalition of heroes.", "Ritual omission → monstrous landscape", "Heroic community fractures around gender, status, and prize."],
      ["Meleager & Althaea", "A life bound to a firebrand ends when the hero’s mother burns it to avenge her brothers.", "Life → external object; sisters → birds", "Kinship obligations prove mutually destructive."],
      ["Baucis & Philemon", "An old couple alone welcome disguised gods, survive a flood, become temple guardians, and die as intertwined trees.", "Hut → temple; couple → trees", "Hospitality produces mutual, chosen transformation."],
      ["Erysichthon & Mestra", "A sacrilegious king is consumed by Hunger; his shape-shifting daughter repeatedly escapes sale.", "Appetite → self-consumption; woman → many forms", "Metamorphosis becomes both commodity and resistance."]
    ],
    cast: [
      ["Minos", "king", "Cretan ruler who pursues empire while his household produces secrecy and monsters."],
      ["Scylla", "princess", "Betrays father and city for Minos, then becomes a pursued seabird."],
      ["Daedalus", "inventor", "Architect whose solutions repeatedly create new ethical and technical problems."],
      ["Icarus", "youth", "Experiences flight as delight before wax and heat restore bodily limits."],
      ["Atalanta", "hunter", "Outperforms male heroes and becomes the focus of Meleager’s contested gift."],
      ["Meleager", "hero", "Calydonian prince whose life is physically bound to a piece of wood."],
      ["Baucis & Philemon", "hosts", "Poor couple who recognize divine guests through generous practice."],
      ["Erysichthon", "king", "Violator of Ceres’ grove whose hunger turns consumption inward."]
    ],
    themes: [
      ["Craft and limits", "Technology can liberate, conceal, imitate nature, or intensify danger."],
      ["Hospitality", "Minos rejects a traitor; Baucis and Philemon receive strangers; social boundaries reveal moral worlds."],
      ["Appetite", "Desire for empire, recognition, food, and flight exceeds structures meant to contain it."],
      ["Bound lives", "Locks, threads, firebrands, roots, and hunger make identity depend on external material."]
    ],
    terms: [
      ["Xenia", "noun", "The reciprocal guest-host relationship protected by divine and social law.", "Term"],
      ["Labyrinth", "noun", "Daedalus’ structure of deceptive paths; a model for Ovid’s interlaced narrative itself.", "Place"],
      ["Hybridity", "noun", "The joining of unlike kinds, as in the Minotaur’s human and bovine body.", "Term"]
    ],
    ties: [
      ["Theseus traditions", "Ovid glances past the Minotaur’s killing to focus on the maker, the abandoned Ariadne, and the problem of escape."],
      ["Heroic catalogue", "The boar hunt assembles a pre-Trojan generation like an epic roster, then destabilizes its masculine hierarchy."],
      ["Hospitality tale", "Baucis and Philemon belongs to a wide ancient tradition in which gods test human welcome in disguise."]
    ]
  },
  {
    id: 9, title: "Bodies That Endure", lens: "Heroic strength, apotheosis, and changing sex",
    date: "Perhaps c. 1300–1220 BCE", setting: "Aetolia, Trachis, Thebes, Crete, Cyprus",
    summary: "Achelous narrates his defeat by Hercules, whose own mortal body is destroyed by Nessus’ poisoned gift before the hero’s divine part is received into heaven. A series of birth, desire, and gender transformations follows.",
    episodes: [
      ["Achelous & Hercules", "The river god shifts through forms while wrestling Hercules for Deianira; one horn is broken.", "River god → serpent → bull", "Fluid metamorphosis meets concentrated heroic force."],
      ["Nessus & Deianira", "The dying centaur gives deceptive love-magic that later burns Hercules’ body.", "Blood → poisonous gift", "A promised remedy carries delayed revenge."],
      ["Death of Hercules", "The hero mounts his pyre; the mortal element burns while Jupiter receives the divine remainder.", "Hero → god", "Apotheosis separates identity into perishable and imperishable parts."],
      ["Galanthis", "A servant tricks the goddess delaying Alcmena’s labor and is made a weasel.", "Woman → weasel", "Comic verbal ingenuity leaves a bodily mark."],
      ["Dryope", "After plucking flowers from a transformed nymph, a mother takes root as a tree.", "Woman → lotus tree", "Failure to recognize personhood in nature triggers assimilation to it."],
      ["Iolaus & the sons of Callirhoe", "Youth is restored and children leap to adulthood, provoking a divine debate over fate.", "Old → young; children → adults", "Time itself becomes selectively transformable."],
      ["Byblis & Caunus", "Forbidden desire drives pursuit until grief dissolves Byblis into a spring.", "Woman → spring", "Self-analysis cannot master desire."],
      ["Iphis & Ianthe", "A child raised as male loves Ianthe; Isis transforms Iphis’ sex before marriage.", "Female body → male body", "Social constraint, divine intervention, and embodied identity converge."]
    ],
    cast: [
      ["Hercules", "hero / god", "Embodiment of force whose apotheosis asks what part of a person can survive change."],
      ["Achelous", "river god", "Shape-shifting narrator and defeated suitor who frames the heroic tale."],
      ["Deianira", "mortal", "Acts from fear of abandonment using a gift designed to deceive her."],
      ["Nessus", "centaur", "Transforms his death into a delayed instrument of vengeance."],
      ["Alcmena", "mother", "Narrates Hercules’ obstructed birth and Galanthis’ quick thinking."],
      ["Dryope", "mother", "Becomes a tree while pleading for her child to remember her."],
      ["Byblis", "mortal", "Argues herself into and out of forbidden desire, then dissolves in grief."],
      ["Iphis", "mortal", "Raised as a boy and bodily transformed so marriage to Ianthe can proceed."]
    ],
    themes: [
      ["Divisible identity", "Hercules’ divine and mortal components imply that a person may not be one substance."],
      ["Gifts that harm", "Objects carry hidden histories and intentions across time."],
      ["Gender and social form", "Iphis’ story exposes how bodily, linguistic, legal, and erotic categories interact."],
      ["Nature as person", "Dryope’s error begins in treating a transformed being as an inert plant."]
    ],
    terms: [
      ["Apotheosis", "noun", "Elevation or transformation of a mortal into a god.", "Term"],
      ["Theomachy", "noun", "Conflict among gods or between mortals and gods; Book IX’s divine debate is a restrained version.", "Term"],
      ["Isis", "noun", "Egyptian goddess identified with Io and invoked in Iphis’ transformation.", "Person"]
    ],
    ties: [
      ["Heraclean tradition", "Ovid compresses the hero’s labors and concentrates on the domestic chain that produces his death and deification."],
      ["Roman imperial apotheosis", "Hercules provides a mythic precedent for Aeneas, Romulus, and Caesar in the poem’s final books."],
      ["Iphis and gender history", "The episode has become central to studies of ancient gender, but its categories should not be collapsed into a single modern identity label."]
    ]
  },
  {
    id: 10, title: "The Orphic Book", lens: "Art makes life—and cannot keep it",
    date: "Broadly c. 1400–1200 BCE", setting: "Thrace, the Underworld, Cyprus, Syria",
    summary: "Orpheus descends for Eurydice, loses her again, and sings a sequence of transformations gathered around love: boys become trees and flowers; stone becomes a woman; forbidden desire produces Adonis, whose own beauty leads toward death.",
    episodes: [
      ["Orpheus & Eurydice", "Song suspends the punishments of the dead, but a backward glance loses Eurydice a second time.", "Death → conditional return → loss", "Art moves the Underworld but cannot abolish its rule."],
      ["Orpheus’ audience", "Trees gather around the singer, creating the grove in which his inset songs unfold.", "Landscape → listening assembly", "Poetry reorganizes nature spatially."],
      ["Cyparissus", "A grieving boy becomes the cypress, enduring sign of mourning.", "Youth → cypress", "Chosen transformation fixes grief into cultural symbol."],
      ["Hyacinthus", "Apollo’s beloved dies from a deflected discus and becomes a flower marked with lament.", "Youth → hyacinth", "The bloom keeps both name and cry."],
      ["Propoetides & Cerastae", "Impious Cypriots harden into stone; horned criminals become bulls.", "Humans → stone and cattle", "Venus purges her island through form."],
      ["Pygmalion", "A sculptor desires his own ivory work; Venus warms and animates it.", "Ivory → woman", "Art crosses into life while the created woman remains unnamed."],
      ["Myrrha", "Forbidden desire for her father ends in flight and transformation into a myrrh tree.", "Woman → myrrh tree", "The confessing body becomes aromatic matter."],
      ["Adonis born", "Lucina opens the tree and the child emerges from bark.", "Tree → mother; child → hero", "Birth makes the transformed body productive rather than final."],
      ["Atalanta & Hippomenes", "Golden apples delay Atalanta; sacrilege after marriage turns the couple into lions.", "Runners → lions", "A love story is nested as warning."],
      ["Death of Adonis", "A boar kills Venus’ beloved; his blood becomes the brief anemone.", "Blood → anemone", "Fragile recurrence answers irretrievable loss."]
    ],
    cast: [
      ["Orpheus", "poet", "Singer whose art changes listeners, landscape, and narrative time."],
      ["Eurydice", "shade", "Twice-lost bride whose limited speech punctures Orpheus’ powerful song."],
      ["Apollo", "god", "Lover and mourner of Hyacinthus; inscription turns grief into flower."],
      ["Pygmalion", "artist", "Sculptor whose desire is answered by Venus."],
      ["Myrrha", "mortal", "Experiences forbidden desire, exile, vegetal transformation, and unusual maternity."],
      ["Venus", "goddess", "Patron, punisher, lover, and internal storyteller linking Cyprus to Adonis."],
      ["Atalanta", "runner", "Earlier huntress now set inside a race structured by marriage."],
      ["Adonis", "mortal", "Beautiful child of the myrrh tree and object of Venus’ vulnerable desire."]
    ],
    themes: [
      ["Art’s reach and limit", "Song moves stones and shades; sculpture warms; neither guarantees ethical mastery or lasting life."],
      ["The backward look", "Interpretation and memory depend on looking back, but the same act can destroy return."],
      ["Creative desire", "Making and loving blur in Pygmalion, Orpheus, Apollo, and Venus."],
      ["Memorial form", "Cypress, hyacinth, myrrh, and anemone turn brief lives into repeatable signs."]
    ],
    terms: [
      ["Katabasis", "noun", "A descent to the underworld, often undertaken for knowledge, rescue, or heroic proof.", "Term"],
      ["Vates", "noun", "Latin ‘poet-prophet’; a figure of inspired song that fits Orpheus and Ovid.", "Term"],
      ["Elegy", "noun", "Poetry associated with lament and love; Orpheus brings elegiac concerns inside epic meter.", "Term"]
    ],
    ties: [
      ["Virgil’s Georgics", "Ovid rewrites Virgil’s Orpheus and Eurydice episode, shifting emphasis and embedding a much larger songbook."],
      ["Artist reception", "Pygmalion becomes a durable template for works about male creation, animation, projection, and control."],
      ["Flower aetiologies", "Hyacinthus and Adonis connect inscription, seasonal recurrence, cult, and the fragile beauty of young men."]
    ]
  },
  {
    id: 11, title: "After the Song", lens: "The sea, unstable fortune, and dreams",
    date: "Perhaps c. 1250–1200 BCE", setting: "Thrace, Phrygia, Troy, Thessaly, the Aegean",
    summary: "Orpheus’ death disperses and then preserves his voice. Midas’ foolish wishes stage the instability of value and judgment. The book then moves toward Troy through Peleus and Thetis before Ceyx and Alcyone form a long maritime study of love, loss, dream, and avian reunion.",
    episodes: [
      ["Death of Orpheus", "Maenads dismember the singer; his head and lyre continue sounding as they float to Lesbos.", "Body → fragments; voice → surviving current", "Art persists materially after the artist."],
      ["Midas’ golden touch", "A wish turns food and drink to gold until the Pactolus carries the power away.", "Objects → gold; river → gold-bearing", "Exchange value nearly abolishes use and life."],
      ["Midas’ ears", "After judging Pan better than Apollo, Midas receives donkey ears; a whispered secret grows as reeds.", "King → ass-eared; secret → reed-song", "Hidden judgment becomes public sound."],
      ["Laomedon & Hesione", "Troy refuses payment to Apollo and Neptune; Hercules rescues Hesione and is also cheated.", "Broken contract → monster and siege", "The book builds Troy’s history from failed exchange."],
      ["Peleus & Thetis", "Peleus holds the shape-shifting sea goddess through multiple forms until she yields.", "Goddess → bird, tree, beast, water", "Marriage is achieved by constraining metamorphic escape."],
      ["Peleus & Psamathe", "A sea goddess sends a wolf against Peleus’ herd, then turns it to marble.", "Wolf → stone", "Divine resentment is arrested in a permanent image."],
      ["Ceyx’s voyage", "Against Alcyone’s pleas, Ceyx sails and dies in an overwhelming storm.", "Ship and king → wreckage", "Ovid’s storm turns ordered navigation into elemental chaos."],
      ["House of Sleep", "Juno sends Iris to Somnus, who commissions Morpheus to imitate Ceyx in Alcyone’s dream.", "God → perfect human likeness", "Dream is treated as crafted representation."],
      ["Ceyx & Alcyone", "Alcyone discovers the body on shore; the gods turn both spouses into halcyon birds.", "Couple → kingfishers", "A shared form grants reunion and the calm ‘halcyon days’."]
    ],
    cast: [
      ["Orpheus", "poet", "His voice survives bodily destruction and reunites with Eurydice below."],
      ["Midas", "king", "Mistakes quantity and taste, then fails to keep his marked judgment private."],
      ["Apollo", "god", "Protects artistic hierarchy and repeatedly punishes failed judgment."],
      ["Peleus", "hero", "Father of Achilles, moving the poem toward the Trojan generation."],
      ["Thetis", "sea goddess", "Shape-shifter constrained into a mortal marriage that will produce Achilles."],
      ["Ceyx", "king", "Seafarer who leaves despite mutual love and prophetic anxiety."],
      ["Alcyone", "queen", "Dreamer and mourner whose fidelity ends in shared avian life."],
      ["Morpheus", "dream figure", "Specialist in reproducing human form within the house of Sleep."]
    ],
    themes: [
      ["Surviving voice", "Reeds, heads, lyres, dreams, and birds preserve sound after bodily loss."],
      ["Value and judgment", "Midas shows the fatal distance between possession, utility, and taste."],
      ["Marriage and constraint", "Thetis is held through transformation; Alcyone and Ceyx gain mutual form only after death."],
      ["Representation", "Morpheus’ likeness asks how fiction can convey truth through imitation."]
    ],
    terms: [
      ["Oneiroi", "noun", "Dream figures; Ovid distinguishes Morpheus, Icelos/Phobetor, and Phantasos by what they imitate.", "Person"],
      ["Halcyon", "adjective", "Calm and peaceful; derived from the bird-transformation and the sea’s respite for nesting.", "Term"],
      ["Xenia", "noun", "Guest-friendship and exchange; Laomedon’s repeated breaches turn obligation into war."]
    ],
    ties: [
      ["Lesbian lyric geography", "Orpheus’ singing head reaches Lesbos, later associated above all with lyric poetry."],
      ["Achilles’ genealogy", "Peleus and Thetis establish the parentage of the hero who dominates Book XII."],
      ["Dream theory", "The House of Sleep is both mythic machinery and a sophisticated taxonomy of mimetic images."]
    ]
  },
  {
    id: 12, title: "The War at Troy", lens: "Epic fame, vulnerable bodies, and unstable heroism",
    date: "c. 1250–1180 BCE", setting: "Aulis, Troy, battlefield camps, Lapith wedding hall",
    summary: "The Greek fleet gathers at Aulis, where omen and sacrifice open the Trojan War. Ovid treats famous warfare obliquely: Achilles’ invulnerability is tested by Cygnus, Nestor narrates the Centauromachy and Caeneus, and Achilles’ own death is deferred to the end.",
    episodes: [
      ["Aulis, the serpent, and Iphigenia", "A serpent omen promises ten years of war; Diana substitutes a deer at the sacrifice.", "Girl → concealed; deer → victim", "Interpretation and substitution launch the expedition."],
      ["House of Fame", "Rumor inhabits an open structure where every report enters, grows, and changes.", "Event → proliferating report", "Ovid introduces war through information rather than combat."],
      ["Cygnus & Achilles", "Achilles cannot wound Neptune’s invulnerable son, so strangles him; Cygnus becomes a swan.", "Warrior → swan", "The soft bird preserves a name associated with an unpierceable body."],
      ["Caenis / Caeneus", "After Neptune’s assault, Caenis asks to become an invulnerable man; centaurs finally crush Caeneus under trees.", "Woman → man; warrior → bird", "Gender, bodily defense, and narrative uncertainty intersect."],
      ["Centauromachy", "Nestor narrates the wedding battle between Lapiths and centaurs as a spectacular catalogue of wounds.", "Feast → battlefield", "Inset epic competes with the Trojan War for attention."],
      ["Periclymenus", "Nestor suppresses Hercules’ role in his brothers’ deaths while recounting a shape-shifter killed in eagle form.", "Warrior → eagle → corpse", "Narrative bias becomes part of heroic memory."],
      ["Death of Achilles", "Apollo guides Paris’ arrow; the body that filled Troy’s fame fits inside a small urn.", "Heroic magnitude → ashes", "Epic scale collapses into mortal remainder."]
    ],
    cast: [
      ["Agamemnon", "commander", "Greek leader whose expedition begins with endangered kin and unstable signs."],
      ["Iphigenia", "princess", "Sacrificial victim removed or transformed from the scene by Diana."],
      ["Achilles", "hero", "Near-invulnerable warrior whose violence and mortality frame the book."],
      ["Cygnus", "warrior", "Invulnerable son of Neptune whose final form answers his name."],
      ["Nestor", "narrator", "Old hero whose long memory is selective, self-serving, and captivating."],
      ["Caeneus", "warrior", "Transformed body around which Ovid explores gender, invulnerability, and heroic community."],
      ["Apollo", "god", "Turns the Trojan War by directing the shot that kills Achilles."],
      ["Paris", "prince", "Human archer whose weak reputation contrasts with the god-guided fatal arrow."]
    ],
    themes: [
      ["Epic deflection", "Ovid narrates around canonical battles, preferring rumor, inset tale, bodily anomaly, and aftermath."],
      ["Invulnerability", "Cygnus, Caeneus, and Achilles expose the fantasy and limit of an unbroken heroic body."],
      ["Narrative authority", "Fame alters reports; Nestor curates memory; epic history arrives already transformed."],
      ["Gender and violence", "Caeneus’ story links bodily change to trauma, protection, and social recognition."]
    ],
    terms: [
      ["Centauromachy", "noun", "The mythic battle between Lapiths and centaurs at Pirithous’ wedding.", "Term"],
      ["Fama", "noun", "Latin for report, rumor, reputation, or fame; personified by Ovid as a powerful house and agent.", "Term"],
      ["Aristeia", "noun", "A hero’s concentrated display of excellence in battle; Ovid repeatedly redirects this epic convention.", "Term"]
    ],
    ties: [
      ["Homer’s Iliad", "Ovid assumes the audience knows Homer, allowing him to emphasize marginal, retrospective, and metamorphic material."],
      ["Euripidean sacrifice", "Iphigenia’s substitution recalls tragic traditions in which divine rescue complicates political violence."],
      ["Epic rumor", "The House of Fame anticipates later medieval and Renaissance works, especially Chaucer’s House of Fame."]
    ]
  },
  {
    id: 13, title: "Troy in Afterimage", lens: "Who owns the dead, the story, and the future?",
    date: "c. 1180–1150 BCE", setting: "Greek camp, fallen Troy, Thrace, Sicily, the Mediterranean",
    summary: "Ajax and Ulysses contest Achilles’ arms through speeches that turn heroism into rhetoric. Troy falls largely offstage; Hecuba becomes the center of its suffering. Aeneas departs while stories of Memnon, the Oenotrophi, Galatea, Acis, Polyphemus, and Glaucus redirect epic toward exile and Italy.",
    episodes: [
      ["Ajax & Ulysses", "The warriors argue before Greek judges for Achilles’ armor; eloquence defeats embodied service.", "Weapons → rhetorical prize", "The poem stages epic reputation as an artifact of persuasion."],
      ["Death of Ajax", "After losing the judgment, Ajax kills himself; a flower marked with his name rises from blood.", "Blood → hyacinth-like flower", "The sign AI recalls Ajax and earlier Hyacinthus."],
      ["Fall of Troy & Polyxena", "The conquered princess is sacrificed at Achilles’ tomb and insists on preserving dignity.", "Princess → sacrificial memory", "A victim claims control over how her body will be seen."],
      ["Hecuba & Polydorus", "The former queen discovers her murdered son, blinds his killer, and becomes a dog.", "Queen → dog", "Grief strips royal and human form while intensifying voice."],
      ["Memnon", "Aurora’s tears become dew; birds born from Memnon’s pyre annually fight above his tomb.", "Ashes → warrior birds", "Ritual recurrence gives the dead a living anniversary."],
      ["Aeneas’ departure & Oenotrophi", "The Trojan survivors sail west; captive island women become doves after feeding armies from transformed goods.", "Food stores → abundance; women → doves", "Sustenance and escape attend the new epic route."],
      ["Galatea, Acis & Polyphemus", "The Cyclops kills Galatea’s lover, whose blood becomes a Sicilian river.", "Youth → river god", "Pastoral song and monstrous violence remap Sicily."],
      ["Glaucus", "A fisherman eats magical grass and becomes a sea god, then seeks Circe’s help for love.", "Mortal → sea god", "The transformation carries narrative directly into Book XIV."]
    ],
    cast: [
      ["Ajax", "hero", "Embodies physical service and wounded honor, but cannot control the story judges accept."],
      ["Ulysses / Odysseus", "hero / speaker", "Wins Achilles’ arms by narrating his own strategic centrality."],
      ["Hecuba", "queen / captive", "Troy’s fallen matriarch, transformed by compounded loss and revenge."],
      ["Polyxena", "princess", "Faces sacrifice with a self-conscious demand for bodily dignity."],
      ["Aeneas", "Trojan hero", "Carries surviving Troy toward Italy and Rome’s future."],
      ["Aurora", "goddess", "Mourns Memnon and receives a recurring natural memorial."],
      ["Galatea", "sea nymph", "Narrates love of Acis and persecution by Polyphemus."],
      ["Glaucus", "sea god", "Newly transformed mediator between Greek seas and Circe’s Italian world."]
    ],
    themes: [
      ["Rhetoric and merit", "The armor contest asks whether heroic worth exists outside the speech that frames it."],
      ["Victims and spectators", "Polyxena and Hecuba struggle over how conquered bodies are used and remembered."],
      ["Afterlife of war", "Flowers, animals, rivers, and migration distribute Troy across later landscapes."],
      ["Generic transformation", "Epic debate gives way to lament, pastoral song, erotic complaint, and travel narrative."]
    ],
    terms: [
      ["Contio", "noun", "A public speech or assembly; the armor contest imports civic rhetoric into heroic epic.", "Term"],
      ["Nostos", "noun", "Homecoming; for Trojan survivors, return is impossible and must become migration.", "Term"],
      ["Lament", "noun", "Formalized expression of grief that preserves names and contests heroic narratives.", "Term"]
    ],
    ties: [
      ["Sophocles’ Ajax", "Ajax’s suicide and dispute over the arms belong to a tragic tradition Ovid translates into rhetorical spectacle."],
      ["Virgil’s Aeneid", "Aeneas’ westward journey activates Rome’s national epic, which Books XIII–XIV abridge and transform."],
      ["Sicilian pastoral", "Polyphemus’ song recalls Theocritus while Ovid restores violence and metamorphic consequence."]
    ]
  },
  {
    id: 14, title: "Italy Becomes Rome", lens: "Migration, landscape, desire, and civic beginnings",
    date: "c. 1180 BCE → 700s BCE", setting: "Sicily, Cumae, Latium, Alba Longa, early Rome",
    summary: "Circe’s magic and the transformed Italian landscape surround Aeneas’ route. Ovid crosses through his Aeneid, deifies Aeneas, then accelerates along Alban kings to Pomona, Iphis and Anaxarete, and the apotheosis of Romulus and Hersilia.",
    episodes: [
      ["Glaucus, Scylla & Circe", "Circe’s rejected desire poisons Scylla’s pool and turns her lower body into barking monsters.", "Nymph → sea monster", "Jealous magic makes the strait itself dangerous."],
      ["Cercopes", "Deceptive companions mock Jupiter and become monkeys.", "Men → monkeys", "Form caricatures habitual fraud and mockery."],
      ["Cumaean Sibyl", "Apollo grants long life but not lasting youth; the prophet foresees herself shrinking into voice.", "Woman → attenuated voice", "Longevity without bodily renewal becomes another form of loss."],
      ["Achaemenides & Macareus", "Greek and Trojan survivors trade embedded Odyssey stories, including Circe’s animal transformations.", "Men → swine → men", "Former enemies form community through shared narration."],
      ["Picus, Canens & Circe", "Circe turns resistant Picus into a woodpecker; grieving Canens dissolves into air and song.", "King → bird; wife → voice", "Italian names and species emerge from erotic refusal."],
      ["Diomedes in Italy", "The Greek veteran recounts companions turned to birds as he seeks alliances against Aeneas.", "Warriors → birds", "Troy’s combatants are redistributed across Italian coasts."],
      ["Aeneas’ apotheosis", "Venus washes away her son’s mortality in the Numicius and raises him as Indiges.", "Hero → Roman god", "Trojan migration becomes divine Roman ancestry."],
      ["Vertumnus & Pomona", "The shape-shifting god uses disguises and an inset story to approach the orchard goddess.", "God → many disguises", "Cultivation, persuasion, and seasonal change converge."],
      ["Iphis & Anaxarete", "A rejected lover hangs himself; the unresponsive woman finally sees and hardens into stone.", "Woman → stone", "Emotional hardness becomes mineral fact."],
      ["Romulus & Hersilia", "Mars lifts Romulus as Quirinus; Hersilia later becomes the goddess Hora.", "Founders → gods", "Rome’s civic origins are sealed by paired apotheosis."]
    ],
    cast: [
      ["Circe", "goddess / sorceress", "Transforms rivals, strangers, and landscapes; a dark counterpart to Italian cultivation."],
      ["Scylla", "nymph / monster", "Victim of Circe whose altered body becomes geography and inherited epic danger."],
      ["Cumaean Sibyl", "prophet", "Long-lived guide whose body dwindles while authoritative voice remains."],
      ["Aeneas", "hero / god", "Trojan migrant absorbed into Italian divinity as Indiges."],
      ["Venus", "goddess", "Protects her Trojan and Roman lineage, anticipating Caesar’s deification."],
      ["Vertumnus", "god", "Italian god of seasonal and formal change who courts through disguise."],
      ["Pomona", "goddess", "Keeper of cultivated fruit and enclosed landscape."],
      ["Romulus & Hersilia", "founders / gods", "Civic and marital pair transformed into Quirinus and Hora."]
    ],
    themes: [
      ["Migration into landscape", "Traveling figures become rivers, birds, rocks, cults, and local names."],
      ["Epic rewriting", "Ovid’s compressed Aeneid keeps erotic and metamorphic digressions in the foreground."],
      ["Cultivation", "Pomona’s orchard offers controlled change beside Circe’s coercive magic."],
      ["Roman apotheosis", "Aeneas and Romulus establish a chain that will reach Julius Caesar."]
    ],
    terms: [
      ["Pietas", "noun", "Duty toward gods, family, community, and inherited obligations; closely associated with Aeneas.", "Term"],
      ["Indiges", "noun", "A deified local or ancestral figure; the name of Aeneas after apotheosis.", "Person"],
      ["Interpretatio Romana", "noun", "Roman identification or translation of gods and myths across cultures.", "Term"]
    ],
    ties: [
      ["Virgil’s Aeneid", "Book XIV moves through major Virgilian episodes but changes pace, focus, and genre to keep metamorphosis central."],
      ["Roman foundation legend", "The Alban kings and Romulus connect Trojan myth to civic history while retaining legendary texture."],
      ["Italian cult", "Indiges, Vertumnus, Pomona, Quirinus, and Hora root the global poem in local Roman religion."]
    ]
  },
  {
    id: 15, title: "Rome & Ovid’s Survival", lens: "Philosophy, empire, and the poem beyond the body",
    date: "c. 700s BCE → 8 CE", setting: "Croton, Rome, Nemi, Epidaurus, the heavens",
    summary: "Numa’s search for knowledge opens into Pythagoras’ vast speech on perpetual change. Roman wonders and cult legends culminate in Aesculapius’ arrival, Caesar’s deification, Augustan praise, and Ovid’s claim that his poem will outlive body, city, and time.",
    episodes: [
      ["Myscelus & Croton", "Hercules directs Myscelus to found a city despite legal danger.", "Private command → civic foundation", "Roman geography is tied to Greek heroic authority."],
      ["Pythagoras", "The philosopher teaches transmigration, vegetarian restraint, geological change, and the rise and fall of cities.", "All forms → perpetual flux", "A long speech universalizes the poem’s local transformations."],
      ["Egeria & Hippolytus", "The grieving nymph hears Virbius’ story, then dissolves into a spring.", "Queen / nymph → water", "Roman landscape absorbs Greek tragic survival and private mourning."],
      ["Tages & Cipus", "A prophetic child rises from earth; horns on Cipus foretell kingship that he refuses.", "Earth → prophet; man → horned sign", "Bodies become political omens."],
      ["Aesculapius comes to Rome", "The healing god travels from Epidaurus as a serpent and ends a plague.", "God → serpent; plague → health", "Rome acquires foreign divinity through translation and public need."],
      ["Julius Caesar", "Venus carries Caesar’s soul upward; it becomes a comet overlooking Augustus’ rule.", "Ruler → star", "Catasterism converts assassination into dynastic sign."],
      ["Ovid’s epilogue", "The poet predicts that his better part will travel beyond death wherever Roman power reaches.", "Body → enduring name and poem", "The final metamorphosis is literary reception itself."]
    ],
    cast: [
      ["Numa Pompilius", "king", "Rome’s second king, framed as seeker of wisdom and organizer of religious life."],
      ["Pythagoras", "philosopher", "Voice of universal flux, transmigration, and ethical dietary argument."],
      ["Egeria", "nymph", "Numa’s grieving consort, transformed into a spring by Diana."],
      ["Hippolytus / Virbius", "hero", "Greek tragic victim restored and resettled in Italy under a new name."],
      ["Aesculapius", "healing god", "Returns from Book II’s infancy to cure Rome in serpent form."],
      ["Julius Caesar", "ruler / star", "Historical dictator inserted into the poem’s chain of divine ancestry."],
      ["Augustus", "emperor", "Living endpoint of the poem’s imperial address and uncertain future history."],
      ["Ovid", "poet", "Makes poetic survival the work’s final claim of transformation without extinction."]
    ],
    themes: [
      ["Universal flux", "Pythagoras turns metamorphosis from episode into a theory of matter, life, and history."],
      ["Translation into Rome", "Greek philosophy, tragedy, and healing cult become parts of Roman identity."],
      ["Empire and divinity", "Caesar’s star and Augustan succession politicize the poem’s established apotheosis pattern."],
      ["Poetic immortality", "Ovid relocates the enduring self from body to name, reading, and circulation."]
    ],
    terms: [
      ["Metempsychosis", "noun", "Transmigration of the soul from one body into another.", "Term"],
      ["Quindecimviri", "noun", "Roman priestly college responsible for consulting the Sibylline Books.", "Person"],
      ["Catasterism", "noun", "Placement among the stars; Caesar’s comet is the poem’s political climax of the pattern.", "Term"],
      ["Exegi monumentum", "phrase", "The poetic claim to have made a monument more lasting than material structures; an important Latin literary tradition.", "Term"]
    ],
    ties: [
      ["Lucretius", "Pythagoras’ natural philosophy invites comparison with Roman didactic poetry even where its doctrines differ."],
      ["Augustan ideology", "The ending can praise imperial continuity while also reminding readers that all political forms change."],
      ["Horatian immortality", "Ovid’s final survival claim joins a Roman tradition in which poetry outlasts monuments and mortal bodies."]
    ]
  }
];

const SUPPLEMENTAL_CAST = {
  1: [
    ["Juno", "goddess", "Jupiter’s wife and vigilant opponent of his concealed affairs; she appoints Argus to guard Io."],
    ["Lycaon", "Arcadian king", "Tests Jupiter with a cannibal meal and becomes the wolf that exposes his inward savagery."],
    ["Argus Panoptes", "many-eyed guardian", "Juno’s sleepless watcher of Io, killed by Mercury and memorialized in the peacock’s tail."],
    ["Pan", "rustic god", "Pursues Syrinx and converts her transformed reeds into the panpipe."],
    ["Syrinx", "Arcadian nymph", "Escapes Pan by becoming reeds whose altered body is made to sound."],
    ["Epaphus", "hero", "Son of Io and Jupiter; his taunt about Phaethon’s parentage carries the narrative into Book II."]
  ],
  2: [
    ["Clymene", "Oceanid", "Phaethon’s mother, whose testimony sends him to seek proof from the Sun."],
    ["Jupiter", "god", "Ends Phaethon’s disastrous drive with a thunderbolt and later fathers Arcas by Callisto."],
    ["Juno", "goddess", "Punishes Callisto for Jupiter’s assault by transforming her into a bear."],
    ["Aglauros", "Athenian princess", "Consumed by Envy after obstructing Mercury and finally hardened into stone."],
    ["Herse", "Athenian princess", "Object of Mercury’s desire and sister of the jealous Aglauros."],
    ["Battus", "herdsman", "Breaks his promise of silence to Mercury and becomes a flinty touchstone."]
  ],
  3: [
    ["Juno", "goddess", "Engineers Semele’s fatal request and turns her hostility against Bacchus’ Theban family."],
    ["Bacchus / Dionysus", "god", "Child rescued from Semele’s death whose divinity Pentheus refuses to recognize."],
    ["Ino", "Theban princess", "Semele’s sister and aunt of Bacchus, caught in the widening ruin of Cadmus’ house."],
    ["Agave", "Theban princess", "Pentheus’ mother, driven into Bacchic frenzy and made an agent of his dismemberment."],
    ["Autonoe", "Theban princess", "Actaeon’s mother and one of the sisters who joins the Bacchants’ attack on Pentheus."],
    ["Acoetes", "Bacchic narrator", "Sailor who recounts how pirates abducted Bacchus and were transformed into dolphins."]
  ],
  4: [
    ["Leucothoe", "Persian princess", "Beloved by the Sun, buried alive after Clytie exposes their affair, and changed into frankincense."],
    ["Clytie", "Oceanid", "Jealous lover of the Sun who wastes into the flower that continually turns toward him."],
    ["Ino / Leucothea", "mortal / sea deity", "Driven into the sea with Melicertes and received among the marine gods."],
    ["Athamas", "Theban king", "Maddened by a Fury until he kills his son and drives Ino toward the sea."],
    ["Medusa", "Gorgon", "Her severed head arms Perseus and petrifies enemies; her blood also generates new life."],
    ["Phineus", "prince", "Andromeda’s former betrothed, who attacks Perseus’ wedding and is turned to stone."]
  ],
  5: [
    ["Atlas", "Titan", "Refuses hospitality to Perseus and becomes the mountain that bears the heavens."],
    ["Phineus", "prince", "Leads the armed assault against Perseus and ends as a petrified monument to fear."],
    ["Cyane", "Sicilian nymph", "Opposes Pluto’s abduction of Proserpina and dissolves into the spring that bears her name."],
    ["Ascalaphus", "Underworld witness", "Reveals that Proserpina ate pomegranate seeds and is changed into a screech owl."],
    ["Lyncus", "Scythian king", "Attempts to murder Triptolemus and is transformed by Ceres into a lynx."],
    ["The Muses", "goddesses", "Defeat the Pierides in song and preserve the long embedded account of Proserpina."]
  ],
  6: [
    ["Amphion", "Theban king", "Niobe’s husband, destroyed with their children in the catastrophe provoked by her boast."],
    ["Pelops", "hero", "Niobe’s brother, restored from dismemberment with an ivory shoulder."],
    ["Pandion", "Athenian king", "Father of Procne and Philomela whose alliance with Tereus begins the family tragedy."],
    ["Boreas", "north wind", "Abducts Orithyia after reasoning that force, rather than persuasion, suits his nature."],
    ["Orithyia", "Athenian princess", "Carried away by Boreas and mother of the winged Boreads."],
    ["Itys", "Thracian prince", "Child killed by Procne in revenge and consumed by his father Tereus."]
  ],
  7: [
    ["Aeetes", "king of Colchis", "Jason’s adversarial host and Medea’s father, setter of the impossible trials for the Fleece."],
    ["Creon", "king of Corinth", "Receives Jason’s new marriage alliance and is destroyed with his daughter by Medea’s gift."],
    ["Aegeus", "king of Athens", "Offers Medea refuge and nearly causes the unrecognized Theseus to be poisoned."],
    ["Minos", "king of Crete", "Raises forces against Athens after the death of his son Androgeos."],
    ["Telamon", "Aeacid hero", "Brother of Peleus and ally in the defense of Aegina’s heroic line."],
    ["Phocus", "Aeacid prince", "Brother killed through familial rivalry, a crime that shadows Peleus’ later exile."]
  ],
  8: [
    ["Nisus", "king of Megara", "Possessor of the purple lock on which his city’s safety depends."],
    ["Ariadne", "Cretan princess", "Helps Theseus escape the Labyrinth and is later translated into a celestial crown."],
    ["Theseus", "Athenian hero", "Kills the Minotaur and participates in the Calydonian hunt."],
    ["Althaea", "Calydonian queen", "Destroys the firebrand bound to Meleager’s life, killing her son to avenge her brothers."],
    ["Oeneus", "king of Calydon", "Forgets Diana in his harvest offerings and brings the divine boar against his country."],
    ["Ancaeus", "Arcadian hunter", "Boasts during the Calydonian hunt and is fatally gored by the boar."]
  ],
  9: [
    ["Iole", "Oechalian princess", "Her presence triggers Deianira’s fear and the fatal use of Nessus’ deceptive blood."],
    ["Lichas", "herald", "Carries Deianira’s poisoned garment to Hercules and is hurled into the sea, becoming stone."],
    ["Hyllus", "son of Hercules", "Receives Hercules’ final instructions and helps carry the hero’s body to Mount Oeta."],
    ["Hebe", "goddess", "Rejuvenates Iolaus and becomes part of the gods’ debate over restoring mortal youth."],
    ["Lotis", "nymph", "Escapes Priapus and is associated with the lotus into which Dryope unwittingly reaches."],
    ["Jupiter", "god", "Confirms Hercules’ immortal nature and translates the hero’s divine part to heaven."]
  ],
  10: [
    ["Hymenaeus", "marriage god", "Attends Orpheus’ wedding under a bad omen before Eurydice’s death."],
    ["Cyparissus", "youth", "Mourns his beloved stag without limit and becomes the cypress of perpetual grief."],
    ["Hyacinthus", "Spartan youth", "Killed by a deflected discus and preserved by Apollo as a flower."],
    ["Cinyras", "king of Cyprus", "Myrrha’s father and the unwitting object of her illicit desire."],
    ["The Propoetides", "Cypriot women", "Deny Venus’ divinity, lose their capacity for shame, and harden into stone."],
    ["Hippomenes", "hero", "Wins Atalanta’s race with Venus’ golden apples but later shares her leonine transformation."]
  ],
  11: [
    ["Bacchus", "god", "Punishes the Maenads who kill Orpheus and reluctantly grants Midas’ destructive wish."],
    ["Pan", "rustic god", "Challenges Apollo’s music in the contest whose dissenting judge receives donkey ears."],
    ["Chione", "mortal", "Beloved by Apollo and Mercury, then killed after boasting against Diana."],
    ["Daedalion", "hero", "Mourns Chione and is changed by Apollo into a hawk during his suicidal fall."],
    ["Aesacus", "Trojan prince", "Pursues Hesperia and repeatedly dives toward death until changed into a seabird."],
    ["Priam", "king of Troy", "Father of Aesacus and ruler whose house now moves the poem toward the Trojan War."]
  ],
  12: [
    ["Ulysses / Odysseus", "Greek hero", "Participates in the Greek expedition and later becomes Ajax’s rival for Achilles’ arms."],
    ["Ajax", "Greek hero", "Great warrior whose claim to Achilles’ armor frames the contest of Book XIII."],
    ["Neptune", "god", "Builds Troy’s walls with Apollo, transforms Caenis, and remains deeply implicated in Trojan history."],
    ["Laomedon", "king of Troy", "Defrauds Neptune and Apollo of their promised payment for building Troy’s walls."],
    ["Hesione", "Trojan princess", "Exposed to a sea monster because of Laomedon’s offense and rescued by Hercules."],
    ["Hector", "Trojan hero", "Troy’s principal defender, mourned in the compressed epic background to Ovid’s transformations."]
  ],
  13: [
    ["Priam", "king of Troy", "Troy’s ruined father, whose losses continue through Hecuba’s story."],
    ["Polymestor", "Thracian king", "Murders Polydorus for Trojan gold and is blinded by Hecuba in revenge."],
    ["Memnon", "Ethiopian hero", "Son of Aurora whose funeral ashes generate a recurring combat of memorial birds."],
    ["Polyphemus", "Cyclops", "Sings a grotesquely tender courtship to Galatea before killing Acis."],
    ["Acis", "Sicilian youth", "Loved by Galatea, crushed by Polyphemus, and transformed into a river god."],
    ["Diomedes", "Greek hero", "Trojan War survivor whose companions’ transformations lead toward Italy and Aeneas."]
  ],
  14: [
    ["Macareus", "companion of Ulysses", "Narrates Circe’s transformations and recognizes Achaemenides during Aeneas’ travels."],
    ["Picus", "Latin king", "Rejects Circe and is changed into a woodpecker."],
    ["Canens", "Latin nymph", "Picus’ singer-wife, who wastes away into voice and landscape while searching for him."],
    ["Latinus", "king of Latium", "Receives Aeneas in Italy and stands at the center of the emerging Latin conflict."],
    ["Turnus", "Rutulian hero", "Opposes Aeneas and anchors the war that Ovid compresses from Virgilian epic."],
    ["Venulus", "Latin envoy", "Seeks Diomedes’ support against Aeneas and hears the transformed fates of Greek survivors."]
  ],
  15: [
    ["Myscelus", "Greek founder", "Receives Hercules’ command to establish Croton and crosses legal danger to obey it."],
    ["Croton", "hero", "Host whose name is transferred to the Italian city founded by Myscelus."],
    ["Cipus", "Roman praetor", "Discovers horns on his head and refuses kingship to protect republican liberty."],
    ["Venus", "goddess", "Tries to avert Caesar’s murder and finally carries his soul into the sky as a comet."],
    ["Jupiter", "god", "Explains the fixity of fate and forecasts Augustus’ future beyond Caesar’s apotheosis."],
    ["Mars", "god", "Receives Romulus among the gods and remains a divine ancestor of Rome’s political story."]
  ]
};

BOOKS.forEach(book => {
  const known = new Set(book.cast.map(person => person[0].toLowerCase()));
  (SUPPLEMENTAL_CAST[book.id] || []).forEach(person => {
    if (!known.has(person[0].toLowerCase())) book.cast.push(person);
  });
});

const ADDITIONAL_CAST = {
  1: [
    ["Themis", "Titan goddess", "Gives Deucalion and Pyrrha the riddling command by which stones become a renewed human race."],
    ["Python", "earthborn serpent", "Generated from the post-flood earth and killed by Apollo before the god’s encounter with Cupid."]
  ],
  2: [
    ["Cycnus", "mortal / swan", "Mourns Phaethon until voice, posture, and body resolve into the form of a swan."],
    ["Ocyroe", "prophet / mare", "Daughter of Chiron whose forbidden prophecy interrupts itself as her speech becomes a whinny."]
  ],
  3: [
    ["Echion", "Spartan / founder", "One of the armed men sprung from the dragon’s teeth and, through Agave, ancestor of Pentheus."],
    ["The Spartoi", "earthborn warriors", "The sown men erupt from Theban soil, fight one another, and leave five survivors to found the city."]
  ],
  4: [
    ["Vulcan / Mulciber", "god / smith", "Builds the invisible net that exposes Venus and Mars before the assembled gods."],
    ["Melicertes / Palaemon", "mortal / sea deity", "Ino’s son, carried into the sea and received with her into a new divine identity."]
  ],
  5: [
    ["Alpheus", "river god", "Pursues Arethusa until Diana’s intervention and the nymph’s watery passage beneath the sea."],
    ["Minerva", "goddess", "Sponsors Perseus, hears the Muses’ account, and links the book’s contests to Arachne’s challenge."]
  ],
  6: [
    ["Apollo", "god", "Joins Diana in the destruction of Niobe’s children and later hears the river mourn Marsyas."],
    ["The Lycian peasants", "mortals / frogs", "Deny Latona water and are fixed in the muddy pool by the amphibious form of their punishment."]
  ],
  7: [
    ["Hecate", "goddess of magic", "Receives Medea’s invocations and stands behind the ritual knowledge that separates true renewal from fraud."],
    ["The daughters of Pelias", "princesses", "Trust Medea’s staged rejuvenation and dismember their father in an attempt to restore him."]
  ],
  8: [
    ["The Minotaur", "hybrid creature", "Hidden at the Labyrinth’s center, he turns Daedalus’ architecture into an instrument of dynastic secrecy."],
    ["Fames / Hunger", "personification", "Enters Erysichthon at Ceres’ command and makes endless consumption inhabit his body."]
  ],
  9: [
    ["Ianthe", "mortal", "Beloved of Iphis and unknowingly placed inside a marriage crisis resolved through bodily transformation."],
    ["Caunus", "mortal", "Byblis’ brother and the object of the desire she writes, revises, and finally pursues into exile."]
  ],
  10: [
    ["Pygmalion’s statue", "unnamed woman", "Ovid leaves the animated ivory woman unnamed; the later name Galatea belongs to reception history."],
    ["The Cerastae", "Cypriot men", "Violate hospitality at Venus’ altar and are transformed into bulls whose horns disclose their name."]
  ],
  11: [
    ["Tmolus", "mountain god / judge", "Awards Apollo victory over Pan, making Midas’ dissent a failure of aesthetic judgment."],
    ["Somnus / Sleep", "god", "Rules the silent cavern from which Iris summons Morpheus to carry truthful fiction to Alcyone."]
  ],
  12: [
    ["Diana", "goddess", "Substitutes a deer for Iphigenia and turns a stalled expedition into a morally unsettled departure."],
    ["Pirithous", "Lapith king", "His wedding feast becomes the setting for Nestor’s immense inset tale of centaur violence."]
  ],
  13: [
    ["Thetis", "sea goddess", "Receives Achilles’ ashes and asks the gods to award his armor, initiating the contest of speech."],
    ["Polydorus", "Trojan prince", "Murdered for gold in Thrace; his exposed body transforms Hecuba’s grief into calculated revenge."]
  ],
  14: [
    ["Iphis of Cyprus", "mortal", "Loves Anaxarete without hope and, after rejection, hardens into the memorial form of despair."],
    ["Anaxarete", "Cypriot noblewoman", "Watches Iphis’ funeral without pity and is changed into stone at the window."]
  ],
  15: [
    ["Diana / Trivia", "goddess", "Pities Egeria’s grief and changes the mourning nymph into a spring in her sacred grove."],
    ["The Roman people", "civic body", "Welcome Aesculapius in serpent form, turning divine travel into a public foundation of healing."]
  ]
};

BOOKS.forEach(book => {
  const known = new Set(book.cast.map(person => person[0].toLowerCase()));
  (ADDITIONAL_CAST[book.id] || []).forEach(person => {
    if (!known.has(person[0].toLowerCase())) book.cast.push(person);
  });
});

const EXTRA_LEXICON = [
  ["Ovid", "proper noun", "Publius Ovidius Naso (43 BCE–17/18 CE), Roman poet and author of the Metamorphoses.", "Person", "Books I–XV"],
  ["Dactylic hexameter", "noun", "The six-foot meter of Greek and Roman epic, used by Homer, Virgil, and Ovid’s Metamorphoses.", "Term", "Books I–XV"],
  ["Epic", "noun", "Long-form elevated narrative poetry; Ovid adopts epic scale and meter while continually mixing other genres.", "Term", "Books I–XV"],
  ["Thebes", "proper noun", "City founded by Cadmus; its dynasty structures much of Books III–VI.", "Place", "Books III–VI"],
  ["Troy", "proper noun", "City whose war and destruction organize the transition from heroic myth to Roman origins.", "Place", "Books XI–XIV"],
  ["Rome", "proper noun", "The poem’s historical and political endpoint, first named late but retrospectively shadowing the whole.", "Place", "Books XIV–XV"],
  ["Olympians", "plural noun", "The major gods associated with Mount Olympus, including Jupiter, Juno, Neptune, Minerva, Apollo, Diana, Venus, Mercury, Mars, Ceres, and Vulcan.", "Person", "Books I–XV"],
  ["Nymph", "noun", "A female divinity associated with natural places; Ovid’s nymphs are frequent objects of pursuit and agents or victims of change.", "Person", "Books I–XIV"],
  ["Centaur", "noun", "A hybrid with human upper body and equine lower body; Ovid’s centaurs range from Nessus to the wedding combatants.", "Creature", "Books IX, XII"],
  ["Minotaur", "proper noun", "Hybrid child of Pasiphaë and the Cretan bull, hidden in Daedalus’ Labyrinth.", "Creature", "Book VIII"],
  ["Medusa", "proper noun", "The Gorgon whose severed head turns viewers to stone and serves Perseus as a portable weapon.", "Creature", "Books IV–V"],
  ["Underworld", "proper noun", "Realm of the dead ruled by Dis/Pluto and Proserpina; entered or invoked in Books V, X, and XIV.", "Place", "Books V, X, XIV"],
  ["Augustus", "proper noun", "Rome’s first emperor (63 BCE–14 CE), praised near the poem’s end and contemporary with Ovid.", "Person", "Book XV"],
  ["Trojan War", "proper noun", "Legendary Greek expedition against Troy, conventionally visualized around the end of the Late Bronze Age.", "Event", "Books XII–XIII"],
  ["Golden Fleece", "proper noun", "The Colchian prize sought by Jason and secured through Medea’s aid.", "Object", "Book VII"],
  ["Laurel", "noun", "Evergreen tree and emblem of Apollo, poetic achievement, and triumph, created from Daphne in Book I.", "Object", "Book I"],
  ["Transformation", "noun", "The poem’s governing process: bodily, natural, civic, linguistic, artistic, and political change.", "Term", "Books I–XV"],
  ["Intertext", "noun", "A relationship through which one text recalls, revises, or competes with another.", "Term", "Books I–XV"]
];

const EXPANDED_LEXICON = [
  ["Aetion", "noun", "A story that explains the origin of a custom, name, place, ritual, or natural feature.", "Narrative", "Books I–XV"],
  ["Aetiology", "noun", "The practice of explaining origins through story; many Ovidian transformations end by founding a name, cult, or feature.", "Narrative", "Books I–XV"],
  ["Apostrophe", "noun", "A direct address to an absent person, abstraction, place, or object that intensifies the narrator’s presence.", "Rhetoric", "Books I–XV"],
  ["Ekphrasis", "noun", "An extended verbal representation of visual art; Ovid’s woven pictures and crafted objects often become rival narratives.", "Rhetoric", "Books VI, XIII"],
  ["Enargeia", "noun", "Rhetorical vividness that makes an event seem present before the reader’s eyes.", "Rhetoric", "Books I–XV"],
  ["Ecphrasis", "variant spelling", "Alternative spelling of ekphrasis: description that makes an artwork or scene imaginatively visible.", "Rhetoric", "Books VI, XIII"],
  ["Simile", "noun", "An explicit comparison, often introduced by ‘like’ or ‘as,’ that momentarily transforms how an action is perceived.", "Rhetoric", "Books I–XV"],
  ["Metaphor", "noun", "A transfer of meaning between unlike things; in this poem figurative transfer frequently becomes literal bodily change.", "Rhetoric", "Books I–XV"],
  ["Metalepsis", "noun", "A crossing between narrative levels, as when a story’s narrator, audience, or artwork enters the logic of another tale.", "Narrative", "Books IV–VI, X–XV"],
  ["Analepsis", "noun", "A narrated return to earlier events; inset recollections repeatedly interrupt the poem’s forward movement.", "Narrative", "Books II–XV"],
  ["Prolepsis", "noun", "A leap or anticipation toward an event that occurs later in the story’s chronology.", "Narrative", "Books I–XV"],
  ["Frame narrative", "noun", "A containing situation in which one or more characters tell further stories.", "Narrative", "Books IV, X, XII–XIV"],
  ["Inset tale", "noun", "A story embedded inside another story, often producing thematic echoes or competing interpretations.", "Narrative", "Books I–XV"],
  ["Ring composition", "noun", "A structure whose ending recalls its beginning, enclosing material through repetition or return.", "Narrative", "Books I–XV"],
  ["Catalog", "noun", "A formal sequence of names, places, objects, or participants that expands epic scale and invites comparison.", "Genre", "Books II, VI, VIII, XII–XIII"],
  ["Epyllion", "noun", "A compact mythological narrative with concentrated description, pathos, and formal self-consciousness.", "Genre", "Books I–XV"],
  ["Elegy", "noun", "A poetic mode associated with love, lament, and the elegiac couplet; Ovid imports its attitudes into epic hexameter.", "Genre", "Books I–XV"],
  ["Hymn", "noun", "A formal address or song of praise to a god, often invoking divine names, powers, and places.", "Genre", "Books V, X, XV"],
  ["Lament", "noun", "A formal expression of grief whose voice can preserve identity even when the body or world changes.", "Genre", "Books II, VI, X–XIII"],
  ["Nostos", "noun", "A hero’s homecoming; Ovid repeatedly complicates return through wandering, exile, and altered identity.", "Narrative", "Books XIII–XIV"],
  ["Katabasis", "noun", "A descent to the Underworld by a living visitor, commonly undertaken for knowledge or recovery.", "Motif", "Books X, XIV"],
  ["Anabasis", "noun", "An ascent or return from below; the desired counterpart to katabasis, sometimes granted and sometimes broken.", "Motif", "Books X, XIV"],
  ["Locus amoenus", "noun", "An idealized pleasant place of shade, water, and greenery that can become the setting for danger or violation.", "Motif", "Books I–XI"],
  ["Xenia", "noun", "The reciprocal duties of hospitality between host and guest, protected by divine and social expectation.", "Custom", "Books VIII, XIV"],
  ["Supplication", "noun", "A ritualized appeal made through posture, touch, kinship, or sacred language to a more powerful figure.", "Custom", "Books I–XV"],
  ["Votum", "noun", "A vow or promised offering made to a deity in exchange for aid or after deliverance.", "Ritual", "Books I–XV"],
  ["Libation", "noun", "A liquid offering poured for a god, hero, or dead person.", "Ritual", "Books VII, XII–XV"],
  ["Sacrifice", "noun", "A ritual gift, often animal, through which mortals seek relation with the gods; its misuse can signal impiety.", "Ritual", "Books I–XV"],
  ["Oracle", "noun", "A divine response whose compressed or ambiguous language requires mortal interpretation.", "Ritual", "Books I, III, VII, XV"],
  ["Augury", "noun", "The interpretation of birds or other signs as evidence of divine intention.", "Ritual", "Books II, V, VIII, XII–XV"],
  ["Apotheosis", "noun", "The elevation of a mortal to divine status, often represented as a final transformation and political claim.", "Concept", "Books IX, XIV–XV"],
  ["Catasterism", "noun", "Transformation into a star or constellation, placing a figure permanently in the visible heavens.", "Concept", "Books II, VIII, XV"],
  ["Autochthony", "noun", "Origin directly from the earth, as with the armed Spartoi who spring from the dragon’s teeth.", "Concept", "Books I, III"],
  ["Anthropomorphism", "noun", "The representation of gods, natural forces, or abstractions in human form and behavior.", "Concept", "Books I–XV"],
  ["Theriomorphism", "noun", "Representation or transformation in animal form.", "Concept", "Books I–XV"],
  ["Etiological closure", "noun", "An ending that converts a narrative event into the lasting explanation of a name, ritual, species, or place.", "Narrative", "Books I–XV"],
  ["Poetic immortality", "noun", "The claim that verse preserves a name beyond bodily death, culminating in the poem’s epilogue.", "Concept", "Books X, XV"],
  ["Fama", "noun", "Rumor, report, and reputation; also the personified goddess whose house gathers every voice.", "Concept", "Books IX, XII"],
  ["Furor", "noun", "Uncontrolled passion, rage, or frenzy opposed in Roman thought to measured reason and civic order.", "Concept", "Books III–IX, XII–XIV"],
  ["Pietas", "noun", "Duty toward gods, family, and community; a central Roman ethical category tested by kinship crises.", "Concept", "Books I, VIII–XV"],
  ["Nefas", "noun", "An action contrary to divine or moral law, especially taboo violence within the family.", "Concept", "Books I, VI, VIII–IX"],
  ["Hubris", "noun", "A modern shorthand for destructive overreach or arrogance toward divine limits; useful with care in Roman contexts.", "Concept", "Books II, III, VI, VIII"],
  ["Numen", "noun", "A divine will, presence, or power manifested in a god, place, image, or event.", "Religion", "Books I–XV"],
  ["Cult epithet", "noun", "A title attached to a deity that identifies a local place, function, genealogy, or form of worship.", "Religion", "Books I–XV"],
  ["Mystery cult", "noun", "An initiatory religious practice promising privileged knowledge or benefits to participants.", "Religion", "Books V, X–XI"],
  ["Hero cult", "noun", "Ritual worship offered to a dead hero at a tomb, shrine, or civic site.", "Religion", "Books VII–XV"],
  ["Olympian", "adjective", "Relating to the major gods associated with Mount Olympus and the ruling divine order.", "Religion", "Books I–XV"],
  ["Chthonic", "adjective", "Relating to the earth, Underworld, dead, or deities approached through downward-facing ritual.", "Religion", "Books V, X, XIV"],
  ["Psychopomp", "noun", "A guide of souls to the realm of the dead; Mercury commonly performs this role.", "Religion", "Books I, X–XI, XIV"],
  ["Palimpsest", "noun", "A surface or story that retains traces of earlier forms beneath later ones; a useful model for Ovidian landscape.", "Interpretation", "Books I–XV"],
  ["Intermediality", "noun", "Interaction between different art forms or media, such as poetry, weaving, sculpture, music, and architecture.", "Interpretation", "Books VI, VIII, X–XI"],
  ["Narratology", "noun", "The study of how narratives organize voice, time, perspective, sequence, and embedded levels.", "Interpretation", "Books I–XV"],
  ["Focalization", "noun", "The perspective through which narrative information is perceived, distinct from the voice that tells it.", "Narrative", "Books I–XV"],
  ["Aporia", "noun", "A declared uncertainty or impasse in reasoning or narration.", "Rhetoric", "Books I–XV"],
  ["Polyptoton", "noun", "Repetition of words derived from the same root in different grammatical forms.", "Rhetoric", "Books I–XV"],
  ["Chiasmus", "noun", "A reversed verbal or conceptual pattern, conventionally represented as ABBA.", "Rhetoric", "Books I–XV"],
  ["Metonymy", "noun", "A figure in which one term stands for another through association, such as ‘laurel’ for Apollo or poetic victory.", "Rhetoric", "Books I–XV"],
  ["Synecdoche", "noun", "A figure in which a part represents a whole or a whole represents a part.", "Rhetoric", "Books I–XV"],
  ["Topos", "noun", "A recurring literary situation, image, or argumentative pattern shared across works and genres.", "Interpretation", "Books I–XV"],
  ["Variant tradition", "noun", "An alternative ancient version of a myth’s genealogy, sequence, motive, or outcome.", "Interpretation", "Books I–XV"]
];

const MET_FOLIO_ORDER = [6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 4, 5, 1, 2, 3];
const PORTRAIT_FOLIOS = [4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17];
const PLATES = MET_FOLIO_ORDER.map((folio, index) => ({
  src: `assets/engravings/met-folio/folio-${String(folio).padStart(2, "0")}.jpg`,
  alt: `Open-access folio used as an illustrative register—not a literal portrait—for Book ${index + 1}`,
  caption: `Illustrative register—not a portrait · Ovidian folio ${String(folio).padStart(2, "0")} · Venice, 1501`,
  source: "https://www.metmuseum.org/art/collection/search/354958"
}));

const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = (value, length) => (value % length + length) % length;

let currentIndex = Number(localStorage.getItem("met-current-book") || 0);
currentIndex = clamp(currentIndex, 0, BOOKS.length - 1);
let readBooks = new Set(JSON.parse(localStorage.getItem("met-read-books") || "[]"));
let notes = JSON.parse(localStorage.getItem("met-notes") || "[]");
let lexiconCategory = "All";
let concordanceCategory = "All";
let dragStart = null;
let toastTimer;
let networkSimulation = null;
let networkZoom = null;
let networkSvg = null;
let currentWorkspace = "instrument";
let currentFocus = null;
let focusReturnTarget = null;
let activeBookTransition = null;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

function eraFor(bookId) {
  return ERAS.find(era => era.books.includes(bookId));
}

function saveState() {
  localStorage.setItem("met-current-book", String(currentIndex));
  localStorage.setItem("met-read-books", JSON.stringify([...readBooks]));
  localStorage.setItem("met-notes", JSON.stringify(notes));
}

function polar(cx, cy, radius, degrees) {
  const radians = (degrees - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

function donutPath(inner, outer, start, end) {
  const p1 = polar(400, 400, outer, end);
  const p2 = polar(400, 400, outer, start);
  const p3 = polar(400, 400, inner, start);
  const p4 = polar(400, 400, inner, end);
  const large = end - start <= 180 ? 0 : 1;
  return `M ${p1.x} ${p1.y} A ${outer} ${outer} 0 ${large} 0 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${inner} ${inner} 0 ${large} 1 ${p4.x} ${p4.y} Z`;
}

function segmentGroup({ start, end, inner, outer, label, className = "", index = -1, ringKind = "", ringIndex = -1, hideLabel = false, curved = false, fontSize = 13, rotation = 0 }) {
  const mid = (start + end) / 2;
  const point = polar(400, 400, (inner + outer) / 2, mid);
  const safeAria = label.replaceAll('"', "&quot;");
  const interaction = index >= 0
    ? `data-book-index="${index}" tabindex="0" role="button" aria-label="Open Book ${ROMAN[index]}: ${safeAria}"`
    : ringKind
      ? `data-ring-kind="${ringKind}" data-ring-index="${ringIndex}" tabindex="0" role="button" aria-label="Open ${ringKind}: ${safeAria}"`
      : "";

  let text = "";
  if (!hideLabel && curved) {
    // A curved baseline gives a label the whole width of its sector instead
    // of the chord across it, which is the difference between "Deucalion &
    // Pyr…" and the actual episode title.
    const radius = (inner + outer) / 2;
    const arc = labelArc(400, 400, radius, start, end, { padding: 1.1, rotation });
    const arcLength = ((end - start - 2.2) * Math.PI / 180) * radius;
    const fits = Math.max(6, Math.floor(arcLength / (fontSize * 0.47)));
    const shown = label.length > fits ? `${label.slice(0, fits - 1).trimEnd()}…` : label;
    const id = `label-${ringKind || className}-${ringIndex >= 0 ? ringIndex : index}`;
    text = `<defs><path id="${id}" d="${arc.d}" fill="none"/></defs>
      <text dy="${arc.flipped ? -4 : 4}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${shown}</textPath></text>`;
  } else if (!hideLabel) {
    const shown = label.length > 16 ? `${label.slice(0, 15)}…` : label;
    text = `<text x="${point.x}" y="${point.y}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${mid} ${point.x} ${point.y})">${shown}</text>`;
  }

  return `<g class="wheel-segment ${className}" ${interaction}>
    <path d="${donutPath(inner, outer, start + .7, end - .7)}"></path>
    ${text}
  </g>`;
}

function renderVolvelleBase() {
  const bookStep = 360 / BOOKS.length;
  $("#book-ring").innerHTML = BOOKS.map((book, index) =>
    segmentGroup({ start: index * bookStep, end: (index + 1) * bookStep, inner: 286, outer: 330, label: ROMAN[index], className: "book-segment", index })
  ).join("");

  let cursor = 0;
  $("#era-ring").innerHTML = ERAS.map((era, eraIndex) => {
    const width = era.books.length * bookStep;
    const html = segmentGroup({ start: cursor, end: cursor + width, inner: 331, outer: 355, label: era.name, className: "era-segment", ringKind: "era", ringIndex: eraIndex, hideLabel: true });
    cursor += width;
    return html;
  }).join("");

  $$(".book-segment").forEach(segment => {
    const activate = () => selectBook(Number(segment.dataset.bookIndex), { scrollAtlas: false });
    segment.addEventListener("click", activate);
    segment.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
    });
  });
  bindRingSegments($("#era-ring"));

  renderOrnamentLayer();
}

/**
 * The static ornament layer. Generated once from parameters: an armillary
 * lattice, a seeded star field, the fifteen catasterisms, registration
 * scales, curved era inscriptions, and the sun medallion.
 */
function renderOrnamentLayer() {
  const cx = 400;
  const cy = 400;
  $("#ornament-meridians").innerHTML = renderMeridians(cx, cy, 386, { count: 9 });
  $("#ornament-stars").innerHTML = renderStarField(cx, cy, 358, 390, { count: 210, seed: 8081 });
  $("#ornament-catasterisms").innerHTML = renderCatasterismRing(cx, cy, 373, 34, { count: BOOKS.length });
  $("#ornament-ticks").innerHTML = [
    renderTickRing(cx, cy, 354, { count: 120, majorEvery: 8, minor: 4, major: 9 }),
    renderTickRing(cx, cy, 215, { count: 72, majorEvery: 6, minor: 3, major: 7 })
  ].join("");
  $("#ornament-spokes").innerHTML = renderSpokes(cx, cy, 143, 330, BOOKS.length);
  $("#ornament-sun").innerHTML = [
    renderSunMedallion(cx, cy, 84),
    renderCircularInscription(
      cx,
      cy,
      122,
      "✦ OMNIA MUTANTUR · NIHIL INTERIT ✦ ALL THINGS CHANGE · NOTHING PERISHES ",
      { id: "motto-ring", className: "motto-inscription" }
    )
  ].join("");

  renderEraInscriptions();
  renderField();
}

/**
 * The ground behind the instrument.
 *
 * Measured rather than guessed: the field's viewBox is the panel's own pixel
 * box and its origin is the volvelle's measured centre, so the rhumb lines
 * leave the wheel exactly on its spokes at every window size. A gradient could
 * not do this — the geometry has to know where the instrument actually is.
 */
function renderField() {
  const panel = $(".instrument-side");
  const wheel = $("#volvelle");
  const field = $("#instrument-field");
  if (!panel || !wheel || !field) return;
  const box = panel.getBoundingClientRect();
  const disc = wheel.getBoundingClientRect();
  // Height mattered too: this runs on `fonts.ready` and on resize, and a panel
  // measured mid-layout can be one pixel tall.
  if (box.width < 2 || box.height < 2 || disc.width < 2) return;

  field.setAttribute("viewBox", `0 0 ${box.width.toFixed(0)} ${box.height.toFixed(0)}`);
  field.setAttribute("preserveAspectRatio", "none");
  field.innerHTML = renderInstrumentField(
    disc.left - box.left + disc.width / 2,
    disc.top - box.top + disc.height / 2,
    // The plate's engraved edge is at r=392 of the 800-unit viewBox.
    (disc.width / 2) * (392 / 400),
    { width: box.width, height: box.height }
  );
}

/** Era names ride the band they label, and re-flip whenever the wheel turns. */
function renderEraInscriptions() {
  let cursor = 0;
  const bookStep = 360 / BOOKS.length;
  const eraBands = ERAS.map(era => {
    const width = era.books.length * bookStep;
    const band = { start: cursor, end: cursor + width, label: (era.short || era.name).toUpperCase() };
    cursor += width;
    return band;
  });
  $("#ornament-era-labels").innerHTML = renderArcLabels(400, 400, 344, eraBands, {
    idPrefix: "era-arc",
    className: "era-inscription",
    rotation: wheelRotation()
  });
}

function renderHeroBookNav() {
  $("#hero-book-nav").innerHTML = BOOKS.map((book, index) => `
    <button type="button" class="${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" data-hero-book="${index}" aria-label="Open Book ${ROMAN[index]}: ${book.title}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span>${ROMAN[index]}</span>
      <small>${book.title}</small>
    </button>`).join("");
  $$("[data-hero-book]").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.heroBook))));
}

function renderOrbisRibbon() {
  $("#orbis-era-ribbon").innerHTML = ERAS.map(era => `
    <button type="button" data-era-book="${era.books[0] - 1}" style="--era:${era.color}">
      <span>${era.name}</span>
      <small>${era.range}</small>
    </button>`).join("");
  $$("[data-era-book]").forEach(button => button.addEventListener("click", () => {
    selectBook(Number(button.dataset.eraBook));
    openWorkspace("chronology");
  }));
}

/** How far the instrument is currently turned, in degrees. */
function wheelRotation() {
  return -currentIndex * (360 / BOOKS.length);
}

function renderVolvelleDetails(book) {
  const episodeItems = book.episodes;
  const episodeStep = 360 / episodeItems.length;
  $("#episode-ring").innerHTML = episodeItems.map((episode, index) =>
    segmentGroup({ start: index * episodeStep, end: (index + 1) * episodeStep, inner: 216, outer: 285, label: episode[0], className: "episode-segment", ringKind: "episode", ringIndex: index, curved: true, fontSize: 13.5, rotation: wheelRotation() })
  ).join("");
  const motifStep = 360 / book.themes.length;
  $("#motif-ring").innerHTML = book.themes.map((theme, index) =>
    segmentGroup({ start: index * motifStep, end: (index + 1) * motifStep, inner: 143, outer: 215, label: theme[0], className: "motif-segment", ringKind: "theme", ringIndex: index, curved: true, fontSize: 13, rotation: wheelRotation() })
  ).join("");
  bindRingSegments($("#episode-ring"));
  bindRingSegments($("#motif-ring"));
  if (!reducedMotion.matches) {
    gsap.fromTo(
      ["#episode-ring .wheel-segment", "#motif-ring .wheel-segment"],
      { opacity: 0, scale: .965, transformOrigin: "400px 400px" },
      { opacity: 1, scale: 1, duration: .58, stagger: .025, ease: "expo.out", overwrite: true }
    );
  }
}

function bindRingSegments(root) {
  if (!root) return;
  $$("[data-ring-kind]", root).forEach(segment => {
    const activate = () => {
      const kind = segment.dataset.ringKind;
      const index = Number(segment.dataset.ringIndex);
      if (kind === "era") {
        selectBook(ERAS[index].books[0] - 1);
        openWorkspace("chronology");
        return;
      }
      openFocusFolio(kind, index, segment);
    };
    segment.addEventListener("click", activate);
    segment.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function meaningfulTokens(value) {
  const stop = new Set(["about", "after", "again", "becomes", "body", "book", "change", "from", "into", "makes", "other", "their", "there", "these", "this", "through", "transformation", "under", "whose", "with"]);
  return new Set(
    value.toLowerCase().match(/[a-z]{4,}/g)?.filter(token => !stop.has(token)) || []
  );
}

function tokenScore(left, right) {
  const a = meaningfulTokens(left);
  const b = meaningfulTokens(right);
  return [...a].reduce((score, token) => score + (b.has(token) ? 1 : 0), 0);
}

function stableHash(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function portraitPosition(name) {
  const hash = stableHash(name);
  return {
    x: 18 + (hash % 65),
    y: 16 + (Math.floor(hash / 71) % 68),
    scale: 1.06 + (Math.floor(hash / 173) % 20) / 100
  };
}

function portraitArt(name) {
  const folio = PORTRAIT_FOLIOS[stableHash(name) % PORTRAIT_FOLIOS.length];
  return `assets/engravings/met-folio/folio-${String(folio).padStart(2, "0")}.jpg`;
}

function inferFigureRole(name) {
  const divineNames = /Apollo|Bacchus|Ceres|Circe|Cupid|Diana|Earth|Fama|Hebe|Hecate|Iris|Isis|Juno|Jupiter|Latona|Lucina|Mars|Mercury|Minerva|Nature|Nemesis|Neptune|Oceanus|Pluto|Proserpina|Saturn|Sleep|Sol|Themis|Thetis|Tisiphone|Venus|Vulcan|Zephyrus/i;
  const creatureNames = /animal|ants|bear|bird|boar|bull|centaur|dragon|eagle|horse|hound|lion|monster|ram|serpent|sparrow|stag|swan|wolf/i;
  if (divineNames.test(name)) return "divine power";
  if (creatureNames.test(name)) return "creature / altered form";
  if (/people|women|men|gods|muses|nymphs|sailors|pirates|servants|companions|household|Greeks|Trojans|Romans|Bacchants|Maenads|Lapiths|Centaurs|descendants|worshippers|witnesses|voices|shades|winds|Hours|Fates|Furies/i.test(name)) return "chorus / collective";
  if (/narrator|readers/i.test(name)) return "narrative presence";
  return "episode figure";
}

function resolveEpisodeFigure(book, name) {
  const normalized = canonicalEntityName(name).toLowerCase();
  const exact = book.cast.find(candidate => {
    const candidateName = canonicalEntityName(candidate[0]).toLowerCase();
    const aliases = candidate[0].toLowerCase().split(/\s*\/\s*|\s+\bor\b\s+/).map(value => canonicalEntityName(value).toLowerCase());
    return candidateName === normalized || aliases.includes(normalized);
  });
  const person = exact || (normalized.length > 4 ? book.cast.find(candidate => {
    const candidateName = canonicalEntityName(candidate[0]).toLowerCase();
    return candidateName.startsWith(normalized) || normalized.startsWith(candidateName);
  }) : null);
  if (person) return person;
  return [name, inferFigureRole(name), "A named agent, witness, transformed presence, or narrative force in this sequence."];
}

function castForEpisode(book, episode) {
  const study = getEpisodeStudy(episode[0]);
  return study.cast.map(name => resolveEpisodeFigure(book, name));
}

function themesForEpisode(book, episode) {
  return book.themes
    .map((theme, index) => ({ theme, index, score: tokenScore(`${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`, `${theme[0]} ${theme[1]}`) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3);
}

function termsForEpisode(book, episode) {
  const study = getEpisodeStudy(episode[0]);
  const text = `${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]} ${study.locus} ${study.motifs.join(" ")}`;
  const requested = ["Metamorphosis"];
  const rules = [
    [/\b(cosmos|cosmogony|creation|elements)\b/i, ["Cosmogony"]],
    [/\b(star|stars|constellation|comet)\b/i, ["Catasterism"]],
    [/\b(underworld|shades?|descent|katabasis)\b/i, ["Katabasis", "Chthonic"]],
    [/\b(wolf|cow|bear|stag|bird|birds|boar|serpent|swan|animal|animals|beast|beasts)\b/i, ["Theriomorphism"]],
    [/\b(song|voice|speech|letter|letters|weaving|woven|tapestry|sculpture|instrument|image|art|craft)\b/i, ["Intermediality", "Ekphrasis"]],
    [/\b(inset|narrator|narrative|story|report|witness|rumor|dream)\b/i, ["Frame narrative", "Focalization"]],
    [/\b(stone|stones|petrified|petrification|hardened)\b/i, ["Petrification", "Metonymy"]],
    [/\b(body|bodies|sex|gender|hybrid|mixture|double form)\b/i, ["Liminality", "Androgyny"]],
    [/\b(grove|riverlands|spring|shade|woodland|woods|meadow)\b/i, ["Locus amoenus"]],
    [/\b(hospitality|guest|host|xenia)\b/i, ["Xenia"]],
    [/\b(impiety|impious|sacrilege|sacrilegious|cannibal|taboo)\b/i, ["Nefas"]],
    [/\b(hubris|arrogance|arrogant|overreach|challenge)\b/i, ["Hubris"]],
    [/\b(rage|fury|frenzy|furor)\b/i, ["Furor"]],
    [/\b(supplication|supplicate|plea|prayer)\b/i, ["Supplication"]],
    [/\b(vow|vows|votum)\b/i, ["Votum"]],
    [/\b(sacrifice|altar|ritual|oracle|prophecy|cult)\b/i, ["Pietas", "Cult epithet"]],
    [/\b(apotheosis|deification|deified|divinized)\b/i, ["Apotheosis"]],
    [/\b(origin|foundation|founding|memorial|custom|emblem|eponym|namesake)\b/i, ["Aetiology", "Metonymy"]],
    [/\b(lament|grief|mourning|bereavement)\b/i, ["Lament"]]
  ];
  rules.forEach(([pattern, names]) => {
    if (pattern.test(text)) requested.push(...names);
  });
  if (requested.length === 1) requested.push("Enargeia");

  const termPool = [...book.terms, ...EXTRA_LEXICON, ...EXPANDED_LEXICON];
  const byName = new Map(termPool.map(term => [term[0].toLowerCase(), term]));
  const selected = [];
  const seen = new Set();
  requested.forEach(name => {
    const term = byName.get(name.toLowerCase());
    if (term && !seen.has(term[0].toLowerCase())) {
      seen.add(term[0].toLowerCase());
      selected.push(term);
    }
  });
  return selected.slice(0, 4);
}

function tieForEpisode(book, episode) {
  const ranked = book.ties
    .map((tie, index) => ({
      tie,
      index,
      score: tokenScore(`${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`, `${tie[0]} ${tie[1]}`)
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  if (ranked[0]?.score > 0) return ranked[0].tie;
  const study = getEpisodeStudy(episode[0]);
  return [
    "Variant mythographic tradition",
    `Ovid places “${episode[0]}” at ${study.locus}. The sequence is his literary arrangement of material that also circulated through local cult, visual art, genealogy, and variant ancient tellings; details need not agree across sources.`
  ];
}

function episodeQuestions(episode, themes) {
  const [before = "one form", after = "another"] = episode[2].split(/\s*→\s*/);
  const primaryTheme = themes[0]?.theme?.[0] || "identity through change";
  return [
    `What remains recognizable as ${before.toLowerCase()} becomes ${after.toLowerCase()}—name, memory, voice, desire, or social role?`,
    `Read this sequence through “${primaryTheme}.” Where does Ovid ask for sympathy, distance, wonder, or unease?`
  ];
}

function episodeContinuity(book, episodeIndex) {
  const previous = book.episodes[episodeIndex - 1];
  const next = book.episodes[episodeIndex + 1];
  return {
    previous: previous ? { title: previous[0], change: previous[2], index: episodeIndex - 1 } : null,
    next: next ? { title: next[0], change: next[2], index: episodeIndex + 1 } : null
  };
}

function episodesForTheme(book, theme) {
  return book.episodes
    .map((episode, index) => ({ episode, index, score: tokenScore(`${theme[0]} ${theme[1]}`, `${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 5);
}

/* ------------------------------------------------------------------ genealogy */

let currentFigureName = null;
let figureContext = { episodeTitle: null, bookId: null };
let figureReturnTarget = null;
let stemmaHouseId = null;
let stemmaScope = "book";

/**
 * Commentary is authored with *asterisk emphasis* for work titles. Escape
 * first, then convert — so a title can be italicised without the field
 * becoming an HTML injection point.
 */
function emphasised(value) {
  // `**text**` marks the change itself, `*text*` a title. Doubles are matched
  // first, or the single-asterisk rule eats one pair of a double.
  return escapeHTML(value)
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/\*([^*]+)\*/g, "<i>$1</i>");
}

const escapeAttr = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

/** Parent, sibling, consort, and child rows — linked where the name resolves. */
function descentRows(figure) {
  const rows = [
    ["Father", figure.father ? [figure.father] : []],
    ["Mother", figure.mother ? [figure.mother] : []],
    ["Siblings", figure.siblings || []],
    ["Consorts", figure.consorts || []],
    ["Children", figure.children || []]
  ].filter(([, values]) => values.length);

  if (!rows.length) {
    return `<div class="figure-lines--none"><dt>Unrecorded</dt><dd>Ovid gives this figure no parentage; it enters the poem without a line.</dd></div>`;
  }

  return rows.map(([label, values]) => {
    const items = values.map(value => {
      const related = getFigure(value);
      return related && related.name !== figure.name
        ? `<button type="button" class="descent-link" data-figure-link="${escapeAttr(related.name)}">${escapeHTML(value)}</button>`
        : `<span>${escapeHTML(value)}</span>`;
    }).join("");
    return `<div><dt>${label}</dt><dd>${items}</dd></div>`;
  }).join("");
}

/**
 * What this figure is doing at the level the reader is currently at. Opened
 * from a book rather than an episode, the sheet still names a scene: it finds
 * the first episode in that book where the figure has an authored function,
 * rather than repeating the standing identity twice on one sheet.
 */
function resolveFigureAct(figure, { episodeTitle, bookId }) {
  if (episodeTitle) return { ...figureAct(figure.name, episodeTitle, bookId), episode: episodeTitle };
  const book = BOOKS.find(entry => entry.id === bookId);
  if (book) {
    for (const episode of book.episodes) {
      const found = figureAct(figure.name, episode[0], null);
      if (found?.scope === "episode") return { ...found, episode: episode[0] };
    }
    if (figure.bookActs?.[bookId]) return { text: figure.bookActs[bookId], scope: "book" };
  }
  return { text: null, scope: "absent" };
}

function renderFigureSheet() {
  const figure = getFigure(currentFigureName);
  if (!figure) return;
  const sheet = $("#figure-sheet");
  const act = resolveFigureAct(figure, figureContext);

  $("#figure-sheet-order").textContent = figure.order || figure.kind;
  $("#figure-sheet-name").textContent = figure.name;
  $("#figure-sheet-domain").textContent = figure.domain || "";
  $("#figure-greek").textContent = figure.greek || "—";
  $("#figure-roman").textContent = figure.roman || "—";
  $("#figure-ovid").textContent = figure.ovid || "—";
  $("#figure-house").textContent = figure.house ? `Of ${figure.house}.` : "Outside the poem’s named houses.";
  $("#figure-lines").innerHTML = descentRows(figure);
  $("#figure-descent-note").hidden = !/variant|tradition|disputed/i.test(
    [figure.father, figure.mother, ...(figure.children || [])].filter(Boolean).join(" ")
  );
  $("#figure-who").textContent = figure.who;

  const bookNumeral = ROMAN[(figureContext.bookId || 1) - 1];
  const scopeLabel = act.scope === "episode"
    ? `In “${act.episode}” · Book ${bookNumeral}`
    : act.scope === "book"
      ? `Across Book ${bookNumeral}`
      : `Not named in Book ${bookNumeral}`;
  $("#figure-here-scope").textContent = scopeLabel;
  $("#figure-here").textContent = act.text
    || "This figure belongs to the wider poem rather than to the book you have open. Its scenes are listed below.";

  const shownEpisode = act.scope === "episode" ? act.episode : null;
  const list = appearances(figure.name).filter(entry => entry.episode !== shownEpisode);
  renderPlaceLinks($("#figure-places"), $("#figure-places-block"), placesForFigure(figure.name));
  $("#figure-appearances").innerHTML = list.length
    ? list.map(entry => {
      const bookIndex = BOOKS.findIndex(entryBook => entryBook.episodes.some(episode => episode[0] === entry.episode));
      const where = bookIndex >= 0 ? `Book ${ROMAN[bookIndex]}` : "";
      return `<li><button type="button" data-figure-episode="${escapeAttr(entry.episode)}">
        <strong>${escapeHTML(entry.episode)}<i>${where}</i></strong>
        <span>${escapeHTML(entry.text)}</span>
      </button></li>`;
    }).join("")
    : `<li class="figure-appearances-empty">This is the figure’s only scene in the poem.</li>`;

  $$("[data-figure-link]", sheet).forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.figureLink, { ...figureContext, source: button });
  }));
  $$("[data-figure-episode]", sheet).forEach(button => button.addEventListener("click", () => {
    const title = button.dataset.figureEpisode;
    const bookIndex = BOOKS.findIndex(book => book.episodes.some(episode => episode[0] === title));
    if (bookIndex < 0) return;
    const episodeIndex = BOOKS[bookIndex].episodes.findIndex(episode => episode[0] === title);
    closeFigureSheet({ restoreFocus: false });
    const open = () => openFocusFolio("episode", episodeIndex);
    if (bookIndex === currentIndex) open();
    else selectBook(bookIndex).then(open);
    openWorkspace("instrument");
  }));
}

function openFigureSheet(name, { episodeTitle = null, bookId = BOOKS[currentIndex].id, source = null } = {}) {
  if (!getFigure(name)) {
    openSearch(name);
    return;
  }
  currentFigureName = name;
  figureContext = { episodeTitle, bookId };
  if (source && !source.closest("[inert]")) figureReturnTarget = source;
  renderFigureSheet();
  const sheet = $("#figure-sheet");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-figure-open");
  // Visibility is set before the tween, not by it: a panel GSAP still has
  // marked `visibility: hidden` cannot take focus, which would strand a
  // keyboard reader outside the sheet they just opened.
  gsap.set(sheet, { visibility: "visible" });
  if (reducedMotion.matches) {
    gsap.set(sheet, { opacity: 1, xPercent: 0 });
  } else {
    gsap.fromTo(sheet, { opacity: 0, xPercent: 8 }, { opacity: 1, xPercent: 0, duration: .5, ease: "expo.out", overwrite: true });
  }
  $(".figure-sheet-close", sheet).focus();
}

function closeFigureSheet({ restoreFocus = true } = {}) {
  const sheet = $("#figure-sheet");
  if (sheet.getAttribute("aria-hidden") === "true") return;
  const finish = () => {
    sheet.setAttribute("aria-hidden", "true");
    gsap.set(sheet, { visibility: "hidden" });
    document.body.classList.remove("is-figure-open");
    currentFigureName = null;
    if (restoreFocus && figureReturnTarget?.isConnected) figureReturnTarget.focus();
    figureReturnTarget = null;
  };
  if (reducedMotion.matches) {
    gsap.set(sheet, { opacity: 0 });
    finish();
  } else {
    gsap.to(sheet, { opacity: 0, xPercent: 6, duration: .28, ease: "power2.in", overwrite: true, onComplete: finish });
  }
}

/* ---------------------------------------------------------------------- chart */

/*
 * The sea chart.
 *
 * A portolan in its manners and a survey underneath. The coast is Natural
 * Earth, projected once by scripts/build-coastline.mjs and committed as path
 * data, so nothing geographic ships to the reader. Everything drawn on top of
 * it — rhumbs, rose, sea rules — is generated from parameters, like the wheel.
 *
 * The hard part is not the geography, it is the names: honest coordinates put
 * Thebes, Cithaeron and Athens inside two chart units of each other. Labels are
 * therefore placed by a greedy candidate search and dropped when they will not
 * fit, and zooming re-runs the search — which is why closing on a coast reveals
 * names rather than merely enlarging them.
 */

/** Roses are set on open water, where a chart would have room for them. */
const CHART_ROSES = [[300, 690], [1210, 690], [560, 150]];
// Names were set at 13px and read as fine print on a wall chart. 16 is the
// size a portolan actually letters its ports at, relative to its coast.
const CHART_NAME_SIZE = 16;
// Roughly the Ionian, which is the centre of gravity of the poem's geography.
const CHART_HOME = [640, 380];
const CHART_ROSE_MAIN = [1210, 690];

let chartZoom = null;
let chartTransform = zoomIdentity;
let chartLayer = "names";
let chartBookFilter = "all";
let chartSelection = null;
let chartQuery = "";
/** Ground the territory capitals have taken, handed to the town-name pass. */
let chartReserved = [];

/*
 * The marks, drawn half again as large as the first pass and with real weight.
 *
 * A chart of this period distinguishes a walled city from a sanctuary from a
 * mountain by its *drawing*, not by colour, and it draws them big enough to
 * read at arm's length. The first version used five-pixel glyphs with hairline
 * strokes and they disappeared into the vellum.
 */
const KIND_MARKS = {
  city: () => `<path class="chart-mark-glyph" d="M -6 5 L -6 -3 L 0 -8 L 6 -3 L 6 5 Z"/><path class="chart-mark-crenel" d="M -6 -3 L -6 -5.5 L -3.6 -5.5 L -3.6 -4 M 6 -3 L 6 -5.5 L 3.6 -5.5 L 3.6 -4"/>`,
  oracle: () => `<path class="chart-mark-glyph" d="M -6.5 5 L -6.5 -1.5 L 0 -8 L 6.5 -1.5 L 6.5 5 Z"/><path class="chart-mark-crenel" d="M -2.2 5 L -2.2 -0.6 L 2.2 -0.6 L 2.2 5"/>`,
  mountain: () => `<path class="chart-mark-glyph" d="M -8 5 L -2.4 -6 L 1.4 0.6 L 3.8 -3.4 L 8 5 Z"/><path class="chart-mark-crenel" d="M -2.4 -6 L -0.4 -2.2 M 3.8 -3.4 L 5 -1"/>`,
  island: () => `<path class="chart-mark-glyph" d="M -7 3 q 3.4 -4.4 7 -0.9 q 3.6 -3.6 7 0.9 q -3.5 3.8 -7 1.7 q -3.6 2 -7 -1.7 Z"/>`,
  // A sacred grove is drawn as the thing it is: a tree standing on its own.
  grove: () => `<path class="chart-mark-glyph chart-mark-glyph--soft" d="M 0 -8 q 5.4 3 4.4 6.4 q 2.6 3 -1 4.6 q -1.4 1.6 -3.4 0.6 q -2 1 -3.4 -0.6 q -3.6 -1.6 -1 -4.6 q -1 -3.4 4.4 -6.4 Z"/><path class="chart-mark-crenel" d="M 0 -0.5 L 0 6"/>`,
  // A way down is drawn as a mouth in the rock, open and unlit.
  descent: () => `<path class="chart-mark-glyph chart-mark-glyph--soft" d="M -7 5.5 L -7 1 A 7 7 0 0 1 7 1 L 7 5.5 Z"/><path class="chart-mark-crenel" d="M -3.4 5.5 L -3.4 1.6 A 3.4 3.4 0 0 1 3.4 1.6 L 3.4 5.5"/>`,
  river: () => `<path class="chart-mark-glyph chart-mark-glyph--line" d="M -7 -2.6 q 3.5 -3.4 7 0 t 7 0 M -7 2.6 q 3.5 -3.4 7 0 t 7 0"/>`,
  strait: () => `<path class="chart-mark-glyph chart-mark-glyph--line" d="M -5.5 -7 q 4 7 0 14 M 5.5 -7 q -4 7 0 14"/>`,
  region: () => `<path class="chart-mark-glyph chart-mark-glyph--soft" d="M 0 -6 L 5.2 -3 L 5.2 3 L 0 6 L -5.2 3 L -5.2 -3 Z"/>`
};

const chartGlyph = kind => (KIND_MARKS[kind] || KIND_MARKS.region)();

/*
 * The name as the chart letters it, which is not the name in the index.
 *
 * A gazetteer entry has to be unambiguous — "Enna & the pool of Pergus",
 * "The Achelous & the Echinades" — and a chart has to fit the name beside the
 * mark without crossing a coastline. Engraved maps solved this centuries ago
 * and their conventions are the ones used here: the article goes, the second
 * half of a compound goes, and a mountain is an M. The register keeps every
 * word, which is what a register is for.
 */
function chartLabelFor(name) {
  if (name.startsWith("The strait of ")) return name.slice(14);
  return name
    .replace(/^The /, "")
    .replace(/ & .*$/, "")
    .replace(/^Mount /, "M. ");
}

/*
 * How many screen pixels one chart unit is currently worth.
 *
 * This is not the zoom factor, and the difference was a real bug for as long as
 * the chart has existed. The plate draws a 1600-unit viewBox at whatever width
 * the pane happens to be — around 1090px, so a chart unit is about 0.68px
 * before any zoom at all. Counter-scaling the marks by the zoom factor alone
 * therefore cancelled the zoom and left that 0.68 in place, and a name set at
 * "16px" reached the reader at eleven. Everything drawn at a fixed screen size
 * — type, glyphs, route weights, the thinning radius — has to divide by the
 * number below, which is the whole chain measured rather than assumed.
 */
function chartScale() {
  const matrix = $("#chart-viewport")?.getScreenCTM?.();
  if (matrix && matrix.a) return matrix.a;
  // Before the group is in the document there is no CTM; compute the same
  // number from the plate's width so the first render is not drawn wrong.
  const width = $("#chart-svg")?.clientWidth || CHART.width;
  return (chartTransform.k || 1) * (width / CHART.width);
}

/** The chart-unit rectangle the reader can actually see, for culling. */
function chartViewRect() {
  const svg = $("#chart-svg");
  const group = $("#chart-viewport");
  const matrix = group?.getScreenCTM?.();
  if (!svg || !matrix) return { x0: 0, y0: 0, x1: CHART.width, y1: CHART.height };
  const box = (svg.parentElement || svg).getBoundingClientRect();
  const inverse = matrix.inverse();
  const corner = (x, y) => {
    const point = svg.createSVGPoint();
    point.x = x; point.y = y;
    return point.matrixTransform(inverse);
  };
  const topLeft = corner(box.left, box.top);
  const bottomRight = corner(box.right, box.bottom);
  return { x0: topLeft.x, y0: topLeft.y, x1: bottomRight.x, y1: bottomRight.y };
}

function chartPlaces() {
  if (chartBookFilter === "all") return PLACES;
  return placesForBook(Number(chartBookFilter));
}

/**
 * Redraw the marks and names for the current zoom.
 *
 * Separated from the furniture because it runs on every zoom frame: the coast,
 * the rhumbs and the rose are drawn once and transformed, while the names have
 * to be re-laid-out, since which of them fit is the whole point.
 */
/*
 * Territories, and then the places on them.
 *
 * Two lettering systems, because an old chart has two. A country is named in
 * tracked capitals laid across the ground it occupies — the name *is* the
 * territory, and its size reports the territory's size. A town is named beside
 * its mark in a small italic, placed where there is room and dropped where
 * there is not. Mixing the two is what makes a map look like an infographic.
 */
/* A territory's name may not shrink below this or swell past it, on screen.
   Below thirteen the tracked capitals read as a cramped smudge rather than a
   country, and the point label does the job better. */
const TERRITORY_MIN = 13;
const TERRITORY_MAX = 36;

function renderChartTerritories() {
  const shown = new Set(chartPlaces().map(place => place.name));
  const scale = chartScale();
  const view = chartViewRect();
  const viewWidth = view.x1 - view.x0;
  const viewHeight = view.y1 - view.y0;
  const washes = [];
  const lettered = [];

  Object.entries(PLACE_EXTENTS).forEach(([name, box]) => {
    if (!shown.has(name)) return;
    const place = getPlace(name);
    if (!place) return;
    const [x0, y0, x1, y1] = box;
    const active = chartSelection === name;
    const sea = place.kind === "sea";

    // Off the plate entirely: neither wash nor name, and no work done for it.
    if (x1 < view.x0 || x0 > view.x1 || y1 < view.y0 || y0 > view.y1) return;

    if (!sea) {
      washes.push(`<g class="chart-territory chart-territory--${place.kind}${active ? " is-active" : ""}"
          data-chart-territory="${escapeAttr(name)}">
        <path class="chart-territory-wash" d="${territoryOutline(name, box)}"/>
      </g>`);
    }

    const label = territoryLabel(chartLabelFor(place.name), box);
    if (!label.fits) return;

    /*
     * Three ways a country's name stops being useful, all of them about the
     * reader's screen rather than the ground:
     *
     *   too small — the name is finer than the town names printed over it;
     *   too large — one word has taken the plate and says nothing new;
     *   too near  — the reader is standing inside Libya, and what they want
     *               now is the towns in it, not the word LIBYA off both edges.
     */
    const drawn = Math.min(label.size, TERRITORY_MAX / scale);
    if (drawn * scale < TERRITORY_MIN) return;
    const inside = (x1 - x0) > viewWidth * 1.9 && (y1 - y0) > viewHeight * 1.9;
    if (inside) return;

    lettered.push({ name, label, active, sea, size: drawn });
  });

  /*
   * Two lettering systems, one sheet.
   *
   * Territory capitals are laid out first and independently of the town names,
   * so without this they collide — LYDIA printed through PHRYGIA, APULIA across
   * Cumae. The capitals win, because a country's name is the larger statement
   * and it cannot be nudged; so the boxes they occupy are handed to the town
   * pass as ground already taken, and a town that has nowhere left waits for a
   * closer scale like any other.
   */
  const sorted = lettered.sort((a, b) => b.size - a.size);
  const boxes = [];
  const survivors = sorted.filter(item => {
    // Tracked capitals run about four fifths of an em per letter with the
    // letter-spacing this chart sets them at.
    const width = item.label.text.length * item.size * 0.82;
    const box = {
      x0: item.label.x - width / 2, x1: item.label.x + width / 2,
      y0: item.label.y - item.size, y1: item.label.y + item.size * 0.3
    };
    // A name that runs off the sheet arrives as PHRY and IAN SEA. Whole word
    // or nothing: a chart does not print half a country.
    if (box.x0 < view.x0 || box.x1 > view.x1 || box.y0 < view.y0 || box.y1 > view.y1) return false;
    const clear = boxes.every(other =>
      !(box.x0 < other.x1 && box.x1 > other.x0 && box.y0 < other.y1 && box.y1 > other.y0));
    if (clear) boxes.push(box);
    return clear;
  });
  chartReserved = boxes;

  // Names go in their own layer above every wash, so one territory's tint
  // never sits on a neighbour's letters.
  const names = survivors.map(({ name, label, active, sea, size }) => `
    <text class="chart-territory-name${sea ? " chart-territory-name--sea" : ""}${active ? " is-active" : ""}"
      x="${round(label.x)}" y="${round(label.y)}"
      style="font-size:${size.toFixed(1)}px;letter-spacing:${(size * 0.24).toFixed(2)}px"
      data-chart-territory-name="${escapeAttr(name)}">${escapeHTML(label.text)}</text>`).join("");

  // Washes are clipped to the coast: a territory tints the ground it held, and
  // a tinted sea is a claim the gazetteer never makes. The seas letter over the
  // water with no wash at all, which is what the water already is.
  $("#chart-territories").innerHTML =
    `<g clip-path="url(#chart-land-clip)">${washes.join("")}</g>${names}`;

  $$("[data-chart-territory], [data-chart-territory-name]").forEach(node => {
    const key = node.dataset.chartTerritory || node.dataset.chartTerritoryName;
    node.addEventListener("click", () => openChartPlace(key));
    node.addEventListener("pointerenter", () => showChartWhisper(key));
    node.addEventListener("pointerleave", hideChartWhisper);
  });
  return new Set(survivors.map(item => item.name));
}

/*
 * How much clear screen a mark claims before another may be drawn.
 *
 * Forty-four pixels is roughly a glyph and its name — enough that two marks
 * never read as one, and small enough that a couple of zoom steps into the
 * Aegean brings the whole archipelago back.
 */
const CHART_SEPARATION = 44;

function renderChartMarks() {
  const scale = chartScale();
  const shown = chartPlaces();
  // A territory that carries its own name across the land does not also need a
  // dot with the same word beside it.
  const lettered = renderChartTerritories();
  const view = chartViewRect();

  const items = shown
    .map(place => {
      const point = PLACE_POINTS[place.name];
      // A sea is not a dot. It is lettered across its own water and opened
      // from those letters, so it never joins the scramble for point room.
      if (!point || place.kind === "sea") return null;
      return {
        name: place.name, place,
        x: point[0], y: point[1],
        label: chartLabelFor(place.name),
        radius: 9,
        lettered: lettered.has(place.name),
        importance: chartImportance(place)
      };
    })
    .filter(Boolean);

  // Thin to what this scale can carry, weighing only what the reader can see:
  // a place off the plate must not spend one of the visible slots.
  const onPlate = items.filter(item =>
    item.x >= view.x0 && item.x <= view.x1 && item.y >= view.y0 && item.y <= view.y1);
  /*
   * The radius answers to the crowd, not to a constant.
   *
   * Forty-four pixels is the right claim when a hundred places are fighting for
   * the Aegean. It is absurd when the reader has filtered to Book III and there
   * are eleven marks on the whole sheet — the chart was then hiding seven of
   * them to protect a reader from congestion that did not exist. So the claim
   * relaxes as the crowd thins, down to a floor that still keeps two marks from
   * reading as one. Names cannot collide whatever this does: that is the label
   * pass's job, and it is enforced separately.
   */
  const crowd = Math.min(1, Math.sqrt(onPlate.length / 55));
  const drawn = declutter(onPlate, {
    separation: Math.max(17, CHART_SEPARATION * crowd) / scale,
    keep: chartSelection ? [chartSelection] : []
  });

  const { placed } = placeLabels(
    drawn.filter(item => !item.lettered),
    {
      scale, fontSize: CHART_NAME_SIZE, reserved: chartReserved,
      font: `italic ${CHART_NAME_SIZE}px "Bodoni Moda", Didot, Georgia, serif`
    }
  );
  const byName = new Map(placed.map(item => [item.name, item]));

  $("#chart-marks").innerHTML = drawn.map(item => {
    const label = byName.get(item.name);
    const active = chartSelection === item.name;
    const classes = ["chart-mark", `chart-mark--${item.place.kind}`, active ? "is-active" : "",
      item.lettered ? "is-lettered" : ""].filter(Boolean).join(" ");
    // Marks and names are counter-scaled so the chart reads at every zoom:
    // closing on a coast should show more of the map, not a bigger drawing.
    return `<g class="${classes}" transform="translate(${item.x} ${item.y}) scale(${(1 / scale).toFixed(4)})"
        tabindex="0" role="button" data-chart-place="${escapeAttr(item.name)}"
        aria-label="${escapeAttr(item.name)}, ${escapeAttr(item.place.kind)}. ${escapeAttr(item.place.what)}">
      <circle class="chart-mark-hit" r="18"/>
      ${chartGlyph(item.place.kind)}
      ${label ? `<text class="chart-mark-label" x="${((label.labelX - item.x) * scale).toFixed(1)}" y="${((label.labelY - item.y) * scale).toFixed(1)}" text-anchor="${label.anchor}">${escapeHTML(item.label)}</text>` : ""}
    </g>`;
  }).join("");

  /*
   * An honest count.
   *
   * Comparing the names on screen against the whole gazetteer was flattering
   * nonsense: it counted Babylon as missing while the reader was looking at
   * Sicily. What the note reports is the sheet in front of them — how much of
   * what is in view has been named — and the register carries the total.
   */
  const named = placed.length + lettered.size;
  const inView = onPlate.length + lettered.size;
  $("#chart-scale-note").textContent = named < inView
    ? `${named} of ${inView} places in view are named · close for the rest`
    : `every place in view is named · ${shown.length} in the gazetteer`;

  $$("[data-chart-place]").forEach(node => {
    const open = () => openChartPlace(node.dataset.chartPlace);
    node.addEventListener("click", open);
    node.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
    // Hovering says what happens here before the reader commits to a click.
    node.addEventListener("pointerenter", () => showChartWhisper(node.dataset.chartPlace));
    node.addEventListener("focus", () => showChartWhisper(node.dataset.chartPlace));
    node.addEventListener("pointerleave", hideChartWhisper);
    node.addEventListener("blur", hideChartWhisper);
  });
}

/** A one-line gloss on hover: what happens here, and who is in it. */
function showChartWhisper(name) {
  const place = getPlace(name);
  if (!place) return;
  const whisper = $("#chart-whisper");
  whisper.hidden = false;
  whisper.innerHTML = `<b>${escapeHTML(place.name)}</b>
    <span>${escapeHTML(place.what)}</span>
    <i>${escapeHTML(place.figures.slice(0, 5).join(" · "))}</i>`;
}

function hideChartWhisper() {
  const whisper = $("#chart-whisper");
  if (whisper) whisper.hidden = true;
}

/** The routes the poem actually traces, drawn only when asked for. */
function renderChartRoutes() {
  if (chartLayer !== "journeys") {
    $("#chart-routes").innerHTML = "";
    return;
  }
  const scale = chartScale();
  $("#chart-routes").innerHTML = JOURNEYS
    .filter(journey => chartBookFilter === "all" || Number(chartBookFilter) === journey.book)
    .map(journey => {
      const points = journeyLegs(journey).map(place => PLACE_POINTS[place.name]).filter(Boolean);
      if (points.length < 2) return "";
      const active = chartSelection === journey.id;
      return `<g class="chart-route${active ? " is-active" : ""}" data-chart-journey="${escapeAttr(journey.id)}">
        <path class="chart-route-line" d="${routePath(points)}" style="stroke-width:${(2.2 / scale).toFixed(2)}"/>
        ${points.map((point, index) => `<circle class="chart-route-stop" cx="${point[0]}" cy="${point[1]}" r="${(3.4 / scale).toFixed(2)}" data-leg="${index}"/>`).join("")}
      </g>`;
    }).join("");
}

/*
 * The key.
 *
 * Drawn with the same generators as the chart, so a walled city in the legend
 * is the identical path to a walled city on the water. A legend redrawn by
 * hand is a second map on the page, and it drifts the moment the first one
 * changes.
 */
const CHART_KEY = [
  ["city", "Walled city"],
  ["oracle", "Sanctuary or oracle"],
  ["grove", "Sacred grove or spring"],
  ["descent", "A way down into the other world"],
  ["mountain", "Mountain"],
  ["island", "Island"],
  ["river", "River"],
  ["strait", "Strait"],
  ["region", "Territory, lettered across its ground"],
  ["sea", "Sea, lettered across its water"]
];

function renderChartKey() {
  $("#chart-key-list").innerHTML = CHART_KEY.map(([kind, label]) => `
    <li>
      <svg class="chart-key-glyph chart-mark chart-mark--${kind}" viewBox="-11 -11 22 22" aria-hidden="true">
        ${kind === "sea"
          ? `<text class="chart-key-letters" x="0" y="4" text-anchor="middle">MARE</text>`
          : kind === "region"
            ? `<text class="chart-key-letters chart-key-letters--land" x="0" y="4" text-anchor="middle">TERRA</text>`
            : chartGlyph(kind)}
      </svg>
      <span>${escapeHTML(label)}</span>
    </li>`).join("") + `
    <li class="chart-key-route">
      <svg class="chart-key-glyph" viewBox="-11 -11 22 22" aria-hidden="true">
        <path class="chart-route-line" d="M -10 4 Q 0 -10 10 4" style="stroke-width:2.4"/>
      </svg>
      <span>A journey the poem traces</span>
    </li>`;

  const bar = scaleBar(CHART);
  // Drawn to the chart's own units, then expressed at the bar's own width, so
  // the printed distance is the distance the chart actually measures.
  const width = 200;
  const unit = width / bar.length;
  $("#chart-scale-bar").innerHTML = `
    <g class="scale-bar">
      ${[0, 1, 2, 3].map(index => `<rect x="${18 + (index * width) / 4}" y="6" width="${width / 4}" height="7"
        class="scale-block${index % 2 ? " is-dark" : ""}"/>`).join("")}
      <path class="scale-rule" d="M 18 6 L ${18 + width} 6 M 18 13 L ${18 + width} 13"/>
      ${[0, 1, 2, 3, 4].map(index => `<path class="scale-tick" d="M ${18 + (index * width) / 4} 13 L ${18 + (index * width) / 4} 18"/>`).join("")}
      <text class="scale-figure" x="18" y="27">0</text>
      <text class="scale-figure" x="${18 + width}" y="27" text-anchor="end">${bar.km} km · ${bar.miles} Roman miles</text>
    </g>`;
  $("#chart-scale-bar").setAttribute("aria-label",
    `Scale bar: ${bar.km} kilometres, or ${bar.miles} Roman miles, measured at ${bar.atLatitude} degrees north`);
}

/** Furniture: drawn once per book filter, then transformed rather than rebuilt. */
function renderChartFurniture() {
  const svg = $("#chart-svg");
  svg.setAttribute("viewBox", `0 0 ${CHART.width} ${CHART.height}`);
  $("#chart-sea-rect").setAttribute("width", CHART.width);
  $("#chart-sea-rect").setAttribute("height", CHART.height);

  $("#chart-sea").innerHTML = `<rect class="sea-ground" x="0" y="0" width="${CHART.width}" height="${CHART.height}"/>
    <g class="sea-hatch" clip-path="url(#chart-sea-clip)">${renderSeaHatch(CHART.width, CHART.height, { step: 30, angle: 0 })}</g>`;
  $("#chart-graticule").innerHTML = `<path class="graticule-line" d="${GRATICULE_PATH}"/>`;
  $("#chart-rhumbs").innerHTML = renderRhumbNetwork(CHART_ROSES, Math.hypot(CHART.width, CHART.height), { winds: 16 });
  $("#chart-land").innerHTML = `<path class="land-mass" d="${LAND_PATH}"/>`;
  $("#chart-land-clip-path").setAttribute("d", LAND_PATH);
  $("#chart-rose").innerHTML = renderCompassRose(CHART_ROSE_MAIN[0], CHART_ROSE_MAIN[1], 58);
  renderChartKey();
}

function renderChartIndex() {
  const all = chartPlaces();
  // The gazetteer runs to a hundred and forty entries. A list that long is a
  // reference work, and a reference work needs a way in that is not scrolling.
  const shown = chartQuery
    ? all.filter(place =>
        place.name.toLowerCase().includes(chartQuery) ||
        place.what.toLowerCase().includes(chartQuery) ||
        place.figures.some(figure => figure.toLowerCase().includes(chartQuery)) ||
        place.episodes.some(episode => episode.toLowerCase().includes(chartQuery)))
    : all;
  $("#chart-count").textContent = chartQuery ? `· ${shown.length} of ${all.length}` : `· ${all.length}`;
  $("#chart-index-empty").hidden = shown.length > 0;
  $("#chart-index").innerHTML = shown
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(place => `<li>
      <button type="button" data-chart-index="${escapeAttr(place.name)}" aria-pressed="${chartSelection === place.name}">
        <span class="chart-index-name">${escapeHTML(place.name)}</span>
        <span class="chart-index-kind">${escapeHTML(place.kind)}</span>
        <span class="chart-index-books">${place.books.map(book => ROMAN[book - 1]).join(" · ")}</span>
      </button>
    </li>`).join("");
  $$("[data-chart-index]").forEach(button => button.addEventListener("click", () => {
    openChartPlace(button.dataset.chartIndex, { centre: true });
  }));

  $("#chart-otherworld").innerHTML = OTHERWORLD.map(place => `<li>
    <button type="button" data-chart-other="${escapeAttr(place.name)}">
      <span class="chart-index-name">${escapeHTML(place.name)}</span>
      <span class="chart-index-books">${place.books.map(book => ROMAN[book - 1]).join(" · ")}</span>
    </button>
  </li>`).join("");
  $$("[data-chart-other]").forEach(button => button.addEventListener("click", () => {
    openChartPlace(button.dataset.chartOther);
  }));
}

/** The place record: what it is, its culture, where it appears, and who is from there. */
function openChartPlace(name, { centre = false } = {}) {
  const place = getPlace(name) || OTHERWORLD.find(entry => entry.name === name);
  if (!place) return;
  chartSelection = place.name;

  const panel = $("#chart-place");
  panel.hidden = false;
  const episodes = place.episodes.map(title => `<button type="button" data-chart-episode="${escapeAttr(title)}">${escapeHTML(title)}</button>`).join("");
  // A figure the registry holds opens a dossier; one it does not is still named,
  // because leaving Danae off Seriphos to keep every word clickable would be
  // the interface editing the poem. A button that only runs a search is worse
  // than plain type — it promises a door and opens a corridor.
  const figures = place.figures.map(figure => getFigure(figure)
    ? `<button type="button" data-chart-figure="${escapeAttr(figure)}">${escapeHTML(figure)}</button>`
    : `<span class="chart-place-figure-plain">${escapeHTML(figure)}</span>`).join("");
  const registers = place.greek || place.roman
    ? `<p class="chart-place-registers"><i>Gk</i> ${escapeHTML(place.greek || "—")} · <i>Lat</i> ${escapeHTML(place.roman || "—")}</p>`
    : "";

  panel.innerHTML = `
    <button class="chart-place-close" type="button" data-chart-close aria-label="Close this place">×</button>
    <p class="chart-place-kind">${escapeHTML(place.kind === "otherworld" ? "Beyond the world" : place.kind)}</p>
    <h3 class="chart-place-name">${escapeHTML(place.name)}</h3>
    ${registers}
    <p class="chart-place-what">${escapeHTML(place.what)}</p>
    <div class="chart-place-block">
      <b>Its culture</b>
      <p>${escapeHTML(place.culture)}</p>
    </div>
    <div class="chart-place-block">
      <b>Books</b>
      <p class="chart-place-books">${place.books.map(book => `<button type="button" data-chart-book="${book}">Book ${ROMAN[book - 1]}</button>`).join("")}</p>
    </div>
    <div class="chart-place-block">
      <b>Episodes here</b>
      <div class="chart-place-links">${episodes}</div>
    </div>
    <div class="chart-place-block">
      <b>Figures of this place</b>
      <div class="chart-place-links chart-place-links--figures">${figures}</div>
    </div>`;

  $("[data-chart-close]").addEventListener("click", () => {
    chartSelection = null;
    panel.hidden = true;
    renderChartMarks();
    renderChartIndex();
  });
  $$("[data-chart-figure]").forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.chartFigure, { bookId: place.books[0], source: button });
  }));
  $$("[data-chart-episode]").forEach(button => button.addEventListener("click", () => {
    openEpisodeFromChart(button.dataset.chartEpisode);
  }));
  $$("[data-chart-book]").forEach(button => button.addEventListener("click", () => {
    selectBook(Number(button.dataset.chartBook) - 1);
    openWorkspace("instrument");
  }));

  if (centre && PLACE_POINTS[place.name]) chartCentreOn(PLACE_POINTS[place.name]);
  renderChartMarks();
  renderChartIndex();
  // The register scrolls, and opening a place from far down the gazetteer left
  // the record itself above the fold — the one thing the reader just asked for.
  $(".chart-register").scrollTop = 0;
}

/** Find an episode by title anywhere in the poem and open its folio. */
function openEpisodeFromChart(title) {
  const wanted = title.replace(/[’‘]/g, "'").toLowerCase();
  for (let index = 0; index < BOOKS.length; index += 1) {
    const episodeIndex = BOOKS[index].episodes.findIndex(
      episode => episode[0].replace(/[’‘]/g, "'").toLowerCase() === wanted
    );
    if (episodeIndex < 0) continue;
    selectBook(index);
    openWorkspace("instrument");
    // openWorkspace closes any open folio as part of switching, and it does so
    // across a frame. Opening on the next frame therefore raced the close and
    // lost — the workspace changed and the folio silently stayed shut. Two
    // frames puts this after the switch has settled.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      openFocusFolio("episode", episodeIndex, null);
    }));
    return;
  }
}

/*
 * Ease the chart to a transform.
 *
 * d3-selection has no `.transition()` — that lives in d3-transition, another
 * twenty kilobytes for an eased number. Fifteen lines of requestAnimationFrame
 * does the same job here and lets the easing match the rest of the interface.
 */
function chartEaseTo(target, duration = 520) {
  if (reducedMotion.matches || duration === 0) {
    d3Select("#chart-svg").call(chartZoom.transform, target);
    return;
  }
  const from = chartTransform;
  const start = performance.now();
  const step = now => {
    const time = Math.min(1, (now - start) / duration);
    const eased = time < 0.5 ? 4 * time ** 3 : 1 - ((-2 * time + 2) ** 3) / 2;
    const next = zoomIdentity
      .translate(from.x + (target.x - from.x) * eased, from.y + (target.y - from.y) * eased)
      .scale(from.k + (target.k - from.k) * eased);
    d3Select("#chart-svg").call(chartZoom.transform, next);
    if (time < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/*
 * The plates.
 *
 * A bound atlas does not ask the reader to find Boeotia on a chart of the known
 * world; it engraves the world once and then engraves Greece again, larger, on
 * its own sheet. The poem's geography is wildly uneven — the Aegean carries
 * fifty entries and the Ganges carries one — so a single scale cannot serve it,
 * and expecting the reader to discover that by dragging is a design failing
 * rather than a discovery.
 *
 * Each plate is a bound in degrees, projected through the same scale the coast
 * was projected with, so the sheets stay true if the frame ever moves.
 */
const CHART_PLATES = [
  { id: "world", name: "The whole world" },
  { id: "aegean", name: "Greece & the Aegean", box: [[19.4, 34.4], [29.6, 41.6]] },
  { id: "italy", name: "Italy & Sicily", box: [[7.2, 35.6], [19.4, 46.8]] },
  { id: "asia", name: "Asia Minor & the East", box: [[24.6, 29.5], [45.5, 43.0]] },
  { id: "africa", name: "Africa & the Nile", box: [[8.5, 14.0], [37.5, 34.5]] }
];

/** Degrees to chart units. Equirectangular is linear in both, so this is exact. */
function chartProject([lon, lat]) {
  const { x0, x1, y0, y1, west, east, north, south } = CHART.scale;
  return [
    x0 + ((lon - west) / (east - west)) * (x1 - x0),
    y0 + ((north - lat) / (north - south)) * (y1 - y0)
  ];
}

/*
 * How much of the chart the plate shows at rest, in chart units.
 *
 * The SVG letterboxes its viewBox into whatever width the pane has, so the
 * visible frame is never exactly 1600 x 900 — it is 1600 wide and shorter, or
 * 900 tall and narrower, depending on which way the pane is out of ratio.
 */
function chartVisibleExtent() {
  const svg = $("#chart-svg");
  const box = svg.getBoundingClientRect();
  const base = Math.min(box.width / CHART.width, box.height / CHART.height) || 1;
  return { width: box.width / base, height: box.height / base };
}

/** Frame a set of gazetteer entries — the ground one book actually covers. */
function chartFitToPlaces(places) {
  const points = places.map(place => PLACE_POINTS[place.name]).filter(Boolean);
  if (points.length < 2) {
    if (points.length === 1) chartCentreOn(points[0], 5);
    return;
  }
  /*
   * Trimmed bounds, not the full extent.
   *
   * Book VIII happens in Attica, Crete and Calydon, and it also mentions the
   * Caucasus once, because that is where Famine lives. Fitting the whole extent
   * therefore framed the Black Sea and put the entire book in a thumbnail in
   * one corner — a technically complete answer to a question nobody asked. The
   * frame is set from where the book mostly is; the outlier is one drag away
   * and still drawn.
   */
  const span = (values, low, high) => {
    const sorted = [...values].sort((a, b) => a - b);
    const at = ratio => sorted[clamp(Math.round(ratio * (sorted.length - 1)), 0, sorted.length - 1)];
    return [at(low), at(high)];
  };
  const [xLow, xHigh] = span(points.map(point => point[0]), 0.08, 0.92);
  const [yLow, yHigh] = span(points.map(point => point[1]), 0.08, 0.92);
  // A margin so the outermost mark is not printed against the bezel, and room
  // for the name it carries.
  const pad = 46;
  const west = xLow - pad;
  const east = xHigh + pad;
  const north = yLow - pad;
  const south = yHigh + pad;
  const visible = chartVisibleExtent();
  const fit = Math.min(visible.width / (east - west), visible.height / (south - north));
  chartCentreOn([(west + east) / 2, (north + south) / 2], clamp(fit, 1, 40));
}

function chartOpenPlate(plate) {
  if (!plate.box) { chartEaseTo(zoomIdentity, 420); return; }
  const [west, south] = chartProject(plate.box[0]);
  const [east, north] = chartProject(plate.box[1]);
  const visible = chartVisibleExtent();
  const fit = 0.94 * Math.min(
    visible.width / Math.abs(east - west),
    visible.height / Math.abs(south - north)
  );
  chartCentreOn([(west + east) / 2, (north + south) / 2], clamp(fit, 1, 40));
}

/*
 * Put a point of the chart in the middle of the plate.
 *
 * d3-zoom bound to an SVG element works in that element's *user* units, not in
 * client pixels: d3's pointer helper inverts the node's screen matrix before
 * handing over a coordinate. This was got wrong for as long as the chart has
 * existed — the old version mixed the plate's pixel width into a transform that
 * is read as viewBox units, so every programmatic fly-to landed roughly a third
 * of the frame from where it was aimed, and asking for Greece produced Italy.
 *
 * In viewBox units it is one line: a point p lands at k·p + t, and the middle
 * of an xMidYMid frame is always the middle of the viewBox.
 */
function chartCentreOn(point, scale = 3.6) {
  chartEaseTo(zoomIdentity
    .translate(CHART.width / 2 - scale * point[0], CHART.height / 2 - scale * point[1])
    .scale(scale));
}

function renderChart() {
  if (!$("#chart-svg")) return;
  renderChartFurniture();
  renderChartRoutes();
  renderChartMarks();
  renderChartIndex();
}

function setUpChart() {
  const svg = $("#chart-svg");
  if (!svg || svg.dataset.ready) return;
  svg.dataset.ready = "true";

  const select = $("#chart-book-select");
  select.innerHTML = `<option value="all">The whole poem</option>` +
    BOOKS.map((book, index) => `<option value="${book.id}">Book ${ROMAN[index]} — ${escapeHTML(book.title)}</option>`).join("");
  select.addEventListener("change", event => {
    chartBookFilter = event.target.value;
    renderChart();
    // Choosing a book is asking where that book happens. Answering with the
    // same whole-world sheet and a few marks removed makes the reader do the
    // finding; the chart already knows the ground and can simply go there.
    chartFitToPlaces(chartPlaces());
  });

  $$("[data-chart-layer]").forEach(button => button.addEventListener("click", () => {
    chartLayer = button.dataset.chartLayer;
    $$("[data-chart-layer]").forEach(other =>
      other.setAttribute("aria-pressed", String(other.dataset.chartLayer === chartLayer)));
    renderChartRoutes();
    renderChartMarks();
  }));

  const viewport = d3Select("#chart-viewport");
  chartZoom = d3Zoom()
    /*
     * Forty, not fourteen.
     *
     * The gazetteer now holds places ten kilometres apart — Thebes and the
     * valley Actaeon died in, Athens and Eleusis. A ceiling of fourteen put the
     * thinning radius at about thirty kilometres at full zoom, so those pairs
     * could never both be drawn however far the reader closed in, and the chart
     * quietly kept a promise it had no way to keep.
     */
    .scaleExtent([1, 40])
    .on("zoom", event => {
      chartTransform = event.transform;
      viewport.attr("transform", event.transform);
      // Names are re-laid-out, not merely rescaled: at four times the zoom
      // there is four times the room, and the whole point is that more of the
      // gazetteer becomes readable rather than larger.
      renderChartMarks();
      renderChartRoutes();
    });
  d3Select("#chart-svg").call(chartZoom).on("dblclick.zoom", null);

  $("#chart-plates").innerHTML = CHART_PLATES.map(plate =>
    `<button type="button" data-chart-plate="${escapeAttr(plate.id)}">${escapeHTML(plate.name)}</button>`).join("");
  $$("[data-chart-plate]").forEach(button => button.addEventListener("click", () => {
    const plate = CHART_PLATES.find(entry => entry.id === button.dataset.chartPlate);
    if (plate) chartOpenPlate(plate);
  }));

  const filter = $("#chart-filter");
  filter.addEventListener("input", () => {
    chartQuery = filter.value.trim().toLowerCase();
    renderChartIndex();
  });

  $$("[data-chart-zoom]").forEach(button => button.addEventListener("click", () => {
    const mode = button.dataset.chartZoom;
    if (mode === "reset") { chartEaseTo(zoomIdentity, 320); return; }
    const factor = mode === "in" ? 1.7 : 1 / 1.7;
    const k = Math.min(40, Math.max(1, chartTransform.k * factor));
    // Zoom about the middle of the frame, not the chart's origin, so the coast
    // the reader is looking at is the coast that stays put. The middle is in
    // viewBox units, because that is the space this zoom behaviour works in.
    const cx = CHART.width / 2;
    const cy = CHART.height / 2;
    const ratio = k / chartTransform.k;
    chartEaseTo(zoomIdentity
      .translate(cx - (cx - chartTransform.x) * ratio, cy - (cy - chartTransform.y) * ratio)
      .scale(k), 320);
  }));

  renderChart();
  // The frame runs from the Atlas mountains to the Ganges because the poem
  // does, but almost everything happens in the middle of it. Opening on the
  // whole frame puts Greece in a thumbnail; opening on the Mediterranean puts
  // the reader where the book is, with the far edges one gesture away.
  requestAnimationFrame(() => chartCentreOn(CHART_HOME, 2.1));
}

/**
 * Send the reader to a place on the chart, opened and centred.
 *
 * Used by the figure dossier and the episode folio, so every direction of the
 * index is traversable: a place lists its figures and episodes, and each of
 * those lists its places back.
 */
function goToPlace(name) {
  closeFigureSheet({ restoreFocus: false });
  closeFocusFolio({ restoreFocus: false });
  openWorkspace("chart");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    setUpChart();
    openChartPlace(name, { centre: true });
  }));
}

function renderPlaceLinks(container, block, places) {
  block.hidden = !places.length;
  if (!places.length) return;
  container.innerHTML = places
    .map(place => `<button type="button" data-goto-place="${escapeAttr(place.name)}">${escapeHTML(place.name)}</button>`)
    .join("");
  $$("[data-goto-place]", container).forEach(button =>
    button.addEventListener("click", () => goToPlace(button.dataset.gotoPlace)));
}

/* --------------------------------------------------------------------- stemma */

/**
 * Build the descent graph for a house, narrowed to the book in hand.
 *
 * The chart is generation-ranked, so a ring always means one generation
 * further from the founder. Where Ovid records no descent at all the graph
 * comes back nearly empty; the adjacent list carries those figures instead of
 * a diagram pretending to a structure the poem does not supply.
 */
function stemmaGraphFor(house, book, { scope = "book" } = {}) {
  const inBook = new Set(figuresForBook(book.id).map(figure => figure.name));
  const full = descentGraph([house.root], {
    getFigure,
    childrenOf,
    maxGenerations: 4
  });
  if (scope === "house") return full;
  const narrowed = pruneGraph(full, name => inBook.has(name));
  return narrowed.nodes.size >= 3 ? narrowed : full;
}

/** A clipped folio crop, so a node carries a face rather than an empty disc. */
function portraitDefs(nodes, radius) {
  return nodes.map(node =>
    `<clipPath id="${portraitClipId(node.name)}"><circle cx="0" cy="0" r="${radius.toFixed(1)}"/></clipPath>`
  ).join("");
}

/**
 * Chart metrics, in chart units. The plate is fitted to its content and then
 * zoomed, so these stay fixed however many generations a house runs to: a
 * portrait is the same size on a two-row chart and a six-row one.
 */
const STEMMA_NODE_R = 30;
const STEMMA_ROW_GAP = 140;
const STEMMA_SLOT = 112;

const round = value => Number(value.toFixed(1));

/**
 * The family bracket. Each parent drops to a shared junction, the junction
 * drops to a bar, and every child rises to that bar. It is the oldest mark in
 * the genre and the reason a stemma can be read at a glance: children of one
 * marriage are visibly one set, not a scatter of separate lines.
 */
function bracketPath(bracket, nodeR) {
  const parts = [];
  bracket.parents.forEach(parent => {
    parts.push(`M ${round(parent.x)} ${round(bracket.dropFrom)}`);
    if (Math.abs(parent.x - bracket.junctionX) < 0.5) {
      parts.push(`L ${round(parent.x)} ${round(bracket.junctionY)}`);
    } else {
      const corner = bracket.junctionY - 12;
      const sweep = parent.x < bracket.junctionX ? 1 : 0;
      parts.push(`L ${round(parent.x)} ${round(corner)}`);
      parts.push(`A 12 12 0 0 ${sweep} ${round(parent.x + (sweep ? 12 : -12))} ${round(bracket.junctionY)}`);
      parts.push(`L ${round(bracket.junctionX)} ${round(bracket.junctionY)}`);
    }
  });
  parts.push(`M ${round(bracket.junctionX)} ${round(bracket.junctionY)} L ${round(bracket.junctionX)} ${round(bracket.barY)}`);
  if (!bracket.direct) {
    parts.push(`M ${round(bracket.barFrom)} ${round(bracket.barY)} L ${round(bracket.barTo)} ${round(bracket.barY)}`);
  }
  bracket.children.forEach(child => {
    parts.push(`M ${round(child.x)} ${round(bracket.barY)} L ${round(child.x)} ${round(child.y - nodeR - 4)}`);
  });
  return parts.join(" ");
}

/** Marriage: a rule along the row, tucked under the two portraits it joins. */
function marriagePath(edge, nodeR) {
  const y = edge.from.y;
  if (edge.adjacent) {
    return `M ${round(edge.from.x + nodeR + 3)} ${round(y)} L ${round(edge.to.x - nodeR - 3)} ${round(y)}`;
  }
  // A tie the layout could not seat side by side dips well below the row, and
  // below the names, rather than cutting through whoever happens to stand
  // between the two. These are hidden until a line is traced: drawn always,
  // a god with six lovers lays six rules across his own generation and the
  // reader reads "Juno — Io" where the poem said nothing of the kind.
  const dip = y + nodeR + 34 + (edge.lane || 0) * 11;
  return [
    `M ${round(edge.from.x)} ${round(y + nodeR + 3)}`,
    `L ${round(edge.from.x)} ${round(dip - 10)}`,
    `Q ${round(edge.from.x)} ${round(dip)} ${round(edge.from.x + 10)} ${round(dip)}`,
    `L ${round(edge.to.x - 10)} ${round(dip)}`,
    `Q ${round(edge.to.x)} ${round(dip)} ${round(edge.to.x)} ${round(dip - 10)}`,
    `L ${round(edge.to.x)} ${round(y + nodeR + 3)}`
  ].join(" ");
}

/** "Bacchus / Dionysus" is two names; a medallion has room for one. */
function chartLabel(name) {
  const short = name.split(" / ")[0].replace(/\s*\(.*$/, "").trim();
  return short.length > 14 ? `${short.slice(0, 13)}…` : short;
}

function portraitClipId(name) {
  return `stemma-clip-${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
}

/**
 * The engraved medallion: a clipped plate crop behind a gold rim. The crop
 * offset comes from the same deterministic hash the console and folio use, so
 * a figure keeps the same face everywhere in the interface.
 */
function portraitMedallion(name, radius) {
  const position = portraitPosition(name);
  // `scale` is a multiplier and `x`/`y` are percentages into the folio, so the
  // crop is sized from the disc and then slid until that point sits dead
  // centre. Every figure keeps the same face it has in the console and folio.
  const size = radius * 2 * position.scale * 2.4;
  const offsetX = -size * (position.x / 100);
  const offsetY = -size * (position.y / 100);
  return `<image href="${portraitArt(name)}" x="${offsetX.toFixed(1)}" y="${offsetY.toFixed(1)}"
    width="${size.toFixed(1)}" height="${size.toFixed(1)}"
    preserveAspectRatio="xMidYMid slice" clip-path="url(#${portraitClipId(name)})"
    decoding="async"></image>`;
}

/* ------------------------------------------------- the master genealogy */

/*
 * Rows are generations, not kinships. "Children" was the wrong word for row
 * one: a mortal a god carried off marries into her husband's generation
 * without being anyone's daughter here, and captioning her row "children of
 * the founders" says something the poem does not.
 */
const GENERATION_NAMES = [
  "Founders",
  "Generation I",
  "Generation II",
  "Generation III",
  "Generation IV",
  "Generation V",
  "Generation VI"
];

let masterBands = null;
let masterFilter = "";
let rubricTracker = null;
/*
 * Stemma zoom.
 *
 * The chart uses d3-zoom on a transform; the stemma cannot, because its whole
 * design is that chart units are CSS pixels and the plate is drawn at true
 * size inside a scroller. So zoom here scales the rendered width and height
 * instead — the SVG's viewBox does the rest, the scroll container keeps
 * working, and drag-to-pan is unchanged. One factor, persisted like the panes.
 */
let stemmaZoom = 1;

/**
 * Every figure in the poem, ranked once on a single scale so a generation
 * means the same thing everywhere. Figures Ovid gives no line at all are not
 * quietly filed under "founders" — they get their own register, which is the
 * honest place for a personified river or a ship's crew.
 */
function buildMasterBands() {
  const { rank, parents, children } = globalGenerations({ figures: FIGURES, getFigure });
  const attached = [];
  const unattached = [];
  FIGURES.forEach(figure => {
    const hasLine = parents.get(figure.name).size > 0 || children.get(figure.name).size > 0;
    (hasLine ? attached : unattached).push({ figure, generation: rank.get(figure.name) });
  });

  const bands = [];
  const maxRank = Math.max(0, ...attached.map(entry => entry.generation));
  for (let generation = 0; generation <= maxRank; generation += 1) {
    const members = attached
      .filter(entry => entry.generation === generation)
      .sort((a, b) => a.figure.name.localeCompare(b.figure.name));
    if (members.length) {
      bands.push({
        generation,
        title: GENERATION_NAMES[generation] || `Descent ${generation}`,
        note: generation === 0
          ? "Powers and founders the poem gives no parents — every line below begins here."
          : `One generation further from the founders, by descent or by marriage into it. ${members.length} figures.`,
        members
      });
    }
  }
  bands.push({
    generation: null,
    title: "Without recorded descent",
    note: "Named in the poem but given no parentage: collectives, personified forces, single-scene mortals, and objects that act.",
    members: unattached.sort((a, b) => a.figure.name.localeCompare(b.figure.name))
  });
  return bands;
}

function masterMatches(figure, query) {
  if (!query) return true;
  const haystack = [figure.name, figure.greek, figure.roman, figure.house, figure.order, figure.ovid]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderMasterGenealogy() {
  masterBands ||= buildMasterBands();
  const query = masterFilter.trim().toLowerCase();
  let shown = 0;

  const html = masterBands.map(band => {
    const members = band.members.filter(entry => masterMatches(entry.figure, query));
    if (!members.length) return "";
    shown += members.length;
    const marker = band.generation === null ? "—" : String(band.generation);
    return `<section class="master-band">
      <header>
        <span class="master-band-mark" aria-hidden="true">${marker}</span>
        <div>
          <h4>${escapeHTML(band.title)}<i>${members.length}</i></h4>
          <p>${escapeHTML(band.note)}</p>
        </div>
      </header>
      <ul>
        ${members.map(({ figure }) => `
          <li>
            <button type="button" data-master-figure="${escapeAttr(figure.name)}">
              <i class="master-portrait" style="--portrait-x:${portraitPosition(figure.name).x}%;--portrait-y:${portraitPosition(figure.name).y}%;--portrait-scale:${portraitPosition(figure.name).scale}">
                <img src="${portraitArt(figure.name)}" alt="" loading="lazy" decoding="async">
              </i>
              <span class="master-copy">
                <strong>${escapeHTML(figure.name)}</strong>
                <span class="master-order">${escapeHTML(figure.order || figure.kind)}</span>
                <span class="master-registers"><i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}</span>
                ${figure.house ? `<span class="master-house">${escapeHTML(figure.house)}</span>` : ""}
              </span>
            </button>
          </li>`).join("")}
      </ul>
    </section>`;
  }).join("");

  $("#master-bands").innerHTML = html || `<p class="master-empty">No figure matches “${escapeHTML(masterFilter)}”.</p>`;
  $("#master-summary").textContent = query
    ? `${shown} of ${FIGURES.length} figures match. Generations are counted from the poem's founders, on one scale for the whole work.`
    : `All ${FIGURES.length} named figures, ranked by generation on a single scale. Each opens its own record.`;

  $$("[data-master-figure]").forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.masterFigure, { bookId: BOOKS[currentIndex].id, source: button });
  }));
}

/**
 * Drag the plate the way one drags a paper chart across a table. Bound once —
 * the stemma re-renders on every book, house, and scope change, and a listener
 * per render would stack up. Pointer capture keeps the drag alive when the
 * cursor leaves the plate, and a small threshold means a click on a medallion
 * is still a click.
 */
function bindPlateDrag() {
  const scroll = $(".stemma-scroll");
  if (!scroll || scroll.dataset.dragBound) return;
  scroll.dataset.dragBound = "true";
  let origin = null;
  scroll.addEventListener("pointerdown", event => {
    if (event.button !== 0 || event.target.closest("[data-stemma-figure]")) return;
    origin = { x: event.clientX, y: event.clientY, left: scroll.scrollLeft, top: scroll.scrollTop };
    scroll.setPointerCapture(event.pointerId);
  });
  scroll.addEventListener("pointermove", event => {
    if (!origin) return;
    scroll.scrollLeft = origin.left - (event.clientX - origin.x);
    scroll.scrollTop = origin.top - (event.clientY - origin.y);
    if (Math.abs(event.clientX - origin.x) > 3) scroll.classList.add("is-dragging");
  });
  const release = event => {
    origin = null;
    scroll.classList.remove("is-dragging");
    if (event.pointerId !== undefined && scroll.hasPointerCapture?.(event.pointerId)) {
      scroll.releasePointerCapture(event.pointerId);
    }
  };
  scroll.addEventListener("pointerup", release);
  scroll.addEventListener("pointercancel", release);
}

/*
 * Zooming the plate.
 *
 * The stemma's whole design is that chart units are CSS pixels and the plate is
 * drawn at true size inside a scroller, so zoom scales the *rendered* size of
 * the sheet and leaves the viewBox alone. Nothing about the layout changes —
 * which means a zoom does not need a layout. Re-running renderStemma on every
 * wheel tick would recompute generations, re-lay four dozen medallions and
 * rebuild the portrait defs sixty times a second to change two attributes.
 *
 * So this is the whole operation: two attributes and a caption. It is what
 * makes a pinch feel continuous rather than stepped.
 */
const STEMMA_ZOOM_MIN = 0.12;
const STEMMA_ZOOM_MAX = 3;
/** Which sheet is on the plate, so a new one can start at its own beginning. */
let stemmaDrawnKey = "";

function stemmaFitScale() {
  const svg = $("#stemma-svg");
  const scroll = $(".stemma-scroll");
  if (!svg || !scroll) return 1;
  const naturalWidth = Number(svg.dataset.naturalWidth) || 1;
  const naturalHeight = Number(svg.dataset.naturalHeight) || 1;
  // No lower clamp. A floor that stops short of fitting means the button does
  // not do the one thing it is named for — the widest house is four thousand
  // pixels and the plate can be seven hundred.
  return Math.min(1, scroll.clientWidth / naturalWidth, scroll.clientHeight / naturalHeight);
}

function applyStemmaZoom({ syncRange = true } = {}) {
  const svg = $("#stemma-svg");
  if (!svg?.dataset.naturalWidth) return;
  svg.setAttribute("width", round(Number(svg.dataset.naturalWidth) * stemmaZoom));
  svg.setAttribute("height", round(Number(svg.dataset.naturalHeight) * stemmaZoom));
  const percent = Math.round(stemmaZoom * 100);
  $("#stemma-zoom-note").textContent = `${percent}%`;
  const range = $("#stemma-zoom-range");
  if (range) {
    range.setAttribute("aria-valuetext", `${percent} per cent`);
    if (syncRange) range.value = String(percent);
  }
}

function setStemmaZoom(value, { syncRange = true, anchor = null } = {}) {
  const next = clamp(value, STEMMA_ZOOM_MIN, STEMMA_ZOOM_MAX);
  const previous = stemmaZoom;
  if (next === previous) return;
  stemmaZoom = next;
  applyStemmaZoom({ syncRange });

  // Keep whatever the reader was looking at under the same point on the glass.
  // Without this a pinch drifts toward the top-left corner of the sheet, which
  // reads as the chart sliding away from the fingers doing the zooming.
  const scroll = $(".stemma-scroll");
  if (!scroll) return;
  const ratio = next / previous;
  const box = scroll.getBoundingClientRect();
  const x = anchor ? anchor.x - box.left : scroll.clientWidth / 2;
  const y = anchor ? anchor.y - box.top : scroll.clientHeight / 2;
  scroll.scrollLeft = (scroll.scrollLeft + x) * ratio - x;
  scroll.scrollTop = (scroll.scrollTop + y) * ratio - y;
}

/*
 * Pinch, on the trackpad the reader already has.
 *
 * A pinch on a Mac trackpad does not arrive as a gesture — it arrives as a
 * wheel event with ctrlKey set, which is a browser convention rather than a
 * real modifier being held. Honouring it (and calling preventDefault, or the
 * page itself zooms) is the whole of trackpad support. A plain two-finger
 * scroll is left alone: that is panning, and the scroller already does it.
 */
function bindStemmaPinch() {
  const scroll = $(".stemma-scroll");
  if (!scroll || scroll.dataset.pinchBound) return;
  scroll.dataset.pinchBound = "true";
  scroll.addEventListener("wheel", event => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    // Exponential, so a given finger distance changes the view by the same
    // proportion whether the sheet is at 20 per cent or at 200.
    setStemmaZoom(stemmaZoom * Math.exp(-event.deltaY * 0.012), {
      anchor: { x: event.clientX, y: event.clientY }
    });
  }, { passive: false });
}

function renderStemma(book) {
  bindPlateDrag();
  const houses = housesForBook(book.id);
  if (!houses.length) return;
  if (!houses.some(house => house.id === stemmaHouseId)) stemmaHouseId = houses[0].id;

  $("#stemma-book-select").value = String(currentIndex);
  $("#stemma-houses").innerHTML = houses.map(house => `
    <button type="button" data-stemma-house="${house.id}" aria-pressed="${house.id === stemmaHouseId}">
      <strong>${escapeHTML(house.name)}</strong>
      <em>${escapeHTML(house.latin)}</em>
    </button>`).join("");
  $$("[data-stemma-house]").forEach(button => button.addEventListener("click", () => {
    stemmaHouseId = button.dataset.stemmaHouse;
    renderStemma(book);
  }));
  // The scope buttons are markup, not render output: they are only ever
  // *read* here. Binding them would add one more listener on every book,
  // house, and scope change, so a single click would eventually re-render the
  // whole workspace a dozen times. They are bound once, in bindEvents.
  $$("[data-stemma-scope]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.stemmaScope === stemmaScope));
  });

  // The whole-poem view replaces the stage rather than sitting beside it, so
  // the stage goes with the plate. The scope switch is outside both.
  const isPoemScope = stemmaScope === "poem";
  $("#master-genealogy").hidden = !isPoemScope;
  $(".stemma-stage").hidden = isPoemScope;
  $(".stemma-plate").hidden = false;
  if (isPoemScope) {
    renderMasterGenealogy();
    return;
  }

  const house = houses.find(entry => entry.id === stemmaHouseId);
  $("#stemma-house-name").textContent = house.name;
  $("#stemma-house-latin").textContent = house.latin;
  $("#stemma-house-note").textContent = house.note;

  const bookFigures = new Set(figuresForBook(book.id).map(figure => figure.name));
  const graph = stemmaGraphFor(house, book, { scope: stemmaScope });

  if (graph.nodes.size < 2) {
    $("#stemma-nodes").innerHTML = "";
    $("#stemma-edges").innerHTML = "";
    $("#stemma-registers").innerHTML = "";
    $("#stemma-rubric").innerHTML = "";
    $("#stemma-defs").innerHTML = "";
    $("#stemma-empty").hidden = false;
  } else {
    $("#stemma-empty").hidden = true;
    const layout = familyLayout(graph, {
      nodeRadius: STEMMA_NODE_R,
      rowGap: STEMMA_ROW_GAP,
      slotWidth: STEMMA_SLOT
    });
    const nodeR = layout.nodeRadius;

    // The plate is fitted to its own content rather than to a fixed square, so
    // a two-person line is not lost in the middle of an empty page and a
    // forty-person house is not crushed into one. Chart units are CSS pixels:
    // the plate is drawn at its true size and scrolled, because scaling a
    // forty-figure house down to fit is what turned the last chart into dots.
    const { left, right, top, bottom } = layout.bounds;
    const gutter = 146;
    const padX = 34;
    const padY = 18;
    const originX = left - gutter;
    const width = right - originX + padX;
    const height = bottom - top + padY * 2;
    const svg = $("#stemma-svg");
    const plateScroll = $(".stemma-scroll");
    svg.setAttribute("viewBox", `${round(originX)} ${round(top - padY)} ${round(width)} ${round(height)}`);
    svg.setAttribute("width", round(width * stemmaZoom));
    svg.setAttribute("height", round(height * stemmaZoom));
    svg.dataset.naturalWidth = round(width);
    svg.dataset.naturalHeight = round(height);

    /*
     * A new chart starts at its beginning, at a size that suits it.
     *
     * Zoom is the reader's and it persists — but it persists as an answer to a
     * particular sheet. Drawing the Cyprian line at the forty-one per cent that
     * was needed to fit the seventy-nine-figure Olympian house puts six
     * medallions in the corner of an empty plate, and leaves the scroller
     * parked where the old chart's third generation used to be. So when the
     * sheet itself changes: scroll to the top, and drop a zoom-out that the new
     * sheet does not need.
     */
    const key = `${book.id}·${stemmaHouseId}·${stemmaScope}`;
    if (key !== stemmaDrawnKey) {
      stemmaDrawnKey = key;
      const fits = Math.min(1,
        plateScroll.clientWidth / width, plateScroll.clientHeight / height);
      if (stemmaZoom < fits) stemmaZoom = fits;
      plateScroll.scrollTo({ left: 0, top: 0 });
    }
    applyStemmaZoom();

    $("#stemma-defs").innerHTML = portraitDefs(layout.people, nodeR);

    // A generation is a ruled register with its name in the margin, the way a
    // manuscript rubricates a column. This is what makes "one row is one
    // generation" something the reader sees rather than something the caption
    // claims — and it is the whole reason the rings had to go.
    $("#stemma-registers").innerHTML = layout.rows.map(row => `
      <line class="stemma-row-rule" x1="${round(originX + 14)}" y1="${round(row.y)}" x2="${round(right + padX - 10)}" y2="${round(row.y)}"/>`).join("");

    $("#stemma-rubric").innerHTML = layout.rows.map(row => `
      <g class="stemma-row" data-row-y="${round(row.y)}" transform="translate(0 ${round(row.y)})">
        <rect class="stemma-row-plate" x="0" y="-25" width="124" height="50" rx="2"/>
        <text class="stemma-row-mark" x="10" y="-4">${GENERATION_NAMES[row.generation] || `Descent ${row.generation}`}</text>
        <text class="stemma-row-count" x="10" y="15">${row.count} figure${row.count === 1 ? "" : "s"}</text>
      </g>`).join("");

    const generationCounts = layout.people.reduce((totals, person) => {
      totals[person.generation] = (totals[person.generation] || 0) + 1;
      return totals;
    }, {});
    $("#stemma-key").innerHTML = Object.keys(generationCounts)
      .sort((a, b) => a - b)
      .map(generation => `<li><b>${generation}</b><span>${GENERATION_NAMES[generation] || `Descent ${generation}`}</span><i>${generationCounts[generation]}</i></li>`)
      .join("");

    // Two marks, two meanings: a rule between two portraits is a marriage, a
    // bracket dropping to a bar is the issue of one.
    $("#stemma-edges").innerHTML = [
      layout.marriages
        .map(edge => `<path class="stemma-union${edge.adjacent ? "" : " is-distant"}" d="${marriagePath(edge, nodeR)}" data-line-a="${escapeAttr(edge.from.name)}" data-line-b="${escapeAttr(edge.to.name)}"/>`)
        .join(""),
      layout.brackets
        .map(bracket => `<path class="stemma-descent${bracket.skips ? " is-skipping" : ""}" d="${bracketPath(bracket, nodeR)}" data-line-parents="${escapeAttr(bracket.parents.map(parent => parent.name).join("|"))}"/>`)
        .join(""),
      layout.brackets
        .filter(bracket => !bracket.direct)
        .map(bracket => `<circle class="stemma-junction" cx="${round(bracket.junctionX)}" cy="${round(bracket.junctionY)}" r="4.5"/>`)
        .join("")
    ].join("");

    $("#stemma-nodes").innerHTML = layout.people.map(person => {
      const inBook = bookFigures.has(person.name);
      const figure = person.figure;
      const label = chartLabel(figure.name);
      const classes = ["stemma-node", inBook ? "is-in-book" : "", person.partner ? "is-partnered" : ""].filter(Boolean).join(" ");
      // The name sits under the portrait. A partner's name is nudged away from
      // the marriage rule so a couple reads as two people rather than one
      // hyphenated blur, and so neither label sits on the bracket between them.
      const anchor = person.side === 0 ? "middle" : person.side > 0 ? "start" : "end";
      const labelX = person.side * (nodeR * 0.62);
      return `<g class="${classes}" transform="translate(${round(person.x)} ${round(person.y)})"
          tabindex="0" role="button" data-stemma-figure="${escapeAttr(figure.name)}"
          aria-label="${escapeAttr(figure.name)}, generation ${person.generation}${inBook ? ", named in this book" : ""}">
        <title>${escapeHTML(figure.name)} · ${escapeHTML(figure.order || figure.kind)}</title>
        <circle class="stemma-node-plate" r="${round(nodeR + 5)}"/>
        ${portraitMedallion(figure.name, nodeR)}
        <circle class="stemma-node-rim" r="${nodeR}"/>
        ${inBook ? `<circle class="stemma-node-mark" r="${round(nodeR + 8)}"/>` : ""}
        <text class="stemma-node-label" x="${round(labelX)}" y="${round(nodeR + 26)}" text-anchor="${anchor}">${escapeHTML(label)}</text>
      </g>`;
    }).join("");

    $("#stemma-generations").textContent = `${layout.generationCount} generation${layout.generationCount === 1 ? "" : "s"} · ${layout.people.length} figures shown`;

    // A whole house is a wall chart. Rather than shrink it to nothing, open it
    // on its founders and let the reader pull the rest across.
    const scroll = $(".stemma-scroll");
    const founder = layout.people.find(person => person.generation === 0) || layout.people[0];

    // The generation rubric rides the left edge of whatever is on screen. A
    // caption anchored to the chart's own left margin scrolls away on a house
    // four thousand pixels wide, and the reader loses which row they are in.
    const marks = $$("#stemma-rubric .stemma-row");
    const trackRubric = () => {
      const x = round(originX + scroll.scrollLeft + 26);
      marks.forEach(mark => mark.setAttribute("transform", `translate(${x} ${mark.dataset.rowY})`));
    };
    // One listener, replaced each render: the plate is redrawn on every book,
    // house, and scope change, and stacking these would leave every previous
    // render's dead nodes being written to on scroll.
    if (rubricTracker) scroll.removeEventListener("scroll", rubricTracker);
    rubricTracker = trackRubric;
    scroll.addEventListener("scroll", trackRubric, { passive: true });

    requestAnimationFrame(() => {
      scroll.scrollLeft = Math.max(0, founder.x - originX - scroll.clientWidth / 2);
      scroll.classList.toggle("is-scrollable", scroll.scrollWidth > scroll.clientWidth + 2);
      scroll.classList.toggle("is-tall", scroll.scrollHeight > scroll.clientHeight + 2);
      trackRubric();
    });

    // Lighting one line and dimming the rest is what makes a crowded house
    // legible: the reader gets an answer to "where does this one come from"
    // without tracing rules by eye.
    const plate = $("#stemma-svg");
    const lightLine = name => {
      const line = lineageOf(graph, name);
      plate.classList.add("is-tracing");
      $$("[data-stemma-figure]").forEach(node => {
        node.classList.toggle("is-on-line", line.has(node.dataset.stemmaFigure));
      });
      $$("#stemma-edges [data-line-parents]").forEach(path => {
        path.classList.toggle("is-on-line", path.dataset.lineParents.split("|").some(parent => line.has(parent)));
      });
      $$("#stemma-edges [data-line-a]").forEach(path => {
        path.classList.toggle("is-on-line", line.has(path.dataset.lineA) || line.has(path.dataset.lineB));
      });
    };
    const clearLine = () => {
      plate.classList.remove("is-tracing");
      $$("#stemma-nodes .is-on-line, #stemma-edges .is-on-line")
        .forEach(node => node.classList.remove("is-on-line"));
    };

    $$("[data-stemma-figure]").forEach(node => {
      const activate = () => openFigureSheet(node.dataset.stemmaFigure, { bookId: book.id, source: node });
      node.addEventListener("click", activate);
      node.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
      });
      node.addEventListener("pointerenter", () => lightLine(node.dataset.stemmaFigure));
      node.addEventListener("focus", () => lightLine(node.dataset.stemmaFigure));
      node.addEventListener("pointerleave", clearLine);
      node.addEventListener("blur", clearLine);
    });
  }

  const members = figuresForBook(book.id);
  $("#stemma-count").textContent = `· ${members.length}`;
  $("#stemma-list").innerHTML = members.map(figure => {
    const act = resolveFigureAct(figure, { episodeTitle: null, bookId: book.id });
    const scene = act.scope === "episode" ? `<i class="stemma-list-scene">${escapeHTML(act.episode)}</i>` : "";
    return `<li>
      <button type="button" data-stemma-figure-list="${escapeAttr(figure.name)}">
        <span class="stemma-list-name">
          <strong>${escapeHTML(figure.name)}</strong>
          <em>${escapeHTML(figure.order || figure.kind)}</em>
        </span>
        <span class="stemma-list-registers">
          <i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}
        </span>
        ${scene}
        <span class="stemma-list-act">${escapeHTML(act.text || figure.who)}</span>
      </button>
    </li>`;
  }).join("");
  $$("[data-stemma-figure-list]").forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.stemmaFigureList, { bookId: book.id, source: button });
  }));
}

function renderFocusFolio() {
  if (!currentFocus) return;
  const folio = $("#focus-folio");
  const book = BOOKS[currentIndex];
  const plate = PLATES[currentIndex];
  const { kind, index } = currentFocus;
  const isEpisode = kind === "episode";
  const item = isEpisode ? book.episodes[index] : book.themes[index];

  $("#focus-folio-kind").textContent = `${isEpisode ? "Episode" : "Theme"} ${isEpisode ? ROMAN[index] || index + 1 : String(index + 1).padStart(2, "0")}`;
  $("#focus-folio-book").textContent = `Book ${ROMAN[currentIndex]} · ${book.title}`;
  $("#focus-folio-image").src = plate.src;
  $("#focus-folio-image").alt = plate.alt;
  $("#focus-folio-caption").textContent = plate.caption;
  $("#focus-folio-index").textContent = isEpisode
    ? `Narrative sequence ${index + 1} of ${book.episodes.length}`
    : `Reading lens ${index + 1} of ${book.themes.length}`;
  $("#focus-folio-title").textContent = item[0];

  const relationLabels = $$(".focus-folio-relations > div > span");
  if (isEpisode) {
    const episode = item;
    const study = getEpisodeStudy(episode[0]);
    const cast = castForEpisode(book, episode);
    const themes = themesForEpisode(book, episode);
    const terms = termsForEpisode(book, episode);
    const tie = tieForEpisode(book, episode);
    const questions = episodeQuestions(episode, themes);
    const continuity = episodeContinuity(book, index);
    $("#focus-folio-locus").textContent = study.locus;
    $("#focus-folio-summary").textContent = episode[1];
    $("#focus-folio-change").textContent = episode[2];
    $("#focus-folio-note").textContent = episode[3];
    // The plain register goes first. It is the one that answers "what
    // happened", and it is the one the interpretive reading kept leaving out.
    const beats = episodeBeats(episode[0]);
    $("#focus-folio-beats-block").hidden = !beats;
    if (beats) {
      $("#focus-folio-beats").innerHTML = beats
        .map(beat => `<li>${emphasised(beat)}</li>`)
        .join("");
    }
    const reading = episodeReading(episode[0]);
    const readingBlock = $("#focus-folio-reading-block");
    readingBlock.hidden = !reading;
    if (reading) {
      $("#focus-folio-reading").textContent = reading.reading;
      $("#focus-folio-turn").textContent = reading.turn;
      $("#focus-folio-after").textContent = reading.after;
    }
    renderPlaceLinks($("#focus-folio-where"), $("#focus-folio-where-block"), placesForEpisode(episode[0]));
    const commentary = episodeCommentary(episode[0]);
    $("#focus-folio-commentary").hidden = !commentary;
    if (commentary) {
      $("#focus-folio-sources").innerHTML = emphasised(commentary.sources);
      $("#focus-folio-craft").innerHTML = emphasised(commentary.craft);
      $("#focus-folio-afterlife").innerHTML = emphasised(commentary.afterlife);
    }
    relationLabels[0].textContent = `Episode cast · ${cast.length}`;
    relationLabels[1].textContent = "Related lenses";
    $("#focus-folio-cast").innerHTML = cast.map(person => {
      const position = portraitPosition(person[0]);
      const figure = getFigure(person[0]);
      const act = figureAct(person[0], episode[0], book.id);
      const registers = figure
        ? `<span class="focus-cast-registers"><i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}</span>`
        : "";
      const doing = act ? `<span class="focus-cast-act">${escapeHTML(act.text)}</span>` : "";
      return `<li><button type="button" data-focus-cast="${escapeAttr(person[0])}">
        <i class="focus-cast-portrait" style="--portrait-x:${position.x}%;--portrait-y:${position.y}%;--portrait-scale:${position.scale}">
          <img src="${portraitArt(person[0])}" alt="" loading="lazy" decoding="async">
        </i>
        <span class="focus-cast-copy">
          <strong>${escapeHTML(person[0])}</strong>
          <span class="focus-cast-order">${escapeHTML(figure?.order || person[1])}</span>
          ${registers}
          ${doing}
        </span>
      </button></li>`;
    }).join("");
    $("#focus-folio-themes").innerHTML = themes.map(({ theme, index: themeIndex }) => `<li><button type="button" data-focus-theme="${themeIndex}">${theme[0]}</button></li>`).join("");
    $("#focus-folio-motifs").innerHTML = study.motifs.map(motif => `<span>${motif}</span>`).join("");
    $("#focus-folio-terms").innerHTML = terms.map(term => `<button type="button" data-focus-lexicon="${term[0]}" title="${term[2]}">${term[0]}</button>`).join("");
    $("#focus-folio-tie-title").textContent = tie[0];
    $("#focus-folio-tie").textContent = tie[1];
    $("#focus-folio-questions").innerHTML = questions.map(question => `<li>${question}</li>`).join("");
    $("#focus-folio-continuity").innerHTML = [
      continuity.previous
        ? `<button type="button" data-focus-episode="${continuity.previous.index}"><span>Before</span><strong>${continuity.previous.title}</strong><small>${continuity.previous.change}</small></button>`
        : `<span class="continuity-boundary">The book opens here.</span>`,
      continuity.next
        ? `<button type="button" data-focus-episode="${continuity.next.index}"><span>After</span><strong>${continuity.next.title}</strong><small>${continuity.next.change}</small></button>`
        : `<span class="continuity-boundary">The book closes here.</span>`
    ].join("");
  } else {
    const theme = item;
    const episodes = episodesForTheme(book, theme);
    $("#focus-folio-reading-block").hidden = true;
    $("#focus-folio-beats-block").hidden = true;
    $("#focus-folio-where-block").hidden = true;
    $("#focus-folio-locus").textContent = `Across Book ${ROMAN[currentIndex]}`;
    $("#focus-folio-summary").textContent = theme[1];
    $("#focus-folio-change").textContent = `Theme → ${episodes.map(({ episode }) => episode[0]).slice(0, 3).join(" · ")}`;
    $("#focus-folio-note").textContent = `This lens connects ${episodes.length} high-signal sequences in Book ${ROMAN[currentIndex]} and remains searchable across the whole poem.`;
    relationLabels[0].textContent = "Episode pathways";
    relationLabels[1].textContent = "Terminology & echoes";
    $("#focus-folio-cast").innerHTML = episodes.map(({ episode, index: episodeIndex }) => `<li><button type="button" data-focus-episode="${episodeIndex}"><strong>${episode[0]}</strong><span>${episode[2]}</span></button></li>`).join("");
    $("#focus-folio-themes").innerHTML = [
      ...book.terms.slice(0, 3).map(term => `<li><button type="button" data-focus-lexicon="${term[0]}">${term[0]}</button></li>`),
      ...book.ties.slice(0, 2).map(tie => `<li><button type="button" data-focus-tie="${tie[0]}">${tie[0]}</button></li>`)
    ].join("");
    $("#focus-folio-motifs").innerHTML = episodes.slice(0, 4).map(({ episode }) => `<span>${episode[0]}</span>`).join("");
    $("#focus-folio-terms").innerHTML = book.terms.map(term => `<button type="button" data-focus-lexicon="${term[0]}">${term[0]}</button>`).join("");
    $("#focus-folio-tie-title").textContent = book.ties[0][0];
    $("#focus-folio-tie").textContent = book.ties[0][1];
    $("#focus-folio-questions").innerHTML = [
      `<li>Where does “${theme[0]}” alter how agency or responsibility appears in this book?</li>`,
      `<li>Which repeated image carries the theme most forcefully across otherwise separate stories?</li>`
    ].join("");
    $("#focus-folio-continuity").innerHTML = episodes.slice(0, 2).map(({ episode, index: episodeIndex }, pathIndex) =>
      `<button type="button" data-focus-episode="${episodeIndex}"><span>Path ${pathIndex + 1}</span><strong>${episode[0]}</strong><small>${episode[2]}</small></button>`
    ).join("");
  }

  $$("[data-focus-cast]", folio).forEach(button => button.addEventListener("click", () => openFigureSheet(button.dataset.focusCast, {
    episodeTitle: isEpisode ? item[0] : null,
    bookId: book.id,
    source: button
  })));
  $$("[data-focus-theme]", folio).forEach(button => button.addEventListener("click", () => openFocusFolio("theme", Number(button.dataset.focusTheme), button)));
  $$("[data-focus-episode]", folio).forEach(button => button.addEventListener("click", () => openFocusFolio("episode", Number(button.dataset.focusEpisode), button)));
  $$("[data-focus-lexicon]", folio).forEach(button => button.addEventListener("click", () => {
    $("#lexicon-filter").value = button.dataset.focusLexicon;
    lexiconCategory = "All";
    renderLexicon();
    closeFocusFolio({ restoreFocus: false });
    openWorkspace("lexicon");
  }));
  $$("[data-focus-tie]", folio).forEach(button => button.addEventListener("click", () => openSearch(button.dataset.focusTie)));
}

function openFocusFolio(kind, index, source = null) {
  if (!["episode", "theme"].includes(kind)) return;
  const book = BOOKS[currentIndex];
  const collection = kind === "episode" ? book.episodes : book.themes;
  currentFocus = { kind, index: wrap(index, collection.length) };
  const ringTarget = $(`[data-ring-kind="${kind}"][data-ring-index="${currentFocus.index}"]`);
  focusReturnTarget = source && !source.closest("[inert]") ? source : ringTarget;
  $$(".episode-segment, .motif-segment").forEach(segment => segment.classList.remove("is-selected"));
  $(`[data-ring-kind="${kind}"][data-ring-index="${currentFocus.index}"]`)?.classList.add("is-selected");
  renderFocusFolio();
  const folio = $("#focus-folio");
  folio.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-focus-open");
  $("#reading-console").inert = true;
  if (reducedMotion.matches) {
    gsap.set(folio, { autoAlpha: 1, xPercent: 0, clipPath: "inset(0 0 0 0)" });
  } else {
    gsap.fromTo(
      folio,
      { autoAlpha: 0, xPercent: 18, clipPath: "inset(0 0 0 18%)" },
      { autoAlpha: 1, xPercent: 0, clipPath: "inset(0 0 0 0)", duration: .72, ease: "expo.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-folio-body > *, .focus-folio-relations > div", folio),
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: .56, stagger: .055, delay: .12, ease: "power3.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-folio-aureole i", folio),
      { opacity: 0, rotate: -28, scale: .78, transformOrigin: "50% 50%" },
      { opacity: .8, rotate: 0, scale: 1, duration: 1.15, stagger: .08, ease: "expo.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-cast-portrait", folio),
      { opacity: 0, scale: .72, rotate: -12 },
      { opacity: 1, scale: 1, rotate: 0, duration: .62, stagger: .035, delay: .28, ease: "back.out(1.7)", overwrite: true }
    );
  }
  requestAnimationFrame(() => $(".focus-folio-close", folio).focus());
}

function closeFocusFolio({ restoreFocus = true } = {}) {
  const folio = $("#focus-folio");
  if (folio.getAttribute("aria-hidden") === "true") return;
  const finish = () => {
    const ringFallback = currentFocus
      ? $(`[data-ring-kind="${currentFocus.kind}"][data-ring-index="${currentFocus.index}"]`)
      : null;
    const returnTarget = focusReturnTarget?.isConnected ? focusReturnTarget : ringFallback;
    folio.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-focus-open");
    $("#reading-console").inert = false;
    $$(".episode-segment, .motif-segment").forEach(segment => segment.classList.remove("is-selected"));
    currentFocus = null;
    if (restoreFocus && returnTarget?.isConnected) returnTarget.focus();
  };
  if (reducedMotion.matches) {
    gsap.set(folio, { autoAlpha: 0 });
    finish();
  } else {
    gsap.to(folio, { autoAlpha: 0, xPercent: 12, duration: .34, ease: "power2.in", overwrite: true, onComplete: finish });
  }
}

function openWorkspace(name, { updateHistory = true, focus = true, animate = true } = {}) {
  const target = $(`.workspace-layer[data-workspace="${name}"]`);
  if (!target) return;
  // The dossier is a top-level overlay, so it would otherwise stay open over
  // a workspace the reader has just navigated away from.
  if (name !== currentWorkspace) closeFigureSheet({ restoreFocus: false });
  const previous = $(`.workspace-layer.is-active`);
  if (previous === target && currentWorkspace === name && document.body.dataset.workspace === name) {
    closeFocusFolio({ restoreFocus: false });
    return;
  }

  closeFocusFolio({ restoreFocus: false });
  // The chart measures its own plate to place a zoom, so it cannot be built
  // until its section is actually on screen and has a width.
  if (name === "chart") requestAnimationFrame(setUpChart);
  currentWorkspace = name;
  document.body.dataset.workspace = name;
  $$(".workspace-layer").forEach(layer => {
    const active = layer === target;
    layer.classList.toggle("is-active", active);
    layer.setAttribute("aria-hidden", String(!active));
    layer.inert = !active;
  });
  $$("[data-workspace-link]").forEach(link => {
    if (link.closest(".brand") || link.matches(".brand")) return;
    if (link.dataset.workspaceLink === name) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (updateHistory && location.hash !== `#${name}`) history.pushState({ workspace: name }, "", `#${name}`);

  if (previous && previous !== target) gsap.set(previous, { autoAlpha: 0 });
  if (!animate || reducedMotion.matches) {
    gsap.set(target, { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0 0)" });
  } else {
    gsap.fromTo(
      target,
      { autoAlpha: 0, scale: .982, clipPath: "inset(0 0 7% 0)" },
      { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0 0)", duration: .7, ease: "expo.out", overwrite: true }
    );
  }
  if (focus) {
    const focusTarget = $(".workspace-return", target) || $("h1, h2", target);
    requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
  }
}

function renderRail() {
  $("#book-rail").innerHTML = BOOKS.map((book, index) => `
    <button class="rail-book ${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" type="button" data-book-index="${index}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span class="roman">${ROMAN[index]}</span>
      <span class="rail-title">${book.title}</span>
      <span class="rail-date">≈ ${book.date}</span>
    </button>`).join("");
  $$(".rail-book").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.bookIndex), { scrollAtlas: false })));
}

function renderEraBands() {
  $("#era-bands").innerHTML = ERAS.map(era => `
    <article class="era-band" style="--era-color:${era.color}">
      <span>${era.books.length === 1 ? "Book" : "Books"} ${era.books.length > 1 ? `${ROMAN[era.books[0] - 1]}–${ROMAN[era.books.at(-1) - 1]}` : ROMAN[era.books[0] - 1]}</span>
      <h3>${era.name}</h3>
      <p><strong>${era.range}</strong><br>${era.note}</p>
    </article>`).join("");
}

function renderSelects() {
  const options = BOOKS.map((book, index) => `<option value="${index}">Book ${ROMAN[index]} — ${book.title}</option>`).join("");
  $("#atlas-book-select").innerHTML = options;
  $("#stemma-book-select").innerHTML = options;
  $("#note-book").innerHTML = options;
}

function renderConsole(book) {
  const era = eraFor(book.id);
  const plate = PLATES[currentIndex];
  $("#console-era").textContent = era.name;
  $("#console-progress-label").textContent = `Book ${book.id} of 15`;
  $("#console-date").textContent = `≈ ${book.date}`;
  $("#console-book").textContent = `Book ${ROMAN[book.id - 1]}`;
  $("#console-title").textContent = book.title;
  $("#console-lens").textContent = book.lens;
  $("#console-summary").textContent = book.summary;

  const reading = bookReading(book.id);
  if (reading) {
    $("#console-argument").textContent = reading.argument;
    $("#console-structure").textContent = reading.structure;
    $("#console-movements").innerHTML = reading.movements.map(movement => `<li>${escapeHTML(movement)}</li>`).join("");
    $("#console-change-argument").textContent = reading.argumentOfChange;
    $("#console-hands-on").textContent = reading.handsOn;
    const catasterism = catasterismFor(book.id);
    const commentary = bookCommentary(book.id);
    $(".console-commentary").hidden = !commentary;
    if (commentary) {
      $("#console-voices").innerHTML = emphasised(commentary.voices);
      $("#console-against").innerHTML = emphasised(commentary.against);
      $("#console-crux").innerHTML = emphasised(commentary.crux);
      $("#console-afterlife").innerHTML = emphasised(commentary.afterlife);
    }
    $("#console-extent").textContent = catasterism
      ? `${reading.extent} · outer ring: ${catasterism.latin}, ${catasterism.english.toLowerCase()}`
      : reading.extent;
  }

  $("#console-transformation").textContent = book.episodes[0][2];
  $("#console-transformation-note").textContent = book.episodes[0][3];
  $("#console-cast").innerHTML = book.cast.slice(0, 6).map(person => {
    const position = portraitPosition(person[0]);
    const figure = getFigure(person[0]);
    return `<li><button type="button" data-console-cast="${escapeAttr(person[0])}">
      <i style="--portrait-x:${position.x}%;--portrait-y:${position.y}%;--portrait-scale:${position.scale}">
        <img src="${portraitArt(person[0])}" alt="" loading="lazy" decoding="async">
      </i>
      <span>${escapeHTML(person[0])}<small>${escapeHTML(figure?.order || person[1])}</small></span>
    </button></li>`;
  }).join("");
  $("#console-themes").innerHTML = book.themes.map((theme, index) => `<button type="button" data-console-theme="${index}">${theme[0]}</button>`).join("");
  $("#console-plate-image").src = plate.src;
  $("#console-plate-image").alt = plate.alt;
  $("#console-plate-caption").textContent = plate.caption;
  $("#console-plate-number").textContent = ROMAN[currentIndex];
  $("#console-plate-source").href = plate.source;
  const markButton = $("[data-mark-read]");
  const isRead = readBooks.has(book.id);
  markButton.setAttribute("aria-pressed", String(isRead));
  markButton.setAttribute("aria-label", isRead ? `Remove Book ${ROMAN[currentIndex]} from read books` : `Mark Book ${ROMAN[currentIndex]} as read`);
  $("span", markButton).textContent = isRead ? "Read — undo" : "Mark as read";
  $$("[data-console-cast]").forEach(button => button.addEventListener("click", () => openFigureSheet(button.dataset.consoleCast, { bookId: book.id, source: button })));
  $$("[data-console-theme]").forEach(button => button.addEventListener("click", () => openFocusFolio("theme", Number(button.dataset.consoleTheme), button)));
}

function renderAtlas(book) {
  const era = eraFor(book.id);
  $("#atlas-book-select").value = String(currentIndex);
  $("#atlas-number").textContent = ROMAN[currentIndex];
  $("#atlas-era").textContent = era.name;
  $("#atlas-title-label").textContent = book.title;
  $("#atlas-date").textContent = `≈ ${book.date}`;
  $("#atlas-setting").textContent = book.setting;
  $("#atlas-count").textContent = `${book.episodes.length} major sequences`;

  $("#panel-episodes").innerHTML = `<div class="episode-list">${book.episodes.map((episode, episodeIndex) => {
    const study = getEpisodeStudy(episode[0]);
    const cast = castForEpisode(book, episode);
    return `<article class="episode-row">
      <header>
        <span>Sequence ${String(episodeIndex + 1).padStart(2, "0")}</span>
        <h4>${episode[0]}</h4>
        <small>${study.locus}</small>
      </header>
      <p>${episode[1]}</p>
      <div class="episode-change"><span>${episode[2]}</span><small>${episode[3]}</small></div>
      <div class="episode-row-cast" aria-label="${cast.length} figures in this episode">
        ${cast.slice(0, 5).map(person => {
          const position = portraitPosition(person[0]);
          return `<i title="${person[0]}" style="--portrait-x:${position.x}%;--portrait-y:${position.y}%;--portrait-scale:${position.scale}">
            <img src="${portraitArt(person[0])}" alt="" loading="lazy" decoding="async">
          </i>`;
        }).join("")}
        <span>${cast.length} figures</span>
      </div>
      <div class="episode-row-motifs">${study.motifs.map(motif => `<span>${motif}</span>`).join("")}</div>
      <button type="button" data-open-episode="${episodeIndex}">Open episode dossier <span aria-hidden="true">↗</span></button>
    </article>`;
  }).join("")}</div>`;

  $("#panel-cast").innerHTML = `<div class="cast-grid">${book.cast.map(person => `
    <article class="cast-entry">
      <header><div><span>${person[1]}</span><h4>${person[0]}</h4></div><button type="button" data-search-term="${person[0]}">Trace</button></header>
      <p>${person[2]}</p>
    </article>`).join("")}</div>`;

  $("#panel-themes").innerHTML = `
    <div class="theme-grid">${book.themes.map(theme => `
      <article class="theme-entry"><span>Reading lens</span><h4>${theme[0]}</h4><p>${theme[1]}</p></article>`).join("")}
      ${book.terms.map(term => `<article class="theme-entry"><span>${term[1]}</span><h4>${term[0]}</h4><p>${term[2]}</p></article>`).join("")}
    </div>`;

  $("#panel-ties").innerHTML = `<div class="ties-list">${book.ties.map(tie => `
    <article class="tie-entry"><h4>${tie[0]}</h4><p>${tie[1]}</p></article>`).join("")}</div>`;

  $$("[data-search-term]", $("#panel-cast")).forEach(button => button.addEventListener("click", () => openSearch(button.dataset.searchTerm)));
  $$("[data-open-episode]", $("#panel-episodes")).forEach(button => button.addEventListener("click", () => {
    closeFocusFolio({ restoreFocus: false });
    openWorkspace("instrument");
    openFocusFolio("episode", Number(button.dataset.openEpisode), button);
  }));
}

function entityFamily(role) {
  const value = role.toLowerCase();
  if (/(god|goddess|deity|divin|olympian|nymph|titan|muse)/.test(value)) return "Divine";
  if (/(creature|monster|centaur|dragon|gorgon|giant|beast)/.test(value)) return "Creature";
  return "Mortal";
}

function canonicalEntityName(name) {
  return name.split("/")[0].replace(/\([^)]*\)/g, "").trim();
}

function buildConcordance() {
  const entities = new Map();
  BOOKS.forEach((book, bookIndex) => book.cast.forEach(person => {
    const name = canonicalEntityName(person[0]);
    const key = name.toLowerCase();
    const appearance = { bookIndex, role: person[1], description: person[2] };
    if (!entities.has(key)) {
      entities.set(key, {
        name,
        aliases: new Set([person[0]]),
        family: entityFamily(person[1]),
        appearances: [appearance]
      });
    } else {
      const entity = entities.get(key);
      entity.aliases.add(person[0]);
      entity.appearances.push(appearance);
    }
  }));
  return [...entities.values()]
    .map(entity => ({ ...entity, aliases: [...entity.aliases] }))
    .sort((a, b) => b.appearances.length - a.appearances.length || a.name.localeCompare(b.name));
}

const CONCORDANCE = buildConcordance();

function renderScholarBookList() {
  $("#scholar-book-list").innerHTML = BOOKS.map((book, index) => {
    const era = eraFor(book.id);
    return `<button type="button" class="${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" data-scholar-book="${index}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span>${ROMAN[index]}</span>
      <strong>${book.title}</strong>
      <small>${era.name}</small>
      <i aria-hidden="true">${readBooks.has(book.id) ? "◆" : "◇"}</i>
    </button>`;
  }).join("");
  $$("[data-scholar-book]").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.scholarBook))));
}

function renderConcordance() {
  const categories = ["All", "Divine", "Mortal", "Creature"];
  $("#concordance-filters").innerHTML = categories.map(category => `
    <button type="button" class="${category === concordanceCategory ? "is-active" : ""}" data-concordance-category="${category}">
      ${category}<span>${category === "All" ? CONCORDANCE.length : CONCORDANCE.filter(entity => entity.family === category).length}</span>
    </button>`).join("");

  const query = $("#concordance-search").value.trim().toLowerCase();
  const results = CONCORDANCE.filter(entity =>
    (concordanceCategory === "All" || entity.family === concordanceCategory) &&
    (!query || `${entity.name} ${entity.aliases.join(" ")} ${entity.appearances.map(item => `${item.role} ${item.description}`).join(" ")}`.toLowerCase().includes(query))
  ).slice(0, 32);

  $("#concordance-results").innerHTML = results.length ? results.map(entity => {
    const first = entity.appearances[0];
    const books = [...new Set(entity.appearances.map(item => item.bookIndex))];
    return `<article class="concordance-entry">
      <header><span class="entity-sigil" aria-hidden="true">${entity.name.slice(0, 1)}</span><div><h4>${entity.name}</h4><p>${first.role} · ${entity.family}</p></div><strong>${books.length}</strong></header>
      <p>${first.description}</p>
      <div>${books.map(bookIndex => `<button type="button" data-concordance-book="${bookIndex}" aria-label="Open ${entity.name} in Book ${ROMAN[bookIndex]}">${ROMAN[bookIndex]}</button>`).join("")}</div>
    </article>`;
  }).join("") : `<p class="concordance-empty">No figure matches this trail. Try a name, role, or description.</p>`;

  $$("[data-concordance-category]").forEach(button => button.addEventListener("click", () => {
    concordanceCategory = button.dataset.concordanceCategory;
    renderConcordance();
  }));
  $$("[data-concordance-book]").forEach(button => button.addEventListener("click", () => {
    selectBook(Number(button.dataset.concordanceBook));
    switchTab("cast");
    $("#atlas").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }));
}

function currentBookGraph(book) {
  const plate = PLATES[currentIndex];
  const nodes = [{
    id: `book-${book.id}`,
    label: `BOOK ${ROMAN[currentIndex]}`,
    subtitle: book.title,
    description: book.summary,
    type: "book",
    radius: 68,
    bookIndex: currentIndex,
    art: plate.src,
    x: 460,
    y: 300
  }];
  const links = [];

  book.episodes.forEach((episode, index) => {
    const angle = index / book.episodes.length * Math.PI * 2 - Math.PI / 2;
    const id = `episode-${index}`;
    nodes.push({
      id,
      label: episode[0],
      subtitle: episode[2],
      description: episode[1],
      type: "episode",
      radius: 36,
      bookIndex: currentIndex,
      episodeIndex: index,
      art: plate.src,
      x: 460 + Math.cos(angle) * 185,
      y: 300 + Math.sin(angle) * 175
    });
    links.push({ source: `book-${book.id}`, target: id, type: "sequence" });
  });

  const figureIndex = new Map();
  book.episodes.forEach((episode, episodeIndex) => {
    castForEpisode(book, episode).forEach(person => {
      const key = canonicalEntityName(person[0]).toLowerCase();
      if (!figureIndex.has(key)) figureIndex.set(key, { person, episodes: new Set() });
      figureIndex.get(key).episodes.add(episodeIndex);
    });
  });
  book.cast.forEach(person => {
    const key = canonicalEntityName(person[0]).toLowerCase();
    if (!figureIndex.has(key)) figureIndex.set(key, { person, episodes: new Set() });
  });

  [...figureIndex.values()].forEach(({ person, episodes }, index, figures) => {
    const angle = index / figures.length * Math.PI * 2 - Math.PI / 2 + .17;
    const id = `person-${index}`;
    nodes.push({
      id,
      label: person[0],
      subtitle: person[1],
      description: person[2],
      type: entityFamily(person[1]).toLowerCase(),
      radius: 27,
      bookIndex: currentIndex,
      art: portraitArt(person[0]),
      x: 460 + Math.cos(angle) * 330,
      y: 300 + Math.sin(angle) * 260
    });
    if (episodes.size) {
      [...episodes].forEach(episodeIndex => links.push({ source: id, target: `episode-${episodeIndex}`, type: "appears" }));
    } else {
      links.push({ source: id, target: `book-${book.id}`, type: "belongs" });
    }
  });

  book.themes.forEach((theme, index) => {
    const angle = index / book.themes.length * Math.PI * 2 + Math.PI / 4;
    const id = `theme-${index}`;
    nodes.push({
      id,
      label: theme[0],
      subtitle: "Reading lens",
      description: theme[1],
      type: "theme",
      radius: 30,
      bookIndex: currentIndex,
      x: 460 + Math.cos(angle) * 110,
      y: 300 + Math.sin(angle) * 110
    });
    links.push({ source: `book-${book.id}`, target: id, type: "motif" });
  });
  return { nodes, links };
}

function poemGraph() {
  const nodes = [];
  const links = [];
  BOOKS.forEach((book, index) => {
    const column = index % 5;
    const row = Math.floor(index / 5);
    nodes.push({
      id: `book-${book.id}`,
      label: ROMAN[index],
      subtitle: book.title,
      description: book.summary,
      type: "book",
      radius: 34,
      bookIndex: index,
      art: PLATES[index].src,
      x: 150 + column * 155,
      y: 130 + row * 165
    });
    if (index > 0) links.push({ source: `book-${book.id - 1}`, target: `book-${book.id}`, type: "sequence" });
  });

  CONCORDANCE.filter(entity => new Set(entity.appearances.map(item => item.bookIndex)).size > 1).slice(0, 18).forEach((entity, index) => {
    const id = `echo-${index}`;
    const angle = index / 18 * Math.PI * 2;
    nodes.push({
      id,
      label: entity.name,
      subtitle: `${entity.family} · ${new Set(entity.appearances.map(item => item.bookIndex)).size} books`,
      description: entity.appearances[0].description,
      type: entity.family.toLowerCase(),
      radius: 27,
      art: portraitArt(entity.name),
      bookIndex: entity.appearances[0].bookIndex,
      x: 460 + Math.cos(angle) * 360,
      y: 300 + Math.sin(angle) * 255
    });
    [...new Set(entity.appearances.map(item => item.bookIndex))].forEach(bookIndex => {
      links.push({ source: id, target: `book-${bookIndex + 1}`, type: "appears" });
    });
  });
  return { nodes, links };
}

function networkLabelLines(label) {
  if (label.length <= 13) return [label];
  const words = label.split(" ");
  if (words.length === 1) return [`${label.slice(0, 12)}…`];
  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

function renderNetwork() {
  if (networkSimulation) networkSimulation.stop();
  const scope = $("#network-scope").value;
  const graph = scope === "poem" ? poemGraph() : currentBookGraph(BOOKS[currentIndex]);
  const svg = d3Select("#transformation-network");
  svg.selectAll("*").remove();
  networkSvg = svg;

  const defs = svg.append("defs");
  graph.nodes.filter(item => item.art).forEach(item => {
    defs.append("clipPath")
      .attr("id", `node-clip-${stableHash(`${scope}-${item.id}`)}`)
      .append("circle")
      .attr("r", Math.max(8, item.radius - 6));
  });

  const viewport = svg.append("g").attr("class", "network-viewport");
  const link = viewport.append("g")
    .attr("class", "network-links")
    .selectAll("line")
    .data(graph.links)
    .join("line")
    .attr("class", item => `link-${item.type}`);

  const node = viewport.append("g")
    .attr("class", "network-nodes")
    .selectAll("g")
    .data(graph.nodes)
    .join("g")
    .attr("class", item => `network-node node-${item.type}`)
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", item => `${item.label}. ${item.subtitle || item.type}. Select to inspect.`);

  node.append("circle").attr("class", "node-shell").attr("r", item => item.radius);
  node.filter(item => item.art)
    .append("image")
    .attr("class", "node-portrait")
    .attr("href", item => item.art)
    .attr("x", item => -(item.radius - 6))
    .attr("y", item => -(item.radius - 6))
    .attr("width", item => (item.radius - 6) * 2)
    .attr("height", item => (item.radius - 6) * 2)
    .attr("preserveAspectRatio", "xMidYMid slice")
    .attr("clip-path", item => `url(#node-clip-${stableHash(`${scope}-${item.id}`)})`);
  node.filter(item => item.art)
    .append("circle")
    .attr("class", "node-pigment")
    .attr("r", item => Math.max(8, item.radius - 6));
  node.append("circle").attr("class", "node-orbit").attr("r", item => Math.max(6, item.radius - 7));
  node.each(function(item) {
    const text = d3Select(this).append("text")
      .attr("text-anchor", "middle")
      .attr("class", item.art ? "node-label node-label--portrait" : "node-label")
      .attr("y", item.art ? item.radius + 14 : 0);
    networkLabelLines(item.label).forEach((line, index, lines) => {
      text.append("tspan")
        .attr("x", 0)
        .attr("dy", index === 0 ? `${-(lines.length - 1) * .45}em` : "1em")
        .text(line);
    });
    if (item.type === "book") text.append("tspan").attr("x", 0).attr("dy", "1.35em").attr("class", "node-subtitle").text(item.subtitle);
  });

  const inspect = item => {
    const episodeAction = Number.isInteger(item.episodeIndex)
      ? `<button type="button" data-inspector-episode="${item.episodeIndex}">Open episode dossier ↗</button>`
      : "";
    const bookAction = Number.isInteger(item.bookIndex)
      ? `<button type="button" data-inspector-book="${item.bookIndex}">Open Book ${ROMAN[item.bookIndex]} ↘</button>`
      : "";
    const figureAction = ["divine", "mortal", "creature"].includes(item.type)
      ? `<button type="button" data-inspector-figure="${item.label}">Trace figure ⤴</button>`
      : "";
    $("#network-inspector").innerHTML = `<strong>${item.label}</strong><span>${item.subtitle || item.type}</span><p>${item.description || "A connective structure in the current view."}</p><div>${episodeAction}${bookAction}${figureAction}</div>`;
    $("[data-inspector-episode]", $("#network-inspector"))?.addEventListener("click", buttonEvent => {
      openWorkspace("instrument");
      openFocusFolio("episode", Number(buttonEvent.currentTarget.dataset.inspectorEpisode));
    });
    $("[data-inspector-book]", $("#network-inspector"))?.addEventListener("click", buttonEvent => selectBook(Number(buttonEvent.currentTarget.dataset.inspectorBook), { scrollAtlas: true }));
    $("[data-inspector-figure]", $("#network-inspector"))?.addEventListener("click", buttonEvent => openSearch(buttonEvent.currentTarget.dataset.inspectorFigure));
  };

  node.on("click", (event, item) => {
    event.stopPropagation();
    node.classed("is-selected", candidate => candidate === item);
    inspect(item);
  }).on("keydown", (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      node.classed("is-selected", candidate => candidate === item);
      inspect(item);
    }
  });

  networkZoom = d3Zoom()
    .scaleExtent([.55, 3])
    .on("zoom", event => viewport.attr("transform", event.transform));
  svg.call(networkZoom).on("dblclick.zoom", null);

  const simulation = forceSimulation(graph.nodes)
    .force("link", forceLink(graph.links).id(item => item.id).distance(linkItem => {
      if (linkItem.type === "appears") return 82;
      if (linkItem.type === "motif") return 118;
      return 105;
    }).strength(linkItem => linkItem.type === "appears" ? .18 : .34))
    .force("charge", forceManyBody().strength(item => item.type === "book" ? -960 : item.type === "episode" ? -390 : -170))
    .force("center", forceCenter(460, 300))
    .force("x", forceX(460).strength(.025))
    .force("y", forceY(300).strength(.035))
    .force("collide", forceCollide().radius(item => item.radius + (item.art ? 24 : 15)).iterations(3))
    .alphaDecay(.028);
  networkSimulation = simulation;

  node.call(d3Drag()
    .on("start", (event, item) => {
      if (!event.active) simulation.alphaTarget(.2).restart();
      item.fx = item.x;
      item.fy = item.y;
    })
    .on("drag", (event, item) => {
      item.fx = event.x;
      item.fy = event.y;
    })
    .on("end", (event, item) => {
      if (!event.active) simulation.alphaTarget(0);
      item.fx = null;
      item.fy = null;
    }));

  simulation.on("tick", () => {
    graph.nodes.forEach(item => {
      item.x = clamp(item.x, item.radius + 16, 920 - item.radius - 16);
      item.y = clamp(item.y, item.radius + 16, 610 - item.radius - 16);
    });
    link
      .attr("x1", item => item.source.x)
      .attr("y1", item => item.source.y)
      .attr("x2", item => item.target.x)
      .attr("y2", item => item.target.y);
    node.attr("transform", item => `translate(${item.x},${item.y})`);
  });

  $("#network-legend").innerHTML = [
    ["book", "Book"],
    ["episode", "Episode"],
    ["divine", "Divine"],
    ["mortal", "Mortal"],
    ["theme", "Theme"]
  ].map(item => `<span class="legend-${item[0]}"><i></i>${item[1]}</span>`).join("");
  $("#network-inspector").innerHTML = scope === "poem"
    ? "<strong>Cross-book echoes</strong><span>Recurring figures and sequence</span><p>Select any node to inspect its role, then jump directly to its book.</p>"
    : `<strong>Book ${ROMAN[currentIndex]}</strong><span>${BOOKS[currentIndex].title}</span><p>${graph.nodes.length} nodes and ${graph.links.length} relations are visible in this working map.</p>`;

  if (!reducedMotion.matches) {
    gsap.fromTo(node.nodes(), { opacity: 0 }, { opacity: 1, duration: .7, stagger: .012, ease: "expo.out", overwrite: true });
    gsap.fromTo(link.nodes(), { opacity: 0, strokeDashoffset: 36 }, { opacity: .7, strokeDashoffset: 0, duration: 1.1, stagger: .004, ease: "power2.out", overwrite: true });
  }
}

function resetNetworkZoom() {
  if (!networkSvg || !networkZoom) return;
  networkSvg.call(networkZoom.transform, zoomIdentity);
}

function renderProgress() {
  const count = readBooks.size;
  $("#progress-count").textContent = `${count} / 15`;
  $("#header-progress-count").textContent = `${count} / 15`;
  $("#scholar-progress-count").textContent = `${count} / 15`;
  $(".masthead-progress").setAttribute("aria-label", `Reading progress: ${count} of 15 books read`);
  $(".masthead-progress i").style.transform = `scaleX(${count / 15})`;
  $(".scholar-progress i").style.transform = `scaleX(${count / 15})`;
  const bar = $(".progress-track");
  bar.setAttribute("aria-valuenow", String(count));
  $("i", bar).style.transform = `scaleX(${count / 15})`;
  $$(".book-segment").forEach((segment, index) => segment.classList.toggle("is-read", readBooks.has(index + 1)));
}

function selectBook(index, { scrollAtlas = false } = {}) {
  const nextIndex = wrap(index, BOOKS.length);
  const changed = nextIndex !== currentIndex;
  const update = () => {
    if (changed) closeFocusFolio({ restoreFocus: false });
    currentIndex = nextIndex;
    const book = BOOKS[currentIndex];
    saveState();
    document.documentElement.style.setProperty("--wheel-angle", `${-currentIndex * (360 / BOOKS.length)}deg`);
    $$(".book-segment").forEach((segment, i) => segment.classList.toggle("is-active", i === currentIndex));
    renderVolvelleDetails(book);
    renderEraInscriptions();
    renderConsole(book);
    renderRail();
    renderHeroBookNav();
    renderScholarBookList();
    renderAtlas(book);
    renderStemma(book);
    renderNetwork();
    renderProgress();
  };
  const after = () => {
    if (scrollAtlas) openWorkspace("atlas");
  };
  if (changed && document.startViewTransition && !reducedMotion.matches && !activeBookTransition) {
    const transition = document.startViewTransition(update);
    activeBookTransition = transition;
    const updateDone = transition.updateCallbackDone.catch(() => undefined);
    updateDone.then(after);
    transition.finished.finally(() => {
      if (activeBookTransition === transition) activeBookTransition = null;
    });
    return updateDone;
  } else {
    update();
    after();
    return Promise.resolve();
  }
}

function switchTab(name) {
  $$(".view-tabs [role=tab]").forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.setAttribute("aria-selected", String(active));
    $(`#panel-${tab.dataset.tab}`).hidden = !active;
  });
}

function allLexiconEntries() {
  const seen = new Map();
  BOOKS.forEach(book => book.terms.forEach(term => {
    const key = term[0].toLowerCase();
    const bookLabel = `Book ${ROMAN[book.id - 1]}`;
    if (seen.has(key)) {
      const existing = seen.get(key);
      if (!existing[4].includes(bookLabel)) existing[4] += `, ${bookLabel}`;
    } else {
      seen.set(key, [term[0], term[1], term[2], term[3], bookLabel]);
    }
  }));
  EXTRA_LEXICON.forEach(entry => seen.set(entry[0].toLowerCase(), entry));
  EXPANDED_LEXICON.forEach(entry => seen.set(entry[0].toLowerCase(), entry));
  return [...seen.values()].sort((a, b) => a[0].localeCompare(b[0]));
}

const LEXICON = allLexiconEntries();

function renderLexicon() {
  const categories = ["All", ...new Set(LEXICON.map(item => item[3]))];
  $("#lexicon-count").textContent = `${LEXICON.length} terms`;
  $("#lexicon-categories").innerHTML = categories.map(category => `
    <button type="button" class="${category === lexiconCategory ? "is-active" : ""}" data-category="${category}">
      ${category}<span>${category === "All" ? LEXICON.length : LEXICON.filter(item => item[3] === category).length}</span>
    </button>`).join("");
  const query = $("#lexicon-filter").value.trim().toLowerCase();
  const results = LEXICON.filter(item =>
    (lexiconCategory === "All" || item[3] === lexiconCategory) &&
    (!query || item.join(" ").toLowerCase().includes(query))
  ).sort((a, b) => {
    if (!query) return a[0].localeCompare(b[0]);
    const aName = a[0].toLowerCase();
    const bName = b[0].toLowerCase();
    const score = name => name === query ? 0 : name.startsWith(query) ? 1 : name.includes(query) ? 2 : 3;
    return score(aName) - score(bName) || aName.localeCompare(bName);
  });
  $("#lexicon-list").innerHTML = results.length ? results.map(item => `
    <article class="lexicon-entry">
      <h3>${item[0]} <span>${item[1]}</span></h3>
      <p>${item[2]}</p>
      <span>${item[4]}</span>
    </article>`).join("") : `<p class="lexicon-empty">No entries match this filter. Try a broader word or another category.</p>`;
  $$("[data-category]").forEach(button => button.addEventListener("click", () => {
    lexiconCategory = button.dataset.category;
    renderLexicon();
  }));
}

function buildSearchIndex() {
  const items = [];
  BOOKS.forEach((book, index) => {
    items.push({ type: "Book", title: `Book ${ROMAN[index]} — ${book.title}`, subtitle: book.summary, index, tab: "episodes" });
    book.episodes.forEach((episode, episodeIndex) => {
      const study = getEpisodeStudy(episode[0]);
      items.push({
        type: "Episode",
        title: episode[0],
        subtitle: `${episode[1]} ${episode[2]} ${episode[3]} ${study.locus} ${study.cast.join(" ")} ${study.motifs.join(" ")}`,
        index,
        episodeIndex,
        tab: "episodes"
      });
    });
    book.cast.forEach(person => items.push({ type: person[1], title: person[0], subtitle: person[2], index, tab: "cast" }));
    book.themes.forEach(theme => items.push({ type: "Theme", title: theme[0], subtitle: theme[1], index, tab: "themes" }));
    book.ties.forEach(tie => items.push({ type: "Classical tie", title: tie[0], subtitle: tie[1], index, tab: "ties" }));
  });
  LEXICON.forEach(entry => items.push({ type: entry[3], title: entry[0], subtitle: entry[2], index: null, tab: null, lexicon: true }));
  return items;
}

const SEARCH_INDEX = buildSearchIndex();

function renderSearch(query = "") {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    $("#search-results").innerHTML = `<p class="empty-prompt">Search across all 15 books, ${BOOKS.reduce((sum, book) => sum + book.episodes.length, 0)} major episodes, principal figures, themes, terminology, and classical ties.</p>`;
    return;
  }
  const tokens = normalized.split(/\s+/);
  const results = SEARCH_INDEX
    .map(item => ({ item, score: tokens.reduce((score, token) => {
      const title = item.title.toLowerCase();
      const text = `${item.type} ${item.title} ${item.subtitle}`.toLowerCase();
      return score + (title.startsWith(token) ? 4 : title.includes(token) ? 3 : text.includes(token) ? 1 : -8);
    }, 0) }))
    .filter(result => result.score >= tokens.length)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map(result => result.item);
  $("#search-results").innerHTML = results.length ? results.map((item, resultIndex) => `
    <button class="search-result" type="button" data-result-index="${resultIndex}">
      <span class="search-result-type">${item.type}</span>
      <span><strong>${item.title}</strong><small>${item.subtitle.slice(0, 150)}${item.subtitle.length > 150 ? "…" : ""}</small></span>
      <span>${item.index === null ? "Lexicon" : `Book ${ROMAN[item.index]}`} ↘</span>
    </button>`).join("") : `<p class="empty-prompt">No exact trail found for “${escapeHTML(query)}.” Try a character, place, transformation, or theme.</p>`;
  $$(".search-result").forEach(button => button.addEventListener("click", async () => {
    const item = results[Number(button.dataset.resultIndex)];
    $("#search-dialog").close();
    if (item.lexicon) {
      $("#lexicon-filter").value = item.title;
      lexiconCategory = "All";
      renderLexicon();
      openWorkspace("lexicon");
    } else if (item.type === "Episode" && Number.isInteger(item.episodeIndex)) {
      await selectBook(item.index);
      openWorkspace("instrument");
      openFocusFolio("episode", item.episodeIndex);
    } else {
      await selectBook(item.index);
      switchTab(item.tab);
      openWorkspace("atlas");
    }
  }));
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function openSearch(prefill = "") {
  const dialog = $("#search-dialog");
  if (!dialog.open) dialog.showModal();
  $("#global-search").value = prefill;
  renderSearch(prefill);
  requestAnimationFrame(() => $("#global-search").focus());
}

function renderNotes() {
  $("#notes-list").innerHTML = notes.length ? notes.slice().reverse().map(note => `
    <article class="saved-note">
      <span>Book ${ROMAN[note.book]} · ${BOOKS[note.book].title}</span>
      <p>${escapeHTML(note.text)}</p>
      <button type="button" data-delete-note="${note.id}" aria-label="Delete note">×</button>
    </article>`).join("") : `<p class="empty-prompt">No marginalia yet. Add a question, pattern, or passage to revisit.</p>`;
  $$("[data-delete-note]").forEach(button => button.addEventListener("click", () => {
    notes = notes.filter(note => note.id !== button.dataset.deleteNote);
    saveState();
    renderNotes();
    showToast("Note removed.");
  }));
}

function openNotes(bookIndex = currentIndex) {
  $("#note-book").value = String(bookIndex);
  renderNotes();
  if (!$("#notes-dialog").open) $("#notes-dialog").showModal();
  requestAnimationFrame(() => $("#note-text").focus());
}

function exportNotes() {
  const payload = {
    product: "Metamorphoses — A Living Chronology",
    exportedAt: new Date().toISOString(),
    notes
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `metamorphoses-marginalia-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(`${notes.length} ${notes.length === 1 ? "note" : "notes"} exported.`);
}

async function importNotes(file) {
  try {
    const payload = JSON.parse(await file.text());
    const incoming = Array.isArray(payload) ? payload : payload.notes;
    if (!Array.isArray(incoming)) throw new Error("The file does not contain a notes array.");
    const valid = incoming.filter(note =>
      note && typeof note.text === "string" && Number.isInteger(Number(note.book)) && Number(note.book) >= 0 && Number(note.book) < BOOKS.length
    ).map(note => ({
      id: typeof note.id === "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(note.id) ? note.id : crypto.randomUUID(),
      book: Number(note.book),
      text: note.text.trim(),
      createdAt: typeof note.createdAt === "string" ? note.createdAt : new Date().toISOString()
    })).filter(note => note.text);
    const merged = new Map(notes.map(note => [note.id, note]));
    valid.forEach(note => merged.set(note.id, note));
    notes = [...merged.values()];
    saveState();
    renderNotes();
    showToast(`${valid.length} ${valid.length === 1 ? "note" : "notes"} imported.`);
  } catch (error) {
    showToast(`Import failed: ${error.message}`);
  } finally {
    $("#notes-import").value = "";
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setUpWheelInteraction() {
  const shell = $("[data-volvelle]");
  shell.addEventListener("wheel", event => {
    event.preventDefault();
    selectBook(currentIndex + (event.deltaY > 0 ? 1 : -1));
  }, { passive: false });
  shell.addEventListener("pointerdown", event => {
    if (event.target.closest("button, [role=button]")) return;
    dragStart = { x: event.clientX, index: currentIndex };
    $("#volvelle").classList.add("is-dragging");
    shell.setPointerCapture(event.pointerId);
  });
  shell.addEventListener("pointermove", event => {
    if (!dragStart) return;
    const delta = event.clientX - dragStart.x;
    const preview = -dragStart.index * (360 / BOOKS.length) + delta * .16;
    document.documentElement.style.setProperty("--wheel-angle", `${preview}deg`);
  });
  shell.addEventListener("pointerup", event => {
    if (!dragStart) return;
    const delta = event.clientX - dragStart.x;
    const steps = Math.round(-delta / 55);
    const startIndex = dragStart.index;
    dragStart = null;
    $("#volvelle").classList.remove("is-dragging");
    selectBook(startIndex + steps);
  });
  shell.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") selectBook(currentIndex + 1);
    if (event.key === "ArrowLeft") selectBook(currentIndex - 1);
  });
}

/* ---------------------------------------------------------- pliant panes */

/*
 * Draggable boundaries between the page's major panes.
 *
 * One implementation drives every grip: the markup says which custom property
 * it writes, which edge it measures from, and how much room the *other* pane
 * must keep. Nothing here knows about the instrument or the stemma
 * specifically, so a new boundary is a `<div class="pane-grip">` and no code.
 *
 * It is a real `role="separator"`: focusable, driven by the arrow keys, reset
 * by Home or a double-click, and reporting its position to assistive tech.
 * A boundary you can only drag is a boundary half the readers cannot move.
 */
const GRIP_STORE = "met.panes.v1";

function loadPaneSizes() {
  try {
    return JSON.parse(localStorage.getItem(GRIP_STORE) || "{}");
  } catch {
    return {};
  }
}

function savePaneSizes(sizes) {
  try {
    localStorage.setItem(GRIP_STORE, JSON.stringify(sizes));
  } catch {
    /* A reader with storage disabled still gets to resize; it just won't keep. */
  }
}

function setUpPaneGrips() {
  const sizes = loadPaneSizes();

  $$(".pane-grip").forEach(grip => {
    const pane = grip.closest(".hero, .stemma-stage");
    if (!pane) return;
    const property = grip.dataset.gripProperty;
    const fromRight = grip.dataset.gripEdge === "right";
    const min = Number(grip.dataset.gripMin);
    const reserve = Number(grip.dataset.gripReserve);
    const key = grip.dataset.grip;

    const limit = () => Math.max(min, pane.clientWidth - reserve);
    const current = () => {
      const stored = pane.style.getPropertyValue(property);
      if (stored) return parseFloat(stored);
      // No explicit size yet: measure what the layout chose, so the first drag
      // continues from where the pane actually is rather than jumping.
      const box = grip.getBoundingClientRect();
      const paneBox = pane.getBoundingClientRect();
      return fromRight ? paneBox.right - box.left - box.width / 2 : box.left + box.width / 2 - paneBox.left;
    };

    const apply = (value, { persist = true } = {}) => {
      const clamped = Math.round(Math.min(Math.max(value, min), limit()));
      pane.style.setProperty(property, `${clamped}px`);
      grip.setAttribute("aria-valuenow", String(clamped));
      grip.setAttribute("aria-valuemin", String(min));
      grip.setAttribute("aria-valuemax", String(limit()));
      grip.setAttribute("aria-valuetext", `${clamped} pixels`);
      if (persist) {
        sizes[key] = clamped;
        savePaneSizes(sizes);
      }
      // The instrument's ground is measured from the wheel, and the stemma
      // decides whether to show its scroll affordances from the plate's width.
      // Both are wrong the instant a boundary moves.
      renderField();
      $(".stemma-scroll")?.dispatchEvent(new Event("scroll"));
    };

    const reset = () => {
      pane.style.removeProperty(property);
      delete sizes[key];
      savePaneSizes(sizes);
      grip.removeAttribute("aria-valuenow");
      renderField();
    };

    // A focusable separator must report its position from the start. Setting
    // these only on the first drag left every grip failing `aria-required-attr`
    // until someone moved it — which is exactly the reader who cannot.
    apply(sizes[key] ?? current(), { persist: Boolean(sizes[key]) });

    let origin = null;
    grip.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      event.preventDefault();
      origin = { x: event.clientX, size: current() };
      grip.setPointerCapture(event.pointerId);
      grip.classList.add("is-dragging");
      document.body.classList.add("is-resizing");
    });
    grip.addEventListener("pointermove", event => {
      if (!origin) return;
      const delta = event.clientX - origin.x;
      apply(origin.size + (fromRight ? -delta : delta));
    });
    const release = event => {
      if (!origin) return;
      origin = null;
      grip.classList.remove("is-dragging");
      document.body.classList.remove("is-resizing");
      if (grip.hasPointerCapture?.(event.pointerId)) grip.releasePointerCapture(event.pointerId);
    };
    grip.addEventListener("pointerup", release);
    grip.addEventListener("pointercancel", release);
    grip.addEventListener("dblclick", reset);

    grip.addEventListener("keydown", event => {
      const step = event.shiftKey ? 64 : 16;
      if (event.key === "ArrowLeft") apply(current() + (fromRight ? step : -step));
      else if (event.key === "ArrowRight") apply(current() + (fromRight ? -step : step));
      else if (event.key === "Home" || event.key === "Escape") reset();
      else return;
      event.preventDefault();
    });
  });
}

function bindEvents() {
  $$("[data-workspace-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openWorkspace(link.dataset.workspaceLink);
  }));
  $$("[data-ring-guide]").forEach(button => button.addEventListener("click", () => {
    const ring = button.dataset.ringGuide;
    if (ring === "era") openWorkspace("chronology");
    else if (ring === "book") showToast(`Book ${ROMAN[currentIndex]} is aligned to the meridian.`);
    else openFocusFolio(ring, 0, button);
  }));
  $("[data-close-focus]").addEventListener("click", () => closeFocusFolio());
  $("[data-focus-prev]").addEventListener("click", () => {
    if (!currentFocus) return;
    const collection = currentFocus.kind === "episode" ? BOOKS[currentIndex].episodes : BOOKS[currentIndex].themes;
    openFocusFolio(currentFocus.kind, wrap(currentFocus.index - 1, collection.length));
  });
  $("[data-focus-next]").addEventListener("click", () => {
    if (!currentFocus) return;
    const collection = currentFocus.kind === "episode" ? BOOKS[currentIndex].episodes : BOOKS[currentIndex].themes;
    openFocusFolio(currentFocus.kind, wrap(currentFocus.index + 1, collection.length));
  });
  $("[data-focus-atlas]").addEventListener("click", () => {
    const tab = currentFocus?.kind === "theme" ? "themes" : "episodes";
    closeFocusFolio({ restoreFocus: false });
    switchTab(tab);
    openWorkspace("atlas");
  });
  $$("[data-step]").forEach(button => button.addEventListener("click", () => selectBook(currentIndex + Number(button.dataset.step))));
  $("[data-jump-detail]").addEventListener("click", () => selectBook(currentIndex, { scrollAtlas: true }));
  $("[data-mark-read]").addEventListener("click", () => {
    const id = BOOKS[currentIndex].id;
    if (readBooks.has(id)) {
      readBooks.delete(id);
      showToast(`Book ${ROMAN[currentIndex]} removed from completed.`);
    } else {
      readBooks.add(id);
      showToast(`Book ${ROMAN[currentIndex]} marked as read.`);
    }
    saveState();
    selectBook(currentIndex);
  });
  $("#atlas-book-select").addEventListener("change", event => selectBook(Number(event.target.value)));
  $("#stemma-book-select").addEventListener("change", event => selectBook(Number(event.target.value)));
  // Bound once, on markup that outlives every render. Anything the reader can
  // use to *leave* a view belongs here rather than inside the render that
  // draws the view — that is what turned the whole-poem scope into a room
  // with no door.
  $$("[data-stemma-scope]").forEach(button => button.addEventListener("click", () => {
    stemmaScope = button.dataset.stemmaScope;
    renderStemma(BOOKS[currentIndex]);
  }));
  // Bound once, on markup that outlives the render, for the same reason the
  // scope switch is: a control the reader uses to change the view must not be
  // rebuilt by the view it changes.
  $$("[data-stemma-zoom]").forEach(button => button.addEventListener("click", () => {
    const mode = button.dataset.stemmaZoom;
    if (mode === "reset") setStemmaZoom(1);
    else if (mode === "fit") setStemmaZoom(stemmaFitScale());
    else setStemmaZoom(stemmaZoom * (mode === "in" ? 1.35 : 1 / 1.35));
  }));

  // The slider is the same number the pinch moves, exposed. A reader on a mouse
  // or a keyboard gets the continuous control a trackpad gives for free.
  $("#stemma-zoom-range").addEventListener("input", event => {
    setStemmaZoom(Number(event.target.value) / 100, { syncRange: false });
  });

  bindStemmaPinch();
  $("#master-filter").addEventListener("input", event => {
    masterFilter = event.target.value;
    renderMasterGenealogy();
  });
  // A second way out, for a reader who reached the whole-poem view and looked
  // for the gesture that closes everything else in this interface.
  $("#stemma").addEventListener("keydown", event => {
    if (event.key !== "Escape" || stemmaScope === "book") return;
    if (event.target.closest("input, select, textarea")) return;
    stemmaScope = "book";
    renderStemma(BOOKS[currentIndex]);
    $('[data-stemma-scope="book"]').focus();
  });
  $("[data-close-figure]").addEventListener("click", () => closeFigureSheet());
  $("[data-figure-stemma]").addEventListener("click", () => {
    const figure = getFigure(currentFigureName);
    const house = figure && HOUSES.find(entry => entry.name === figure.house && entry.books.includes(BOOKS[currentIndex].id));
    if (house) stemmaHouseId = house.id;
    closeFigureSheet({ restoreFocus: false });
    renderStemma(BOOKS[currentIndex]);
    openWorkspace("stemma");
  });
  $("[data-figure-search]").addEventListener("click", () => {
    const name = currentFigureName;
    closeFigureSheet({ restoreFocus: false });
    openSearch(name);
  });
  $$(".view-tabs [role=tab]").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const tabs = $$(".view-tabs [role=tab]");
      const next = wrap(tabs.indexOf(tab) + (event.key === "ArrowRight" ? 1 : -1), tabs.length);
      tabs[next].focus();
      switchTab(tabs[next].dataset.tab);
    });
  });
  $(".rail-nudge--left").addEventListener("click", () => $("#book-rail").scrollBy({ left: -400, behavior: "smooth" }));
  $(".rail-nudge--right").addEventListener("click", () => $("#book-rail").scrollBy({ left: 400, behavior: "smooth" }));
  $("#lexicon-filter").addEventListener("input", renderLexicon);
  $("#concordance-search").addEventListener("input", renderConcordance);
  $("#network-scope").addEventListener("change", renderNetwork);
  $$("[data-network-zoom]").forEach(button => button.addEventListener("click", () => {
    if (!networkSvg || !networkZoom) return;
    const action = button.dataset.networkZoom;
    if (action === "reset") resetNetworkZoom();
    else networkSvg.call(networkZoom.scaleBy, action === "in" ? 1.28 : .78);
  }));
  $$("[data-open-search]").forEach(button => button.addEventListener("click", () => openSearch()));
  $$("[data-open-notes]").forEach(button => button.addEventListener("click", () => openNotes()));
  $("[data-note-current]").addEventListener("click", () => openNotes());
  $$("[data-close-dialog]").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
  $("#global-search").addEventListener("input", event => renderSearch(event.target.value));
  $("#note-form").addEventListener("submit", event => {
    event.preventDefault();
    const text = $("#note-text").value.trim();
    if (!text) return;
    notes.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), book: Number($("#note-book").value), text, createdAt: new Date().toISOString() });
    $("#note-text").value = "";
    saveState();
    renderNotes();
    showToast("Marginalia saved in this browser.");
  });
  $("[data-export-notes]").addEventListener("click", exportNotes);
  $("#notes-import").addEventListener("change", event => {
    const [file] = event.target.files;
    if (file) importNotes(file);
  });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape") {
      // Innermost surface first: figure sheet, then folio, then any dialog.
      if ($("#figure-sheet").getAttribute("aria-hidden") === "false") closeFigureSheet();
      else if ($("#focus-folio").getAttribute("aria-hidden") === "false") closeFocusFolio();
      else $$("dialog[open]").forEach(dialog => dialog.close());
    }
  });
  window.addEventListener("popstate", () => {
    const name = location.hash.slice(1);
    openWorkspace($(`.workspace-layer[data-workspace="${name}"]`) ? name : "instrument", { updateHistory: false, focus: false });
  });
  $$("dialog").forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));
  setUpWheelInteraction();
}

function init() {
  renderVolvelleBase();
  renderEraBands();
  renderOrbisRibbon();
  renderSelects();
  renderLexicon();
  renderConcordance();
  bindEvents();
  setUpPaneGrips();
  selectBook(currentIndex);
  const initialWorkspace = location.hash.slice(1);
  openWorkspace($(`.workspace-layer[data-workspace="${initialWorkspace}"]`) ? initialWorkspace : "instrument", { updateHistory: false, focus: false, animate: false });
  if (!location.hash) history.replaceState({ workspace: "instrument" }, "", "#instrument");

  // The field is measured from the wheel, so it has to be re-measured when the
  // wheel moves. Coalesced to one redraw per frame: a resize fires in bursts.
  let pending = false;
  const remeasure = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { pending = false; renderField(); });
  };
  window.addEventListener("resize", remeasure);
  document.fonts?.ready.then(remeasure);
  remeasure();
}

init();
