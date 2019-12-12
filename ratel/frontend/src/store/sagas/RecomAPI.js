import { call, put, takeLatest } from "redux-saga/effects";
import { GETRECOM_REQUEST, successRecom, failRecom } from "store/actions/Recom";
import { GETFAVOR_REQUEST, successGetFavor, failGetFavor } from "store/actions/Recom";
import { ADDFAVOR_REQUEST, successAddFavor, failAddFavor } from "store/actions/Recom";
import { fetchRecomData, fetchFavorData, addFavorData } from "../api";

function* getRecomApi(payload) {
    try {
        const info = { username: payload.payload };
        // do api call
        const data = yield call(fetchRecomData, info);
        console.log("Data: ", data);
        yield put(successRecom(data));
    } catch (e) {
        yield put(failRecom());
        console.log(e);
    }
}

function* getFavorApi(payload) {
    try {
        // do api call
        const data = yield call(fetchFavorData, payload);
        console.log("data: ", data);
        yield put(successGetFavor(data));
    } catch (e) {
        yield put(failGetFavor());
        console.log(e);
    }
}

function* addFavorApi(payload) {
    try {
        // do api call
        const data = yield call(addFavorData, payload);
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
