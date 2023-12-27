import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { JobList } from "../pages/JobList";
import { Profile } from "../pages/Profile";
import { CompanyList } from "../pages/CompanyList";
import { CompanyCard } from "./CompanyCard";
import { useCompanyData } from "../hooks/useCompanyData";
import { useJobData } from "../hooks/useJobData";

/**
 * AppRoutes Component
 *
 * Handles routing/navigation and renders pages based on URL paths.
 * Employs useCompanyData and useJobData hooks to manage company and job data.
 * Manages filters for companies and jobs, currently based on searchTerm.
 * This component efficiently manages loading states for companies and jobs before rendering.
 *
 * @returns {JSX.Element} - Routes to different pages based on URL paths with dynamic data retrieval.
 */

export const AppRoutes = () => {
  const theme = useTheme();
  /* Get filtered Job and Company Data. 
  Now, it's just filtered by searchTerm, but I added the filter state to make it easier, to add other filters later */
  const [companyFilter, setCompanyFilter] = useState({ searchTerm: "" });
  const [jobFilter, setJobFilter] = useState({
    searchTerm: "",
    minSalary: "",
    hasEquity: false,
  });
  // const [jobFilter, setJobFilter] = useState(null);

  const { companies, isLoading: companiesLoading } =
    useCompanyData(companyFilter);

  const { jobs, isLoading: jobsLoading } = useJobData(jobFilter);

  const getCompanyFilter = (filter) => {
    setCompanyFilter(filter);
  };

  const getJobFilter = (filter) => {
    setJobFilter(filter);
  };

  if (companiesLoading || jobsLoading) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:formType" element={<Login />} />
      <Route path="companies">
        <Route
          index
          element={
            <CompanyList
              companies={companies}
              filterCompanies={getCompanyFilter}
            />
          }
        />
        <Route
          path=":companyHandle"
          element={<CompanyCard companies={companies} jobs={jobs} />}
        />
      </Route>
      <Route
        path="/jobs"
        element={<JobList jobs={jobs} filterJobs={getJobFilter} />}
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
