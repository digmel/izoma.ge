import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./rootSaga";
import rootReducer from "./rootReducer";
import { createReduxHistory, routerMiddleware } from "./history";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })
      .prepend(sagaMiddleware)
      .concat(routerMiddleware),
});

sagaMiddleware.run(initSagas);

export const history = createReduxHistory(store);
