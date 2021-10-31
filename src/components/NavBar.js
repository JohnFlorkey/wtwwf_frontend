import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { getUser } from "../actions/user";

function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  /**
   * temporary for mocking user state so we can get the user based components created
   */
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      dispatch(getUser(1));
    }
  }, [dispatch, user]);

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
  const handleUserFriendGroupsClick = () => {
    handleUserMenuClose();
    history.push("/friendGroups");
  };
  const isUserMenuOpen = Boolean(userAnchorEl);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ color: "white", flexGrow: 1 }}
          >
            WWTF
          </Typography>
          <Button
            component={RouterLink}
            to="/movies"
            sx={{ color: "white", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My Movies </Typography>
          </Button>
          <Button
            component={RouterLink}
            to="/tv"
            sx={{ color: "white", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My TV </Typography>
          </Button>
          <Button
            component={RouterLink}
            to="/friendGroups"
            sx={{ color: "white", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My Friend Groups</Typography>
          </Button>
          <Button onClick={handleSearchMenuOpen} sx={{ mx: 1 }}>
            <Typography sx={{ color: "white" }}>Search</Typography>
          </Button>
          <Button onClick={handleDiscoverMenuOpen} sx={{ mx: 1 }}>
            <Typography sx={{ color: "white" }}>Discover</Typography>
          </Button>
          <Button onClick={handleUserMenuOpen} sx={{ mx: 1 }}>
            <Typography sx={{ color: "white" }}>{user.username}</Typography>
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
          <Menu
            anchorEl={userAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id="user-menu"
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isUserMenuOpen}
            onClose={handleUserMenuClose}
          >
            <Typography sx={{ mx: 2 }}>Manage</Typography>
            <Divider />
            <MenuItem onClick={handleUserProfileClick}>My Profile</MenuItem>
            <MenuItem onClick={handleUserFriendGroupsClick}>
              My Friend Groups
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
