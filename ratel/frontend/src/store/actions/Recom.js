export const GETRECOM_REQUEST = "GETREOM_REQUEST";
export const GETRECOM_SUCCESS = "GETRECOM_SUCCESS";
export const GETRECOM_FAIL = "GETRECOM_FAIL";

export const GETFAVOR_REQUEST = "GETFAVOR_REQUEST";
export const GETFAVOR_SUCCESS = "GETFAVOR_SUCCESS";
export const GETFAVOR_FAIL = "GETFAVOR_FAIL";

export const ADDFAVOR_REQUEST = "ADDFAVOR_REQUEST";
export const ADDFAVOR_SUCCESS = "ADDFAVOR_SUCCESS";
export const ADDFAVOR_FAIL = "ADDFAVOR_FAIL";

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

export const requestGetFavor = data => ({
    type: "GETFAVOR_REQUEST"
});
export const successGetFavor = data => ({
    type: "GETFAVOR_SUCCESS",
    payload: data
});
export const failGetFavor = () => ({
    type: "GETFAVOR_FAIL"
});

export const requestAddFavor = data => ({
    type: "ADDFAVOR_REQUEST"
});
export const successAddFavor = data => ({
    type: "ADDFAVOR_SUCCESS",
    payload: data
});
export const failAddFavor = () => ({
    type: "ADDFAVOR_FAIL"
});
