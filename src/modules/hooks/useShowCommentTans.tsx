import { useQuery } from "@tanstack/react-query";

export const useShowCommentTans = (movie_id?: string) => {
  return useQuery({
    queryKey: ["comments", movie_id],
    enabled: !!movie_id,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/movie/movie/comments?movie_id=${movie_id}`
      );console.log("FETCHING COMMENTS FOR:", movie_id);
      return res.json();
    },
  });
};