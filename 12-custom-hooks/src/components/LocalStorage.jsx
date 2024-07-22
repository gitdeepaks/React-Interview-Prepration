import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorage() {
  const [value, set, remove] = useLocalStorage("usename", "Guest");
  function handleLogOUt() {
    remove();
    set("");
  }
  return (
    <div>
      <h3>Hello value</h3>
      <input
        type="text"
        placeholder="Enter you name"
        value={value}
        onChange={(e) => set(e.target.value)}
      />
      <button className="btn" onClick={handleLogOUt}>
        Logout
      </button>
    </div>
  );
}
