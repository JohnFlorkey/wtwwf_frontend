import axios from "axios";
import { MOVIE_DISCOVER_RESULTS_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getMovieDiscoverResults(page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/discover/movies`, {
        params: { page },
      });
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
