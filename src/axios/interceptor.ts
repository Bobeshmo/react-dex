import HTTP from "./instanceAxios";

HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const AxiosInterceptorsSetup = (navigate: any) => {
    HTTP.interceptors.response.use(
        async (response) => response,
        async (error) => {
            if (error.response.status === 401) {
                navigate("/login")
            }
            return Promise.reject(error);
        }
    );
};