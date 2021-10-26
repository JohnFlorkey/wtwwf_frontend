import { addUserMovie, removeUserMovie } from "../actions/userMovies";

function itemActionMapper(itemType) {
  let addUserItem;
  let removeUserItem;
  if (itemType === "movie") {
    addUserItem = (itemID) => {
      addUserMovie(itemID);
    };
    removeUserItem = (itemID) => {
      removeUserMovie(itemID);
    };
  }
  return { addUserItem, removeUserItem };
}

export default itemActionMapper;
