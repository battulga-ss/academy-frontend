import { useState } from "react";
import "./App.css";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "reveal secret" : "hide secret"}
      </button>

      <h1>{isHidden ? "secret" : "react is awesome"}</h1>
    </>
  );
}

export default App;
