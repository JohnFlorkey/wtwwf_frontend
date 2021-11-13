import React from "react";
import { useHistory } from "react-router";
import { Button, TextField } from "@mui/material";
import useForm from "../customHooks/useForm";

function SearchForm({ type }) {
  const history = useHistory();
  const INITIAL_STATE_SEARCH_FORM = { title: "" };
  const [formData, addFormData] = useForm(INITIAL_STATE_SEARCH_FORM);
  const setFormData = (evt) => {
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
      <TextField
        id="serarch-title"
        label="title"
        name="title"
        value={formData.value}
        variant="outlined"
        onChange={setFormData}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default SearchForm;
