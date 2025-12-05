import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Spinner from "./Spinner";

const CitiesList: React.FC = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">No cities yet</h3>
        <p className="text-slate-500 text-sm">
          Click on the map to add your first city
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <span>🏙️</span>
        <span>Your Cities</span>
        <span className="text-sm font-normal text-slate-500">({cities.length})</span>
      </h2>
      <div className="space-y-2">
        {cities.map((city) => (
          <CityItem key={city.id} {...city} />
        ))}
      </div>
    </div>
  );
};

export default CitiesList;
