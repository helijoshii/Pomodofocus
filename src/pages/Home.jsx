import React from "react";
import { Settings, Profile, Report, More } from "../icons";

const Home = () => {

  return <div className="bg-[#518a58] h-screen w-full">
    <navbar>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="https://www.tailwind-kit.com/images/person/1.jpg" alt="profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-white font-semibold">Pomodofocus</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg flex"> <Report className="mt-1 mr-1 " /> Report</button>
          <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg flex"> <Settings className="mt-1 mr-1 "/> Settings </button>
          <button className="bg-white bg-opacity-10 text-white px-4 py-2  rounded-lg flex"> <Profile className="mt-1 mr-2"/> Sign in</button>
          <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg"><More className="mt-1 mr-1 "/></button>
        </div>
      </div>
    </navbar>
  </div>;
};

export default Home;
