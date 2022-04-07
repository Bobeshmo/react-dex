import {AuthService} from "../../../api/services/authService";
import {AppDispatch} from "../store";

const login = (login: string, password: string) => (dispatch: AppDispatch) => {
    return AuthService.onHandleSignIn(login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {user: response.data.name},
            });
        }, ((error) => {
            dispatch({
                type: "LOGIN_FAIL",
            });
        })
    );
};

const register = (userName: string, login: string, password: string) => (dispatch: AppDispatch) => {
    return AuthService.onHandleSignUp(userName, login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: {user: response.data.name},
            });
        }, ((error) => {
            dispatch({
                type: "REGISTER_FAIL",
            });
        })
    );
};

export {
    login,
    register
}