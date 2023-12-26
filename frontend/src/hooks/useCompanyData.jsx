import { useState, useEffect } from "react";
import JoblyApi from "../utils/api";

// Custom hook for fetching and filtering companies
export const useCompanyData = (filter) => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchTerm } = filter;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm === "") {
          const allCompanies = await JoblyApi.getAllCompanies();
          setCompanies(allCompanies);
        } else {
          const filteredCompanies = await JoblyApi.filterCompanies(searchTerm);
          setCompanies(filteredCompanies);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return { companies, isLoading };
};
