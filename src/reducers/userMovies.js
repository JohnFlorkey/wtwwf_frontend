import {
  USER_MOVIE_ADD,
  USER_MOVIE_REMOVE,
  USER_MOVIES_LOAD,
} from "../actions/types";

const INITIAL_STATE = {};

function userMovies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_MOVIE_ADD: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case USER_MOVIE_REMOVE: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case USER_MOVIES_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default userMovies;
