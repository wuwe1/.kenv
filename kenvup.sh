#!/usr/bin/env bash
DIR=$(dirname "${BASH_SOURCE[0]}")
cd "$DIR" || exit

for f in $(ls scripts); do
  src="scripts/$f"
  dst="$HOME/.kenv/scripts/$f"
  [[ "$src" -nt "$dst" ]] && cp -v "$src" "$dst"
done
