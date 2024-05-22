import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const heli = createBrowserRouter([
  {
    path: "/",
    Component: Home,

  },
]);
