import React from "react";
import TaskManager from "./TaskManager";
import "./App.css";

function App() {
  return (

    <div className="app">
      <div className="header">
        <h1>Task Manager</h1>
      </div>
      <div className="content">
        <TaskManager />
      </div>
    </div>
    
  );
}

export default App;
