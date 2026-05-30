# Galway Geometry Site Architecture

## Philosophy

The site is intentionally all-HTML.

No build system.
No framework requirement.
No compilation step.
No dependency chain.

Every page should be readable, editable, and deployable directly through GitHub Pages.

## Core Structure

Public sections:

- Home
- Exhibitions
- Field Canvas
- Gallery
- Books
- Readers
- Workshops
- Notes

These are public destinations.

The site should avoid dead links.

Every visible route should resolve to a page.

## Shared Assets

CSS:

```text
assets/css/galway.css
```

Purpose:

- typography
- layout
- cards
- navigation
- responsive behaviour
- visual identity

JavaScript:

```text
assets/js/typewriter.js
assets/js/navigation.js
assets/js/field-preview.js
```

Purpose:

- animated introductory text
- navigation helpers
- field preview rendering

Future shared engines:

```text
assets/js/geometry-field.js
assets/js/field-paint.js
assets/js/plate-engine.js
```

## Future Engines

### Geometry Field Engine

Reusable geometric substrate.

Responsibilities:

- coordinate generation
- cell generation
- rings and shells
- hit testing
- export support

Used by:

- field canvas
- plate readers
- mandala tools
- image conversion tools

### Plate Engine

Reusable exhibition runtime.

Responsibilities:

- compose
- hold
- decompose
- repeat
- previous plate
- next plate

Used by:

- theorem reader
- exhibitions
- future visual relation catalogue

### Field Paint Engine

Reusable drawing runtime.

Responsibilities:

- paint cells
- colour palette
- export
- symmetry modes

Used by:

- paint tool
- mandala tool
- colouring tools

## Design Rules

Keep interfaces minimal.

Let geometry dominate the page.

Avoid excessive controls.

Avoid framework complexity.

Keep pages responsive.

Keep pages accessible.

## Public Identity

The public site is primarily:

- geometric art
- mandalas
- tessellations
- drawing
- colouring
- visual exhibitions

The deeper geometry project remains available but is not the primary landing experience.

## Current Development Phase

Phase completed:

- repository backbone
- destination pages
- shared visual language
- management documentation

Current phase:

- first working tools

Next milestones:

1. Field Canvas v0.1
2. Plate Reader v0.1
3. First Exhibition
4. Download Pack v0.1
5. Repository-wide link audit
