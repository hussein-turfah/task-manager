import { toast } from "react-toastify";
import axios from "../../utils/Http";
import { getColumns } from "./ColumnActions";

export const ACTIONS = {
  CREATE_TASK: 'tasks/create',
  MOVE_TASK: 'tasks/move/:id',
  MOVE_TASK_OPTIMISTIC: 'tasks/move/optimistic',
  MOVE_TASK_ERROR: 'tasks/move/error',
}

export const moveTask = (id, column_id, position) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/tasks/${id}/move`, {
      column_id,
      position,
    });

    // dispatch(getColumns());
    toast.success("Task moved successfully");
  } catch (error) {
    console.log(error);
    toast.error("Error moving task");
  }
}


export const createTask = ({
  title,
  description,
  column_id,
  tag_id,
  otherTag,
}) => async (dispatch) => {
  try {
    const { data } = await axios.post('/tasks', {
      title,
      description,
      column_id,
      tag_id,
      other_tag: otherTag,
    });

    dispatch(getColumns());
    toast.success("Task created successfully");
  } catch (error) {
    console.log(error);
    toast.error("Error creating task");
  }
}