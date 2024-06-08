/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import setTime from '../Config/SetTime';
import soundFile from '../lib/Sound.mp3'; 

const Timer = () => {
  const initialTime = 1500; // 25 minutes in seconds
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date());
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + initialTime);
  const { longBreak, shortBrake, Pomodoro } = useContext(setTime);

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      console.warn("Timer expired");
      ding(); // Play sound when the timer expires
    },
  });

  const [isPaused, setIsPaused] = useState(true);
  const [activeTimer, setActiveTimer] = useState("Pomodoro");

  useEffect(() => {
    handlelongBreak();
    handleshortBreak();
  }, [longBreak, shortBrake]);

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

  const setTimer = (seconds, timerType) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    restart(time, false); // Restart the timer with the new expiry timestamp
    setActiveTimer(timerType); // Set the active timer
  };

  function handlelongBreak() {
    setTimer(longBreak, "Long Break"); // 15 minutes for Long Break
  }

  function handleshortBreak() {
    setTimer(shortBrake, "Short Break");
  }

  function hanldePomodoro() {
    setTimer(Pomodoro, "Pomodoro");
  }

  function ding() {
    const audio = new Audio(
      soundFile
    );
    audio.play();
  }


  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="bg-white text-white bg-opacity-10 h-80 w-[480px] mt-10 rounded-md">
        <div className="mx-8">
          <div className="flex flex-row gap-4 mt-5 justify-around text-base font-semibold">
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${activeTimer === "Pomodoro" ? "bg-[#548059]" : "hover:bg-[#548059]"
                }`}
              onClick={hanldePomodoro} // 25 minutes for Pomodoro
            >
              Pomodoro
            </p>
        
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${activeTimer === "Short Break" ? "bg-[#548059]" : "hover:bg-[#548059]"
                }`}
              onClick={handleshortBreak}
            >
              Short Break
            </p>
            <p
              className={`px-3 py-1 rounded-md cursor-pointer ${activeTimer === "Long Break" ? "bg-[#548059]" : "hover:bg-[#548059]"
                }`}
              onClick={handlelongBreak} // 15 minutes for Long Break
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
