import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { JobCard } from "./JobCard";

/** Shows Details, content and available Jobs of a Company
 *
 * Props: companies
 *
 * State:
 * - snacks: list of snack data objs -- populated via AJAX call
 * - drinks: same, but for drinks
 * - isLoading: bool, has data loaded yet?
 *
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
  console.log({ companyJobs });

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
          <Box>
            {companyJobs && companyJobs.length > 0 ? (
              <Box component="ul" sx={{ listStyle: "none" }}>
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
