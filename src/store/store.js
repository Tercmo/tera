import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import celReducer from "../slices/celSlices";


export default configureStore({
    reducer: {
        auth: authReducer,
        cel: celReducer

    }
})