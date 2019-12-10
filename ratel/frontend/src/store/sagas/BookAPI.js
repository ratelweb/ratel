import { call, put, takeLatest } from "redux-saga/effects";
import { GETBOOK_REQUEST, successBook, failBook } from "store/actions/Book";
import { GETPAPER_REQUEST, successPaper, failPaper } from "store/actions/Book";
import { fetchBookData, fetchPaperData } from "../api";

function* getBookApi() {
    try {
        // do api call
        const data = yield call(fetchBookData);
        yield put(successBook(data));
    } catch (e) {
        yield put(failBook());
        console.log(e);
    }
}

function* getPaperApi() {
    try {
        // do api call
        const data = yield call(fetchPaperData);
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
