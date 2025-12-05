import React from "react";
import { useState, useEffect } from "react";
import MoviesCards from "../components/MoviesCards";
import { getPopularMovies, getSearchMovies } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setLoading(false);
      setError("Search query cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const searchResults = await getSearchMovies(searchQuery);
      setMovies(searchResults);
      setLoading(false);
    } catch (err) {
      setError("Failed to load popular movies");
    }
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setLoading(false);
      } catch (err) {
        setError("Failed to load popular movies");
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <main className="bg-slate-800 min-h-[calc(100vh_-_60px)] pt-6">
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="text"
          className="bg-gray-400 border border-gray-200 p-1 mr-2 rounded-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-700 text-white py-1 px-3 rounded-md"
        >
          Search
        </button>
      </form>
      {error && <Error error={error} />}
      {loading ? <Loading /> : <MoviesCards movies={movies} />}
    </main>
  );
};

export default Home;
