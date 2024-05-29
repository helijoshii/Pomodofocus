import React from "react";
import { useNavigate } from "react-router-dom";

const color = () => {
  const Navigate = useNavigate();
  const color = "red";
  setTimeout(() => {
    Navigate("/favcolor", { state: { color } });
  }, 1000);

  return <div>color</div>;
};

export default color;
