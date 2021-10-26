import axios from "axios";
import { TV_DISCOVER_RESULTS_LOAD } from "./types";

export function getTVDiscoverResults() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/tvdiscoverresults"
      );
      dispatch(tvDiscoverResultsLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get movie discover results failed");
    }
  };
}

function tvDiscoverResultsLoad(tvDiscoverResults) {
  return { type: TV_DISCOVER_RESULTS_LOAD, payload: tvDiscoverResults };
}
