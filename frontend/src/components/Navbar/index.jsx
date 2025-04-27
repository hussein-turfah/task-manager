import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <div className={styles.container}>
      <h1>Task Manager</h1>
      <button
       className={styles.button}
        onClick={() => navigate(path === "/history" ? "/" : "/history")}
      >
        {path === "/history" ? "Home" : "History"}
      </button>
    </div>
  );
}

export default NavBar;
