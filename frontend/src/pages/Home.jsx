import { Button, Box, Typography } from "@mui/material";

import { CurrentUserContext } from "../utils/UserContext";
import { useTheme } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  const theme = useTheme();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      {currentUser ? (
        <h1>{`Welcome Back, ${currentUser.username}!`}</h1>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "100px",
              gap: "10px",
            }}
          >
            <Typography variant="h3">Jobly</Typography>
            <Typography variant="p">Find your Dream Job!</Typography>
            <Button
              component={Link}
              text="Login"
              to="/login"
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
              sx={{
                borderRadius: "50px",
                width: "220px",
                marginTop: "16px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};
