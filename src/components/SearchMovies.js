import React from "react";
import { Box, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchMoviesResultsList from "./SearchMoviesResultsList";

function SearchMovies() {
  return (
    <Box>
      <Typography variant="h4">Search</Typography>
      <SearchForm type="movies" />
      <SearchMoviesResultsList />
    </Box>
  );
}

export default SearchMovies;
