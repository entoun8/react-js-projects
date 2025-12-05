import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";

const City: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getCity, currentCity, isLoading } = useCities();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCity(id);
    }
  }, [id]);

  if (isLoading || !currentCity) return <Spinner />;

  const { emoji, cityName, date, notes } = currentCity;

  const formattedDate = new Date(date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{emoji || "📍"}</span>
          <h2 className="text-2xl font-bold text-slate-800">{cityName}</h2>
        </div>
        <p className="text-sm text-emerald-600 font-medium">
          Visited on {formattedDate}
        </p>
      </div>

      {/* Notes Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span>📝</span>
          <span>Your Notes</span>
        </h3>
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-slate-700 leading-relaxed">
            {notes || "No notes available for this visit."}
          </p>
        </div>
      </div>

      {/* Learn More */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span>🔗</span>
          <span>Learn More</span>
        </h3>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium"
        >
          <span>Check out {cityName} on Wikipedia</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Back Button */}
      <div className="pt-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/app/cities?lat=${currentCity.position.lat}&lng=${currentCity.position.lng}`);
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to cities</span>
        </button>
      </div>
    </div>
  );
};

export default City;
