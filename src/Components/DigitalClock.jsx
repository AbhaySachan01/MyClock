import React, { useState, useEffect } from "react";
import styles from "../Styles/DigitalClock.module.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const AM_PM = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${AM_PM}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Digital Clock</h1>
      <div className={styles.clockBox}>
        <div className={styles.display}>{formatTime()}</div>
      </div>
    </div>
  );
};

export default DigitalClock;
