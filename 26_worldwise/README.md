# WorldWise 🌍

**A modern travel tracking application that transforms your adventures into an interactive digital journal.**

WorldWise is a React-based web application that allows users to track their travels on an interactive map, add personal notes about each visit, and build a comprehensive visual diary of their global adventures.

## ✨ Features

### 🗺️ Interactive Map
- **Click-to-Add**: Click anywhere on the map to mark new destinations
- **Real-time Updates**: See your travels update instantly as you add new locations
- **Leaflet Integration**: Powered by Leaflet for smooth, responsive mapping experience
- **Geolocation Support**: Use your current location with one click

### 📝 Travel Management
- **City Tracking**: Add cities with dates, notes, and country information
- **Country Overview**: View all countries you've visited in a dedicated section
- **Rich Notes**: Add personal memories and experiences for each location
- **Date Tracking**: Keep track of when you visited each place

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Interface**: Modern, intuitive design with smooth animations
- **Real-time Feedback**: Loading states and user-friendly error handling
- **Professional Styling**: Built with Tailwind CSS for consistent, beautiful UI

## 🚀 Tech Stack

### Frontend
- **React 19** with TypeScript for type-safe development
- **React Router 7** for client-side routing
- **Leaflet & React-Leaflet** for interactive maps
- **Tailwind CSS 4** for modern, responsive styling
- **Context API** for efficient state management

### Development Tools
- **Vite** for fast development and building
- **TypeScript** for enhanced development experience
- **ESLint** for code quality and consistency
- **JSON Server** for API simulation during development

### Key Libraries
- **React DatePicker** for date selection
- **Custom Hooks** for geolocation and URL state management
- **BigDataCloud API** for reverse geocoding

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd worldwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the JSON server** (in a separate terminal)
   ```bash
   npm run server
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks
- `npm run server` - Start JSON server for API simulation

## 🏗️ Project Structure

```
worldwise/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Map.tsx         # Interactive map component
│   │   ├── CitiesList.tsx  # City listings
│   │   ├── Form.tsx        # City creation form
│   │   └── ...
│   ├── contexts/           # React Context providers
│   │   └── CitiesContext.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useGeolocation.ts
│   │   └── useUrlPosition.ts
│   ├── pages/              # Route components
│   │   ├── HomePage.tsx
│   │   ├── AppPage.tsx
│   │   └── ...
│   ├── types/              # TypeScript type definitions
│   └── ...
├── data/                   # JSON server data
│   └── cities.json
└── ...
```

## 🌟 Key Features Deep Dive

### Interactive Map Experience
- Built with Leaflet for optimal performance
- Click anywhere to add new destinations
- Responsive markers with country flags and city information
- Smooth pan and zoom functionality

### State Management
- Context API for global state management
- Reducer pattern for predictable state updates
- Optimistic updates for better user experience

### Data Persistence
- JSON Server for development API simulation
- RESTful API design with full CRUD operations
- Automatic data synchronization across components

### User Experience
- Loading states and error handling
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation and workflow

## 🎯 Use Cases

- **Travel Bloggers**: Document journeys with rich location data
- **Business Travelers**: Track work-related trips and locations
- **Adventure Seekers**: Build a visual diary of explorations
- **Education**: Geography learning and world exploration
- **Personal Memory Keeping**: Preserve travel memories digitally

## 🔧 Configuration

### Environment Setup
The application uses a local JSON server for development. In production, you would replace this with a real backend API.

### Customization
- Map tiles can be customized in `Map.tsx`
- Styling can be modified using Tailwind CSS classes
- API endpoints can be configured in `CitiesContext.tsx`

## 🤝 Contributing

This project demonstrates modern React development practices including:
- TypeScript for type safety
- Context API for state management
- Custom hooks for reusable logic
- Component composition and reusability
- Modern CSS with Tailwind
- Responsive design principles

## 📄 License

This project is available for portfolio and educational purposes.

## 🚀 Deployment

The application is production-ready and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**