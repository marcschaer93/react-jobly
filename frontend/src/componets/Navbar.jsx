import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material";
import React, { useContext } from "react";

import { CurrentUserContext } from "../utils/UserContext";
import { navLinkStyle } from "../styles/navbarStyles";

/**
 * Navbar Component
 *
 * Renders a navigation bar with links based on user authentication status.
 * Utilizes NavLink for routing and CurrentUserContext for user-related data.
 *
 * @returns {JSX.Element} - A navigation bar component with dynamic links based on user authentication.
 */

export default function Navbar() {
  const theme = useTheme();
  const { currentUser, logoutUser } = useContext(CurrentUserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button component={NavLink} to="/" size="large" color="inherit">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JOBLY
            </Typography>
          </Button>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              component={NavLink}
              to="/companies"
              size="large"
              color="inherit"
              sx={navLinkStyle}
            >
              Companies
            </Button>
            <Button
              component={NavLink}
              to="/jobs"
              size="large"
              color="inherit"
              sx={navLinkStyle}
            >
              Jobs
            </Button>
            {currentUser ? (
              <Button
                component={NavLink}
                to="/profile"
                size="large"
                color="inherit"
                sx={navLinkStyle}
              >
                Profile
              </Button>
            ) : (
              ""
            )}

            {currentUser ? (
              <Button
                onClick={() => logoutUser()}
                to="/"
                component={NavLink}
                size="large"
                color="inherit"
                sx={navLinkStyle}
              >
                {`Logout ${currentUser.username}`}
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                size="large"
                color="inherit"
                sx={navLinkStyle}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
