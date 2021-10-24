import React from "react";
import { Box, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchResultsList from "./SearchResultsList";

function Search() {
  return (
    <Box>
      <Typography variant="h4">Search</Typography>
      <p>Add a tv/movie toggle here</p>
      <SearchForm />
      <SearchResultsList />
    </Box>
  );
}

export default Search;
