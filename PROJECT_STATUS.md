# Galway Geometry Project Status

## Handoff Context

Galway Geometry is being created by a GPT user working with ChatGPT as a development partner. The user owns the project direction, taste, terminology, and public positioning. Future GPT sessions should treat the repository as the active source of truth, while preserving the user's established intent.

The user wants an all-HTML public site, friendly to GitHub Pages, with no framework requirement and no build system unless explicitly introduced later. The site should feel like a public visual geometry destination: aesthetic, practical, browsable, and usable.

The public front door is not a theorem manifesto. It is a place for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, and later deeper study.

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
```

Remaining visual pages should be converted progressively.

## Current Status

The repository now has a public site spine, working navigation sections, shared styling, shared scripts, documentation, a custom 404, GitHub Pages support, a basic field canvas tool, a basic plate reader engine, the first exhibition route, repaired section roots, repaired child routes, a static Daily Geometry prototype, and a first shared substrate viewport system.

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
- image-to-geometry experiments;
- colouring sheets;
- deeper constructional geometry.

The deeper project includes construction ledgers, visual relation readers, Theorem Zero material, and a lawful geometric field model. That deeper project should remain available but should not dominate the landing page.

## Current Repository Shape

Approximate current structure:

```text
Galway-Geometry/
├── README.md
├── PROJECT_STATUS.md
├── index.html
├── 404.html
├── .nojekyll
├── assets/
│   ├── css/
│   │   ├── galway.css
│   │   ├── plate-reader.css
│   │   └── visual-previews.css
│   └── js/
│       ├── field-preview.js
│       ├── field-paint.js
│       ├── geometry-field.js
│       ├── navigation.js
│       ├── plate-engine.js
│       ├── substrate-viewport.js
│       └── typewriter.js
├── books/
│   ├── index.html
│   ├── theorem-zero-book-1/
│   ├── theorem-zero-book-2/
│   ├── construction-ledger/
│   ├── companion/
│   └── visual-relations/
├── daily/
│   └── index.html
├── exhibitions/
│   ├── index.html
│   ├── equilateral-hex/
│   ├── savant-series/
│   ├── field-series/
│   └── archive/
├── field-canvas/
│   ├── index.html
│   ├── export/
│   ├── mandala/
│   ├── paint/
│   │   ├── index.html
│   │   └── app.html
│   ├── picture-to-geometry/
│   ├── symmetry/
│   └── tessellations/
├── gallery/
│   ├── index.html
│   ├── plate-stills/
│   ├── mandalas/
│   ├── tessellation-posters/
│   ├── field-drawings/
│   ├── community/
│   └── downloads/
├── notes/
│   ├── index.html
│   ├── lawful-visual-quality.md
│   ├── management-plan.md
│   ├── site-architecture.md
│   ├── site-architecture.html
│   └── project-status.html
├── readers/
│   ├── index.html
│   ├── theorem-reader/
│   ├── visual-relations/
│   └── plate-engine/
└── workshops/
    ├── colouring/
    └── tessellations/
```

Some child folders may still need verification after manual GitHub uploads. Do not assume a child page exists until fetched or viewed.

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
- Field paint engine exists at `assets/js/field-paint.js`.
- Plate reader styles exist at `assets/css/plate-reader.css`.
- Basic plate engine exists at `assets/js/plate-engine.js`.
- First exhibition route exists at `exhibitions/equilateral-hex/index.html`.
- Section roots repaired after accidental child-page overwrites.
- Gallery, Books, Exhibitions, and Readers child routes have been repaired with real HTML destinations.
- Daily Geometry static prototype exists at `daily/index.html` and now uses a substrate viewport.
- Plate Stills gallery route now uses a substrate viewport.
- Lawful visual quality rule exists at `notes/lawful-visual-quality.md`.

## Known Risks

1. Several generated child pages still carry independent inline SVG previews and should be converted to substrate viewports.
2. Some generated child pages may still be thin and need richer visual content.
3. Any future preview image may drift into decorative geometry unless checked against the lawful visual quality rule.
4. `index.html` at site root still contains substantial inline CSS/JS and should eventually be refactored to shared assets.
5. The plate engine is only v0.1 and does not yet perform the full compose-hold-decompose-repeat theatre.
6. The field canvas exports SVG, but PNG export, undo, save/load, and symmetry painting remain unfinished.
7. Downloadable SVG assets are not yet present.

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
- Converted Gallery Plate Stills to use a substrate viewport.

## Immediate Next Work

Priority 1: Continue lawful viewport conversion.

- Convert remaining Gallery visual pages to substrate viewport declarations.
- Convert Books visual landing pages to substrate viewport declarations.
- Convert Exhibitions prepared routes to substrate viewport declarations where appropriate.
- Keep independent SVG only when it is authored as a true plate event and still obeys the substrate.

Priority 2: Link and path audit continuation.

- Fetch or inspect every top-level section landing page.
- Confirm every linked child route exists.
- Confirm every visible card is an `<a>` and receives pointer cursor.
- Confirm no section-root `index.html` is accidentally a child page.
- Confirm relative paths are correct from each depth.

Priority 3: Improve Field Canvas v0.1.

- Add PNG export.
- Add better mobile/touch painting.
- Add hover/active feedback.
- Add undo.
- Add larger field options.
- Add symmetry mode later.

Priority 4: Improve Plate Reader v0.1.

- Add timed compose-hold-decompose-repeat loop.
- Add plate metadata.
- Add keyboard navigation.
- Add touch-friendly arrows.
- Expand Equilateral / Hex exhibition beyond two plates.

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

The user strongly prefers momentum. When using the GitHub connector, proceed with concrete repository operations and request permissions as needed. Avoid stopping after each micro-step unless there is a real uncertainty or failure.

## Short Continuation Prompt For A New Conversation

You are continuing work on `TitanicParker/Galway-Geometry`, an all-HTML GitHub Pages site created by a GPT user with ChatGPT as development partner. Preserve the user's public direction: Galway Geometry is a practical/aesthetic visual geometry site for geometric art, mandalas, tessellations, colouring, field drawing, visual exhibitions, and deeper constructional geometry. Do not turn the public front page into a theorem manifesto. Do not reinterpret pictures as generic photos; use generated geometry, SVG previews, visual plates, mandalas, tessellations, and field drawings.

Start by reading `PROJECT_STATUS.md`, `notes/management-plan.md`, `notes/site-architecture.md`, and `notes/lawful-visual-quality.md`. Then audit links, paths, and visual lawfulness. Confirm top-level section roots are landing pages, not child pages. Confirm that no geometry image betrays the lawful substrate. Prefer substrate viewports using `assets/js/geometry-field.js` and `assets/js/substrate-viewport.js`. Continue from the current priorities: lawful viewport conversion pass, link/path audit, improve Field Canvas v0.1, improve Plate Reader v0.1, add downloadables v0.1.
