import { Button, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { createInvitation } from "../actions/friendGroups";
import useForm from "../customHooks/useForm";

function FriendGroupInvitationForm({
  friendGroupID,
  handleToggleForm,
  toggleIsToastOpen,
}) {
  const INITIAL_INVITATION_FORM_STATE = { email: "", personalMessage: "" };
  const [formData, addFormData] = useForm(INITIAL_INVITATION_FORM_STATE);
  const setFormData = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  const { user } = useSelector((store) => store);

  const handleInvitationSubmit = async (evt) => {
    evt.preventDefault();
    const response = await createInvitation(
      formData.email,
      friendGroupID,
      user.id
    );
    if (response.id) toggleIsToastOpen();
    handleToggleForm();
  };

  return (
    <form onSubmit={handleInvitationSubmit}>
      <TextField
        id="invitation-email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={setFormData}
      />
      <TextField
        id="personal-message"
        label="Personal Message"
        name="personalMessage"
        value={formData.personalMessage}
        onChange={setFormData}
      />
      <Button type="submit">Send Invitation</Button>
      <Button onClick={handleToggleForm}>Cancel</Button>
    </form>
  );
}

export default FriendGroupInvitationForm;
