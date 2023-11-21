import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import cardReducer from './cardSlice';

export default configureStore({
    reducer : {
        // user: userReducer,
        card: cardReducer,

    }
});