import { Box } from "@mui/material";
import { CompanyDetail } from "./CompanyDetail";
import { CompanyCard } from "./CompanyCard";

export const CompanyList = ({ companies }) => {
  console.log("ccc", companies);
  return (
    <Box>
      <h1>CompanyList</h1>
      {companies && companies.length > 0 ? (
        <ul>
          {companies.map((c) => (
            <li key={c.handle}>
              <CompanyCard companyData={c} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No companies available</p>
      )}
    </Box>
  );
};
