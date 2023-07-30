import { useState } from "react";
import { Button, Input, useColorMode } from "@chakra-ui/react";
import "../assets/styles/TaskForm.css";
import todoapp from "../assets/todoapp.png";

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

  const { colorMode } = useColorMode();

  return (
    <header className={`task-form ${colorMode}`}>
      <img src={todoapp} width={160} className="task-form-img" />

      <form onSubmit={handleSubmit} className="newTaskForm">
        <Input
          placeholder="Título de la tarea"
          colorScheme="primaryColor.100"
          focusBorderColor="primaryColor.100"
          variant="flushed"
          size="sm"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <Input
          placeholder="Descripción de la tarea"
          colorScheme="primaryColor.100"
          focusBorderColor="primaryColor.100"
          variant="flushed"
          size="sm"
          type="text"
          value={description}
          onChange={onChangeDescription}
          onKeyDown={onKeyDown}
        />

        {formValidation.error ? (
          <span className="error">{formValidation.errorMessage}</span>
        ) : null}

        <Button type="submit" colorScheme="messenger" size="sm">
          Agregar tarea
        </Button>
      </form>
    </header>
  );
}

export default Header;
