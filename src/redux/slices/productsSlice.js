import { createSlice } from '@reduxjs/toolkit';

const initialState={
  items: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
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
    updateLikeStatus: (state, action) =>{
      const {id, likeStatus} = action.payload;
      const productToUpdate = state.items.find((product) => product.id === id);
      if (productToUpdate) {
        productToUpdate.likeStatus = likeStatus;
      }
    }
  },
});

export const { addProducts, updateProduct, updateLikeStatus } = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state) => state.products.items;
