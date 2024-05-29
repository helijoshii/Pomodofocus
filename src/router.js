import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SettingsDialog from "./components/SettingsDialog";
import girls from "./pages/girls";
import favgirls from "./pages/favgirls";
import Time from "./pages/Time";

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
    path: "/girls",
    Component: girls,
  },
  {
    path: "/favgirls",
    Component: favgirls,
  },
  {
    path: "/time",
    Component: Time,
  },
]);
