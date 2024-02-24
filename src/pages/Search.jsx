import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = (api) => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("q");

  const { data: movies } = useFetch(api, query);

  return (
    <section>
      <p className="text-3xl text-gray-700 dark:text-white p-4">
        {movies.length === 0
          ? `No results Found for \"${query}\"`
          : `Search for : \"${query}\"`}
      </p>
      <main className="max-w-7xl mx-auto py-7 flex flex-wrap justify-start">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </main>
    </section>
  );
};
