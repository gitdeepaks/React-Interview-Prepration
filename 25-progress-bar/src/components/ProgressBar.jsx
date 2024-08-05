import { useState, useEffect } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress">
      <span
        style={{
          color: percentage > 49 ? "#ffffff" : "red",
        }}
      >
        {percentage.toFixed()}%
      </span>
      <div
        // style={{ width: `${percentage}%` }}
        style={{
          transform: `
                scaleX(${percentage / 100})
            `,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;
