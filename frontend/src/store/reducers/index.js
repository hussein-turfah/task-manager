import { combineReducers } from "redux";
import TasksData from "./TasksData";
import ColumnsData from "./ColumnsData";
import TagsData from "./TagsData";

const combinedReducers = combineReducers({
  TasksData,
  ColumnsData,
  TagsData,
});

export default combinedReducers;
