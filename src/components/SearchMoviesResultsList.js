import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMovies } from "../actions/userMovies";
import ItemList from "./ItemList";

function SearchMoviesResultsList() {
  const dispatch = useDispatch();
  const { movieSearchResults, userMovies } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies());
    }
  }, [dispatch, userMovies]);

  return movieSearchResults.results.length > 0 ? (
    <ItemList items={movieSearchResults.results} />
  ) : null;
}

export default SearchMoviesResultsList;
