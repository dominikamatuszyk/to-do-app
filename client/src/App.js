import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import NewTask from "./components/ToDoList/TaskForm/NewTask";
import TaskList from "./components/ToDoList/TaskList/TaskList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NewTask />
      <TaskList />
    </React.Fragment>
  );
}

export default App;
