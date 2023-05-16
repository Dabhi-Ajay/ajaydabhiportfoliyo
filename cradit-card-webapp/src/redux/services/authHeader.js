const getDefaultUser = () => {
    let user = localStorage.getItem("user");
    return (user && user !== undefined) ? JSON.parse(user) : {};
}

const authHeader = () => {
    let user = getDefaultUser();
    if (user && user?.token) {
        return { Authorization: `Bearer ${user?.token}` };
    }
    else {
        return {};
    }
}

export default authHeader;

export const imageHeader = () => {
    let user = getDefaultUser();
    if (user && user?.token) {
        return {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "multipart/form-data",
        }
    } else {
        return {};
    }
}