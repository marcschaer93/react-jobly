import { useState } from "react";
import { Button } from "@mui/material";

export const ApplyButton = () => {
  const [applied, setApplied] = useState(false);

  const toggleStatus = () => {
    setApplied((status) => !status);
  };

  return (
    <Button
      // component={Link}
      // to="/login"
      onClick={toggleStatus}
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
