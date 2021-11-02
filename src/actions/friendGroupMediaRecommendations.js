import axios from "axios";
import { FG_MEDIA_RECOMMENDATION_LOAD } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getFriendGroupMediaRecommendations(friendGroupID, mediaType) {
  return async function (dispatch) {
    const response = await axios.get(
      `${WTWWF_API_URL}/friendGroups/${friendGroupID}/${mediaType}`
    );
    dispatch(loadFriendGroupMediaRecommendations(response.data));
  };
}

function loadFriendGroupMediaRecommendations(recommendations) {
  return { type: FG_MEDIA_RECOMMENDATION_LOAD, payload: recommendations };
}
