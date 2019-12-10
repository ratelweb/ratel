export const GETBOOK_REQUEST = "GETBOOK_REQUEST";
export const GETBOOK_SUCCESS = "GETBOOK_SUCCESS";
export const GETBOOK_FAIL = "GETBOOK_FAIL";

export const GETPAPER_REQUEST = "GETPAPER_REQUEST";
export const GETPAPER_SUCCESS = "GETPAPER_SUCCESS";
export const GETPAPER_FAIL = "GETPAPER_FAIL";

export const requestBook = data => ({
    type: "GETBOOK_REQUEST"
});
export const successBook = data => ({
    type: "GETBOOK_SUCCESS",
    payload: data
});
export const failBook = () => ({
    type: "GETBOOK_FAIL"
});

export const requestPaper = data => ({
    type: "GETPAPER_REQUEST"
});
export const successPaper = data => ({
    type: "GETPAPER_SUCCESS",
    payload: data
});
export const failPaper = () => ({
    type: "GETPAPER_FAIL"
});
