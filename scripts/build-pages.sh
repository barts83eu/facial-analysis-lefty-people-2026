#!/bin/sh
# Build GitHub Pages output into _site/: site/ at the root, report/ at /report/.
# Page sources are body fragments (Claude Artifact format); wrap each in a full document and fill <!--#include sources-xx--> from sources/.
# Deploy: scripts/build-pages.sh && scripts/deploy-pages.sh
set -e
cd "$(dirname "$0")/.."
rm -rf _site
wrap() {
  mkdir -p "$(dirname "$2")"
  {
    printf '<!doctype html>\n<html lang="%s">\n<head>\n<meta charset="utf-8">\n' "${3:-en}"
    printf '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    printf '<style>body{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n'
    printf '</head>\n<body>\n'
    awk '/<!--#include sources-en-->/ { system("cat sources/sources.en.html"); next }
         /<!--#include sources-zh-->/ { system("cat sources/sources.zh.html"); next } { print }' "$1"
    printf '\n</body>\n</html>\n'
  } > "$2"
}
wrap site/index.html _site/index.html
cp -R site/assets _site/assets
wrap report/index.html _site/report/index.html
[ -f site/zh/index.html ] && wrap site/zh/index.html _site/zh/index.html zh-Hans
[ -f report/zh/index.html ] && wrap report/zh/index.html _site/report/zh/index.html zh-Hans
touch _site/.nojekyll
echo "built _site/"
