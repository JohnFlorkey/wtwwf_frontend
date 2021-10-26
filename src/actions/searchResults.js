import { getMovieSearchResults } from "./movieSearchResults";
import { getTVSearchResults } from "./tvSearchResults";

export function getSearchResults(type, title) {
  return async function (dispatch) {
    if (type === "movie") {
      dispatch(getMovieSearchResults(title));
    } else if (type === "tv") {
      dispatch(getTVSearchResults(title));
    }
  };
}
