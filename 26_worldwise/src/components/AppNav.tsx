import { NavLink } from "react-router";

const AppNav: React.FC = () => {
  return (
    <nav>
      <div className="flex bg-slate-100 rounded-xl p-1 shadow-inner">
        <NavLink
          to="cities"
          className={({ isActive }) =>
            `flex-1 py-2 px-4 text-sm font-medium text-center rounded-lg transition-all duration-200 ${
              isActive 
                ? "bg-white text-emerald-700 shadow-sm" 
                : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
            }`
          }
        >
          <div className="flex items-center justify-center gap-2">
            <span>🏙️</span>
            <span>Cities</span>
          </div>
        </NavLink>
        <NavLink
          to="countries"
          className={({ isActive }) =>
            `flex-1 py-2 px-4 text-sm font-medium text-center rounded-lg transition-all duration-200 ${
              isActive 
                ? "bg-white text-emerald-700 shadow-sm" 
                : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
            }`
          }
        >
          <div className="flex items-center justify-center gap-2">
            <span>🌍</span>
            <span>Countries</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default AppNav;
