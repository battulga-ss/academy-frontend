import type { IMovie } from "../types/movie";
import { Calendar } from "lucide-react";

export const MovieCard = ({ movie }: { movie: IMovie }) => {
  const poster = movie.poster || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI4myohws0yjEb4MAN8FuiFM5cqC1wYHNvurpfzHS_vkE0WyBPGrAMdlVzxF0GWp1KsRApBODKx646Y9HSXl7dOq_ImOL1el_FqTVD8c&s=10"; // default image

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
      <div className="w-full relative aspect-2/3">
        <img
          src={poster}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg text-white">{movie.title}</h4>
        <p className="font-normal line-clamp-2 text-slate-300">{movie.plot}</p>
        <span className="flex gap-2 items-center text-slate-400 mt-2">
          <Calendar className="w-4 h-4" />
          {movie.year}
        </span>
      </div>
    </div>
  );
};