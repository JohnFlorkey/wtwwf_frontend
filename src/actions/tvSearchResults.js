import axios from "axios";
import { TV_SEARCH_RESULTS_LOAD } from "./types";

export function getTVSearchResults(title) {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/tvsearchresults");
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
