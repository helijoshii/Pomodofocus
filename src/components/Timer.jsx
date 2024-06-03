import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  const initialTime = 1500; // 25 minutes in seconds
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date());
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + initialTime);

  function ding() {
    var sound = new Audio("./src/components/data/Start.mp3");
    sound.play();
  }
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      autoStart: false,
      onExpire: () => console.warn("Timer expired"),
    });

  const [isPaused, setIsPaused] = useState(true);
  const [activeTimer, setActiveTimer] = useState("Pomodoro");

  const handleButtonClick = () => {
    ding();
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

  const setTimer = (seconds, timerType) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    restart(time, false); // Restart the timer with the new expiry timestamp
    setActiveTimer(timerType); // Set the active timer
  };

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="bg-white text-white bg-opacity-10 h-80 w-[480px] mt-10 rounded-md">
        <div className="mx-8">
          <div className="flex flex-row gap-4 mt-5 justify-around text-base font-semibold ">
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${
                activeTimer === "Pomodoro"
                  ? "bg-[#548059]"
                  : "hover:bg-[#548059]"
              }`}
              onClick={() => setTimer(1500, "Pomodoro")} // 25 minutes for Pomodoro
            >
              Pomodoro
            </p>
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${
                activeTimer === "Short Break"
                  ? "bg-[#548059]"
                  : "hover:bg-[#548059]"
              }`}
              onClick={() => setTimer(300, "Short Break")} // 5 minutes for Short Break
            >
              Short Break
            </p>
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${
                activeTimer === "Long Break"
                  ? "bg-[#548059]"
                  : "hover:bg-[#548059]"
              }`}
              onClick={() => setTimer(900, "Long Break")} // 15 minutes for Long Break
            >
              Long Break
            </p>
          </div>

          <div>
            <p className="text-[120px]">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>

          <div>
            <button
              className="bg-white text-[#518a58] w-48 h-14 text-2xl px-3 py-2 font-semibold rounded-md transition-all duration-200 ease-in-out transform active:scale-95 z-0"
              onClick={handleButtonClick}
            >
              {isRunning && !isPaused ? "Pause" : "Start"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
