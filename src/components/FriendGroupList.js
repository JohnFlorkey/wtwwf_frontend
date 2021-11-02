import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendGroups } from "../actions/friendGroups";
import FriendGroupCard from "./FriendGroupCard";
import { Box } from "@mui/material";

function FriendGroupList() {
  const dispatch = useDispatch();
  const { friendGroups } = useSelector((store) => store);

  useEffect(() => {
    if (friendGroups.length === 0) {
      dispatch(getFriendGroups());
    }
  }, [dispatch, friendGroups]);

  return Object.values(friendGroups).length > 0 ? (
    <Box>
      {Object.values(friendGroups).map((g) => (
        <FriendGroupCard key={g.id} friendGroup={g} />
      ))}
    </Box>
  ) : null;
}

export default FriendGroupList;
