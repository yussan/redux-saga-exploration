import { put, takeLatest, all } from "redux-saga/effects";
import { FETCH_NEWS, RECEIVED_NEWS } from "../actions/index";

function* fetchNews() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=37b41fb5a5cd4fd3b35dfefb069a9b38"
  ).then(response => response.json());

  yield put({
    type: RECEIVED_NEWS,
    json
  });
}

function* actionWatcher() {
  yield takeLatest(FETCH_NEWS, fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
