import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";

import { CurrentUserContext } from "../utils/UserContext";

/**
 * Home Component
 *
 * Renders the landing page of the application.
 * Displays a welcome message if a user is logged in, otherwise, shows a message prompting login and a button to navigate to the login page.
 *
 * @returns {JSX.Element} - Landing page content
 */

export const Home = () => {
  const theme = useTheme();
  const { currentUser } = useContext(CurrentUserContext);

  const backgroundImageUrl = "/src/assets/cropped.png"; // Path to your image (relative to the public directory)

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#89CFF0",
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
