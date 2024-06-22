import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") || false
  );
  const themeToogle = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ mode: darkMode, setMode: themeToogle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
