import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, start, pause, resume } = useTimer({
    expiryTimestamp,
    autoStart: false, // This ensures the timer does not start automatically
    onExpire: () => console.warn("onExpire called"),
  });

  const [isPaused, setIsPaused] = useState(true); // Initialize as paused

  const handleButtonClick = () => {
    if (!isRunning && isPaused) {
      start();
      setIsPaused(false);
    } else if (isRunning && !isPaused) {
      pause();
      setIsPaused(true);
    } else if (isRunning && isPaused) {
      resume();
      setIsPaused(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

      <button onClick={handleButtonClick}>
        {isRunning && !isPaused ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default function Time() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
