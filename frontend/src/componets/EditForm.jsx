import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, Box } from "@mui/material";
import { TextField } from "@mui/material";

import "./LoginForm.css";

import { FormInputText } from "./form/FormInputText";

import JoblyApi from "../utils/api";
import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";
import { useNavigate, Navigate } from "react-router-dom";

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

export const EditForm = () => {
  const { currentUser, setCurrentUser, userToken } =
    useContext(CurrentUserContext);

  const { username, firstName, lastName, email } = currentUser;

  const {
    control,
    handleSubmit,
    reset,
    setError, // Add setError from useForm
    formState: { errors }, // Handling form validation errors
  } = useForm({
    defaultValues: {
      username: `${username}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${email}`,
    },
  });

  const navigate = useNavigate();

  const onFormSubmit = (data) => {
    const { firstName, lastName, email } = data;
    const dataWithoutUsername = { firstName, lastName, email };

    JoblyApi.editUserProfile(dataWithoutUsername, userToken);
    setCurrentUser(() => data);
    navigate("/");
  };

  return (
    <Box sx={formContainer}>
      <Box sx={titleContainer}>
        <Typography variant="h1" sx={{ fontSize: "48px", fontWeight: 700 }}>
          Profile
        </Typography>
        <Box sx={underline}></Box>
      </Box>

      <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={inputs} className="inputs">
          <Box sx={input} className="input">
            <FormInputText
              name="username"
              control={control}
              label="Username"
              errors={errors}
              disabled={true}
            />

            {/* <TextField
              label="Username"
              variant="outlined"
              value={`${username}`}
              fullWidth
              disabled
            /> */}
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

          <Box sx={input} className="input">
            <FormInputText
              name="email"
              control={control}
              label="Email"
              errors={errors}
            />
          </Box>
        </Box>

        <Box sx={submitContainer} className="submit-container">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            sx={submitButton}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};
