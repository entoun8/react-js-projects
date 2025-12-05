import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Track Your Global
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Adventures
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your personal travel journal on the map. Click on any location to mark your visit, 
              add notes, and capture memories from your travels around the world.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Interactive Map</h3>
              <p className="text-slate-600">Click anywhere on the map to add your travel destinations and build your personal journey.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Travel Notes</h3>
              <p className="text-slate-600">Add personal notes and memories to each location, creating a rich travel diary.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Global Tracking</h3>
              <p className="text-slate-600">Track countries visited and visualize your global adventures in one place.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 md:p-12 rounded-3xl border border-emerald-200 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-600 mb-6 text-lg">
              Join thousands of travelers who use WorldWise to document their adventures
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Started Free</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
