import React from "react";
import { Box, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchTVResultsList from "./SearchTVResultsList";

function SearchTV() {
  return (
    <Box>
      <Typography variant="h4">Search</Typography>
      <SearchForm type="tv" />
      <SearchTVResultsList />
    </Box>
  );
}

export default SearchTV;
