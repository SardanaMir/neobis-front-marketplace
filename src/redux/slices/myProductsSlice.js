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
      const { id, newPrice, newTitle, newShortDescription, newDescription } = action.payload;
      const productToUpdate = state.items.find((product) => product.id === id);
      if (productToUpdate) {
        productToUpdate.price = newPrice;
        productToUpdate.title = newTitle;
        productToUpdate.short_description = newShortDescription;
        productToUpdate.description = newDescription;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      console.log(id)
      const index = state.items.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    }
  },
});

export const { addMyStore, updateProduct, removeItem } = myProductsSlice.actions;
export default myProductsSlice.reducer;
export const selectProducts = (state) => state.products.items;
