import { ACTIONS } from "../actions/TaskActions"

const initialState = {
  data: [],
  loading: true,
};

const TasksData = (state = initialState, { type, data }) => {
  switch (type) {
    case ACTIONS.CREATE_TASK:
      return { ...state, data: [...state.data, data] };
    case ACTIONS.MOVE_TASK:
      return { ...state, data };
    default:
      return state;
  }
};

export default TasksData;
