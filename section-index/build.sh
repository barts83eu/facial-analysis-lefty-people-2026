#!/bin/sh
# Copy site/ to _out/ (served by wrangler.jsonc) and fill links from ../site/links.env.
set -e
cd "$(dirname "$0")"
. ../site/links.env
[ -n "$R2U_URL" ] || { echo "../site/links.env: R2U_URL is empty" >&2; exit 1; }
rm -rf _out && cp -R site _out
find _out -name '*.html' -exec sed -i '' "s|__R2U_URL__|$R2U_URL|g" {} +
echo "built section-index/_out"
