import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getFriendGroupMediaRecommendations } from "../actions/friendGroupMediaRecommendations";
import ItemFilter from "./ItemFilter";

function FriendGroupMoviesList() {
  const { friendGroupMediaRecommendations } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { friendGroupID } = useParams();

  useEffect(() => {
    dispatch(getFriendGroupMediaRecommendations(friendGroupID, "movies"));
  }, [friendGroupID, dispatch]);

  const mediaItems = friendGroupMediaRecommendations.recommendations
    ? Object.values(friendGroupMediaRecommendations.recommendations)
    : [];

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h3">
        {friendGroupMediaRecommendations.name} Movies
      </Typography>
      <ItemFilter
        items={mediaItems}
        userMediaList={{}}
        friendGroupID={friendGroupID}
      />
    </Box>
  );
}

export default FriendGroupMoviesList;
