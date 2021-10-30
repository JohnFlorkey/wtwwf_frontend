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
import AdditionalDetail from "./AdditionalDetail";
import { displayDate, displayRuntime } from "../utilities/helper";
import { addUserItem, removeUserItem } from "../actions/userItem";
import { IMAGE_URL } from "../utilities/config";

function ItemCard({ item }) {
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addUserItem(item));
  };

  const removeItem = (itemID) => {
    dispatch(removeUserItem(itemID));
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const { userMovies, userTV } = useSelector((store) => store);
  let inUserItemList = false;
  if (item.title) {
    inUserItemList = Boolean(userMovies[item.id]);
  } else if (item.name) {
    inUserItemList = Boolean(userTV[item.id]);
  }

  return (
    <div>
      <Card sx={{ m: 1, width: 154 }}>
        <CardMedia
          component="img"
          image={IMAGE_URL + item.posterPath}
          alt="movie poster"
          sx={{ maxWidth: 154 }}
        />
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="body2">
            {displayDate(item.releaseDate)}
          </Typography>
          {item.runtime ? (
            <Typography variant="body2">
              Runtime: {displayRuntime(item.runtime)}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handlePopoverOpen}>
            More
          </Button>
          {inUserItemList ? (
            <Button size="small" onClick={() => removeItem(item)}>
              Remove
            </Button>
          ) : (
            <Button size="small" onClick={() => addItem(item)}>
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
        <AdditionalDetail item={item} />
      </Popover>
    </div>
  );
}

export default ItemCard;
