import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Welcome to My Clock App</h1>
      <p className={styles.subtext}>Choose a clock mode to begin:</p>
      <div className={styles.cardContainer}>
        <Link to="/digitalclock" className={styles.card}>
          <h2>Digital Clock</h2>
          <p>View current time with AM/PM</p>
        </Link>
        <Link to="/stopwatch" className={styles.card}>
          <h2>Stopwatch</h2>
          <p>Track time with millisecond precision</p>
        </Link>

        <Link to="/timer" className={styles.card}>
          <h2>Timer</h2>
          <p>Set Timer for your Tasks</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
