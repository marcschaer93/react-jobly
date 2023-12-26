import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { registerOptions } from "../../utils/registrOptions";

/**
 * FormInputUsername Component
 *
 * Renders a text input field specifically for username entry within a form, utilizing the react-hook-form Controller for controlled input handling.
 *
 * @param {string} name - The name of the input field.
 * @param {object} control - The control object from react-hook-form.
 * @param {string} label - The label for the input field.
 * @param {object} errors - The errors object containing validation errors.
 * @returns {JSX.Element} - A text input field for username entry with controlled behavior, adhering to the specified configurations.
 */

export const FormInputUsername = ({ name, control, label, errors }) => {
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
