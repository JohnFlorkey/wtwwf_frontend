import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

function NavBar() {
  const history = useHistory();
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const handleSearchMenuOpen = (evt) => {
    setSearchAnchorEl(evt.currentTarget);
  };
  const handleSearchMenuClose = () => {
    setSearchAnchorEl(null);
  };
  const handleSearchMoviesClick = () => {
    handleSearchMenuClose();
    history.push("/search/movies");
  };
  const handleSearchTVClick = () => {
    handleSearchMenuClose();
    history.push("/search/tv");
  };
  const isSearchMenuOpen = Boolean(searchAnchorEl);

  const [discoverAnchorEl, setDiscoverAnchorEl] = useState(null);
  const handleDiscoverMenuOpen = (evt) => {
    setDiscoverAnchorEl(evt.currentTarget);
  };
  const handleDiscoverMenuClose = () => {
    setDiscoverAnchorEl(null);
  };
  const handleDiscoverMoviesClick = () => {
    handleDiscoverMenuClose();
    history.push("/discover/movies");
  };
  const handleDiscoverTVClick = () => {
    handleDiscoverMenuClose();
    history.push("/discover/tv");
  };
  const isDiscoverMenuOpen = Boolean(discoverAnchorEl);

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
          <Button component={RouterLink} to="/tv" sx={{ color: "white" }}>
            <Typography sx={{ color: "white" }}>My TV </Typography>
          </Button>
          <Button onClick={handleSearchMenuOpen}>
            <Typography sx={{ color: "white" }}>Search</Typography>
          </Button>
          <Button onClick={handleDiscoverMenuOpen}>
            <Typography sx={{ color: "white" }}>Discover</Typography>
          </Button>
          <Menu
            anchorEl={searchAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id="search-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isSearchMenuOpen}
            onClose={handleSearchMenuClose}
          >
            <MenuItem onClick={handleSearchMoviesClick}>Movies</MenuItem>
            <MenuItem onClick={handleSearchTVClick}>TV</MenuItem>
          </Menu>
          <Menu
            anchorEl={discoverAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id="discover-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isDiscoverMenuOpen}
            onClose={handleDiscoverMenuClose}
          >
            <MenuItem onClick={handleDiscoverMoviesClick}>Movies</MenuItem>
            <MenuItem onClick={handleDiscoverTVClick}>TV</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
