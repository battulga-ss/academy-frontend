import type { IMovie } from "../types/movie";
import { Calendar } from "lucide-react";
export const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
      <div className="w-full relative aspect-2/3">
        <img
          src={movie.poster}
          alt=""
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <h4 className="font-bold text-lg">{movie.title}</h4>
      <p className="font-normal line-clamp-2">{movie.plot}</p>
      <span className="flex gap-2 items-center">
        <Calendar className="size-4"></Calendar>
        {movie.year}
      </span>
    </div>
  );
};
