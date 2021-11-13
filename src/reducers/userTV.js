import {
  USER_TV_ADD,
  USER_TV_REMOVE,
  USER_TV_LOAD,
  FG_MEDIA_RECOMMENDATION_REMOVE,
} from "../actions/types";

const INITIAL_STATE = {};

function userTV(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_TV_ADD: {
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
    case FG_MEDIA_RECOMMENDATION_REMOVE: {
      const newState = { ...state };
      if (action.payload.mediaType === "tv")
        delete newState[action.payload.mediaID];

      return newState;
    }
    default:
      return state;
  }
}

export default userTV;
