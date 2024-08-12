import React from "react";
import "../src/App.css";

function Button({ text, onButtonClick }) {
  return <button onClick={() => onButtonClick("hello")}>{text}</button>;
}

function App() {
  function onButtonClick(value) {
    console.log("Button clicked from parent", value);
  }

  return (
    <div className="">
      App
      <Button text="Hello React" onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
