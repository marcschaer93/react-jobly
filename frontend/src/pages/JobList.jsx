import Box from "@mui/material/Box";
import { JobCard } from "../componets/JobCard";
import { useNavigate } from "react-router-dom";

/* Shows a List with all Jobs
 *
 * - SearchBar on Top
 *
 * Props: jobs
 *
 * State:
 * -
 * -
 * -
 *
 */

export const JobList = ({ jobs }) => {
  const navigate = useNavigate();

  if (!jobs) return navigate("/jobs");

  return (
    <Box>
      <h1>Job List</h1>
      {jobs && jobs.length > 0 ? (
        <Box component="ul" sx={{ listStyle: "none" }}>
          {jobs.map((j) => (
            <Box
              component="li"
              sx={{
                // display: "flex",
                // alignItems: "center",
                gap: "30px",
                marginBottom: "10px",
              }}
              key={j.title}
            >
              {<JobCard jobData={j} />}
            </Box>
          ))}
        </Box>
      ) : (
        <p>No jobs available</p>
      )}
    </Box>
  );
};
