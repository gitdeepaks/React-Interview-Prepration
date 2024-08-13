// import { useCallback, useEffect, useState } from "react";
// import axios from "axios";

// export const useFetch = (url) => {
//   const [response, setresponse] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [options, setOptions] = useState({});
//   const dofetch = useCallback((options = {}) => {
//     setIsLoading(true);
//     setOptions(options);
//   }, []);

//   useEffect(
//     async function () {
//       if (!isLoading) {
//         return;
//       }
//       async function fetchData() {
//         try {
//           const res = await axios(url, options);
//           setresponse(res.data);
//         } catch (error) {
//           const data = error.response ? error.response.data : "Server Error";
//           setError(data);
//         }
//         setIsLoading(false);
//       }
//       fetchData();
//     },

//     [isLoading, url, options]
//   );
//   return [{ response, isLoading, error }, dofetch];
// };

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const dofetch = useCallback((options = {}) => {
    setIsLoading(true);
    setOptions(options);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const fetchData = async () => {
      try {
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (error) {
        const data = error.response ? error.response.data : "Server Error";
        setError(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [isLoading, url, options]);

  return [{ response, isLoading, error }, dofetch];
};
