import React from "react";
import { Box } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Box>
    </Box>
  );
}

export default MovieList;
