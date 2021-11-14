import React from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFriendGroupMember } from "../actions/friendGroups";

function FriendGroupMember({ friendGroupID, member }) {
  const dispatch = useDispatch();

  const deleteFriendGroupMember = () => {
    dispatch(removeFriendGroupMember(friendGroupID, member.userID));
  };
  return (
    <Box>
      <Typography variant="body1">{member.username}</Typography>
      <IconButton onClick={deleteFriendGroupMember}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default FriendGroupMember;
