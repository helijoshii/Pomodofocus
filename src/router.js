import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./components/Setting";

export const heli = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/setting",
    Component: Setting ,
  },

]);
