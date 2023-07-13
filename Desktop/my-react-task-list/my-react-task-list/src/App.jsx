import Header from "./components/Header"
import TaskList from "./components/TaskList"
import useTaskList from "./components/useTaskList";

function App() {
  const { taskList, addTask, deleteTaskById, toggleTaskCompleteById } =
    useTaskList();

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
        onDelete={deleteTaskById}
        taskList={taskList}
        onComplete={toggleTaskCompleteById}
      />
    </>
  );
}

export default App;
