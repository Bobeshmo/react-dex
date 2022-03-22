import HTTP from "./instanceAxios";

export const AxiosInterceptorsSetup = (navigate: any) => {
    HTTP.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );
};