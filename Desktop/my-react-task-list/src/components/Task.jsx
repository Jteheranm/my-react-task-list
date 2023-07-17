import PropTypes from "prop-types";
import styles from "../assets/styles/Task.module.css";
import { VscTrash, VscPassFilled } from "react-icons/Vsc";

function Task({ task, onComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <VscPassFilled /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <VscTrash size={20} />
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    // Otros campos de la tarea que debes especificar aquí
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
