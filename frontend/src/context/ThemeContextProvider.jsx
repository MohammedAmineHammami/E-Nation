import React, { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();
function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  console.count("from context");
  useEffect(() => {
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ mode: darkMode, toggleMode: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
