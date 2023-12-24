import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Typography, Box } from "@mui/material";

import "./LoginForm.css";

import { FormInputUsername } from "./form/FormInputUsername";
import { FormInputPassword } from "./form/FormInputPassword";

import { CurrentUserContext } from "../utils/UserContext";

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
          Login Form
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
            <FormInputUsername
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
            Login
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
        Not a Member yet?
        {/* <span
          //   onClick={() => onFormSwitch("register")}
          //   onClick={() => onFormSwitch("register")}
          sx={{ color: "#4c00b4", cursor: "pointer", fontWeight: "bold" }}
        >
          Sign Up.
        </span> */}
        <Box
          component={Link}
          to="/register"
          exact="true"
          sx={{
            color: "#4c00b4",
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Sign Up.
        </Box>
      </Box>
    </Box>
  );
};
