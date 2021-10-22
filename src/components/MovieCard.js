import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function MovieCard({ movie }) {
  return (
    <Card sx={{ m: 1, width: 154 }}>
      <CardActionArea href="https://www.themoviedb.org/movie/11">
        <CardMedia
          component="img"
          image={movie.poster_path}
          alt="movie poster"
          // height="231"
          sx={{ maxWidth: 154 }}
        />
        <Box>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {movie.title}
            </Typography>
            <Typography variant="body1">{movie.release_date}</Typography>
            <Typography variant="body1">{movie.runtime}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Remove</Button>
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
