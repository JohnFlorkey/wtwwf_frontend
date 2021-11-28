import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import { Box, Typography } from "@mui/material";
// import ItemList from "./ItemList";
import ItemFilter from "./ItemFilter";

function UserMovieList() {
  const dispatch = useDispatch();
  const { user, userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (user.id && Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies(user.id));
    }
  }, [dispatch, user, userMovies]);

  const movies = Object.values(userMovies);

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h4">My Movies</Typography>
      <ItemFilter items={movies} userMediaList={userMovies} />
    </Box>
  );
}

export default UserMovieList;
