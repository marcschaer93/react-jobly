// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import { alpha } from "@mui/system";
// import { useTheme } from "@mui/material";

// /**
//  * SearchBar Component
//  *
//  * Renders a search bar input field with an accompanying search icon for handling search operations.
//  *
//  * @param {string} searchTerm - The current search term in the input field.
//  * @param {Function} handleChange - The function to handle changes in the search term.
//  * @returns {JSX.Element} - A search bar component with controlled input handling and an icon for search functionality.
//  */

// export const SearchBar = ({ searchTerm, handleChange }) => {
//   const theme = useTheme();
//   return (
//     <Box
//       autoComplete="off"
//       component="form"
//       onSubmit={(e) => e.preventDefault()}
//       sx={{ backgroundColor: "red", padding: "50px" }}
//     >
//       <Box sx={{ padding: "50px" }}>
//         <FormControl variant="standard">
//           <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
//           <TextField
//             value={searchTerm}
//             name="searchTerm"
//             onChange={handleChange}
//             size="small"
//             fullWidth
//             sx={{
//               width: "50vW",
//               // borderRadius: "16px",
//               // backgroundColor: alpha(theme.palette.primary.main, 0.1),
//               backgroundColor: "#19528c40",
//               // backgroundColor: "green",
//               "&:hover": {
//                 backgroundColor: "#19528c26",
//               },
//             }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//             variant="outlined"
//           />
//         </FormControl>
//       </Box>
//     </Box>
//   );
// };

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export const SearchBar = ({ searchTerm, handleChange }) => {
//   return (
//     <Search>
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//       <StyledInputBase
//         placeholder="Search…"
//         inputProps={{ "aria-label": "search" }}
//         value={searchTerm}
//         onChange={handleChange}
//         name="searchTerm"
//         autoComplete="off"
//       />
//     </Search>
//   );
// };

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { SalarySelect } from "../form/SalarySelect";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "40vW",
  display: "flex",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleChange}
              name="searchTerm"
              autoComplete="off"
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
