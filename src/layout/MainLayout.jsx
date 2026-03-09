import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Box, Toolbar } from '@mui/material';

const drawerWidth = 240;

const MainLayout = ({ children }) => {
  // 1. Create the state to track if the mobile drawer is open
  const [mobileOpen, setMobileOpen] = useState(false);

  // 2. Create the toggle function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* 3. Pass the toggle function to NavBar */}
      <NavBar handleDrawerToggle={handleDrawerToggle} />

      {/* 4. Pass the state AND the function to SideBar */}
      <SideBar 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle} 
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: '#F8FAFC',
          minHeight: '100vh',
          // 5. Ensure the main content shifts correctly on desktop
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar /> 
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;