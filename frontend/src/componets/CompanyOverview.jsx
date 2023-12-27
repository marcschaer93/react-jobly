import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cardAnimated, cardContainer, cardContent } from "../styles/cardStyles";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Company Overview component used as list elements in CompanyList.
 *
 * @param {Object} companyData - Company data object containing details.
 * @returns {JSX.Element} - Displays company name, description, and a 'Learn More' button.
 */

export const CompanyOverview = ({ companyData }) => {
  const theme = useTheme();

  const { name, description, logoUrl, handle } = companyData;

  return (
    <Box sx={cardContainer}>
      <Link to={`/companies/${handle}`} style={{ textDecoration: "none" }}>
        <Card sx={cardAnimated}>
          <CardContent sx={cardContent}>
            <Typography
              sx={{ fontSize: "2rem" }}
              color="text.secondary"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {logoUrl ? logoUrl : null}
            </Typography>
            <Typography variant="body2">
              {description}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};
