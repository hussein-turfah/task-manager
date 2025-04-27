import React from "react";
import TaskCard from "../TaskCard";
import styles from "./index.module.scss";
import { Droppable } from "@hello-pangea/dnd";
import TaskComposer from "../TaskComposer";

export default function Column({ column, tasks }) {
  return (
    <div className={styles.container}>
      <h3>{column.name}</h3>
      <Droppable droppableId={column.id.toString()}>
        {(provided) => (
          <div
            className={styles.tasksContainer}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks?.sort((a, b) => a.position - b.position)?.map((task, index) => (
              <TaskCard key={task?.id} task={task} index={index} />
            ))}
            {provided.placeholder}
            <TaskComposer columnId={column?.id} />
          </div>
        )}
      </Droppable>
    </div>
  );
}
