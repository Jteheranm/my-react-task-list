import { useToast, useColorMode } from "@chakra-ui/react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useTaskList from "../components/useTaskList";
import Header from "../components/Header";

function App() {
  const { taskList, addTask, deleteTaskById, toggleTaskCompleteById } =
    useTaskList();
  const toast = useToast();

  const handleTaskCreation = (taskTitle, taskDescription) => {
    toast({
      title: "Se agregó la tarea:",
      description: taskTitle,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    addTask(taskTitle, taskDescription);
  };

  const handleTaskDeletion = (taskId) => {
    toast({
      title: "Tarea eliminada con éxito",
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    deleteTaskById(taskId);
  };

  const { colorMode } = useColorMode();

  return (
    <div className={`main-container ${colorMode}`}>
      <Header />

      <div className="task-section-container">
        <TaskForm onAddTask={handleTaskCreation} />

        <TaskList
          onDelete={handleTaskDeletion}
          taskList={taskList}
          onComplete={toggleTaskCompleteById}
        />
      </div>
    </div>
  );
}

export default App;
