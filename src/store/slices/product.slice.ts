import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductState {
  //   products: Array<number>;
  products: Product[];
  categories: string[];
  loader: boolean;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  loader: false,
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "product/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getProducts
    builder.addCase(getProducts.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loader = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loader = false;
    });

    //getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = ["All", ...payload];
      state.loader = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loader = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
