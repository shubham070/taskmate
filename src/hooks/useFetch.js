import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        console.log("data +" + result);
        setData(result);
        setError("");  
        
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
