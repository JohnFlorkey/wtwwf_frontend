import axios from "axios";
import { FG_CREATE, FG_LOAD, FG_MEMBER_REMOVE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function createFriendGroup(name, userID) {
  return async function (dispatch) {
    const response = await axios.post(`${WTWWF_API_URL}/friendGroups`, {
      name,
      userID,
    });
    dispatch(addFriendGroup(response.data));
  };
}

export async function createInvitation(email, friendGroupID, invitingUserID) {
  const response = await axios.post(
    `${WTWWF_API_URL}/friendGroups/${friendGroupID}/invitations`,
    {
      email,
      invitingUserID,
    }
  );

  return response.data;
}

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

function addFriendGroup(friendGroup) {
  return { type: FG_CREATE, payload: friendGroup };
}
function deleteFriendGroupMember(friendGroupID, userID) {
  return { type: FG_MEMBER_REMOVE, payload: { friendGroupID, userID } };
}

function loadFriendGroups(friendGroups) {
  return { type: FG_LOAD, payload: friendGroups };
}
