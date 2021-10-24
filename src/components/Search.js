import React from "react";
import { Box } from "@mui/system";
import SearchForm from "./SearchForm";
import SearchResultsList from "./SearchResultsList";

function Search() {
  return (
    <Box>
      <p>Add a tv/movie toggle here</p>
      <SearchForm />
      <SearchResultsList />
    </Box>
  );
}

export default Search;
