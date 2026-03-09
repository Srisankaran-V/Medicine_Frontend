import React, { useState } from 'react'; // Added useState
import { 
  AppBar, Toolbar, Box, Typography, TextField, 
  InputAdornment, Button, Badge, IconButton, Avatar,
  useTheme, useMediaQuery, Collapse // Added Collapse for smooth opening
} from '@mui/material';
import { 
  Search, Add, NotificationsNone, Menu as MenuIcon, Close 
} from '@mui/icons-material';

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle, searchMessage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // State to toggle the mobile search bar
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'white',
        color: '#1E293B',
        boxShadow: 'none',
        borderBottom: '1px solid #E2E8F0',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 70 }}>
        
        {/* LEFT: Menu & Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '0.9rem', sm: '1.1rem' },
              whiteSpace: 'nowrap' 
            }}
          >
            {isMobile ? 'Pharmacy' : 'Pharmacy Inventory'}
          </Typography>
        </Box>

        {/* MIDDLE: Desktop Search (Hidden on Mobile) */}
        {!isMobile && (
          <TextField
            placeholder={searchMessage || "Search..."}
            size="small"
            sx={{ 
              width: { sm: 200, md: 350 }, 
              '& .MuiOutlinedInput-root': { 
                bgcolor: '#F1F5F9', 
                borderRadius: 2,
                '& fieldset': { border: 'none' } 
              } 
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#94A3B8', fontSize: 20 }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}

        {/* RIGHT: Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 2 } }}>
          
          {/* MOBILE SEARCH ICON (Only visible on mobile) */}
          {isMobile && (
            <IconButton onClick={() => setShowMobileSearch(!showMobileSearch)}>
              {showMobileSearch ? <Close sx={{ color: '#0D9488' }} /> : <Search sx={{ color: '#64748B' }} />}
            </IconButton>
          )}

          <Button
            variant="outlined"
            startIcon={<Add />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 2,
              color: '#0D9488',
              borderColor: '#CCFBF1',
              bgcolor: '#F0FDFA',
              minWidth: isTablet ? 'auto' : '140px',
              px: isTablet ? 1 : 2
            }}
          >
            {!isTablet && "Quick Action"}
          </Button>

          <IconButton sx={{ color: '#64748B' }}>
            <Badge variant="dot" color="error">
              <NotificationsNone />
            </Badge>
          </IconButton>

          <Avatar sx={{ width: 35, height: 35, bgcolor: '#0D9488' }}>S</Avatar>
        </Box>
      </Toolbar>

      {/* EXPANDABLE MOBILE SEARCH BAR */}
      <Collapse in={showMobileSearch}>
        <Box sx={{ 
          px: 2, 
          pb: 2, 
          display: { xs: 'block', sm: 'none' }, // Only show on mobile
          borderTop: '1px solid #F1F5F9' 
        }}>
          <TextField
            fullWidth
            autoFocus
            placeholder="Search inventory, drugs..."
            size="small"
            sx={{ 
              mt: 1,
              '& .MuiOutlinedInput-root': { 
                bgcolor: '#F1F5F9', 
                borderRadius: 2,
                '& fieldset': { border: 'none' } 
              } 
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#0D9488', fontSize: 20 }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Collapse>
    </AppBar>
  );
};

export default Navbar;