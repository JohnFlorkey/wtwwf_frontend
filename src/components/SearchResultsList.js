import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSearchResults } from "../actions/movieSearchResults";
import { getUserMovies } from "../actions/userMovies";
import MovieList from "./MovieList";

function SearchResultsList() {
  const dispatch = useDispatch();
  const { movieSearchResults, userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  useEffect(() => {
    if (movieSearchResults.length === 0) {
      dispatch(getMovieSearchResults());
    }
  }, [dispatch, movieSearchResults]);

  const movies = [];
  movieSearchResults.map((m) => movies.push(m));

  return <MovieList movies={movies} />;
}

export default SearchResultsList;
