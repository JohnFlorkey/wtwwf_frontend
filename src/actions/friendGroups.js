import axios from "axios";
import { FG_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getFriendGroups() {
  return async function (dispatch) {
    const response = await axios.get(`${WTWWF_API_URL}/friendgroups`);
    dispatch(loadFriendGroups(response.data));
  };
}

function loadFriendGroups(friendGroups) {
  return { type: FG_LOAD, payload: friendGroups };
}
