import { useState } from "react";
import { Button } from "@mui/material";

export const ApplyButton = ({ applied, applyJob }) => {
  return (
    <Button
      onClick={applyJob}
      variant="contained"
      color={applied ? "secondary" : "primary"}
      type="submit"
      size="m"
      sx={{
        borderRadius: "50px",
        width: "120px",
        marginTop: "16px",
        fontWeight: "bold",
      }}
    >
      {applied ? "Applied" : "Apply"}
    </Button>
  );
};
