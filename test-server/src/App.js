import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

import api from "./utils/api.js";

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("");

  useEffect(() => {
    api.get()
    .then(({data}) => setTodos(data))
  }, []);

  function createTodo(title) {
    api.post("", {title, isDone: false})
    .then(({data}) => setTodos([...todos, data]))
  };

  return (
    <div className="App">
      {
        todos.map(
          item =>
          <div key={item.id}>{item.title}</div>
        )
      }
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createTodo.bind(null, title)}>save</button>
    </div>
  );
}

export default App;
