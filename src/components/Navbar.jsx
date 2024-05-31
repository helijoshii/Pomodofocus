import React from "react";
import { Settings, Profile, Report, More } from "../icons";
import { useState } from "react";
import SettingsDialog from "./SettingsDialog";
import SettingsModal from "./SettingsModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <navbar>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            {/* Add the Pomodofocus logo */}
            <h1 className="text-white text-xl font-semibold">Pomodofocus</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white bg-opacity-10 text-white px-3 py-2 text-sm rounded flex">
              <Report className="mt-1 mr-1 " />
              <span className="hidden sm:inline"> Report </span>
            </button>
            <button
              className="bg-white bg-opacity-10 text-white px-3 py-2 text-sm rounded flex"
              onClick={() => setOpen(true)}
            >
              <Settings className="mt-1 mr-1" /> <span> Settings </span>
            </button>

            <button className="bg-white bg-opacity-10 text-white px-3 py-2 text-sm  rounded flex">
              <Profile className="mt-1 mr-2" /> <span> Sign in </span>
            </button>
            <button className="bg-white bg-opacity-10 text-white px-1 py-2 text-sm rounded">
              <More className="mt-1 " />
            </button>
          </div>
        </div>
      </navbar>
      {open && <SettingsDialog close={() => setOpen(false)} />}
    </div>
  );
};

export default Navbar;
