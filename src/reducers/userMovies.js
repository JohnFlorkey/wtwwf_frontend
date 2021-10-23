import {
  USER_MOVIE_ADD,
  USER_MOVIE_REMOVE,
  USER_MOVIES_LOAD,
} from "../actions/types";

const INITIAL_STATE = new Map();

function userMovies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_MOVIE_ADD: {
      const newState = new Map(state);
      newState.set(action.payload.id, action.payload);
      return newState;
    }
    case USER_MOVIE_REMOVE: {
      const newState = new Map(state);
      newState.delete(action.payload);
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
