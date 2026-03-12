import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  DashboardOutlined,
  LocalPharmacy,
  PeopleOutlined,
} from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlined />, active: true },
    { text: "Pharmacy", icon: <LocalPharmacy /> },
    { text: "Patients", icon: <PeopleOutlined /> },
  ];

  const drawerContent = (
    <Box
      sx={{
        bgcolor: theme.palette.secondary.main,
        height: "100%",
        color: "#94A3B8",
      }}
    >
      {/* BRAND */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          color: "white",
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.dark,
            p: 0.5,
            borderRadius: 1,
            display: "flex",
          }}
        >
          <LocalPharmacy />
        </Box>

        <Typography variant="h6" fontWeight={700}>
          VG Clinic
        </Typography>
      </Box>

      {/* MENU */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => isMobile && handleDrawerToggle()}
              sx={{
                borderRadius: 2,
                color: item.active ? "#fff" : "#94A3B8",
                bgcolor: item.active
                  ? theme.palette.primary.main
                  : "transparent",
                "&:hover": {
                  bgcolor: item.active
                    ? theme.palette.primary.main
                    : "rgba(255,255,255,0.05)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: item.active ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: theme.palette.secondary.main,
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: theme.palette.secondary.main,
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
