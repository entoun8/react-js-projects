import type { Movie as MovieType } from "../../types";

interface MovieProps {
  movie: MovieType;
  onSelectMovie: (id: string) => void;
}

const Movie = ({ movie, onSelectMovie }: MovieProps) => (
  <li
    className="bg-gray-700 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer"
    onClick={() => onSelectMovie(movie.imdbID)}
  >
    <img
      src={movie.Poster}
      alt={`${movie.Title} poster`}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      <p className="text-gray-400 mt-1">🗓 {movie.Year}</p>
    </div>
  </li>
);

export default Movie;
