import { RouterProvider } from "react-router-dom";
import "./App.css";
import { heli } from "./router";
import UserContextProvider from "./Config/UserContextProvider";
import TimerContextProvider from "./Config/TimerContextProvider";
function App() {
  return (
    <>
      <UserContextProvider>
        <TimerContextProvider>
          <RouterProvider router={heli} />
        </TimerContextProvider>
      </UserContextProvider>

    </>
  );
}

export default App;
