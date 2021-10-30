import axios from "axios";
import { MOVIE_SEARCH_RESULTS_CLEAR, MOVIE_SEARCH_RESULTS_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function clearMovieSearchResults() {
  return { type: MOVIE_SEARCH_RESULTS_CLEAR };
}
export function getMovieSearchResults(title, page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/search/movies`, {
        params: { title, page },
      });
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
