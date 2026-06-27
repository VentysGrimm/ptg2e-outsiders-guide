# Source Workflow

## 1. Add the Source

Place the PDF at:

```text
source-material/Outsiders_Guide.pdf
```

Keep raw sources and extracted cache files under `source-material/`. That tree is local-only by default.

## 2. Build the Source Map

Before generating Foundry content, inspect the PDF outline, table of contents, and nearby pages. Record section boundaries in `data/source-index.json`.

Use the PDF viewer page number as the authoritative page reference. Printed page labels may differ from the page number shown by the PDF viewer.

## 3. Curate Before Import

Convert book material into readable Foundry entries instead of one raw dump per PDF page. Prefer chapter or topic journals, and keep mechanical entries as actual Foundry documents where the system supports them.

## 4. Populate Module Packs

Use these pack targets:

- `outsiders-guide-rules` for JournalEntry documents.
- `outsiders-guide-items` for Item documents.
- `outsiders-guide-actors` for Actor documents.
- `outsiders-guide-scenes` for Scene documents.
- `outsiders-guide-tables` for RollTable documents.
- `outsiders-guide-macros` for Macro documents.

## 5. Validate

Run:

```powershell
npm.cmd run validate
npm.cmd run check
```

The initial scaffold validates without the source PDF, but it will warn until the PDF is added.
