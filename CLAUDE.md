# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Untitled UI starter kit for Next.js - a React UI component library built with:
- Next.js 16 with Turbopack
- React 19
- Tailwind CSS v4
- TypeScript 5
- React Aria (react-aria-components) for accessible component primitives

## Commands

```bash
npm run dev        # Start development server with Turbopack
npm run dev:turbo  # Alias for dev (explicit Turbopack)
npm run build      # Production build
npm run start      # Start production server
```

## Architecture

### Path Aliases
- `@/*` maps to `./src/*`

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── application/        # Complex UI patterns (navigation, modals, tables, date pickers)
│   ├── base/              # Core form components (buttons, inputs, selects, checkboxes)
│   └── foundations/       # Basic elements (icons, logos, ratings)
├── providers/             # React context providers (theme, router)
├── styles/                # CSS files (globals, theme, typography)
└── utils/                 # Utility functions
```

### Styling System

**Tailwind CSS v4 with CSS-first configuration:**
- Theme variables defined in `src/styles/theme.css` (colors, typography, shadows, radii)
- Custom variants in `src/styles/globals.css`: `dark:`, `label:`, `focus-input-within:`
- Dark mode uses `.dark-mode` class (toggled via next-themes)
- Uses `tailwind-merge` via the `cx()` utility for class merging

**Key utility:**
```tsx
import { cx, sortCx } from "@/utils/cx";
// cx() - merge Tailwind classes with conflict resolution
// sortCx() - helps Tailwind IntelliSense sort classes in style objects
```

### Component Patterns

Components use a consistent pattern with `sortCx` for organized style definitions:
```tsx
export const styles = sortCx({
    common: { root: "...", icon: "..." },
    sizes: { sm: { root: "..." }, md: { root: "..." } },
    colors: { primary: { root: "..." }, secondary: { root: "..." } },
});
```

Components are built on React Aria primitives and support:
- `isDisabled`, `isLoading` states
- Size variants (sm, md, lg, xl)
- Color variants (primary, secondary, tertiary, destructive)
- Icon slots (`iconLeading`, `iconTrailing`)

### Providers

Two providers wrap the app in `layout.tsx`:
- `RouteProvider` - Integrates Next.js router with React Aria's RouterProvider
- `Theme` - next-themes ThemeProvider with `light-mode`/`dark-mode` class values

### Icons

Uses `@untitledui/icons` package with optimized imports configured in `next.config.mjs`.

## Brand Colors

**Primary Accent Color:** `#ff5a5f` (coral red)
- Use this as the main brand/accent color throughout the project
- Hover state: `#e04850` (darker shade)
- Light background: `#ff5a5f/10` or `#fff5f5`
- Shadow: `shadow-[#ff5a5f]/25`

## Code Style

- Prettier with `printWidth: 160`, `tabWidth: 4`
- Import order: react → react-dom → external packages → @/ aliases → relative imports
- Tailwind class sorting enabled via `prettier-plugin-tailwindcss`
