# React Mini Projects Portfolio

A collection of 17 React projects demonstrating core concepts, state management patterns, routing, API integration, and UI component development. Built as part of my learning journey toward full-stack development.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## 🎯 Purpose

This portfolio showcases my progression in React development, from basic components to complex state management with Context API and useReducer. These projects demonstrate skills essential for modern web development and my journey toward becoming a full-stack developer.

---

## 🛠️ Technologies

- **React 18** - Modern hooks and functional components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Context API & useReducer** - State management patterns

---

## 📂 Projects

### 🏗️ Advanced Applications

#### [Project Management App](./management)

Full-featured project and task management application with complex state handling.

- **Tech:** React, Tailwind CSS, Vite
- **Features:** Create/delete projects, manage tasks, sidebar navigation, modal support
- **Concepts:** Complex state management, component composition, refs & modals, form validation

#### [Shopping Cart](./cart)

E-commerce cart with advanced state management patterns.

- **Tech:** React, useReducer, Context API, React Icons
- **Features:** Add/remove items, quantity control, total calculation, clear cart
- **Concepts:** useReducer pattern, global state with Context API, action dispatchers

#### [Cocktail Finder](./cocktails)

Multi-page cocktail search application with external API integration.

- **Tech:** React Router v6, TheCocktailDB API, Tailwind CSS
- **Features:** Search cocktails, detailed cocktail pages, about page, routing, error handling
- **Concepts:** React Router, API integration, async data fetching, loading states

#### [Stripe Navigation Clone](./stripe)

Animated dropdown navigation system with dynamic positioning.

- **Tech:** React, Context API, React Icons
- **Features:** Hover-triggered submenus, dynamic positioning, responsive sidebar
- **Concepts:** Advanced Context usage, coordinate tracking, animated transitions

---

### 🎮 Interactive Applications

#### [Tic-Tac-Toe Game](./tic-tac-toe)

Two-player game with winner detection and game state management.

- **Tech:** React, Tailwind CSS
- **Features:** Player customization, winner detection, game history, draw detection, rematch
- **Concepts:** Game logic, state derivation, conditional rendering, winner algorithms

#### [Grocery List Manager](./grocery-bud)

Todo/grocery list with full CRUD operations.

- **Tech:** React, Font Awesome, Tailwind CSS
- **Features:** Add/edit/delete items, alert system, form validation
- **Concepts:** Form handling, state updates, user feedback, CRUD operations

#### [Tours Browser](./tours)

Travel destination browser with API data.

- **Tech:** React, Tailwind CSS, async/await
- **Features:** Fetch tours from API, loading states, remove functionality, error handling
- **Concepts:** API integration, loading/error states, async data fetching

#### [Restaurant Menu](./menu)

Menu display with category filtering.

- **Tech:** React, Tailwind CSS
- **Features:** Dynamic category generation, filter by category, responsive grid
- **Concepts:** Data filtering, dynamic UI generation, array methods

---

### 🎨 UI Components

#### [Accordion Component](./accordion)

FAQ-style accordion with toggle functionality.

- **Tech:** React, Tailwind CSS
- **Features:** Expand/collapse questions, single-item toggle
- **Concepts:** useState for toggle state, conditional rendering

#### [Tabs Interface](./tabs)

Tabbed content switcher for company experience display.

- **Tech:** React, Tailwind CSS
- **Features:** Switch between different company experiences
- **Concepts:** Dynamic content rendering, active state management

#### [Image Slider](./slider)

Carousel with navigation controls and boundary detection.

- **Tech:** React, Tailwind CSS
- **Features:** Left/right navigation, boundary detection, smooth transitions
- **Concepts:** Array navigation, conditional button disabling

#### [Responsive Navbar](./navbar)

Mobile-responsive navigation with hamburger menu.

- **Tech:** React, React Icons, Font Awesome, Tailwind CSS
- **Features:** Hamburger menu, mobile responsive, smooth transitions
- **Concepts:** Responsive design, mobile-first approach

#### [Sidebar Navigation](./sidebar)

Sidebar with modal support and global state.

- **Tech:** React, Context API, React Icons, Tailwind CSS
- **Features:** Toggle sidebar, modal support, icon integration
- **Concepts:** Context API for global state, modal patterns

#### [Review Carousel](./review)

Product review display with rating and navigation.

- **Tech:** React, Font Awesome, Tailwind CSS
- **Features:** Navigate reviews, random review selection, rating display
- **Concepts:** Carousel logic, random selection algorithms

---

### 🛠️ Utility Tools

#### [Color Palette Generator](./color-generator)

Generate color variations from a single color input.

- **Tech:** React, values.js library, Tailwind CSS
- **Features:** Generate tints and shades, copy to clipboard, error handling
- **Concepts:** External library integration, color manipulation

#### [Lorem Ipsum Generator](./lorem-ipsum)

Custom paragraph generator tool.

- **Tech:** React, Tailwind CSS, Vite
- **Features:** Generate specified number of paragraphs
- **Concepts:** Dynamic content generation, form handling

#### [Birthday Reminder](./birthday)

Birthday tracker with data display and filtering.

- **Tech:** React, Tailwind CSS
- **Features:** Display birthdays, clear all functionality
- **Concepts:** Data display, state management, array operations

---

## 🚀 Quick Start

### Clone the repository

```bash
git clone https://github.com/entoun8/react-mini-projects.git
cd react-mini-projects
```

### Run any project

```bash
cd project-name
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for production

```bash
npm run build
npm run preview
```

---

## 📦 Project Structure

Each project follows a consistent structure:

```
project-name/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   ├── components/      # Reusable components (PascalCase)
│   ├── pages/           # Route pages (for multi-page apps)
│   ├── data.js          # Mock data (if applicable)
│   ├── Context.jsx      # Context provider (if applicable)
│   └── Reducer.jsx      # Reducer logic (if applicable)
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

---

## 🎓 Key Concepts Demonstrated

### State Management

- **useState** - Local component state for simple interactions
- **useReducer** - Complex state logic with action dispatchers
- **Context API** - Global state sharing across components

### React Patterns

- **Component Composition** - Reusable, modular components
- **Controlled Components** - Form handling with React state
- **Conditional Rendering** - Dynamic UI based on state
- **Props & Prop Drilling** - Component communication patterns
- **Custom Hooks** - useGlobalContext patterns for Context consumption

### Advanced Features

- **React Router v6** - Multi-page navigation and routing
- **API Integration** - Async data fetching with useEffect and fetch
- **Loading States** - User feedback during async operations
- **Error Handling** - Graceful error management and user feedback
- **Refs** - DOM manipulation and imperative code with useRef

### Modern Tooling

- **Vite** - Fast development server and optimized production builds
- **Tailwind CSS** - Utility-first styling approach for rapid UI development
- **ESLint** - Code quality and consistency enforcement
- **PostCSS** - CSS processing with Autoprefixer

---

## 📈 Learning Progression

These projects represent my journey learning React:

1. **Fundamentals** → Basic UI components (Accordion, Tabs, Navbar, Slider)
2. **State Management** → Interactive apps with local state (Menu, Birthday, Tours)
3. **Advanced Patterns** → useReducer & Context API (Cart, Stripe, Sidebar)
4. **Routing & APIs** → Full applications with multiple pages (Cocktails)
5. **Complex Logic** → Games & management tools (Tic-Tac-Toe, Management)

---

## 💡 What I Learned

Through building these projects, I've gained hands-on experience with:

- Building reusable component architectures
- Managing complex application state without external libraries
- Implementing client-side routing for multi-page applications
- Integrating with external APIs and handling async operations
- Creating responsive, mobile-first user interfaces
- Debugging React applications and optimizing performance
- Following modern React best practices and patterns

---

## 📫 Connect With Me

- **GitHub:** [entoun8](https://github.com/entoun8)
- **Email:** entounsaid@gmail.com

---

## 📝 License

These projects are built for educational and learning purposes. Feel free to use them as reference for your own learning journey.

---

## 🙏 Acknowledgments

Projects inspired by various React tutorials and courses as part of my self-directed learning path toward becoming a full-stack developer.

---

**Built with dedication while mastering React** ⚛️
