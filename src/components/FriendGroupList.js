import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendGroups } from "../actions/friendGroups";
import FriendGroupCard from "./FriendGroupCard";
import { Box, Button, Typography } from "@mui/material";
import FriendGroupForm from "./FriendGroupForm";

function FriendGroupList() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(() => {
      return showForm ? false : true;
    });
  };

  const dispatch = useDispatch();
  const { friendGroups, user } = useSelector((store) => store);

  useEffect(() => {
    if (user.id) {
      dispatch(getFriendGroups(user.id));
    }
  }, [dispatch, user]);

  return Object.keys(friendGroups).length > 0 ? (
    <Box sx={{ px: 2 }}>
      <Typography variant="h4">My Friend Groups</Typography>
      {!showForm ? <Button onClick={toggleForm}>+ Friend Group</Button> : null}
      {showForm ? <FriendGroupForm toggleForm={toggleForm} /> : null}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {Object.values(friendGroups).map((g) => (
          <FriendGroupCard key={g.id} friendGroup={g} />
        ))}
      </Box>
    </Box>
  ) : null;
}

export default FriendGroupList;
