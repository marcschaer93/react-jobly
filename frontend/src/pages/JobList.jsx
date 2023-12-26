import Box from "@mui/material/Box";
import { JobCard } from "../componets/JobCard";
import { Typography } from "@mui/material";
import { SearchBar } from "../componets/ui/searchBar";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";

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

export const JobList = ({ jobs, filter }) => {
  const navigate = useNavigate();
  // if (!jobs) return navigate("/jobs");

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filter({ searchTerm });
  }, [searchTerm]);

  console.log("jobs", jobs);

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
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />

      {jobs && jobs.length > 0 ? (
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            listStyle: "none",
          }}
        >
          {jobs.map((j) => (
            <Box component="li" key={j.id}>
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
