import { useEffect } from "react";
import { useState } from "react";

export function useWindow() {
  const [windowSize, setwindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth,
  });

  function handleResize() {
    setwindowSize({
      width: window.innerWidth,
      height: window.innerWidth,
    });
  }

  useEffect(function () {
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
