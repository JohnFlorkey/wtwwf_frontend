import { combineReducers } from "redux";
import friendGroups from "./friendGroups";
import friendGroupMediaRecommendations from "./friendGroupMediaRecommendations";
import userMovies from "./userMovies";
import userTV from "./userTV";
import movieSearchResults from "./movieSearchResults";
import movieDiscoverResults from "./movieDiscoverResults";
import tvDiscoverResults from "./tvDiscoverResults";
import tvSearchResults from "./tvSearchResults";
import user from "./user";

export default combineReducers({
  friendGroups,
  friendGroupMediaRecommendations,
  movieDiscoverResults,
  movieSearchResults,
  tvDiscoverResults,
  tvSearchResults,
  userMovies,
  user,
  userTV,
});
