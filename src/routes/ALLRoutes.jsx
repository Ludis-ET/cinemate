import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, Search, NotFound } from "../pages";

export const ALLRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/popular" element={<MovieList />} />
        <Route path="/movies/upcoming" element={<MovieList />} />
        <Route path="/movies/top" element={<MovieList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
