import { useGetMoviesTans } from "../hooks/useGetMoviesTans";

export const AllMovies = () => {
  const { movies, loading } = useGetMoviesTans();

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <>
      {movies?.map((movie) => {
        return <h1>{movie.title}</h1>;
      })}
    </>
  );
};
