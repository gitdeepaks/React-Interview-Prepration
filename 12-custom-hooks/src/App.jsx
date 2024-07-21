import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";
import Counter from "./components/Counter";
import { useWindow } from "./hooks/useWindow";

function App() {
  const { width, height } = useWindow();

  return (
    <>
      <Counter />;
      <div className="">
        width:{width} height:{height}
      </div>
    </>
  );
}

export default App;
