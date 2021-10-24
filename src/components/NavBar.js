import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What To Watch With Friends
          </Typography>
          <Button component={RouterLink} to="/movies" sx={{ color: "white" }}>
            <Typography sx={{ color: "white" }}>My Movies </Typography>
          </Button>
          <Button component={RouterLink} to="/search">
            <Typography sx={{ color: "white" }}>Search</Typography>
          </Button>
          <Button component={RouterLink} to="/discover" sx={{ color: "white" }}>
            <Typography sx={{ color: "white" }}>Discover </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
