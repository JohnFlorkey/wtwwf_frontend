import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFriendGroup } from "../actions/friendGroups";
import useForm from "../customHooks/useForm";

function FriendGroupForm({ toggleForm }) {
  const [formData, addFormData] = useForm({ name: "" });
  const setFormData = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const addFriendGroup = (evt) => {
    evt.preventDefault();
    dispatch(createFriendGroup(formData.name, user.id));
  };
  return (
    <form onSubmit={addFriendGroup}>
      <Box sx={{ alignContents: "center", display: "flex", my: 2 }}>
        <TextField
          id="new-friendgroup"
          label="Name"
          name="name"
          onChange={setFormData}
          value={formData.name}
          sx={{ backgroundColor: "#fff", width: 350 }}
        />
        <Button
          color="success"
          sx={{ mx: 2 }}
          type="submit"
          variant="contained"
        >
          Create
        </Button>
        <Button color="error" onClick={toggleForm} variant="contained">
          Cancel
        </Button>
      </Box>
    </form>
  );
}

export default FriendGroupForm;
