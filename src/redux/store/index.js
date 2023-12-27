import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice';
import productsReducer from '../slices/productsSlice';
import myProductsReducer from '../slices/myProductsSlice';

export default configureStore({
    reducer : {
        user: userReducer,
        products: productsReducer,
        myProducts: myProductsReducer,
    }
});