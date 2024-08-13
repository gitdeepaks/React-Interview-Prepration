import React from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setUserName] = useState("");
  console.log("render", name);

  const textInput = useRef();
  function onTextFocus() {
    console.log("onTextFocus", textInput.current.value);
    textInput.current.focus;
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput}
        value={name}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onTextFocus}>Focus</button>
    </div>
  );
}

export default App;
