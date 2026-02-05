import { useMutation } from "@tanstack/react-query";

export const useAddMovie = () => {
  const { mutate } = useMutation({
    mutationFn: (title: string) => {
      return fetch(`http://localhost:3000/movie/addMovie`, {
        method: "POST",
        body: JSON.stringify({ title }),
      });
    },
    onSuccess: () => {
      window.alert("SUCCESSSS");
    },
  });

  return { addMovie: mutate };
};
