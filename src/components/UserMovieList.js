import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import { Box, Typography } from "@mui/material";
import ItemList from "./ItemList";

function UserMovieList() {
  const dispatch = useDispatch();
  const { user, userMovies } = useSelector((store) => store);
  console.log(user);

  useEffect(() => {
    if (user.id && Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies(user.id));
    }
  }, [dispatch, user, userMovies]);

  const movies = Object.values(userMovies);

  return (
    <Box>
      <Typography variant="h4">My Movies</Typography>
      <ItemList items={movies} userMediaList={userMovies} />
    </Box>
  );
}

export default UserMovieList;
