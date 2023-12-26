import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate, Navigate, Link } from "react-router-dom";

import { CurrentUserContext } from "../utils/UserContext";
import { FormInputUsername } from "./form/FormInputUsername";
import { FormInputPassword } from "./form/FormInputPassword";
import {
  formContainer,
  titleContainer,
  underline,
  inputs,
  input,
  submitContainer,
  switchContainer,
  link,
  lostPasswordContainer,
  submitButton,
} from "../styles/formStyles";

/**
 * LoginForm Component
 *
 * Renders a login form allowing users to enter their credentials for authentication.
 * Utilizes React Hook Form for form handling and validation.
 *
 * @returns {JSX.Element} - A login form component with username, password inputs, and submit button.
 */

export const LoginForm = () => {
  const { setCurrentUser, currentUser, loginUser } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "testuser",
      password: "password",
    },
  });

  const onFormSubmit = async (data) => {
    const { username, password } = data;
    loginUser(username, password);
    navigate("/");
    reset();
  };

  return (
    <Box sx={formContainer}>
      <Box sx={titleContainer}>
        <Typography variant="h1" sx={{ fontSize: "48px", fontWeight: 700 }}>
          Login Form
        </Typography>
        <Box sx={underline}></Box>
      </Box>

      <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={inputs}>
          <Box sx={input}>
            <FormInputUsername
              name="username"
              control={control}
              label="Username"
              errors={errors}
            />
          </Box>

          <Box sx={input}>
            <FormInputPassword
              name="password"
              control={control}
              label="Password"
              errors={errors}
            />
          </Box>
        </Box>

        <Box
          onClick={() => onFormSwitch("register")}
          sx={lostPasswordContainer}
        >
          Lost Password
        </Box>

        <Box sx={submitContainer}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            sx={submitButton}
          >
            Login
          </Button>
        </Box>
        <Box sx={switchContainer}>
          Not a Member yet?
          <Box component={Link} to="/register" exact="true" sx={link}>
            Sign Up.
          </Box>
        </Box>
      </form>
    </Box>
  );
};
