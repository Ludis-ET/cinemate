import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, Search, NotFound } from "../pages";

export const ALLRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={
            <MovieList api="https://api.themoviedb.org/3/movie/now_playing" />
          }
        />
        <Route
          path="/movies/popular"
          element={
            <MovieList api="https://api.themoviedb.org/3/movie/popular" />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MovieList api="https://api.themoviedb.org/3/movie/upcoming" />
          }
        />
        <Route
          path="/movies/top"
          element={
            <MovieList api="https://api.themoviedb.org/3/movie/top_rated" />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
