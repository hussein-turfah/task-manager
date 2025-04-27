import { combineReducers } from "redux";
import TasksData from "./TasksData";
import ColumnsData from "./ColumnsData";
import TagsData from "./TagsData";
import TaskHistoriesData from "./TaskHistoriesData";
const combinedReducers = combineReducers({
  TasksData,
  ColumnsData,
  TagsData,
  TaskHistoriesData,
});

export default combinedReducers;
