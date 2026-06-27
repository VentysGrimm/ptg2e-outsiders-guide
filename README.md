# Part-Time Gods 2e: Outsiders Guide

Foundry Virtual Tabletop content module scaffold for the Part-Time Gods 2e supplemental book, Outsiders Guide.

This module is intentionally source-backed. Put the PDF in the local-only source folder first, then we can extract, review, curate, and generate Foundry-native content from it.

## Source Drop Zone

Place the book PDF here:

```text
source-material/Outsiders_Guide.pdf
```

The entire `source-material/` working tree is ignored by git except for the README and placeholder files. PDFs, extracted text, caches, images, and source maps should stay local unless you explicitly decide otherwise.

## Module Layout

- `module.json` - Foundry package manifest.
- `scripts/outsiders-guide.mjs` - module initialization and safety checks.
- `styles/outsiders-guide.css` - source-note and supplement styling hooks.
- `lang/en.json` - English localization strings.
- `packs/` - placeholder compendium pack targets.
- `data/` - source index and content planning data.
- `docs/source-workflow.md` - extraction and curation workflow.
- `tools/validate-package.mjs` - lightweight manifest and scaffold validation.

## Development

Run the local checks with:

```powershell
npm.cmd run validate
npm.cmd run check
```

The validator will warn until `source-material/Outsiders_Guide.pdf` is present. That warning is expected for the initial scaffold.

## Foundry Install

For local development, copy or link this folder into:

```text
%LOCALAPPDATA%\FoundryVTT\Data\modules\ptg2e-outsiders-guide
```

Then enable `Part-Time Gods 2e: Outsiders Guide` in a Part-Time Gods world.
