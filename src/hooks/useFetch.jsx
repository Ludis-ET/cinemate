import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjEyZDllYTg3NDdmODc0OGU3NTFlMDY2MTdjNGZlZSIsInN1YiI6IjY1ZDhiYTk5ZDRkNTA5MDE4NjY1NDljZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LPgKaYjPmA29NlJoKXNoh_z7jozhAzXCOgt58Zhakdw",
    },
  };
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
