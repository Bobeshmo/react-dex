const initialState = {
    user: null
}

export function auth(state = initialState, action: any) {
    const {type, payload} = action

    switch (type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: payload.user,
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                user: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: payload.user,
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                user: null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}