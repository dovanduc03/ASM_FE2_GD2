import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from "@mui/material";
import { AccountCircle, Dashboard, Category, Store, Settings, Logout as LogoutIcon } from "@mui/icons-material";

export default function MainLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#F5F5F5',
            color: '#333'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0E0E0' }}>
          <AccountCircle sx={{ width: 48, height: 48 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">ADMIN</Typography>
            <Typography variant="body2" color="textSecondary">
              <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>View profile</a>
            </Typography>
          </Box>
        </Box>
        <List>
          <ListItem disablePadding>
            <NavLink to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="/admin/products" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <Store />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="/admin/category" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <Category />
                </ListItemIcon>
                <ListItemText primary="Category" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="/admin/ListBill" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon>
                  <Category />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List sx={{ mt: 'auto' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
