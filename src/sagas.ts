import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { showListFetched, SHOW_LIST_FETCH } from "./action";
import { call, put } from "redux-saga/effects";
import { getShowList } from "./api";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, getShowsSaga);
}

export function* getShowsSaga(): Generator<any, any, any> {
  const data = yield call(getShowList);
  yield put(showListFetched(data));
}
