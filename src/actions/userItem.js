import { addUserMovie, removeUserMovie } from "./userMovies";
import { addUserTV, removeUserTV } from "./userTV";

export function addUserItem(item) {
  return async function (dispatch) {
    if (item.type === "movies") {
      dispatch(addUserMovie(item));
    } else if (item.type === "tv") {
      dispatch(addUserTV(item));
    }
  };
}

export function removeUserItem(item) {
  return async function (dispatch) {
    if (item.type === "movies") {
      dispatch(removeUserMovie(item.id));
    } else if (item.type === "tv") {
      dispatch(removeUserTV(item.id));
    }
  };
}
