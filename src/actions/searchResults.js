import { getMovieSearchResults } from "./movieSearchResults";
import { getTVSearchResults } from "./tvSearchResults";

export function getSearchResults(type, title, page) {
  return async function (dispatch) {
    if (type === "movie") {
      dispatch(getMovieSearchResults(title, page));
    } else if (type === "tv") {
      dispatch(getTVSearchResults(title));
    }
  };
}
