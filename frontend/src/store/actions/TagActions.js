import axios from "../../utils/Http";

export const ACTIONS = {
  CREATE_TAG: "/tags",
  GET_TAGS: "/tags",
}

export const createTag = (tag) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/tags", tag)

    dispatch({
      type: ACTIONS.CREATE_TAG,
      data
    })
  } catch (error) {
    console.log(error);
  }
};

export const getTags = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/tags")
    dispatch({
      type: ACTIONS.GET_TAGS,
      data
    })
  } catch (error) {
    console.log(error);
  }
};
