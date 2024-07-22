import { useState } from "react";

const isBrowser = typeof window !== undefined;

export function useLocalStorage(key, initVal) {
  if (!isBrowser) {
    return [initVal, () => {}, () => {}];
  }
  if (!key) {
    throw new Error("Localstorage is not be falsy");
  }

  const storedVal = localStorage.getItem(key);
  const init = storedVal ? JSON.parse(storedVal) : initVal;

  const [value, setValue] = useState(init);

  function set(newValue) {
    try {
      const valToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valToStore);
      localStorage.setItem(key, JSON.stringify(valToStore));
    } catch (error) {
      console.log(error.message);
    }
  }

  function remove(params) {
    try {
      localStorage.removeItem(key);
      setValue(undefined);
    } catch (error) {
      console.log(error.message);
    }
  }
  return [value, set, remove];
}
