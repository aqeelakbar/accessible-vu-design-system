# AccessibleVue Design System

A lightweight, accessible-first design system built with Vue 3 and Vite. Designed to showcase scalable UI components with built-in accessibility, semantic structure, and design token support.

## ✨ Overview

AccessibleVue is a Vue 3-based design system built with:

- ✅ Semantic HTML and ARIA attributes for accessibility (WCAG 2.1 AA)
- 🎨 Design tokens for consistent theming (colors, spacing, typography)
- 🧱 Modular, reusable components (Button, Input, Modal)
- 📘 Storybook for interactive documentation and developer handoff
- 🧪 Unit and accessibility tests with **Vitest** and **axe-core**

Built in under 24 hours to demonstrate Vue and design system architecture for senior-level frontend roles.

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/accessible-vue-design-system.git
cd accessible-vue-design-system

# Install dependencies
npm install

# Run the dev server
npm run dev

# Start Storybook
npm run storybook

# Run unit and a11y tests
npm run test
```

---

## 🧩 Components

| Component | Features |
|----------|----------|
| **Button** | Variant support (primary, secondary), keyboard accessible, ARIA labelling |
| **Input** | Label binding, ARIA attributes, validation states |
| **Modal** | Focus trap, ESC to close, keyboard navigation, semantic roles |

Each component is documented and tested for accessibility.

---

## 🎨 Design Tokens

Tokens are defined in `tokens.scss` and include:

- Color (`--color-primary`, `--color-error`, etc.)
- Spacing (`--space-sm`, `--space-md`)
- Radius (`--radius-sm`)
- Typography (`--font-size-base`, `--font-size-lg`)

These can be themed and reused across components.

---

## 🔍 Testing

Accessibility tests are written using [axe-core](https://github.com/dequelabs/axe-core) and integrated with [Vitest](https://vitest.dev).

```ts
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/vue';
expect.extend(toHaveNoViolations);
```

Run with:

```bash
npm run test
```

---

## 📖 Storybook

Interactive documentation is available via Storybook. This includes:

- Component props
- Live examples
- Accessibility auditing

Start Storybook:

```bash
npm run storybook
```

---

## 📂 Folder Structure

```
accessible-vue-design-system/
├── src/
│   ├── components/        # Vue components
│   ├── styles/            # Tokens and base styles
├── tests/                 # Vitest + axe-core tests
├── .storybook/            # Storybook config
├── README.md
```

---

## 💡 Why This Project?

This design system demonstrates:

- Technical depth in Vue 3 + Composition API
- Attention to accessibility from the ground up
- Design system thinking and reusability
- Ability to build and document a working system fast
- Frontend testing with accessibility in mind

It aligns with roles focused on **design systems**, **accessibility**, and **internal tooling** — like the Senior Frontend Engineer role at your company.

---

## 📜 License

MIT — free to use, extend, and improve.
