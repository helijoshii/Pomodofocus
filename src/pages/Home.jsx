import React from "react";
import Timer from "../components/Timer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#518a58] h-screen w-full">
      <div className="mx-64 xl:mx-[309px] lg:mx-48 md:mx-16 sm:mx-0">
        <Navbar />
        <hr />
        <Timer />
      </div>
    </div>
  );
};

export default Home;
