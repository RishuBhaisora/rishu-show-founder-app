import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SHOW_LIST_FETCH, SHOW_LIST_FETCHED } from "./action";
import _default from "react-redux/es/components/connect";
import { rootSaga, sagaMiddleware } from "./sagas";
import convertArrayToObject from "./arrayToObject";
import { show } from "./models/show";

export type State = {
  shows: { [q: string]: show[] };
  showQuery: string;
};

export const initialState: State = {
  shows: {},
  showQuery: "",
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  switch (action.type) {
    case SHOW_LIST_FETCH: {
      const query = action.payload;
      return { ...currentState, showQuery: query };
    }
    case SHOW_LIST_FETCHED: {
      const { shows, query } = action.payload;

      return {
        ...currentState,
        shows: { ...currentState.shows, [query]: shows },
      };
    }
    default: {
      return currentState;
    }
  }
};

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);

export default Store;
