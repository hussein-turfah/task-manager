import React from "react";
import styles from "./index.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <h1>Task Manager</h1>
      <button className={styles.button}>Log</button>
    </div>
  );
}

export default NavBar;
