import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovie";


export const AddMovie = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const runtimeRef = useRef<HTMLInputElement>(null);
  const plotRef = useRef<HTMLInputElement>(null);
  const posterRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);


  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    const title = titleRef.current?.value;
    const year = yearRef.current?.value;
    const runtime = runtimeRef.current?.value;
    const plot = plotRef.current?.value;
    const poster = posterRef.current?.value;
    const genre = genreRef.current?.value;

    if (!title || !year || !runtime || !plot || !poster) {
      return alert("Medeelle bugdiig ni oruulna uu!");
    }

    addMovie({
      title: String(title),
      year: Number(year),
      runtime: Number(runtime),
      plot: String(plot),
      poster: String(poster),
      genre: String(genre)
    });
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
  <div className="w-full max-w-md rounded-2xl bg-slate-900 p-6 shadow-xl">
    <h2 className="mb-6 text-center text-2xl font-semibold text-white">
      🎬 Add New Movie
    </h2>

    <div className="space-y-4">
      <input
        ref={titleRef}
        placeholder="Movie title"
        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <input
        ref={yearRef}
        placeholder="Year"
        type="number"
        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <input
        ref={runtimeRef}
        placeholder="Runtime (min)"
        type="number"
        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <input
        ref={genreRef}
        placeholder="Genre"
        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <textarea
        ref={plotRef as any}
        placeholder="Plot / Description"
        rows={3}
        className="w-full resize-none rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <input
        ref={posterRef}
        placeholder="Poster image URL"
        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>

    <button
      onClick={movieAdd}
      className="mt-6 w-full rounded-lg bg-amber-600 py-2 font-semibold text-black transition hover:bg-amber-500 active:scale-95"
    >
      ➕ Add Movie
    </button>
  </div>
</div>


  );
};
