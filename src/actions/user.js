import { USER_LOAD, USER_UPDATE } from "./types";
import axios from "axios";

export function getUser(id) {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/user?id=1");
    dispatch(loadUser(response.data));
  };
}

export function updateUser(user) {
  return async function (dispatch) {
    // update the db
    // update state
    dispatch(userUpdate(user));
  };
}

function loadUser(user) {
  return { type: USER_LOAD, payload: user };
}

function userUpdate(user) {
  return { type: USER_UPDATE, payload: user };
}
