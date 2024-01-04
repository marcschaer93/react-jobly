import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import JoblyApi from "./api";
import Navbar from "./components/Navbar";
import { theme } from "/src/utils/theme.js";
import { AppRoutes } from "./components/AppRoutes";
import { CurrentUserContext } from "./utils/UserContext";

/**
 * App Component
 *
 * Manages the application's top-level structure:
 * - Handles user authentication and token management
 * - Fetches user data based on the token
 * - Provides the CurrentUserContext to its child components
 * - Renders the application layout including Navbar and Routes
 *
 * State:
 * - currentUser: Represents the current logged-in user
 * - token: Represents the token for user authentication
 *
 * @returns {JSX.Element} - Top-level structure of the application
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken || null;
  });

  useEffect(() => {
    if (!token) {
      setCurrentUser(null);
      return;
    }

    const fetchData = async () => {
      try {
        const userData = await JoblyApi.getUserData(token);
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [token]);

  const loginUser = async (username, password) => {
    try {
      const token = await JoblyApi.loginUser(username, password);
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            token,
            setToken,
            loginUser,
            logoutUser,
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
