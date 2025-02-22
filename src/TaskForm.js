import React, { useState } from "react";

const TaskForm = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    completed: false,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    onAddTask(task);
    onClose(); // Close form after adding task
  };

  return (
    <div className="task-form-overlay">
      <div className="task-form">
        <h2>Add New Task</h2>
        <input type="text" name="title" placeholder="Task Title" value={task.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={task.description} onChange={handleChange} />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Buttons */}
        <div className="btn-group">
          <button className="btn-add" onClick={handleSubmit}>Add Task</button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
