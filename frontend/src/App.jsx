import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "/src/utils/theme.js";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "./componets/AppRoutes";
import Navbar from "./componets/Navbar";

import { CurrentUserContext } from "./utils/UserContext";

import JoblyApi from "./utils/api";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (!userToken || !currentUser) return;

    const data = JoblyApi.getUserData(currentUser, userToken);
    console.log("data", data);
    setUserData(data);
  }, [userToken]);

  const loginUser = async (username, password) => {
    try {
      // Make API call to get token
      const token = await JoblyApi.loginUser(username, password);
      setUserToken(token);
      setCurrentUser(username); // Set the current user
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
