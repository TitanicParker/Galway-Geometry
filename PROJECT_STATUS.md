# Galway Geometry Project Status

## Handoff Context

Galway Geometry is being created by a GPT user working with ChatGPT as a development partner. The user owns the project direction, taste, terminology, and public positioning. Future GPT sessions should treat the repository as the active source of truth, while preserving the user's established intent.

The user wants an all-HTML public site, friendly to GitHub Pages, with no framework requirement and no build system unless explicitly introduced later. The site should feel like a public visual geometry destination: aesthetic, practical, browsable, and usable.

The public front door is not a theorem manifesto. It is a mode gateway for geometric experience.

## Governing Front Door: Four Modes

The home page is a four-mode gateway. This is the governing organizing principle for the public site.

The first choice a visitor sees is:

```text
Colouring
Constructions
Stills
Ordinary Website
```

Mode meanings:

- Colouring: aesthetic appreciation of lawful colouring-style candidates first; later print, download, colour, or generate variants.
- Constructions: aesthetic appreciation of lawful composition/decomposition plate candidates first; later keep, mine, or promote to reader/registry.
- Stills: aesthetic appreciation of still visual candidates first; later keep, download, or promote to gallery/download routes.
- Ordinary Website: the conventional route map for visitors who want the normal site architecture: gallery, field canvas, exhibitions, books, notes, workshops, and project pages.

Current mode routes:

```text
Colouring -> modes/colouring/
Constructions -> modes/constructions/
Stills -> modes/stills/
Ordinary Website -> site/
```

Construction Mode remains available as a small builder link, but it is no longer the public organizing principle.

## Governing Interaction Model: Tinder Appreciation Surface

The three visual modes now share the same interaction grammar.

The first experience is not making.

The first experience is choosing.

Each visual mode should present:

```text
one full-screen lawful candidate
bottom × and ✓ controls
swipe/pass/keep decision
next candidate after decision
kept drawer
export taste
SVG download when relevant
```

This applies to:

```text
modes/colouring/index.html
modes/constructions/index.html
modes/stills/index.html
```

Shared Tinder shell:

```text
assets/js/mode-tinder.js
```

Mode adapters:

```text
assets/js/mode-colouring-tinder.js
assets/js/mode-constructions-tinder.js
assets/js/mode-stills-tinder.js
```

The point is aesthetic appreciation by decision. The user is not asked to understand the repository, select from a catalogue, or navigate a dashboard before seeing value.

Colouring Mode does not mean user-as-child-with-crayon first. It means lawful colouring-style images are presented as candidates for appreciation. Making, printing, downloading, and colouring come after selection.

Constructions Mode does not mean a list of plates. It means one construction fills the viewport and runs as a candidate for taste.

Stills Mode does not mean a gallery grid first. It means one still fills the viewport and is judged.

Ordinary Website is the only mode where conventional menus and route maps are appropriate.

## Native Mode Extraction

The reservoirs are no longer only linked as file-like prototype pages. Extraction has begun.

Native/source mode engines:

```text
assets/js/mode-constructions.js
assets/js/mode-stills.js
```

Colouring Mode directly loads the colouring recipe/renderer scripts:

```text
construction/recipes[1].js
construction/renderer[1].js
```

Constructions Mode renders from `assets/js/mode-constructions.js` through the Tinder adapter.

Stills Mode renders from `assets/js/mode-stills.js` through the Tinder adapter.

The prototype reservoirs remain valuable source material, but the public modes should increasingly use native Galway pages and shared engines rather than framed reservoir files or file-like lists.

## Construction Dashboard and Reservoir Mining

The construction dashboard remains available at:

```text
construction/index.html
```

The active construction/source assets are:

```text
construction/galway_geometry_100_plate_catalogue.html
construction/galway_geometry_site_population_reservoir.html
construction/colouring-generator/
miscellaneous-visuals/index.html
visual-reservoirs/index.html
```

The first is the 120 Plate Reservoir: a standalone catalogue of lawful runtime/still plates.

The second is the Site Population Reservoir: a mineable asset library for Gallery, Colouring, Tessellations, Exhibitions, Daily Geometry, Construction Mode, Downloadable SVG Sheets, and renderer view modes.

The third is the Colouring Generator: a deterministic lawful colouring-sheet tool reachable through the `construction/colouring-generator/` wrapper, and partially unpacked into `modes/colouring/`.

The Visual Reservoirs index is the canonical doorway for designer-made source material:

```text
visual-reservoirs/index.html
```

A controlled holding area exists for surplus lawful visual material:

```text
miscellaneous-visuals/index.html
```

Anything lawful but not directly integrated should be staged there rather than lost.

## Lawful Visual Constraint

The central quality rule is explicit:

No geometry image should betray the lawfulness of the field.

This is not a slogan for the public site. It is an internal production rule. Any SVG preview, gallery image, visual plate, mandala, tessellation, or generated field drawing should be built from, or visibly consistent with, the lawful substrate.

The lawful substrate is the unit triangular field generated from the fixed compass radius. A visual geometry element should use lawful stations, lawful circle centres, lawful equal-radius circles, lawful unit chords, lawful equilateral cells, lawful diameters, lawful field coordinates, or authored plate events that preserve those relations.

UI panels, cards, buttons, and ordinary page layout may use normal HTML boxes. The constraint governs visual geometry and visual claims.

The full quality note is recorded at:

```text
notes/lawful-visual-quality.md
```

## Reservoir and Generator Integration

The following routes are now wired to the population reservoir, visual reservoir index, generator, native mode pages, and/or Tinder mode pages:

```text
workshops/colouring/index.html
workshops/tessellations/index.html
field-canvas/tessellations/index.html
field-canvas/export/index.html
miscellaneous-visuals/index.html
construction/index.html
gallery/index.html
visual-reservoirs/index.html
site/index.html
modes/colouring/index.html
modes/constructions/index.html
modes/stills/index.html
```

Colouring Workshop links to:

```text
construction/colouring-generator/
construction/galway_geometry_site_population_reservoir.html#colouring-assets
construction/galway_geometry_site_population_reservoir.html#downloadable-svg-sheets
```

Visual Reservoirs links to the source reservoirs and mined routes:

```text
construction/galway_geometry_100_plate_catalogue.html
construction/galway_geometry_site_population_reservoir.html
construction/colouring-generator/
miscellaneous-visuals/index.html
gallery/
workshops/colouring/
workshops/tessellations/
field-canvas/tessellations/
field-canvas/export/
```

Next extraction targets:

- verify all four gateway routes open correctly;
- test the Tinder shell on mobile and desktop;
- patch Colouring Mode / renderer if any generated SVG appears blank or too faint;
- add persistent taste storage if local session state is not sufficient;
- permanent downloadable SVG sheets;
- gallery still subsets;
- colouring sheet pages;
- tessellation download files;
- exhibition visuals;
- renderer modes for `assets/js/substrate-viewport.js`;
- selected plates for `assets/js/plate-registry.js`.

## Current Status

The repository now has a four-mode public gateway, Tinder-style Colouring/Constructions/Stills appreciation modes, a normal website mode route, shared styling, shared scripts, documentation, a custom 404, GitHub Pages support, a basic field canvas tool, a plate reader engine, repaired section roots, repaired child routes, a Daily Geometry prototype, a shared substrate viewport system, an initial Plate Deck, a registry-connected Plate Engine route, a Construction Mode dashboard behind the public front door, two major visual reservoirs, a Visual Reservoirs index, a Miscellaneous Visuals holding route, and a Colouring Generator wrapper.

## What Works Now

- Home page is a four-mode gateway: Colouring, Constructions, Stills, Ordinary Website.
- Colouring Mode exists at `modes/colouring/index.html` and is now a Tinder-style appreciation surface.
- Constructions Mode exists at `modes/constructions/index.html` and is now a Tinder-style appreciation surface.
- Stills Mode exists at `modes/stills/index.html` and is now a Tinder-style appreciation surface.
- Shared Tinder shell exists at `assets/js/mode-tinder.js`.
- Colouring Tinder adapter exists at `assets/js/mode-colouring-tinder.js`.
- Constructions Tinder adapter exists at `assets/js/mode-constructions-tinder.js`.
- Stills Tinder adapter exists at `assets/js/mode-stills-tinder.js`.
- Ordinary Website Mode exists at `site/index.html`.
- Visual Reservoirs index exists at `visual-reservoirs/index.html`.
- Construction dashboard exists at `construction/index.html`.
- 120 Plate Reservoir exists at `construction/galway_geometry_100_plate_catalogue.html` as source material.
- Site Population Reservoir exists at `construction/galway_geometry_site_population_reservoir.html` as source material.
- Colouring Generator is reachable at `construction/colouring-generator/` through a wrapper and script aliases.
- Miscellaneous Visuals holding area exists at `miscellaneous-visuals/index.html`.
- Colouring Workshop is wired to the Colouring Generator and reservoir assets.
- Tessellations Workshop is wired to reservoir assets.
- Field Canvas Tessellations is wired to reservoir assets.
- Field Canvas Export is wired to reservoir assets.
- Gallery is wired to Visual Reservoirs.
- Major section landing pages exist.
- Shared CSS exists.
- Shared JavaScript exists.
- Custom 404 exists.
- `.nojekyll` exists.
- Field Canvas v0.1 exists at `field-canvas/paint/app.html`.
- Geometry field engine exists at `assets/js/geometry-field.js`.
- Substrate viewport renderer exists at `assets/js/substrate-viewport.js`.
- Plate registry exists at `assets/js/plate-registry.js` and includes authored sequences.
- Plate Deck exists at `plates/index.html`.
- Plate Reader page controller exists at `assets/js/plate-reader-page.js`.
- Plate Engine route reads `?plate=<id>` and executes the selected plate sequence.
- Daily Geometry static prototype exists at `daily/index.html` and uses a substrate viewport.
- All Gallery child visual routes use substrate viewports.
- All Books child visual routes use substrate viewports.
- Lawful visual quality rule exists at `notes/lawful-visual-quality.md`.

## Known Risks

1. The Tinder shell needs browser verification across all three visual modes.
2. Colouring Mode needs browser verification; if selected SVG appears blank or too faint, renderer visibility must be patched.
3. The Tinder shell currently keeps choices in memory during the page session and exports JSON; persistent localStorage may be added next.
4. The native Constructions and Stills engines are first-pass extractions, not full extractions of every reservoir capability.
5. Reservoir pages are standalone prototypes; they should continue to be mined, not blindly merged.
6. Plate sequences in the older Plate Engine still switch rendered states; they do not yet animate individual geometric primitives continuously inside one SVG timeline.
7. The substrate viewport renderer has only a small set of visual views: `minimal`, `field`, `diameters`, and `catalogue`.
8. Exhibitions and Readers prepared routes still need viewport conversion except where a true authored plate event is intended.
9. Section roots and notes HTML pages may still carry independent inline SVG previews.
10. Some generated child pages may still be thin and need richer visual content.
11. `index.html` at site root is simple but still carries inline CSS rather than shared assets.
12. The older `assets/js/plate-engine.js` is still only v0.1 and should be reconciled with the registry-connected reader route.
13. The field canvas exports SVG, but PNG export, undo, save/load, and symmetry painting remain unfinished.
14. Stable extracted downloadable SVG assets are not yet present as separate files.

## Immediate Next Work

Priority 1: Verify and stabilize Tinder modes.

- Test `modes/colouring/` in browser.
- Test `modes/constructions/` in browser.
- Test `modes/stills/` in browser.
- Confirm pass/keep buttons advance candidates.
- Confirm swipe gestures work.
- Confirm kept drawer works.
- Confirm SVG download works.
- Patch any blank rendering, mobile layout, or path issues.

Priority 2: Improve taste engine.

- Add localStorage persistence for kept candidates.
- Add a clearer review/export page for kept candidates.
- Use kept/rejected choices to influence candidate order.
- Add separate print/download actions for Colouring candidates.

Priority 3: Mine the reservoirs into stable assets.

- Extract permanent downloadable SVG sheets.
- Extract a first gallery still subset.
- Extract colouring sheet pages or downloadable files.
- Extract tessellation download files.
- Extract selected exhibition visuals.
- Extract reusable renderer modes into `assets/js/substrate-viewport.js`.
- Extract selected plates into `assets/js/plate-registry.js`.

Priority 4: Continue lawful viewport conversion and cleanup.

- Convert Exhibitions prepared routes to substrate viewport declarations where appropriate.
- Convert Readers prepared routes to substrate viewport declarations where appropriate.
- Keep independent SVG only when it is authored as a true plate event and still obeys the substrate.
- Refactor inline CSS/JS into shared assets when the mode structure settles.

## Working Principle for Future GPT Sessions

The first organizing principle is the four-mode gateway: Colouring, Constructions, Stills, Ordinary Website.

The second organizing principle is the Tinder appreciation surface for visual modes.

The visual mode pages should be decision experiences, not file listings, not framed reservoir pages, and not dashboards.

Do not let the site collapse back into an overgrown list of routes.

Do not drift into manifesto language on the public landing page.

Do not reinterpret pictures as generic photos. In this project, pictures should mean generated lawful geometry, visual plates, tessellations, mandalas, field drawings, SVG previews, or geometric artifacts.

Do not bury the visitor in theory at the front door. The front page should ask the visitor what kind of experience they want.

During construction, keep Construction Mode available as the working surface, but do not let it dominate the public home page.

During reservoir mining, treat the construction reservoir files as source material, not final architecture.

Anything lawful but not directly integrated should go through Miscellaneous Visuals rather than being lost.

The site is lawful geometry. No image should betray the field.

A visual area should be a viewport onto the substrate unless there is a specific reason for an authored plate-specific SVG.

The plate is code for the reader/renderer, not prose for the visitor.

The user strongly prefers momentum. When using the GitHub connector, proceed with concrete repository operations and request permissions as needed. Avoid stopping after each micro-step unless there is a real uncertainty or failure.

## Short Continuation Prompt For A New Conversation

You are continuing work on `TitanicParker/Galway-Geometry`, an all-HTML GitHub Pages site created by a GPT user with ChatGPT as development partner. The public home page is a four-mode gateway: Colouring, Constructions, Stills, Ordinary Website. This is the governing organizing principle. The three visual modes are Tinder-style appreciation surfaces: one full-screen lawful candidate, bottom ×/✓ decision controls, kept drawer, export taste, SVG download. Start from `index.html`, `modes/colouring/index.html`, `modes/constructions/index.html`, `modes/stills/index.html`, `assets/js/mode-tinder.js`, `assets/js/mode-colouring-tinder.js`, `assets/js/mode-constructions-tinder.js`, `assets/js/mode-stills-tinder.js`, `assets/js/mode-constructions.js`, `assets/js/mode-stills.js`, `site/index.html`, `visual-reservoirs/index.html`, `construction/index.html`, the two reservoir HTML files, `miscellaneous-visuals/index.html`, `PROJECT_STATUS.md`, `notes/management-plan.md`, `notes/site-architecture.md`, and `notes/lawful-visual-quality.md`. Preserve the user's public direction: Galway Geometry is a practical/aesthetic visual geometry site for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and deeper constructional geometry. Do not turn the public front page into a theorem manifesto. Do not let the site collapse back into an overgrown list of routes. Do not make visual modes into dashboards. Confirm that no geometry image betrays the lawful substrate. Continue from the current priorities: verify/stabilize Tinder modes, improve taste engine persistence, mine reservoirs into stable assets, continue lawful viewport conversion, prepare public v1 cleanup.
