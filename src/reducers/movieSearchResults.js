import { MOVIE_SEARCH_RESULTS_LOAD } from "../actions/types";

const INITIAL_STATE = {};

function movieSearchResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE_SEARCH_RESULTS_LOAD: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}

export default movieSearchResults;
