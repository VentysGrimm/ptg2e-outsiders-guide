import { OUTSIDERS_GUIDE_ITEMS } from "../data/outsiders-guide-items.mjs";
import { OUTSIDERS_GUIDE_TABLES } from "../data/outsiders-guide-tables.mjs";

const MODULE_ID = "ptg2e-outsiders-guide";
const SYSTEM_ID = "part-time-gods";
const RULES_PACK_ID = `${MODULE_ID}.outsiders-guide-rules`;
const ITEMS_PACK_ID = `${MODULE_ID}.outsiders-guide-items`;
const TABLES_PACK_ID = `${MODULE_ID}.outsiders-guide-tables`;
const RULES_DATA_PATH = "data/outsiders-guide-rules.json";

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing Part-Time Gods 2e: Outsiders Guide`);

  game.settings.register(MODULE_ID, "showSourceNotes", {
    name: "PTG2E_OUTSIDERS.Settings.ShowSourceNotes.Name",
    hint: "PTG2E_OUTSIDERS.Settings.ShowSourceNotes.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once("ready", async () => {
  if (game.system?.id !== SYSTEM_ID) {
    ui.notifications?.warn(game.i18n.localize("PTG2E_OUTSIDERS.Notifications.SystemMismatch"));
    return;
  }

  if (!game.user?.isGM) return;

  try {
    await seedOutsidersGuideContent();
  } catch (error) {
    console.error(`${MODULE_ID} | Failed to seed source-backed content`, error);
    ui.notifications?.error(game.i18n.localize("PTG2E_OUTSIDERS.Notifications.SeedFailed"));
  }
});

async function seedOutsidersGuideContent() {
  const rules = await loadModuleJson(RULES_DATA_PATH);
  await seedPackDocuments({
    packId: RULES_PACK_ID,
    documents: rules,
    documentClass: JournalEntry,
    folderType: "JournalEntry"
  });

  await seedPackDocuments({
    packId: ITEMS_PACK_ID,
    documents: OUTSIDERS_GUIDE_ITEMS,
    documentClass: Item,
    folderType: "Item",
    folderLabel: itemFolderLabel
  });

  await seedPackDocuments({
    packId: TABLES_PACK_ID,
    documents: OUTSIDERS_GUIDE_TABLES,
    documentClass: RollTable,
    folderType: "RollTable",
    folderLabel: tableFolderLabel
  });
}

async function loadModuleJson(path) {
  const route = foundry.utils.getRoute?.(`modules/${MODULE_ID}/${path}`) ?? `modules/${MODULE_ID}/${path}`;
  const response = await fetch(route);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function seedPackDocuments({ packId, documents, documentClass, folderType, folderLabel = null }) {
  const pack = game.packs.get(packId);
  if (!pack) {
    console.warn(`${MODULE_ID} | Missing compendium pack ${packId}`);
    return;
  }

  const wasLocked = pack.locked;
  if (wasLocked && typeof pack.configure === "function") {
    await pack.configure({ locked: false });
  }

  try {
    const folders = folderLabel
      ? await ensurePackFolders(pack, documents, folderType, folderLabel)
      : new Map();
    const existingDocuments = await pack.getDocuments();
    const existingBySourceId = new Map();
    const existingById = new Map();

    for (const document of existingDocuments) {
      const sourceId = document.getFlag?.(MODULE_ID, "sourceId");
      if (sourceId) existingBySourceId.set(sourceId, document);
      if (document.id) existingById.set(document.id, document);
    }

    for (const sourceDocument of documents) {
      const documentData = prepareManagedDocumentData(sourceDocument);
      const sourceId = documentData.flags[MODULE_ID].sourceId;
      const existing = existingBySourceId.get(sourceId) ?? existingById.get(documentData._id);
      const folderName = folderLabel?.(documentData);
      if (folderName && folders.has(folderName)) {
        documentData.folder = folders.get(folderName).id;
      }

      if (existing) await existing.delete();
      await documentClass.create(documentData, { pack: pack.collection });
    }
  } finally {
    if (wasLocked && typeof pack.configure === "function") {
      await pack.configure({ locked: true });
    }
  }
}

async function ensurePackFolders(pack, documents, folderType, folderLabel) {
  const names = Array.from(new Set(documents.map(folderLabel).filter(Boolean)));
  const existingFolders = getPackFolders(pack);
  const folders = new Map();

  for (const name of names) {
    let folder = existingFolders.find(existing => existing.name === name && existing.type === folderType);
    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name,
        type: folderType,
        sorting: "a"
      }], { pack: pack.collection });
      existingFolders.push(folder);
    }
    folders.set(name, folder);
  }

  return folders;
}

function getPackFolders(pack) {
  if (pack.folders?.contents) return Array.from(pack.folders.contents);
  if (pack.folders?.values) return Array.from(pack.folders.values());
  if (pack.folders) return Array.from(pack.folders);
  return game.folders.filter(folder => folder.pack === pack.collection);
}

function itemFolderLabel(documentData) {
  return documentData.flags?.[MODULE_ID]?.folder ?? documentData.type;
}

function tableFolderLabel(documentData) {
  return documentData.flags?.[MODULE_ID]?.folder ?? "Roll Tables";
}

function prepareManagedDocumentData(sourceDocument) {
  const data = foundry.utils.deepClone(sourceDocument);
  const moduleFlags = data.flags?.[MODULE_ID] ?? {};
  const sourceId = moduleFlags.sourceId ?? data._id ?? data.name.slugify({ strict: true });

  data.flags ??= {};
  data.flags[MODULE_ID] = {
    ...moduleFlags,
    sourceId,
    managed: true,
    moduleVersion: game.modules.get(MODULE_ID)?.version ?? "0.1.0"
  };

  return data;
}
