#!/bin/bash
OUTDIR=src/lib/icons

npx svelvg glob=@navikt/aksel-icons/dist/svg outDir=$OUTDIR

ICONS=(src/lib/icons/*.svelte)
sed -i -E 's/(width|height)=\"[^\"]+\"/\1=\"1em\"/g' "${ICONS[@]}"
sed -i -E 's/fill=\"#262626\"/fill=\"currentColor\"/g' "${ICONS[@]}"

npx prettier --plugin-search-dir . --write "${ICONS[@]}"
