#!/bin/sh
# Force-push _site/ as the gh-pages branch (Pages source: gh-pages, /).
set -e
cd "$(dirname "$0")/../_site"
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy Pages from $(git -C .. rev-parse --short HEAD)"
git -c credential.helper= -c 'credential.helper=!gh auth git-credential' \
  push -f https://github.com/barts83eu/facial-analysis-lefty-people-2026.git gh-pages
rm -rf .git
