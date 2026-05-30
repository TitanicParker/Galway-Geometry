# Galway Geometry Project Status

## Handoff Context

Galway Geometry is being created by a GPT user working with ChatGPT as a development partner. The user owns the project direction, taste, terminology, and public positioning. Future GPT sessions should treat the repository as the active source of truth, while preserving the user's established intent.

The user wants an all-HTML public site, friendly to GitHub Pages, with no framework requirement and no build system unless explicitly introduced later. The site should feel like a public visual geometry destination: aesthetic, practical, browsable, and usable.

The public front door is not a theorem manifesto. It is a place for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and later deeper study.

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
```

Remaining visual pages should be converted progressively, especially Exhibitions, Readers, section roots, and notes HTML pages.

## Plate System

The project now has the first version of a plate browsing system.

Core files:

```text
assets/js/plate-registry.js
assets/js/plate-deck.js
plates/index.html
```

The plate registry contains coded plate records. These are instructions for the renderer, not visible explanations for the visitor.

The Plate Deck page renders one still plate at a time through the substrate viewport system. The visitor can Pass, Keep, or Watch. Kept plates are stored locally in the browser for now.

This establishes the split between:

- Reader: executes a plate over time.
- Plate: coded instruction set for the reader/renderer.
- Deck: still-card browsing and taste selection.
- Viewport: visible aperture onto the lawful substrate.

Next plate work should connect the Watch link to a reader route that accepts `?plate=<id>` and executes the selected plate dynamically.

## Current Status

The repository now has a public site spine, working navigation sections, shared styling, shared scripts, documentation, a custom 404, GitHub Pages support, a basic field canvas tool, a basic plate reader engine, the first exhibition route, repaired section roots, repaired child routes, a static Daily Geometry prototype, a first shared substrate viewport system, and an initial Plate Deck.

A recent upload repair pass was required because some child pages were accidentally uploaded over section-root `index.html` files. The affected section roots have been repaired.

Repaired section roots:

```text
gallery/index.html
books/index.html
exhibitions/index.html
readers/index.html
```

Already correct during audit:

```text
notes/index.html
```

## Project Identity

Galway Geometry is a visual geometry project for:

- geometric art;
- mandalas;
- tessellations;
- field drawing;
- visual plate readers;
- plate browsing and curation;
- image-to-geometry experiments;
- colouring sheets;
- deeper constructional geometry.

The deeper project includes construction ledgers, visual relation readers, Theorem Zero material, and a lawful geometric field model. That deeper project should remain available but should not dominate the landing page.

## What Works Now

- Home page exists.
- Major section landing pages exist.
- Shared CSS exists.
- Shared JavaScript exists.
- Custom 404 exists.
- `.nojekyll` exists.
- Field Canvas v0.1 exists at `field-canvas/paint/app.html`.
- Geometry field engine exists at `assets/js/geometry-field.js`.
- Substrate viewport renderer exists at `assets/js/substrate-viewport.js`.
- Plate registry exists at `assets/js/plate-registry.js`.
- Plate Deck exists at `plates/index.html`.
- Plate Deck stills are rendered through the lawful substrate viewport.
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

1. The Plate Deck Watch link points to `readers/plate-engine/?plate=<id>`, but that reader route does not yet consume the plate id dynamically.
2. Exhibitions and Readers prepared routes still need viewport conversion except where a true authored plate event is intended.
3. Section roots and notes HTML pages may still carry independent inline SVG previews.
4. Some generated child pages may still be thin and need richer visual content.
5. Any future preview image may drift into decorative geometry unless checked against the lawful visual quality rule.
6. `index.html` at site root still contains substantial inline CSS/JS and should eventually be refactored to shared assets.
7. The plate engine is only v0.1 and does not yet perform the full compose-hold-decompose-repeat theatre.
8. The field canvas exports SVG, but PNG export, undo, save/load, and symmetry painting remain unfinished.
9. Downloadable SVG assets are not yet present.

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

## Immediate Next Work

Priority 1: Connect Plate Deck to Reader.

- Update `readers/plate-engine/index.html` so it reads `?plate=<id>`.
- Load `assets/js/plate-registry.js` and `assets/js/substrate-viewport.js`.
- Execute or at least display the selected plate through the reader route.
- Later add timed compose-hold-decompose-repeat execution from the same plate record.

Priority 2: Continue lawful viewport conversion.

- Convert Exhibitions prepared routes to substrate viewport declarations where appropriate.
- Convert Readers prepared routes to substrate viewport declarations where appropriate.
- Convert section roots to substrate viewports.
- Convert notes HTML pages to substrate viewports.
- Keep independent SVG only when it is authored as a true plate event and still obeys the substrate.

Priority 3: Link and path audit continuation.

- Link `plates/index.html` from the public navigation or home page.
- Fetch or inspect every top-level section landing page.
- Confirm every linked child route exists.
- Confirm every visible card is an `<a>` and receives pointer cursor.
- Confirm no section-root `index.html` is accidentally a child page.
- Confirm relative paths are correct from each depth.

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

The site is lawful geometry. No image should betray the field.

A visual area should be a viewport onto the substrate unless there is a specific reason for an authored plate-specific SVG.

The plate is code for the reader/renderer, not prose for the visitor.

The user strongly prefers momentum. When using the GitHub connector, proceed with concrete repository operations and request permissions as needed. Avoid stopping after each micro-step unless there is a real uncertainty or failure.

## Short Continuation Prompt For A New Conversation

You are continuing work on `TitanicParker/Galway-Geometry`, an all-HTML GitHub Pages site created by a GPT user with ChatGPT as development partner. Preserve the user's public direction: Galway Geometry is a practical/aesthetic visual geometry site for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, plate browsing, and deeper constructional geometry. Do not turn the public front page into a theorem manifesto. Do not reinterpret pictures as generic photos; use generated geometry, SVG previews, visual plates, mandalas, tessellations, and field drawings.

Start by reading `PROJECT_STATUS.md`, `notes/management-plan.md`, `notes/site-architecture.md`, and `notes/lawful-visual-quality.md`. Then audit links, paths, and visual lawfulness. Confirm top-level section roots are landing pages, not child pages. Confirm that no geometry image betrays the lawful substrate. Prefer substrate viewports using `assets/js/geometry-field.js` and `assets/js/substrate-viewport.js`. Continue from the current priorities: connect Plate Deck to Reader, lawful viewport conversion pass, link/path audit, improve Field Canvas v0.1, add downloadables v0.1.
