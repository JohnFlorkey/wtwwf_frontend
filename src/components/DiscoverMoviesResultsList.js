import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ItemList from "./ItemList";
import { getUserMovies } from "../actions/userMovies";
import { getMovieDiscoverResults } from "../actions/movieDiscoverResults";

function DiscoverMovieResultsList() {
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

  return (
    <Box>
      <Typography variant="h4">Discover</Typography>

      <ItemList items={movieDiscoverResults} />
    </Box>
  );
}

export default DiscoverMovieResultsList;
