import { TV_DISCOVER_RESULTS_LOAD } from "../actions/types";

const INITIAL_STATE = {};

function tvDiscoverResults(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV_DISCOVER_RESULTS_LOAD: {
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

export default tvDiscoverResults;
