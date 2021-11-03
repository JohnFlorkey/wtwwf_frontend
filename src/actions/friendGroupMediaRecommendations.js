import axios from "axios";
import {
  FG_MEDIA_RECOMMENDATION_LOAD,
  FG_MEDIA_RECOMMENDATION_REMOVE,
} from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getFriendGroupMediaRecommendations(friendGroupID, mediaType) {
  return async function (dispatch) {
    const response = await axios.get(
      `${WTWWF_API_URL}/friendGroups/${friendGroupID}/${mediaType}`
    );
    dispatch(loadFriendGroupMediaRecommendations(response.data));
  };
}

export function removeFriendGroupMediaRecommendation(
  friendGroupID,
  mediaType,
  mediaID
) {
  return async function (dispatch) {
    // update database
    //update state
    dispatch(
      removeFriendGroupMediaRecommendationState(
        friendGroupID,
        mediaType,
        mediaID
      )
    );
  };
}

function loadFriendGroupMediaRecommendations(recommendations) {
  return { type: FG_MEDIA_RECOMMENDATION_LOAD, payload: recommendations };
}

function removeFriendGroupMediaRecommendationState(
  friendGroupID,
  mediaType,
  mediaID
) {
  return {
    type: FG_MEDIA_RECOMMENDATION_REMOVE,
    payload: { friendGroupID, mediaType, mediaID },
  };
}
