import React from "react";
import { useDispatch } from "react-redux";
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
import { removeUserMovie } from "../actions/userMovies";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const removeMovie = (movieID) => {
    console.log("clicked the remove button");
    dispatch(removeUserMovie(movieID));
  };

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
        </Box>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => removeMovie(movie.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
