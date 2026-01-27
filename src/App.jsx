// import { useState } from "react";

// import "./App.css";

// function Todo({ todo }) {
//   console.log(todo);
//   return <h1>{todo.name}</h1>;
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [todos, setTodos] = useState([]);
//   const addTodo = () => {
//     setTodos([...todos, { name: inputValue }]);
//   };
//   const removeTodo = () => {
//     setTodos([...todos, { name: inputValue }]);
//   };

//   return (
//     <>
//       <input
//         placeholder="Add todo"
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />

//       <button onClick={addTodo}>Add todo</button>
//       <button onClick={removeTodo}>remove todo</button>

//       {todos.map((todo) => {
//         return <Todo todo={todo} />;
//       })}
//     </>
//   );
// }

// export default App;
