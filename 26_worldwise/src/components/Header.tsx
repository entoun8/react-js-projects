import { Link } from "react-router-dom";

const HomeHeader: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span className="text-white text-xl font-bold">🌍</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            WorldWise
          </span>
        </Link>

        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/pricing"
                className="text-slate-700 font-medium hover:text-emerald-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-slate-700 font-medium hover:text-emerald-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/app"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
