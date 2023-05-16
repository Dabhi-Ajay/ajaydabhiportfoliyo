import { useMemo } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { profile, profileEdit } from "../../../redux/services/ProfileServices";

const getProfileDetail = () => {
    let profileDetails = localStorage.getItem("Profile");
    if (profileDetails && profileDetails !== 'undefined') {
        return JSON.parse(profileDetails)
    } else {
        return null
    }
}

const initialState = {
    profileDetails: localStorage.getItem("Profile") ? getProfileDetail() : {},
};

export const getProfileDetails = createAsyncThunk(
    "Profile/getProfile",
    async () => {
        return await profile();
    }
);

export const addProfileImage = createAsyncThunk(
    "profile/profilePic",
    async (payload) => {
        return await profileEdit(payload);
    }
)

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileDetails.fulfilled, (state, action) => {
            state.profileDetails = action?.payload?.data?.Data;
        });
        builder.addCase(addProfileImage.fulfilled, (state, action) => {
            state.profileDetails = action?.payload?.data?.Data;
        })
    }
})

export default profileSlice.reducer;

export const selectDetails = (state) => state.profile.profileDetails;

export const useProfileDetails = () => {
    const profileDetails = useSelector(selectDetails);
    localStorage.setItem("Profile", profileDetails ? JSON.stringify(profileDetails) : undefined);
    return useMemo(() => profileDetails, [profileDetails]);
}