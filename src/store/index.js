import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import cardReducer from './cardSlice';
import inputReducer from './inputSlice'
export default configureStore({
    reducer : {
        user: userReducer,
        card: cardReducer,
        username: inputReducer
    }
});