import React from "react";
import TaskCard from "../TaskCard";
import styles from "./index.module.scss";
function Column({ column, tasks }) {
  return (
    <div className={styles.container}>
      <h3>{column.title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
