import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ItemList from "./ItemList";
import {
  clearMovieSearchResults,
  getMovieSearchResults,
} from "../actions/movieSearchResults";

function SearchMoviesResultsList() {
  const dispatch = useDispatch();

  const { movieSearchResults } = useSelector((store) => store);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const title = query.get("title");
  const page = parseInt(query.get("page"));

  useEffect(() => {
    if (title && page) {
      if (title !== movieSearchResults.searchTerm)
        dispatch(clearMovieSearchResults());
      if (!movieSearchResults[page])
        dispatch(getMovieSearchResults(title, page));
    }
  }, [dispatch, movieSearchResults, page, title]);

  return Object.keys(movieSearchResults).length > 0 &&
    movieSearchResults[page] ? (
    <Box>
      <Box>
        <Typography variant="h5">Results</Typography>
        <Pagination
          count={movieSearchResults.totalPages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={RouterLink}
              to={`/search/movies?title=${movieSearchResults.searchTerm}&page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
      <ItemList items={movieSearchResults[page]} />
    </Box>
  ) : null;
}

export default SearchMoviesResultsList;
