#!/bin/bash
OUTDIR=src/lib/icons

if [ ! -d "$OUTDIR" ]; then
  mkdir -p "$OUTDIR"
fi

# Check if bun is installed
if ! command -v bun &> /dev/null
then
    echo "bun could not be found"
    exit
fi

bun ./src/icons/generate.ts

ICONS=(src/lib/icons/*.svelte)
bun x prettier --write "${ICONS[@]}"
