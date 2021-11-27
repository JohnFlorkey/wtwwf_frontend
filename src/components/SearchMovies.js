import React from "react";
import { Grid } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchMoviesResultsList from "./SearchMoviesResultsList";

function SearchMovies() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <SearchForm type="movies" />
      </Grid>
      <Grid item>
        <SearchMoviesResultsList />
      </Grid>
    </Grid>
  );
}

export default SearchMovies;
