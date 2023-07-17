import PropTypes from "prop-types";
import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList({ taskList, onComplete, onDelete }) {
  const taskListQantity = taskList.length;
  const completedTaskList = taskList.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.taskList}>
      <header className={styles.header}>
        <div>
          <p>Crear tarea</p>
          <span>{taskListQantity}</span>
        </div>

        <div>
          <p className={styles.textColor}>Tareas Completas</p>
          <span>
            {completedTaskList} of {taskListQantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Otros campos de tarea que debes especificar aquí
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
