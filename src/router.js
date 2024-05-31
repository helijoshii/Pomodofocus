import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SettingsDialog from "./components/SettingsDialog";
import color from "./pages/color";
import favcolor from "./pages/favcolor";

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
]);
