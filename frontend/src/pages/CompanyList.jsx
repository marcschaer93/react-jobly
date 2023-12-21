import Box from "@mui/material/Box";

import { CompanyOverview } from "../componets/CompanyOverview";
import { SearchBar } from "../componets/ui/searchBar";
import { useState, useEffect } from "react";

export const CompanyList = ({ companies, filter }) => {
  const [searchTerm, setSearchterm] = useState("");

  const handleChange = (e) => {
    setSearchterm(e.target.value);
  };

  useEffect(() => {
    filter({ searchTerm });
  }, [searchTerm]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <h1>Company List</h1>

      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />

      {companies && companies.length > 0 ? (
        <Box component="ul" sx={{ listStyle: "none" }}>
          {companies.map((c) => (
            <Box component="li" key={c.handle}>
              <CompanyOverview companyData={c} />
            </Box>
          ))}
        </Box>
      ) : (
        <p>No companies available</p>
      )}
    </Box>
  );
};
