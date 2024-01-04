import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { registerOptions } from "../../utils/registrOptions";

/**
 * FormInputText Component
 *
 * Renders a text input field within a form, using the react-hook-form Controller for controlled input handling.
 *
 * @param {string} name - The name of the input field.
 * @param {object} control - The control object from react-hook-form.
 * @param {string} label - The label for the input field.
 * @param {object} errors - The errors object containing validation errors.
 * @param {boolean} [disabled=false] - Determines if the input field is disabled or not.
 * @returns {JSX.Element} - A text input field with controlled behavior, following the provided input configurations.
 */

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
        />
      )}
    />
  );
};
