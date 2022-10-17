import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";


export const rootReducer = combineReducers({
    login: loginSlice,
})