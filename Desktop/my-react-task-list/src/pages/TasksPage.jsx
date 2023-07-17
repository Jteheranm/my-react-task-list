import Header from "../components/Header";
import TaskList from "../components/TaskList";
import useTaskList from "../components/useTaskList";
import Navbar from "../components/Navbar";

function App() {
  const { taskList, addTask, deleteTaskById, toggleTaskCompleteById } =
    useTaskList();

  return (
    <div id="notfound">
      <Navbar />

      <Header onAddTask={addTask} />

      <TaskList
        onDelete={deleteTaskById}
        taskList={taskList}
        onComplete={toggleTaskCompleteById}
      />
    </div>
  );
}

export default App;
