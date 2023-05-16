import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "../../components/Admin/Slice/ProfileSlice";
import authSlice from "../../components/auth/authSlice"
const combineReducer = combineReducers({
    auth: authSlice,
    profile: ProfileSlice
})

const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(),
});

export default store;