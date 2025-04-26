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


export const createTask = ({
  title,
  description,
  column_id,
  tag_id,
  position,
  otherTag,
}) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/tasks', {
      title,
      description,
      column_id,
      tag_id,
      position,
      other_tag: otherTag,
    });

    dispatch(getColumns());
  } catch (error) {
    console.log(error);
  }
}