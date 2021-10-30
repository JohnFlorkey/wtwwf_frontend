import axios from "axios";
import { MOVIE_SEARCH_RESULTS_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getMovieSearchResults(title) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/search/movies`);
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
