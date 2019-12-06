export const GETRECOM_REQUEST = "GETREOM_REQUEST";
export const GETRECOM_SUCCESS = "GETRECOM_SUCCESS";
export const GETRECOM_FAIL = "GETRECOM_FAIL";

export const requestRecom = data => ({
    type: "GETREOM_REQUEST"
});
export const successRecom = data => ({
    type: "GETRECOM_SUCCESS",
    payload: data
});
export const failRecom = () => ({
    type: "GETRECOM_FAIL"
});
