import axios from "axios";
import { USER_LOAD, USER_UNLOAD, USER_UPDATE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

// export function getUser(id) {
//   return async function (dispatch) {
//     const response = await axios.get(`${WTWWF_API_URL}/users/${id}`);
//     dispatch(loadUser(response.data));
//   };
// }

export function loadUser(user) {
  return async function (dispatch) {
    dispatch(userLoad(user));
  };
}

export function unloadUser() {
  return async function (dispatch) {
    dispatch(userUnload());
  };
}
export function updateUser(user) {
  return async function (dispatch) {
    // update the db
    // update state
    dispatch(userUpdate(user));
  };
}

function userLoad(user) {
  return { type: USER_LOAD, payload: user };
}

function userUnload() {
  return { type: USER_UNLOAD, payload: "" };
}

function userUpdate(user) {
  return { type: USER_UPDATE, payload: user };
}
