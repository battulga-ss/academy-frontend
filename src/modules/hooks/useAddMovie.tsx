import { useMutation } from "@tanstack/react-query";

type AddMoviePayload = {
  title: string;
  year: number;
  runtime: number;
  genre: string;
  plot: string;
  poster: string;
};

export const useAddMovie = () => {
  const { mutate } = useMutation({
    mutationFn: ({
      title,
      year,
      runtime,
      genre,
      plot,
      poster,
    }: AddMoviePayload) => {
      return fetch("http://localhost:3000/movie/addMovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          year,
          runtime,
          genre,
          plot,
          poster,
        }),
      });
    },
    onSuccess: () => {
      window.alert("SUCCESS");
    },
  });

  return { addMovie: mutate };
};
