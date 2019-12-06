const initialState = {
    book: [],
    paper: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETBOOK_REQUEST":
            return {
                ...state
            };

        case "GETBOOK_SUCCESS":
            return {
                ...state,
                book: action.payload
            };
        case "GETBOOK_FAIL":
            return {
                ...state
            };
        case "GETPAPER_REQUEST":
            return {
                ...state
            };

        case "GETPAPER_SUCCESS":
            return {
                ...state,
                book: action.payload
            };
        case "GETPAPER_FAIL":
            return {
                ...state
            };
        default:
            return state;
    }
};
export default bookReducer;
