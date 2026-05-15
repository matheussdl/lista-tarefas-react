import { useState, useEffect } from "react";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
  console.log("Lista atualizada:", tasks);
}, [tasks]);

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }
  function removeTask(indexToRemove) {
  setTasks(
    tasks.filter((_, index) => index !== indexToRemove)
  );
}

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Adicionar
      </button>

      <p>Total de tarefas: {tasks.length}</p>

      <ul>
        {tasks.map((task, index) => (
          <Task
  key={index}
  text={task}
  remove={() => removeTask(index)}
/>
        ))}
      </ul>
    </div>
  );
}

export default App;