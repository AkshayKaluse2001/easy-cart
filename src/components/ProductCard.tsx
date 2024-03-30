import { Card, CardContent, Typography, Chip, Rating } from "@mui/material";
import React from "react";
import { Product } from "../store/slices/product.slice";
import ShowMoreText from "react-show-more-text";

export interface ProductProps {
  product: Product;
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;
  return (
    <Card style={{ height: "100%" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "300px", width: "100%" }}
      />

      <CardContent>
        <Chip label={product.category} />
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="h6">${product.price}</Typography>

        <Typography variant="caption">
          <ShowMoreText lines={3}>{product.description}</ShowMoreText>
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <span>Rating </span>
          <Rating name="simple-controlled" value={product.rating.rate} />
        </Typography>
        <Typography>Reviews {product.rating.count}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
