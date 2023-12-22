import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice';
import productsReducer from '../slices/productsSlice';

export default configureStore({
    reducer : {
        user: userReducer,
        products: productsReducer
    }
});