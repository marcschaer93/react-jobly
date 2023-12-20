import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { JobList } from "./JobList";
import { Profile } from "../pages/Profile";
import { CompanyList } from "../pages/CompanyList";
import { CompanyCard } from "./CompanyCard";

import JoblyApi from "../utils/api";

export const AppRoutes = () => {
  const theme = useTheme();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const allCompanies = await JoblyApi.getAllCompanies();
        setCompanies(allCompanies);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies([]);
      }
    }
    fetchCompanies();
  }, []);

  const filterCompanies = async (searchTerm) => {
    try {
      const filteredCompanies = await JoblyApi.filterCompanies(searchTerm);
      setCompanies([...filteredCompanies]);
    } catch (error) {
      console.error("Error filtering companies:", error);
      setCompanies([]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="companies">
        <Route
          index
          element={
            <CompanyList
              companies={companies}
              filterCompanies={filterCompanies}
            />
          }
        />
        <Route
          path=":companyHandle"
          element={<CompanyCard companies={companies} />}
        />
      </Route>

      <Route path="/jobs" element={<JobList />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
