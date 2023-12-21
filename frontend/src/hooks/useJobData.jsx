import { useState, useEffect } from "react";
import JoblyApi from "../utils/api";

// Custom hook for fetching jobs
export const useJobData = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await JoblyApi.getAllJobs();
        setJobs(jobs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { jobs, isLoading };
};
