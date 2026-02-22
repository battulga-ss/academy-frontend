import { useState } from "react";
import { AllMovies } from "./AllMovies";
import { DramaMovies } from "./DramaMovies";
import { AddMovie } from "./AddMovie";
import { ActionMovies } from "./ActionMovies";
type DataType = "all" | "drama" | "addMovie" | "Action";

const MovieContent = ({ dataType }: { dataType: DataType }) => {
  switch (dataType) {
    case "Action":
      return <ActionMovies />;
    case "all":
      return <AllMovies />;
    case "drama":
      return <DramaMovies />;
    case "addMovie":
      return <AddMovie />;
      
    default:
      return null;
  }
};

export const MovieMain = () => {
  const [dataType, setDataType] = useState<DataType>("all");

  const buttonStyle = (type: DataType) =>
    `px-6 py-2 rounded-full font-medium transition-all duration-300
     ${
       dataType === type
         ? "bg-indigo-600 text-white shadow-lg scale-105"
         : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
     }`;

  return (
    <div className="min-h-screen w-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* Centered Tabs */}
      <div className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-slate-800 px-6 py-4">
        <div className="flex justify-center gap-4">
          <button
            className={buttonStyle("all")}
            onClick={() => setDataType("all")}
          >
            🎬 All Movies
          </button>
          <button
            className={buttonStyle("Action")}
            onClick={() => setDataType("Action")}
          >
            🎬 Action Movies
          </button>
          <button
            className={buttonStyle("drama")}
            onClick={() => setDataType("drama")}
          >
            🎭 Drama
          </button>
          <button
            className={buttonStyle("addMovie")}
            onClick={() => setDataType("addMovie")}
          >
            ➕ Add Movie
          </button>
        </div>
      </div>

      {/* Full screen content */}
      <div className="flex-1 w-full p-6 overflow-y-auto">
        <MovieContent dataType={dataType} />
      </div>
    </div>
  );
};
