import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        saveUserData(state, action){
            state.user.push({
                username : action.payload.username,
                password : action.payload.password
            })
        },
    },

});

export const {saveUserData} = userSlice.actions;
export default userSlice.reducer;