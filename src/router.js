import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import color from "./pages/color";
import favcolor from "./pages/favcolor";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Account from "./pages/Account";

export const heli = createBrowserRouter([
  {
    path: "/",
    Component: Home,
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
    path: "/signup",
    Component : Signup
  },
  {
    path: "/login",
    Component : Signin
  },
  {
    path: "/account",
    Component: Account
  }
]);
