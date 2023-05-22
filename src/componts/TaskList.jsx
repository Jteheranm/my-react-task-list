import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "task 1", completed: true },
    { id: 2, name: "task 2", completed: false },
    { id: 3, name: "task 3", completed: false },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
