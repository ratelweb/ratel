const initialState = {
    recom: []
};

const recomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETRECOM_REQUEST":
            return {
                ...state
            };

        case "GETRECOM_SUCCESS":
            return {
                ...state,
                recom: action.payload
            };
        case "GETRECOM_FAIL":
            return {
                ...state
            };
        default:
            return state;
    }
};
export default recomReducer;
