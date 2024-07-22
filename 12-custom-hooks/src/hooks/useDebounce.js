import { useEffect, useState } from "react";

export function useDebouce(value, delay, callBack = () => {}) {
  const [debValue, setDebVal] = useState(value);

  useEffect(
    function () {
      const handler = setTimeout(() => {
        setDebVal(value);
        callBack();
      }, delay);
      return () => clearTimeout(handler);
    },
    [value]
  );
  return debValue;
}
