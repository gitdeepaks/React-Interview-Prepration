import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectHook = () => {
  const [user, setuser] = useState({});
  const [seconds, setSeconds] = useState(0);

  //   useEffect(
  //     () => {
  //       // side effect code here
  //       return () => {
  //         //   cleanup code(optional)
  //         //   Runs on component unmount or before re-runs
  //       };
  //     },
  //     [
  //       // dependencies
  //     ]
  //   );

  const fetchUser = async () => {
    const res = await fetch("https://random-data-api.com/api/v2/users");
    const data = await res.json();
    setuser(data);
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  return (
    <div>
      <u>useEffectHook </u>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      {seconds}
    </div>
  );
};

export default UseEffectHook;
