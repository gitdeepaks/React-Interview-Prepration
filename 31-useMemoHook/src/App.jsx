import React from "react";
import { useState, useMemo } from "react";
import "./App.css";

const users = [
  {
    id: 1,
    name: "Foo",
  },
  {
    id: 2,
    name: "Bar",
  },
];

function App() {
  console.log("render");

  const [search, setsearch] = useState("");
  const [text, settext] = useState("");
  const fileterUsers = useMemo(() => {
    console.log("filterUsers recalculating");
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search]);

  return (
    <div className="App">
      <input
        className="rounded-xl text-lg p-5 bg-white text-black"
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button
        className="text-xl text-green-500 bg-slate-300 ml-3 rounded-xl "
        onClick={() => setsearch(text)}
      >
        Search
      </button>
      {text} {search}
      <ul>
        {fileterUsers.map((filteruser) => (
          <li className="text-3xl tracking-tight" key={filteruser.id}>
            {filteruser.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
