import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1f10b6705bmshaf0b3cb273be1afp1490aejsn6c2625540b7d",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
      console.log(movies.results.primaryImage);
    }
    fetchMovies();
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
      {movies.map((movie) => (
        <Card key={movie._id} movie={movie} />
      ))}
    </main>
  );
};
