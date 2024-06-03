import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SettingsDialog from "./components/SettingsDialog";
import color from "./pages/color";
import favcolor from "./pages/favcolor";
import Login from "./pages/Login";

export const heli = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/SettingsDialog",
    Component: SettingsDialog,
  },
  {
    path: "/color",
    Component: color,
  },
  {
    path: "/favcolor",
    Component: favcolor,
  },
  {
    path: "/login",
    Component: Login,
  },
]);
