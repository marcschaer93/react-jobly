import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, Box } from "@mui/material";

import "./LoginForm.css";

import { FormInputText } from "./form/FormInputText";

import JoblyApi from "../utils/api";
import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material";

export const RegisterForm = () => {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    setError, // Add setError from useForm
    formState: { errors }, // Handling form validation errors
  } = useForm({
    defaultValues: {
      username: "marcschaer",
      password: "199316",
      firstName: "Marc",
      lastName: "Schär",
      email: "marc.schaer93@gmail.com",
    },
  });

  const { setUserToken } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    const registrationResult = await JoblyApi.registerUser(data);
    if (registrationResult.token) {
      const token = registrationResult.token;
      setUserToken(token);
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
          Register Form
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
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", width: "480px" }}
            className="input"
          >
            <FormInputText
              name="password"
              control={control}
              label="Password"
              errors={errors}
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
          //   onClick={() => onFormSwitch("login")}
          sx={{
            display: "flex",
            justifyContent: "left",
            color: "#797979",
            fontSize: "16px",
            paddingLeft: "2px",
            cursor: "pointer",
            marginLeft: "60px",
            marginTop: "5px",
          }}
          className="lost-password-container"
        >
          Lost Password
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
            Register
          </Button>
        </Box>
      </form>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#797979",
          fontSize: "18px",
          gap: "10px",
        }}
        className="form-switch-container"
      >
        Already a Member ?
        <Box
          component={Link}
          to="/login"
          exact="true"
          //   onClick={() => onFormSwitch("login")}
          //   onClick={() => onFormSwitch("login")}
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#4c00b4",
          }}
        >
          Login
        </Box>
      </Box>
    </Box>
  );
};
