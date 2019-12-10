import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, successLogin, failLogin } from "store/actions/User";
import { SIGN_REQUEST, successSign, failSign } from "store/actions/User";
import { LOGOUT_REQUEST, successLogout, failLogout } from "store/actions/User";
import { fetchLogin, fetchSign } from "../api";

function* LoginApi({ payload }) {
    try {
        const data = yield call(fetchLogin(payload));

        if (data) {
            //localStorage.setItem("token", responseBody.data.token);
            localStorage.setItem("id", JSON.stringify(data.id));
            yield put(successLogin(data));
        }
    } catch (e) {
        yield put(failLogin());
        console.log(e);
    }
}

function* LogoutApi() {
    try {
        localStorage.removeItem("id");
        yield put(successLogout());
    } catch (e) {
        yield put(failLogout());
        console.log(e);
    }
}

function* SignApi({ payload }) {
    try {
        // do api call
        const data = yield call(fetchSign(payload));
        yield put(successSign(data));
    } catch (e) {
        yield put(failSign());
        console.log(e);
    }
}

export default function* watchUserApiList() {
    yield takeLatest(LOGIN_REQUEST, LoginApi);
    yield takeLatest(LOGOUT_REQUEST, LogoutApi);
    yield takeLatest(SIGN_REQUEST, SignApi);
}
