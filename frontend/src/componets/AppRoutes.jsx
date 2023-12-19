import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { CompanyList } from "./CompanyList";
import { JobList } from "./JobList";
import { CompanyDetail } from "./CompanyDetail";

import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";

import JoblyApi from "../utils/api";

export const AppRoutes = () => {
  const theme = useTheme();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const allCompanies = await JoblyApi.getAllCompanies();
        setCompanies(allCompanies);
        console.log("allCompanies", allCompanies);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]);
      }
    }
    fetchCompanies();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/companies"
        element={<CompanyList companies={companies} />}
      />
      <Route path="/companies/:company" element={<CompanyDetail />} />

      <Route path="/jobs" element={<JobList />} />

      <Route
        path="/profile"
        element={
          <>
            <h1>Edit Profile</h1>
          </>
        }
      />
    </Routes>
  );
};
