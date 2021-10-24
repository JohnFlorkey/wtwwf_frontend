import React from "react";
import { Switch, Route } from "react-router-dom";
import UserMovieList from "./UserMovieList";
import Search from "./Search";
import DiscoverResultsList from "./DiscoverResultsList";

function Routes() {
  return (
    <Switch>
      <Route path="/discover">
        <DiscoverResultsList />
      </Route>
      <Route path="/movies">
        <UserMovieList />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
}

export default Routes;
