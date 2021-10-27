import { FormControl, FormLabel, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import useForm from "../customHooks/useForm";
import { updateUser } from "../actions/user";
import { Box } from "@mui/system";

function UserProfileForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const [formData, addFormData] = useForm(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateUser(formData));
    setIsEditing(false);
  };

  const setFormData = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  return (
    <form>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <FormLabel>Username: </FormLabel>
          <TextField
            type="text"
            name="username"
            value={formData.username}
            disabled={!isEditing}
            onChange={setFormData}
            variant="standard"
          ></TextField>
        </FormControl>
        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <FormLabel>Email: </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            disabled
            variant="standard"
          ></Input>
        </FormControl>
        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <FormLabel>Country: </FormLabel>
          <Input
            type="text"
            name="country"
            value={formData.country}
            disabled={!isEditing}
            variant="standard"
          ></Input>
        </FormControl>
        {!isEditing ? (
          <Button onClick={handleEdit}>Edit</Button>
        ) : (
          <Button onClick={handleSave}>Save</Button>
        )}
      </Box>
    </form>
  );
}

export default UserProfileForm;
