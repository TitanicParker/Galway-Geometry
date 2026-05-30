# Galway Geometry Management Plan

## Purpose

This document is the working management plan for completing the Galway Geometry site.

Galway Geometry is an all-HTML GitHub Pages friendly public project for geometric art, mandalas, tessellations, visual plate readers, field drawing, colouring sheets, gallery outputs, and deeper constructional geometry materials.

The public front door should remain aesthetic, practical, and visitor-facing. The deeper project should remain accessible, but it should not dominate the landing page.

## Current Repository State

The repository now has a working public spine, shared visual styling, shared scripts, documentation, a custom 404, a basic field canvas tool, a basic plate reader, a first exhibition route, repaired section roots, repaired child routes, and a static Daily Geometry prototype.

Core public structure:

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
│       └── typewriter.js
├── books/
├── daily/
├── exhibitions/
├── field-canvas/
├── gallery/
├── notes/
├── readers/
└── workshops/
```

## Completed Route Repair Pass

The following section roots are confirmed as section landing pages rather than accidentally overwritten child pages:

```text
gallery/index.html
books/index.html
exhibitions/index.html
readers/index.html
notes/index.html
```

The following previously missing child routes have been created as real HTML pages with visible generated geometry:

```text
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
exhibitions/savant-series/index.html
exhibitions/field-series/index.html
exhibitions/archive/index.html
readers/visual-relations/index.html
readers/plate-engine/index.html
daily/index.html
```

Already existing and confirmed during this pass:

```text
exhibitions/equilateral-hex/index.html
readers/theorem-reader/index.html
field-canvas/mandala/index.html
field-canvas/tessellations/index.html
field-canvas/picture-to-geometry/index.html
field-canvas/export/index.html
workshops/colouring/index.html
workshops/tessellations/index.html
notes/site-architecture.html
notes/project-status.html
```

## Current Design Rule

Every card that looks like a door must be a real door.

Use this pattern for clickable cards:

```html
<a class="card" href="destination/">
  <h3>Title</h3>
  <p>Description.</p>
  <span class="tag">Tag</span>
</a>
```

Avoid using `<article class="card">` for anything that looks like a destination. If a card is deliberately not clickable, it should be visually demoted and should not behave like a door.

## Completion Definition for Version 1.0

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

## Milestone 1: Repository Hygiene and Site Foundation

Status: mostly complete.

Completed:

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
- [x] Add `notes/` directory.
- [x] Add management plan.
- [x] Add `.nojekyll`.
- [x] Add simple 404 page.
- [x] Repair section roots after upload overwrite issue.
- [x] Repair missing child pages behind visible cards.

Remaining:

- [ ] Refactor `index.html` so it uses shared CSS and JS rather than carrying large inline code.
- [ ] Confirm GitHub Pages source branch and root in repository settings.
- [ ] Add `LICENSE` once the public reuse policy is chosen.
- [ ] Add `CONTRIBUTING.md` if community submissions will be accepted.

## Milestone 2: Landing Page Completion

Status: substantially started.

The landing page currently presents the site as public visual geometry, not as a theorem manifesto. It has clear routes into making, watching, field canvas, gallery, and deeper project areas.

Remaining:

- [ ] Final copy pass for public friendliness.
- [ ] Add or confirm Open Graph metadata.
- [ ] Confirm hero and visual preview on phone, tablet, and desktop.
- [ ] Continue removing any residual heavy theory from first-contact copy.

## Milestone 3: Exhibitions Section

Status: route structure repaired; engine still early.

Completed:

- [x] `exhibitions/index.html` exists.
- [x] `exhibitions/equilateral-hex/index.html` exists as first working reader.
- [x] `exhibitions/savant-series/index.html` exists.
- [x] `exhibitions/field-series/index.html` exists.
- [x] `exhibitions/archive/index.html` exists.

Remaining:

- [ ] Improve `assets/js/plate-engine.js`.
- [ ] Add timed compose-hold-decompose-repeat loop.
- [ ] Add plate metadata.
- [ ] Add keyboard navigation.
- [ ] Add touch-friendly previous/next controls.
- [ ] Expand Equilateral / Hex beyond two plates.
- [ ] Add a plate registry format.

## Milestone 4: Field Canvas Section

Status: basic tool exists; child routes exist.

Completed:

- [x] `field-canvas/index.html` exists.
- [x] `field-canvas/paint/app.html` exists.
- [x] `field-canvas/mandala/index.html` exists.
- [x] `field-canvas/tessellations/index.html` exists.
- [x] `field-canvas/picture-to-geometry/index.html` exists.
- [x] `field-canvas/export/index.html` exists.
- [x] SVG export exists in the paint tool.

Remaining:

- [ ] Add PNG export.
- [ ] Add undo.
- [ ] Add better mobile/touch painting.
- [ ] Add hover/active feedback.
- [ ] Add larger field options.
- [ ] Add symmetry mode.
- [ ] Add save/load JSON later.

## Milestone 5: Gallery Section

Status: route structure repaired.

Completed:

- [x] `gallery/index.html` exists.
- [x] `gallery/plate-stills/index.html` exists.
- [x] `gallery/mandalas/index.html` exists.
- [x] `gallery/tessellation-posters/index.html` exists.
- [x] `gallery/field-drawings/index.html` exists.
- [x] `gallery/community/index.html` exists.
- [x] `gallery/downloads/index.html` exists.
- [x] Each child route has visible generated SVG geometry.

Remaining:

- [ ] Add real exported gallery items.
- [ ] Add image metadata format.
- [ ] Add captions and download links where appropriate.
- [ ] Decide whether community gallery is curated or open.

## Milestone 6: Books and Deeper Project

Status: route structure repaired.

Completed:

- [x] `books/index.html` exists.
- [x] `books/theorem-zero-book-1/index.html` exists.
- [x] `books/theorem-zero-book-2/index.html` exists.
- [x] `books/construction-ledger/index.html` exists.
- [x] `books/companion/index.html` exists.
- [x] `books/visual-relations/index.html` exists.

Remaining:

- [ ] Decide whether full books are HTML pages, Markdown downloads, or both.
- [ ] Add reading navigation.
- [ ] Add table of contents.
- [ ] Add mobile-friendly long-form reading style.
- [ ] Add print styles.

## Milestone 7: Shared Plate Engine

Status: v0.1 exists; main capability work remains.

The central architecture must stay intact:

The substrate HTML is the theatre.
The plate is the authored visual event.

The preferred rhythm is:

1. blank beginning;
2. lawful composition;
3. completed moment;
4. lawful decomposition;
5. return to blank;
6. repeat.

Remaining:

- [ ] Define plate object format.
- [ ] Define renderer functions for point, line, circle, polygon, cell, field, glow, and fade.
- [ ] Define timing logic.
- [ ] Define compose/decompose sequence logic.
- [ ] Add keyboard and touch support.
- [ ] Respect reduced-motion preference.

## Milestone 8: Daily Geometry

Status: static prototype exists.

Completed:

- [x] `daily/index.html` exists.
- [x] Page shows a generated geometry plate.
- [x] Page includes one relation and one drawing prompt.
- [x] Page uses honest wording for future email subscription.

Remaining:

- [ ] Link Daily Geometry from the home page and relevant section pages.
- [ ] Add date-based plate selection.
- [ ] Add daily plate registry.
- [ ] Choose external provider before adding any real email subscription form.

## Milestone 9: Downloadables v0.1

Status: not yet complete.

Next files to add:

- [ ] Triangle grid A4 SVG.
- [ ] Hex grid A4 SVG.
- [ ] Mandala colouring sheet SVG.
- [ ] Link downloadables from Field Canvas, Gallery, and Workshops.

## Immediate Next Work Order

1. Link `daily/index.html` from the home page.
2. Improve `assets/js/plate-engine.js` to perform compose-hold-decompose-repeat.
3. Improve `exhibitions/equilateral-hex/index.html` with more plates and minimal arrow navigation.
4. Improve `field-canvas/paint/app.html` with PNG export and undo.
5. Add the first downloadable SVG assets.
6. Add real exported gallery items from the tool and exhibition pages.

## Working Principle

Do not drift into manifesto language on the public landing page.

Do not reinterpret pictures as generic photos. In this project, pictures usually means generated geometry, visual plates, tessellations, mandalas, field drawings, SVG previews, or geometric artifacts.

Do not bury the visitor in theory at the front door. The front page should say what the site contains and what visitors can do.

Keep momentum. Do coherent batches. Report at useful checkpoints.