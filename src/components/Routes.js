import React from "react";
import { Switch, Route } from "react-router-dom";
import UserMovieList from "./UserMovieList";

function Routes() {
  return (
    <Switch>
      <Route path="/movies">
        <UserMovieList />
      </Route>
    </Switch>
  );
}

export default Routes;
