import axios from "axios";
import { FG_LOAD, FG_MEMBER_REMOVE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getFriendGroups(userID) {
  return async function (dispatch) {
    const response = await axios.get(
      `${WTWWF_API_URL}/users/${userID}/friendgroups`
    );
    dispatch(loadFriendGroups(response.data));
  };
}

export function removeFriendGroupMember(friendGroupID, userID) {
  return async function (dispatch) {
    const response = await axios.delete(
      `${WTWWF_API_URL}/friendGroups/${friendGroupID}/members/${userID}`
    );
    dispatch(deleteFriendGroupMember(friendGroupID, userID));
  };
}

function deleteFriendGroupMember(friendGroupID, userID) {
  return { type: FG_MEMBER_REMOVE, payload: { friendGroupID, userID } };
}

function loadFriendGroups(friendGroups) {
  return { type: FG_LOAD, payload: friendGroups };
}
