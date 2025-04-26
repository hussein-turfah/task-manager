import axios from "../../utils/Http";

export const ACTIONS = {
  GET_COLUMNS: 'columns/get',
}

export const getColumns = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/columns');

    dispatch({
      type: ACTIONS.GET_COLUMNS,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}
