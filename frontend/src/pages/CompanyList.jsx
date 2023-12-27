import Box from "@mui/material/Box";

import { CompanyOverview } from "../componets/CompanyOverview";
import { SearchBar } from "../componets/ui/searchBar";
import { useState, useEffect } from "react";
import { ViewMoreButton } from "../componets/ui/ViewMoreButton";
import { Typography } from "@mui/material";

/**
 * CompanyList Component
 *
 * Renders a list of companies along with a search bar to filter companies.
 *
 * @param {Object[]} companies - List of company data
 * @param {Function} filter - Function to filter companies based on search term
 * @returns {JSX.Element} - Company list along with search bar for filtering
 */

export const CompanyList = ({ companies, onFilterChange, companyFilter }) => {
  const [visibleCompanies, setVisibleCompanies] = useState([]);
  const { searchTerm } = companyFilter;

  const handleChange = (e) => {
    const { value, name } = e.target;
    const updatedFilter = {
      ...companyFilter,
      [name]: value,
    };

    onFilterChange(updatedFilter, "companies");
  };

  useEffect(() => {
    if (companies) {
      setVisibleCompanies(companies.slice(0, 10));
    }
  }, [companies]);

  const handleViewMore = () => {
    if (companies) {
      const nextCompanies = companies.slice(
        visibleCompanies.length,
        visibleCompanies.length + 10
      );
      setVisibleCompanies((current) => [...current, ...nextCompanies]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      {visibleCompanies && visibleCompanies.length > 0 ? (
        <>
          <Box component="ul" sx={{ listStyle: "none" }}>
            {visibleCompanies.map((c) => (
              <Box component="li" key={c.handle}>
                <CompanyOverview companyData={c} />
              </Box>
            ))}
          </Box>
          <ViewMoreButton handleViewMore={handleViewMore} />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }} variant="body">
            No companies available
          </Typography>
        </Box>
      )}
    </Box>
  );
};
