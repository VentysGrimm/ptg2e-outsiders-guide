const MODULE_ID = "ptg2e-outsiders-guide";
const SYSTEM_ID = "part-time-gods";
const SOURCE_BOOK = "Outsider's Guide";

const FOLDERS = {
  kin: "Outsider Kin",
  outlook: "Outsider Outlooks",
  blessing: "Blessings",
  curse: "Curses",
  relic: "New Relics",
  power: "Outsider Rules",
  condition: "Conditions"
};

const KIN = [
  kin("Camazotz", 46, {
    skills: { empathy: 1, might: 1, perform: 1, stealth: 1, travel: 1 },
    resources: { freeTime: 3, wealth: 0 },
    size: "Large",
    passability: "Exposed",
    dominion: "Death (Crossover)",
    overview: "Death-bat Outsiders who can serve as scouts, night fighters, healers, messengers, or grim negotiators. They are most effective when stealth, blood, and soul ties matter.",
    blessing: ability("Creature of the Night", 46, "Death Dominion, kin telepathy, monstrous body traits, flight, night bonuses, and blood-feeding recovery.", [
      "Gain the Death Dominion and telepathic contact with other Camazotz and pantheon members through the shared soul link.",
      "Gain natural weapons, flight, and a +1 bonus to all checks during nighttime hours.",
      "When feeding on human or animal blood, heal 1 Health or Psyche per damage dealt. Conditions still recover normally."
    ], { trigger: "night, feeding, flight, or soul-linked communication" }),
    curse: ability("Ravenous Soul", 46, "Compulsive divine soul hunger and a painful protective soul link.", [
      "If a Camazotz has the chance to devour a god's soul, they cannot refuse and receive no roll to resist.",
      "When another Camazotz or a pantheon member within Near Range takes damage, reduce that damage by 1 and inflict 1 unreducible damage on the Camazotz."
    ], { trigger: "a god's soul is available, or a nearby soul-linked ally is harmed", pantheonDice: 0 }),
    truths: ["Armored", "Bane", "Beast Form (Bat)", "Colossal Size", "Divinely Skilled (Might or Perception)", "First Move", "Regeneration", "Unobscured Eyes"]
  }),
  kin("Centaur", 48, {
    skills: { athletics: 1, crafts: 1, marksman: 1, speed: 1, tech: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Large",
    passability: "Exposed",
    dominion: "Nature (Elemental)",
    overview: "Large, loyal martial Outsiders tied to hidden glens and wild places. They make strong strategists, soldiers, and no-nonsense leaders, but modern civilization grates against them.",
    blessing: ability("Forest Guardian", 48, "Nature Dominion, hoof natural weapons, bow mastery, multi-target archery, and a personal glen.", [
      "Gain the Nature Dominion, Natural Weapons for hooves, and Divinely Skilled (Marksman) when using a bow.",
      "An arrow may strike up to Spark additional targets by sacrificing 1 Pantheon Die per extra target.",
      "Gain a Level 3 Landmark Bond for the Centaur's personal glen and use The Hearth there once per Session for free."
    ], { trigger: "bow fighting, wilderness scenes, or glen protection" }),
    curse: ability("Anti-Civilization", 48, "Modern settings impose penalties and pull territory interests toward the edges.", [
      "In scenes away from nature, suffer a -2 penalty to all checks. Sacrifice 1 Pantheon Die to ignore this penalty for one check.",
      "When placing Points of Interest, shift two of them to the edge of the territory map. Other points between 3 and 7 operate as one level lower."
    ], { trigger: "acting away from nature or placing territory interests", pantheonDice: 0 }),
    truths: ["Bane", "Beast Form (Horse)", "Beast Tongue", "First Move", "Healing Hands", "Otherworldly Sight", "Telepathy", "Unobscured Eyes"]
  }),
  kin("Devourer", 49, {
    skills: { fighting: 1, intuition: 1, medicine: 1, perform: 1, survival: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Average",
    passability: "Exposed, or Flawless for 1 Fragment",
    dominion: "None",
    overview: "A flesh-eating Outsider separated from the clan, useful as a hunter, cleaner, or dangerous ally. Their hunger is also their main engine of power.",
    blessing: ability("Live to Eat", 49, "Consumed flesh creates Well-Fed Conditions that fuel Truths, recovery, predatory bonuses, Vassal levels, disguise, and impossible biting.", [
      "Each pound of flesh eaten creates Well-Fed 1. While Well-Fed exists, gain First Move and Regeneration.",
      "Eating divine flesh recovers 1 Fragment and allows 3 Fragments per Spark for the rest of the Session.",
      "Lower Well-Fed by 1 to ignore 2 damage or heal 1 damage. At Well-Fed 0, gain predatory bonuses but suffer social and knowledge penalties.",
      "Gain +2 Vassal Entitlement levels. Spend 1 Fragment for a Flawless appearance for the Scene or to bite through any material that fits in the Devourer's mouth."
    ], { trigger: "feeding, hunting, recovering, disguising, or biting through material" }),
    curse: ability("Eat to Live", 49, "Flesh cravings reduce Bonds and can destroy strained Attachments.", [
      "Begin with Self-Destruction 2 and reduce maximum Bonds to 5 minus Spark.",
      "When an Attachment has 1 or 0 Strain left and the Devourer is Well-Fed 0-3, roll 1d10. On 1-2, the Devourer destroys what they care about and the Attachment drops 1 level."
    ], { trigger: "hunger and Attachment Strain collide", pantheonDice: 0 }),
    truths: ["Armored", "Aura of Influence (Fear)", "Colossal Size", "Divinely Skilled (Fighting, Might, or Survival)", "Extra Appendages (Arms or Legs)", "Natural Weapons", "Unobscured Eyes", "Visions"]
  }),
  kin("Djinn", 51, {
    skills: { crafts: 1, deception: 1, discipline: 1, fortitude: 1, intuition: 1 },
    resources: { freeTime: 0, wealth: 2 },
    size: "Average",
    passability: "Passable, or Flawless for 1 Fragment",
    dominion: "Variable (Crossover)",
    overview: "Imprisoned wish-granting Outsiders who can fill nearly any pantheon role, but only while bound to a Master and the prison that controls their freedom.",
    blessing: ability("Malleable Existence", 51, "Broad shapeshifting, scene-by-scene Dominion choice, and flexible Manifestation allocation.", [
      "Spend 1 Fragment to become any person, animal, or item, gaining up to a +3 check bonus if the form helps.",
      "Choose a Dominion once per Scene and reallocate Manifestation levels to match the current task.",
      "Changing Dominion or allocation again in the same Scene costs 1 Fragment, unless the change fulfills the Master's wish. Wish-driven checks gain +2 and grant the Djinn 1 Fragment."
    ], { trigger: "shapeshifting, choosing a Dominion, reallocating Manifestations, or fulfilling a wish" }),
    curse: ability("My Master Beckons", 51, "A Level 3 Master Bond replaces part of Step Four and can interrupt any task.", [
      "Instead of spending all 5 Attachment points normally, begin with a Level 3 My Master Individual Bond tied to the Djinn prison, then spend 3 additional Attachment points.",
      "The Master Bond affects territory but cannot perform Favors or Lead Follow-up.",
      "The Djinn cannot refuse the Master's call or wish. Failure inflicts 2 Strain to the Bond, and a lost Bond level permanently removes either 1 Health or 1 Psyche."
    ], { trigger: "the Master calls, commands, or makes a wish", pantheonDice: 0 }),
    truths: ["Any Truth that fits the Djinn's long history and current role"]
  }),
  kin("Dryad", 52, {
    skills: { crafts: 1, empathy: 1, influence: 1, medicine: 1, survival: 1 },
    resources: { freeTime: 2, wealth: 1 },
    size: "Average",
    passability: "Exposed",
    dominion: "None",
    overview: "Tree-linked Outsiders driven by connection, love, and forest obligation. They work well as protectors, healers, diplomats, and territory anchors.",
    blessing: ability("Child of Nature", 52, "Awe, wild speech, a Home Tree, teleportation, tree healing, and plant commands.", [
      "Gain Aura of Influence (Awe) and a Wild Tongue-style ability to speak with animals and plants.",
      "Gain a Level 3 Home Tree Landmark Bond. Instantly teleport to it for free within home territory or for 1 Fragment outside it.",
      "Devote a Scene to melding with the Home Tree to heal all damage. Conditions recover normally.",
      "Spend 1 Fragment to communicate with local plant life and issue commands by sacrificing Pantheon Dice, or 1 Fragment in place of 3 dice."
    ], { trigger: "plant speech, Home Tree travel, tree healing, or commanding local plants" }),
    curse: ability("Deforestation", 52, "The Dryad's body and territory suffer when the Home Tree is damaged or destroyed.", [
      "When the Home Tree suffers Strain from an outside source, gain a Deprived Condition with twice the Strain as its level.",
      "If the Home Tree is destroyed, nearby territory suffers penalties and the Dryad takes unhealable scene damage until they create a seed at the cost of 1 permanent Spark."
    ], { trigger: "the Home Tree suffers Strain or destruction", pantheonDice: 0 }),
    truths: ["Armored", "Aquatic", "Extra Appendages (Arms or Legs)", "Fertility", "Flight", "Otherworldly Sight", "Regeneration", "Telepathy"]
  }),
  kin("Dwarf", 54, {
    skills: { athletics: 1, fighting: 1, fortitude: 1, knowledge: 1, tech: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Average",
    passability: "Passable",
    dominion: "None",
    overview: "Craft-focused Outsiders whose modern life revolves around their forge, hoard, and ability to create Relics.",
    blessing: ability("Forge Mastery", 54, "Craft divine skill, bonus Relic levels, a Forge Landmark, and rules for making temporary or permanent Relics.", [
      "Gain Divinely Skilled (Crafts) for one specialty, +3 Relic Levels, and a Level 2 Forge Landmark Bond.",
      "After forging an item, spend up to 5 personal Fragments to create a Unique Relic of equal level. Its effects are fixed once created.",
      "The Relic loses 1 level per Session unless the Dwarf spends more Fragments. Spend 1 Permanent Fragment until the next Story to make it permanent."
    ], { trigger: "crafting, creating, maintaining, or empowering a Relic" }),
    curse: ability("Material Cravings", 54, "Valuable purchases can create Overwhelmed Conditions and compulsory spending.", [
      "For each Wealth spent beyond the first in a Scene on frivolous purchases or services, suffer cumulative Overwhelmed 1, raised to level 2 when spending on someone else's behalf.",
      "When an interesting item is available and the Dwarf can afford it, resist with Simple (1) Discipline + Intuition. Success raises the next resistance Difficulty by +1 until they give in."
    ], { trigger: "tempting valuables or frivolous spending", pantheonDice: 0 }),
    truths: ["Armored", "Bane", "Divinely Skilled (Knowledge or Fighting)", "Extra Appendages (Arms)", "Immunity (Heat)", "Otherworldly Sight", "Regeneration", "Visions"]
  }),
  kin("Encantado", 55, {
    skills: { deception: 1, empathy: 1, influence: 1, perception: 1, travel: 1 },
    resources: { freeTime: 2, wealth: 1 },
    size: "Average",
    passability: "Flawless, Passable, or Exposed",
    dominion: "Weather (Elemental)",
    overview: "River tricksters and revelers who move between alluring human form and pink dolphin form, often bringing romance, weather, and illness with them.",
    blessing: ability("Down By the River", 55, "Aquatic nature, divine social skill, free human and dolphin forms, fertility, and Weather Dominion.", [
      "Gain Aquatic, Divinely Skilled (Influence), and the Weather Dominion.",
      "Human form is Flawless while the blowhole is covered. If exposed, use the Passable Curse.",
      "Take human or pink dolphin form at will without spending Fragments.",
      "Cause or become pregnant with mortal partners at will; with Sparked beings, this costs 1 Fragment. The child is always Encantado."
    ], { trigger: "river movement, social influence, form changing, fertility, or weather expression" }),
    curse: ability("Trail of Sickness", 55, "Close relationships and repeated scenes spread sickness.", [
      "Attachments other than Relics or Landmark Bonds act as one level lower.",
      "Mortals who spend repeated scenes with the Encantado gain cumulative Sickness 1 after the first Scene. Pantheon members are protected for Spark plus 1 scenes before the Condition starts."
    ], { trigger: "close ongoing contact with mortals or pantheon members", pantheonDice: 0 }),
    truths: ["Aura of Influence (Awe)", "Beast Tongue", "First Move", "Flight", "Immunity (Disease/Sickness)", "Soothing Aura", "Tongues", "Unobscured Eyes"]
  }),
  kin("Gorgon", 56, {
    skills: { athletics: 1, influence: 1, medicine: 1, perception: 1, stealth: 1 },
    resources: { freeTime: 2, wealth: 2 },
    size: "Average",
    passability: "Passable or Exposed",
    dominion: "None",
    overview: "Medusa-blooded Outsiders with serpent locks, poison, social danger, and the terrifying power to turn targets to stone.",
    blessing: ability("Medusa's Daughter", 56, "Uncovered perception skill, poison immunity, serpent bites, extra Free Time, and Stone Gaze.", [
      "Gain Divinely Skilled (Perception) when the head is uncovered and Immunity (Poisons).",
      "After a successful grapple, serpent hair bites automatically and inflicts Poisoned 1.",
      "Spend 1 Fragment for Stone Gaze. Mortals are petrified permanently. Sparked targets resist with Discipline + Fortitude against the Gorgon's Discipline + Medicine + Spark.",
      "If the Gorgon wins, petrification lasts Spark days. If the target wins, they suffer a Broken (Athletics) Condition equal to half the Gorgon's successes, rounded down."
    ], { trigger: "uncovered perception, grappling, poison, or Stone Gaze" }),
    curse: ability("Green Intentions", 56, "Uncovered beauty complicates social scenes and serpent locks strain Attachments.", [
      "If not covered up, overwhelming beauty causes a -2 penalty to social checks. Uncovered snakes make the Gorgon Exposed.",
      "After devoting or splitting a Scene with an Attachment, roll 1d10. On 1-2, deal 1 Strain to that Attachment and the Gorgon cannot interact with it again for the rest of the Session."
    ], { trigger: "uncovered social contact or close Attachment scenes", pantheonDice: 0 }),
    truths: ["Aura of Influence (Awe or Fear)", "Beast Tongue", "Divinely Skilled (Empathy or Stealth)", "Natural Weapons", "Regeneration", "Soothing Aura", "Telepathy", "Tongues"]
  }),
  kin("Jikininki", 57, {
    skills: { deception: 1, medicine: 1, might: 1, perform: 1, stealth: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Average",
    passability: "Exposed, Passable, or Flawless depending on the mask",
    dominion: "None",
    overview: "Hungry corpse-wearing spirits who borrow mortal lives, skills, and social access while trying to survive animal hatred and mask decay.",
    blessing: ability("Borrowed Lives", 57, "Eat the dead to assume their form, gain temporary Skill levels, shift lifestyle resources, and persist as a spirit after bodily death.", [
      "After eating from an unembalmed corpse, spend 1 Fragment to copy the target's appearance, voice, and surface identity.",
      "Gain +3 Skill levels suited to the form. The GM may also adjust Free Time and Wealth while keeping the same total.",
      "Flawless passability lasts Fortitude days, doubled if the Jikininki devotes a Scene to eating the whole body. Sun and heat reduce duration.",
      "If slain, the Jikininki reverts to spirit form and is only truly killed by rules that can destroy spirits."
    ], { trigger: "eating the dead, assuming a mask, or surviving bodily death" }),
    curse: ability("Corruption Shines Through", 57, "Animals and beast-forms instinctively hate the Jikininki and become more dangerous.", [
      "Mundane animals, animal-intelligence vassals, and beast-transformed gods instinctively hate the Jikininki.",
      "During battle with such beasts, the Jikininki gains Afraid 1 each Round. Beast attackers gain +2 Initiative and +2 damage, and successful attacks reduce mask duration by 1 day."
    ], { trigger: "animals or beast-forms sense the Jikininki", pantheonDice: 0 }),
    truths: ["Aura of Influence (Fear)", "Divinely Skilled (Knowledge)", "First Move", "Flight", "Lash", "Natural Weapons", "Regeneration", "Visions"]
  }),
  kin("Kitsune", 59, {
    skills: { crafts: 1, deception: 1, intuition: 1, marksman: 1, perception: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Average",
    passability: "Flawless or Passable",
    dominion: "Trickery (Crossover)",
    overview: "Fox-born tricksters whose tails mark age, lessons, and increasing supernatural control.",
    blessing: ability("Path of the Nine Tails", 59, "Trickery Dominion, free fox form, hidden Spark, and tail-based bonuses as Spark rises.", [
      "Gain the Trickery Dominion and Beast Form for fox shape without Fragment cost. In fox form, the Kitsune's Spark is hidden from Otherworldly Sight.",
      "Spark 1 grants Stealth bonus. Spark 2 adds Deception. Spark 3 adds Influence and one GM-chosen Dominion. Spark 4 adds one chosen Skill and Manifestation. Spark 5 replaces Trickery with Dreams and adds two chosen Manifestations."
    ], { trigger: "fox form, tail advancement, trickery, or Spark growth" }),
    curse: ability("Crack in the Mask", 59, "Human form depends on a mask and limits Bonds and Attachment aid.", [
      "Human form lasts Spark days before the Kitsune must return to fox form for at least 1 day. Damaged masks reduce human form from Flawless to Passable.",
      "A lost or destroyed mask costs 2 Fragments to recreate before taking human form again.",
      "Maximum Bonds are 5 minus Spark, and Attachment aid can only be called Spark x2 times per Session."
    ], { trigger: "mask damage, extended human form, or Attachment reliance", pantheonDice: 0 }),
    truths: ["Aquatic", "Divinely Skilled (Deception, Fortitude, Stealth, or Survival)", "Healing Hands", "Lash", "Regeneration", "Telepathy", "Unobscured Eyes", "Visions"]
  }),
  kin("Manananggal", 60, {
    skills: { discipline: 1, empathy: 1, intuition: 1, medicine: 1, speed: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Average, or Small in true form",
    passability: "Flawless, or Exposed in split true form",
    dominion: "None",
    overview: "Blood-drinking Outsiders who live as Flawless mortals by day and become flying half-bodied hunters at night.",
    blessing: ability("We Only Come Out At Night", 60, "Blood feeding, prehensile tongue, hidden feeding, night-only true form, natural weapons, fear aura, combat bonuses, and a safehouse Bond.", [
      "Blood is the only normal healing route. The tongue reaches Spark x10 feet, or up to 1 mile for 1 Fragment.",
      "Steal up to Spark blood unnoticed with +2 Stealth. Feeding deals 2 damage per Round and heals Health, Psyche, or Conditions; in true form it can deal 4 damage.",
      "At night, split into a Small flying true form with Natural Weapons, Flight, Aura of Influence (Fear), +2 Initiative, and +2 Fighting, Fortitude, Speed, and Survival.",
      "Gain a Level 2 Landmark Bond safehouse and use The Hearth there once per Session for free."
    ], { trigger: "blood feeding, night form, tongue reach, or safehouse recovery" }),
    curse: ability("Half-Body", 60, "Morbid habits and vulnerability while the lower body is separated.", [
      "Begin with Morbid 2.",
      "If the separated lower body is not rejoined before sunrise, is destroyed, or is covered in salt, the Manananggal must retreat to the safehouse.",
      "Regenerating the legs takes 6 minus Spark plus current Strain days, and Health or Psyche cannot recover until then."
    ], { trigger: "the lower body is threatened, salted, destroyed, or left behind", pantheonDice: 0 }),
    truths: ["Bane", "Beast Form", "Extra Appendages (Head or Arms)", "Healing Hands", "Otherworldly Sight", "Soothing Aura", "Telepathy", "Tongues"]
  }),
  kin("Minotaur", 61, {
    skills: { fighting: 1, fortitude: 1, knowledge: 1, might: 1, survival: 1 },
    resources: { freeTime: 2, wealth: 1 },
    size: "Large",
    passability: "Exposed",
    dominion: "None",
    overview: "Powerful community defenders whose strength, close-range pressure, and territorial loyalty make them natural muscle for a pantheon.",
    blessing: ability("Walking Powerhouse", 61, "Divine Might, natural weapons, enhanced sprinting, close-range armor pressure, impossible lifting, and extra protective Attachment levels.", [
      "Gain Divinely Skilled (Might), Natural Weapons, and double Sprint bonuses.",
      "At Close Range, ignore mundane worn armor and gain 1 Armor against ranged attacks.",
      "Spend 1 Fragment to lift, hold, or move impossibly heavy objects.",
      "Gain +4 levels for Group Bonds, Landmark Bonds, or Vassal Entitlements tied to what the Minotaur protects."
    ], { trigger: "physical force, close combat, sprinting, lifting, or protecting community" }),
    curse: ability("Lost in the Labyrinth", 61, "Reduced territory movement and a stressed beast-within episode.", [
      "Move only 3 territory squares before spending Free Time or Wealth.",
      "After activating a Curse, roll 1d10. On 1-2, the beast within takes over and attacks everyone nearby for 10 minus Discipline Rounds.",
      "Spend 1 Fragment up to three times to reduce the duration by 3 Rounds each."
    ], { trigger: "territory movement or a Curse activation under stress", pantheonDice: 0 }),
    truths: ["Armored", "Bane", "Beast Tongue", "Colossal Size", "Divinely Skilled (Fighting or Might)", "Immunity (Bullets)", "Weapon Break", "Visions"]
  }),
  kin("Ningyo", 63, {
    skills: { discipline: 1, intuition: 1, perform: 1, speed: 1, travel: 1 },
    resources: { freeTime: 0, wealth: 3 },
    size: "Average",
    passability: "Flawless or Exposed",
    dominion: "None",
    overview: "Sea-linked Outsiders whose human beauty, wealth, pearls, and saltwater dependency shape their place in a pantheon.",
    blessing: ability("Pearl of the Ocean", 63, "Aquatic saltwater form, shared Aquatic, Flawless beauty, divine social skill, pearl wealth, and extra social/place Attachment levels.", [
      "Gain Aquatic in saltwater fish form and spend 1 Fragment to give Aquatic to another for the Scene.",
      "On land, appear as a Flawless human and gain Divinely Skilled (Influence) for negotiation or seduction.",
      "Once per Session, spend 1 Fragment to cry pearls worth Spark +1 Wealth.",
      "Gain +3 levels for Individual, Group, or Landmark Bonds."
    ], { trigger: "saltwater, Aquatic sharing, social influence, pearl wealth, or social/place Attachments" }),
    curse: ability("Like Sea Foam", 63, "Lack of saltwater creates Dried Out Conditions and can block Fragment use.", [
      "For each Scene without at least 1 hour submerged in saltwater, gain cumulative Dried Out 1.",
      "Above level 2, Dried Out applies a -1 penalty per excess level to all checks. At level 5, the Ningyo cannot spend Fragments.",
      "A Scene soaking in saltwater lowers Dried Out by 2. Spend 2 Free Time to prevent the next level from being added."
    ], { trigger: "scenes pass without saltwater immersion", pantheonDice: 0 }),
    truths: ["Aura of Influence (Awe)", "Beast Form (Aquatic Creature)", "Divinely Skilled (Deception)", "Lash", "Soothing Aura", "Telepathy", "Tongues", "Unobscured Eyes"]
  }),
  kin("Nunnehi", 64, {
    skills: { athletics: 1, marksman: 1, perception: 1, stealth: 1, survival: 1 },
    resources: { freeTime: 2, wealth: 1 },
    size: "Average",
    passability: "Flawless",
    dominion: "None",
    overview: "Ancient warrior spirits tied to sacred land, built to fight gods and defend territory.",
    blessing: ability("Perfect Warriors", 64, "Divine Fighting and Marksman, extra Pantheon Dice from attacks, Fragment destruction, free movement, fear pressure, and extra Bonds or Worshippers.", [
      "Gain Divinely Skilled for both Fighting and Marksman.",
      "When gaining Pantheon Dice from an attack roll, gain +1 additional die. Against a god, spend 1 Fragment to destroy 2 of the target's Fragments.",
      "During Battle, take Spark free Move Actions each Round.",
      "When defeating a target, enemies test Tough (3) Discipline + Empathy with a penalty equal to Spark or gain Afraid 1. Success instead gives the Nunnehi +1 damage next time they hit that target.",
      "Gain +3 levels for Individual Bonds, Landmark Bonds, or Worshipper Entitlements."
    ], { trigger: "battlefield mastery, attacks against gods, movement, or defeating targets" }),
    curse: ability("Battling the Best", 64, "Dishonorable targets and foreign territory restrict Nunnehi power.", [
      "If the Nunnehi attacks an opponent with Afraid, suffer 1 Psyche damage and Embarrassed 1.",
      "Outside their territory, the Nunnehi lose supernatural abilities. In allied pantheon territory, spend 1 Fragment to access them."
    ], { trigger: "fighting frightened enemies or acting outside Nunnehi territory", pantheonDice: 0 }),
    truths: ["Aquatic", "Bane", "Divinely Skilled (Discipline, Intuition, or Speed)", "First Move", "Flight", "Healing Hands", "Lash", "Telepathy"]
  }),
  kin("Rakshasa", 66, {
    skills: { athletics: 1, discipline: 1, fighting: 1, knowledge: 1, might: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Large",
    passability: "Exposed, or Passable/Flawless for 1 Fragment",
    dominion: "Illusions (Tangible)",
    overview: "Shapeshifting predators and hunters whose violence, leadership, and illusion power can dominate a pantheon if not checked.",
    blessing: ability("Whatever Shape I Please", 66, "Illusions Dominion, larger Fragment capacity, and broad shapeshifting into people, beasts, or Outsiders.", [
      "Gain the Illusions Dominion and 3 Fragments per Spark instead of 2.",
      "Spend 1 Fragment to become a person, beast, or Outsider indefinitely. The GM may grant up to Spark x3 plus 1 temporary Skill or Truth points suited to the form.",
      "Mimicking a specific being can require Deception + Fortitude unless the Rakshasa spends +1 Fragment. Reverting to true form is free at night."
    ], { trigger: "shapeshifting, mimicking, or using Illusions" }),
    curse: ability("Violent Nature", 66, "Violent Failings and increased Pantheon Dice costs.", [
      "Assign 3 levels among Blood Thirsty, Hatred, or Power Failings.",
      "Pantheon Dice expenditures cost +1 die. Pulling dice from the Pantheon Pool also loses 1 die first."
    ], { trigger: "violence, Failings, or Pantheon Dice use", pantheonDice: 0 }),
    truths: ["Any Truth except Aura of Influence (Awe) or Soothing Aura", "Bloodthirsty Power"]
  }),
  kin("Satyr", 67, {
    skills: { deception: 1, influence: 1, perform: 1, speed: 1, survival: 1 },
    resources: { freeTime: 2, wealth: 1 },
    size: "Small",
    passability: "Passable",
    dominion: "None",
    overview: "Fast, charming revelers and informants who move easily through social scenes and territory routes.",
    blessing: ability("Pan's Offspring", 67, "Athletic divine skill, musical talent, faster territory travel, extra social Entitlement levels, and magical revelry.", [
      "Gain Divinely Skilled (Athletics) and +2 Perform with a preferred musical expression.",
      "Move up to 5 territory squares before spending Free Time or Wealth, and companions with the same start and endpoint share this movement.",
      "Gain +4 levels for Individual Bonds, Group Bonds, Vassal Entitlements, or Worshipper Entitlements.",
      "Spend 1 Fragment to play a magical tune. Mortals are swept into revelry; Sparked targets resist with Discipline + Spark against Difficulty equal to Spark plus extra Fragments spent."
    ], { trigger: "music, territory travel, revelry, or social Attachments" }),
    curse: ability("Cowardly", 67, "Cowardice Failing and automatic fear after heavy damage.", [
      "Begin with Cowardice 2.",
      "Any time the Satyr takes 3 or more damage at once, they also gain Afraid 1."
    ], { trigger: "heavy damage or cowardly retreat", pantheonDice: 0 }),
    truths: ["Beast Tongue", "Divinely Skilled (Speed or Survival)", "First Move", "Healing Hands", "Immunity (Mental Control)", "Natural Weapons", "Otherworldly Sight", "Soothing Aura"]
  }),
  kin("Troll", 69, {
    skills: { athletics: 1, fortitude: 1, might: 1, tech: 1, travel: 1 },
    resources: { freeTime: 3, wealth: 0 },
    size: "Large",
    passability: "Exposed",
    dominion: "None",
    overview: "Bridge-guarding, door-smashing Outsiders defined by endurance, strength, tolls, and a mystic duty to guard what is theirs.",
    blessing: ability("Physically Impressive", 69, "Extra Health, divine Might and Fortitude, increased Strength, Fragment-based Strength surges, and a guarded Landmark Bond.", [
      "Gain +2 Health even if this exceeds the normal maximum.",
      "Gain Divinely Skilled for Might and Fortitude, +3 Strength, and the option to spend 1 Fragment up to twice for another +3 Strength for the Scene.",
      "Gain a Level 4 guarded Landmark Bond. When using Home Turf there, gain Spark additional dice and heal 1 Strain when devoting a Scene to it."
    ], { trigger: "strength, endurance, guarding, or using the guarded Landmark" }),
    curse: ability("Dangerous Payment", 69, "Paid tolls prevent violence, excess Wealth disappears, and Trolls cannot give Wealth away.", [
      "When an Extra gifts the Troll 1 or more Wealth, the Troll is mystically urged not to use physical violence for the Scene.",
      "If they deal damage anyway, gain cumulative Confused 1.",
      "Excess Wealth over normal limits disappears at the end of each Scene, and the Troll loses 1 Health per 2 Wealth destroyed. Trolls cannot spend Wealth on others or give Wealth away."
    ], { trigger: "accepting payment, trying violence after payment, or losing excess Wealth", pantheonDice: 0 }),
    truths: ["Armored", "Aura of Influence (Fear)", "Colossal Size", "Divinely Skilled (Fighting)", "Extra Appendages (Head)", "Immunity (Cold or Poisons)", "Natural Weapons (Horns)", "Regeneration"]
  }),
  kin("Weaver", 70, {
    skills: { crafts: 1, empathy: 1, knowledge: 1, medicine: 1, speed: 1 },
    resources: { freeTime: 1, wealth: 2 },
    size: "Large",
    passability: "Exposed",
    dominion: "None",
    overview: "Arachnid fate-shapers who plan, trap, feed, manipulate probability, and draw other Outsiders toward their webs.",
    blessing: ability("Webs of Fate", 70, "Extra legs, visions, web binding, feeding recovery, fate modifiers, and Vassal levels.", [
      "Gain Extra Appendages (Legs) and Visions.",
      "Create a sticky web up to Spark x10 feet in diameter. Touching it requires Moderate (2) Strength or the target is bound for Crafts Rounds or until freed, with Difficulty increasing after failures.",
      "Feeding on a bound victim for 1 minute reduces them to 0 Health and heals 1 damage or lowers 1 Condition per Psyche drained.",
      "Spend 1 Fragment to roll Spark +3 dice. Each success creates a +2 or -2 modifier that can be applied to rolls before the Scene ends.",
      "Gain +2 Vassal levels."
    ], { trigger: "web spinning, feeding, fate manipulation, or Outsider influence" }),
    curse: ability("Burning Hatred", 70, "Fire and heat vulnerability plus hermit-like Failings.", [
      "Suffer -2 to all checks in high heat and take +2 damage from fire or heat sources.",
      "Begin with 3 levels assigned among Apathy, Hatred, or Hoarder Failings."
    ], { trigger: "fire, heat, isolation, or ancient hatred", pantheonDice: 0 }),
    truths: ["Aquatic", "Beast Tongue", "Colossal Size", "Divinely Skilled (Deception, Knowledge, or Stealth)", "Flight", "Lash", "Tongues", "Unleashing the Brood", "Otherworldly Sight"]
  })
];

const OUTLOOKS = [
  outlook("Beacons", 72, {
    skills: { discipline: 1, empathy: 1, fortitude: 1, knowledge: 1, tech: 1 },
    resources: { freeTime: 2, wealth: 4 },
    attachments: [attachment("individual", "Individual Bond", 2), attachment("landmark", "Landmark Bond", 1)],
    overview: "Outsiders who see themselves as guides and guardians for humanity.",
    blessings: [
      ability("Don't Look Back", 72, "Gain +1 Discipline to resist mental attacks or loss of focus, and reduce Confused by 1.", ["Apply this when mission focus or refusal to be distracted is the reason the Beacon holds steady."], { bonus: "+1 Discipline; reduce Confused by 1", trigger: "resisting mental attacks or loss of focus" }),
      ability("Stronger Faith", 72, "Activate one Worshipper Entitlement once per Session for free.", ["The Beacon's protection earns devotion that can be called on without the normal cost once each Session."], { trigger: "activating a Worshipper Entitlement" }),
      ability("Your Pain is Mine", 72, "Heal 2 damage from a mortal or the Touched by taking 1 matching damage yourself.", ["Use up to Spark +1 times per Scene. It affects Health or Psyche damage, not Conditions."], { trigger: "healing a mortal or the Touched", cost: { health: 1 } })
    ],
    curses: [
      ability("Can't Quit You", 72, "Gain +1 Pantheon Die when a protected Individual Bond is endangered by bad timing or proximity.", ["The Outsider's protective attachment becomes a complication when the Bond is in the wrong place at the wrong time."], { pantheonDice: 1, trigger: "an Individual Bond is placed in harm's way" }),
      ability("Hit Me Instead", 72, "Gain +1 Pantheon Die when the Beacon aggressively throws themself into conflict to stop it.", ["Use for physical scuffles, arguments, or any confrontation where protection becomes disruptive aggression."], { pantheonDice: 1, trigger: "jumping aggressively into a conflict" })
    ]
  }),
  outlook("Hands of Slaughter", 73, {
    skills: { deception: 1, fighting: 1, might: 1, perception: 1, stealth: 1 },
    resources: { freeTime: 3, wealth: 3 },
    attachments: [attachment("relic", "Relic Entitlement", 2), attachment("group", "Group Bond", 1)],
    overview: "Outsiders who believe they are the Source's true chosen and that gods must fall.",
    blessings: [
      ability("Bane of Gods", 73, "Gain +1 Fighting against gods and ignore the first level of Pain.", ["Apply when the Hand fights a divine target directly."], { bonus: "+1 Fighting; ignore Pain 1", trigger: "battling a god" }),
      ability("Manifest This!", 73, "Gain Spark automatic successes to resist manifestations, and resist for free Spark times per Session.", ["Track the free resistance uses separately from Fragment-based resistance."], { trigger: "resisting Manifestations" }),
      ability("The Source's Crown", 73, "Gain +1 Influence with Outsiders, plus +1 more for each Spark higher than the target.", ["This reflects claimed status in the Source-born hierarchy."], { bonus: "+1 or more Influence", trigger: "engaging other Outsiders" })
    ],
    curses: [
      ability("Do As I Say", 73, "Gain +1 Pantheon Die when shouting commands causes problems for the group.", ["The Hand's command reflex becomes disruptive instead of helpful."], { pantheonDice: 1, trigger: "commanding others creates trouble" }),
      ability("Shoot On Sight", 73, "Gain +1 Pantheon Die when instinctively attacking a god creates issues for the group.", ["Use when anti-god doctrine overrides restraint."], { pantheonDice: 1, trigger: "attacking a god on instinct" })
    ]
  }),
  outlook("Isolationists", 73, {
    skills: { crafts: 1, fortitude: 1, intuition: 1, marksman: 1, survival: 1 },
    resources: { freeTime: 3, wealth: 3 },
    attachments: [attachment("landmark", "Landmark Bond", 2), attachment("vassal", "Vassal Entitlement", 1)],
    overview: "Outsiders who withdraw from divine and mortal politics to protect a hidden life or sanctuary.",
    blessings: [
      ability("Hold On to What's Important", 73, "Gain +1 Discipline to resist trickery or coercion, and ignore the first level of Convinced.", ["Apply when secrecy, loyalty, or stubborn neutrality is tested."], { bonus: "+1 Discipline; ignore Convinced 1", trigger: "resisting trickery or coercion" }),
      ability("My Fortress", 73, "Increase Home Turf bonuses by +1 for each adjacent point of interest also held by the pantheon.", ["Use when the Isolationist defends or relies on a fortified place."], { trigger: "using a Landmark's Home Turf ability" }),
      ability("Sensing Faint Sparks", 73, "Gain +2 on Spark Reaction to flee and use Sense Spark as if Spark were 1 higher.", ["This improves survival when divine attention gets too close."], { bonus: "+2 Spark Reaction", trigger: "using Spark Reaction or Sense Spark" })
    ],
    curses: [
      ability("How You Say...?", 73, "Gain +1 Pantheon Die when cultural or language barriers break communication and cause problems.", ["Use when isolation makes ordinary interaction costly."], { pantheonDice: 1, trigger: "communication breaks down" }),
      ability("Paranoia", 73, "Gain +1 Pantheon Die when the Outsider treats unfamiliar things as threats and acts suspiciously for the Scene.", ["The suspected threat does not need to be real."], { pantheonDice: 1, trigger: "mistaking the unfamiliar for danger" })
    ]
  }),
  outlook("Navigators", 74, {
    skills: { influence: 1, knowledge: 1, marksman: 1, speed: 1, travel: 1 },
    resources: { freeTime: 2, wealth: 4 },
    attachments: [attachment("vassal", "Vassal or Divine Ally Entitlement", 2), attachment("individual", "Individual Bond", 1)],
    overview: "Outsider diplomats and brokers who move through divine politics, travel routes, and negotiated leverage.",
    blessings: [
      ability("Final Arbiter", 74, "Spend 1 Fragment to halt attacks in a battle between Sparked individuals for Spark Rounds, then gain +1 Influence to de-escalate.", ["This cannot stop one-on-one violence between non-Sparked targets and works best when a trusted word can end the fight."], { trigger: "stopping a battle between Sparked individuals", cost: { fragments: 1 } }),
      ability("Guiding the Way", 74, "Wealth spent by the Navigator for territory travel moves 4 squares instead of 3.", ["Use when travel is being bought with Wealth on the Territory Grid."], { trigger: "spending Wealth for territory travel" }),
      ability("Joint Venture", 74, "Gain +1 to non-Lead follow-up Attachment use and ignore the first level of Hopeless.", ["Apply when the Navigator coordinates support rather than chasing a Lead."], { bonus: "+1 Attachment follow-up; ignore Hopeless 1", trigger: "using non-Lead Attachment support" })
    ],
    curses: [
      ability("Nonnegotiable", 74, "Gain +1 Pantheon Die when negotiations break down because of the Navigator's misstep.", ["Use when diplomacy creates a worse problem."], { pantheonDice: 1, trigger: "a negotiation collapses through the Navigator's fault" }),
      ability("Untrusted", 74, "Gain +1 Pantheon Die when gods or Outsiders treating the Navigator as a traitor endangers the group.", ["The suspicion can be false and still cause trouble."], { pantheonDice: 1, trigger: "being mistaken for a traitor turns dangerous" })
    ]
  }),
  outlook("Stormcallers", 75, {
    skills: { discipline: 1, fighting: 1, marksman: 1, perception: 1, tech: 1 },
    resources: { freeTime: 4, wealth: 2 },
    attachments: [attachment("worshipper", "Worshipper Entitlement", 2), attachment("relic", "Relic Entitlement", 1)],
    overview: "Apocalyptic Outsiders who believe the Descending Storm matters more than present divine politics.",
    blessings: [
      ability("Balancing Force", 75, "Gain +1 Fighting and +1 Marksman against higher-Spark foes; choose one against equal Spark; ignore Afraid 1 against lower Spark.", ["Apply based on the enemy's Spark compared to the Stormcaller."], { bonus: "+1 Fighting and/or Marksman; ignore Afraid 1", trigger: "fighting Sparked enemies" }),
      ability("Eye of the Storm", 75, "Spend 1 Fragment in a group Battle to avoid being targeted while not attacking for Spark x2 Rounds.", ["Extend the duration by sacrificing 1 Pantheon Die per extra Round. The effect ends if the Stormcaller attacks, the duration ends, or they are the last target."], { trigger: "staying untouched during a group battle", cost: { fragments: 1 } }),
      ability("I Am the Storm", 75, "Sacrifice 1 Pantheon Die to force an opponent to target the Stormcaller and gain +1 Armor against invited damage.", ["Use when the Stormcaller draws danger onto themself."], { trigger: "inviting an enemy attack", cost: { pantheonDice: 1 } })
    ],
    curses: [
      ability("Chaos Breeds Chaos", 75, "Gain +1 Pantheon Die when causing havoc creates more trouble for the group.", ["Use when the Stormcaller deliberately kicks the problem open."], { pantheonDice: 1, trigger: "causing havoc creates more havoc" }),
      ability("The Storm Follows", 75, "Gain +1 Pantheon Die when an unfriendly god or Outsider finds the Stormcaller and disrupts the Scene.", ["The divine trouble follows because of what the Stormcaller is."], { pantheonDice: 1, trigger: "an unfriendly divine being disrupts the Scene" })
    ]
  }),
  outlook("Wastrels", 76, {
    skills: { influence: 1, perform: 1, stealth: 1, tech: 1, travel: 1 },
    resources: { freeTime: 5, wealth: 1 },
    attachments: [attachment("group", "Group Bond", 2), attachment("worshipper", "Worshipper Entitlement", 1)],
    overview: "Outsiders who see the end as inevitable and chase pleasure, violence, appetite, and spectacle before it arrives.",
    blessings: [
      ability("First to the Party", 76, "Move diagonally on the Territory Map.", ["Use when diagonal movement would shorten travel or reach a desired scene faster."], { trigger: "territory movement" }),
      ability("Get to the Good Stuff", 76, "Spending 1 Free Time grants +3 to a check instead of +2.", ["Use for Wastrel downtime pressure when immediate pleasure or direct action matters."], { bonus: "+3 from Free Time", trigger: "spending Free Time for a check" }),
      ability("Let's Have Some Fun", 76, "Gain +1 Influence to tempt, seduce, or pull people into revelry, and ignore Embarrassed 1.", ["Apply when the Wastrel makes indulgence contagious."], { bonus: "+1 Influence; ignore Embarrassed 1", trigger: "tempting others into revelry" })
    ],
    curses: [
      ability("Are We Having Fun Yet?", 76, "Gain +1 Pantheon Die when a supposedly funny act is monstrous or seriously problematic.", ["The Wastrel misreads harm as entertainment."], { pantheonDice: 1, trigger: "a prank or thrill causes real trouble" }),
      ability("Party Never Stops", 76, "At the start of each Scene, roll 1 die. On 1-2, lose 1 Wealth; choose to lose 2 Wealth to gain +1 Pantheon Die.", ["Track this before the scene's main action starts."], { pantheonDice: 1, trigger: "between-scene indulgence drains Wealth" })
    ]
  })
];

const PASSABILITY_CURSES = [
  ability("Complete Mayhem", 78, "Exposed Outsiders terrify mortals and draw divine attention when panic breaks out.", [
    "Use when an Exposed Outsider's true appearance causes random mortals to run, scream, or alert local powers.",
    "Gain +1 Pantheon Die when this panic happens."
  ], { sourceName: "Exposed Passability", trigger: "mortal panic exposes the Outsider", pantheonDice: 1 }),
  ability("The Mask Slips", 78, "Passable Outsiders can accidentally reveal something wrong about their nature.", [
    "Use when a Passable Outsider's disguise cracks through a glint, behavior, body detail, or supernatural tell.",
    "Gain +1 Pantheon Die when this halts progress or forces the Outsider to leave before becoming Exposed."
  ], { sourceName: "Passable Passability", trigger: "true nature briefly slips through", pantheonDice: 1 })
];

const OUTSIDER_RULE_POWERS = [
  power("Diluted Spark", 78, "Passive Spark economy for playable Outsiders.", [
    "Outsiders gain 2 Fragments per Spark instead of a god's usual amount.",
    "Their Source connection restores up to 3 Fragments at the beginning of each Session."
  ], { activation: "Passive", target: "Self", duration: "Always", cost: { fragments: 0 } }),
  power("Divine Regeneration", 78, "Fragment-based recovery for Outsiders.", [
    "Spend 1 Fragment to recover either 2 Health or 1 Psyche.",
    "Conditions still recover through their normal rules unless another ability says otherwise."
  ], { activation: "Active", target: "Self", duration: "Instant", cost: { fragments: 1 } }),
  power("Resisting Manifestations", 78, "Outsiders can spend Fragments to resist divine Manifestations.", [
    "Spend 1 Fragment to resist a god's Manifestation using the normal resistance rules.",
    "Outsiders gain +1 to these resistance checks and ignore penalties from existing Conditions.",
    "Outsiders without a Dominion can also use territory bonuses for these checks up to Spark times per Session."
  ], { activation: "Reaction", target: "Self", duration: "One resistance check", cost: { fragments: 1 }, requiresRoll: true }),
  power("Sense Spark", 78, "Outsiders sense Spark like gods do.", [
    "Use the standard Sense Spark procedure from the core rules.",
    "This exists as a reminder that playable Outsiders participate in Spark detection even though they are not gods."
  ], { activation: "Active", target: "Nearby Spark", duration: "Scene", requiresRoll: true }),
  power("Spark Reaction", 78, "A survival reflex when gods enter the scene.", [
    "When a god enters the Scene, the Outsider can immediately try to leave without being noticed.",
    "The check uses an Outsider Spark minus 5 modifier, making weak Outsiders better at avoidance."
  ], { activation: "Reaction", target: "Self", duration: "Immediate escape attempt", requiresRoll: true }),
  power("Outsider Territory and Pantheon Pool", 78, "Attachment territory and Pantheon Pool handling for Outsiders.", [
    "Outsider Attachments add to pantheon territory.",
    "Outsiders with a Dominion use territory bonuses for Manifestation checks. Outsiders without a Dominion use those bonuses to resist Manifestations up to Spark times per Session.",
    "Full pantheon members add to the Pantheon Pool normally. Allied Outsiders outside the pantheon keep a personal pool similar to Hoarder dice and cannot share it."
  ], { activation: "Passive", target: "Pantheon", duration: "Always" })
];

const CONDITIONS = [
  condition("Well-Fed", 49, "physical", "Devourer", "Scene-by-scene hunger state", "Reduce by 1 at the beginning of each Scene or by voluntary expenditure.", [
    "Created when a Devourer eats flesh, one level per pound.",
    "While present, the Devourer gains First Move and Regeneration.",
    "Lower it by 1 to ignore 2 damage or heal 1 damage. At level 0, predatory bonuses and social/knowledge penalties take over."
  ]),
  condition("Dried Out", 63, "physical", "Ningyo", "Until saltwater recovery", "A Scene soaking in saltwater lowers it by 2; spending 2 Free Time can prevent the next increase.", [
    "A Ningyo gains cumulative Dried Out 1 for each Scene without at least 1 hour submerged in saltwater.",
    "Levels above 2 impose a -1 penalty per excess level to all checks.",
    "At level 5, the Ningyo cannot spend Fragments."
  ]),
  condition("Flawless", 81, "crossover", "Outsider passability", "Fades normally", "Renew with the Flawless Jewel by spending 1 Fragment; drops by 1 when the Outsider reveals a true or alternate form.", [
    "Created by the Flawless Jewel at level 5.",
    "While active, the Outsider is regarded as a Flawless mortal instead of Passable or Exposed.",
    "Mundane detection fails; Otherworldly Sight requires Tough (3) Perception + Intuition and other detection such as Sense Spark suffers a Spark x2 penalty.",
    "Abilities connected to the Outsider's normal appearance are suppressed while active."
  ]),
  condition("Primordial Clay", 82, "crossover", "Relic-created servant", "Lowers naturally", "Raise it by spending more Fragments through Primordial Clay.", [
    "Each Fragment spent into Primordial Clay creates one condition level for the owner and gives the sculpted creation 3 points for Skills or Truths.",
    "If biological material from another being is added, a level 3 or higher condition plus 1 Fragment can make a Passable duplicate with limited memories.",
    "The duplicate can attempt Moderate (2) Knowledge + Intuition checks to recall specific information from the original."
  ])
];

const RELICS = [
  relic("Emperor's Spear", 1, 79, "Ask the dead up to three witnessed-life questions.", [
    "Set a skull or disembodied head on the upright spear.",
    "Spend 1 Fragment to ask up to three questions. The answers are truthful but limited to what the dead witnessed in life.",
    "Each head can only be affected once."
  ], { trigger: "questioning a skull or severed head", fragmentCost: 1 }),
  relic("Simple Glamour", 1, 79, "Hide an Outsider's appearance with a fading illusion.", [
    "Apply it to an Outsider to become Flawless for the Scene and Passable for the rest of the day.",
    "The Relic changes perception, not the body: Large bodies still have Large problems and Small bodies still have Small reach.",
    "It has five uses before it must be recharged by spending 1 Fragment."
  ], { trigger: "concealing an Outsider's appearance", fragmentCost: 1 }),
  relic("Echo Boomerang", 2, 80, "Fragment-powered multi-target Far Range attack.", [
    "Spend 1 Fragment to attack Spark x2 additional targets within Far Range with a single Action.",
    "Each subsequent attack suffers a cumulative -1 penalty.",
    "The weapon is built from Nargun stone and returns to the user's hand after the sequence."
  ], { trigger: "attacking multiple targets", fragmentCost: 1 }),
  relic("Demeter Figurine", 2, 80, "Supernatural fertility and crop vitality.", [
    "Spend 1 Fragment to infuse a living creature or land with vitality.",
    "Animals or people can bear multiple young, and a farm can double crop yield.",
    "The effect can work on sterile creatures or barren land."
  ], { trigger: "enhancing fertility or harvest", fragmentCost: 1 }),
  relic("Stones of Abraxas", 2, 80, "Choose Aggression, Protection, or Secrecy when the Relic is acquired.", [
    "A bearer can possess only one type of stone.",
    "Aggression adds +2 damage within Close Range.",
    "Protection grants +2 against Manifestation effects.",
    "Secrecy conceals Spark for a Scene. Outsiders can use their effect Spark x2 times per Session; gods use it Spark times per Session."
  ], { trigger: "using the chosen Abraxas stone effect", fragmentCost: 0 }),
  relic("Aion Charm", 3, 80, "Stops aging and forces rapid maturity or growth.", [
    "The wearer no longer ages normally while the charm is worn.",
    "If already beyond their natural age, removing the charm for more than 1 day causes disintegration.",
    "Putting the charm on a child god, sapling, or similar subject forces immediate maturity or growth. Removing it reverses the effect in Fortitude days."
  ], { trigger: "wearing the charm or placing it on a subject", fragmentCost: 0 }),
  relic("Flawless Jewel", 3, 81, "Creates Flawless 5 to hide an Outsider's true nature.", [
    "Spend 1 Fragment to create a Flawless 5 Condition.",
    "While active, the Outsider is seen as a Flawless mortal. Mundane detection fails, Otherworldly Sight requires Tough (3) Perception + Intuition, and Sense Spark-like methods suffer Spark x2 penalty.",
    "Appearance-linked abilities such as Natural Weapons are suppressed. The Condition fades normally and drops by 1 if the Outsider takes on their true or alternate form."
  ], { trigger: "hiding true nature", fragmentCost: 1 }),
  relic("Pandora's Box", 3, 81, "Steals and stores emotions.", [
    "Spend 1 Fragment and choose an emotion to siphon from a target.",
    "Sparked targets resist with Moderate (2) Discipline + Empathy.",
    "Store up to Spark +2 emotions for up to Spark days, or spend 5 additional Fragments to contain one permanently.",
    "If the box is destroyed, all stored emotions return immediately."
  ], { trigger: "siphoning or storing an emotion", fragmentCost: 1 }),
  relic("Hand of Glory", 4, 81, "Puts a dwelling to sleep and opens its entrances.", [
    "Spend 1 Fragment to open the clenched hand and light its fingers.",
    "Placed along a building boundary, everyone inside falls asleep and entrances open for the user.",
    "One flame expires every 20 minutes, for a maximum of 1 hour. The Relic works once per Session.",
    "Sparked beings resist the sleep with Tough (3) Discipline + Fortitude."
  ], { trigger: "breaking into or disabling a dwelling", fragmentCost: 1 }),
  relic("Shofar", 4, 81, "Brings down buildings with a horn blast.", [
    "Spend 1 Fragment and roll Influence + Fortitude against a Difficulty based on the building's size and structure.",
    "Success collapses the building. The Relic does not directly harm people, but debris and falls are dangerous.",
    "On failure, the user takes 4 damage and suffers Deprived 5."
  ], { trigger: "collapsing a structure", fragmentCost: 1 }),
  relic("Spectrum Belt", 4, 82, "Full recovery with a dangerous rainbow flare.", [
    "Spend 3 Fragments to remove all damage and Conditions.",
    "Activation creates a shining rainbow aura. Hiding automatically fails, and nearby Outsiders are drawn to destroy the belt.",
    "Those attacking the wearer gain +2 Initiative, Attack, Defense, and Damage for the rest of the Scene. If the wearer is an Outsider, halve this attacker bonus."
  ], { trigger: "emergency recovery", fragmentCost: 3 }),
  relic("The Immortal Portrait", 5, 82, "Spark 5 immortality anchored to a fragile painting.", [
    "Requires Spark 5 and investment of 5 permanent Fragments.",
    "The owner ignores physical Conditions and appears healthy while harm is reflected in the portrait.",
    "If the owner loses all Health and Psyche, their Spark is held in the painting and they return after 5 minus Spark days.",
    "If the portrait is destroyed, the owner dies with no recovery."
  ], { trigger: "anchoring immortality to the portrait", fragmentCost: 0 }),
  relic("Primordial Clay", 5, 82, "Create a rough living servant or duplicate.", [
    "Spend Fragments into the clay. Each Fragment creates Primordial Clay 1 for the owner and grants the creation 3 points for Skills or Truths.",
    "With biological material from another being, a level 3 or higher Primordial Clay Condition plus 1 Fragment creates a Passable duplicate.",
    "The duplicate has limited memories and may roll Moderate (2) Knowledge + Intuition to recall specific facts."
  ], { trigger: "sculpting life or creating a duplicate", fragmentCost: 1 })
];

export const OUTSIDERS_GUIDE_ITEMS = [
  ...KIN.map(kinItem),
  ...KIN.flatMap(kin => [blessingItem(kin.blessing, kin.name, "Kin"), curseItem(kin.curse, kin.name, "Kin")]),
  ...OUTLOOKS.map(outlookItem),
  ...OUTLOOKS.flatMap(outlook => [
    ...outlook.blessings.map(entry => blessingItem(entry, outlook.name, "Outlook")),
    ...outlook.curses.map(entry => curseItem(entry, outlook.name, "Outlook"))
  ]),
  ...PASSABILITY_CURSES.map(entry => curseItem(entry, entry.sourceName, "Passability")),
  ...OUTSIDER_RULE_POWERS.map(powerItem),
  ...CONDITIONS.map(conditionItem),
  ...RELICS.map(relicItem)
];

export const OUTSIDERS_GUIDE_ITEM_COUNTS = OUTSIDERS_GUIDE_ITEMS.reduce((counts, item) => {
  counts[item.type] = (counts[item.type] ?? 0) + 1;
  return counts;
}, {});

function kin(name, page, data) {
  return { name, page, ...data };
}

function outlook(name, page, data) {
  return { name, page, ...data };
}

function ability(name, page, summary, details, options = {}) {
  return {
    name,
    page,
    summary,
    details,
    trigger: options.trigger ?? "When the source rule applies.",
    bonus: options.bonus ?? "",
    cost: options.cost ?? {},
    pantheonDice: options.pantheonDice,
    sourceName: options.sourceName
  };
}

function attachment(kind, name, level) {
  return { kind, name, level, choiceKind: kind, choiceLabel: name, requiresDefinition: true };
}

function power(name, page, summary, details, options = {}) {
  return { name, page, summary, details, ...options };
}

function condition(name, page, category, appliesTo, duration, recovery, details) {
  return { name, page, category, appliesTo, duration, recovery, details };
}

function relic(name, level, page, bonus, details, options = {}) {
  return { name, level, page, bonus, details, ...options };
}

function kinItem(entry) {
  const name = `Kin: ${entry.name}`;
  const summary = `${entry.name} is an Outsider Kin choice with ${formatSkills(entry.skills)}, Free Time ${entry.resources.freeTime}, Wealth ${entry.resources.wealth}, ${entry.size} size, ${entry.passability} passability, and ${entry.dominion} Dominion status.`;
  const fullText = choiceDescription(entry, "Kin");

  return baseItem("archetype", name, entry.page, FOLDERS.kin, {
    ...rulesBlock("kin", name, entry.page, summary, fullText, { kind: "choice", trigger: "character-creation", target: "character" }),
    definingTrait: "Outsider Kin",
    attachmentOptions: attachmentOptionsFromText(entry),
    blessingOptions: [abilityOption(entry.blessing, "blessing", entry.name, "Kin")],
    curseOptions: [abilityOption(entry.curse, "curse", entry.name, "Kin")],
    grants: grants(entry.skills, entry.resources, {
      blessing: entry.blessing.name,
      curse: entry.curse.name,
      truthOptions: entry.truths,
      size: entry.size,
      passability: entry.passability,
      dominion: entry.dominion
    }),
    description: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "kin", sourceSection: entry.name });
}

function outlookItem(entry) {
  const name = `Outlook: ${entry.name}`;
  const summary = `${entry.name} is an Outsider Outlook choice with ${formatSkills(entry.skills)}, Free Time ${entry.resources.freeTime}, Wealth ${entry.resources.wealth}, ${formatAttachments(entry.attachments)}, three Blessing options, and two Curse options.`;
  const fullText = choiceDescription(entry, "Outlook");

  return baseItem("occupation", name, entry.page, FOLDERS.outlook, {
    ...rulesBlock("outlook", name, entry.page, summary, fullText, { kind: "choice", trigger: "character-creation", target: "character" }),
    category: "Outsider Outlook",
    career: entry.name,
    careerOptions: [],
    grants: grants(entry.skills, entry.resources, {
      attachments: entry.attachments,
      blessingOptions: entry.blessings.map(item => item.name),
      curseOptions: entry.curses.map(item => item.name)
    }),
    description: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "outlook", sourceSection: entry.name });
}

function blessingItem(entry, sourceName, sourceKind) {
  const name = entry.name;
  const fullText = abilityDescription(entry, sourceName, sourceKind, "Blessing");

  return baseItem("blessing", name, entry.page, FOLDERS.blessing, {
    ...rulesBlock("blessing", name, entry.page, entry.summary, fullText, {
      kind: entry.cost && Object.values(entry.cost).some(Boolean) ? "active" : "triggered",
      trigger: entry.trigger,
      target: "self",
      cost: entry.cost,
      bonus: entry.bonus ? { text: entry.bonus } : null
    }),
    source: `${sourceKind}: ${sourceName}`,
    trigger: entry.trigger,
    bonus: entry.bonus,
    effect: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "blessing", sourceSection: sourceName });
}

function curseItem(entry, sourceName, sourceKind) {
  const name = entry.name;
  const fullText = abilityDescription(entry, sourceName, sourceKind, "Curse");
  const pantheonDice = Number(entry.pantheonDice ?? 0);

  return baseItem("curse", name, entry.page, FOLDERS.curse, {
    ...rulesBlock("curse", name, entry.page, entry.summary, fullText, {
      kind: "triggered",
      trigger: entry.trigger,
      target: "self",
      action: pantheonDice ? "gain-pantheon-dice" : "",
      resourceChange: pantheonDice ? { resource: "pantheonDice", amount: pantheonDice, target: "pantheonPool" } : null,
      enabled: pantheonDice > 0
    }),
    source: `${sourceKind}: ${sourceName}`,
    trigger: entry.trigger,
    pantheonDice,
    effect: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "curse", sourceSection: sourceName });
}

function powerItem(entry) {
  const fullText = ruleDescription(entry, "Outsider Rule");
  const cost = normalizedCost(entry.cost);

  return baseItem("power", entry.name, entry.page, FOLDERS.power, {
    ...rulesBlock("outsider-rule", entry.name, entry.page, entry.summary, fullText, {
      kind: entry.activation === "Passive" ? "passive" : "active",
      trigger: entry.activation ?? "Rules reference",
      target: entry.target ?? "Self",
      cost,
      enabled: false
    }),
    domain: "Outsider",
    manifestation: "",
    rank: 1,
    cost: Number(cost.fragments ?? 0),
    activation: entry.activation ?? "Rules reference",
    duration: entry.duration ?? "",
    range: "",
    target: entry.target ?? "Self",
    requiresRoll: Boolean(entry.requiresRoll),
    difficulty: 1,
    effect: fullText,
    limitations: "",
    notes: sourceNote(entry.page)
  }, { contentKind: "outsider-rule", sourceSection: entry.name });
}

function conditionItem(entry) {
  const fullText = ruleDescription(entry, "Condition");

  return baseItem("condition", entry.name, entry.page, FOLDERS.condition, {
    ...rulesBlock("condition", entry.name, entry.page, entry.details[0], fullText, { kind: "passive", trigger: "condition-applies", target: entry.appliesTo }),
    category: entry.category,
    severity: 1,
    severityMode: "level",
    appliesTo: entry.appliesTo,
    duration: entry.duration,
    recovery: entry.recovery,
    removal: entry.recovery,
    sourcePage: entry.page,
    sourceSection: entry.name,
    rollModifier: null,
    effect: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "condition", sourceSection: entry.name });
}

function relicItem(entry) {
  const fullText = ruleDescription(entry, `Level ${entry.level} Relic`);
  const fragmentCost = Number(entry.fragmentCost ?? 0);

  return baseItem("relic", entry.name, entry.page, FOLDERS.relic, {
    ...rulesBlock("relic", entry.name, entry.page, entry.bonus, fullText, {
      kind: fragmentCost ? "active" : "passive",
      trigger: entry.trigger ?? "use",
      target: "self or target",
      cost: { fragments: fragmentCost },
      action: fragmentCost ? "spend-fragment" : ""
    }),
    choiceSource: SOURCE_BOOK,
    choiceKind: "relic",
    choiceLabel: `Level ${entry.level}`,
    definition: entry.name,
    summary: entry.bonus,
    relatedBonus: paragraph(entry.bonus),
    relatedDetriment: "",
    trigger: entry.trigger ?? "Use the Relic when its fiction applies.",
    actionCost: fragmentCost ? `${fragmentCost} Fragment${fragmentCost === 1 ? "" : "s"}` : "No fixed Fragment cost",
    sourcePage: entry.page,
    automationNotes: paragraph("No direct automation is enabled; use the structured effect text to adjudicate rolls, costs, and consequences."),
    level: entry.level,
    cost: entry.level,
    bonus: entry.bonus,
    benefit: fullText,
    effect: fullText,
    description: fullText,
    notes: sourceNote(entry.page)
  }, { contentKind: "relic", sourceSection: entry.name });
}

function baseItem(type, name, page, folder, system, flags = {}) {
  const slug = slugify(`${type}-${name}`);
  const sourceId = `outsiders-guide.item.${type}.${slug}`;

  return {
    name,
    type,
    img: defaultIcon(type),
    system,
    flags: {
      [MODULE_ID]: {
        sourceId,
        sourceBook: SOURCE_BOOK,
        pdfPage: page,
        folder,
        managed: true,
        ...flags
      },
      [SYSTEM_ID]: {
        sourceBook: SOURCE_BOOK,
        page,
        slug,
        sourceId,
        source: SOURCE_BOOK
      }
    }
  };
}

function rulesBlock(type, name, page, summary, fullText, options = {}) {
  const cost = normalizedCost(options.cost);

  return {
    rules: {
      summary,
      fullText,
      source: {
        book: SOURCE_BOOK,
        page,
        section: name,
        type
      }
    },
    usage: {
      kind: options.kind ?? "narrative",
      trigger: options.trigger ?? "",
      target: options.target ?? "",
      cost
    },
    automation: {
      enabled: options.enabled ?? false,
      action: options.action ?? "",
      bonus: options.bonus ?? null,
      penalty: options.penalty ?? null,
      roll: options.roll ?? null,
      healing: options.healing ?? null,
      damage: options.damage ?? null,
      condition: options.condition ?? null,
      resourceChange: options.resourceChange ?? null,
      chatCard: true
    }
  };
}

function normalizedCost(cost = {}) {
  return {
    freeTime: 0,
    wealth: 0,
    pantheonDice: 0,
    fragments: 0,
    health: 0,
    psyche: 0,
    strain: 0,
    ...cost
  };
}

function choiceDescription(entry, kind) {
  const details = [
    `Skills: ${formatSkills(entry.skills)}.`,
    `Free Time ${entry.resources.freeTime}; Wealth ${entry.resources.wealth}.`
  ];

  if (kind === "Kin") {
    details.push(`Size: ${entry.size}. Passability: ${entry.passability}. Dominion: ${entry.dominion}.`);
    details.push(`Blessing: ${entry.blessing.name} - ${entry.blessing.summary}`);
    details.push(`Curse: ${entry.curse.name} - ${entry.curse.summary}`);
    details.push(`Available Truths: ${entry.truths.join(", ")}.`);
  } else {
    details.push(`Attachments: ${formatAttachments(entry.attachments)}.`);
    details.push(`Blessings: ${entry.blessings.map(item => item.name).join(", ")}.`);
    details.push(`Curses: ${entry.curses.map(item => item.name).join(", ")}.`);
  }

  return section([
    sourceNote(entry.page),
    heading(kind === "Kin" ? `Kin: ${entry.name}` : `Outlook: ${entry.name}`, 2),
    paragraph(entry.overview),
    heading("Rules Summary", 3),
    list(details),
    paragraph(`${kind} entries are character-creation choices. Apply their grants during creation, then use the linked Blessing and Curse items when those rules matter at the table.`)
  ]);
}

function abilityDescription(entry, sourceName, sourceKind, itemKind) {
  return section([
    sourceNote(entry.page),
    heading(entry.name, 2),
    paragraph(`${entry.name} is a ${itemKind} from ${sourceKind}: ${sourceName}.`),
    paragraph(entry.summary),
    heading("Rules", 3),
    list(entry.details),
    itemKind === "Curse" && Number(entry.pantheonDice ?? 0) > 0
      ? paragraph(`When this Curse creates a real complication, add ${entry.pantheonDice} Pantheon ${entry.pantheonDice === 1 ? "Die" : "Dice"}.`)
      : "",
    itemKind === "Curse" && Number(entry.pantheonDice ?? 0) <= 0
      ? paragraph("This Curse is primarily a persistent rule or drawback; do not add Pantheon Dice unless the table chooses to treat the complication as a normal Curse trigger.")
      : ""
  ]);
}

function ruleDescription(entry, label) {
  return section([
    sourceNote(entry.page),
    heading(entry.name, 2),
    paragraph(`${entry.name} is a ${label} entry from ${SOURCE_BOOK}.`),
    list(entry.details)
  ]);
}

function abilityOption(entry, type, sourceName, sourceKind) {
  return {
    name: entry.name,
    sourceName: `${sourceKind}: ${sourceName}`,
    sourcePage: entry.page,
    effect: abilityDescription(entry, sourceName, sourceKind, type === "blessing" ? "Blessing" : "Curse"),
    rulesText: entry.summary,
    pantheonDice: type === "curse" ? Number(entry.pantheonDice ?? 0) : undefined,
    rules: {
      summary: entry.summary,
      fullText: abilityDescription(entry, sourceName, sourceKind, type === "blessing" ? "Blessing" : "Curse"),
      source: {
        book: SOURCE_BOOK,
        page: entry.page,
        section: entry.name,
        type
      }
    },
    usage: {
      kind: type === "curse" ? "triggered" : "narrative",
      trigger: entry.trigger,
      target: "self",
      cost: normalizedCost(entry.cost)
    },
    automation: {
      enabled: false,
      action: "",
      bonus: entry.bonus ? { text: entry.bonus } : null,
      penalty: null,
      roll: null,
      healing: null,
      damage: null,
      condition: null,
      resourceChange: null,
      chatCard: true
    }
  };
}

function attachmentOptionsFromText(entry) {
  const options = [];
  const lower = `${entry.blessing.summary} ${entry.curse.summary}`.toLowerCase();
  if (lower.includes("landmark bond")) options.push(attachment("landmark", "Landmark Bond", lower.includes("level 4") ? 4 : lower.includes("level 3") ? 3 : 2));
  if (lower.includes("vassal")) options.push(attachment("vassal", "Vassal Entitlement", lower.includes("+4") ? 4 : lower.includes("+3") ? 3 : 2));
  if (lower.includes("worshipper")) options.push(attachment("worshipper", "Worshipper Entitlement", 2));
  if (lower.includes("individual")) options.push(attachment("individual", "Individual Bond", 2));
  if (lower.includes("group")) options.push(attachment("group", "Group Bond", 2));
  return options;
}

function grants(skills, resources, extra = {}) {
  return {
    skills,
    manifestations: {},
    resources,
    attachments: extra.attachments ?? {},
    blessing: extra.blessing ?? "",
    curse: extra.curse ?? "",
    ...extra
  };
}

function formatSkills(skills) {
  return Object.entries(skills)
    .map(([skill, value]) => `${titleCase(skill)} +${value}`)
    .join(", ");
}

function formatAttachments(attachments = []) {
  return attachments.map(item => `${item.name} ${item.level > 1 ? `level ${item.level}` : "+1 level"}`).join(", ");
}

function sourceNote(page) {
  return `<p class="ptg2e-outsiders-source-note"><strong>Source:</strong> ${escapeHTML(SOURCE_BOOK)}, PDF page ${page}.</p>`;
}

function section(parts) {
  return `<section class="ptg2e-outsiders-item">${parts.filter(Boolean).join("")}</section>`;
}

function heading(text, level) {
  return `<h${level}>${escapeHTML(text)}</h${level}>`;
}

function paragraph(text) {
  return `<p>${escapeHTML(text)}</p>`;
}

function list(items) {
  return `<ul>${items.filter(Boolean).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function slugify(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(value) {
  return String(value ?? "")
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\b[a-z]/g, char => char.toUpperCase());
}

function defaultIcon(type) {
  return {
    archetype: "icons/sundries/books/book-open-brown.webp",
    occupation: "icons/sundries/documents/document-sealed-signatures-red.webp",
    blessing: "icons/magic/holy/prayer-hands-glowing-yellow.webp",
    curse: "icons/magic/unholy/strike-beam-blood-red-purple.webp",
    power: "icons/magic/symbols/runes-star-pentagon-blue.webp",
    condition: "icons/svg/aura.svg",
    relic: "icons/commodities/treasure/token-gold-gem-purple.webp"
  }[type] ?? "icons/svg/item-bag.svg";
}
