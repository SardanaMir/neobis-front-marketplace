import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: null,
    token: null,
    email: null,
    isAuth: false,
    firstName: null,
    lastName: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
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
            state.firstName = null;
            state.lastName = null;
        },
    },

});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;