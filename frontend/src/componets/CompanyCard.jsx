//** Shows Details, content and available Jobs of a Company */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";

export const CompanyCard = ({ companies }) => {
  const theme = useTheme();

  const navigate = useNavigate();
  if (!companies) return navigate("/companies");

  const { companyHandle } = useParams();
  const companyData = companies.find((c) => c.handle === companyHandle);

  if (!companyData) {
    return <p>Company not found</p>;
  }

  const { name, hanlde, description, logoUrl, numEmployees } = companyData;

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
              {name}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {logoUrl ? logoUrl : null}
            </Typography>
            <Typography variant="body2">
              {description}
              <br />
            </Typography>
            <Typography variant="body2">
              {numEmployees}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
