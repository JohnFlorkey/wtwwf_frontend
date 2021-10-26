import { USER_TV_ADD, USER_TV_REMOVE, USER_TV_LOAD } from "../actions/types";

const INITIAL_STATE = {};

function userTV(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_TV_ADD: {
      console.log(action);
      return { ...state, [action.payload.id]: action.payload };
    }
    case USER_TV_REMOVE: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case USER_TV_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default userTV;
