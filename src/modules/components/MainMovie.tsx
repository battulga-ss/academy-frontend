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
    <>
      <button onClick={() => changeDataType("all")}>all movies</button>
      <button onClick={() => changeDataType("drama")}>Drama movies</button>
      <button onClick={() => changeDataType("addMovie")}>Add movie</button>

      <MovieContent dataType={dataType} />
    </>
  );
};
