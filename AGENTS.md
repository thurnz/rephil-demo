# AGENTS.md

Guidance for AI coding agents working in this repository. Read this before making changes.

## Project Overview

- **Name:** Rephil Stations demo site
- **Purpose:** A demo redesign of https://rephil.ph/, the site of Rephil Station Inc., a 100% Filipino-owned fuel retailer with 100+ stations across Luzon, Visayas and Mindanao. It should look like a clear, modern upgrade of the current site.
- **Stack:** Next.js (App Router), React, TypeScript (strict mode), Tailwind CSS, Vitest
- **Package manager:** npm — use only npm; never mix lockfiles (`package-lock.json` is the source of truth)
- **Node version:** see `.nvmrc` / `engines` in `package.json`

## Commands

Run these from the repo root.

| Task                    | Command            |
| ----------------------- | ------------------ |
| Install deps            | `npm install`      |
| Dev server              | `npm run dev`      |
| Production build        | `npm run build`    |
| Start production server | `npm run start`    |
| Lint                    | `npm run lint`     |
| Type check              | `npx tsc --noEmit` |
| Format                  | `npm run format`   |
| Tests                   | `npm test`         |

**Before finishing any task**, run lint, type check, and tests (and build if you touched config, routing, or data fetching). Do not report a task as done if any of these fail.

## Project Structure

```
src/
  app/              # Routes, layouts, loading/error states (App Router)
    (marketing)/    # Route groups for organization
    api/            # Route handlers
  components/
    ui/             # Generic, reusable primitives (Button, Input, Modal)
    features/       # Feature-specific components
  lib/              # Utilities, helpers, API clients
  hooks/            # Custom React hooks
  types/            # Shared TypeScript types
  styles/           # Global styles
public/             # Static assets
```

- Use the `@/` alias for imports from `src/` (e.g. `import { cn } from "@/lib/utils"`).
- Colocate component-specific files (tests, styles, helpers) next to the component.

## Skills

Project-specific skills live in `.agents/skills/`. Each skill is a folder containing a `SKILL.md` that describes when and how to use it.

- Before starting a task, check `.agents/skills/` for a relevant skill and follow its instructions.
- If a skill conflicts with this file, ask before proceeding.

## Code Style & Conventions

### TypeScript

- `strict` mode is on. **Never use `any`**; use `unknown` and narrow, or define a proper type.
- Avoid non-null assertions (`!`) and `@ts-ignore`. If unavoidable, use `@ts-expect-error` with a comment explaining why.
- Prefer `type` for unions and props, `interface` when extension/merging is needed.
- Validate external data (API responses, form input, env vars) at the boundary, e.g. with Zod.
- Use explicit return types for exported functions.

### React

- Function components only; no class components.
- Keep components small and focused. Extract logic into hooks when a component grows past ~150 lines.
- Don't use `useEffect` for things that can be derived during render or handled in event handlers.
- Always provide stable, unique `key` props in lists (never array index for dynamic lists).
- Props are typed explicitly; destructure in the function signature.

### Next.js

- **Default to Server Components.** Add `"use client"` only when you need state, effects, event handlers, or browser APIs, and push it as far down the tree as possible.
- Fetch data in Server Components or route handlers, not in `useEffect`.
- Use `next/image` for images, `next/link` for internal navigation, and `next/font` for fonts.
- Define metadata via the `metadata` export or `generateMetadata`, not manual `<head>` tags.
- Every route segment with async data should have appropriate `loading.tsx` and `error.tsx`.
- Use Server Actions or route handlers for mutations; validate and authorize on the server.

### Naming

- Components & types: `PascalCase` (`UserCard.tsx`)
- Hooks: `camelCase` prefixed with `use` (`useDebounce.ts`)
- Utilities & variables: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Route folders and non-component files: `kebab-case`

## Styling

- Styling is done with **Tailwind CSS** utility classes. Don't add CSS Modules or CSS-in-JS.
- Use theme tokens from the Tailwind config; avoid arbitrary values (`w-[137px]`) when a token exists.
- Use the `cn()` helper (`clsx` + `tailwind-merge`) in `src/lib/utils.ts` to compose conditional classes.
- Build responsive, mobile-first layouts (base styles first, then `sm:`, `md:`, `lg:`).
- Keep global CSS minimal: Tailwind directives, CSS variables, and base resets only.
- Extract repeated class combinations into components, not `@apply` blocks.

## Design Direction

This is a redesign of an existing site. Keep its content and purpose, but make it look and feel noticeably better. It must **not** look like a generic AI-generated template.

### Brand voice

- Value-led, trustworthy, proudly Filipino. Taglines from the current site: "Fuel for the Filipino", "Subok, Sulit, Sigurado", "Happy to Serve You".
- Tone: confident, warm, plain-spoken. Short punchy headlines; light Taglish is fine where it fits the brand.

### Visual style

- Bold, high-contrast, editorial feel with large typography and generous whitespace. Think modern fuel and automotive brand, not SaaS landing page.
- Palette: **reuse the exact colors from the current rephil.ph site** (logo, header, buttons, and hero backgrounds). Do not invent a new palette or swap in "nicer" colors. Define the colors once as Tailwind theme tokens (`primary`, `accent`, `surface`, `ink`) and never hardcode hex values in components.
  - Brand colors (sampled from the current site and logo):
    - `brand-red`: `#FF002E` (logo red, primary action color)
    - `brand-navy`: `#001C54` (logo navy, primary dark / text on light backgrounds)
    - `brand-sun`: `#FEF03C` (sun emblem yellow, used for the headline accent, buttons, and badges)
    - `brand-orange`: `#E0832C` (fuel swoosh and droplet accent)
    - `brand-indigo`: `#1B0785` (header gradient start; the header blends indigo into red)
    - `brand-blue`: `#2B46B3` (carousel arrow buttons and secondary UI)
  - The brand story is red + navy with a yellow sun, echoing the Philippine flag. Keep that balance: red and navy lead, yellow and orange are accents only.
  - Add lighter and darker shades of the brand colors as needed for backgrounds, borders, and hover states, and check text contrast (WCAG AA).
- Typography: a distinctive display font for headings (e.g. Bricolage Grotesque or Archivo) paired with a clean body font (e.g. DM Sans), loaded via `next/font`. **Do not use Inter, Roboto, or Arial.**
- Use real station, fuel, and people imagery. No stock illustrations, emoji as icons, or abstract blobs.
- One cohesive icon set (Lucide).
- Motion: subtle and purposeful (hover states, fade/slide on scroll). Respect `prefers-reduced-motion`.

### Avoid (the "generic AI site" look)

- Purple/blue gradients, glassmorphism, or glowing orbs
- Centered hero with two buttons over a gradient
- Identical three-column feature cards with icons
- Overly rounded everything with soft drop shadows
- Placeholder lorem ipsum or vague marketing copy

### Page sections (mirror the current site, but better)

1. **Hero:** strong headline ("Fuel for the Filipino"), key stat (100+ stations), primary CTA to find a station.
2. **About:** company story, mission, vision, and the R-E-P-H-I-L core values presented as a memorable visual, not a plain list.
3. **Stations:** new and upcoming stations with status badges ("Now open" / "Opening soon") and a Navigate link to Google Maps. Make it filterable by region if feasible.
4. **Careers:** tabs for Stations, Head Office, and Autocare roles, with clear apply actions.
5. **Testimonials:** real customer quotes with the station name, as a carousel or masonry layout.
6. **Contact:** phone, email, map, social links, and a contact form.

### Content rules

- Reuse the real content from rephil.ph (station names, roles, contacts, testimonials). Don't invent prices, stats, or station data.
- Fix typos from the original (e.g. "asigned", "envolved", "wholsale", "Chippest") when carrying text over.
- Flag inconsistencies instead of guessing. The original says the company was established in 2002 in one place and 2022 in another; confirm with the client.
- Keep content in typed data files (e.g. `src/data/stations.ts`), not hardcoded in JSX.
- Mobile first: most visitors are likely on phones. Navigation, station lookup, and contact actions (call, directions) must work well on small screens.

## Design Reference

Mockups live in `docs/design/`. The current one is `docs/design/mockup-home.png` (home page, desktop). Use it as the visual reference for layout, hierarchy, and spacing.

- Match the mockup's structure and feel, but build with the Tailwind tokens and fonts defined in this file. Don't eyeball colors from pixels.
- If the mockup and this file conflict, ask before proceeding.
- If you can't view images, rely on the description below and ask if something is unclear.
- Photos in the mockup are placeholders. Use real images when available, and keep placeholders clearly marked.

### Mockup description (home page, top to bottom)

1. **Disclaimer banner:** thin yellow strip: "Design mockup – an unofficial concept redesign of rephil.ph (photos are placeholders)". Keep it on the demo.
2. **Header:** floating rounded pill with a purple-to-red gradient, logo at left, nav at right (Home, About Us, New Stations, Careers, Testimonials, Contact Us). Active link has a yellow underline.
3. **Hero:** indigo-to-purple-to-red diagonal gradient background. Huge, tightly tracked white headline "Fuel for the Filipino" with "Filipino" in yellow. Below it: "SUBOK. SULIT. SIGURADO." in spaced caps with a yellow underline, a short description, a yellow "Find a station" button and an outlined "About Rephil" button. On the right, a tilted photo panel with a yellow sun burst on its corner and a "100+ stations nationwide" badge (navy, yellow left border). A fuel nozzle with droplets sits at the bottom left, with a flowing swoosh (orange to navy to red) running across the bottom of the hero.
4. **About ("Proudly Filipino, since 2002"):** near-black background. Large Rephil logo oval on the left surrounded by a red dot pattern. On the right: heading, a paragraph with "100% Filipino-owned" in red, and a joined Mission (red) and Vision (navy) card with rounded outer corners and a sun icon on each title.
5. **Values ("Six values. One name."):** dark purple-navy background, six equal tiles spelling R-E-P-H-I-L (Responsiveness, Excellence, Professionalism, Harmony, Integrity, Live with the Brand). Tile colors step across a gradient from indigo to purple to magenta to red to orange. Giant letter at top left, value name at bottom left.
6. **New stations ("New stations, now open"):** navy background with a large red circle bleeding off the top right. Three cards with a photo area, station name, a yellow status pill ("Now open" / "Opening soon"), and an underlined "Navigate" link.
7. **Footer:** very dark navy, centered copyright line.

### Extra tokens from the mockup

- `ink`: `#0C0B1E` (near-black section background)
- `surface`: `#15122F` (dark purple-navy section background)
- `navy-900`: `#010F32` (footer), `navy-800`: `#021A54` (stations section), `navy-600`: `#17316F` (cards on navy)
- `red-500`: `#F02A39` and `red-600`: `#DC2634` for UI surfaces. The mockup's reds are slightly softer than the logo red (`#FF002E`), so use the logo red only for the logo itself.
- Values gradient stops: `#1E0C84` (R), `#4A0C78` (E), `#8C1562` (P), `#CA224F` (H), `#F02A39` (I), `#F9992F` (L)
- Hero gradient: `#0D1369` (left) through `#5F0C70` (middle) to `#BD1F50` (right)
- The mockup uses a heavy, tightly tracked grotesque for headings and a clean, friendly sans for body text. Pick fonts that match; no Inter, Roboto, or Arial.

### Open content question

The mockup says "since 2002", but the original site also says 2022 in one place. Confirm with the client before shipping.

## Accessibility & Quality

- Use semantic HTML (`<nav>`, `<main>`, `<button>`, etc.) before reaching for ARIA.
- All images need meaningful `alt` text (empty `alt=""` for decorative).
- Interactive elements must be keyboard accessible with visible focus states.
- Maintain sufficient color contrast (WCAG AA).
- Keep an eye on Core Web Vitals: avoid layout shift, lazy-load below-the-fold content, minimize client JS.

## Testing

- Test framework: **Vitest** with React Testing Library (`@testing-library/react`, `jsdom` environment); Playwright for e2e if added later
- Test behavior the user sees, not implementation details.
- Add or update tests for any new logic or bug fix.
- Name tests `*.test.ts(x)`, colocated with the source file.

## Environment & Secrets

- Never commit secrets. Use `.env.local` for local values; keep `.env.example` up to date with every variable (no real values).
- Only variables prefixed `NEXT_PUBLIC_` are exposed to the browser. Never put secrets in them.
- Access env vars through a single validated module (e.g. `src/lib/env.ts`), not `process.env` scattered around.

## Git & PR Workflow

- Branch naming: `feat/…`, `fix/…`, `chore/…`
- Commit messages: Conventional Commits (`feat: add contact form`)
- Keep PRs focused and small. Describe what changed and why.

## Boundaries

### Always

- Match existing patterns in the codebase before introducing new ones.
- Make the smallest change that solves the problem.
- Run lint, type check, and tests before finishing.

### Ask first

- Adding or upgrading dependencies
- Changing build config (`next.config`, `tsconfig`, ESLint/Prettier rules)
- Restructuring folders or changing routing
- Altering the database schema or auth flow

### Never

- Commit secrets, `.env*` files with real values, or generated build output
- Edit lockfiles by hand
- Disable lint or type rules to make errors go away
- Delete or skip failing tests without explanation
- Modify files in `node_modules`, `.next`, or other generated directories

## Notes for Agents

- If requirements are ambiguous, ask a clarifying question instead of guessing.
- When making a non-obvious decision, leave a short comment explaining _why_, not _what_.
- Summarize what you changed and anything you didn't verify at the end of each task.
