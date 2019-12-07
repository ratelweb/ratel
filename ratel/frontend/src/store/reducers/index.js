import { combineReducers } from "redux";
import bookReducer from "./Book";
import recomReducer from "./Recom";
import userReducer from "./Recom";

const rootReducer = combineReducers({
    bookReducer,
    recomReducer,
    userReducer
});

export default rootReducer;
