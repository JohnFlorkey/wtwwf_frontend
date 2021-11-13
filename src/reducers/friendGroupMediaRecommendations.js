import {
  FG_MEDIA_RECOMMENDATION_LOAD,
  FG_MEDIA_RECOMMENDATION_REMOVE,
} from "../actions/types";

const INITIAL_STATE = {};

function friendGroupMediaRecommendations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_MEDIA_RECOMMENDATION_LOAD: {
      const newState = { ...action.payload };
      newState.recommendations = {};
      action.payload.recommendations.map(
        (r) => (newState.recommendations[r.id] = r)
      );

      return newState;
    }
    case FG_MEDIA_RECOMMENDATION_REMOVE: {
      const newState = { ...state };
      delete newState.recommendations[action.payload.mediaID];
      return newState;
    }
    default:
      return state;
  }
}

export default friendGroupMediaRecommendations;
