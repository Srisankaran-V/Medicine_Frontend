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
  useTheme,
  useMediaQuery,
  Collapse,
} from "@mui/material";

import {
  Search,
  Add,
  NotificationsNone,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle, searchMessage }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
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
            {isMobile ? "Pharmacy" : "Pharmacy Inventory"}
          </Typography>
        </Box>

        {/* SEARCH */}
        {!isMobile && (
          <TextField
            placeholder={searchMessage || "Search..."}
            size="small"
            sx={{
              width: { sm: 200, md: 350 },
              "& .MuiOutlinedInput-root": {
                bgcolor: theme.palette.background.default,
                borderRadius: 2,
                "& fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: theme.palette.text.secondary }} />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isMobile && (
            <IconButton onClick={() => setShowMobileSearch(!showMobileSearch)}>
              {showMobileSearch ? <Close /> : <Search />}
            </IconButton>
          )}

          <Button
            variant="outlined"
            startIcon={<Add />}
            sx={{
              borderRadius: 2,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.light,
              bgcolor: theme.palette.primary.light,
            }}
          >
            {!isTablet && "Quick Action"}
          </Button>

          <IconButton>
            <Badge variant="dot" color="error">
              <NotificationsNone sx={{ color: theme.palette.text.secondary }} />
            </Badge>
          </IconButton>

          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>S</Avatar>
        </Box>
      </Toolbar>

      {/* MOBILE SEARCH */}
      <Collapse in={showMobileSearch}>
        <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <TextField
            fullWidth
            placeholder="Search drugs..."
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: theme.palette.background.default,
                borderRadius: 2,
                "& fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: theme.palette.primary.main }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Collapse>
    </AppBar>
  );
};

export default Navbar;
