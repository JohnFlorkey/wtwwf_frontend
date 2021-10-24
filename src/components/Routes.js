import React from "react";
import { Switch, Route } from "react-router-dom";
import UserMovieList from "./UserMovieList";
import Search from "./Search";

function Routes() {
  return (
    <Switch>
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
