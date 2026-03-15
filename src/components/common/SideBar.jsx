import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  DashboardOutlined,
  PeopleOutlined,
  EventNoteOutlined,
  LocalPharmacy,
  ReceiptLongOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardOutlined />, path: "/dashboard" },
  { text: "Appointments", icon: <EventNoteOutlined />, path: "/appointments" },
  { text: "Patients", icon: <PeopleOutlined />, path: "/patients" },
  { text: "Pharmacy", icon: <LocalPharmacy />, path: "/pharmacy" },
  { text: "Billing", icon: <ReceiptLongOutlined />, path: "/billing" },
  { text: "Settings", icon: <SettingsOutlined />, path: "/settings" },
];

export default function SideBar({ mobileOpen, handleDrawerToggle }) {

  const navigate = useNavigate();
  const location = useLocation();

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100%",
        bgcolor: "secondary.main",
        color: "#94A3B8",
      }}
    >
      {/* LOGO */}
      <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 1 }}>
        <LocalPharmacy sx={{ color: "white" }} />
        <Typography color="white" fontWeight={700}>
          VG Clinic
        </Typography>
      </Box>

      {/* MENU */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => {

          const active = location.pathname.startsWith(item.path);

          return (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1,
                borderRadius: 2,
                bgcolor: active ? "primary.main" : "transparent",
                color: active ? "#fff" : "#94A3B8",
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}