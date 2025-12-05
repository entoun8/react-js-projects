import MovieCard from "./MovieCard";

const MoviesCards = ({ movies }) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 p-8">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesCards;
