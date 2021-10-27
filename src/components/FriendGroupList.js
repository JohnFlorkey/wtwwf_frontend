import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendGroups } from "../actions/friendGroups";
import FriendGroupCard from "./FriendGroupCard";
import { Box } from "@mui/material";
function FriendGroupList() {
  const dispatch = useDispatch();
  const { friendGroups } = useSelector((store) => store);

  useEffect(() => {
    console.log("loading friend groups");
    if (friendGroups.length === 0) {
      dispatch(getFriendGroups());
    }
  }, [dispatch, friendGroups]);
  return (
    <Box>
      {friendGroups.map((g) => (
        <FriendGroupCard friendGroup={g} />
      ))}
    </Box>
  );
}

export default FriendGroupList;
