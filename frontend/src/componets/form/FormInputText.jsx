import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { registerOptions } from "../../utils/registrOptions";

export const FormInputText = ({
  name,
  control,
  label,
  errors,
  disabled = false,
}) => {
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
          disabled={disabled}
          //   InputProps={{
          //     startAdornment: (
          //       <InputAdornment position="start">
          //         <AccountCircle style={{ color: "black" }} />
          //       </InputAdornment>
          //     ),
          //   }}
        />
      )}
    />
  );
};
