import createSagaMiddleware from "redux-saga";
import { takeLatest, takeLeading } from "redux-saga/effects";
import {
  showFetched,
  showListFetched,
  SHOW_FETCH,
  SHOW_LIST_FETCH,
} from "./action";
import { call, put, delay } from "redux-saga/effects";
import { getShow, getShowList } from "./api";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, getShowListSaga);
  yield takeLeading(SHOW_FETCH, getShowSaga);
}

export function* getShowSaga(action: AnyAction): Generator<any, any, any> {
  const data = yield call(getShow, action);
  yield put(showFetched(data));
}

export function* getShowListSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(1000);
  if (!action.payload) {
    return;
  }
  const data = yield call(getShowList, action);
  yield put(showListFetched(data, action.payload));
}
