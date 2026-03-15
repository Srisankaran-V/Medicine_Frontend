import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import PharmacyNavigation from "../components/pharmacy/PharmacyNavigation";

export default function PharmacyLayout() {
  return (
    <Box>

      {/* pharmacy module navigation */}
      <PharmacyNavigation />

      {/* render inventory/logs/sales */}
      <Outlet />

    </Box>
  );
}