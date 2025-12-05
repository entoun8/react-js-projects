import { Link } from "react-router";
import { useCities } from "../contexts/CitiesContext";
import type { City } from "../types";

interface CityItemProps extends City {
  emoji?: string;
}

const CityItem: React.FC<CityItemProps> = ({ cityName, date, emoji, id, position }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { deleteCity } = useCities();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <div className="group">
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all duration-200 group-hover:bg-emerald-50/50">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji || "📍"}</span>
            <div>
              <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                {cityName}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {formattedDate}
              </p>
            </div>
          </div>
          <button 
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100" 
            onClick={handleSubmit}
            aria-label="Delete city"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CityItem;
