import { Button, TextField } from "@mui/material";
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
      <TextField
        id="new-friendgroup"
        label="Name"
        name="name"
        value={formData.name}
        onChange={setFormData}
      />
      <Button type="submit">Create</Button>
      <Button onClick={toggleForm}>Cancel</Button>
    </form>
  );
}

export default FriendGroupForm;
