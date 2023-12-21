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

export const AppRoutes = () => {
  const theme = useTheme();
  const [companyFilter, setCompanyFilter] = useState({ searchTerm: "" });

  const { companies, isLoading: companiesLoading } =
    useCompanyData(companyFilter);
  const { jobs, isLoading: jobsLoading } = useJobData();

  const getCompanyFilter = (filter) => {
    setCompanyFilter(filter);
  };

  if (companiesLoading || jobsLoading) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="companies">
        <Route
          index
          element={
            <CompanyList companies={companies} filter={getCompanyFilter} />
          }
        />
        <Route
          path=":companyHandle"
          element={<CompanyCard companies={companies} jobs={jobs} />}
        />
      </Route>

      <Route path="/jobs" element={<JobList jobs={jobs} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
