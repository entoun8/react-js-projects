# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo containing 22 independent React practice projects built with Vite. Each project is a standalone application demonstrating different React concepts, TypeScript, and UI patterns.

## Project List

Projects are numbered by difficulty level (1 = easiest, 22 = most complex):

### Beginner Level (1-6)
- **01_birthday** - Birthday reminder app (basic state, rendering lists)
- **02_menu** - Restaurant menu with filtering (array methods, conditional rendering)
- **03_tours** - Tours listing with expand/collapse (state management, UI updates)
- **04_review** - Review/testimonial carousel (state, event handlers)
- **05_accordion** - Accordion/collapse component (conditional rendering, component state)
- **06_tabs** - Tabbed interface component (state, dynamic content)

### Intermediate Level (7-12)
- **07_slider** - Image slider/carousel (state management, intervals)
- **08_lorem-ipsum** - Lorem ipsum generator (forms, dynamic data generation)
- **09_navbar** - Responsive navigation component (responsive design, event handling)
- **10_sidebar** - Sidebar navigation component (conditional rendering, animations)
- **11_color-generator** - Color palette generator (external library integration, forms)
- **12_grocery-bud** - Todo/grocery list app (CRUD operations, local storage)

### Advanced Level (13-18)
- **13_steps** [TypeScript] - Multi-step guide component (TypeScript basics, component composition)
- **14_pizza-menu** [TypeScript] - Pizza restaurant menu (TypeScript, props, conditional rendering)
- **15_far-away** [TypeScript] - Travel packing list manager (TypeScript, state management, sorting)
- **16_stripe** - Stripe landing page clone with navigation (complex layouts, navigation patterns)
- **17_tic-tac-toe** - Tic-tac-toe game with game state logic (game logic, history management)
- **18_management** - Project management app with modals and refs (refs, portals, modals)

### Expert Level (19-22)
- **19_cart** - Shopping cart with useReducer and Context API (Context API, useReducer)
- **20_bank** [TypeScript] - Banking app with Redux Toolkit (TypeScript, Redux Toolkit, complex state)
- **21_movies** - Movie search app with React Router (routing, API integration, search)
- **22_cocktails** - Cocktail search app with React Router (routing, API integration, Context API, useReducer)

## Common Commands

All projects share the same npm scripts. Navigate to any project directory first:

```bash
cd <project-name>
```

Then run:

```bash
# Start development server (usually http://localhost:5173)
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

All projects use:
- **React 18 & 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v3 & v4** - Utility-first CSS
- **ESLint** - Linting with React-specific rules

Some projects also use:
- **TypeScript** - Type-safe development (13_steps, 14_pizza-menu, 15_far-away, 20_bank)
- **Redux Toolkit** - Advanced state management (20_bank)
- **React Router** - Client-side routing (21_movies, 22_cocktails)
- **Context API + useReducer** - State management (19_cart, 22_cocktails)

## Project Structure

Each project follows a similar structure:

```
<project-name>/
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Root component
│   ├── index.css         # Global styles
│   ├── components/       # Reusable components (capitalized)
│   ├── pages/           # Route pages (if using React Router)
│   ├── Context.jsx      # Context provider (if using Context API)
│   ├── Reducer.jsx      # Reducer logic (if using useReducer)
│   ├── data.js          # Mock data
│   └── assets/          # Images and static files
├── public/              # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Architecture Patterns

### Component Organization
- Component files in `src/components/` use PascalCase naming
- Components are typically functional components with hooks
- Prop drilling is avoided using Context API when state needs to be shared across multiple components

### State Management Patterns
1. **Local State** (useState) - Most simple projects (01_birthday, 02_menu, 05_accordion, etc.)
2. **Context API + useReducer** - Complex state (19_cart, 22_cocktails)
   - Context defined in `Context.jsx` with provider component
   - Reducer logic in `Reducer.jsx` with action types
   - Custom hook (e.g., `useGlobalContext()`) for consuming context
3. **Redux Toolkit** - Advanced global state (20_bank)
   - Store configuration with slices
   - Typed hooks for TypeScript projects

### Routing (21_movies, 22_cocktails)
- Uses React Router v6
- Pages in `src/pages/` directory
- Routes defined in `App.jsx`

### Data Handling
- Mock data stored in `data.js` files
- Some projects fetch from external APIs (e.g., 22_cocktails uses TheCocktailDB API)

## Development Workflow

When working on a specific project:
1. Navigate to the project directory
2. Install dependencies if needed: `npm install`
3. Start dev server: `npm run dev`
4. Make changes - hot reload is enabled
5. Check for lint errors: `npm run lint`
6. Build before committing significant changes: `npm run build`

## ESLint Configuration

Projects use `.eslintrc.cjs` or `eslint.config.js` with:
- React plugin for JSX rules
- React Hooks plugin for hooks rules
- React Refresh plugin for fast refresh compatibility
- Configured to report unused disable directives
- Zero tolerance for warnings (`--max-warnings 0`)

## Tailwind Configuration

Most projects use Tailwind CSS with:
- Content paths: `["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
- PostCSS with autoprefixer
- Custom utility classes can be added in `tailwind.config.js`
