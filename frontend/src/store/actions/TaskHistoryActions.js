import axios from "../../utils/Http";

export const ACTIONS = {
  GET_TASK_HISTORY: 'task-histories/get',
}

export const getTaskHistory = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/task-histories');
    dispatch({
      type: ACTIONS.GET_TASK_HISTORY,
      data
    });
  } catch (error) {
    console.log(error);
  }
}
