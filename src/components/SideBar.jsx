import React from 'react';
import { 
  Box, Drawer, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Typography, useTheme, useMediaQuery 
} from '@mui/material';
import { 
  DashboardOutlined, LocalPharmacy, PeopleOutlined 
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  
  // Now we use this to trigger the 'onClose' only when screen is small
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlined />, active: true },
    { text: 'Pharmacy', icon: <LocalPharmacy />},
    { text: 'Patients', icon: <PeopleOutlined /> },
  ];

  const drawerContent = (
    <Box sx={{ bgcolor: '#1E1B4B', height: '100%', color: '#94A3B8' }}>
      {/* BRANDING SECTION */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: 'white' }}>
        <Box sx={{ bgcolor: '#4338CA', p: 0.5, borderRadius: 1, display: 'flex' }}>
          <LocalPharmacy sx={{ fontSize: 24 }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>VG Clinic</Typography>
      </Box>

      {/* NAVIGATION */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              // USE CASE FOR ISMOBILE: Auto-close menu on mobile after clicking
              onClick={() => isMobile && handleDrawerToggle()}
              sx={{ 
                borderRadius: 2, 
                color: item.active ? 'white' : 'inherit', 
                bgcolor: item.active ? '#0D9488' : 'transparent',
                '&:hover': {
                    bgcolor: item.active ? '#0D9488' : 'rgba(255,255,255,0.05)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontWeight: item.active ? 600 : 400 }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      {/* MOBILE DRAWER (Temporary) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} 
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            border: 'none',
            bgcolor: '#1E1B4B' // Added to ensure mobile matches desktop color
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP DRAWER (Permanent) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            bgcolor: '#1E1B4B', 
            border: 'none' 
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;