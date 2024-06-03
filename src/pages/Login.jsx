import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-[#518a58] h-screen w-full">
        <div className="mx-[440px] w-[350px]">
          <p className="text-white text-5xl pt-12">Pomodofocus</p>
          <p className="pt-6 text-white">Create Account</p>
          <div className="h-72 bg-white mt-10 rounded-lg">
            <div className="pt-2 px-4 pb-8">
              <button className="p-3 text-slate-400 text-sm border w-[314px] h-11 flex justify-center items-center">
                Signup with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
