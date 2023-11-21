import {createSlice} from '@reduxjs/toolkit';
import mystore from '../mystore.json';

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        card: []
    },
    reducers: {
        handleProductCard(state, action){
            for(let i = 0; i < mystore.length; i++){
              if (mystore[i].id === action.payload.id){
                state.card.push(mystore[i]) 
              }
            }
        },
    },
});

export const {handleProductCard, closeProductCard} = cardSlice.actions;

export default cardSlice.reducer;