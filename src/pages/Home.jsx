import React, { useContext } from "react";
import Timer from "../components/Timer";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="h-screen w-full transition-colors duration-500"
      style={{ backgroundColor: theme }}
    >
      <div className="mx-64 xl:mx-[309px] lg:mx-48 md:mx-16 sm:mx-0">
        <Navbar />
        <hr />
        <Timer />
      </div>
    </div>
  );
};

export default Home;
