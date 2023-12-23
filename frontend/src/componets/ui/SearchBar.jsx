import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";

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
          onChange={handleChange}
          size="small"
          fullWidth
          sx={{ width: "50vW", borderRadius: "16px" }}
          id="input-with-icon-textfield"
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
