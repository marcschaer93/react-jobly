import Box from "@mui/material/Box";
import { JobCard } from "../componets/JobCard";
import { Typography } from "@mui/material";
import { SearchBar } from "../componets/ui/searchBar";
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

export const JobList = ({ jobs, filterJobs }) => {
  const navigate = useNavigate();
  // if (!jobs) return navigate("/jobs");
  const [visibleJobs, setVisibleJobs] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [hasEquity, setHasEquity] = useState(false);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setMinSalary(e.target.value);
  };

  useEffect(() => {
    filterJobs({ searchTerm, minSalary, hasEquity });
  }, [searchTerm, minSalary, hasEquity]);

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

  const handleEquityChange = () => {
    setHasEquity((hasEquity) => !hasEquity);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
        pt: "50px",
      }}
    >
      <SearchBar
        searchTerm={searchTerm}
        handleChange={handleSearchTermChange}
      />
      <SalarySelect salary={minSalary} handleChange={handleSalaryChange} />
      <FormControlLabel
        control={<Checkbox onChange={handleEquityChange} value={hasEquity} />}
        label="Equity"
      />

      {visibleJobs && visibleJobs.length > 0 ? (
        <>
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              listStyle: "none",
            }}
          >
            {visibleJobs.map((j) => (
              <Box component="li" key={j.id}>
                {<JobCard jobData={j} />}
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
  );
};

// * - minSalary
// * - hasEquity (true returns only jobs with equity > 0, other values ignored)
