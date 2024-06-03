import { RouterProvider } from "react-router-dom";
import "./App.css";
import { heli } from "./router";
import UserContextProvider from "./Config/UserContextProvider";
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
    <ThemeProvider>

    <UserContextProvider>
    <RouterProvider router={heli} />
    </UserContextProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
