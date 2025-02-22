import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Intl.DateTimeFormat("en-GB").format(new Date(task.dueDate))}</p>
      
        <div className="task-actions">
            <button className="btn-complete" onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}>
                <FaCheck />
            </button>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>
                <FaTrash />
            </button>
        </div>


    </div>
  );
};

export default TaskItem;
