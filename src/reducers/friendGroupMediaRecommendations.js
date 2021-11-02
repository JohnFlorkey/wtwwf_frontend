import { FG_MEDIA_RECOMMENDATION_LOAD } from "../actions/types";

const INITIAL_STATE = {};

function friendGroupMediaRecommendations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_MEDIA_RECOMMENDATION_LOAD: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}

export default friendGroupMediaRecommendations;
