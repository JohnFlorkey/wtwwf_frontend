import { useHistory } from "react-router";
import useForm from "../customHooks/useForm";
import { login } from "../actions/auth";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const INITIAL_FORM_STATE = {
    email: "",
    password: "",
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

  const handleLogin = async (evt) => {
    evt.preventDefault();
    dispatch(login(formData.email, formData.password));
    history.push("/");
  };

  return (
    <Box>
      <form onSubmit={handleLogin}>
        <TextField
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </form>
    </Box>
  );
}

export default LoginForm;
