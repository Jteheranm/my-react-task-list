import {
  Tooltip,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleFill,
  RiDeleteBin5Fill,
} from "react-icons/ri";

function Task({ task, onComplete, onDelete }) {
  const toggleTask = (event, taskId) => {
    event.stopPropagation();
    onComplete(taskId);
  };

  const deleteTask = (event, taskId) => {
    event.stopPropagation();
    onDelete(taskId);
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Tooltip
            label={task.isCompleted ? "Tarea no completada" : "Completar tarea"}
          >
            <Button
              colorScheme="messenger"
              variant="solid"
              size="sm"
              onClick={(event) => toggleTask(event, task.id)}
              mr={2}
            >
              {task.isCompleted ? (
                <RiCheckboxCircleFill color="white" />
              ) : (
                <RiCheckboxBlankCircleFill color="white" />
              )}
            </Button>
          </Tooltip>

          <Box
            as="span"
            flex="1"
            textAlign="left"
            className={task.isCompleted ? "completed-text" : ""}
          >
            {task.title}
          </Box>
          <AccordionIcon />

          <Tooltip label="Eliminar tarea">
            <Button
              colorScheme="red"
              variant="solid"
              size="sm"
              onClick={(event) => deleteTask(event, task.id)}
            >
              <RiDeleteBin5Fill color="white" />
            </Button>
          </Tooltip>
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        className={task.isCompleted ? "completed-text" : ""}
      >
        {task.description}
      </AccordionPanel>
    </AccordionItem>
    // <div className={styles.task}>
    //   <Tooltip
    //     label={task.isCompleted ? "Tarea no completada" : "Completar tarea"}
    //   >
    //     <button
    //       className={styles.checkContainer}
    //       onClick={() => onComplete(task.id)}
    //     >
    //       {task.isCompleted ? <VscPassFilled /> : <div />}
    //     </button>
    //   </Tooltip>

    //   <p className={task.isCompleted ? styles.textCompleted : ""}>
    //     {task.title}
    //   </p>
    //   <p className={task.isCompleted ? styles.textCompleted : ""}>
    //     {task.description}
    //   </p>

    //   <Tooltip label="Eliminar tarea">
    //     <button
    //       className={styles.deleteButton}
    //       onClick={() => onDelete(task.id)}
    //     >
    //       <VscTrash size={20} />
    //     </button>
    //   </Tooltip>
    // </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Otros campos de la tarea que debes especificar aquí
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
