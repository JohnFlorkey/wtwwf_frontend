import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

function FriendGroupCard({ friendGroup }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{friendGroup.name}</Typography>
        {friendGroup.members.map((m) => (
          <Typography key={m.id} variant="body1">
            {m.username}
          </Typography>
        ))}
      </CardContent>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">Movie Recommendations</Typography>
        {Object.values(friendGroup.movieRecommendations).map((r) => (
          <ItemCard key={r.id} item={r} />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">TV Recommendations</Typography>
        {Object.values(friendGroup.tvRecommendations).map((r) => (
          <ItemCard key={r.id} item={r} />
        ))}
      </Box>
    </Card>
  );
}

export default FriendGroupCard;
