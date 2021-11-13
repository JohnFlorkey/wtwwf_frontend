import React from "react";
import { Box, Stack, Tooltip, Typography } from "@mui/material";

function WatchProviders({ watchProviders }) {
  const { buyWatchProviders, rentWatchProviders, flatrateWatchProviders } =
    watchProviders;

  return Object.keys(watchProviders).length > 0 ? (
    <Box>
      {buyWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Buy:</Typography>
          <Stack direction="row">
            {buyWatchProviders.map((w) => (
              <Tooltip key={w.providerName} title={w.providerName}>
                <img key={w.providerID} src={w.logoPath} alt={w.provideName} />
              </Tooltip>
            ))}
          </Stack>
        </Box>
      ) : null}
      {rentWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Rent:</Typography>
          <Stack direction="row">
            {rentWatchProviders.map((w) => (
              <Tooltip key={w.providerName} title={w.providerName}>
                <img key={w.providerID} src={w.logoPath} alt={w.provideName} />
              </Tooltip>
            ))}
          </Stack>
        </Box>
      ) : null}
      {flatrateWatchProviders.length > 0 ? (
        <Box>
          <Typography variant="body2">Subscription:</Typography>
          <Stack direction="row">
            {flatrateWatchProviders.map((w) => (
              <Tooltip key={w.providerName} title={w.providerName}>
                <img key={w.providerID} src={w.logoPath} alt={w.provideName} />
              </Tooltip>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  ) : null;
}

export default WatchProviders;
