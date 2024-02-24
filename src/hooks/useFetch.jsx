import { useState, useEffect } from "react";

export const useFetch = (url, query = "") => {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.REACT_API_KEY;
  const auth = import.meta.env.REACT_APP_API_AUTHORIZATION;
  const address = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
    : `https://api.themoviedb.org/3/${url}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        {auth}
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
