import "./App.css";
import { useState } from "react";
import StarRating from "./components/StarRating";

const App = () => {
  const [currentRating, setCurrentRating] = useState(0);

  function handleRatingChange(newRating) {
    setCurrentRating(newRating);
  }

  return (
    <div className="app">
      <h2>Star Rating</h2>
      <StarRating
        size={5}
        rating={currentRating}
        setCurrentRating={handleRatingChange}
      />
      <p>Current Rating: {currentRating}</p>
    </div>
  );
};

export default App;
