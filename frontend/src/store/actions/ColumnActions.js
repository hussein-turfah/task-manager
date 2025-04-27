import axios from "../../utils/Http";

export const ACTIONS = {
  GET_COLUMNS: 'columns/get',
  SET_COLUMNS: 'columns/set',
}

export const getColumns = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/columns");

    dispatch({
      type: ACTIONS.GET_COLUMNS,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export const setColumns = (columns) => async (dispatch) => {
  try {
    dispatch({
      type: ACTIONS.SET_COLUMNS,
      data: columns,
    });
  } catch (error) {
    console.log(error);
  }
}