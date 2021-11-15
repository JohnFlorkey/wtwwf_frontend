import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import useForm from "../customHooks/useForm";
import { WTWWF_API_URL } from "../utilities/config";

function SignupForm() {
  const INITIAL_FORM_STATE = {
    country: "",
    email: "",
    password: "",
    username: "",
  };
  const [formData, addFormData] = useForm(INITIAL_FORM_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    addFormData(name, value);
  };

  const history = useHistory();
  const handleCancel = () => {
    history.push("/");
  };
  const handleSignup = async () => {
    const response = await axios.post(`${WTWWF_API_URL}/auth/signup`, {
      country: "US",
      email: formData.email,
      password: formData.password,
      username: formData.username,
    });
  };

  return (
    <Box>
      <form>
        <TextField
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSignup}>
          Signup
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </form>
    </Box>
  );
}

export default SignupForm;
