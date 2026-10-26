# Working on Character Engine

## The files

| Path | What it is |
|---|---|
| `character-engine.naiscript` | **The script to install in NovelAI.** Packed from the source and never edited by hand. |
| `src/character-engine.naiscript` | The full source, about 5 MB. This is the file to edit. NovelAI will not load it. |
| `src/CE-INDEX.md` | The grep directory for the source: every `[TOKEN]`, and the rule it marks. Update it in the same change as the code. |
| `helpers/ce-helper-N.naiscript` | Generation helpers that lend their token allowance to the engine. Installed beside it, never instead of it. |
| `guides/` | Standalone HTML guides (Context, States, Threads). |
| `archive/` | Old full sources kept for reference. Git history has every version, so nothing new goes here. |
| `tools/` | The packer and the load check. |
| `README.md` | The user guide. |

The bridge (`ce-bridge`, the userscript for image generation and the HUD) is published on Greasy Fork and is not in this repository.

## Changing the engine

1. Edit `src/character-engine.naiscript`, and `src/CE-INDEX.md` with it.
2. Bump `version:` and `description:` in the source header by 0.0.1.
3. Push. The **Pack** workflow rebuilds `character-engine.naiscript` from the source, checks that it loads, and commits it to the same branch. A change made in GitHub's web editor works the same way.

To build locally instead:

```
cd tools && npm ci && cd ..
node tools/pack.mjs           # writes character-engine.naiscript
node tools/pack.mjs --check   # fails if the packed file is not the build of the source
node tools/load-test.mjs      # loads the packed file in a stand-in worker
```

## What the packer does

`tools/pack.mjs` turns the 5 MB source into a file of about 1.1 MB that NovelAI will load. It runs in four steps:

1. **Minify.** esbuild strips the TypeScript and minifies the body. The `/*--- ---*/` frontmatter is kept exactly as written.
2. **Round icon paths.** Paths in `CE_ICON_LIB` (an object with `vb` and `parts[].d`) are rounded to about 1/200 of their viewBox and rewritten in the shortest path syntax.
3. **Build the string table.** Every string of 16 or more characters that is not an object key moves into one table, deduplicated. The table is deflated and base85-encoded, and each use becomes `$Q[n]`.
4. **Add the loader.** A small loader in front of the program inflates the table once, when the script loads.

The packer's dependencies are pinned (`esbuild` 0.25.12, `acorn` 8.12.1), so the same source always packs to the same bytes. Packing the 3.14.8 source reproduces the 3.14.8 release byte for byte.
