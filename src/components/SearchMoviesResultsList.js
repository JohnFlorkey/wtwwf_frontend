import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ItemList from "./ItemList";
import {
  clearMovieSearchResults,
  getMovieSearchResults,
} from "../actions/movieSearchResults";
import { getUserMovies } from "../actions/userMovies";

function SearchMoviesResultsList() {
  const dispatch = useDispatch();

  const { movieSearchResults, user, userMovies } = useSelector(
    (store) => store
  );
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

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies(user.id));
    }
  }, [dispatch, user, userMovies]);

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
      <ItemList items={movieSearchResults[page]} userMediaList={userMovies} />
      <Box>
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
    </Box>
  ) : null;
}

export default SearchMoviesResultsList;
