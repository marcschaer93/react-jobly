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

export const EditForm = () => {
  const { currentUser, userToken } = useContext(CurrentUserContext);

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
    console.log("data", data);
    JoblyApi.editUserProfile(data, userToken);

    // const registrationResult = await JoblyApi.registerUser(data);
    // if (registrationResult.token) {
    //   const token = registrationResult.token;
    //   setUserToken(token);
    //   navigate("/");
    //   reset();
    // } else {
    //   setError("username", {
    //     type: "manual",
    //     message: `${registrationResult.error}`,
    //   });
    // }
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "600px",
        margin: "auto",
        paddingBottom: "30px",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "9px",
          width: "100%",
          marginTop: "30px",
          paddingTop: "30px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "48px", fontWeight: 700 }}>
          Profile
        </Typography>
        <span
          className="underline"
          sx={{
            display: "inline-block",
            backgroundColor: "#6e5494",
            width: "61px",
            height: "6px",
            borderRadius: "9px",
            verticalAlign: "bottom",
            marginTop: "25px",
          }}
        ></span>
      </Box>

      <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
        <Box
          sx={{
            marginTop: "55px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
          className="inputs"
        >
          <Box
            sx={{ display: "flex", alignItems: "center", width: "480px" }}
            className="input"
          >
            <FormInputText
              name="username"
              control={control}
              label="Username"
              errors={errors}
              disabled={true}
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", width: "480px" }}
            className="input"
          >
            <FormInputText
              name="firstName"
              control={control}
              label="First name"
              errors={errors}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", width: "480px" }}
            className="input"
          >
            <FormInputText
              name="lastName"
              control={control}
              label="Last Name"
              errors={errors}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", width: "480px" }}
            className="input"
          >
            <FormInputText
              name="email"
              control={control}
              label="Email"
              errors={errors}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "60px auto",
          }}
          className="submit-container"
        >
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
            sx={{
              borderRadius: "50px",
              width: "480px",
              marginTop: "16px",
              fontWeight: "bold",
            }}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};
