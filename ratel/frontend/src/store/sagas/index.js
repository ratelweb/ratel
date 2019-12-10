import { all, fork } from "redux-saga/effects";
import watchBookApiList from "./BookAPI";
import watchRecomApiList from "./RecomAPI";
import watchUserApiList from "./UserAPI";

function* rootSaga() {
    yield all([fork(watchBookApiList), fork(watchRecomApiList), fork(watchUserApiList)]);
}

export default rootSaga;
