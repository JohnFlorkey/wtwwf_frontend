import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
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
            <Typography variant="h5">WTWWF</Typography>
          </Button>
          <Button
            component={RouterLink}
            to="/movies"
            sx={{ color: "white", gridColumn: "5/6", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My Movies </Typography>
          </Button>
          <Button
            component={RouterLink}
            to="/tv"
            sx={{ color: "white", gridColumn: "6/7", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My TV </Typography>
          </Button>
          <Button
            component={RouterLink}
            to="/friendGroups"
            sx={{ color: "white", gridColumn: "7/9", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>My Friend Groups</Typography>
          </Button>
          <Button
            onClick={handleSearchMenuOpen}
            sx={{ gridColumn: "9/10", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>Search</Typography>
          </Button>
          <Button
            onClick={handleDiscoverMenuOpen}
            sx={{ gridColumn: "10/11", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>Discover</Typography>
          </Button>
          <Button
            onClick={handleUserMenuOpen}
            sx={{ gridColumn: "11/12", mx: 1 }}
          >
            <Typography sx={{ color: "white" }}>{user.username}</Typography>
          </Button>
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
            <MenuItem onClick={handleUserProfileClick}>My Profile</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
