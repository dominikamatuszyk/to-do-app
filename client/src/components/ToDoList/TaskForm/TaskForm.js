import React, { useState } from "react";
import axios from "axios";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredDate.toString());
    if (enteredDate.toString().length > 0 && enteredTitle.length > 0) {
      const newTask = {
        name: enteredTitle,
        date: new Date(enteredDate),
      };
      axios
        .post("http://localhost:8080/tasks", newTask)
        .then((response) => console.log("Task added"))
        .catch((error) => {
          console.error("There was an error!", error);
        });

      setEnteredDate("");
      setEnteredTitle("");
    } else {
      alert("WRONG INPUT");
    }
    window.location.reload(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.contents}>
        <h3>What are your plans?</h3>
        <div className={styles.content}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className={styles.content}>
          <label>Date</label>
          <input
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.customBtn} ${styles.submit}`}
            type="submit"
            onClick={submitHandler}
          >
            Add to the list
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
