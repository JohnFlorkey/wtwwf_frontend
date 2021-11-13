import React from "react";
import { Box, Typography } from "@mui/material";
import WatchProviders from "./WatchProviders";

function AdditionalDetail({ item }) {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridAutoColumns: "1fr",
          p: 2,
          borderRadius: 5,
          maxWidth: 500,
        }}
      >
        {item.genres.length > 0 ? (
          <Box sx={{ gridRow: 1, gridColumn: "1/2" }}>
            <Typography variant="body2">Genres:</Typography>
          </Box>
        ) : null}
        {item.genres.length > 0 ? (
          <Box sx={{ gridRow: 1, gridColumn: "2/6" }}>
            <Typography variant="body2">{item.genres.join(", ")}</Typography>
          </Box>
        ) : null}
        <Box sx={{ gridRow: 2, gridColumn: "1/2" }}>
          <Typography variant="body2">Overview:</Typography>
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: "2/6" }}>
          <Typography variant="body2">{item.overview}</Typography>
        </Box>
        {Object.keys(item.watchProviders).length > 0 ? (
          <Box sx={{ gridRow: 3, gridColumn: "1/2" }}>
            <Typography variant="body2">Where To Watch:</Typography>
          </Box>
        ) : null}
        {Object.keys(item.watchProviders).length > 0 ? (
          <Box sx={{ gridRow: 3, gridColumn: "2/6" }}>
            <WatchProviders watchProviders={item.watchProviders} />
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

export default AdditionalDetail;
