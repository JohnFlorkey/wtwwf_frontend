import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
} from "@mui/material";

function WatchProviders({ watchProviders }) {
  const { buyWatchProviders, rentWatchProviders, flatrateWatchProviders } =
    watchProviders;

  return Object.keys(watchProviders).length > 0 ? (
    <Box>
      {buyWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Buy:</Typography>
          <ImageList
            cols={buyWatchProviders.length}
            rowHeight={45}
            sx={{
              my: 0,
            }}
          >
            {buyWatchProviders.map((w) => (
              <ImageListItem key={w.providerID} sx={{ maxWidth: 45 }}>
                <Tooltip title={w.providerName}>
                  <img src={w.logoPath} alt={w.provideName} />
                </Tooltip>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : null}
      {rentWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Rent:</Typography>
          <ImageList
            cols={rentWatchProviders.length}
            sx={{
              my: 0,
            }}
          >
            {rentWatchProviders.map((w) => (
              <ImageListItem key={w.providerName} sx={{ maxWidth: 45 }}>
                <Tooltip title={w.providerName}>
                  <img src={w.logoPath} alt={w.provideName} />
                </Tooltip>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : null}
      {flatrateWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Subscription:</Typography>
          <ImageList
            cols={flatrateWatchProviders.length}
            sx={{
              my: 0,
            }}
          >
            {flatrateWatchProviders.map((w) => (
              <ImageListItem key={w.providerName} sx={{ maxWidth: 45 }}>
                <Tooltip title={w.providerName}>
                  <img src={w.logoPath} alt={w.provideName} />
                </Tooltip>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : null}
    </Box>
  ) : null;
}

export default WatchProviders;
