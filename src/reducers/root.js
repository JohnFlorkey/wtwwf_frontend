import { combineReducers } from "redux";
import userMovies from "./userMovies";
import movieSearchResults from "./movieSearchResults";
import movieDiscoverResults from "./movieDiscoverResults";

export default combineReducers({
  userMovies,
  movieDiscoverResults,
  movieSearchResults,
});
