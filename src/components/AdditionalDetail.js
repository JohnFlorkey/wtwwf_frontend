import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WatchProviders from "./WatchProviders";
import { displayDate, displayRuntime } from "../utilities/helper";
import useToggle from "../customHooks/useToggle";

function AdditionalDetail({ item }) {
  const [isSeeAllOverView, setIsSeeAllOverview] = useToggle(false);

  const handleSeeAllOverViewClick = (evt) => {
    setIsSeeAllOverview(isSeeAllOverView ? false : true);
  };

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
        <Box sx={{ gridRow: 1, gridColumn: "1/2" }}>
          <Typography variant="body2">Released:</Typography>
        </Box>
        <Box sx={{ gridRow: 1, gridColumn: "2/6" }}>
          <Typography variant="body2">
            {displayDate(item.releaseDate)}
          </Typography>
        </Box>
        {item.runtime ? (
          <Box sx={{ gridRow: 2, gridColumn: "1/2" }}>
            <Typography variant="body2">Runtime:</Typography>
          </Box>
        ) : null}
        {item.runtime ? (
          <Box sx={{ gridRow: 2, gridColumn: "2/6" }}>
            <Typography variant="body2">
              {displayRuntime(item.runtime)}
            </Typography>
          </Box>
        ) : null}
        {item.genres.length > 0 ? (
          <Box sx={{ gridRow: 3, gridColumn: "1/2" }}>
            <Typography variant="body2">Genres:</Typography>
          </Box>
        ) : null}
        {item.genres.length > 0 ? (
          <Box sx={{ gridRow: 3, gridColumn: "2/6" }}>
            <Typography variant="body2">{item.genres.join(", ")}</Typography>
          </Box>
        ) : null}
        <Box sx={{ gridRow: 4, gridColumn: "1/2" }}>
          <Typography variant="body2">Overview:</Typography>
        </Box>
        <Box sx={{ display: "grid", gridRow: 4, gridColumn: "2/6" }}>
          <Typography
            component="div"
            sx={{
              overflow: "hidden",
              maxHeight: isSeeAllOverView ? null : 60,
              textOverflow: "ellipsis",
            }}
            variant="body2"
          >
            {item.overview}
          </Typography>
          <Button
            onClick={handleSeeAllOverViewClick}
            sx={{ alignSelf: "flex-end" }}
          >
            See {isSeeAllOverView ? "Less" : "All"}
          </Button>
        </Box>
        {Object.keys(item.watchProviders).length > 0 ? (
          <Box sx={{ gridRow: 5, gridColumn: "1/2" }}>
            <Typography variant="body2">Where To Watch:</Typography>
          </Box>
        ) : null}
        {Object.keys(item.watchProviders).length > 0 ? (
          <Box sx={{ gridRow: 5, gridColumn: "2/6" }}>
            <WatchProviders watchProviders={item.watchProviders} />
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

export default AdditionalDetail;
