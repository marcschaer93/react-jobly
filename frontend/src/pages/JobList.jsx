import Box from "@mui/material/Box";
import { JobCard } from "../componets/JobCard";
import { Typography } from "@mui/material";
import { SearchBar } from "../componets/ui/SearchBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";
import { ViewMoreButton } from "../componets/ui/ViewMoreButton";
import { SalarySelect } from "../componets/form/SalarySelect";

/**
 * JobList Component
 *
 * Displays a list of jobs and includes a search bar to filter jobs by a search term.
 *
 * Props:
 * - jobs: Array of job objects
 * - filter: Function to handle filtering jobs
 *
 * State:
 * - searchTerm: String representing the search term
 *
 * @returns {JSX.Element} - List of jobs with a search bar
 */

export const JobList = ({ jobs, onFilterChange, jobFilter }) => {
  const [visibleJobs, setVisibleJobs] = useState("");
  const { searchTerm, minSalary, hasEquity } = jobFilter;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedFilter = {
      ...jobFilter,
      [name]: type === `checkbox` ? checked : value,
    };
    onFilterChange(updatedFilter, "jobFilter");
  };

  useEffect(() => {
    if (jobs) {
      setVisibleJobs(jobs.slice(0, 10));
    }
  }, [jobs]);

  const handleViewMore = () => {
    if (jobs) {
      const nextJobs = jobs.slice(visibleJobs.length, visibleJobs.length + 10);
      setVisibleJobs((current) => [...current, ...nextJobs]);
    }
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          mt: "25px",
        }}
      >
        <SalarySelect salary={minSalary} handleChange={handleChange} />
        <FormControlLabel
          control={
            <Checkbox
              name="hasEquity"
              onChange={handleChange}
              value={hasEquity}
            />
          }
          label="Equity"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
          pt: "25px",
        }}
      >
        {visibleJobs && visibleJobs.length > 0 ? (
          <>
            <Box
              component="ul"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                listStyle: "none",
              }}
            >
              {visibleJobs.map((j) => (
                <Box component="li" key={j.id}>
                  <JobCard jobData={j} />
                </Box>
              ))}
            </Box>
            <Box>
              <ViewMoreButton handleViewMore={handleViewMore} />
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }} variant="body">
              No jobs available
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
