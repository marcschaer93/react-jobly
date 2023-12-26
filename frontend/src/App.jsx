import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import JoblyApi from "./utils/api";
import Navbar from "./componets/Navbar";
import { theme } from "/src/utils/theme.js";
import { AppRoutes } from "./componets/AppRoutes";
import { CurrentUserContext } from "./utils/UserContext";

/**
 * App Functionality Overview:
 *
 * - **Routing and Navigation**: Handles URL-based navigation using React Router, directing users to different pages/components.
 * - **User Authentication**: Manages user login/logout states by storing tokens in local storage, facilitating persistent sessions.
 * - **Global User Context**: Provides user-related data and actions via `CurrentUserContext.Provider` for widespread access.
 * - **Material-UI Theming**: Utilizes Material-UI's `ThemeProvider` for consistent styling across the application.
 * - **Data Fetching and Filtering**: Retrieves and filters company and job data using dedicated hooks (`useCompanyData`, `useJobData`).
 * - **Modular Component Design**: Uses modular components for improved maintainability and scalability.
 * - **Loading State Handling**: Displays loading indicators while fetching data to enhance user experience.
 * - **Error Logging and Handling**: Captures and logs errors during data retrieval or authentication for debugging.
 * - **Responsive UI**: Utilizes Material-UI components for building responsive and intuitive user interfaces.
 * - **Centralized Application Entry**: Acts as the central entry point, controlling core functionalities of the app.
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken || null;
  });

  useEffect(() => {
    if (!userToken) {
      setCurrentUser(null);
      return;
    }

    const fetchData = async () => {
      try {
        const userData = await JoblyApi.getUserData(userToken);
        setCurrentUser(userData);
        console.log("data$", userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [userToken]);

  const loginUser = async (username, password) => {
    try {
      const token = await JoblyApi.loginUser(username, password);
      setUserToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setUserToken(null);
    localStorage.removeItem("token");
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
