import WatchedMovie from "./WatchedMovie";
import type { WatchedMovie as WType } from "../../types";

interface WatchedMoviesListProps {
  watched: WType[];
  onDelete: (id: string) => void;
}

const WatchedMoviesList = ({ watched, onDelete }: WatchedMoviesListProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {watched.map((movie) => (
      <WatchedMovie key={movie.imdbID} movie={movie} onDelete={onDelete} />
    ))}
  </ul>
);

export default WatchedMoviesList;
