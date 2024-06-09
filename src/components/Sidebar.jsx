import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Sidebar = ({ sidebarToggle }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      open={!sidebarToggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#333",
          color: "#fff",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/products">
          <ListItemIcon sx={{ color: "#fff" }}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        {/* Добавляем ссылку на страницу SinglePage */}
        <ListItem button component={Link} to="/product/1">
          <ListItemIcon sx={{ color: "#fff" }}>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Single Page" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
