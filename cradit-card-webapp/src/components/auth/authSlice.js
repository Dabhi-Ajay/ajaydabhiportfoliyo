import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { logIn, register, verificationOtp, ForgotPassword, Resetpassword, ChangePassword } from "../../redux/services/authServices";

const getDefaultUser = () => {
    let user = localStorage.getItem("user");
    if (user && user !== "undefined") {
        return JSON.parse(user);
    } else {
        return null;
    }
};

const initialState = {
    user: localStorage.getItem("user") ? getDefaultUser() : {},
    key: "",
};

export const registration = createAsyncThunk(
    "auth/register",
    async (payload) => {
        return await register(payload);
    });

export const otpVerify = createAsyncThunk(
    "auth/otp",
    async (payload) => {
        return await verificationOtp(payload);
    }
)

export const logInUser = createAsyncThunk(
    "auth/login",
    async (payload) => {
        return await logIn(payload);
    }
)

export const forgotpassword = createAsyncThunk(
    "auth/forgotpassword",
    async (payload) => {
        return await ForgotPassword(payload);
    }
)

export const resetpassword = createAsyncThunk(
    "user/resetpassword",
    async (payload) => {
        return await Resetpassword(payload);
    }
)

export const changepassword = createAsyncThunk(
    "user/changespassword",
    async (payload) => {
        return await ChangePassword(payload);
    }
)

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        removeToken: (state, action) => {
            localStorage.clear();
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {
            state.key = action?.payload?.data?.Data?.key;
        });
        builder.addCase(logInUser.fulfilled, (state, action) => {
            let user = action?.payload?.data?.Data;
            state.user = user ? user : {};
        });
        builder.addCase(forgotpassword.fulfilled, (state, action) => {
            state.key = action?.payload?.data?.Data?.key;
        })
    }
})
export const { removeToken } = authSlice.actions;

export default authSlice.reducer;


export const selectUser = (state) => state.auth.user;

export const useUser = () => {
    const user = useSelector(selectUser);
    localStorage.setItem("user", user ? JSON.stringify(user) : undefined);
    return useMemo(() => ({ user }), [user]);
};

export const selectKey = (state) => state.auth.key;

export const useKey = () => {
    const key = useSelector(selectKey);
    return useMemo(() => ({ key }), [key]);
};
