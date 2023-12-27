import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import { JobCard } from "./JobCard";
import { cardContent, cardSmall, card } from "../styles/cardStyles";

/**
 * Renders a Company Card displaying Company Details and available Jobs.
 * Redirects to the Company List if the company is not found.
 *
 * @param {Object[]} companies - List of company data objects.
 * @param {Object[]} jobs - List of job data objects.
 * @returns {JSX.Element} - Company details and job information in a card format.
 */

export const CompanyCard = ({ companies, jobs }) => {
  const theme = useTheme();

  const navigate = useNavigate();
  if (!companies) return navigate("/companies");

  const { companyHandle } = useParams();
  const companyData = companies.find((c) => c.handle === companyHandle);

  if (!companyData) {
    return <p>Company not found</p>;
  }

  const { name, description, logoUrl, numEmployees, handle } = companyData;
  const companyJobs = jobs.filter((j) => j.companyHandle === handle);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          width: "100%",
        }}
      >
        <Card sx={card}>
          <CardContent sx={cardContent}>
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
          <Box>
            {companyJobs && companyJobs.length > 0 ? (
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                  width: "60vW",
                }}
              >
                {companyJobs.map((j) => (
                  <Box component="li" key={j.id}>
                    {<JobCard jobData={j} />}
                  </Box>
                ))}
              </Box>
            ) : (
              <p>No jobs available</p>
            )}
          </Box>
        </Card>
      </Box>
    </>
  );
};
