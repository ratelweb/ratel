export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGN_REQUEST = "SIGN_REQUEST";
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SIGN_FAIL = "SIGN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const requestLogin = data => ({
    type: "LOGIN_REQUEST",
    payload: data
});
export const successLogin = data => ({
    type: "LOGIN_SUCCESS",
    payload: data
});
export const failLogin = () => ({
    type: "LOGIN_FAIL"
});

export const requestLogout = () => ({
    type: LOGOUT_REQUEST
});
export const successLogout = () => ({
    type: LOGOUT_SUCCESS
});
export const failLogout = () => ({
    type: LOGOUT_FAIL
});

export const requestSign = data => ({
    type: "SIGN_REQUEST",
    payload: data
});
export const successSign = data => ({
    type: "SIGN_SUCCESS",
    payload: data
});
export const failSign = () => ({
    type: "SIGN_FAIL"
});
