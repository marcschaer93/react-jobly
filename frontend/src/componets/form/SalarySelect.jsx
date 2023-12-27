import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SalarySelect = ({ salary, handleChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Salary</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={salary}
          label="Salary"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={30000}>30'000</MenuItem>
          <MenuItem value={60000}>60'000</MenuItem>
          <MenuItem value={80000}>80'000</MenuItem>
          <MenuItem value={100000}>100'000</MenuItem>
          <MenuItem value={120000}>120'000</MenuItem>
          <MenuItem value={150000}>150'000</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
