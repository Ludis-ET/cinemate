import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({api}) => {
  const { data: movies } = useFetch(api);

  return (
    <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};
