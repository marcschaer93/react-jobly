import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./componets/Navbar";
import { AppRoutes } from "./componets/AppRoutes";
// import { createTheme } from "@mui/material/styles";
import { theme } from "./utils/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />

        <Box sx={{ color: theme.palette.primary.main }}>
          <h1>JOBLY</h1>
        </Box>

        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
