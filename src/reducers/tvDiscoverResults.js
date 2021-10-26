import { TV_DISCOVER_RESULTS_LOAD } from "../actions/types";

const INITIAL_STATE = [];

function tvDiscoverResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV_DISCOVER_RESULTS_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default tvDiscoverResults;
