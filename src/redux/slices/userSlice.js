import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: null,
    token: null,
    email: null,
    isAuth: false,
    first_name: null,
    last_name: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            if(action.payload.token){
                state.isAuth = true;
            }else{
                state.isAuth = false;
            }
        },
        removeUser(state) {
            state.username = null;
            state.token = null;
            state.email = null;
            state.isAuth = false;
            state.first_name = null;
            state.last_name = null;
        },
    },

});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;