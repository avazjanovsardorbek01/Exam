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
import AssignmentIcon from "@mui/icons-material/Assignment";

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
          backgroundColor: "#4726A2", // Updated color
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
        <ListItem button component={Link} to="/product/1">
          <ListItemIcon sx={{ color: "#fff" }}>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Single Page" />
        </ListItem>
        <ListItem button component={Link} to="/cards">
          <ListItemIcon sx={{ color: "#fff" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Cards" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
