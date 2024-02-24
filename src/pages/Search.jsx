import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = (api) => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("q");

  const { data: movies } = useFetch(api, query);

  return (
    <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movie.length === 0 ? `No results Found for \"${query}\"` : `Search for : \"${query}\"`}</p>
      </section>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};
