import { OUTSIDERS_GUIDE_ITEMS } from "./outsiders-guide-items.mjs";

const MODULE_ID = "ptg2e-outsiders-guide";
const SYSTEM_ID = "part-time-gods";
const SOURCE_BOOK = "Outsider's Guide";
const TABLE_RESULT_TYPES = {
  text: 0
};

const FOLDERS = {
  character: "Character Options",
  gm: "GM Story Tables",
  rules: "Rule Checks",
  reference: "Source References"
};

const OUTSIDER_VARIATIONS = [
  variation("Ahuitzotl", "21", "Warrior", "Waterline broker and ambusher who can lure victims, represent water-bound Outsiders, or negotiate with gods who need an aquatic agent."),
  variation("Basilisk", "21-22", "Warrior", "Hidden poison hazard, illicit magical pet, or trap-creature whose terrain and concealment matter more than raw force."),
  variation("Black-Eyed Children", "22-23", "Warrior", "Moral pressure encounter and omen of death, especially when wicked mortals or a god's mortal attachments are exposed."),
  variation("Camazotz", "23-24", "Master", "Death-linked negotiator, healer, messenger, or blood-drinking ally whose harm can draw nearby kin into the conflict."),
  variation("Catoblepas", "24", "Master", "Slow-moving ecological disaster that damages points of interest and creates territory cleanup problems even after combat ends."),
  variation("Centaurs", "26", "Warrior", "Social, athletic, and martial Outsiders who fit challenge scenes, archery duels, revels, and wilderness faction pressure."),
  variation("Defilers", "26-27", "Warrior", "Saboteur and destroyer of art, beauty, and knowledge; good for attacks on landmarks, archives, monuments, and beloved NPCs."),
  variation("Dryads", "27-28", "Warrior", "Seductive plant-spirit whose home tree turns a location into a moral and tactical anchor."),
  variation("Encantado", "28-29", "Warrior", "Party-going trickster, romantic predator, weather curse, or spreading sickness tied to a territory grid."),
  variation("Flesh-Eating Tree", "29-30", "Squad", "Forest-scale hazard; branches act as extensions, while the hidden trunk is the true objective."),
  variation("Gargoyles", "31-32", "Warrior", "Patient guardian, living architecture, or territorial protector who can repair and reinforce structures."),
  variation("Headless Horsemen", "32-33", "Warrior", "Paid hunter, bounty tracker, or relentless consequence for criminals, debtors, and missing-person plots."),
  variation("Kitsune", "33", "Grand Master", "Trickster, mentor, manipulator, or hidden elder whose age roll can make the encounter sharply more dangerous."),
  variation("Manticores", "34", "Grand Master", "Apex predator and god-hunter; best when the players know it has their scent and must decide what bargain or trap is worth attempting."),
  variation("Mongolian Deathworm", "35", "Squad", "Burrowing swarm threat, black-market monster, or livestock epidemic that spreads unless contained quickly."),
  variation("Nunnehi", "36", "Warrior", "Home-territory defenders who punish divine trespass and fight far above their weight inside claimed locations."),
  variation("Pegasus", "37", "Warrior", "Earned companion, aerial advantage, or test of heroism rather than a simple mount purchase."),
  variation("Perytons", "38", "Warrior", "Roadside predator, wilderness missing-person threat, or infiltrator after a recent kill."),
  variation("Sphinx", "38-39", "Grand Master", "Site-bound guardian of a threshold, relic, labyrinth, or answer that should be earned by solving rather than fighting."),
  variation("Thunderbird", "40", "Master", "Rural storm-maker and aerial striker whose weather can alter perception, ranged combat, and mortal panic."),
  variation("Trolls", "40-41", "Master", "Night-shift brute, enforcer, or ambusher whose knockback and durability make the battlefield matter."),
  variation("Weavers", "41-42", "Master", "Fate-bending arachnid manipulator, social predator, and web-terrain controller."),
  variation("Wyverns", "42", "Grand Master", "Territory-seeking disaster; a Wyvern should threaten the grid directly and escalate if not confronted fast.")
];

const WAR_MOTIVATORS = [
  tableEntry("Blood Feuds", 15, "Ancient grudges and inherited retaliation pull one Outsider group into conflict with another."),
  tableEntry("Insults", 15, "A slight against heritage, honor, appearance, or ancestry sparks an outsized retaliation."),
  tableEntry("Property Destruction and Theft", 16, "A stolen possession, ruined hoard, or desecrated object demands repayment."),
  tableEntry("Subterfuge and Sabotage", 16, "Plots, manipulation, and deliberately ruined plans push a faction into action."),
  tableEntry("Territory Invasion", 16, "Someone crosses a boundary, violates a claimed place, or ignores a supernatural border."),
  tableEntry("Torture and Mutilation", 16, "Cruelty, sadism, or disfigurement turns a private injury into open violence.")
];

const BATTLE_ROLES = [
  tableEntry("Assassin", 16, "A hidden killer uses disguise, stealth, shadow, or illusion to remove a target without clear attribution."),
  tableEntry("Feeder or Predator", 16, "A hungry or animalistic Outsider treats the war as a chance to hunt and feed."),
  tableEntry("Informant", 17, "A broker, spy, or eavesdropper sells secrets about enemy locations, vulnerabilities, or plans."),
  tableEntry("Prisoner of War", 17, "A captive becomes leverage, bait, an information source, or a target of cruelty."),
  tableEntry("Warrior", 17, "A direct combatant brings brute strength, weapons, Relics, or old battlefield experience."),
  tableEntry("Weapon Dealer", 17, "A supplier traffics weapons, death-dealing devices, and modernized Outsider armaments.")
];

const PEACE_ROLES = [
  tableEntry("Guardian", 18, "A defender treats peace as a duty and responds quickly to threats against those under their care."),
  tableEntry("Healer", 18, "A life-preserver works with wounded Outsiders, mortals, or gods despite old hostilities."),
  tableEntry("Pest Hunter", 18, "A cleaner targets Pucks, parasites, or reviled predators that endanger a community."),
  tableEntry("Negotiator", 17, "A broker tries to hold a truce, pact, or peace talk together despite incompatible goals."),
  tableEntry("Gift or Trade Broker", 17, "A practical peacemaker uses tribute, barter, flattery, or appetite to buy cooperation."),
  tableEntry("Neutral Market Enforcer", 18, "A peacekeeper protects a hidden market or neutral exchange where open violence is forbidden.")
];

const KITSUNE_NINE_TAILS = [
  rangeEntry([1, 6], "Young Kitsune", 33, "Use the normal Kitsune antagonist stats."),
  rangeEntry([7, 7], "Older Kitsune: Seasoned", 33, "+2 Threshold, Attack, Defense, and Initiative."),
  rangeEntry([8, 8], "Older Kitsune: Dangerous", 33, "+3 Threshold, Attack, Defense, and Initiative, +1 damage, and 4 dice for Skills."),
  rangeEntry([9, 9], "Older Kitsune: Elder", 33, "+5 Threshold, +3 Attack, Defense, and Initiative, +2 damage, and 4 dice for Skills."),
  rangeEntry([10, 10], "Older Kitsune: Ancient", 33, "+6 Threshold, +4 Attack, Defense, and Initiative, +2 damage, and 5 dice for Skills.")
];

const RULE_CHECKS = [
  {
    name: "Devourer: Eat to Live",
    pdfPages: "49",
    summary: "Use when an Attachment is reduced to 1 or 0 remaining Strain while the Devourer is Well-Fed 0-3.",
    results: [
      rangeEntry([1, 2], "Attachment Destroyed", 49, "The Devourer destroys the thing they care about and the Attachment drops 1 level."),
      rangeEntry([3, 10], "Hunger Contained", 49, "No additional Attachment loss from this check.")
    ]
  },
  {
    name: "Gorgon: Green Intentions",
    pdfPages: "56",
    summary: "Use after the Gorgon devotes or splits a scene with an Attachment.",
    results: [
      rangeEntry([1, 2], "Snakes Lash Out", 56, "Deal 1 Strain to the Attachment; the Gorgon cannot interact with them again for the rest of the Session."),
      rangeEntry([3, 10], "No Backlash", 56, "No extra Strain from this check.")
    ]
  },
  {
    name: "Minotaur: Lost in the Labyrinth",
    pdfPages: "61",
    summary: "Use after the Minotaur activates a Curse.",
    results: [
      rangeEntry([1, 2], "Beast Within", 61, "The Minotaur attacks everything nearby for 10 minus Discipline Rounds; 1 Fragment reduces the duration by 3 Rounds, up to 3 times."),
      rangeEntry([3, 10], "Still in Control", 61, "No beast takeover from this check.")
    ]
  },
  {
    name: "Wastrel: Party Never Stops",
    pdfPages: "76",
    summary: "Use at the beginning of each Scene for a Wastrel with this Curse.",
    results: [
      rangeEntry([1, 2], "Spent Between Scenes", 76, "Lose 1 Wealth, or lose 2 Wealth to gain +1 Pantheon Die."),
      rangeEntry([3, 10], "Kept It Together", 76, "No automatic Wealth loss from this check.")
    ]
  },
  {
    name: "Winter's Calling: Cursed Life",
    pdfPages: "110",
    summary: "Use when a god with Winter's Calling activates a Curse.",
    results: [
      rangeEntry([1, 1], "Collateral Strain", 110, "Cause 1 Strain to the current location or to another character's Attachment if the location is not pantheon-owned, or if this is a Solo Scene."),
      rangeEntry([2, 3], "Curse Spreads", 110, "Another character sharing the Scene must also activate a Curse."),
      rangeEntry([4, 10], "Contained", 110, "No additional Cursed Life effect from this roll.")
    ]
  }
];

const kinItems = OUTSIDERS_GUIDE_ITEMS.filter(item => item.type === "archetype" && item.name.startsWith("Kin: "));
const outlookItems = OUTSIDERS_GUIDE_ITEMS.filter(item => item.type === "occupation" && item.name.startsWith("Outlook: "));
const relicItems = OUTSIDERS_GUIDE_ITEMS.filter(item => item.type === "relic");

export const OUTSIDERS_GUIDE_TABLES = [
  sourceListTable({
    name: "Outsider War Motivator",
    folder: FOLDERS.gm,
    pdfPages: "15-16",
    summary: "Pick a source-backed reason an Outsider conflict escalates.",
    entries: WAR_MOTIVATORS
  }),
  sourceListTable({
    name: "Outsider Battle Role",
    folder: FOLDERS.gm,
    pdfPages: "16-17",
    summary: "Pick an Outsider's function once a conflict has turned violent.",
    entries: BATTLE_ROLES
  }),
  sourceListTable({
    name: "Outsider Peace Role",
    folder: FOLDERS.gm,
    pdfPages: "17-18",
    summary: "Pick an Outsider's role during a truce, market, sanctuary, or fragile peace.",
    entries: PEACE_ROLES
  }),
  sourceListTable({
    name: "Many Variations Outsider",
    folder: FOLDERS.reference,
    pdfPages: "21-42",
    summary: "Pick a bestiary-style Outsider variation from the Many Variations chapter.",
    entries: OUTSIDER_VARIATIONS.map(entry => tableEntry(`${entry.name} (${entry.tier})`, entry.page, entry.summary, {
      sourcePages: entry.pages,
      sourceSection: entry.name
    }))
  }),
  itemReferenceTable({
    name: "Playable Outsider Kin",
    folder: FOLDERS.character,
    pdfPages: "46-70",
    summary: "Pick a playable Outsider Kin option from Step One.",
    items: kinItems,
    textForItem: item => `${trimPrefix(item.name, "Kin: ")}: ${item.system?.rules?.summary ?? item.system?.description ?? ""}`
  }),
  itemReferenceTable({
    name: "Outsider Outlook",
    folder: FOLDERS.character,
    pdfPages: "72-76",
    summary: "Pick a playable Outsider Outlook from Step Three.",
    items: outlookItems,
    textForItem: item => `${trimPrefix(item.name, "Outlook: ")}: ${item.system?.rules?.summary ?? item.system?.description ?? ""}`
  }),
  itemReferenceTable({
    name: "New Relic",
    folder: FOLDERS.reference,
    pdfPages: "79-82",
    summary: "Pick a Relic introduced in Outsider's Guide.",
    items: relicItems,
    textForItem: item => `${item.name} (Level ${item.system?.level ?? "?"}): ${item.system?.summary ?? item.system?.bonus ?? ""}`
  }),
  tableDocument({
    name: "Kitsune Nine Tails of Power",
    folder: FOLDERS.rules,
    pdfPages: "33",
    formula: "1d10",
    summary: "Roll when creating a Kitsune antagonist to determine whether age increases its stats.",
    results: KITSUNE_NINE_TAILS
  }),
  ...RULE_CHECKS.map(entry => tableDocument({
    name: entry.name,
    folder: FOLDERS.rules,
    pdfPages: entry.pdfPages,
    formula: "1d10",
    summary: entry.summary,
    results: entry.results
  }))
];

export const OUTSIDERS_GUIDE_TABLE_COUNTS = OUTSIDERS_GUIDE_TABLES.reduce((counts, table) => {
  const folder = table.flags?.[MODULE_ID]?.folder ?? "Unfoldered";
  counts[folder] = (counts[folder] ?? 0) + 1;
  return counts;
}, {});

function sourceListTable({ name, folder, pdfPages, summary, entries }) {
  return tableDocument({
    name,
    folder,
    pdfPages,
    formula: `1d${entries.length}`,
    summary,
    results: entries.map((entry, index) => ({
      ...entry,
      range: [index + 1, index + 1]
    }))
  });
}

function itemReferenceTable({ name, folder, pdfPages, summary, items, textForItem }) {
  return tableDocument({
    name,
    folder,
    pdfPages,
    formula: `1d${items.length}`,
    summary,
    results: items.map((item, index) => {
      const sourceFlag = item.flags?.[MODULE_ID] ?? {};
      return {
        name: item.name,
        page: sourceFlag.pdfPage ?? item.system?.rules?.source?.page,
        sourceId: sourceFlag.sourceId,
        sourcePages: String(sourceFlag.pdfPage ?? item.system?.rules?.source?.page ?? ""),
        sourceSection: trimPrefix(trimPrefix(item.name, "Kin: "), "Outlook: "),
        summary: textForItem(item),
        range: [index + 1, index + 1]
      };
    })
  });
}

function tableDocument({ name, folder, pdfPages, formula, summary, results }) {
  const sourceId = `outsiders-guide.table.${slugify(name)}`;
  return {
    name,
    img: defaultIcon(folder),
    description: tableDescription(name, pdfPages, summary),
    results: results.map(result),
    formula,
    replacement: true,
    displayRoll: true,
    sort: 100000,
    flags: {
      [MODULE_ID]: {
        sourceId,
        sourceBook: SOURCE_BOOK,
        pdfPages,
        folder,
        managed: true,
        contentKind: "roll-table"
      },
      [SYSTEM_ID]: {
        sourceBook: SOURCE_BOOK,
        page: firstPage(pdfPages),
        slug: slugify(name),
        sourceId,
        source: SOURCE_BOOK
      }
    }
  };
}

function result(entry) {
  const range = entry.range ?? [1, 1];
  const text = resultText(entry);
  return {
    type: TABLE_RESULT_TYPES.text,
    text,
    img: "icons/svg/d20-grey.svg",
    weight: range[1] - range[0] + 1,
    range,
    drawn: false,
    documentCollection: "",
    documentId: null,
    flags: {
      [MODULE_ID]: {
        sourceId: entry.sourceId ?? `outsiders-guide.table-result.${slugify(entry.name)}`,
        sourceBook: SOURCE_BOOK,
        pdfPage: entry.page,
        pdfPages: entry.sourcePages ?? String(entry.page ?? ""),
        sourceSection: entry.sourceSection ?? entry.name,
        managed: true
      },
      [SYSTEM_ID]: {
        sourceBook: SOURCE_BOOK,
        page: entry.page,
        source: SOURCE_BOOK
      }
    }
  };
}

function resultText(entry) {
  const pageText = entry.sourcePages ?? entry.page;
  const source = pageText ? `PDF p. ${pageText}` : SOURCE_BOOK;
  return `<strong>${escapeHTML(entry.name)}</strong> <em>(${escapeHTML(source)})</em>: ${escapeHTML(entry.summary)}`;
}

function tableDescription(name, pdfPages, summary) {
  return [
    "<section class=\"ptg2e-outsiders-table\">",
    `<p class="ptg2e-outsiders-source-note"><strong>Source:</strong> ${escapeHTML(SOURCE_BOOK)}, PDF ${pdfPages.includes("-") ? "pages" : "page"} ${escapeHTML(pdfPages)}.</p>`,
    `<h2>${escapeHTML(name)}</h2>`,
    `<p>${escapeHTML(summary)}</p>`,
    "</section>"
  ].join("");
}

function variation(name, pages, tier, summary) {
  return {
    name,
    pages,
    page: firstPage(pages),
    tier,
    summary
  };
}

function tableEntry(name, page, summary, options = {}) {
  return {
    name,
    page,
    summary,
    ...options
  };
}

function rangeEntry(range, name, page, summary) {
  return {
    name,
    page,
    summary,
    range,
    sourcePages: String(page)
  };
}

function firstPage(value) {
  return Number(String(value ?? "").match(/\d+/)?.[0] ?? 0);
}

function trimPrefix(value, prefix) {
  const text = String(value ?? "");
  return text.startsWith(prefix) ? text.slice(prefix.length) : text;
}

function slugify(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function defaultIcon(folder) {
  return {
    [FOLDERS.character]: "icons/sundries/scrolls/scroll-bound-sealed-red.webp",
    [FOLDERS.gm]: "icons/sundries/gaming/dice-runed-brown.webp",
    [FOLDERS.rules]: "icons/sundries/gaming/dice-runed-tan.webp",
    [FOLDERS.reference]: "icons/sundries/books/book-open-brown.webp"
  }[folder] ?? "icons/svg/d20-grey.svg";
}
