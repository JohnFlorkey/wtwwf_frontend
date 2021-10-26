import React from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import useForm from "../customHooks/useForm";
// import { getMovieSearchResults } from "../actions/movieSearchResults";
import { getSearchResults } from "../actions/searchResults";

function SearchForm({ type }) {
  const dispatch = useDispatch();
  const INITIAL_STATE_SEARCH_FORM = { title: "" };
  const [formData, addFormData] = useForm(INITIAL_STATE_SEARCH_FORM);
  const setFormData = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getSearchResults(type, formData.title));
  };

  return (
    <form>
      <TextField
        id="serarch-title"
        label="title"
        name="title"
        value={formData.value}
        variant="outlined"
        onChange={setFormData}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}

export default SearchForm;
