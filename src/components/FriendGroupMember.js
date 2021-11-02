import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function FriendGroupMember({ member }) {
  return (
    <Box>
      <Typography variant="body1">{member.username}</Typography>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default FriendGroupMember;
