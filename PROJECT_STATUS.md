# Galway Geometry Project Status

## Handoff Context

Galway Geometry is being created by a GPT user working with ChatGPT as a development partner. The user owns the project direction, taste, terminology, and public positioning. Future GPT sessions should treat the repository as the active source of truth, while preserving the user's established intent.

The user wants an all-HTML public site, friendly to GitHub Pages, with no framework requirement and no build system unless explicitly introduced later. The site should feel like a public visual geometry destination: aesthetic, practical, browsable, and usable.

The public front door is not a theorem manifesto. It is a place for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and later deeper study.

## Active Phase: Construction Mode

Construction Mode is now active.

The site has a final public architecture in mind, but active work should surface the current working objects first. This prevents the builder from having to search the finished architecture to find the tools and pages currently under construction.

The construction dashboard is:

```text
construction/index.html
```

The home page now exposes Construction Mode at the top through a visible strip, navigation link, and hero actions.

Current active build objects:

```text
plates/index.html
readers/plate-engine/?plate=diameter-study
daily/index.html
field-canvas/paint/app.html
assets/js/plate-registry.js
PROJECT_STATUS.md
```

Future work should update the construction dashboard whenever the active build focus changes.

Construction Mode is not the final public positioning. It is a working layer placed in front of the final site architecture while the site is being built.

## Lawful Visual Constraint

The central quality rule is now explicit:

No geometry image should betray the lawfulness of the field.

This is not a slogan for the public site. It is an internal production rule. Any SVG preview, gallery image, visual plate, mandala, tessellation, or generated field drawing should be built from, or visibly consistent with, the lawful substrate.

The lawful substrate is the unit triangular field generated from the fixed compass radius. A visual geometry element should use lawful stations, lawful circle centres, lawful equal-radius circles, lawful unit chords, lawful equilateral cells, lawful diameters, lawful field coordinates, or authored plate events that preserve those relations.

UI panels, cards, buttons, and ordinary page layout may use normal HTML boxes. The constraint governs visual geometry and visual claims.

The full quality note is now recorded at:

```text
notes/lawful-visual-quality.md
```

## Substrate Viewport Implementation

The site now has a shared substrate viewport renderer:

```text
assets/js/substrate-viewport.js
```

It uses the existing base field engine:

```text
assets/js/geometry-field.js
```

A page may now declare a lawful viewport instead of hand-drawing a separate SVG preview:

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
```

Remaining visual pages should be converted progressively, especially Exhibitions, other Readers routes, section roots, and notes HTML pages.

## Plate System

The project now has the first version of a plate browsing and reader-selection system.

Core files:

```text
assets/js/plate-registry.js
assets/js/plate-deck.js
assets/js/plate-reader-page.js
plates/index.html
readers/plate-engine/index.html
```

The plate registry contains coded plate records. These are instructions for the renderer, not visible explanations for the visitor.

Each plate may now include an authored `sequence`. A sequence is an ordered list of states such as:

```js
{ label: 'compose', view: 'field', hold: 1800 }
```

The Plate Deck page renders one still plate at a time through the substrate viewport system. The visitor can Pass, Keep, or Watch. Kept plates are stored locally in the browser for now.

The Plate Engine reader route accepts selected plates from the deck using a query string:

```text
readers/plate-engine/?plate=diameter-study
```

The reader now executes the selected plate's authored sequence when present. It falls back to a generic field-compose-relation-release loop only if a plate has no sequence.

This establishes the split between:

- Reader: executes the selected plate sequence.
- Plate: coded instruction set for the reader/renderer.
- Deck: still-card browsing and taste selection.
- Viewport: visible aperture onto the lawful substrate.

## Current Status

The repository now has a public site spine, working navigation sections, shared styling, shared scripts, documentation, a custom 404, GitHub Pages support, a basic field canvas tool, a basic plate reader engine, the first exhibition route, repaired section roots, repaired child routes, a static Daily Geometry prototype, a first shared substrate viewport system, an initial Plate Deck, a registry-connected Plate Engine route that executes authored plate sequences, and an active Construction Mode dashboard.

## What Works Now

- Home page exists and now surfaces Construction Mode.
- Construction dashboard exists at `construction/index.html`.
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
- Field paint engine exists at `assets/js/field-paint.js`.
- Plate reader styles exist at `assets/css/plate-reader.css`.
- Basic plate engine exists at `assets/js/plate-engine.js`.
- First exhibition route exists at `exhibitions/equilateral-hex/index.html`.
- Section roots repaired after accidental child-page overwrites.
- Gallery, Books, Exhibitions, and Readers child routes have been repaired with real HTML destinations.
- Daily Geometry static prototype exists at `daily/index.html` and now uses a substrate viewport.
- All Gallery child visual routes now use substrate viewports.
- All Books child visual routes now use substrate viewports.
- Lawful visual quality rule exists at `notes/lawful-visual-quality.md`.

## Known Risks

1. Construction Mode is intentionally prominent and should eventually be demoted or removed for public v1.0.
2. Plate sequences currently switch rendered states; they do not yet animate individual geometric primitives continuously inside one SVG timeline.
3. The substrate viewport renderer has only a small set of visual views: `minimal`, `field`, `diameters`, and `catalogue`.
4. Exhibitions and Readers prepared routes still need viewport conversion except where a true authored plate event is intended.
5. Section roots and notes HTML pages may still carry independent inline SVG previews.
6. Some generated child pages may still be thin and need richer visual content.
7. Any future preview image may drift into decorative geometry unless checked against the lawful visual quality rule.
8. `index.html` at site root still contains substantial inline CSS/JS and should eventually be refactored to shared assets.
9. The older `assets/js/plate-engine.js` is still only v0.1 and should be reconciled with the registry-connected reader route.
10. The field canvas exports SVG, but PNG export, undo, save/load, and symmetry painting remain unfinished.
11. Downloadable SVG assets are not yet present.

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
- Added Construction Mode entry points to the home page.
- Added Construction Mode to management files.

## Immediate Next Work

Priority 1: Use Construction Mode as the active work surface.

- Keep `construction/index.html` current with the active build focus.
- Use it as the first page to inspect during development.
- Update its links as priorities change.

Priority 2: Make plate sequences visually richer.

- Extend `assets/js/substrate-viewport.js` with more lawful views: `overlap`, `hex-only`, `rings`, `cell-field`, `poster`, and `quiet`.
- Add more plates to `assets/js/plate-registry.js` using those views.
- Let individual sequence states override unit, shells, or presentation mode.
- Later add primitive-level timed drawing rather than only state replacement.

Priority 3: Continue lawful viewport conversion.

- Convert Exhibitions prepared routes to substrate viewport declarations where appropriate.
- Convert Readers prepared routes to substrate viewport declarations where appropriate.
- Convert section roots to substrate viewports.
- Convert notes HTML pages to substrate viewports.
- Keep independent SVG only when it is authored as a true plate event and still obeys the substrate.

Priority 4: Improve Field Canvas v0.1.

- Add PNG export.
- Add better mobile/touch painting.
- Add hover/active feedback.
- Add undo.
- Add larger field options.
- Add symmetry mode later.

Priority 5: Downloadables v0.1.

- Add triangle grid SVG.
- Add hex grid SVG.
- Add mandala colouring sheet SVG.
- Link them from Field Canvas, Gallery, and Workshops.

## Working Principle for Future GPT Sessions

Do not drift into manifesto language on the public landing page.

Do not reinterpret the project as a generic image gallery merely because the user asks for pictures. In this project, pictures should usually mean generated lawful geometry, visual plates, tessellations, mandalas, field drawings, or SVG previews.

Do not bury the visitor in theory at the front door. The front page should say what the site contains and what visitors can do.

During construction, use Construction Mode as the working surface and surface current active objects first.

The site is lawful geometry. No image should betray the field.

A visual area should be a viewport onto the substrate unless there is a specific reason for an authored plate-specific SVG.

The plate is code for the reader/renderer, not prose for the visitor.

The user strongly prefers momentum. When using the GitHub connector, proceed with concrete repository operations and request permissions as needed. Avoid stopping after each micro-step unless there is a real uncertainty or failure.

## Short Continuation Prompt For A New Conversation

You are continuing work on `TitanicParker/Galway-Geometry`, an all-HTML GitHub Pages site created by a GPT user with ChatGPT as development partner. Construction Mode is active. Start from `construction/index.html`, `PROJECT_STATUS.md`, `notes/management-plan.md`, `notes/site-architecture.md`, and `notes/lawful-visual-quality.md`. The site has a final public architecture, but during construction the current working objects should be surfaced first. Preserve the user's public direction: Galway Geometry is a practical/aesthetic visual geometry site for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and deeper constructional geometry. Do not turn the public front page into a theorem manifesto. Do not reinterpret pictures as generic photos; use generated geometry, SVG previews, visual plates, mandalas, tessellations, and field drawings. Confirm that no geometry image betrays the lawful substrate. Prefer substrate viewports using `assets/js/geometry-field.js` and `assets/js/substrate-viewport.js`. Continue from the current priorities: use Construction Mode as the active work surface, enrich plate sequences and substrate views, lawful viewport conversion pass, improve Field Canvas v0.1, add downloadables v0.1.
