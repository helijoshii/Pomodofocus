import { Settings, Profile, Report, More } from "../icons";
import { useState } from "react";
import SettingsDialog from "./SettingsDialog";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Account from "../pages/Account";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const Account = () => {
    navigate("/account");
  };
  return (
    <div>
      <nav>
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

            <Link to="/signup" >
              <button className="bg-white bg-opacity-10 text-white px-3 py-2 text-sm  rounded flex" >
                <Profile className="mt-1 mr-4" /> <span> Sign in </span>
              </button>
            </Link>
            <button className="bg-white bg-opacity-10 text-white px-1 py-2 text-sm rounded"  onClick={Account} >
              <More className="m-2 "/>
            </button>
          </div>
        </div>
      </nav>
      {open && <SettingsDialog close={() => setOpen(false)} />}
    </div>
  );
};

export default Navbar;
