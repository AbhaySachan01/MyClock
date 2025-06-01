import React, { useState, useEffect, useRef } from "react";
import styles from "../Styles/Timer.module.css";

function Timer() {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up!");
    }
  }, [timeLeft, isRunning]);

  const startTimer = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    if (totalSeconds >= 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);   
  };

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.heading}>Timer</h1>
      <div className={styles.timerBox}>
        <div className={styles.display}>
          {timeLeft > 0 || isRunning ? formatTime() : "00:00"}
        </div>

        {!isRunning && (
          <div className={styles.inputs}>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="Min"
              min="0"
            />
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              placeholder="Sec"
              min="0"
              max="59"
            />
          </div>
        )}

        <div className={styles.controls}>
          {!isRunning ? (
            <button onClick={startTimer} className={styles.start}>
              Start
            </button>
          ) : (
            <button onClick={() => setIsRunning(false)} className={styles.pause}>
              Pause
            </button>
          )}
          <button onClick={resetTimer} className={styles.reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
