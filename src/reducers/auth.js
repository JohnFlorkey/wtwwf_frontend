import { AUTH_ADD, AUTH_REMOVE } from "../actions/types";

const INITIAL_STATE = { authToken: "" };

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_ADD: {
      const newState = { ...action.payload };
      return newState;
    }

    case AUTH_REMOVE: {
      const newState = {};
      return newState;
    }

    default:
      return state;
  }
}

export default auth;
