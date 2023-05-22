import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <span>{task.name}</span>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
