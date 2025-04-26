import { combineReducers } from "redux";
import TasksData from "./TasksData";
import ColumnsData from "./ColumnsData";

const combinedReducers = combineReducers({
  TasksData,
  ColumnsData,
});

export default combinedReducers;
