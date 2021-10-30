import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchMoviesResultsList from "./SearchMoviesResultsList";

function SearchMovies() {
  const { movieSearchResults } = useSelector((store) => store);

  return (
    <Box>
      <Typography variant="h4">Search</Typography>
      <SearchForm type="movie" />
      {Object.keys(movieSearchResults).length > 0 &&
      movieSearchResults.results.length > 0 ? (
        <SearchMoviesResultsList />
      ) : null}
    </Box>
  );
}

export default SearchMovies;
