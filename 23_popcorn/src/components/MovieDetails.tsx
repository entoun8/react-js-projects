import { useEffect, useState } from "react";
import Loading from "./Loading";
import StarRating from "./Rating/StarRating";
import type { WatchedMovie } from "../types";

interface MovieDetailsProps {
  selectedMovieId: string;
  onCloseMovie: () => void;
  onAddToWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

interface OMDbFull {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}

const API_KEY = "21908b4a";

const MovieDetails = ({
  selectedMovieId,
  onCloseMovie,
  onAddToWatched,
  watched,
}: MovieDetailsProps) => {
  const [movie, setMovie] = useState<OMDbFull | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(0);

  const isWatched = watched.some((m) => m.imdbID === selectedMovieId);
  const watchedEntry = watched.find((m) => m.imdbID === selectedMovieId);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedMovieId}`)
      .then((res) => res.json())
      .then((data: OMDbFull) => setMovie(data))
      .finally(() => setLoading(false));
  }, [selectedMovieId]);

  const handleAdd = () => {
    if (!movie) return;
    onAddToWatched({
      imdbID: selectedMovieId,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.Runtime.split(" ")[0]),
      userRating,
    });
    onCloseMovie();
  };

  if (loading || !movie) return <Loading />;

  return (
    <div className="space-y-6">
      <header className="flex items-start gap-4">
        <button
          onClick={onCloseMovie}
          className="text-2xl hover:text-gray-300 transition"
        >
          ←
        </button>
        <img
          src={movie.Poster}
          alt={`Poster of ${movie.Title}`}
          className="w-32 rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-gray-400">
            {movie.Released} • {movie.Runtime}
          </p>
          <p className="mt-1 italic">{movie.Genre}</p>
          <p className="mt-2">⭐️ {movie.imdbRating} IMDb</p>
        </div>
      </header>
      <section className="space-y-4">
        {!isWatched ? (
          <>
            <StarRating maxRating={10} size={28} onSetRating={setUserRating} />
            {userRating > 0 && (
              <button
                onClick={handleAdd}
                className="block mt-2 px-4 py-2 bg-red-600 rounded-full font-semibold hover:bg-red-500 transition"
              >
                + Add to list
              </button>
            )}
          </>
        ) : (
          <p className="text-green-400">
            You rated this {watchedEntry?.userRating} ⭐️
          </p>
        )}
        <p className="italic">“{movie.Plot}”</p>
        <p>Starring: {movie.Actors}</p>
        <p>Directed by: {movie.Director}</p>
      </section>
    </div>
  );
};

export default MovieDetails;
