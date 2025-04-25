import React, { useState } from "react";
import Column from "../Column";
import { initialData } from "../../data/mockTasks";
import styles from "./index.module.scss";

function Board() {
  const [data, setData] = useState(initialData);

  return (
    <div className={styles.container}>
      {data.columnOrder.map((colId) => {
        const column = data.columns[colId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={colId} column={column} tasks={tasks} />;
      })}
    </div>
  );
}

export default Board;
