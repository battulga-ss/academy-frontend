import { useEffect, useState } from "react";
import "./App.css";

interface IMovie {
  title: string;
}

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3000/movies/movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMovies(data);
      });
  }, []);

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <>
      {movies.map((movie) => {
        return <h1>{movie.title}</h1>;
      })}
    </>
  );
}

export default App;
