import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getFriendGroupMediaRecommendations } from "../actions/friendGroupMediaRecommendations";
import ItemList from "./ItemList";

function FriendGroupMoviesList() {
  const { friendGroupMediaRecommendations } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { friendGroupID } = useParams();

  useEffect(() => {
    dispatch(getFriendGroupMediaRecommendations(friendGroupID, "movies"));
  }, [friendGroupID, dispatch]);

  const movies = Object.values(friendGroupMediaRecommendations.recommendations);

  return (
    <Box>
      <Typography variant="h3">
        {friendGroupMediaRecommendations.name} Movies
      </Typography>
      <ItemList
        items={movies}
        userMediaList={{}}
        friendGroupID={friendGroupID}
      />
    </Box>
  );
}

export default FriendGroupMoviesList;
