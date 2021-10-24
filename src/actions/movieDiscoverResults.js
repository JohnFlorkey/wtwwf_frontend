import axios from "axios";
import { MOVIE_DISCOVER_RESULTS_LOAD } from "./types";

export function getMovieDiscoverResults() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/moviediscoverresults"
      );
      dispatch(movieDiscoverResultsLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get movie discover results failed");
    }
  };
}

function movieDiscoverResultsLoad(movieDiscoverResults) {
  return { type: MOVIE_DISCOVER_RESULTS_LOAD, payload: movieDiscoverResults };
}
