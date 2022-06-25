import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SHOW_LIST_FETCHED } from "./action";
import _default from "react-redux/es/components/connect";
import { rootSaga, sagaMiddleware } from "./sagas";
import convertArrayToObject from "./arrayToObject";
import { show } from "./models/show";

export type State = {
  shows: {[id:number]:show};
};

export const initialState: State = {
  shows: {},
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
 
  switch (action.type) {
    case SHOW_LIST_FETCHED: {
      const showsObj = convertArrayToObject(action.payload);
       console.log("helloooo", showsObj);
      return { ...currentState,...currentState.shows, shows: showsObj };
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
