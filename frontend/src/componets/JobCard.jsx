import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { ApplyButton } from "./ui/ApplyButton";

import { useNavigate, useParams } from "react-router-dom";

export const JobCard = ({ jobData }) => {
  const theme = useTheme();

  if (!jobData) {
    return <p>Job not found</p>;
  }

  const { title, salary, equity, company_handle } = jobData;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Card sx={{ width: "70vW" }}>
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: "2rem" }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {logoUrl ? logoUrl : null}
            </Typography> */}
            <Typography variant="body2">
              {salary}
              <br />
            </Typography>
            <Typography variant="body2">
              {equity}
              <br />
            </Typography>
          </CardContent>
          <ApplyButton />
        </Card>
      </Box>
    </>
  );
};
