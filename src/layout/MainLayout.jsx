import React, { useState } from "react";
import NavBar from "../components/common/NavBar";
import SideBar from "../components/common/SideBar";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

export default function MainLayout() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Content */}
      <Box
        sx={{
          flexGrow: 1,
          ml: { sm: `${drawerWidth}px` },   // 👈 reserve sidebar space on desktop
          width: "100%",
        }}
      >

        <NavBar handleDrawerToggle={handleDrawerToggle} />

        <Box
          component="main"
          sx={{
            px: { xs: 2, sm: 3 },
            py: 3,
            minHeight: "100vh",
            bgcolor: "background.default",
            overflowX: "hidden",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>

      </Box>

    </Box>
  );
}