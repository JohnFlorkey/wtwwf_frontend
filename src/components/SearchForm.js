import React from "react";
import { useHistory } from "react-router";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import useForm from "../customHooks/useForm";

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

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridAutoColumns: "1fr",
          p: 2,
          borderRadius: 5,
        }}
      >
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
          value={formData.title}
          variant="outlined"
          onChange={handleFormChange}
        />
      </Box>
    </form>
  );
}

export default SearchForm;
