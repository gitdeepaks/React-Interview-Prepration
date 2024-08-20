import { useState } from "react";
// import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="content">
      <button onClick={() => setIsModalOpen(true)}>Toggle Modal</button>
    </div>
  );
};

export default App;
