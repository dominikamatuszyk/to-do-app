import React from "react";
import axios from "axios";
import styles from "./Task.module.css";
import DateField from "./Date";

const Task = (props) => {
  const doneHandler = (event) => {
    axios.put(`http://localhost:8080/tasks/update/${props.id}`, {
      ...props,
      isDone: "true",
    });
    window.location.reload(false);
  };

  const undoneHandler = (event) => {
    axios.put(`http://localhost:8080/tasks/update/${props.id}`, {
      ...props,
      isDone: "false",
    });
    window.location.reload(false);
  };

  const deleteHandler = () => {
    axios.delete(`http://localhost:8080/tasks/delete/${props.id}`);
    window.location.reload(false);
  };

  const date = new Date(props.date);

  return (
    <li>
      <div className={styles.task}>
        <div>
          <button
            type="submit"
            className={styles.customBtn}
            onClick={deleteHandler}
          >
            Delete
          </button>
          {props.isDone === "false" ? (
            <button onClick={doneHandler} className={styles.customBtn}>
              Done
            </button>
          ) : (
            <button onClick={undoneHandler} className={styles.customBtn}>
              Undo
            </button>
          )}
        </div>
        <h1
          className={
            styles.status +
            `${props.isDone.toString() === "false" ? "UNDONE" : ""}`
          }
        >
          {props.name}
        </h1>
        <DateField date={date} />
      </div>
    </li>
  );
};

export default Task;
