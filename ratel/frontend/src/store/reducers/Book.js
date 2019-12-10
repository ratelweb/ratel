import { handleActions } from "redux-actions";

const initialState = {
    book: {},
    paper: {}
};

const bookReducer = handleActions(
    {
        GETBOOK_REQUEST: (state, action) => {
            return {
                ...state
            };
        },
        GETBOOK_SUCCESS: (state, action) => {
            return {
                ...state,
                book: action.payload
            };
        },
        GETBOOK_FAIL: (state, action) => {
            return {
                ...state
            };
        },
        GETPAPER_REQUEST: (state, action) => {
            return {
                ...state
            };
        },
        GETPAPER_SUCCESS: (state, action) => {
            return {
                ...state,
                paper: action.payload
            };
        },
        GETPAPER_FAIL: (state, action) => {
            return {
                ...state
            };
        }
    },
    initialState
);
export default bookReducer;
