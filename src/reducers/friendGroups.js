import { FG_LOAD, FG_MOVIE_RECOMMENDATION_REMOVE } from "../actions/types";

const INITIAL_STATE = [];
function friendGroups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_LOAD: {
      return { ...action.payload };
    }
    case FG_MOVIE_RECOMMENDATION_REMOVE: {
      const newState = { ...state };
      delete newState[action.payload.friendGroupID].movieRecommendations[
        action.payload.movieID
      ];
      return newState;
    }
    default:
      return state;
  }
}

export default friendGroups;
