import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const upcomingTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) > new Date());
  const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-sections">
      <section>
        <h2>Upcoming Tasks</h2>
        {upcomingTasks.map(task => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </section>

      <section>
        <h2>Overdue Tasks</h2>
        {overdueTasks.map(task => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </section>

      <section>
        <h2>Completed Tasks</h2>
        {completedTasks.map(task => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </section>
    </div>
  );
};

export default TaskList;
