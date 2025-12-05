# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo containing 17 independent React practice projects built with Vite. Each project is a standalone application demonstrating different React concepts and UI patterns.

## Project List

- **accordion** - Accordion/collapse component
- **birthday** - Birthday reminder app
- **cart** - Shopping cart with useReducer and Context API
- **cocktails** - Cocktail search app with React Router
- **color-generator** - Color palette generator
- **grocery-bud** - Todo/grocery list app
- **lorem ipsum** - Lorem ipsum generator
- **management** - Project management app with modals and refs
- **menu** - Restaurant menu with filtering
- **navbar** - Responsive navigation component
- **review** - Review/testimonial carousel
- **sidebar** - Sidebar navigation component
- **slider** - Image slider/carousel
- **stripe** - Stripe landing page clone with navigation
- **tabs** - Tabbed interface component
- **tic-tac-toe** - Tic-tac-toe game with game state logic
- **tours** - Tours listing with expand/collapse

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
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS (most projects)
- **ESLint** - Linting with React-specific rules

Some projects also use:
- **React Router** - Client-side routing (cocktails)
- **Context API + useReducer** - State management (cart, cocktails)

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
1. **Local State** (useState) - Most simple projects (accordion, birthday, menu, etc.)
2. **Context API + useReducer** - Complex state (cart, cocktails)
   - Context defined in `Context.jsx` with provider component
   - Reducer logic in `Reducer.jsx` with action types
   - Custom hook (e.g., `useGlobalContext()`) for consuming context

### Routing (cocktails project)
- Uses React Router v6
- Pages in `src/pages/` directory
- Routes defined in `App.jsx`

### Data Handling
- Mock data stored in `data.js` files
- Some projects fetch from external APIs (e.g., cocktails uses TheCocktailDB API)

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
