# Rephil Stations – Concept Redesign

A modern, high-contrast, editorial concept redesign of [rephil.ph](https://rephil.ph/), the website of **Rephil Station Inc.** — a 100% Filipino-owned independent fuel retailer with 100+ stations across Luzon, Visayas, and Mindanao.

> **Disclaimer:** This project is an unofficial design concept and demo prototype. It is not affiliated with or endorsed by Rephil Station Inc. Photos and trademarks belong to their respective owners.

---

## Overview

This project reimagines the Rephil digital experience into a confident, trustworthy, and distinctly Filipino automotive and energy brand showcase. It elevates the visual hierarchy, typographic weight, and user journey while staying true to Rephil's authentic identity, taglines, and core brand values.

### Key Highlights

- **Distinctive Brand Identity:** Built around the brand's authentic palette echoing the Philippine flag — Bold Red (`#FF002E`), Deep Navy (`#001C54`), Sun Yellow (`#FEF03C`), and Flame Orange (`#E0832C`).
- **Editorial Typography:** High-contrast, tightly tracked grotesque display headings paired with clean, accessible sans-serif body text.
- **Hero Experience:** Bold statement *"Fuel for the Filipino"*, the signature *"Subok, Sulit, Sigurado"* motto, nationwide station count, and custom fuel swoosh & nozzle graphics.
- **Company Story & Purpose:** Dedicated About section highlighting 100% Filipino ownership alongside integrated Mission & Vision cards.
- **R-E-P-H-I-L Core Values:** A multi-hue gradient tile grid showcasing *Responsiveness, Excellence, Professionalism, Harmony, Integrity,* and *Live with the Brand*.
- **Stations Directory:** Station showcase cards with active status pills (*Now open* / *Opening soon*) and one-click Google Maps directions.
- **Careers Hub:** Filterable department roles across *Stations*, *Head Office*, and *Autocare* with direct application paths.
- **Customer Voices & Contact:** Real customer testimonials, full company contact details, and an interactive inquiry form.
- **Responsive & Accessible:** Fully mobile-first with floating pill navigation, visible focus rings, and WCAG AA compliant color contrast.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components by default)
- **Library:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

---

## Project Structure

```
├── docs/                 # Design references and layout mockups
├── public/               # Static assets & brand imagery
├── src/
│   ├── app/              # Next.js App Router (layout, page metadata)
│   ├── components/
│   │   ├── features/     # Feature sections (Hero, About, Values, Stations, Careers, etc.)
│   │   └── ui/           # Reusable UI primitives
│   ├── data/             # Typed content datasets (stations, careers, navigation, etc.)
│   ├── lib/              # Utility functions & helpers
│   ├── styles/           # Global styles and Tailwind directives
│   ├── test/             # Test setup and mocks
│   └── types/            # Shared TypeScript type definitions
├── tailwind.config.ts    # Custom brand tokens and color ramps
└── vitest.config.ts      # Test suite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js:** v18.18+ or v20+
- **Package Manager:** `npm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server |
| `npm run build` | Builds the production-ready application bundle |
| `npm run start` | Runs the built production server locally |
| `npm run lint` | Runs Next.js ESLint checks |
| `npm run typecheck` | Runs TypeScript compiler checks without emitting files |
| `npm test` | Runs the Vitest test suite |
| `npm run format` | Formats codebase using Prettier |

---

## Testing & Quality Assurance

All features are tested using Vitest and React Testing Library:

```bash
# Run unit and integration tests
npm test

# Type check
npm run typecheck

# Linting
npm run lint
```

---

## License

This project is open-source under the [MIT License](LICENSE).
