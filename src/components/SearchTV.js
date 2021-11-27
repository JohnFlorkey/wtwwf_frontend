import React from "react";
import { Grid } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchTVResultsList from "./SearchTVResultsList";

function SearchTV() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
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
