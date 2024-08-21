import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function regiter(e) {
    e.preventDefault();
    console.log("Data", username, password, email);
  }

  return (
    <>
      <div className="App">
        <form onSubmit={regiter}>
          <label htmlFor="">Email 🚀</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => {}}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
