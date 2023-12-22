import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//запрос в бек, чтобы загрузить к себе продукты
// export const fetchItems = createAsyncThunk(
//     'products/fetchProductsStatus',
//     async (params) => {
//         const { sortBy, order, category, search, currentPage } = params;
//         const {data} = await axios.get(`https://64c688f80a25021fde91bd95.mockapi.io/pizza?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}&${search}`)    
//         return data    
//     }
// )

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
  },
//   extraReducers: (builder) => {
//     builder.addCase(fetchItems.fulfilled, (state, action) => {
//       state.items = action.payload
//     })
// },
});

export const { addProducts, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
export const selectProducts = (state) => state.products.items;
