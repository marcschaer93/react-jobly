import { useState, useEffect } from "react";
import JoblyApi from "../utils/api";

// Custom hook for fetching jobs
export const useJobData = (filter) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchTerm } = filter;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm === "") {
          const jobs = await JoblyApi.getAllJobs();
          setJobs(jobs);
        } else {
          const filteredJobs = await JoblyApi.filterJobs(searchTerm);
          console.log("filteredJobs", filteredJobs);
          setJobs(filteredJobs);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [filter]);

  return { jobs, isLoading };
};
