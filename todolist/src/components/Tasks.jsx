import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const Tasks = ({ tasks, updateTaskStatus, deletetTask, deleteAll }) => {
  const [buttons, setButtons] = useState("all");
  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    if (buttons === "all") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedTasks(tasks);
    } else if (buttons === "active") {
      setDisplayedTasks(tasks.filter((task) => !task.completed));
    } else if (buttons === "completed") {
      setDisplayedTasks(tasks.filter((task) => task.completed));
    }
  }, [tasks, buttons]);

  const handleButtonClick = (btnName) => {
    setButtons(btnName);
  };

  return (
    <div className="tasks">
      <div className="tasks-status">
        <button
          className={`${buttons === "all" ? "active" : ""}`}
          onClick={() => handleButtonClick("all")}
        >
          All
        </button>
        <button
          className={`${buttons === "active" ? "active" : ""}`}
          onClick={() => handleButtonClick("active")}
        >
          Active
        </button>
        <button
          className={`${buttons === "completed" ? "active" : ""}`}
          onClick={() => handleButtonClick("completed")}
        >
          Completed
        </button>
      </div>

      <div className="tasks-container">
        {displayedTasks.length > 0 ? (
          displayedTasks.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-content">
                <button onClick={() => updateTaskStatus(task.id)}>
                  {task.completed ? (
                    <IoCheckmarkCircleOutline />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}
                </button>
                <p className={`${task.completed ? "completed" : ""}`}>
                  {task.text}
                </p>
              </div>
              <div className="delete-btn" onClick={() => deletetTask(task.id)}>
                <MdDelete />
              </div>
            </div>
          ))
        ) : (
          <p>
            {tasks.length === 0 
              ? "No Tasks..." 
              : `No ${buttons} tasks`}
          </p>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="footer">
          <p>Number of Tasks: {tasks.length}</p>
          <button onClick={deleteAll}>Delete All</button>
        </div>
      )}
    </div>
  );
};

export default Tasks;