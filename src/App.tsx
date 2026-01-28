import { useState } from "react";
import "./App.css";

function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

function App() {



  const [name, setName] = useState("");

  return (
    <div>
      s
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <Welcome name={name} />
    </div>
  );
}

export default App;
