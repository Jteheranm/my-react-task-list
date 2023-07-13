import styles from "./Header.module.css";
import { BsPlus } from "react-icons/bs";
import todoapp from "../assets/todoapp.png";
import { useState } from "react";

function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoapp} width={160} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Agregar una nueva tarea"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          <BsPlus size={25} />
        </button>
      </form>
    </header>
  );
}

export default Header;
