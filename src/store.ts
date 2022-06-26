import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import _default from "react-redux/es/components/connect";
import { rootSaga, sagaMiddleware } from "./sagas";
import { initialShowState, Show, showReducer } from "./reducers/showReducer";

export type State = {
  shows: Show
};

export const initialState: State = {
  shows: initialShowState
};
export const reducer: Reducer<State> = (state = initialState, action) => {
  return {shows:showReducer(state.shows,action)}
  
};

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);

export default Store;
