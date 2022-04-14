import HTTP from "./instanceAxios";

export const AxiosInterceptorsSetup = (navigate: any) => {
    HTTP.interceptors.response.use(
        async (response) => {
            const token = localStorage.getItem('token') || response.data.token;
            HTTP.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return response
        },
        async (error) => {
            if (error.response.status === 401) {
                navigate("/login")
            }
            return Promise.reject(error);
        }
    );
};