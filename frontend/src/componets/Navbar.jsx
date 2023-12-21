import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

import { CurrentUserContext } from "../utils/UserContext";
import { useContext } from "react";

export default function Navbar() {
  const { currentUser, logout } = useContext(CurrentUserContext);

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
            >
              Companies
            </Button>
            <Button component={NavLink} to="/jobs" size="large" color="inherit">
              Jobs
            </Button>
            <Button
              component={NavLink}
              to="/profile"
              size="large"
              color="inherit"
            >
              Profile
            </Button>

            {currentUser ? (
              <Button
                onClick={() => logout()}
                component={NavLink}
                size="large"
                color="inherit"
              >
                {`Logout ${currentUser}`}
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                size="large"
                color="inherit"
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
