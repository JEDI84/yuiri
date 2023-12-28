import authApi from "./index";

export async function login(loginData) {
    const response = await authApi.post("/auth/login", loginData);
    return response.data;
}

export default login; 
