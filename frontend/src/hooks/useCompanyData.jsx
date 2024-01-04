import { useState, useEffect } from "react";

import JoblyApi from "../api";

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

export const useCompanyData = (filter) => {
  const [companies, setCompanies] = useState([]);
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredCompanies = await JoblyApi.getCompanies(filter);
        setCompanies(filteredCompanies);
        setCompaniesLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]);
        setCompaniesLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return { companies, companiesLoading };
};
