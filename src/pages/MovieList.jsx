import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
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
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    }
    fetchMovies();
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};
