import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect, useContext } from "react";

import JoblyApi from "../utils/api";
import { ApplyButton } from "./ui/ApplyButton";
import { CurrentUserContext } from "../utils/UserContext";

/**
 * JobCard Component
 *
 * Renders job details and handles the application process for a specific job.
 * Utilizes context, API requests, and state for handling job application status.
 *
 * @param {object} jobData - The data object containing job details.
 * @returns {JSX.Element} - Card displaying job details and an apply button.
 */

export const JobCard = ({ jobData }) => {
  const theme = useTheme();

  const { currentUser, userToken, setCurrentUser } =
    useContext(CurrentUserContext);

  const appliedJobIds = currentUser ? currentUser.applications : [""];

  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const alreadyApplied = appliedJobIds.find((jobId) => jobId === jobData.id);
    if (alreadyApplied) setApplied(true);
  }, [appliedJobIds, jobData.id]);

  const applyJob = async () => {
    if (applied) return;

    try {
      await JoblyApi.applyForJob(jobData.id, userToken);
    } catch (error) {
      console.error("Error applying for job:", error);
    }
    setApplied(true);
    setCurrentUser((prevData) => ({
      ...prevData,
      applications: [...(prevData.applications || []), jobData.id],
    }));
  };

  if (!jobData) {
    return <p>Job not found</p>;
  }

  const { title, salary, equity, companyName } = jobData;

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
        <Card sx={{ width: "50vW" }}>
          {" "}
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.primary" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {logoUrl ? logoUrl : null}
            </Typography> */}
            <Typography variant="body2">
              {salary ? (
                <div>
                  <span style={{ fontWeight: "bold" }}>Salary:</span>{" "}
                  {`${salary}`}
                </div>
              ) : (
                ""
              )}
              <br />
            </Typography>
            <Typography variant="body2">
              {equity ? (
                <div>
                  <span style={{ fontWeight: "bold" }}>Equity:</span>{" "}
                  {`${equity}`}
                </div>
              ) : (
                ""
              )}
              <br />
            </Typography>
          </CardContent>
          {currentUser ? (
            <Box sx={{ textAlign: "right", mr: "25px", mb: "25px" }}>
              <ApplyButton applyJob={applyJob} applied={applied} />
            </Box>
          ) : (
            ""
          )}
        </Card>
      </Box>
    </>
  );
};
