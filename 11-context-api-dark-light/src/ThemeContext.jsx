import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({ children }) {
  const [isDark, SetIsDark] = useState(false);

  function togggleTheme() {
    SetIsDark((prevState) => !prevState);
  }

  const theme = isDark ? "dark" : "light";

  useEffect(
    function () {
      document.documentElement.setAttribute("data-theme", theme);
    },
    [isDark]
  );
  return (
    <ThemeContext.Provider value={{ theme, togggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
