import axios from "axios";
import { WTWWF_API_URL } from "../utilities/config";
import { AUTH_ADD, AUTH_REMOVE } from "./types";
import { loadUser, unloadUser } from "./user";

export function login(email, password) {
  return async function (dispatch) {
    const response = await axios.post(`${WTWWF_API_URL}/auth/login`, {
      email,
      password,
    });
    if (response.data) {
      sessionStorage.setItem(
        "authToken",
        JSON.stringify(response.data.authToken)
      );
      dispatch(authTokenAdd({ authToken: response.data.authToken }));
      dispatch(loadUser(response.data.user));
    }
  };
}

export function logout() {
  return async function (dispatch) {
    sessionStorage.removeItem("authToken");
    dispatch(authTokenRemove());
    dispatch(unloadUser());
  };
}

function authTokenAdd(authToken) {
  return { type: AUTH_ADD, payload: authToken };
}

function authTokenRemove() {
  return { type: AUTH_REMOVE, payload: "" };
}
