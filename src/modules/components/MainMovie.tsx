import { useState } from "react";
import { AllMovies } from "./AllMovies";
import { DramaMovies } from "./DramaMovies";
import { AddMovie } from "./AddMovie";

export const MovieContent = ({ dataType }: { dataType: string }) => {
  if (dataType === "all") {
    return <AllMovies />;
  }
  if (dataType === "drama") {
    return <DramaMovies />;
  }
  return <AddMovie />;
};

export const MovieMain = () => {
  const [dataType, setDataType] = useState<string>("all");

  const changeDataType = (type: string) => {
    setDataType(type);
  };
  return (
    <div className="bg-slate-950 text-slate-200 justify-center  ">
      <button className="button bigText" onClick={() => changeDataType("all")}>
        all movies
      </button>
      <button className="button" onClick={() => changeDataType("drama")}>
        Drama movies
      </button>
      <button className="button" onClick={() => changeDataType("addMovie")}>
        Add movie
      </button>

      <MovieContent dataType={dataType} />
    </div>
  );
};
