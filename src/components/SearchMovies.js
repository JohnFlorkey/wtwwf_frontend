import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import SearchMoviesResultsList from "./SearchMoviesResultsList";

function SearchMovies() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
      sx={{ px: 2 }}
    >
      {/* <Grid item>
        <Typography variant="h4">Search Movies</Typography>
      </Grid> */}
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
