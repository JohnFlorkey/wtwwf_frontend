import axios from "axios";
import { TV_SEARCH_RESULTS_CLEAR, TV_SEARCH_RESULTS_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function clearTVSearchResults() {
  return { type: TV_SEARCH_RESULTS_CLEAR };
}

export function getTVSearchResults(title, page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/search/tv`, {
        params: { title, page },
      });
      dispatch(tvSearchResultsLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get TV search results failed");
    }
  };
}

function tvSearchResultsLoad(tvSearchResults) {
  return { type: TV_SEARCH_RESULTS_LOAD, payload: tvSearchResults };
}
