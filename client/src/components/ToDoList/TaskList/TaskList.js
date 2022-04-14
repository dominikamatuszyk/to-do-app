import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./TaskList.module.css";

import Card from "../../UI/Card/Card";
import Task from "../Task/Task";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const taskList = tasks.map((task) => (
    <Task
      name={task.name}
      id={task._id}
      date={task.date}
      key={Math.random()}
      isDone={task.isDone}
    />
  ));

  const sortHandlerDate = () => {
    const sorter = (a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };
    console.log([...tasks].sort(sorter));
    setTasks([...tasks].sort(sorter));
  };

  const sortHandlerName = () => {
    setTasks([...tasks].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <React.Fragment>
      <section className={styles.taskList}>
        <button onClick={sortHandlerDate}>Sort by date</button>
        <button onClick={sortHandlerName}>Sort by name</button>
        <Card>
          <ul>{taskList}</ul>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default TaskList;
