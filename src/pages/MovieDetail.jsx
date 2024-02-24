import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export function MovieDetail() {
  const params = useParams();
  const { data: recommendations } = useFetch(
    `movie/${params.id}/recommendations`
  );
  const [movie, setMovie] = useState({});
  const auth = import.meta.env.REACT_APP_API_AUTHORIZATION;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjEyZDllYTg3NDdmODc0OGU3NTFlMDY2MTdjNGZlZSIsInN1YiI6IjY1ZDhiYTk5ZDRkNTA5MDE4NjY1NDljZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LPgKaYjPmA29NlJoKXNoh_z7jozhAzXCOgt58Zhakdw",
    },
  };
  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}`,
        options
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovieDetails();
  }, [movie]);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

  return (
    <main>
      <section className="flex flex-wrap justify-center p-4">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt="image description" />
        </div>
        <div className="max-w-2xl  ml-12 text-gray-700 text-lg dark:text-white ">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left ">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview} </p>
          <p className="my-7 flex flex-wrap gap-2">
            {movie.genres &&
              Array.isArray(movie.genres) &&
              movie.genres.map((g) => (
                <span
                  key={g.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {g.name}
                </span>
              ))}
          </p>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movie.vote_count} reviews
            </a>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-7">
        <h1 className="font-bold text-4xl my-3 text-center lg:text-center text-gray-700 dark:text-white">
          Recommendations
        </h1>
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {recommendations.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
