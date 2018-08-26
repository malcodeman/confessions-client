import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import history from "./history";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

export default store;
