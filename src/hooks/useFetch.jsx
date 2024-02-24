import { useState, useEffect } from "react";

export const useFetch = (url, query = "") => {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.REACT_API_KEY;
  const address = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
    : `https://api.themoviedb.org/3/${url}`;
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
      const response = await fetch(address, query || options);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
