import React from "react";
import { useLocation } from "react-router-dom";

const favcolor = () => {
  const location = useLocation();
  const color = location.state.color;

  return (
    <>
      <div>Blue</div>
      <div>{color}</div>
    </>
  );
};

export default favcolor;
