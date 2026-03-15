import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Badge,
  IconButton,
  Avatar,
  Collapse,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  Search,
  Add,
  NotificationsNone,
  Menu as MenuIcon,
  Close,
  MoreVert,
} from "@mui/icons-material";

// const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle, searchMessage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "background.paper",
          color: "text.primary",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      > */}
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 70 }}>
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" fontWeight={700}>
              {isMobile ? "Clinic" : "VG Clinic Management"}
            </Typography>
          </Box>

          {/* SEARCH (DESKTOP) */}
          {!isMobile && (
            <TextField
              placeholder={searchMessage || "Search patients, drugs..."}
              size="small"
              sx={{ width: { sm: 200, md: 350 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              }}
            />
          )}

          {/* RIGHT SECTION */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile ? (
              <>
                {/* MOBILE SEARCH ICON */}
                <IconButton onClick={() => setShowMobileSearch(!showMobileSearch)}>
                  {showMobileSearch ? <Close /> : <Search />}
                </IconButton>

                {/* MOBILE MENU */}
                <IconButton onClick={handleMenuOpen}>
                  <MoreVert />
                </IconButton>
              </>
            ) : (
              <>
                <Button startIcon={<Add />}>
                  {!isTablet && "Quick Action"}
                </Button>

                <IconButton>
                  <Badge variant="dot" color="error">
                    <NotificationsNone />
                  </Badge>
                </IconButton>

                <Avatar sx={{ bgcolor: "primary.main" }}>S</Avatar>
              </>
            )}
          </Box>
        </Toolbar>

        {/* MOBILE SEARCH */}
        <Collapse in={showMobileSearch}>
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              placeholder="Search..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Collapse>
      </AppBar>

      {/* MOBILE MENU */}
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Add sx={{ mr: 1 }} />
          Quick Action
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <NotificationsNone sx={{ mr: 1 }} />
          Notifications
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <Avatar sx={{ width: 24, height: 24, mr: 1 }}>S</Avatar>
          Profile
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;