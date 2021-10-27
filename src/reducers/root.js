import { combineReducers } from "redux";
import friendGroups from "./friendGroups";
import userMovies from "./userMovies";
import userTV from "./userTV";
import movieSearchResults from "./movieSearchResults";
import movieDiscoverResults from "./movieDiscoverResults";
import tvDiscoverResults from "./tvDiscoverResults";
import tvSearchResults from "./tvSearchResults";
import user from "./user";

export default combineReducers({
  friendGroups,
  movieDiscoverResults,
  movieSearchResults,
  tvDiscoverResults,
  tvSearchResults,
  userMovies,
  user,
  userTV,
});
