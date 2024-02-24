import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, Search, NotFound } from "../pages";

export const ALLRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={
            <MovieList api="movie/now_playing" />
          }
        />
        <Route
          path="/movies/popular"
          element={
            <MovieList api="movie/popular" />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MovieList api="movie/upcoming" />
          }
        />
        <Route
          path="/movies/top"
          element={
            <MovieList api="movie/top_rated" />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
