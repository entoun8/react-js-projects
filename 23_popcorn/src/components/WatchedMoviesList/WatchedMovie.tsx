import type { WatchedMovie as WType } from "../../types";

interface WatchedMovieProps {
  movie: WType;
  onDelete: (id: string) => void;
}

const WatchedMovie = ({ movie, onDelete }: WatchedMovieProps) => (
  <li className="bg-gray-700 rounded-xl overflow-hidden shadow relative">
    <button
      onClick={() => onDelete(movie.imdbID)}
      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-1 rounded-full transition"
      aria-label="Delete"
    >
      ✕
    </button>
    <img
      src={movie.poster}
      alt={`${movie.title} poster`}
      className="w-full h-56 object-cover"
    />
    <div className="p-4 space-y-1">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-gray-400 text-sm">⭐️ {movie.imdbRating}</p>
      <p className="text-gray-400 text-sm">🌟 {movie.userRating}</p>
      <p className="text-gray-400 text-sm">⏳ {movie.runtime} min</p>
    </div>
  </li>
);

export default WatchedMovie;
