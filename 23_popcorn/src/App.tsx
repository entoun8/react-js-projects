import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Logo from "./components/Header/Logo";
import Search from "./components/Header/Search";
import NumResults from "./components/Header/NumResults";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList/MoviesList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList/WatchedMoviesList";
import MovieDetails from "./components/MovieDetails";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Movie, WatchedMovie } from "./types";

const API_KEY = "21908b4a";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useLocalStorage<WatchedMovie[]>("watched", []);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string>("");

  const handleSelectMovie = (id: string) => setSelectedMovieId(id);
  const handleCloseMovie = () => setSelectedMovieId("");
  const handleAddToWatched = (movie: WatchedMovie) =>
    setWatched((prev) => [...prev, movie]);

  const handleDelete = (watchedId: string) => {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== watchedId));
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
            query
          )}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);
        setMovies(data.Search);
      } catch (err: any) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
    return () => controller.abort();
  }, [query]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen font-sans">
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Header>
      <Main>
        <Box title="Search Results">
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>
        <Box title="Details / Watched">
          {selectedMovieId ? (
            <MovieDetails
              selectedMovieId={selectedMovieId}
              onCloseMovie={handleCloseMovie}
              onAddToWatched={handleAddToWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDelete={handleDelete} />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
