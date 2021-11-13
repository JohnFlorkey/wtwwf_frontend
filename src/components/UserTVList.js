import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTV } from "../actions/userTV";
import { Box, Typography } from "@mui/material";
import ItemFilter from "./ItemFilter";

function UserTVList() {
  const dispatch = useDispatch();
  const { user, userTV } = useSelector((store) => store);

  useEffect(() => {
    if (user.id && Object.keys(userTV).length === 0) {
      dispatch(getUserTV(user.id));
    }
  }, [dispatch, user, userTV]);

  const tv = [];
  Object.values(userTV).map((m) => tv.push(m));

  return (
    <Box>
      <Typography variant="h4">My TV</Typography>
      <ItemFilter items={tv} userMediaList={userTV} />
    </Box>
  );
}

export default UserTVList;
