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
import { removeFriendGroupMediaRecommendation } from "../actions/friendGroupMediaRecommendations";

function ItemCard({ item, inUserItemList = false, friendGroupID = 0 }) {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const addItem = (item, userID) => {
    dispatch(addUserItem(item, userID));
  };

  const removeItem = (itemID) => {
    dispatch(removeUserItem(itemID));
  };

  const watchedMovie = (friendGroupID, mediaType, movieID) => {
    dispatch(
      removeFriendGroupMediaRecommendation(friendGroupID, mediaType, movieID)
    );
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
          image={item.posterURL}
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
          {!friendGroupID ? (
            inUserItemList ? (
              <Button size="small" onClick={() => removeItem(item)}>
                Remove
              </Button>
            ) : (
              <Button size="small" onClick={() => addItem(item, user.id)}>
                Add
              </Button>
            )
          ) : (
            <Button
              size="small"
              onClick={() => watchedMovie(friendGroupID, item.type, item.id)}
            >
              We Watched It
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
