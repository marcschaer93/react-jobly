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

/**
 * The main component managing user authentication and data for the entire application.
 * Handles user login, logout, and context management for user-related data.
 */

function App() {
  // const useLocalStorageToken = (key) => {
  //   const [token, setToken] = useState(() => {
  //     const storedToken = localStorage.getItem(key);
  //     return storedToken || null;
  //   });

  //   useEffect(() => {
  //     if (token !== null && token !== undefined) {
  //       localStorage.setItem(key, token);
  //     } else {
  //       localStorage.removeItem(key);
  //     }
  //   }, [key, token]);

  //   return [token, setToken];
  // };
  // const [userToken, setUserToken] = useLocalStorageToken("token");

  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken || null;
  });

  // const [userToken, setUserToken] = useState(null);

  // useEffect(() => {
  //   const loggedInUserToken = localStorage.getItem("token");

  //   if (loggedInUserToken) {
  //     try {
  //       const token = JSON.parse(loggedInUserToken);
  //       console.log("token", token);
  //       setUserToken(token);
  //     } catch (error) {
  //       console.error("Error parsing token:", error);
  //       // Handle the error here, such as setting default token or showing an error message.
  //     }
  //   }
  // }, []);

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

  // useEffect(() => {
  //   if (userToken) {
  //     const fetchData = async () => {
  //       try {
  //         const userData = await JoblyApi.getUserData(userToken);
  //         setCurrentUser(userData);
  //         console.log("data$", userData);
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //       }
  //     };

  //     fetchData();
  //   } else {
  //     setCurrentUser(null);
  //   }
  // }, [userToken, setCurrentUser]);

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
