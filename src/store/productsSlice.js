import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    addProducts: (state, action) => {
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

export const { addProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state) => state.products.items;
