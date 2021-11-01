import axios from "axios";
import { FG_LOAD, FG_MOVIE_RECOMMENDATION_REMOVE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function getFriendGroups() {
  return async function (dispatch) {
    const response = await axios.get(`${WTWWF_API_URL}/friendgroups`);
    dispatch(loadFriendGroups(response.data));
  };
}

export function removeFriendGroupMovieRecommendation(friendGroupID, movieID) {
  return async function (dispatch) {
    // update database
    //update state
    dispatch(removeFriendGroupMovieRecommendationState(friendGroupID, movieID));
  };
}

function loadFriendGroups(friendGroups) {
  return { type: FG_LOAD, payload: friendGroups };
}

function removeFriendGroupMovieRecommendationState(friendGroupID, movieID) {
  return {
    type: FG_MOVIE_RECOMMENDATION_REMOVE,
    payload: { friendGroupID, movieID },
  };
}
