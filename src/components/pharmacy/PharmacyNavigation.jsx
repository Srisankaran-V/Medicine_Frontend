import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function PharmacyNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const current =
    location.pathname.includes("logs")
      ? "logs"
      : location.pathname.includes("sales")
      ? "sales"
      : "inventory";

  const handleChange = (_, value) => {
    navigate(`/pharmacy/${value}`);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Tabs value={current} onChange={handleChange}>
        <Tab label="Inventory" value="inventory" />
        <Tab label="Logs" value="logs" />
        <Tab label="Sales" value="sales" />
      </Tabs>
    </Box>
  );
}