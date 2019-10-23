import { put, takeLatest, all } from "redux-saga/effects";
import { FETCH_NEWS } from "../actions/index";
export const NEWS_RECEIVED = "NEWS_RECEIVED";

function* fetchNews() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then(response => {
    response.json();
  });

  yield put({
    type: NEWS_RECEIVED,
    json: json.articles
  });
}

function* actionWatcher() {
  yield takeLatest(FETCH_NEWS, fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
