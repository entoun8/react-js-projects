import React from "react";
import MoviesCards from "../components/MoviesCards";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favoriteMovies } = useMovieContext();
  return (
    <main className="bg-slate-800 min-h-[calc(100vh_-_60px)] pt-6">
      <MoviesCards movies={favoriteMovies} />
    </main>
  );
};

export default Favorites;
