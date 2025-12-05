import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useAppSelector } from "../hooks/redux";

const Header = () => {
  const username = useAppSelector((state) => state.user.username);
  
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 shadow-lg border-b-4 border-orange-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-white hover:text-yellow-100 transition-colors duration-200 tracking-wide"
        >
          🍕 Fast React Pizza Co.
        </Link>
        <div className="flex items-center gap-4">
          <SearchOrder />
          {username && (
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <span className="text-white font-medium">👋 {username}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
