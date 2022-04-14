import {AuthService} from "../../../api/services/authService";
import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../types/auth";

const onHandleLogin = (login: string, password: string) => (dispatch: Dispatch<AuthAction>) => {
    return AuthService.onHandleSignIn(login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: {user: response.data.name},
            });
        }, (() => {
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL,
            });
        })
    );
};

const onHandleRegister = (userName: string, login: string, password: string) => (dispatch: Dispatch<AuthAction>) => {
    return AuthService.onHandleSignUp(userName, login, password).then(
        (response) => {
            localStorage.setItem("token", response.data.token)
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS,
                payload: {user: response.data.name},
            });
        }, (() => {
            dispatch({
                type: AuthActionTypes.REGISTER_FAIL,
            });
        })
    );
};

export {
    onHandleLogin,
    onHandleRegister,
}