import React, { useEffect, useState } from "react";
import { useDebouce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

export default function DeBounce() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  const debouncedValue = useDebouce(inputText, 1000, () => {
    console.log("Function call");
  });

  useEffect(
    function () {
      //API Call
    },
    [debouncedValue]
  );

  return (
    <div>
      <p className="text">{debouncedValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="type text..."
        onChange={handleChange}
      />
    </div>
  );
}
