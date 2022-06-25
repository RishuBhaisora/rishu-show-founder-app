import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { showListFetched, SHOW_LIST_FETCH } from "./action";
import { call, put, delay } from "redux-saga/effects";
import { getShowList } from "./api";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, getShowsSaga);
}

export function* getShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(1000);
  if(!action.payload){
    return
  }
  const data = yield call(getShowList, action);
  yield put(showListFetched(data,action.payload));
}
