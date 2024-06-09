// ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";

const ProductPage = () => {
  const { productId } = useParams();

  // Здесь можно выполнить запрос к API, чтобы получить информацию о товаре по его ID
  // Заглушка, пока не реализовано
  const product = {
    id: productId,
    title: "Название товара",
    description: "Описание товара",
    price: "$100",
    image: "https://via.placeholder.com/400",
  };

  return (
    <Container>
      <Typography variant="h4">{product.title}</Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "100%" }}
      />
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h5">{product.price}</Typography>
    </Container>
  );
};

export default ProductPage;
