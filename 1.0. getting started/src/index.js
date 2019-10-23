import React from "react";
import ReactDOM from "react-dom";
import IndexComponent from "./components/index";

// redux
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/index";
import rootSagas from "./redux/sagas/index";
import reduxLogger from "redux-logger";

// redux configurations
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(rootSagas);

// react configurations
const App = () => (
  <Provider store={store}>
    <IndexComponent />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
