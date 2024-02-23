import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch();
      const data = await response.json();
      setMovies(data.results);
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
      <Card />
    </main>
  );
};
