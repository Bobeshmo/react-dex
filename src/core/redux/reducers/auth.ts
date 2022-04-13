import {AuthAction, AuthActionTypes} from "../types/auth";
import {IState} from "../types/auth";

const initialState: IState = {
    user: null,
    message: null
}

export function auth(state = initialState, action: AuthAction): IState {
    switch (action.type) {
        case AuthActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                message: null
            };
        case AuthActionTypes.REGISTER_FAIL:
            return {
                ...state,
                user: null,
                message: "User with the same login already exists"
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                message: null
            };
        case AuthActionTypes.LOGIN_FAIL:
            return {
                ...state,
                user: null,
                message: "User with the specified username / password was not found"
            };
        default:
            return state;
    }
}