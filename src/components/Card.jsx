import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const image = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
  const overview = 200;
  const seeMore = (
    <Link
      to={`/movie/${movie.id}`}
      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      Read More
      <svg
        className="w-4 h-4 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview.length > overview
            ? `${movie.overview.substring(0, overview)}...`
            : movie.overview}
          {movie.overview.length > overview && (
            <Link
              to={`/movie/${movie.id}`}
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Read More
              <svg
                className="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
