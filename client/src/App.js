import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import NewTask from "./components/ToDoList/TaskForm/NewTask";
import TaskList from "./components/ToDoList/TaskList/TaskList";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Login/RegisterLogin";

function App() {
  const tokenStr = localStorage.getItem("jwtToken");

  return (
    <React.Fragment>
      <Header />
      {tokenStr === "" ? (
        <React.Fragment>
          <LoginForm />
          <RegisterForm />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NewTask />
          <TaskList />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
