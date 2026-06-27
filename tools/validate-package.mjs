import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

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

const manifestPath = join(root, "module.json");
const manifest = readJson(manifestPath);

if (manifest) {
  for (const field of ["id", "title", "description", "version"]) {
    if (!manifest[field]) errors.push(`module.json is missing "${field}".`);
  }

  if (manifest.id !== "ptg2e-outsiders-guide") {
    errors.push(`module.json id should be "ptg2e-outsiders-guide", found "${manifest.id}".`);
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

if (errors.length) {
  console.error("Package validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Package validation passed.");
if (warnings.length) {
  console.warn("Warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}
