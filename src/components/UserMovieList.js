import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

function UserMovieList() {
  const dispatch = useDispatch();
  const { userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  const movies = [];
  Object.values(userMovies).map((m) =>
    movies.push(<MovieCard key={m.id} movie={m} />)
  );

  return (
    <Box>
      The User's Movie List
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {movies}
      </Box>
    </Box>
  );
}

export default UserMovieList;
