const initialState = {
    user: false,
    sign: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload
            };
        case "LOGIN_FAIL":
            return {
                ...state
            };
        case "LOGOUT_REQUEST":
            return {
                ...state
            };

        case "LOGOUT_SUCCESS":
            return {
                ...state,
                user: false
            };
        case "LOGOUT_FAIL":
            return {
                ...state
            };
        case "SIGN_REQUEST":
            return {
                ...state
            };

        case "SIGN_SUCCESS":
            return {
                ...state,
                sign: action.payload
            };
        case "SIGN_FAIL":
            return {
                ...state
            };
        default:
            return state;
    }
};
export default userReducer;
