import { useEffect, useState } from "react";

export function useFetch(url, options = { method: "GET" }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setLoading(true);
      try {
        const resp = await fetch(url, { ...options });
        if (!resp.ok) {
          throw new Error("Network response is not ok");
        }
        const res = await resp.json();
        if (isMounted) {
          setData(res);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (url) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
}
