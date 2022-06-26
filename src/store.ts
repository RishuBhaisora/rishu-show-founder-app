import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import _default from "react-redux/es/components/connect";
import { rootSaga, sagaMiddleware } from "./sagas";
import showReducer from "./reducers/showReducer";

export const reducer = combineReducers({
  shows: showReducer,
});
export type State = ReturnType<typeof Store.getState>;
const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default Store;
