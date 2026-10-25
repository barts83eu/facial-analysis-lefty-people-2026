#!/bin/sh
# Build budotsmedia.com/ghostinthemachine/facial-recognition-politics/ into _cf/ (served by the Worker in wrangler.jsonc).
# site/ → the page root, report/ → report/. Page sources are body fragments (Claude Artifact format).
# Deploy: scripts/build-budotsmedia.sh && npx wrangler deploy
set -e
cd "$(dirname "$0")/.."
BASE=/ghostinthemachine/facial-recognition-politics
URL="https://budotsmedia.com$BASE"
OUT="_cf$BASE"
rm -rf _cf
# wrap <fragment> <output> <url> <description> <lang>
wrap() {
  mkdir -p "$(dirname "$2")"
  {
    printf '<!doctype html>\n<html lang="%s">\n<head>\n<meta charset="utf-8">\n' "$5"
    printf '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    printf '<meta name="description" content="%s">\n<link rel="canonical" href="%s">\n' "$4" "$3"
    printf '<meta property="og:type" content="article">\n<meta property="og:url" content="%s">\n' "$3"
    printf '<meta property="og:description" content="%s">\n<meta property="og:site_name" content="BUDOTS MEDIA">\n' "$4"
    printf '<style>body{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n'
    printf '</head>\n<body>\n'
    cat "$1"
    printf '\n</body>\n</html>\n'
  } > "$2"
}
DESC_SITE="What published research shows about predicting political orientation from faces, and what it cannot show about one person in one photo. Budots Media, Ghost in the Machine."
DESC_REPORT="Research report: Kosinski's face and politics studies, effect sizes, single-photo limits, CCTV applicability, critiques and sources."
wrap site/index.html "$OUT/index.html" "$URL/" "$DESC_SITE" en
cp -R site/assets "$OUT/assets"
wrap report/index.html "$OUT/report/index.html" "$URL/report/" "$DESC_REPORT" en
# Optional Chinese versions (site/zh/, report/zh/)
[ -f site/zh/index.html ] && wrap site/zh/index.html "$OUT/zh/index.html" "$URL/zh/" "$DESC_SITE" zh-Hans
[ -f report/zh/index.html ] && wrap report/zh/index.html "$OUT/report/zh/index.html" "$URL/report/zh/" "$DESC_REPORT" zh-Hans
printf '<!doctype html><meta charset="utf-8"><title>404</title><p>Not found. <a href="%s/">Back</a></p>\n' "$BASE" > _cf/404.html
echo "built $OUT"
