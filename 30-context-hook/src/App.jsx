import { useContext } from "react";
// import "./App.css";
import { ThemeContext } from "./Theme";

const App = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  return (
    <div className="content">
      <h1
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        Rsbuild with React
      </h1>
      <p
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        Start building amazing things with Rsbuild.
      </p>

      <button onClick={() => toggleTheme()}>ToggleTheme</button>
    </div>
  );
};

export default App;
