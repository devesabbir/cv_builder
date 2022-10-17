import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     user:{},
     isLogin: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        },

        logout: (state, action) => { 
            state.user = {}
            state.isLogin = false
        }
    }

})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer