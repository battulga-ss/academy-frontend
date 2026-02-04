import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovie.tsx";

export const AddMovie = () => {
  const inputRef = useRef(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    const value = inputRef?.current?.value;
    console.log(value, "valllee");
    if (!value) {
      return window.alert("Title oruulna uu");
    }

    addMovie(value);
  };

  return (
    <div className="grid grid-cols-4 gap-4 max-w-[800px] mx-auto">
      <input ref={inputRef} placeholder="Movie title" />
      <button onClick={movieAdd}>add movie</button>
    </div>
  );
};
