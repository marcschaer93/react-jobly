import React, { useContext } from "react";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

import JoblyApi from "../utils/api";
import { FormInputText } from "./form/FormInputText";
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
  submitButton,
} from "../styles/formStyles";

/**
 * RegisterForm Component
 *
 * Renders a registration form allowing users to sign up.
 * Utilizes useForm for form control and validation, CurrentUserContext for user-related actions, and JoblyApi for registration.
 *
 * @returns {JSX.Element} - A registration form component with input fields for username, password, first name, last name, and email.
 */

export const RegisterForm = () => {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    setError, // Add setError from useForm
    formState: { errors }, // Handling form validation errors
  } = useForm({
    // defaultValues: {
    //   username: "marcschaer",
    //   password: "199316",
    //   firstName: "Marc",
    //   lastName: "Schär",
    //   email: "marc.schaer93@gmail.com",
    // },
  });

  const { setToken } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    const registrationResult = await JoblyApi.registerUser(data);
    if (registrationResult.token) {
      const token = registrationResult.token;
      setToken(token);
      navigate("/");
      reset();
    } else {
      setError("username", {
        type: "manual",
        message: `${registrationResult.error}`,
      });
    }
  };

  return (
    <Box sx={formContainer}>
      <Box sx={titleContainer}>
        <Typography variant="h1" sx={{ fontSize: "48px", fontWeight: 700 }}>
          Register Form
        </Typography>
        <Box sx={underline}></Box>
      </Box>
      <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={inputs}>
          <Box sx={input}>
            <FormInputText
              name="username"
              control={control}
              label="Username"
              errors={errors}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ width: "230px" }}>
              <FormInputText
                name="firstName"
                control={control}
                label="First name"
                errors={errors}
              />
            </Box>
            <Box sx={{ width: "230px" }}>
              <FormInputText
                name="lastName"
                control={control}
                label="Last Name"
                errors={errors}
              />
            </Box>
          </Box>
          <Box sx={input}>
            <FormInputText
              name="email"
              control={control}
              label="Email"
              errors={errors}
            />
          </Box>
          <Box sx={input}>
            <FormInputText
              name="password"
              control={control}
              label="Password"
              errors={errors}
            />
          </Box>
        </Box>

        <Box sx={submitContainer}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            sx={submitButton}
          >
            Register
          </Button>
        </Box>
      </form>
      <Box sx={switchContainer}>
        Already a Member ?
        <Box component={Link} to="/login" exact="true" sx={link}>
          Login
        </Box>
      </Box>
    </Box>
  );
};
