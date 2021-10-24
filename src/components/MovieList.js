import react from "react";
import { Box } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Box>
      A Movie List
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {movies.map((m) => (
          <MovieCard movie={m} />
        ))}
      </Box>
    </Box>
  );
}

export default MovieList;
