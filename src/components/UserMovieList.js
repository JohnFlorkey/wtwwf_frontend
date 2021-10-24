import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import { Box } from "@mui/material";
import MovieList from "./MovieList";

function UserMovieList() {
  const dispatch = useDispatch();
  const { userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  const movies = [];
  Object.values(userMovies).map((m) => movies.push(m));

  return (
    <Box>
      The User's Movie List
      <MovieList movies={movies} />
    </Box>
  );
}

export default UserMovieList;
