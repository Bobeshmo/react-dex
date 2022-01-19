const initialState = {
    message: null,
    user: null
}

export function auth(state = initialState, action: any) {
    const {type, payload} = action

    switch (type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: payload.user,
                message: null
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                user: null,
                message: "User with the same login already exists"
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: payload.user,
                message: null
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                user: null,
                message: "User with the specified username / password was not found."
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                message: null
            };
        default:
            return state;
    }
}