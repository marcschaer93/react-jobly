import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "/src/utils/theme.js";
import { CurrentUserContext } from "./utils/UserContext";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./componets/Navbar";
import { AppRoutes } from "./componets/AppRoutes";

import JoblyApi from "./utils/api";

import { jwtDecode } from "jwt-decode";

/**
 * The main component managing user authentication and data for the entire application.
 * Handles user login, logout, and context management for user-related data.
 */

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (!userToken) return;

    // Decode the token to extract user information (username, etc.)
    const decodedToken = jwtDecode(userToken);
    const username = decodedToken.username;
    setCurrentUser(username);
    console.log("username", username);

    const fetchData = async () => {
      try {
        const data = await JoblyApi.getUserData(username, userToken);
        console.log("data", data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [userToken]);

  const loginUser = async (username, password) => {
    try {
      // Make API call to get token
      const token = await JoblyApi.loginUser(username, password);
      setUserToken(token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setUserToken("");
    navigate("/");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            loginUser,
            logoutUser,
            userData,
            setUserData,
          }}
        >
          <CssBaseline />

          <Navbar />

          <AppRoutes />
        </CurrentUserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
