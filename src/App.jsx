import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cards from "./components/Cards";
import theme from "./Theme";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
          />
          <Sidebar sidebarToggle={sidebarToggle} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              transition: "margin 0.3s",
              marginLeft: sidebarToggle ? 0 : "240px",
              padding: 3,
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cards" element={<Cards />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
