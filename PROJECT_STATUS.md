# Galway Geometry Project Status

## Handoff Context

Galway Geometry is being created by a GPT user working with ChatGPT as a development partner. The user owns the project direction, taste, terminology, and public positioning. Future GPT sessions should treat the repository as the active source of truth, while preserving the user's established intent.

The user wants an all-HTML public site, friendly to GitHub Pages, with no framework requirement and no build system unless explicitly introduced later. The site should feel like a public visual geometry destination: aesthetic, practical, browsable, and usable.

The public front door is not a theorem manifesto. It is a mode gateway for geometric experience.

## Governing Front Door: Four Modes

The home page is now a four-mode gateway. This is the governing organizing principle for the public site.

The first choice a visitor sees should be:

```text
Colouring
Constructions
Stills
Ordinary Website
```

Mode meanings:

- Colouring: printable and digital colouring sheets, mandalas, lawful rings, overlaps, cells, and the colouring generator.
- Constructions: composition/decomposition, animated reader plates, Plate Deck, and exhibitions.
- Stills: images that are simply there: gallery stills, visual reservoirs, poster studies, downloads, and mined visual material.
- Ordinary Website: the conventional route map for visitors who want the normal site architecture: gallery, field canvas, exhibitions, books, notes, workshops, and project pages.

Current mode routes:

```text
Colouring -> workshops/colouring/
Constructions -> readers/plate-engine/?plate=diameter-study
Stills -> visual-reservoirs/
Ordinary Website -> site/
```

The ordinary website route was added at:

```text
site/index.html
```

Construction Mode remains available as a small builder link, but it is no longer the public organizing principle.

## Construction Dashboard and Reservoir Mining

The construction dashboard remains available at:

```text
construction/index.html
```

The active construction assets are:

```text
construction/galway_geometry_100_plate_catalogue.html
construction/galway_geometry_site_population_reservoir.html
construction/colouring-generator/
miscellaneous-visuals/index.html
visual-reservoirs/index.html
```

The first is the 120 Plate Reservoir: a standalone catalogue of lawful runtime/still plates.

The second is the Site Population Reservoir: a mineable asset library for Gallery, Colouring, Tessellations, Exhibitions, Daily Geometry, Construction Mode, Downloadable SVG Sheets, and renderer view modes.

The third is the Colouring Generator: a deterministic lawful colouring-sheet tool now reachable through the `construction/colouring-generator/` wrapper.

The Visual Reservoirs index is the canonical doorway for designer-made visual material:

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

The following previously underpopulated routes are now wired to the population reservoir, visual reservoir index, and/or generator:

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

- fix or verify the Colouring Generator visible SVG rendering;
- permanent downloadable SVG sheets;
- gallery still subsets;
- colouring sheet pages;
- tessellation download files;
- exhibition visuals;
- renderer modes for `assets/js/substrate-viewport.js`;
- selected plates for `assets/js/plate-registry.js`.

## Substrate Viewport Implementation

The site has a shared substrate viewport renderer:

```text
assets/js/substrate-viewport.js
```

It uses the base field engine:

```text
assets/js/geometry-field.js
```

A page may declare a lawful viewport instead of hand-drawing a separate SVG preview:

```html
<div
  class="preview"
  data-substrate-viewport
  data-view="field"
  data-width="900"
  data-height="420"
  data-unit="72"
  data-shells="5">
</div>
```

The page chooses the window. The shared substrate draws the field, unit construction, stations, cells, and relation marks.

Converted to substrate viewports so far:

```text
daily/index.html
gallery/plate-stills/index.html
gallery/mandalas/index.html
gallery/tessellation-posters/index.html
gallery/field-drawings/index.html
gallery/community/index.html
gallery/downloads/index.html
books/theorem-zero-book-1/index.html
books/theorem-zero-book-2/index.html
books/construction-ledger/index.html
books/companion/index.html
books/visual-relations/index.html
readers/plate-engine/index.html
miscellaneous-visuals/index.html
site/index.html
```

Remaining visual pages should be converted progressively, especially Exhibitions, other Readers routes, section roots, and notes HTML pages.

## Plate System

The project has the first version of a plate browsing and reader-selection system.

Core files:

```text
assets/js/plate-registry.js
assets/js/plate-deck.js
assets/js/plate-reader-page.js
plates/index.html
readers/plate-engine/index.html
```

The plate registry contains coded plate records. These are instructions for the renderer, not visible explanations for the visitor.

Each plate may include an authored `sequence`. A sequence is an ordered list of states such as:

```js
{ label: 'compose', view: 'field', hold: 1800 }
```

The Plate Deck page renders one still plate at a time through the substrate viewport system. The visitor can Pass, Keep, or Watch. Kept plates are stored locally in the browser for now.

The Plate Engine reader route accepts selected plates from the deck using a query string:

```text
readers/plate-engine/?plate=diameter-study
```

The reader executes the selected plate's authored sequence when present. It falls back to a generic field-compose-relation-release loop only if a plate has no sequence.

This establishes the split between:

- Reader: executes the selected plate sequence.
- Plate: coded instruction set for the reader/renderer.
- Deck: still-card browsing and taste selection.
- Viewport: visible aperture onto the lawful substrate.

## Current Status

The repository now has a four-mode public gateway, a normal website mode route, working navigation sections, shared styling, shared scripts, documentation, a custom 404, GitHub Pages support, a basic field canvas tool, a plate reader engine, repaired section roots, repaired child routes, a Daily Geometry prototype, a shared substrate viewport system, an initial Plate Deck, a registry-connected Plate Engine route, a Construction Mode dashboard behind the public front door, two major visual reservoirs, a Visual Reservoirs index, a Miscellaneous Visuals holding route, and a Colouring Generator wrapper.

## What Works Now

- Home page is a four-mode gateway: Colouring, Constructions, Stills, Ordinary Website.
- Ordinary Website Mode exists at `site/index.html`.
- Visual Reservoirs index exists at `visual-reservoirs/index.html`.
- Construction dashboard exists at `construction/index.html`.
- 120 Plate Reservoir exists at `construction/galway_geometry_100_plate_catalogue.html`.
- Site Population Reservoir exists at `construction/galway_geometry_site_population_reservoir.html`.
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
- Plate Deck stills are rendered through the lawful substrate viewport.
- Plate Reader page controller exists at `assets/js/plate-reader-page.js`.
- Plate Engine route reads `?plate=<id>` and executes the selected plate sequence.
- Daily Geometry static prototype exists at `daily/index.html` and uses a substrate viewport.
- All Gallery child visual routes use substrate viewports.
- All Books child visual routes use substrate viewports.
- Lawful visual quality rule exists at `notes/lawful-visual-quality.md`.

## Known Risks

1. The Colouring Generator loads, but the selected SVG sheet may appear blank or too faint; renderer visibility needs inspection and patching.
2. Reservoir pages are standalone prototypes; they should be mined, not blindly merged.
3. Plate sequences currently switch rendered states; they do not yet animate individual geometric primitives continuously inside one SVG timeline.
4. The substrate viewport renderer has only a small set of visual views: `minimal`, `field`, `diameters`, and `catalogue`.
5. Exhibitions and Readers prepared routes still need viewport conversion except where a true authored plate event is intended.
6. Section roots and notes HTML pages may still carry independent inline SVG previews.
7. Some generated child pages may still be thin and need richer visual content.
8. Any future preview image may drift into decorative geometry unless checked against the lawful visual quality rule.
9. `index.html` at site root is now simple but still carries inline CSS rather than shared assets.
10. The older `assets/js/plate-engine.js` is still only v0.1 and should be reconciled with the registry-connected reader route.
11. The field canvas exports SVG, but PNG export, undo, save/load, and symmetry painting remain unfinished.
12. Stable extracted downloadable SVG assets are not yet present as separate files.

## Completed Since Initial Spine

- Added management plan.
- Added notes index.
- Added site architecture documents.
- Added project status handoff.
- Added `.nojekyll`.
- Added 404 page.
- Added geometry field engine.
- Added field paint engine.
- Added field canvas app.
- Added plate reader CSS.
- Added plate engine JS.
- Added first equilateral/hex exhibition.
- Added visual preview CSS.
- Repaired section-root overwrite errors in Gallery, Books, Exhibitions, and Readers.
- Repaired missing Gallery child routes.
- Repaired missing Books child routes.
- Repaired missing Exhibitions child routes.
- Repaired missing Readers child routes.
- Added Daily Geometry static prototype.
- Added lawful visual quality rule.
- Added substrate viewport renderer.
- Converted Daily Geometry to use a substrate viewport.
- Converted all Gallery child visual routes to substrate viewports.
- Converted all Books child visual routes to substrate viewports.
- Added initial plate registry.
- Added initial Plate Deck browser.
- Added public Plate Deck page.
- Added Plate Reader page controller.
- Connected Plate Engine route to the plate registry query parameter.
- Added authored sequences to the plate registry.
- Updated the reader to execute authored plate sequences.
- Added Construction Mode dashboard.
- Added 120 Plate Reservoir.
- Added Site Population Reservoir.
- Added Miscellaneous Visuals holding route.
- Wired underpopulated workshop/export routes to the reservoirs.
- Added Visual Reservoirs index.
- Wired Gallery, Miscellaneous Visuals, and Construction to Visual Reservoirs.
- Added Colouring Generator wrapper and script aliases.
- Replaced public home page with four-mode gateway.
- Added Ordinary Website Mode at `site/index.html`.

## Immediate Next Work

Priority 1: Stabilize the four-mode gateway.

- Verify each mode route opens correctly.
- Confirm the mode gateway is clear on mobile.
- Decide whether Constructions should route to Plate Deck, Reader, or an intermediate Constructions Mode page.
- Decide whether Stills should route to Visual Reservoirs or a cleaner public Stills page later.

Priority 2: Fix and promote the Colouring Generator.

- Patch renderer visibility if the selected SVG sheet remains blank or too faint.
- Confirm SVG download and print work.
- Decide whether to promote generator from construction wrapper into `workshops/colouring/`.

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

You are continuing work on `TitanicParker/Galway-Geometry`, an all-HTML GitHub Pages site created by a GPT user with ChatGPT as development partner. The public home page is now a four-mode gateway: Colouring, Constructions, Stills, Ordinary Website. This is the governing organizing principle. Start from `index.html`, `site/index.html`, `visual-reservoirs/index.html`, `construction/index.html`, `construction/galway_geometry_100_plate_catalogue.html`, `construction/galway_geometry_site_population_reservoir.html`, `construction/colouring-generator/`, `miscellaneous-visuals/index.html`, `PROJECT_STATUS.md`, `notes/management-plan.md`, `notes/site-architecture.md`, and `notes/lawful-visual-quality.md`. Preserve the user's public direction: Galway Geometry is a practical/aesthetic visual geometry site for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and deeper constructional geometry. Do not turn the public front page into a theorem manifesto. Do not let the site collapse back into an overgrown list of routes. Confirm that no geometry image betrays the lawful substrate. Continue from the current priorities: stabilize the four-mode gateway, fix/promote Colouring Generator, mine reservoirs into stable assets, continue lawful viewport conversion, prepare public v1 cleanup.
