import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
  items: []
};

const myProductsSlice = createSlice({
  name: 'myProducts',
  initialState,
  reducers: {
    addMyStore: (state, action) => {
      state.items = action.payload;
    },
    updateProduct: (state, action) => {
      const { id, newPrice } = action.payload;
      const productToUpdate = state.items.find((product) => product.id === id);
      if (productToUpdate) {
        productToUpdate.price = newPrice;
      }
    },
  },
});

export const { addMyStore, updateProduct } = myProductsSlice.actions;
export default myProductsSlice.reducer;
export const selectProducts = (state) => state.products.items;
