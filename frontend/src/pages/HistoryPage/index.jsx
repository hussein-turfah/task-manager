import { useDispatch, useSelector } from "react-redux";
import { getTaskHistory } from "../../store/actions/TaskHistoryActions";
import { useEffect } from "react";
import styles from "./index.module.scss";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const taskHistories = useSelector(
    ({ TaskHistoriesData }) => TaskHistoriesData.data
  );

  useEffect(() => {
    dispatch(getTaskHistory());
  }, []);

  return (
    <div className={styles.container}>
      <h1>History</h1>
      {taskHistories.map((taskHistory) => (
        <p key={taskHistory.id}>
          {taskHistory?.Task?.title} was {taskHistory?.action}{" "}
          {taskHistory?.action.includes("up") ||
          taskHistory?.action.includes("down")
            ? `with in ${taskHistory?.Task?.Column?.name}`
            : `${taskHistory?.Task?.Column?.name}`}
        </p>
      ))}
    </div>
  );
};

export default HistoryPage;
