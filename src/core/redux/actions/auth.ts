import {AuthService} from "../../../api/requests/authorization";

export const login = (login: string, password: string) => (dispatch: any) => {
    return AuthService.onHandleSignIn(login, password).then(
        (data) => {
            try {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {user: data.name},
                });
            } catch (e) {
                dispatch({
                    type: "LOGIN_FAIL",
                });
            }
        }
    );
};

export const register = (userName: string, login: string, password: string) => (dispatch: any) => {
    return AuthService.onHandleSignUp(userName, login, password).then(
        (data) => {
            try {
                dispatch({
                    type: "REGISTER_SUCCESS",
                    payload: {user: data.name},
                });
            } catch (e) {
                dispatch({
                    type: "REGISTER_FAIL",
                });
            }
        }
    );
};