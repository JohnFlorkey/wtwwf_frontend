import { MOVIE_DISCOVER_RESULTS_LOAD } from "../actions/types";

const INITIAL_STATE = [];

function movieDiscoverResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE_DISCOVER_RESULTS_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default movieDiscoverResults;
