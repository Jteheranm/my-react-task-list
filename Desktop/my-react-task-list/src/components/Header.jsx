import styles from "../assets/styles/Header.module.css";
import todoapp from "../assets/todoapp.png";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formValidation, setFormValidation] = useState({
    error: false,
    errorMessage: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = title.length < 3;
    setFormValidation({
      error: error,
      errorMessage: error
        ? "La tarea debe contener por lo menos tres(3) caracteres"
        : "",
    });
    if (!error) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  function onKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  return (
    <header className={styles.header}>
      <img src={todoapp} width={160} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          className={styles.inputTitle}
          placeholder="Agregar una nueva tarea"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />

        <input
          className={styles.inputDescription}
          placeholder="Agregar una descripción de tarea"
          type="text"
          value={description}
          onChange={onChangeDescription}
          onKeyDown={onKeyDown}
        />

        {formValidation.error ? (
          <span className={styles.error}>{formValidation.errorMessage}</span>
        ) : null}
        <button>NEX</button>
      </form>
    </header>
  );
}

export default Header;
