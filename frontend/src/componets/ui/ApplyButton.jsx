import { Button } from "@mui/material";

/**
 * ApplyButton Component
 *
 * Renders a button for job application with dynamic text based on application status.
 * Changes button color and text based on whether the job has been applied for.
 *
 * @param {boolean} applied - Indicates if the job has been applied for
 * @param {Function} applyJob - Function to handle job application
 * @returns {JSX.Element} - Button for job application
 */

export const ApplyButton = ({ applied, applyJob }) => {
  return (
    <Button
      onClick={applyJob}
      variant="contained"
      color={applied ? "secondary" : "primary"}
      type="submit"
      size="small"
      sx={{
        borderRadius: "8px",
        width: "120px",
        fontWeight: "600",
      }}
    >
      {applied ? "Applied" : "Apply"}
    </Button>
  );
};
