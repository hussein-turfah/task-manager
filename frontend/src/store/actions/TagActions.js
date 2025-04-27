import { toast } from "react-toastify";
import axios from "../../utils/Http";

export const ACTIONS = {
  CREATE_TAG: "/tags",
  GET_TAGS: "/tags",
}

export const createTag = (tag) => async (dispatch) => {
  try {
    const { data } = await axios.post("/tags", tag)

    dispatch({
      type: ACTIONS.CREATE_TAG,
      data
    })
    toast.success("Tag created successfully")
  } catch (error) {
    console.log(error);
    toast.error("Error creating tag")
  }
};

export const getTags = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/tags")
    dispatch({
      type: ACTIONS.GET_TAGS,
      data
    })
  } catch (error) {
    console.log(error);
  }
};
