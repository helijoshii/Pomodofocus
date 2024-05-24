import React from "react";
import { Close, Clock, Sound, Magic, Notification } from "../icons";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#518a58] h-full w-full">
      <div className="  flex justify-center">
        <div className="h-fit bg-white w-[400px] mt-16 rounded px-5">
          <div className="flex justify-end gap-32 text-[#AAA] font-medium my-4">
            <p>SETTINGS</p>
            <Close className="mr-2 cursor-pointer" onClick={close} />
          </div>

          <hr className="text-[#AAA]" />

          <div>
            <div className="text-[#AAA] mt-7 mb-2 flex text-sm gap-1">
              <Clock />
              <p>TIMER</p>
            </div>
            <p className="text-left mt-4 text-base text-[#555555]">
              Time (minutes)
            </p>
            <div className="text-[#AAA] flex text-sm text-left mt-2 gap-8">
              <div>
                <p>Pomodoro</p>
                <input
                  type="number"
                  placeholder="25"
                  className="border mt-1 p-2 bg-[#EFEFEF] text-black  rounded w-full"
                />
              </div>
              <div>
                <p>Short Break</p>
                <input
                  type="number"
                  placeholder="5"
                  className="border mt-1 p-2 bg-[#EFEFEF] text-black rounded w-full"
                />
              </div>
              <div>
                <p>Long Break</p>
                <input
                  type="number"
                  placeholder="25"
                  className="border mt-1 p-2 bg-[#EFEFEF] text-black  rounded w-full"
                />
              </div>
            </div>

            <hr className="text-[#AAA] mt-9" />

            <div id="sound">
              <div className="text-[#AAA] mt-7 mb-2 flex text-sm gap-1">
                <Sound />
                <p>SOUND</p>
              </div>
              <div className="mt-8 flex justify-between">
                <p className="text-[#555555]">Alarm Sound</p>
                <select
                  id="sounds"
                  name="sounds"
                  className="text-base text-[#787878] bg-[#EBEBEB] rounded p-3"
                >
                  <option value="Bell">Bell</option>
                  <option value="Bird">Bird</option>
                  <option value="Digital">Digital</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Wood">Wood</option>
                </select>
              </div>
            </div>

            <hr className="text-[#AAA] mt-9" />

            <div id="theme">
              <div className="text-[#AAA] mt-7 mb-2 flex text-sm gap-1">
                <Magic />
                <p>THEME</p>
              </div>

              <div className="mt-8 flex justify-between">
                <p className="text-[#555555]"> Color Themes</p>
                <div className="flex gap-2">
                  <div className="w-7 h-7 bg-[#518A58] rounded-lg"></div>
                  <div className="w-7 h-7 bg-[#7D53A2] rounded-lg"></div>
                  <div className="w-7 h-7 bg-[#9B8238] rounded-lg"></div>
                </div>
              </div>
            </div>

            <hr className="text-[#AAA] mt-9" />

            <div id="notification">
              <div className="text-[#AAA] mt-7 mb-2 flex text-sm gap-1">
                <Notification />
                <p>NOTIFICATION</p>
              </div>

              <div className="mt-8 flex justify-between">
                <p className="text-[#555555]"> Reminder </p>
                <input
                  type="number"
                  placeholder="5"
                  className="bg-[#EFEFEF] rounded-lg p-2 w-20"
                />
              </div>
            </div>

            <div className="mt-8 h-16 flex items-center justify-end -m-5 bg-[#EFEFEF]">
              <button className="bg-[#222222] text-white font-sans py-2 px-3 rounded-lg mr-3   w-20 h-9">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
