import { Button } from "@mui/material";

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
