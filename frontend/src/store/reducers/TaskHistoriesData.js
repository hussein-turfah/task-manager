import { ACTIONS } from "../actions/TaskHistoryActions";

const initialState = {
  data: [],
  loading: true,
};

const TaskHistoriesData = (state = initialState, { type, data }) => {
  switch (type) {
    case ACTIONS.GET_TASK_HISTORY:
      return { ...state, data };
    default:
      return state;
  }
};

export default TaskHistoriesData;
