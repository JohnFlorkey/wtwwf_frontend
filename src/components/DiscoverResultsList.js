import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { getUserMovies } from "../actions/userMovies";
import { getMovieDiscoverResults } from "../actions/movieDiscoverResults";

function DiscoverResultsList({ type }) {
  const dispatch = useDispatch();
  const { movieDiscoverResults, userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  useEffect(() => {
    if (movieDiscoverResults.length === 0) {
      dispatch(getMovieDiscoverResults());
    }
  }, [dispatch, movieDiscoverResults]);

  const movies = [];
  movieDiscoverResults.map((m) => movies.push(m));

  return <MovieList movies={movies} />;
}

export default DiscoverResultsList;
