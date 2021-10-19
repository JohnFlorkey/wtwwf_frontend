import axios from "axios";
import { USER_MOVIES_LOAD } from "./types";

export function getUserMovies() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/movies");
      const userMovies = new Map();
      response.data.map((m) => userMovies.set(m.id, m));
      dispatch(userMoviesLoad(userMovies));
    } catch (err) {
      console.log(err);
      console.log("attempt to get movies failed");
    }
  };
}

function userMoviesLoad(userMovies) {
  return { type: USER_MOVIES_LOAD, payload: userMovies };
}
