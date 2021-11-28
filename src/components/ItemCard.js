import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/More";
import AdditionalDetail from "./AdditionalDetail";
import { addUserItem, removeUserItem } from "../actions/userItem";
import { removeFriendGroupMediaRecommendation } from "../actions/friendGroupMediaRecommendations";

function ItemCard({ item, inUserItemList = false, friendGroupID = 0 }) {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const addItem = (item, userID) => {
    dispatch(addUserItem(item, userID));
  };

  const removeItem = (item, userID) => {
    dispatch(removeUserItem(item, userID));
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

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const handleMenuClick = (evt) => {
    menuAnchorEl ? setMenuAnchorEl(false) : setMenuAnchorEl(evt.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  const menuOpen = Boolean(menuAnchorEl);

  return (
    <div>
      <IconButton
        onClick={handleMenuClick}
        sx={{ position: "relative", top: 0, left: 110 }}
      >
        <MoreIcon sx={{ color: "whitesmoke" }} />
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id="card-menu"
          keepMounted
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handlePopoverOpen}>Details</MenuItem>
          {!friendGroupID ? (
            inUserItemList ? (
              <MenuItem size="small" onClick={() => removeItem(item, user.id)}>
                Remove
              </MenuItem>
            ) : (
              <MenuItem size="small" onClick={() => addItem(item, user.id)}>
                Add
              </MenuItem>
            )
          ) : (
            <MenuItem
              size="small"
              onClick={() => watchedMovie(friendGroupID, item.type, item.id)}
            >
              We Watched It
            </MenuItem>
          )}
        </Menu>
      </IconButton>
      <Card sx={{ mt: -5, mb: 2, mr: 2, width: 150, height: 300 }}>
        <CardMedia
          component="img"
          image={item.posterURL}
          alt="movie poster"
          sx={{ width: 150, height: 225 }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ m: -1, fontWeight: "bold" }}>
            {item.title}
          </Typography>
        </CardContent>
      </Card>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "center", horizontal: "left" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <AdditionalDetail item={item} />
      </Popover>
    </div>
  );
}

export default ItemCard;
