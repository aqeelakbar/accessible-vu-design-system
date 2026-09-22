# AccessibleVue

A small Vue 3 component study exploring design tokens, Storybook documentation and accessible component patterns. It contains a Button, labelled Input and Modal. This is an experiment, not a production-ready component library or a WCAG conformance claim.

## What is here

- Vue single-file components for Button, Input and Modal
- Shared colour, spacing, radius and type tokens in `src/styles/tokens.scss`
- Storybook stories for each component, with the accessibility addon
- A focused Button test using Testing Library and axe

The Modal has basic dialog markup and a close button. It does **not** yet implement a complete focus trap, focus return or Escape handling, so it should not be reused as a finished accessible dialog.

## Explore locally

```bash
git clone https://github.com/aqeelakbar/accessible-vu-design-system.git
cd accessible-vu-design-system
npm ci
npm run storybook
```

Run the test with `npm test -- --run`. The repository is set up around Storybook rather than a standalone Vite app; there is no `index.html` entry point for `npm run dev` or `npm run build`.

## Design decisions

The components use native HTML elements as their starting point. Input keeps its label associated with the field, Button uses a native button, and shared tokens make visual decisions consistent. The Modal remains an explicit next step: robust keyboard and focus behavior should be implemented and tested before it is used in a product.

This work complements my [design-system case study](https://portfolio-website-chi-three-67.vercel.app/work/design-system-a11y/) and my wider [portfolio](https://portfolio-website-chi-three-67.vercel.app).
