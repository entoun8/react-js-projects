import type { Movie as MovieType } from "../../types";
import Movie from "./Movie";

interface MoviesListProps {
  movies: MovieType[];
  onSelectMovie: (id: string) => void;
}

const MoviesList = ({ movies, onSelectMovie }: MoviesListProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {movies.map((movie) => (
      <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
    ))}
  </ul>
);

export default MoviesList;
