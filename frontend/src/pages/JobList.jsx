import Box from "@mui/material/Box";
import { JobCard } from "../componets/JobCard";
import { Typography } from "@mui/material";
import { SearchBar } from "../componets/ui/searchBar";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";

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
