import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ItemList from "./ItemList";
import { getUserTV } from "../actions/userTV";
import { getTVDiscoverResults } from "../actions/tvDiscoverResults";

function DiscoverTVResultsList() {
  const dispatch = useDispatch();
  const { tvDiscoverResults, userTV } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userTV).length === 0) {
      dispatch(getUserTV());
    }
  }, [dispatch, userTV]);

  useEffect(() => {
    if (tvDiscoverResults.length === 0) {
      dispatch(getTVDiscoverResults());
    }
  }, [dispatch, tvDiscoverResults]);

  return (
    <Box>
      <Typography variant="h4">Discover</Typography>

      <ItemList items={tvDiscoverResults} />
    </Box>
  );
}

export default DiscoverTVResultsList;
