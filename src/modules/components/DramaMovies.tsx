import { useGetMoviesTans } from "../hooks/useGetMoviesTans";
import { LoaderCircle } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const DramaMovies = () => {
  const { movies, loading } = useGetMoviesTans("Drama");

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <LoaderCircle className="animate-spin"></LoaderCircle>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 max-w-[800px] mx-auto">
      {movies?.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};
