import { useState, useEffect } from "react";
import JoblyApi from "../utils/api";

/**
 * useCompanyData Hook
 *
 * Fetches and filters company data based on the provided search term.
 * Uses JoblyApi for data fetching and filtering.
 *
 * @param {Object} filter - Contains the search term for filtering companies
 * @param {string} filter.searchTerm - Search term used to filter companies
 * @returns {Object} - Contains companies data and loading state
 *                    - {Array} companies - List of companies based on the filter
 *                    - {boolean} isLoading - Loading state for data fetching
 */

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
