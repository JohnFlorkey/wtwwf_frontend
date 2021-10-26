import { TV_SEARCH_RESULTS_LOAD } from "../actions/types";

const INITIAL_STATE = [];

function tvSearchResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV_SEARCH_RESULTS_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default tvSearchResults;
