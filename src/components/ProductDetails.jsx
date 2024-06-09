import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const ProductDetailsContainer = styled(Grid)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "-100px", // Добавлено смещение, чтобы компонент был близко к Sidebar
  [theme.breakpoints.down("md")]: {
    marginLeft: "0", // Сбрасываем смещение для мобильных устройств
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: "80%",
  display: "flex",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  padding: "20px",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "auto",
  borderRadius: "10px 0 0 10px",
});

const StyledTypographyTitle = styled(Typography)({
  fontFamily: "Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333333",
  marginBottom: "10px",
});

const StyledTypographyDescription = styled(Typography)({
  fontFamily: "Roboto, sans-serif",
  fontSize: "18px",
  color: "#333333",
});

const StyledTypographyPrice = styled(Typography)({
  fontFamily: "Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#EA2027",
  marginTop: "20px",
});

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductDetailsContainer container>
      <StyledCard>
        <StyledCardMedia image={product.image} alt={product.title} />
        <StyledCardContent>
          <StyledTypographyTitle>{product.title}</StyledTypographyTitle>
          <StyledTypographyDescription>
            {product.description}
          </StyledTypographyDescription>
          <StyledTypographyPrice>${product.price}</StyledTypographyPrice>
        </StyledCardContent>
      </StyledCard>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
