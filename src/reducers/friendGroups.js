import { FG_CREATE, FG_LOAD, FG_MEMBER_REMOVE } from "../actions/types";

const INITIAL_STATE = {};
function friendGroups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FG_CREATE: {
      const { id, name, members } = action.payload;
      return {
        ...state,
        [id]: { id, name, members: { [members.id]: members[0] } },
      };
    }
    case FG_LOAD: {
      const newState = {};
      action.payload.map((f) => {
        newState[f.id] = Object.assign({}, f);
        delete newState[f.id].members;
        newState[f.id].members = {};
        f.members.map((m) => (newState[f.id].members[m.userID] = m));
      });
      return newState;
    }
    case FG_MEMBER_REMOVE: {
      const { friendGroupID, userID } = action.payload;
      const newState = { ...state };
      delete newState[friendGroupID].members[userID];
      return newState;
    }
    default:
      return state;
  }
}

export default friendGroups;
