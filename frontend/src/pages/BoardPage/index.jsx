import styles from "./index.module.scss";
import Board from "../../components/Board";

const BoardPage = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};

export default BoardPage;
