import { useEffect, useState } from "react";

export function useIntersection(ref, option) {
  const [intersectionObserver, setintersectionObserver] = useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      function handler(entries) {
        setintersectionObserver(entries[0]);
      }
      const observer = new IntersectionObserver(handler, option);
      observer.observe(ref.current);

      return () => {
        setintersectionObserver(null);
        observer.disconnect();
      };
    }
  }, [ref, option]);

  return intersectionObserver;
}
