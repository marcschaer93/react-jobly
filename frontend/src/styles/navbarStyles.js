import { useTheme } from "@mui/material";

const theme = useTheme();

const navbarStyles = {
  navLinkStyle: {
    color: "#ccc", // Light gray color for inactive links
    textDecoration: "none",
    borderBottom: "2px solid transparent",
    borderRadius: "0px",
    padding: "20px",
    "&:hover": {
      color: "#1976d2", // Change color on hover
    },
    "&.active": {
      color: "#fff", // White color for active link
      borderBottomColor: theme.palette.secondary.main, // Red line underneath active link
    },
  },
};

export const { navLinkStyle } = navbarStyles;
