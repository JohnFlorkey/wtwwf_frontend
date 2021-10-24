import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from "@mui/material";
import { removeUserMovie } from "../actions/userMovies";
import AdditionalDetail from "./AdditionalDetail";
import { displayDate, displayRuntime } from "../utilities/helper";

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
            <Typography variant="body2">
              {displayDate(movie.release_date)}
            </Typography>
            <Typography variant="body2">
              Runtime: {displayRuntime(movie.runtime)}
            </Typography>
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
        <AdditionalDetail movie={movie} />
      </Popover>
    </div>
  );
}

export default MovieCard;
