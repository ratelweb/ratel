import { call, put, takeLatest } from "redux-saga/effects";
import { GETRECOM_REQUEST, successRecom, failRecom } from "store/actions/Recom";
import { GETFAVOR_REQUEST, successGetFavor, failGetFavor } from "store/actions/Recom";
import { ADDFAVOR_REQUEST, successAddFavor, failAddFavor } from "store/actions/Recom";
import { fetchRecomData, fetchFavorData, addFavorData } from "../api";

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

function* getFavorApi() {
    try {
        // do api call
        const data = yield call(fetchFavorData);
        yield put(successGetFavor(data));
    } catch (e) {
        yield put(failGetFavor());
        console.log(e);
    }
}

function* addFavorApi() {
    try {
        // do api call
        const data = yield call(addFavorData);
        yield put(successAddFavor(data));
    } catch (e) {
        yield put(failAddFavor());
        console.log(e);
    }
}

export default function* watchRecomApiList() {
    yield takeLatest(GETRECOM_REQUEST, getRecomApi);
    yield takeLatest(GETFAVOR_REQUEST, getFavorApi);
    yield takeLatest(ADDFAVOR_REQUEST, addFavorApi);
}
