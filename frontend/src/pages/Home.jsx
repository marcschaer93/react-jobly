import { Button, Box, Typography } from "@mui/material";

import { CurrentUserContext } from "../utils/UserContext";
import { useTheme } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  const theme = useTheme();
  const { currentUser } = useContext(CurrentUserContext);

  const backgroundImageUrl = "/src/assets/cropped.jpeg"; // Path to your image (relative to the public directory)

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#26bdd0",
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5vh", // Adjust the top padding as needed
  };

  const imageStyle = {
    width: "40vW",
    maxHeight: "70vh",
    marginTop: "0", // Reset margin top
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "25px",
    marginTop: "40px", // Adjust margin top for content
  };

  return (
    <Box sx={containerStyle}>
      <img src={backgroundImageUrl} alt="Background Image" style={imageStyle} />
      <Box style={contentStyle}>
        {currentUser ? (
          <Typography variant="h4">
            {`Welcome Back, ${currentUser.username}!`}
          </Typography>
        ) : (
          <>
            {/* <Typography variant="h3">Jobly</Typography> */}
            <Typography variant="h4">Find your Dream Job!</Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                borderRadius: "50px",
                width: "220px",
                fontWeight: "bold",
                marginTop: "20px", // Adjust margin top as needed
              }}
            >
              Login
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
