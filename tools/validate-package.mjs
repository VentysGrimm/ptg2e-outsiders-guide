import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { OUTSIDERS_GUIDE_ITEMS } from "../data/outsiders-guide-items.mjs";
import { OUTSIDERS_GUIDE_TABLES } from "../data/outsiders-guide-tables.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const errors = [];
const warnings = [];

function rel(path) {
  return relative(root, path).replaceAll("\\", "/");
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${rel(path)} is not valid JSON: ${error.message}`);
    return null;
  }
}

function requireFile(path, label = "file") {
  if (!existsSync(path) || !statSync(path).isFile()) {
    errors.push(`Missing ${label}: ${rel(path)}`);
  }
}

function requireDirectory(path, label = "directory") {
  if (!existsSync(path) || !statSync(path).isDirectory()) {
    errors.push(`Missing ${label}: ${rel(path)}`);
  }
}

function flattenSections(sections = []) {
  return sections.flatMap((section) => [
    section,
    ...flattenSections(section.children)
  ]);
}

const manifestPath = join(root, "module.json");
const manifest = readJson(manifestPath);
const repositoryUrl = "https://github.com/VentysGrimm/ptg2e-outsiders-guide";
const requiredManifestUrls = {
  url: repositoryUrl,
  manifest: "https://raw.githubusercontent.com/VentysGrimm/ptg2e-outsiders-guide/main/module.json",
  download: "https://github.com/VentysGrimm/ptg2e-outsiders-guide/archive/refs/heads/main.zip",
  readme: `${repositoryUrl}/blob/main/README.md`,
  license: `${repositoryUrl}/blob/main/LICENSE`,
  changelog: `${repositoryUrl}/blob/main/CHANGELOG.md`,
  bugs: `${repositoryUrl}/issues`
};

if (manifest) {
  for (const field of ["id", "title", "description", "version"]) {
    if (!manifest[field]) errors.push(`module.json is missing "${field}".`);
  }

  if (manifest.id !== "ptg2e-outsiders-guide") {
    errors.push(`module.json id should be "ptg2e-outsiders-guide", found "${manifest.id}".`);
  }

  for (const [field, expected] of Object.entries(requiredManifestUrls)) {
    if (manifest[field] !== expected) {
      errors.push(`module.json ${field} should be "${expected}".`);
    }
  }

  const systems = manifest.relationships?.systems ?? [];
  if (!systems.some((system) => system.id === "part-time-gods")) {
    errors.push("module.json should declare a relationship with the part-time-gods system.");
  }

  for (const path of manifest.esmodules ?? []) {
    requireFile(join(root, path), "esmodule");
  }

  for (const path of manifest.styles ?? []) {
    requireFile(join(root, path), "stylesheet");
  }

  for (const language of manifest.languages ?? []) {
    requireFile(join(root, language.path), `language file for ${language.lang}`);
  }

  for (const pack of manifest.packs ?? []) {
    if (!pack.name || !pack.label || !pack.path || !pack.type) {
      errors.push(`Pack entry is incomplete: ${JSON.stringify(pack)}`);
      continue;
    }
    requireDirectory(join(root, pack.path), `pack directory for ${pack.name}`);
  }
}

const gitignorePath = join(root, ".gitignore");
requireFile(gitignorePath, ".gitignore");

if (existsSync(gitignorePath)) {
  const gitignore = readFileSync(gitignorePath, "utf8");
  for (const pattern of ["source-material/*", "source-material/.cache/*"]) {
    if (!gitignore.includes(pattern)) {
      errors.push(`.gitignore should include ${pattern} to keep source files local.`);
    }
  }
}

const sourceReadme = join(root, "source-material", "README.md");
requireFile(sourceReadme, "source material README");

const sourcePdf = join(root, "source-material", "Outsiders_Guide.pdf");
if (!existsSync(sourcePdf)) {
  warnings.push("Source PDF not found yet: source-material/Outsiders_Guide.pdf");
}

const dataFiles = [
  "data/content-plan.json",
  "data/source-index.json",
  "data/outsiders-guide-rules.json"
];

for (const dataFile of dataFiles) {
  const path = join(root, dataFile);
  requireFile(path, "data file");
  if (existsSync(path)) readJson(path);
}

requireFile(join(root, "data", "outsiders-guide-items.mjs"), "item data file");
requireFile(join(root, "data", "outsiders-guide-tables.mjs"), "roll table data file");

const sourceIndex = readJson(join(root, "data", "source-index.json"));
if (sourceIndex) {
  if (sourceIndex.status === "awaiting-source") {
    warnings.push("data/source-index.json still reports awaiting-source.");
  }
  if (!sourceIndex.pdf?.pageCount || sourceIndex.pdf.pageCount < 1) {
    errors.push("data/source-index.json should record the source PDF page count.");
  }
  if (!Array.isArray(sourceIndex.sections) || !sourceIndex.sections.length) {
    errors.push("data/source-index.json should include mapped source sections.");
  }
}

const rules = readJson(join(root, "data", "outsiders-guide-rules.json"));
const ruleSourceIds = new Set();
if (rules) {
  if (!Array.isArray(rules)) {
    errors.push("data/outsiders-guide-rules.json should contain an array of JournalEntry data.");
  } else {
    for (const entry of rules) {
      if (!entry.name) errors.push("A rules journal entry is missing a name.");
      const sourceId = entry.flags?.["ptg2e-outsiders-guide"]?.sourceId;
      if (!sourceId) {
        errors.push(`${entry.name ?? "Rules journal entry"} is missing a module sourceId flag.`);
      } else if (ruleSourceIds.has(sourceId)) {
        errors.push(`Duplicate rules sourceId: ${sourceId}`);
      } else {
        ruleSourceIds.add(sourceId);
      }
      if (!Array.isArray(entry.pages) || !entry.pages.length) {
        errors.push(`${entry.name ?? "Rules journal entry"} should include at least one JournalEntry page.`);
      }
    }
  }
}

const validItemTypes = new Set([
  "occupation",
  "archetype",
  "domain",
  "theology",
  "power",
  "attachment",
  "bond",
  "truth",
  "relic",
  "worshipper",
  "vassal",
  "blessing",
  "curse",
  "condition",
  "gearQuality",
  "weapon",
  "armor"
]);

const itemSourceIds = new Set();
const itemTypeCounts = {};

if (!Array.isArray(OUTSIDERS_GUIDE_ITEMS) || !OUTSIDERS_GUIDE_ITEMS.length) {
  errors.push("data/outsiders-guide-items.mjs should export at least one Item document.");
} else {
  for (const item of OUTSIDERS_GUIDE_ITEMS) {
    const label = item?.name ?? "Outsiders Guide item";
    if (!item.name) errors.push("An item entry is missing a name.");
    if (!validItemTypes.has(item.type)) errors.push(`${label} has invalid item type ${item.type}.`);

    itemTypeCounts[item.type] = (itemTypeCounts[item.type] ?? 0) + 1;

    const sourceId = item.flags?.["ptg2e-outsiders-guide"]?.sourceId;
    if (!sourceId) {
      errors.push(`${label} is missing a module sourceId flag.`);
    } else if (itemSourceIds.has(sourceId)) {
      errors.push(`Duplicate item sourceId: ${sourceId}`);
    } else {
      itemSourceIds.add(sourceId);
    }

    if (!item.flags?.["ptg2e-outsiders-guide"]?.folder) {
      errors.push(`${label} is missing an item folder flag.`);
    }

    const source = item.system?.rules?.source;
    if (source?.book !== "Outsider's Guide" || !Number.isInteger(source?.page) || source.page < 1) {
      errors.push(`${label} is missing a valid Outsider's Guide PDF source page.`);
    }

    const summary = item.system?.rules?.summary ?? item.system?.summary ?? "";
    const fullText = item.system?.rules?.fullText ?? item.system?.description ?? item.system?.effect ?? "";
    if (!String(summary).trim()) errors.push(`${label} is missing a rules summary.`);
    if (!String(fullText).includes("<section")) errors.push(`${label} should include a structured full explanation.`);
  }
}

const requiredItemCounts = {
  archetype: 14,
  occupation: 6,
  blessing: 20,
  curse: 20,
  relic: 13,
  power: 6,
  condition: 4
};

for (const [type, minimum] of Object.entries(requiredItemCounts)) {
  if ((itemTypeCounts[type] ?? 0) < minimum) {
    errors.push(`Expected at least ${minimum} ${type} items, found ${itemTypeCounts[type] ?? 0}.`);
  }
}

const tableSourceIds = new Set();

if (!Array.isArray(OUTSIDERS_GUIDE_TABLES) || !OUTSIDERS_GUIDE_TABLES.length) {
  errors.push("data/outsiders-guide-tables.mjs should export at least one RollTable document.");
} else {
  for (const table of OUTSIDERS_GUIDE_TABLES) {
    const label = table?.name ?? "Outsiders Guide roll table";
    if (!table.name) errors.push("A roll table entry is missing a name.");
    if (!table.formula) errors.push(`${label} is missing a formula.`);
    if (!Array.isArray(table.results) || !table.results.length) {
      errors.push(`${label} should include at least one result.`);
    }

    const sourceId = table.flags?.["ptg2e-outsiders-guide"]?.sourceId;
    if (!sourceId) {
      errors.push(`${label} is missing a module sourceId flag.`);
    } else if (tableSourceIds.has(sourceId)) {
      errors.push(`Duplicate table sourceId: ${sourceId}`);
    } else {
      tableSourceIds.add(sourceId);
    }

    if (!table.flags?.["ptg2e-outsiders-guide"]?.folder) {
      errors.push(`${label} is missing a table folder flag.`);
    }

    const sourcePage = table.flags?.["part-time-gods"]?.page;
    if (!Number.isInteger(sourcePage) || sourcePage < 1) {
      errors.push(`${label} is missing a valid Outsider's Guide PDF source page.`);
    }

    const description = String(table.description ?? "");
    if (!description.includes("<section")) {
      errors.push(`${label} should include a structured description.`);
    }

    for (const result of table.results ?? []) {
      const resultLabel = result?.text ?? `${label} result`;
      if (!String(resultLabel).trim()) errors.push(`${label} has an empty result text.`);
      if (!Array.isArray(result.range) || result.range.length !== 2) {
        errors.push(`${label} has a result with an invalid range.`);
      }
      if (!Number.isInteger(result.flags?.["ptg2e-outsiders-guide"]?.pdfPage) || result.flags["ptg2e-outsiders-guide"].pdfPage < 1) {
        errors.push(`${label} has a result missing a valid PDF source page.`);
      }
    }
  }
}

if ((OUTSIDERS_GUIDE_TABLES?.length ?? 0) < 8) {
  errors.push(`Expected at least 8 roll tables, found ${OUTSIDERS_GUIDE_TABLES?.length ?? 0}.`);
}

if (sourceIndex && ruleSourceIds.size) {
  for (const section of flattenSections(sourceIndex.sections)) {
    if (section.status !== "curated" || section.pack !== "outsiders-guide-rules") continue;
    if (!section.documentId) {
      errors.push(`Curated rules section ${section.id} is missing documentId.`);
    } else if (!ruleSourceIds.has(section.documentId)) {
      errors.push(`Curated rules section ${section.id} points to missing sourceId ${section.documentId}.`);
    }
  }
}

if (errors.length) {
  console.error("Package validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Package validation passed.");
console.log(`Validated ${OUTSIDERS_GUIDE_ITEMS.length} Outsiders Guide item documents.`);
console.log(`Validated ${OUTSIDERS_GUIDE_TABLES.length} Outsiders Guide roll table documents.`);
if (warnings.length) {
  console.warn("Warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}
