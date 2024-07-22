import React, { useMemo, useRef } from "react";
import { useIntersection } from "../hooks/useIntersection";

export default function ViewPort() {
  const ref = useRef(null);

  const option = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );

  const intersectionEntry = useIntersection(ref, option);

  console.log(intersectionEntry?.isIntersecting);
  console.log("ratio", intersectionEntry?.intersctionRatio);
  return (
    <div
      style={{
        height: "200vh",
        width: "200vw",
      }}
    >
      <div
        style={{
          height: "50vh",
          background: "lightblue",
          color: "black",
        }}
        ref={ref}
      >
        ViewPort
      </div>
    </div>
  );
}
