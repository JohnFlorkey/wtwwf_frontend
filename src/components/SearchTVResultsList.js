import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ItemList from "./ItemList";
import {
  clearTVSearchResults,
  getTVSearchResults,
} from "../actions/tvSearchResults";
import { getUserTV } from "../actions/userTV";

function SearchTVResultsList() {
  const dispatch = useDispatch();

  const { tvSearchResults, user, userTV } = useSelector((store) => store);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const title = query.get("title");
  const page = parseInt(query.get("page"));

  useEffect(() => {
    if (title && page) {
      if (title !== tvSearchResults.searchTerm)
        dispatch(clearTVSearchResults());
      if (!tvSearchResults[page]) dispatch(getTVSearchResults(title, page));
    }
  }, [dispatch, tvSearchResults, page, title]);

  useEffect(() => {
    if (Object.keys(userTV).length === 0) {
      dispatch(getUserTV(user.id));
    }
  }, [dispatch, user, userTV]);

  return Object.keys(tvSearchResults).length > 0 && tvSearchResults[page] ? (
    <Box>
      <Box>
        <Typography variant="h5">Results</Typography>
        <Pagination
          count={tvSearchResults.totalPages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={RouterLink}
              to={`/search/tv?title=${tvSearchResults.searchTerm}&page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
      <ItemList items={tvSearchResults[page]} userMediaList={userTV} />
      <Box>
        <Pagination
          count={tvSearchResults.totalPages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={RouterLink}
              to={`/search/tv?title=${tvSearchResults.searchTerm}&page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  ) : null;
}

export default SearchTVResultsList;
