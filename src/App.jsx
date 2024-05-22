import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { heli } from "./router";

function App() {
  return (
    <RouterProvider router={heli} />
  );
}

export default App;
