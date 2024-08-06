import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ rating, setCurrentRating, size = 5 }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  function handleStarHover(hoveredRating) {
    setHoveredRating(hoveredRating);
  }

  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;
          let starClass = "star";

          if (hoveredRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }

          return (
            <span
              key={index}
              className={starClass}
              onClick={() => setCurrentRating(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            >
              <FaStar />
            </span>
          );
        })}
    </div>
  );
}

export default StarRating;
