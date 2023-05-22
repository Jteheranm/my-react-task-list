import React from "react";
const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <span>{task.name}</span>
    </div>
  );
};

export default Task;
