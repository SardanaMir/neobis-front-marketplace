import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email:''
}

const inputSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername(state, action){
            state.username = action.payload.username;
            state.email = action.payload.email;

        },
        // setEmail(state, action){
        //     state.email = action.payload.email;
        // }
    },

});

export const {setUsername, setEmail} = inputSlice.actions;
export default inputSlice.reducer;