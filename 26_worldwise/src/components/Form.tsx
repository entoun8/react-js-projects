import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface GeocodeData {
  city?: string;
  locality?: string;
  countryName?: string;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  const { createCity } = useCities();

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setGeocodingError("");
        setIsLoadingGeocoding(true);
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );

        const data: GeocodeData = await res.json();

        if (!data.countryName) {
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );
        }

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        console.log(data);
      } catch (err) {
        setGeocodingError(
          err instanceof Error ? err.message : "An error occurred"
        );
      } finally {
        setIsLoadingGeocoding(false);
      }
    };

    if (lat && lng) fetchCityData();
  }, [lat, lng]);

  if (geocodingError) {
    return <Message message={geocodingError} />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date: date.toISOString().split("T")[0],
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate(`/app/cities?lat=${lat}&lng=${lng}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          {isLoadingGeocoding ? "Fetching location..." : "Add New City"}
        </h2>
        <p className="text-emerald-600 text-sm">
          {isLoadingGeocoding
            ? "Finding location details..."
            : "Add a new city to your travel journal"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
          <div>
            <label
              htmlFor="cityName"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              City Name
            </label>
            <input
              id="cityName"
              type="text"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
              placeholder="e.g. Tokyo"
              disabled={isLoadingGeocoding}
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              When did you visit {cityName || "this city"}?
            </label>
            <DatePicker
              selected={date}
              onChange={(date: Date | null) => date && setDate(date)}
              dateFormat="dd MMM yyyy"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              disabled={isLoadingGeocoding}
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Notes about your trip to {cityName || "this city"}
            </label>
            <textarea
              id="notes"
              rows={4}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none transition-colors"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              placeholder="What made this trip special?"
              disabled={isLoadingGeocoding}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoadingGeocoding}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
              isLoadingGeocoding
                ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            {isLoadingGeocoding ? "Please wait..." : "Add City"}
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
