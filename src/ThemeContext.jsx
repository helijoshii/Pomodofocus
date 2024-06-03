import React, { createContext, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.green); // Default theme

  const changeTheme = (newTheme) => {
    setTheme(themes[newTheme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
