import { useQuery } from "@tanstack/react-query";
import type { IComments } from "../types/movie";

export const useShowCommentTans = (movie_id?: string) => {
  const { data, isLoading } = useQuery<IComments[]>({
    queryKey: ["comments", movie_id],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/movie/comments?movie_id=${movie_id}`,
      );
      return res.json();
    },
  });

  return { comments: data, loading: isLoading };
};
