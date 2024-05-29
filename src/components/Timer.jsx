import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = () => {
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date());
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500); // Set initial timer duration (25 minutes)

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
  } = useTimer({
    expiryTimestamp,
    autoStart: false, // Ensure the timer does not start automatically
    onExpire: () => console.warn('Timer expired'),
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
    <div className="flex items-center justify-center overflow-hidden">
      <div className="bg-white text-white bg-opacity-10 h-80 w-[480px] mt-10 rounded-md">
        <div className="mx-8">
          <div className="flex flex-row gap-4 mt-5 justify-around text-base font-semibold ">
            <p className="hover:bg-[#548059] active:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Pomodoro</p>
            <p className="hover:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Short Break</p>
            <p className="hover:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Long Break</p>
          </div>

          <div>
            <p className="text-[120px]">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
          </div>

          <div>
            <button
              className="bg-white text-[#518a58] w-48 h-14 text-2xl px-3 py-2 font-semibold rounded-md transition-all duration-200 ease-in-out transform active:scale-95"
              onClick={handleButtonClick}
            >
              {isRunning && !isPaused ? 'Pause' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
