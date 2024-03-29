import React from "react";
import { Switch, Route } from "react-router-dom";
import UserMovieList from "./UserMovieList";
import UserTVList from "./UserTVList";
import SearchMovies from "./SearchMovies";
import SearchTV from "./SearchTV";
import DiscoverMoviesResultsList from "./DiscoverMoviesResultsList";
import DiscoverTVResultsList from "./DiscoverTVResultsList";
import UserProfileForm from "./UserProfileForm";
import FriendGroupList from "./FriendGroupList";
import Home from "./Home";
import FriendGroupMoviesList from "./FriendGroupMoviesList";
import FriendGroupTVList from "./FriendGroupTVList";
import Invitation from "./Invitation";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Routes() {
  return (
    <Switch>
      <Route path="/discover/movies">
        <DiscoverMoviesResultsList type="movies" />
      </Route>
      <Route path="/discover/tv">
        <DiscoverTVResultsList type="tv" />
      </Route>
      <Route path="/invitation">
        <Invitation />
      </Route>
      <Route path="/movies">
        <UserMovieList />
      </Route>
      <Route path="/tv">
        <UserTVList />
      </Route>
      <Route path="/search/movies">
        <SearchMovies />
      </Route>
      <Route path="/search/tv">
        <SearchTV />
      </Route>
      <Route path="/profile">
        <UserProfileForm />
      </Route>
      <Route path="/friendGroups/:friendGroupID/movies">
        <FriendGroupMoviesList />
      </Route>
      <Route path="/friendGroups/:friendGroupID/tv">
        <FriendGroupTVList />
      </Route>
      <Route path="/friendGroups">
        <FriendGroupList />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
