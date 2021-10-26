import axios from "axios";
import { USER_TV_ADD, USER_TV_LOAD, USER_TV_REMOVE } from "./types";

export function addUserTV(tv) {
  return async function (dispatch) {
    try {
      // update the database
      // then update state
      dispatch(userTVAdd(tv));
    } catch (err) {
      console.log("attempt to add movie to user list failed");
    }
  };
}

export function getUserTV() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/tv");
      console.log(response);
      const userTV = {};
      response.data.map((m) => (userTV[m.id] = m));
      dispatch(userTVLoad(userTV));
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
