import axios from "axios";
import { USER_TV_ADD, USER_TV_LOAD, USER_TV_REMOVE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function addUserTV(tvID, userID) {
  return async function (dispatch) {
    try {
      // update the database
      const response = await axios.post(
        `${WTWWF_API_URL}/users/${userID}/tv/`,
        { tvID }
      );
      const tv = response.data;
      // then update state
      dispatch(userTVAdd(tv));
    } catch (err) {
      console.log("attempt to add movie to user list failed");
    }
  };
}

export function getUserTV(userID) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${WTWWF_API_URL}/users/${userID}/tv`);
      dispatch(userTVLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get user tv failed");
    }
  };
}

export function removeUserTV(tvID) {
  return async function (dispatch) {
    try {
      console.log("implement remove movie from user's list");
      dispatch(userTVRemove(tvID));
    } catch (err) {
      console.log(err, "attempt to remove user movie from db failed.");
    }
  };
}

function userTVAdd(movie) {
  return { type: USER_TV_ADD, payload: movie };
}
function userTVLoad(userTV) {
  return { type: USER_TV_LOAD, payload: userTV };
}

function userTVRemove(tvID) {
  return { type: USER_TV_REMOVE, payload: tvID };
}
