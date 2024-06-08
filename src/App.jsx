import { RouterProvider } from "react-router-dom";
import "./App.css";
import { heli } from "./router";
import UserContextProvider from "./Config/UserContextProvider";
import TimerContextProvider from "./Config/TimerContextProvider";import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>

    <UserContextProvider>
        <TimerContextProvider>
          <RouterProvider router={heli} />
        </TimerContextProvider>
      </UserContextProvider>

    </ThemeProvider>
    </>
  );
}

export default App;
