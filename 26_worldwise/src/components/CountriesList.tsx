import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";

const CountriesList: React.FC = () => {
  const { cities } = useCities();
  const countries = [...new Set(cities.map((city) => city.country))];

  if (countries.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">No countries yet</h3>
        <p className="text-slate-500 text-sm">
          Add cities to see countries you've visited
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <span>🌍</span>
        <span>Countries Visited</span>
        <span className="text-sm font-normal text-slate-500">({countries.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {countries.map((country) => (
          <CountryItem key={country} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
