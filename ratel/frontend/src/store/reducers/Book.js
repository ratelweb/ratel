import { handleActions } from "redux-actions";

const initialState = {
    book: { search: [] },
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
        }

        // case "GETBOOK_SUCCESS":
        //     return {
        //         ...state,
        //         book: action.payload
        //     };
        // case "GETBOOK_FAIL":
        //     return {
        //         ...state
        //     };
        // case "GETPAPER_REQUEST":
        //     return {
        //         ...state
        //     };

        // case "GETPAPER_SUCCESS":
        //     return {
        //         ...state,
        //         book: action.payload
        //     };
        // case "GETPAPER_FAIL":
        //     return {
        //         ...state
        //     };
        // default:
        //     return state;
    },
    initialState
);
export default bookReducer;
