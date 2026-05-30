# Galway Geometry Management Plan

## Purpose

This document is the working management plan for completing the Galway Geometry site.

The site is an all-HTML public project for geometric art, mandalas, tessellations, visual plate readers, field drawing, image-to-geometry experiments, gallery outputs, and deeper constructional geometry materials.

The repository now has a spine. The next task is to turn that spine into a complete public site.

## Current Repository State

Live public structure:

```text
Galway-Geometry/
├── README.md
├── index.html
├── assets/
│   ├── css/
│   │   └── galway.css
│   └── js/
│       ├── typewriter.js
│       ├── navigation.js
│       └── field-preview.js
├── exhibitions/
│   └── index.html
├── field-canvas/
│   └── index.html
├── gallery/
│   └── index.html
└── books/
    └── index.html
```

The site currently contains the public landing page, shared visual style, shared scripts, and four major destination pages.

The remaining work is grouped into milestones.

---

# Completion Definition

The Galway Geometry site is complete at version 1.0 when:

1. The landing page clearly presents the project.
2. The main sections all contain working public content.
3. The site works cleanly on phone, tablet, and desktop.
4. The visual style is coherent across all pages.
5. Visitors can watch exhibitions.
6. Visitors can use or preview a field canvas.
7. Visitors can download tessellation or colouring materials.
8. Visitors can view a gallery.
9. Visitors can access the deeper project and books.
10. The repository is organised well enough for future growth.

Version 1.0 does not require every ambitious tool to be complete. It requires a convincing public site with clear working paths.

---

# Milestone 1: Repository Hygiene and Site Foundation

## Goal

Stabilise the all-HTML structure so future work can be added without drift.

## Tasks

- [x] Create `README.md`.
- [x] Create `index.html`.
- [x] Create shared CSS at `assets/css/galway.css`.
- [x] Create shared typewriter script at `assets/js/typewriter.js`.
- [x] Create shared navigation script at `assets/js/navigation.js`.
- [x] Create shared field preview script at `assets/js/field-preview.js`.
- [x] Create `exhibitions/index.html`.
- [x] Create `field-canvas/index.html`.
- [x] Create `gallery/index.html`.
- [x] Create `books/index.html`.
- [ ] Refactor `index.html` so it uses shared CSS and JS rather than carrying large inline code.
- [ ] Check all internal links.
- [ ] Add `notes/` directory.
- [ ] Add management plan.
- [ ] Add `TODO.md` or keep task tracking inside this plan.
- [ ] Add `LICENSE` once the public reuse policy is chosen.
- [ ] Add `CONTRIBUTING.md` if community submissions will be accepted.
- [ ] Add `.nojekyll` if needed for GitHub Pages.
- [ ] Add simple 404 page.
- [ ] Confirm GitHub Pages source branch and root.

## Acceptance Criteria

- Every top-level page opens.
- Every top-level page uses the same visual language.
- Shared CSS and JS are loaded correctly.
- Navigation works on mobile and desktop.
- No dead top-level links remain except clearly marked future paths.

---

# Milestone 2: Landing Page Completion

## Goal

Make the landing page public-ready, aesthetic, descriptive, and clear.

## Required Content

The landing page should communicate:

- Welcome to Galway Geometry.
- A place for geometric art.
- A place for mandalas.
- A place for colouring and drawing.
- A place for tessellations.
- A place for visual geometry exhibitions.
- A place for field-canvas experiments.
- A deeper constructional geometry project is available for those who want it.

## Tasks

- [ ] Replace any remaining manifesto-style or imperative wording.
- [ ] Keep text descriptive and visitor-facing.
- [ ] Ensure typewriter text is factual, not doctrinal.
- [ ] Add clear cards for:
  - [ ] Picture to Geometry.
  - [ ] Draw Mandalas.
  - [ ] Colour Mandalas.
  - [ ] Download Tessellations.
  - [ ] Watch Visuals.
  - [ ] Books / Deeper Project.
- [ ] Add visual preview that is bright and legible.
- [ ] Confirm hero works on phone.
- [ ] Confirm hero works on tablet.
- [ ] Confirm hero works on desktop.
- [ ] Add Open Graph metadata.
- [ ] Add page description metadata.
- [ ] Add accessible labels for visual preview.
- [ ] Add reduced-motion fallback.

## Acceptance Criteria

- A first-time visitor understands what the site offers in under ten seconds.
- The page feels aesthetic rather than instructional.
- The deeper theory is present but not forced.
- The site feels credible on phone.

---

# Milestone 3: Exhibitions Section

## Goal

Create a public area for visual plate readers and HTML geometry exhibitions.

## Required Substructure

```text
exhibitions/
├── index.html
├── savant-series/
│   └── index.html
├── equilateral-series/
│   └── index.html
├── hex-series/
│   └── index.html
├── field-series/
│   └── index.html
└── archive/
    └── index.html
```

## Tasks

- [ ] Create exhibition index cards.
- [ ] Add at least one working exhibition reader.
- [ ] Add 50-plate equilateral/hex exhibition.
- [ ] Add 50-plate whole-substrate exhibition.
- [ ] Add 50-plate savant exhibition.
- [ ] Add a reusable plate-reader shell.
- [ ] Standardise controls:
  - [ ] Previous plate.
  - [ ] Next plate.
  - [ ] Plate number.
  - [ ] Plate title.
  - [ ] No clutter.
- [ ] Add keyboard support.
- [ ] Add touch-friendly controls.
- [ ] Add reduced-motion mode.
- [ ] Add pause only if needed for accessibility.
- [ ] Add exhibition still captures later.
- [ ] Create archive area for prototypes.

## Plate Reader Requirements

Each exhibition reader should:

- Use a black or near-black stage.
- Work on phone, tablet, and desktop.
- Keep controls minimal.
- Allow previous and next navigation.
- Loop plates automatically.
- Avoid requiring user configuration.
- Keep plate identity visible.

## Acceptance Criteria

- A visitor can open an exhibition and immediately watch geometry unfold.
- The reader is visually impressive.
- Navigation is obvious but not dominant.
- At least one exhibition contains enough content to feel complete.

---

# Milestone 4: Field Canvas Section

## Goal

Turn the lawful field into a usable art surface.

## Required Substructure

```text
field-canvas/
├── index.html
├── paint/
│   └── index.html
├── mandala/
│   └── index.html
├── symmetry/
│   └── index.html
├── tessellations/
│   └── index.html
├── picture-to-geometry/
│   └── index.html
└── export/
    └── index.html
```

## Core Ideas

The field can be used as:

- a geometric pixel grid;
- a triangle-cell canvas;
- a hex-cell canvas;
- a mandala substrate;
- a tessellation sheet;
- an image conversion surface;
- a colouring page generator.

## Tasks: Paint Tool

- [ ] Create a basic canvas page.
- [ ] Render a triangular or hexagonal field.
- [ ] Allow cell hover.
- [ ] Allow cell selection.
- [ ] Allow painting a cell.
- [ ] Add colour palette.
- [ ] Add clear/reset.
- [ ] Add undo.
- [ ] Add mobile touch painting.
- [ ] Add export to PNG.
- [ ] Add export to SVG.
- [ ] Add save/load JSON later.

## Tasks: Mandala Tool

- [ ] Create mandala page.
- [ ] Add radial guide.
- [ ] Add sixfold symmetry mode.
- [ ] Add twelvefold visual mode if useful.
- [ ] Add mirror mode.
- [ ] Add colour palette.
- [ ] Add export.
- [ ] Add printable output.

## Tasks: Tessellation Downloads

- [ ] Create downloadable triangle grid SVG.
- [ ] Create downloadable hex grid SVG.
- [ ] Create printable PDF versions later.
- [ ] Add A4 versions.
- [ ] Add US Letter versions.
- [ ] Add dark and light variants.
- [ ] Add colouring sheets.

## Tasks: Picture to Geometry

- [ ] Create upload interface.
- [ ] Load image locally in browser.
- [ ] Fit image to canvas.
- [ ] Sample image into field cells.
- [ ] Quantize colours.
- [ ] Render geometric interpretation.
- [ ] Add resolution slider.
- [ ] Add palette control.
- [ ] Export output.
- [ ] Keep all processing client-side.

## Acceptance Criteria

- A visitor can draw or colour something on a field.
- The tool works on phone and desktop.
- The field is visibly geometric.
- Export works for at least one format.

---

# Milestone 5: Gallery Section

## Goal

Create a public gallery for finished images, stills, prints, and studies.

## Required Substructure

```text
gallery/
├── index.html
├── plate-stills/
│   └── index.html
├── mandalas/
│   └── index.html
├── tessellation-posters/
│   └── index.html
├── field-drawings/
│   └── index.html
└── community/
    └── index.html
```

## Tasks

- [ ] Create gallery category pages.
- [ ] Add sample stills from existing exhibitions.
- [ ] Add placeholder-free visual thumbnails.
- [ ] Add image metadata format.
- [ ] Add captions.
- [ ] Add download links where appropriate.
- [ ] Add print-friendly assets later.
- [ ] Decide whether community gallery is curated or open.
- [ ] Add submission guidelines if community gallery exists.

## Acceptance Criteria

- Gallery looks visual, not textual.
- Every gallery item has an image, title, and short description.
- The gallery can grow without redesign.

---

# Milestone 6: Books and Deeper Project

## Goal

Make the deeper project accessible without letting it dominate the public front page.

## Required Substructure

```text
books/
├── index.html
├── theorem-zero-book-1/
│   └── index.html
├── theorem-zero-book-2/
│   └── index.html
├── construction-ledger/
│   └── index.html
├── companion/
│   └── index.html
└── visual-relations/
    └── index.html
```

## Tasks

- [ ] Add Book 1 landing page.
- [ ] Add Book 2 landing page.
- [ ] Add construction ledger page.
- [ ] Add companion mind map page.
- [ ] Add visual relation catalogue page.
- [ ] Decide whether full books are HTML pages, Markdown downloads, or both.
- [ ] Add reading navigation.
- [ ] Add table of contents.
- [ ] Add mobile-friendly reading style.
- [ ] Add print styles.
- [ ] Add downloadable manuscript files if desired.

## Acceptance Criteria

- Deeper readers can find the project materials.
- Casual visitors are not forced into theory.
- Long-form reading is comfortable on phone and desktop.

---

# Milestone 7: Shared Plate Engine

## Goal

Create a reusable HTML/SVG plate reader that can run multiple exhibitions.

## Core Requirements

- One active plate.
- Compose phase.
- Hold phase.
- Decompose phase.
- Repeat.
- Previous/next navigation.
- Keyboard support.
- Touch support.
- Responsive SVG stage.
- Plate title and number.
- No heavy controls.

## Tasks

- [ ] Create `assets/js/plate-engine.js`.
- [ ] Create `assets/css/plate-reader.css`.
- [ ] Define plate object format.
- [ ] Define renderer functions:
  - [ ] point.
  - [ ] line.
  - [ ] circle.
  - [ ] polygon.
  - [ ] cell.
  - [ ] field.
  - [ ] glow.
  - [ ] fade.
- [ ] Define timing function.
- [ ] Define compose/decompose sequence logic.
- [ ] Create sample plate set.
- [ ] Create documentation for authoring plates.
- [ ] Add one exhibition using the shared engine.

## Acceptance Criteria

- New exhibitions can be made by writing plate definitions, not rewriting the runtime.
- Plate readers remain consistent across the site.

---

# Milestone 8: Shared Geometry Engine

## Goal

Create a reusable geometry substrate for field-based pages.

## Required Functions

- Generate triangular field points.
- Generate hex coordinates.
- Convert axial coordinates to screen coordinates.
- Generate edges.
- Generate cells.
- Generate hex rings.
- Generate equilateral cells.
- Generate central hexagon.
- Generate tessellation sheets.

## Tasks

- [ ] Create `assets/js/geometry-field.js`.
- [ ] Add coordinate conversion.
- [ ] Add point generation.
- [ ] Add edge generation.
- [ ] Add cell generation.
- [ ] Add hit testing for field canvas.
- [ ] Add colour state for cells.
- [ ] Add export helpers.
- [ ] Use the same geometry engine in field canvas and exhibitions where possible.

## Acceptance Criteria

- Geometry is not duplicated across every page.
- Canvas tools and plate readers share the same substrate logic.

---

# Milestone 9: Downloadables

## Goal

Provide useful assets visitors can immediately download.

## Download Categories

- Triangle grid sheets.
- Hex grid sheets.
- Mandala outlines.
- Colouring pages.
- Tessellation posters.
- SVG field substrates.
- PNG stills.
- PDF sheets later.

## Tasks

- [ ] Create `downloads/` or host downloads inside relevant sections.
- [ ] Add A4 triangle grid SVG.
- [ ] Add A4 hex grid SVG.
- [ ] Add A4 mixed field SVG.
- [ ] Add dark background versions.
- [ ] Add light printable versions.
- [ ] Add colouring mandala templates.
- [ ] Add download buttons.
- [ ] Add licensing note.

## Acceptance Criteria

- A visitor can download at least three useful geometry sheets.
- Downloads are clearly labelled.
- Downloads work without special software.

---

# Milestone 10: Accessibility, Performance, and Device Testing

## Goal

Make the site usable and pleasant across devices.

## Tasks

- [ ] Test on phone width.
- [ ] Test on tablet width.
- [ ] Test on desktop width.
- [ ] Test landscape phone.
- [ ] Add reduced-motion support to all animations.
- [ ] Ensure colour contrast is acceptable.
- [ ] Ensure keyboard navigation works.
- [ ] Add accessible labels to important SVGs.
- [ ] Avoid excessive CPU use in animations.
- [ ] Avoid huge inline files where shared assets should be used.
- [ ] Compress or optimise large images.
- [ ] Keep pages static and fast.

## Acceptance Criteria

- Pages load quickly.
- Animations do not make the site unusable.
- The site remains legible on small screens.

---

# Milestone 11: Public Identity and Copy

## Goal

Make the project sound public, practical, and inviting.

## Tone Rules

- Tell people what the site is.
- Do not over-explain the theory on the landing page.
- Do not lead with grand claims.
- Keep imperative language minimal.
- Keep the deeper project available but optional.
- Let the visuals do much of the work.

## Tasks

- [ ] Review all public copy.
- [ ] Remove heavy instructional language from front-facing pages.
- [ ] Keep theory pages more precise and detailed.
- [ ] Add short project description.
- [ ] Add longer about page later.
- [ ] Add contact or contribution route if desired.
- [ ] Decide public name hierarchy:
  - [ ] Galway Geometry.
  - [ ] Galway Geometry Project.
  - [ ] Theorem Zero as deeper project.

## Acceptance Criteria

- The site sounds like a public creative geometry project.
- It does not sound like a manifesto on the landing page.
- It remains clear what visitors can do.

---

# Milestone 12: GitHub Pages Release

## Goal

Publish the site cleanly.

## Tasks

- [ ] Enable GitHub Pages.
- [ ] Set source to `main` branch root.
- [ ] Confirm live URL.
- [ ] Test all pages live.
- [ ] Fix broken links.
- [ ] Add Open Graph image.
- [ ] Add favicon.
- [ ] Add `robots.txt` if needed.
- [ ] Add sitemap later if useful.
- [ ] Tag first public release as `v0.1`.

## Acceptance Criteria

- Public URL works.
- Home page loads.
- All major sections load.
- Site is shareable.

---

# Milestone 13: Version 1.0 Content Minimum

## Goal

Define the minimum public completeness for version 1.0.

## Required for Version 1.0

- [ ] Complete landing page.
- [ ] At least one working visual exhibition.
- [ ] At least one working field-canvas prototype.
- [ ] At least three downloadable tessellation or colouring sheets.
- [ ] Gallery with at least twelve visual items.
- [ ] Books page with clear deeper-project entry points.
- [ ] About/project description.
- [ ] Working mobile layout.
- [ ] Working desktop layout.
- [ ] Clear license or reuse statement.

## Optional for Version 1.0

- [ ] Picture-to-geometry upload tool.
- [ ] Symmetry painting.
- [ ] Community gallery.
- [ ] Printable PDF packs.
- [ ] Full manuscript rendering.

---

# Near-Term Sprint Plan

## Sprint 1: Complete Skeleton

- [x] Add top-level section pages.
- [ ] Refactor landing page to shared assets.
- [ ] Add 404 page.
- [ ] Add `.nojekyll`.
- [ ] Add favicon placeholder.

## Sprint 2: Add First Exhibition

- [ ] Add shared plate reader CSS.
- [ ] Add shared plate engine JS.
- [ ] Add equilateral/hex focused 50-plate reader.
- [ ] Link it from `exhibitions/index.html`.

## Sprint 3: Add First Field Canvas

- [ ] Add `geometry-field.js`.
- [ ] Add paint canvas prototype.
- [ ] Add colour palette.
- [ ] Add export PNG.
- [ ] Link it from `field-canvas/index.html`.

## Sprint 4: Add Downloads

- [ ] Add triangle grid SVG.
- [ ] Add hex grid SVG.
- [ ] Add mandala colouring sheet SVG.
- [ ] Link from `field-canvas/index.html` and `gallery/index.html`.

## Sprint 5: Add Gallery Minimum

- [ ] Add 12 gallery items.
- [ ] Add still thumbnails.
- [ ] Add captions.
- [ ] Add download/view buttons.

---

# Immediate Next Actions

1. Refactor `index.html` to use shared CSS and JS.
2. Add `.nojekyll`.
3. Add `404.html`.
4. Add `assets/css/plate-reader.css`.
5. Add `assets/js/plate-engine.js`.
6. Add first exhibition page using the plate engine.
7. Add `assets/js/geometry-field.js`.
8. Add first field canvas prototype.

---

# Project Principle

Galway Geometry is public-facing first as a creative geometry site.

The deeper constructional theory is present, but it is not the front door.

The front door is simple:

- make geometric art;
- draw mandalas;
- colour patterns;
- download tessellations;
- watch visual geometry;
- explore the deeper project when ready.
