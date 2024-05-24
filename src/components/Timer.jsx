import React from "react";

const Timer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" bg-white text-white bg-opacity-10 h-80 w-[480px] mt-10 rounded-md">
        <div className="mx-8">
          <div className="flex flex-row gap-4 mt-5 justify-around text-base font-semibold ">
            <p className="hover:bg-[#548059] active:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Pomodoro</p>
            <p className="hover:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Short Break</p>
            <p className="hover:bg-[#548059] px-3 py-1 rounded-md cursor-pointer">Long Break</p>
          </div>

          <div>
            <p className="text-[120px]">25:00</p>
          </div>

          <div>
            <button className="bg-white text-[#518a58] w-48 h-14 text-2xl px-3 py-2 font-semibold rounded-md transition-all duration-200 ease-in-out transform active:scale-95">START</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
