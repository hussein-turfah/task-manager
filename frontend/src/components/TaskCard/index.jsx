import React from "react";
import styles from "./index.module.scss";

function TaskCard({ task }) {
  return (
    <div className={styles.container}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small className={styles.tag}>{task.tag}</small>
    </div>
  );
}

export default TaskCard;
