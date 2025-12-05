import type { Movie } from "../../types";

interface NumResultsProps {
  movies: Movie[];
}

const NumResults = ({ movies }: NumResultsProps) => (
  <p className="text-gray-400">
    Found <span className="font-semibold">{movies.length}</span> results
  </p>
);

export default NumResults;
