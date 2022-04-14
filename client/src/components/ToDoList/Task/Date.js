import React from "react";
import styles from "./Date.module.css";

const Date = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className={styles.dat}>
      <div className={styles.date__month}>{month}</div>
      <div className={styles.date__day}>{day}</div>
      <div className={styles.date__year}>{year}</div>
    </div>
  );
};

export default Date;
