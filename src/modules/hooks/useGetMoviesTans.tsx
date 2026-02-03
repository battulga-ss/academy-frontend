import { useQuery } from "@tanstack/react-query";

import type { IMovie } from "../types/movie";

export const useGetMoviesTans = (genre?: string) => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["movies", genre],
    queryFn: async () => {
      return fetch(
        `http://localhost:3000/movie/movies?genre=${genre || ""}`,
      ).then((res) => {
        return res.json();
      });
    },
  });

  //   const [movies, setMovies] = useState<IMovie[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);

  //   useEffect(() => {

  //   }, [genre]);

  return { movies: data, loading: isLoading, isError };
};
