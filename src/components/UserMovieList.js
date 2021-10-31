import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import { Box, Typography } from "@mui/material";
import ItemList from "./ItemList";

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
      <Typography variant="h4">My Movies</Typography>
      <ItemList items={movies} userMediaList={userMovies} />
    </Box>
  );
}

export default UserMovieList;
