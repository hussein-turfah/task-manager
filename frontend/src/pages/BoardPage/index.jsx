import styles from "./index.module.scss";
import React, { useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";
import { getColumns } from "../../store/actions/ColumnActions";
import Column from "../../components/Column";
import { moveTask } from "../../store/actions/TaskActions";
import { getTags } from "../../store/actions/TagActions";

const BoardPage = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(({ ColumnsData }) => ColumnsData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column_id = destination.droppableId;
    const position = destination.index;
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
