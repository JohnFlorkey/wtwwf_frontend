import {
  TV_SEARCH_RESULTS_CLEAR,
  TV_SEARCH_RESULTS_LOAD,
} from "../actions/types";

const INITIAL_STATE = {};

function tvSearchResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV_SEARCH_RESULTS_CLEAR: {
      return INITIAL_STATE;
    }
    case TV_SEARCH_RESULTS_LOAD: {
      const { searchTerm, total_pages, total_results } = action.payload;
      const totalPages = total_pages;
      const totalResults = total_results;

      return {
        ...state,
        searchTerm,
        totalPages,
        totalResults,
        [action.payload.page]: action.payload.results,
      };
    }
    default:
      return state;
  }
}

export default tvSearchResults;
