# Galway Geometry Project Status

## Current Status

Galway Geometry is now a public all-HTML site skeleton with a coherent structure, shared styling, shared scripts, top-level destination pages, project notes, a management plan, and GitHub Pages support.

The repository is ready for capability development.

## Project Identity

Galway Geometry is a visual geometry project for geometric art, mandalas, tessellations, field drawing, visual plate readers, and deeper constructional geometry.

The public front door is practical and aesthetic:

- make geometric art;
- draw mandalas;
- colour mandalas;
- download tessellations;
- watch visual geometry unfold;
- explore the deeper project when desired.

The deeper project includes construction ledgers, visual relation readers, Theorem Zero material, and a lawful geometric field model.

## What Exists

```text
Galway-Geometry/
├── README.md
├── PROJECT_STATUS.md
├── index.html
├── 404.html
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── galway.css
│   └── js/
│       ├── field-preview.js
│       ├── navigation.js
│       └── typewriter.js
├── books/
│   └── index.html
├── exhibitions/
│   └── index.html
├── field-canvas/
│   ├── index.html
│   ├── export/
│   │   └── index.html
│   ├── mandala/
│   │   └── index.html
│   ├── paint/
│   │   └── index.html
│   ├── picture-to-geometry/
│   │   └── index.html
│   ├── symmetry/
│   │   └── index.html
│   └── tessellations/
│       └── index.html
├── gallery/
│   └── index.html
├── notes/
│   ├── index.html
│   └── management-plan.md
├── readers/
│   ├── index.html
│   └── theorem-reader/
│       └── index.html
└── workshops/
    ├── colouring/
    │   └── index.html
    └── tessellations/
        └── index.html
```

## What Works Now

- Public landing page exists.
- Major destination pages exist.
- Shared CSS exists.
- Shared JavaScript exists for typewriter text, navigation, and field preview.
- Custom 404 exists.
- GitHub Pages will not be processed by Jekyll because `.nojekyll` exists.
- Project notes and management plan exist.
- Public-facing copy is mostly practical and aesthetic rather than theoretical.
- The repository is structured enough for another GPT or developer to understand the direction.

## What Is Intentionally Incomplete

The current destination pages are mostly structured placeholders. They are real pages, not dead links, but the major interactive capabilities are not built yet.

Missing capabilities:

- working field paint canvas;
- image-to-geometry conversion;
- mandala drawing tool;
- tessellation download pack;
- visual plate reader engine;
- first polished exhibition;
- gallery image collection;
- rendered books or manuscript pages.

## Immediate Priority

The next work should move from structure to capability.

Priority 1: Field Canvas v0.1

- Create reusable geometry field engine.
- Render clickable triangle or hex cells.
- Add colour palette.
- Add clear/reset.
- Add export PNG.

Priority 2: Plate Reader v0.1

- Create reusable plate reader CSS and JavaScript.
- Implement compose, hold, decompose, repeat loop.
- Add previous/next controls.
- Build first exhibition.

Priority 3: Downloadables

- Create SVG triangle sheet.
- Create SVG hex sheet.
- Create mandala colouring sheet.
- Link from Field Canvas and Gallery.

Priority 4: Link Audit

- Verify every visible link.
- Replace any unsupported destination with a real page.
- Confirm mobile, tablet, and desktop navigation.

## Suggested Next Files

```text
assets/js/geometry-field.js
assets/js/field-paint.js
assets/css/field-canvas.css
field-canvas/paint/app.html

assets/js/plate-engine.js
assets/css/plate-reader.css
exhibitions/equilateral-hex/index.html

downloads/triangle-grid-a4.svg
downloads/hex-grid-a4.svg
downloads/mandala-sheet-01.svg
```

## Public Copy Rule

The public site should tell visitors what they can do.

Avoid leading with heavy theory, manifesto language, or grand claims.

The deeper project belongs in Books, Notes, Readers, and later theory pages.

## Current Strategic Direction

Galway Geometry should become:

1. A place to make geometric art.
2. A place to draw and colour mandalas.
3. A place to download tessellations and field sheets.
4. A place to watch visual geometry exhibitions.
5. A place to explore the deeper constructional geometry project.

The site should remain all-HTML, clean, responsive, and easy to host on GitHub Pages.
