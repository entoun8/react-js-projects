import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavorite, removeFromFavorite, isFavorite } = useMovieContext();
  const isFavoriteMovie = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (isFavoriteMovie) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleFavoriteClick}
        className="absolute left-2 top-1 hidden group-hover:block text-white none"
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={`${!isFavoriteMovie ? "text-white" : "text-red-600"}`}
        />
      </button>
      <div className="img">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="rounded-t-md"
        />
      </div>
      <div className="bg-slate-950 text-white p-2 capitalize">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
