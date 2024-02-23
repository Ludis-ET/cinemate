import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies/upcoming" className="hover:underline me-4 md:me-6">
              Upcoming
            </Link>
          </li>
          <li>
            <Link to="/movies/top" className="hover:underline me-4 md:me-6">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/movies/popular" className="hover:underline me-4 md:me-6">
              Popular
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
