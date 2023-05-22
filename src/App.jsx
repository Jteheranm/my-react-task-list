import { useState, useEffect } from "react";

const MyReactTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Cargar las tareas desde el localStorage al inicializar el componente
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Guardar las tareas en el localStorage cada vez que cambie
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description) => {
    const newTask = { description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const viewStoredTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(storedTasks);
  };

  return (
    <div>
      <h1>MI LISTA DE TAREAS</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.description}
          </li>
        ))}
      </ul>
      <button onClick={() => addTask("New Task")}>NUEVA TAREA</button>
      <button onClick={viewStoredTasks}>Ver tareas guardadas</button>
    </div>
  );
};

export default MyReactTaskList;
