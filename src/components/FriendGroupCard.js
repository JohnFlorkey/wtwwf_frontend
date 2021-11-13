import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import FriendGroupMember from "./FriendGroupMember";

function FriendGroupCard({ friendGroup }) {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography variant="h4">{friendGroup.name}</Typography>
        {friendGroup.members.map((m) => (
          <FriendGroupMember key={m.userID} member={m} />
        ))}
        <Button>Invite</Button>
      </CardContent>
      <CardActions>
        <Typography variant="body2">See Recommendations</Typography>
        <Button
          key="movies"
          component={RouterLink}
          to={`/friendGroups/${friendGroup.id}/movies`}
        >
          Movies
        </Button>
        <Button
          key="tv"
          component={RouterLink}
          to={`/friendGroups/${friendGroup.id}/tv`}
        >
          TV
        </Button>
      </CardActions>
    </Card>
  );
}

export default FriendGroupCard;
