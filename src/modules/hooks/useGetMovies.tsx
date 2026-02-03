import { useEffect, useState } from "react";
import type { IMovie } from "../types/movie";

export const useGetMovies = (genre?: string) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`http://localhost:3000/movie/movies`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMovies(data);
      });
  }, [genre]);

  return { movies, loading };
};
