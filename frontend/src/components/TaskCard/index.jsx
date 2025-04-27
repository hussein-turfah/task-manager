import React from "react";
import styles from "./index.module.scss";
import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <small className={styles.tag}>{task.Tag.name}</small>
        </div>
      )}
    </Draggable>
  );
}
