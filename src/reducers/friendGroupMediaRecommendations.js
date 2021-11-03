import {
  FG_MEDIA_RECOMMENDATION_LOAD,
  FG_MEDIA_RECOMMENDATION_REMOVE,
} from "../actions/types";

const INITIAL_STATE = {};

function friendGroupMediaRecommendations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_MEDIA_RECOMMENDATION_LOAD: {
      return { ...action.payload };
    }
    case FG_MEDIA_RECOMMENDATION_REMOVE: {
      const { friendGroupID, mediaType, mediaID } = action.payload;
      if (state.id == friendGroupID && state.type == mediaType) {
        const newState = { ...state };
        delete newState.recommendations[mediaID];
        return newState;
      } else {
        console.log("in the wrong spot");
        return state;
      }
    }
    default:
      return state;
  }
}

export default friendGroupMediaRecommendations;
