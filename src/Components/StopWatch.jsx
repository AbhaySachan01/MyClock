import React, { useState, useEffect, useRef } from "react";
import styles from '../Styles/Stopwatch.module.css';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // in ms
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10); // update every 10ms
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = () => {
    const ms = String(elapsedTime % 1000).padStart(3, '0').slice(0, 2);
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}:${ms}`;
  };

  return (
    <div className={styles.wrapper}>
         <h1 className={styles.heading}>Stopwatch</h1>
      <div className={styles.stopwatch}>
        
        <div className={styles.display}>{formatTime()}</div>
        <div className={styles.controls}>
          <button onClick={start} className={styles.startButton}>Start</button>
          <button onClick={stop} className={styles.stopButton}>Stop</button>
          <button onClick={reset} className={styles.resetButton}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
