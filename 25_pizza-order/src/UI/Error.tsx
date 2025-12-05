import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  data?: string;
  message?: string;
}

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 border border-red-200 text-center max-w-md mx-auto">
        <div className="text-6xl mb-6">😢</div>
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-stone-600 mb-8 bg-red-50 p-4 rounded-xl border border-red-200">
          {error.data || error.message}
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          ← Go back
        </button>
      </div>
    </div>
  );
}

export default Error;
