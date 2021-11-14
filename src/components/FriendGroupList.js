import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendGroups } from "../actions/friendGroups";
import FriendGroupCard from "./FriendGroupCard";
import { Box } from "@mui/material";

function FriendGroupList() {
  const dispatch = useDispatch();
  const { friendGroups, user } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(friendGroups).length === 0) {
      dispatch(getFriendGroups(user.id));
    }
  }, [dispatch, friendGroups, user]);

  return Object.keys(friendGroups).length > 0 ? (
    <Box>
      {Object.values(friendGroups).map((g) => (
        <FriendGroupCard key={g.id} friendGroup={g} />
      ))}
    </Box>
  ) : null;
}

export default FriendGroupList;
