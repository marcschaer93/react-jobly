import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect, useContext } from "react";

import JoblyApi from "../api";
import { ApplyButton } from "./ui/ApplyButton";
import { card, cardContainer, cardContent } from "../styles/cardStyles";
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

  const { title, salary, equity, companyName, logoUrl } = jobData;
  const { currentUser, token, setCurrentUser } = useContext(CurrentUserContext);

  const appliedJobIds = currentUser ? currentUser.applications : [""];
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (!appliedJobIds) return;
    const alreadyApplied = appliedJobIds.find((jobId) => jobId === jobData.id);
    if (alreadyApplied) setApplied(true);
  }, [appliedJobIds, jobData.id]);

  const applyJob = async () => {
    if (applied) return;

    try {
      await JoblyApi.applyForJob(jobData.id, token);
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
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2">Job not found</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={cardContainer}>
        <Card sx={card}>
          <CardContent sx={cardContent}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.primary" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              {logoUrl ? logoUrl : null}
            </Typography>

            <Typography variant="body2">
              {salary && <span style={{ fontWeight: "bold" }}>Salary: </span>}
              {salary}
              <br />
            </Typography>
            <Typography variant="body2">
              {equity && <span style={{ fontWeight: "bold" }}>Equity: </span>}
              {equity}
              <br />
            </Typography>
          </CardContent>
          {currentUser ? (
            <Box sx={{ textAlign: "right", mr: "35px", mb: "35px" }}>
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
