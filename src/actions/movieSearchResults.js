import axios from "axios";
import { MOVIE_SEARCH_RESULTS_LOAD } from "./types";

export function getMovieSearchResults(title) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/moviesearchresults"
      );
      dispatch(movieSearchResultsLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get movie search results failed");
    }
  };
}

function movieSearchResultsLoad(movieSearchResults) {
  return { type: MOVIE_SEARCH_RESULTS_LOAD, payload: movieSearchResults };
}