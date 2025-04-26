import { ACTIONS } from "../actions/ColumnActions"

const initialState = {
  data: [],
  loading: true,
};

const ColumnsData = (state = initialState, { type, data }) => {
  switch (type) {
    case ACTIONS.GET_COLUMNS:
      return {
        ...state,
        data,
        loading: false,
      };
    default:
      return state;
  }
};

export default ColumnsData;
