import { combineReducers } from "redux";
import userMovies from "./userMovies";
import movieSearchResults from "./movieSearchResults";

export default combineReducers({
  userMovies,
  movieSearchResults,
});
