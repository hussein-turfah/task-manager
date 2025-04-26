import { ACTIONS } from "../actions/TagActions";

const initialState = {
  data: [],
  loading: true,
}

const TagsData = (state = initialState, { type, data }) => {
  switch (type) {
    case ACTIONS.GET_TAGS:
      return {
        ...state,
        data,
        loading: false,
      }
    case ACTIONS.CREATE_TAG:
      return {
        ...state,
        data: [...state.data, data]
      }
    default:
      return state;
  }
}

export default TagsData;
