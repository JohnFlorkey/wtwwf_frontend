import React from "react";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../customHooks/useForm";
import { display } from "@mui/system";

function SearchForm({ type }) {
  const history = useHistory();
  const INITIAL_STATE_SEARCH_FORM = { title: "" };
  const [formData, addFormData] = useForm(INITIAL_STATE_SEARCH_FORM);
  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // when submitting the search form we're always looking for page 1 of results
    const page = 1;
    history.push(`/search/${type}?title=${formData.title}&page=${page}`);
  };

  let displayType = "";
  if (type === "movies") {
    displayType = "Movies";
  } else if (type === "tv") {
    displayType = "TV";
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          borderRadius: 5,
          display: "grid",
          gap: 1,
          gridAutoColumns: "1fr",
          my: 2,
          px: "25%",
        }}
      >
        <Typography variant="h4">Search {displayType}</Typography>
        <TextField
          id="serarch-title"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </InputAdornment>
            ),
          }}
          label="Search TMDB by Title"
          name="title"
          onChange={handleFormChange}
          sx={{ backgroundColor: "#fff", maxWidth: 750, minWidth: 300 }}
          value={formData.title}
          variant="outlined"
        />
      </Box>
    </form>
  );
}

export default SearchForm;
