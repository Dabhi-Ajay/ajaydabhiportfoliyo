import { LOGIN, REGISTER, VERIFICATION_OTP, FORGOT_PASSWORD, RESET_PASSWORD, CHANGE_PASSWORD } from "../../api/constApi";
import { apiInstance } from "./axiosApi";

export const register = (payload) => {
    return apiInstance.post(REGISTER, payload);
}

export const logIn = (payload) => {
    return apiInstance.post(LOGIN, payload);
}


export const verificationOtp = (payload) => {
    return apiInstance.post(VERIFICATION_OTP, payload);
}

export const ForgotPassword = (payload) => {
    return apiInstance.post(FORGOT_PASSWORD, payload);
}

export const Resetpassword = (payload) => {
    return apiInstance.post(RESET_PASSWORD, payload);
}

export const ChangePassword = (payload) => {
    return apiInstance.post(CHANGE_PASSWORD, payload);
}