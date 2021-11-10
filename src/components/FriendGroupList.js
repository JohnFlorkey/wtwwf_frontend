import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendGroups } from "../actions/friendGroups";
import FriendGroupCard from "./FriendGroupCard";
import { Box } from "@mui/material";

function FriendGroupList() {
  const dispatch = useDispatch();
  const { friendGroups, user } = useSelector((store) => store);

  useEffect(() => {
    if (friendGroups.length === 0) {
      dispatch(getFriendGroups(user.id));
    }
  }, [dispatch, friendGroups, user]);

  return friendGroups.length > 0 ? (
    <Box>
      {friendGroups.map((g) => (
        <FriendGroupCard key={g.id} friendGroup={g} />
      ))}
    </Box>
  ) : null;
}

export default FriendGroupList;
