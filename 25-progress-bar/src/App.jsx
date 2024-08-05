import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <span>{progress < 100 ? "Loading..." : "Completed"}</span>
      <ProgressBar value={progress} />
    </div>
  );
};

export default App;
