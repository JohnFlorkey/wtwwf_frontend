import { addUserMovie, removeUserMovie } from "./userMovies";
import { addUserTV, removeUserTV } from "./userTV";

export function addUserItem(item, userID) {
  return async function (dispatch) {
    if (item.type === "movies") {
      dispatch(addUserMovie(item.id, userID));
    } else if (item.type === "tv") {
      dispatch(addUserTV(item.id, userID));
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
