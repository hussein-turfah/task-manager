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
    const { data } = await axios.put(`/api/tasks/${id}/move`, {
      column_id,
      position,
    });

    dispatch(getColumns());

  } catch (error) {
    console.log(error);
  }
}