import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Popover } from "@mui/material";
import { removeUserMovie } from "../actions/userMovies";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const removeMovie = (movieID) => {
    console.log("clicked the remove button");
    dispatch(removeUserMovie(movieID));
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div>
      <Card sx={{ m: 1, width: 154 }}>
        <CardMedia
          component="img"
          image={movie.poster_path}
          alt="movie poster"
          sx={{ maxWidth: 154 }}
        />
        <Box>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {movie.title}
            </Typography>
            <Typography variant="body1">{movie.release_date}</Typography>
            <Typography variant="body1">Runtime: {movie.runtime}</Typography>
          </CardContent>
        </Box>
        <CardActions>
          <Button size="small" onClick={handlePopoverOpen}>
            More
          </Button>

          <Button size="small" onClick={() => removeMovie(movie.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {/* Refactor this into its own component */}
        <Typography sx={{ fontSize: 14 }}>Generes: {movie.genres}</Typography>
        <Typography sx={{ fontSize: 14 }}>
          Overview: {movie.overview}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>Trailer: {movie.trailer}</Typography>
      </Popover>
    </div>
  );
}

export default MovieCard;
