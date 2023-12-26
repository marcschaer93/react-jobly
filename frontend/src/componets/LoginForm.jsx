import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Typography, Box } from "@mui/material";

import { FormInputUsername } from "./form/FormInputUsername";
import { FormInputPassword } from "./form/FormInputPassword";

import { CurrentUserContext } from "../utils/UserContext";

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
