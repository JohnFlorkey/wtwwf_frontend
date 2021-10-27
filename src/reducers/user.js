import { USER_LOAD, USER_UPDATE } from "../actions/types";

const INITIAL_STATE = {};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOAD: {
      return action.payload;
    }
    case USER_UPDATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default user;
