# Substrate and Plates

## Purpose

This note records a central architectural distinction in Galway Geometry.

The HTML reader is not the theorem.

The plate is not the application.

The reader is the theatre.

The plate is the authored visual event that takes place inside the theatre.

Future GPT sessions must preserve this distinction.

## The Substrate HTML

The substrate HTML is the receiving structure.

It provides:

- the black stage;
- the SVG viewport;
- responsive phone, tablet, and desktop layout;
- the geometry engine;
- the timing loop;
- previous and next navigation;
- plate title and number;
- keyboard and touch controls;
- accessibility fallbacks;
- reduced-motion handling;
- export or capture support later.

The substrate HTML should stay stable, quiet, and reusable.

It should not become a rich application full of controls.

The teaching or exhibition happens inside the plate cycle.

## The Plate

A plate is an authored visual relation.

It defines what appears, how it appears, what resolves, how it decomposes, and what remains visible long enough to be understood.

A plate may be artistic, pedagogical, decorative, experimental, or theorem-like, but it must still be authored as a visual event rather than as a static diagram.

A plate can be:

- a visual theorem;
- a geometry lesson;
- a mandala study;
- a tessellation study;
- a field relation;
- a daily geometry image;
- an exhibition item.

## Compose, Hold, Decompose, Repeat

The preferred plate rhythm is:

1. blank beginning;
2. lawful composition;
3. completed moment;
4. lawful decomposition;
5. return to blank;
6. repeat.

The time window is part of the pedagogy.

A viewer should be able to watch a relation arrive, resolve, disappear, and return.

## Plate Registry

A reader should eventually load plates from a registry.

A plate entry may contain:

```js
{
  id: "equilateral-intersection-01",
  title: "Equal-Radius Intersection",
  type: "theorem" | "exhibition" | "daily" | "mandala" | "field",
  claim: "Two equal-radius circles centered one unit apart force an equilateral triangle.",
  invariant: "same radius",
  duration: 15000,
  compose: [...],
  hold: [...],
  decompose: [...]
}
```

The exact object format can evolve, but the distinction must remain:

- the reader runs the timing and stage;
- the plate supplies the visual argument.

## Relation Versus Decoration

The project allows beauty.

It allows colour.

It allows strange, dense, savant, and exhibition-like visual plates.

But the author should know whether a visible element is:

- geometry;
- construction;
- emphasis;
- colour;
- decoration;
- UI.

Decoration should not be mistaken for generated geometry.

## Daily Geometry

A daily geometry feature fits naturally into the plate system.

The daily page can select one plate per date and display:

- a daily geometry image;
- a daily geometry relation;
- a short theorem-style lesson;
- a mandala prompt;
- a tessellation prompt;
- a field drawing prompt.

This can begin as a static GitHub Pages feature with no backend.

A future email supplement can use the same daily plate registry.

## Email Supplement

The desired future feature is a Daily Geometry Supplement.

Visitors may eventually subscribe by email and receive:

- a daily geometry image;
- a daily theorem lesson;
- a daily mandala or colouring prompt;
- a daily field relation.

GitHub Pages alone cannot manage subscriptions or email delivery.

A future version will need an external service such as Buttondown, Mailchimp, ConvertKit, Brevo, Substack, Formspree, or a GitHub Actions workflow connected to an email API.

Until a real mailing service is chosen, the public site should not pretend to collect active subscriptions.

Use wording such as:

"Daily Geometry Supplement is planned. Subscription will open when the mailing system is connected."

## Product Direction

The substrate/plate distinction supports several public products:

- visual exhibitions;
- theorem readers;
- daily geometry plates;
- field canvas tools;
- mandala tools;
- tessellation downloads;
- gallery stills;
- daily geometry supplement.

The same substrate can host many plate families.

The same plate registry can support exhibitions, daily pages, readers, and still exports.
