import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import cardReducer from './cardSlice';
import inputReducer from './inputSlice'
import productsReducer from './productsSlice';

export default configureStore({
    reducer : {
        user: userReducer,
        card: cardReducer,
        username: inputReducer,
        products: productsReducer
    }
});