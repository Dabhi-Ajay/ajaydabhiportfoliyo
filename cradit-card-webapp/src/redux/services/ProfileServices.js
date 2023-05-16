import { ADMIN_PROFILE, PROFILE_EDIT } from "../../api/constApi"
import { apiInstance } from "./axiosApi"
import authHeader, { imageHeader } from './authHeader'

export const profile = () => {
    return apiInstance.get(ADMIN_PROFILE, { headers: authHeader() });
}

export const profileEdit = (payload) => {
    return apiInstance.patch(PROFILE_EDIT, payload, { headers: imageHeader() });
}