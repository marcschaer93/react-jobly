import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

/**
 * SearchBar Component
 *
 * Renders a search bar input field with an accompanying search icon for handling search operations.
 *
 * @param {string} searchTerm - The current search term in the input field.
 * @param {Function} handleChange - The function to handle changes in the search term.
 * @returns {JSX.Element} - A search bar component with controlled input handling and an icon for search functionality.
 */

export const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <Box
      autoComplete="off"
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ "& > :not(style)": { m: 1 } }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        <TextField
          value={searchTerm}
          name="searchTerm"
          onChange={handleChange}
          size="small"
          fullWidth
          sx={{ width: "50vW", borderRadius: "16px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
};
