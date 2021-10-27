import { FG_LOAD } from "../actions/types";

const INITIAL_STATE = [];
function friendGroups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_LOAD: {
      return [...action.payload];
    }
    default:
      return state;
  }
}

export default friendGroups;
