import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ItemList from "./ItemList";
import { getUserMovies } from "../actions/userMovies";
import { getMovieDiscoverResults } from "../actions/movieDiscoverResults";

function DiscoverMovieResultsList() {
  const dispatch = useDispatch();
  const { movieDiscoverResults, user, userMovies } = useSelector(
    (store) => store
  );

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const page = parseInt(query.get("page"));

  useEffect(() => {
    if (Object.keys(userMovies).length === 0) {
      dispatch(getUserMovies(user.id));
    }
  }, [dispatch, user, userMovies]);

  useEffect(() => {
    if (!movieDiscoverResults[page]) {
      dispatch(getMovieDiscoverResults(page));
    }
  }, [dispatch, movieDiscoverResults, page]);

  return Object.keys(movieDiscoverResults).length > 0 &&
    movieDiscoverResults[page] ? (
    <Box>
      <ItemList items={movieDiscoverResults[page]} userMediaList={userMovies} />
      <Box>
        <Pagination
          count={movieDiscoverResults.totalPages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={RouterLink}
              to={`/discover/movies?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  ) : null;
}

export default DiscoverMovieResultsList;
