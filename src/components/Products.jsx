// Products.jsx
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom"; // Добавленный импорт

const ProductsContainer = styled(Grid)(({ theme }) => ({
  padding: "0 16px",
  marginLeft: "-150px",
  marginRight: "0px",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  height: 160,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StyledTypography = styled(Typography)({
  fontFamily: "Roboto, sans-serif",
});

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductsContainer
      container
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <StyledCard component={Link} to={`/product/${product.id}`}>
            {" "}
            {/* Исправленный компонент Link */}
            <StyledCardMedia image={product.image} alt={product.title} />
            <StyledCardContent>
              <StyledTypography gutterBottom variant="h5" component="div">
                {product.title}
              </StyledTypography>
              <StyledTypography variant="body2" color="text.secondary">
                {product.description}
              </StyledTypography>
              <StyledTypography variant="h6" color="text.primary">
                ${product.price}
              </StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </ProductsContainer>
  );
};

export default Products;
