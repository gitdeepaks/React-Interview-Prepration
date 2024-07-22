import React from "react";

export default function LocalStorage() {
  return (
    <div>
      <h3>Hello value</h3>
      <input
        type="text"
        placeholder="Enter you name"
        value={""}
        onChange={""}
      />
      <button className="btn">Logout</button>
    </div>
  );
}
