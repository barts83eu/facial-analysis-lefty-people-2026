# Amber Phosphor Terminal

Short name: `amber-terminal`. A single-theme dark design system that looks like an amber-phosphor CRT terminal reading out research results: a blinking block cursor, shell prompts, log lines scrolling behind the text, ASCII bar charts and hairline grids. Built for data journalism and research explainers where every number is printed like program output.

Source: the Face Politics Terminal site, https://budotsmedia.com/ghostinthemachine/facial-recognition-politics/ (Budots Media, PI Bart Sakwerda, 24–27 Oct 2026). Tokens are copied from its stylesheet.

## Content fundamentals

- **Voice.** Plain declarative sentences that state a result and its size: "Groups: barely. One person: no." No slogans, puns or exclamation marks.
- **Numbers are the content.** Effect sizes, sample sizes and probabilities are printed in full (`r = .22`, `1,085,795`, `4,097 : 1`), in the mono face with tabular numerals. Every on-screen number traces to a source or a script.
- **Shell framing.** One command per hero, after the prompt `budots@lab:~$` (`./verdict --subject=faces --target=political_orientation`), followed by a blinking block cursor. Log lines (`[auc] pairwise=.72 single=.66`) appear only as background texture, never as the place where a fact is stated.
- **Eyebrows encode order.** Band eyebrows are numbered (`01 · is it possible?`) because the bands are a sequence the reader follows.

## Visual foundations

- **Ground.** `void` everywhere; `screen` only for raised console surfaces (stat cells, the bar panel, slots). Single dark theme by design: there is no light variant.
- **Ink.** `phosphor` for text and headings, `phosphor-dim` for secondary text, `cyan` for links, typed commands, focus and the chance baseline, `alert` for at most one alarming figure per screen.
- **CRT layer.** Two fixed overlays above all content, both `pointer-events: none`: scanlines (`repeating-linear-gradient` 2px clear + 1px rgba(0,0,0,.22), multiply) and a vignette (radial, clear to 55%, rgba(0,0,0,.55) at the edge).
- **Bands.** Full-width sections with a `line` top border, padding-block `space-band` (clamp(4rem, 10vw, 7rem)), an inner column max 72rem with 16px safe-area gutters and a console column at most 70ch.
- **Parallax.** Each band carries one background layer moving at 0.15–0.35 of scroll speed: a giant "ghost" word in bold mono at `opacity-ghost`, or log rain at `opacity-rain`. Off under `prefers-reduced-motion`.
- **Grids.** Stat grids and lists use 1px gaps on a `line` background, so the hairlines come from the gap, with square corners (`radius-0`).
- **Glow.** `glow-text` on h1/h2; `glow-panel` only on the hero image. No other shadows.

## Type roles

| Role | Face | Use |
|---|---|---|
| `title` | Terminal mono, 700, uppercase | h1 `display-1`, h2 `display-2`, stat numbers `stat` |
| `mono` | Terminal mono, 400/700 | all running text, rows, ASCII bars, log rain |
| `tiny` | Terminal mono, 11px uppercase, 0.08em | eyebrows, credits, placeholder sizes |

One face for everything: a plain technical monospace, the stack `Consolas, "Cascadia Mono", "SF Mono", Menlo, "DejaVu Sans Mono", "Liberation Mono", "Courier New", monospace`. System fonts only, no web fonts. Hierarchy comes from size, weight and uppercase, never from a second typeface. For Chinese pages add `Noto Sans SC` after the stack (titles at 700, no uppercase).

## Motion

- Block cursor `█` after the command: `animation: blink 1.1s steps(1) infinite` (50% opacity 0).
- Parallax layers as above. Nothing else moves. `prefers-reduced-motion` stops both.

## Components

`Prompt` (command line with blinking cursor), `ConsoleBand` (eyebrow, heading, text in a band), `StatGrid`, `AsciiBars`, `Rows` (label/value list), `PhotoSlot` (placeholder that prints its size), `SourceList` (grouped, collapsible sources). Class names are in `components/bundle.css`, prefixed `at-`.

## Rules

- Placeholders always print their exact size in `tiny-16` (`PHOTO 216 × 270`).
- Links are `cyan`; a hover or focus border on an image link turns `cyan`.
- Charts are ASCII where possible: 40 blocks = 100%, one block = 2.5 points, the chance line in `cyan`.
- Do not: rounded corners, gradients other than the CRT overlays, more than one `alert` figure per screen, display, pixel, condensed or script faces; any typeface outside the mono stack.
