import styles from "./index.module.scss";
import React, { useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";
import { getColumns, setColumns } from "../../store/actions/ColumnActions";
import Column from "../../components/Column";
import { moveTask } from "../../store/actions/TaskActions";
import { getTags } from "../../store/actions/TagActions";

const BoardPage = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(({ ColumnsData }) => ColumnsData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column_id = destination.droppableId;
    const position = destination.index;
    let selectedTask = null;

    const updatedColumns = data.map((column) => {
      console.log(column.id, source.droppableId, destination.droppableId);
      if (column.id.toString() === source.droppableId.toString()) {
        const newTasks = [...column.Tasks];
        selectedTask = newTasks[source.index];
        newTasks.splice(source.index, 1);
        return { ...column, Tasks: newTasks };
      }
      if (column.id.toString() === destination.droppableId.toString()) {
        const newTasks = [...column.Tasks];
        newTasks.splice(destination.index, 0, { ...selectedTask });
        return { ...column, Tasks: newTasks };
      }
      return column;
    });

    dispatch(setColumns(updatedColumns));

    dispatch(moveTask(draggableId, column_id, position));
  };

  useEffect(() => {
    dispatch(getColumns());
    dispatch(getTags());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.boardContainer}>
          {data?.map((column) => {
            return (
              <Column key={column?.id} column={column} tasks={column?.Tasks} />
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default BoardPage;
