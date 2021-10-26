import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTV } from "../actions/userTV";
import { Box, Typography } from "@mui/material";
import ItemList from "./ItemList";

function UserTVList() {
  const dispatch = useDispatch();
  const { userTV } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userTV).length === 0) {
      dispatch(getUserTV());
    }
  }, [dispatch, userTV]);

  const tv = [];
  Object.values(userTV).map((m) => tv.push(m));

  return (
    <Box>
      <Typography variant="h4">My TV</Typography>
      <ItemList items={tv} />
    </Box>
  );
}

export default UserTVList;
