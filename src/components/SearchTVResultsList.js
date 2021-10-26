import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTV } from "../actions/userTV";
import ItemList from "./ItemList";

function SearchTVResultsList() {
  const dispatch = useDispatch();
  const { tvSearchResults, userTV } = useSelector((store) => store);

  useEffect(() => {
    if (Object.keys(userTV).length === 0) {
      dispatch(getUserTV());
    }
  }, [dispatch, userTV]);

  return tvSearchResults.length > 0 ? (
    <ItemList items={tvSearchResults} />
  ) : null;
}

export default SearchTVResultsList;
