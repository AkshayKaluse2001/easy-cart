import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProducts } from "../store/slices/product.slice";

const Products = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Grid container spacing={4}>
      {products.map((product) => {
        return (
          <Grid item sm={12} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
