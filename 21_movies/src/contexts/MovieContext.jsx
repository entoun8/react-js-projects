import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavoriteMovies(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addToFavorite = (movie) => {
    setFavoriteMovies((prev) => [...prev, movie]);
  };

  const removeFromFavorite = (movieId) => {
    const newFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
    setFavoriteMovies(newFavorites);
  };

  const isFavorite = (movieId) => {
    return Boolean(favoriteMovies.find((movie) => movie.id === movieId));
  };

  const values = {
    addToFavorite,
    removeFromFavorite,
    isFavorite,
    favoriteMovies,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
