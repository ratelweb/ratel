import { call, put, takeLatest } from "redux-saga/effects";
import { GETBOOK_REQUEST, successBook, failBook } from "store/actions/Book";
import { GETPAPER_REQUEST, successPaper, failPaper } from "store/actions/Book";
import { fetchBookData, fetchPaperData } from "../api";

function* getBookApi(payload) {
    try {
        // do api call
        const data = yield call(fetchBookData, payload);
        console.log("Data: ", data);
        yield put(successBook(data));
    } catch (e) {
        yield put(failBook());
        console.log(e);
    }
}

function* getPaperApi(payload) {
    try {
        // do api call
        const data = yield call(fetchPaperData, payload);
        yield put(successPaper(data));
    } catch (e) {
        yield put(failPaper());
        console.log(e);
    }
}

export default function* watchBookApiList() {
    yield takeLatest(GETBOOK_REQUEST, getBookApi);
    yield takeLatest(GETPAPER_REQUEST, getPaperApi);
}
