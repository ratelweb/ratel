const initialState = {
    recom: [],
    favor: []
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
        case "GETFAVOR_REQUEST":
            return {
                ...state
            };

        case "GETFAVOR_SUCCESS":
            return {
                ...state,
                favor: action.payload
            };
        case "GETFAVOR_FAIL":
            return {
                ...state
            };
        case "ADDFAVOR_REQUEST":
            return {
                ...state
            };

        case "ADDFAVOR_SUCCESS":
            return {
                ...state,
                favor: action.payload
            };
        case "ADDFAVOR_FAIL":
            return {
                ...state
            };
        default:
            return state;
    }
};
export default recomReducer;
