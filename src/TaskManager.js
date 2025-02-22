import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import SearchFilter from "./SearchFilter";
import { FaPlus } from "react-icons/fa";
import "./App.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setNewTask(null);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || task.priority === filter || (filter === "Completed" && task.completed))
  );

  return (
    <div className="container">
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <button className="add-task-btn" onClick={() => setNewTask({ title: "", description: "", dueDate: "", priority: "Medium", completed: false })}>
        <FaPlus />
      </button>
      {newTask && <TaskForm onAddTask={addTask} onClose={() => setNewTask(null)} />}
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
