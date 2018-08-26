import { all, fork } from "redux-saga/effects";

import postsSagas from "../../features/posts/sagas/postsSaga";

export default function* rootSaga() {
  yield all([fork(postsSagas)]);
}
