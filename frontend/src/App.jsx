import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "/src/utils/theme.js";

import { AppRoutes } from "./componets/AppRoutes";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />

        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
