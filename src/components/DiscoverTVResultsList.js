import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ItemList from "./ItemList";
import { getUserTV } from "../actions/userTV";
import { getTVDiscoverResults } from "../actions/tvDiscoverResults";

function DiscoverTVResultsList() {
  const dispatch = useDispatch();
  const { tvDiscoverResults, userTV } = useSelector((store) => store);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const page = parseInt(query.get("page"));

  useEffect(() => {
    if (Object.keys(userTV).length === 0) {
      dispatch(getUserTV());
    }
  }, [dispatch, userTV]);

  useEffect(() => {
    if (!tvDiscoverResults[page]) {
      dispatch(getTVDiscoverResults(page));
    }
  }, [dispatch, tvDiscoverResults, page]);

  return Object.keys(tvDiscoverResults).length > 0 &&
    tvDiscoverResults[page] ? (
    <Box>
      <Box>
        <Typography variant="h5">Results</Typography>
        <Pagination
          count={tvDiscoverResults.totalPages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={RouterLink}
              to={`/discover/tv?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
      <ItemList items={tvDiscoverResults[page]} userMediaList={userTV} />
    </Box>
  ) : null;
}

export default DiscoverTVResultsList;
