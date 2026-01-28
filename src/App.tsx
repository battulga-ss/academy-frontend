import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          + 
        </button>
          <button onClick={() => setCount((count) => count = 0)}>
          reset
        </button>
         <button onClick={() => setCount((count) => count - 1)}>
          - 
        </button>
        <p>
         
        </p>
      </div>
    
    </>
  );
}

export default App;

