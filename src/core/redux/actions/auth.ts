import {AuthService} from "../../../api/services/authService";
import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../types/auth";

const login = (login: string, password: string) => (dispatch: Dispatch<AuthAction>) => {
    return AuthService.onHandleSignIn(login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: {user: response.data.name},
            });
        }, ((error) => {
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL,
            });
        })
    );
};

const register = (userName: string, login: string, password: string) => (dispatch: Dispatch<AuthAction>) => {
    return AuthService.onHandleSignUp(userName, login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS,
                payload: {user: response.data.name},
            });
        }, ((error) => {
            dispatch({
                type: AuthActionTypes.REGISTER_FAIL,
            });
        })
    );
};

export {
    login,
    register
}