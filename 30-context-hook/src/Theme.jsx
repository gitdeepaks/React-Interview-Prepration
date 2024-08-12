import React, { useState } from "react";

const themes = {
  light: {
    foregroung: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foregroung: "white",
    background: "#252525",
  },
};
export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
