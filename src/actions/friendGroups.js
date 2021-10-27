import axios from "axios";
import { FG_LOAD } from "./types";

export function getFriendGroups() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/friendgroups");
    console.log(response);
    dispatch(loadFriendGroups(response.data));
  };
}

function loadFriendGroups(friendGroups) {
  return { type: FG_LOAD, payload: friendGroups };
}
