import {
  USER_MOVIE_ADD,
  USER_MOVIE_REMOVE,
  USER_MOVIES_LOAD,
  FG_MEDIA_RECOMMENDATION_REMOVE,
} from "../actions/types";

const INITIAL_STATE = {};

function userMovies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_MEDIA_RECOMMENDATION_REMOVE: {
      const newState = { ...state };
      if (action.payload.mediaType === "movies")
        delete newState[action.payload.mediaID];

      return newState;
    }
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
