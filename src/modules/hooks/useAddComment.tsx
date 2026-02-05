import { useMutation } from "@tanstack/react-query";
export const useAddComment = () => {
  const { mutate } = useMutation({
    mutationFn: (text: string) => {
      return fetch(`http://localhost:3000/movie/addComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
    },
    onSuccess: () => {
      window.alert("SUCCESSSS");
    },
  });

  return { Commentadd: mutate };
};
