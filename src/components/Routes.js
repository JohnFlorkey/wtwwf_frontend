import React from "react";
import { Switch, Route } from "react-router-dom";
import UserMovieList from "./UserMovieList";
import UserTVList from "./UserTVList";
import SearchMovies from "./SearchMovies";
import SearchTV from "./SearchTV";
import DiscoverMoviesResultsList from "./DiscoverMoviesResultsList";
import DiscoverTVResultsList from "./DiscoverTVResultsList";

function Routes() {
  return (
    <Switch>
      <Route path="/discover/movies">
        <DiscoverMoviesResultsList type="movies" />
      </Route>
      <Route path="/discover/tv">
        <DiscoverTVResultsList type="tv" />
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
    </Switch>
  );
}

export default Routes;
