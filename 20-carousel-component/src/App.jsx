import { useState } from "react";
import "./App.css";
import Cariusel from "./components/Cariusel";

const App = () => {
  const [loading, setloading] = useState(false);
  return (
    <div className="">
      <Cariusel images={[]} isLoading={loading} />
    </div>
  );
};

export default App;
