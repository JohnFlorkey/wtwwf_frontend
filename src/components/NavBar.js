import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../actions/auth";

function NavBar() {
  const { user } = useSelector((store) => store);

  const history = useHistory();
  const dispatch = useDispatch();
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
    history.push("/discover/movies?page=1");
  };
  const handleDiscoverTVClick = () => {
    handleDiscoverMenuClose();
    history.push("/discover/tv?page=1");
  };
  const isDiscoverMenuOpen = Boolean(discoverAnchorEl);

  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const handleUserMenuOpen = (evt) => {
    setUserAnchorEl(evt.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
  };
  const handleUserProfileClick = () => {
    handleUserMenuClose();
    history.push("/profile");
  };
  const handleLogoutClick = () => {
    handleUserMenuClose();
    dispatch(logout());
    history.push("/");
  };
  const isUserMenuOpen = Boolean(userAnchorEl);

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "grid", gridAutoColumns: "1fr" }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{ color: "white", display: "inline", gridColumn: "1/2" }}
          >
            <Tooltip title="What To Watch With Friends">
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                WTWWF
              </Typography>
            </Tooltip>
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gridColumn: "5/12",
            }}
          >
            {user.id && (
              <Button component={RouterLink} sx={{ mx: 1 }} to="/movies">
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  My Movies{" "}
                </Typography>
              </Button>
            )}
            {user.id && (
              <Button component={RouterLink} sx={{ mx: 1 }} to="/tv">
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  My TV{" "}
                </Typography>
              </Button>
            )}
            {user.id && (
              <Button component={RouterLink} sx={{ mx: 1 }} to="/friendGroups">
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  My Friend Groups
                </Typography>
              </Button>
            )}
            <Button onClick={handleSearchMenuOpen} sx={{ mx: 1 }}>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                Search
              </Typography>
            </Button>
            <Button onClick={handleDiscoverMenuOpen} sx={{ mx: 1 }}>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                Discover
              </Typography>
            </Button>
            {user.id ? (
              <IconButton
                onClick={handleUserMenuOpen}
                sx={{ color: "white", mx: 1 }}
              >
                <AccountCircleIcon sx={{ mr: 1 }} />
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  {user.username}
                </Typography>
              </IconButton>
            ) : (
              <Button component={RouterLink} sx={{ mx: 1 }} to={"/login"}>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Login
                </Typography>
              </Button>
            )}
          </Box>
          <Menu
            anchorEl={searchAnchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            id="search-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={isSearchMenuOpen}
            onClose={handleSearchMenuClose}
          >
            <MenuItem onClick={handleSearchMoviesClick}>Movies</MenuItem>
            <MenuItem onClick={handleSearchTVClick}>TV</MenuItem>
          </Menu>
          <Menu
            anchorEl={discoverAnchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            id="discover-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={isDiscoverMenuOpen}
            onClose={handleDiscoverMenuClose}
          >
            <MenuItem onClick={handleDiscoverMoviesClick}>Movies</MenuItem>
            <MenuItem onClick={handleDiscoverTVClick}>TV</MenuItem>
          </Menu>
          <Menu
            anchorEl={userAnchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            id="user-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={isUserMenuOpen}
            onClose={handleUserMenuClose}
          >
            <MenuItem disabled onClick={handleUserProfileClick}>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
