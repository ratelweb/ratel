import { call, put, takeLatest } from "redux-saga/effects";
import { GETRECOM_REQUEST, successRecom, failRecom } from "store/actions/Recom";
import { fetchRecomData } from "../api";

function* getRecomApi() {
    try {
        // do api call
        const data = yield call(fetchRecomData);
        yield put(successRecom(data));
    } catch (e) {
        yield put(failRecom());
        console.log(e);
    }
}

export default function* watchRecomApiList() {
    yield takeLatest(GETRECOM_REQUEST, getRecomApi);
}
