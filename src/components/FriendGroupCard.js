import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import FriendGroupMember from "./FriendGroupMember";

function FriendGroupCard({ friendGroup }) {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography variant="h4">{friendGroup.name}</Typography>
        {friendGroup.members.map((m) => (
          <FriendGroupMember key={m.id} member={m} />
        ))}
        <Button>Invite</Button>
      </CardContent>
      <CardActions>
        <Typography variant="body2">See Recommendations</Typography>
        <Tooltip title="TV">
          <IconButton>
            <TvIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Movies">
          <IconButton>
            <MovieIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      {/* <Box sx={{ display: "flex" }}>
        <Typography variant="h6">Movie Recommendations</Typography>
        {Object.values(friendGroup.movieRecommendations).map((r) => (
          <ItemCard
            key={r.id}
            item={r}
            friendGroupID={friendGroup.id}
            isRecommendation
          />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">TV Recommendations</Typography>
        {Object.values(friendGroup.tvRecommendations).map((r) => (
          <ItemCard
            key={r.id}
            item={r}
            friendGroupID={friendGroup.id}
            isRecommendation
          />
        ))}
      </Box> */}
    </Card>
  );
}

export default FriendGroupCard;
