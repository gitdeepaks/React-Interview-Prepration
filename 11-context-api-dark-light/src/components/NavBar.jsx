import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">blog</Link>

      <button onClick={toggleTheme} onChange={theme === "dark"}>
        Change
      </button>
    </nav>
  );
}

export default NavBar;
