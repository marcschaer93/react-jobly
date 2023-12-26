import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import { registerOptions } from "../../utils/registrOptions";

export const FormInputPassword = ({ name, control, label, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions[name]}
      render={({ field }) => (
        <TextField
          size="small"
          label={label}
          {...field}
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          variant="outlined"
          fullWidth
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={{ color: "black" }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon style={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
