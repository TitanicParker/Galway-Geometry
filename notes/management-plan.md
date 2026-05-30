# Galway Geometry Management Plan

## Purpose

This document is the working management plan for completing the Galway Geometry site.

Galway Geometry is an all-HTML GitHub Pages friendly public project for geometric art, mandalas, tessellations, visual plate readers, field drawing, colouring sheets, gallery outputs, plate browsing, and deeper constructional geometry materials.

The public front door should remain aesthetic, practical, and visitor-facing. The deeper project should remain accessible, but it should not dominate the landing page.

## Active Build Convention: Construction Mode

Construction Mode remains the active project convention, but it is no longer promoted by a public banner on the home page.

The final public architecture remains the goal, and the home page should now behave more like a public-facing landing page. Construction Mode remains available as a working dashboard for the builder and for active development.

The working dashboard is:

```text
construction/index.html
```

Current Construction Mode objects:

```text
construction/colouring-generator/
construction/galway_geometry_100_plate_catalogue.html
construction/galway_geometry_site_population_reservoir.html
miscellaneous-visuals/index.html
plates/index.html
readers/plate-engine/?plate=diameter-study
field-canvas/paint/app.html
PROJECT_STATUS.md
```

The dashboard should be updated as the active build focus changes.

Construction Mode does not replace the public site. It is a temporary working layer behind the public-facing architecture while the site is being built.

## Current Repository State

The repository now has a working public spine, shared visual styling, shared scripts, documentation, a custom 404, a basic field canvas tool, a basic plate reader, a plate registry, a plate deck, a registry-connected reader route, a first exhibition route, repaired section roots, repaired child routes, a static Daily Geometry prototype, two major visual reservoirs, a Colouring Generator target, a Miscellaneous Visuals holding route, and a Construction Mode dashboard.

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
│       ├── plate-deck.js
│       ├── plate-engine.js
│       ├── plate-reader-page.js
│       ├── plate-registry.js
│       ├── substrate-viewport.js
│       └── typewriter.js
├── books/
├── construction/
├── daily/
├── exhibitions/
├── field-canvas/
├── gallery/
├── miscellaneous-visuals/
├── notes/
├── plates/
├── readers/
└── workshops/
```

## Completed Route Repair and Population Pass

The following section roots are confirmed as section landing pages rather than accidentally overwritten child pages:

```text
gallery/index.html
books/index.html
exhibitions/index.html
readers/index.html
notes/index.html
```

The following child routes now exist as real HTML pages or construction tools:

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
construction/index.html
construction/galway_geometry_100_plate_catalogue.html
construction/galway_geometry_site_population_reservoir.html
construction/colouring-generator/
miscellaneous-visuals/index.html
plates/index.html
```

Already existing and confirmed during the wider pass:

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

## Current Design Rules

Every card that looks like a door must be a real door.

No geometry image should betray the lawful field.

A visual area should be a viewport onto the substrate unless there is a specific reason for an authored plate-specific SVG.

The plate is code for the reader/renderer, not prose for the visitor.

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
6. Visitors can browse plates.
7. Visitors can use or preview a field canvas.
8. Visitors can download tessellation or colouring materials.
9. Visitors can view a gallery.
10. Visitors can access the deeper project and books.
11. The repository is organised well enough for future growth.

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
- [x] Add Construction Mode dashboard.
- [x] Demote Construction Mode from the public home page banner.

Remaining:

- [ ] Refactor `index.html` so it uses shared CSS and JS rather than carrying large inline code.
- [ ] Confirm GitHub Pages source branch and root in repository settings.
- [ ] Add `LICENSE` once the public reuse policy is chosen.
- [ ] Add `CONTRIBUTING.md` if community submissions will be accepted.

## Milestone 2: Landing Page Completion

Status: substantially started; public-facing again.

The landing page currently presents the site as public visual geometry, not as a theorem manifesto. Construction Mode is no longer displayed as a prominent banner. The hero now routes visitors toward Colouring, Plate Deck, and Daily Geometry.

Remaining:

- [ ] Final copy pass for public friendliness.
- [ ] Add or confirm Open Graph metadata.
- [ ] Confirm hero and visual preview on phone, tablet, and desktop.
- [ ] Continue removing any residual heavy theory from first-contact copy.
- [ ] Keep Construction Mode available but not dominant.

## Milestone 3: Plate Deck and Reader

Status: v0.1 working.

Completed:

- [x] Add `plates/index.html`.
- [x] Add `assets/js/plate-registry.js`.
- [x] Add `assets/js/plate-deck.js`.
- [x] Add `assets/js/plate-reader-page.js`.
- [x] Connect `readers/plate-engine/index.html` to `?plate=<id>`.
- [x] Add authored plate sequences.
- [x] Make reader execute plate sequences by state replacement.

Remaining:

- [ ] Add richer lawful substrate views.
- [ ] Add more plate records.
- [ ] Add primitive-level timed drawing.
- [ ] Add visible liked-plates review page.
- [ ] Reconcile older `assets/js/plate-engine.js` with the registry-connected reader route.

## Milestone 4: Exhibitions Section

Status: route structure repaired; engine still early.

Completed:

- [x] `exhibitions/index.html` exists.
- [x] `exhibitions/equilateral-hex/index.html` exists as first working reader.
- [x] `exhibitions/savant-series/index.html` exists.
- [x] `exhibitions/field-series/index.html` exists.
- [x] `exhibitions/archive/index.html` exists.

Remaining:

- [ ] Convert prepared exhibition routes to substrate viewports where appropriate.
- [ ] Expand Equilateral / Hex beyond two plates.
- [ ] Decide whether exhibitions use the registry plate system or a separate exhibition registry.

## Milestone 5: Field Canvas Section

Status: basic tool exists; child routes exist.

Completed:

- [x] `field-canvas/index.html` exists.
- [x] `field-canvas/paint/app.html` exists.
- [x] `field-canvas/mandala/index.html` exists.
- [x] `field-canvas/tessellations/index.html` exists and is wired to reservoir assets.
- [x] `field-canvas/picture-to-geometry/index.html` exists.
- [x] `field-canvas/export/index.html` exists and is wired to reservoir assets.
- [x] SVG export exists in the paint tool.

Remaining:

- [ ] Add PNG export.
- [ ] Add undo.
- [ ] Add better mobile/touch painting.
- [ ] Add hover/active feedback.
- [ ] Add larger field options.
- [ ] Add symmetry mode.
- [ ] Add save/load JSON later.

## Milestone 6: Gallery Section

Status: route structure repaired; child visuals converted.

Completed:

- [x] `gallery/index.html` exists.
- [x] `gallery/plate-stills/index.html` exists.
- [x] `gallery/mandalas/index.html` exists.
- [x] `gallery/tessellation-posters/index.html` exists.
- [x] `gallery/field-drawings/index.html` exists.
- [x] `gallery/community/index.html` exists.
- [x] `gallery/downloads/index.html` exists.
- [x] All Gallery child visual routes use substrate viewports.

Remaining:

- [ ] Add real exported gallery items.
- [ ] Add image metadata format.
- [ ] Add captions and download links where appropriate.
- [ ] Decide whether community gallery is curated or open.

## Milestone 7: Books and Deeper Project

Status: route structure repaired; child visuals converted.

Completed:

- [x] `books/index.html` exists.
- [x] `books/theorem-zero-book-1/index.html` exists.
- [x] `books/theorem-zero-book-2/index.html` exists.
- [x] `books/construction-ledger/index.html` exists.
- [x] `books/companion/index.html` exists.
- [x] `books/visual-relations/index.html` exists.
- [x] All Books child visual routes use substrate viewports.

Remaining:

- [ ] Decide whether full books are HTML pages, Markdown downloads, or both.
- [ ] Add reading navigation.
- [ ] Add table of contents.
- [ ] Add mobile-friendly long-form reading style.
- [ ] Add print styles.

## Milestone 8: Daily Geometry

Status: static prototype exists.

Completed:

- [x] `daily/index.html` exists.
- [x] Page shows a generated geometry plate.
- [x] Page includes one relation and one drawing prompt.
- [x] Page uses honest wording for future email subscription.
- [x] Page uses a substrate viewport.
- [x] Daily Geometry is linked from the public home hero.

Remaining:

- [ ] Add date-based plate selection.
- [ ] Add daily plate registry.
- [ ] Choose external provider before adding any real email subscription form.

## Milestone 9: Colouring and Downloadables

Status: generator target wired; verification still needed.

Completed:

- [x] `workshops/colouring/index.html` exists and links to the Colouring Generator target.
- [x] Site Population Reservoir includes colouring and downloadable SVG sheet concepts.
- [x] `field-canvas/tessellations/index.html` and `field-canvas/export/index.html` point to reservoir download assets.

Expected generator files:

```text
construction/colouring-generator/index.html
construction/colouring-generator/recipes.js
construction/colouring-generator/renderer.js
```

Remaining:

- [ ] Verify the Colouring Generator loads from GitHub Pages.
- [ ] Extract stable downloadable triangle grid A4 SVG.
- [ ] Extract stable downloadable hex grid A4 SVG.
- [ ] Extract stable downloadable mandala colouring sheet SVG.
- [ ] Link stable downloadables from Field Canvas, Gallery, and Workshops.

## Immediate Next Work Order

1. Verify the Colouring Generator path and dependencies.
2. Mine the reservoirs into stable downloadable assets.
3. Enrich `assets/js/substrate-viewport.js` with more lawful visual views.
4. Add more plates to `assets/js/plate-registry.js`.
5. Convert remaining Exhibitions, Readers, section roots, and notes visual pages to substrate viewports where appropriate.
6. Improve `field-canvas/paint/app.html` with PNG export and undo.

## Working Principle

Do not drift into manifesto language on the public landing page.

Do not reinterpret pictures as generic photos. In this project, pictures usually means generated geometry, visual plates, tessellations, mandalas, field drawings, SVG previews, or geometric artifacts.

Do not bury the visitor in theory at the front door. The front page should say what the site contains and what visitors can do.

Construction Mode remains available, but it should no longer dominate the public home page.

Keep momentum. Do coherent batches. Report at useful checkpoints.
