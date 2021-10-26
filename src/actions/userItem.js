import { addUserMovie, removeUserMovie } from "./userMovies";
import { addUserTV, removeUserTV } from "./userTV";

export function addUserItem(item) {
  return async function (dispatch) {
    if (item.title) {
      dispatch(addUserMovie(item));
    } else if (item.name) {
      dispatch(addUserTV(item));
    }
  };
}

export function removeUserItem(item) {
  return async function (dispatch) {
    if (item.title) {
      dispatch(removeUserMovie(item.id));
    } else if (item.name) {
      dispatch(removeUserTV(item.id));
    }
  };
}
