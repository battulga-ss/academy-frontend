import { useMutation } from "@tanstack/react-query";
type AddCommentPayload = {
  text: string;
  email: string;
  movie_id?: string;
};
export const useAddComment = () => {
  const { mutate } = useMutation({
    mutationFn: ({ text, movie_id, email }: AddCommentPayload) => {
      return fetch(`http://localhost:3000/movie/addComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, movie_id, email }),
      });
    },
    onSuccess: () => {
      window.alert("SUCCESSSS");
    },
  });

  return { Commentadd: mutate };
};
