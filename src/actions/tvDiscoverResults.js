import axios from "axios";
import { TV_DISCOVER_RESULTS_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getTVDiscoverResults(page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/discover/tv`, {
        params: { page },
      });
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
