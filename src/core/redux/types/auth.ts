export enum AuthActionTypes {
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FAIL = "REGISTER_FAIL",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
}

export interface IState {
    user: string | null,
    message: string | null,
}

interface RegisterSuccessAction {
    type: typeof AuthActionTypes.REGISTER_SUCCESS,
    payload: {
        user: string,
    }
}

interface LoginSuccessAction {
    type: typeof AuthActionTypes.LOGIN_SUCCESS,
    payload: {
        user: string,
    }
}

interface RegisterFailAction {
    type: typeof AuthActionTypes.REGISTER_FAIL,
}

interface LoginFailAction {
    type: typeof AuthActionTypes.LOGIN_FAIL,
}

export type AuthAction =
    RegisterSuccessAction
    | RegisterFailAction
    | LoginSuccessAction
    | LoginFailAction;