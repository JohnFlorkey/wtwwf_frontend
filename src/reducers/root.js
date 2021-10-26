import { combineReducers } from "redux";
import userMovies from "./userMovies";
import userTV from "./userTV";
import movieSearchResults from "./movieSearchResults";
import movieDiscoverResults from "./movieDiscoverResults";
import tvDiscoverResults from "./tvDiscoverResults";
import tvSearchResults from "./tvSearchResults";

export default combineReducers({
  userMovies,
  userTV,
  movieDiscoverResults,
  movieSearchResults,
  tvDiscoverResults,
  tvSearchResults,
});
