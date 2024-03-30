import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getCategories,
  getProducts,
  Product,
} from "../store/slices/product.slice";

const Products = () => {
  const dispatch = useAppDispatch();

  const { products, categories } = useAppSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Grid container sx={{ mb: "2rem" }}>
        <Grid item xs={12} md={4}>
          <Select
            size="small"
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category: string) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {products.map((product: Product) => {
          return (
            <Grid item sm={12} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
