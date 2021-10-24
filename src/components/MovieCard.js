import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from "@mui/material";
import { addUserMovie, removeUserMovie } from "../actions/userMovies";
import AdditionalDetail from "./AdditionalDetail";
import { displayDate, displayRuntime } from "../utilities/helper";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const { userMovies } = useSelector((store) => store);
  const addMovie = (movieID) => {
    dispatch(addUserMovie(movieID));
  };
  const removeMovie = (movieID) => {
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
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {movie.title}
          </Typography>
          <Typography variant="body2">
            {displayDate(movie.release_date)}
          </Typography>
          {movie.runtime ? (
            <Typography variant="body2">
              Runtime: {displayRuntime(movie.runtime)}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handlePopoverOpen}>
            More
          </Button>
          {userMovies[movie.id] ? (
            <Button size="small" onClick={() => removeMovie(movie.id)}>
              Remove
            </Button>
          ) : (
            <Button size="small" onClick={() => addMovie(movie)}>
              Add
            </Button>
          )}
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
        <AdditionalDetail movie={movie} />
      </Popover>
    </div>
  );
}

export default MovieCard;
