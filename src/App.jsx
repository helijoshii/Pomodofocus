import { RouterProvider } from "react-router-dom";
import "./App.css";
import { heli } from "./router";
import UserContextProvider from "./Config/UserContextProvider";

function App() {
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={heli} />
    </UserContextProvider>
    </>
  );
}

export default App;
