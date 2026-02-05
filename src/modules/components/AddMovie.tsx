import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovie";

export const AddMovie = () => {
  const inputRef = useRef(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    const value = inputRef?.current?.value;

    if (!value) {
      return window.alert("Medeelle oruulna uu!");
    }

    addMovie(value);
  };

  return (
    <div>
      <input
        className="flex justify-center"
        ref={inputRef}
        placeholder="Movie title"
      />
      <input
        className="flex justify-center"
        ref={inputRef}
        placeholder="Year"
      />
      <input
        className="flex justify-center"
        ref={inputRef}
        placeholder="Run time"
      />
      <input
        className="flex justify-center"
        ref={inputRef}
        placeholder="plot"
      />
      <input
        className="flex justify-center "
        ref={inputRef}
        placeholder="directors"
      />

      <button className="flex bg-amber-800 mask-origin-fill" onClick={movieAdd}>
        add movie
      </button>
    </div>
  );
};
