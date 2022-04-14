import HTTP from "./instanceAxios";

export const AxiosInterceptorsSetup = (navigate: any) => {
    HTTP.interceptors.response.use(
        async (response) => {
            HTTP.defaults.headers.common['Authorization'] = `Bearer ${response.data.token || localStorage.getItem('token')}`;
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