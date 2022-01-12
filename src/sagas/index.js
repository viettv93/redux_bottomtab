import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* login(action) {
    try {
        const data = yield call(getPostData, action.payload)
        yield put({ type: "LOGIN_SUCCEEDED", user: data.data });
    } catch (e) {
    }
}
export const getPostData = (params) => {
    return axios.post('https://sandbox.izivan.com.vn/api/login', params)
}

function* mySaga() {
    yield takeLatest("LOGIN", login);
}

export default mySaga;