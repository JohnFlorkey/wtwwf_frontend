import axios from "axios";
import { USER_MOVIES_LOAD, USER_MOVIE_ADD, USER_MOVIE_REMOVE } from "./types";
import { WTWWF_API_URL } from "../utilities/config";

export function addUserMovie(movie) {
  return async function (dispatch) {
    try {
      // update the database
      // then update state
      dispatch(userMovieAdd(movie));
    } catch (err) {
      console.log("attempt to add movie to user list failed");
    }
  };
}

export function getUserMovies(userID) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${WTWWF_API_URL}/users/${userID}/movies`
      );
      dispatch(userMoviesLoad(response.data));
    } catch (err) {
      console.log(err);
      console.log("attempt to get movies failed");
    }
  };
}

export function removeUserMovie(movieID) {
  return async function (dispatch) {
    try {
      // update the database
      // then update state
      console.log("implement remove movie from user's list");
      dispatch(userMovieRemove(movieID));
    } catch (err) {
      console.log(err, "attempt to remove user movie from db failed.");
    }
  };
}

function userMovieAdd(movie) {
  return { type: USER_MOVIE_ADD, payload: movie };
}

function userMoviesLoad(userMovies) {
  return { type: USER_MOVIES_LOAD, payload: userMovies };
}

function userMovieRemove(movieID) {
  return { type: USER_MOVIE_REMOVE, payload: movieID };
}
