import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchTVResultsList from "./SearchTVResultsList";

function SearchTV() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
      sx={{ p: 2 }}
    >
      <Grid item>
        <SearchForm type="tv" />
      </Grid>
      <Grid item>
        <SearchTVResultsList />
      </Grid>
    </Grid>
  );
}

export default SearchTV;
