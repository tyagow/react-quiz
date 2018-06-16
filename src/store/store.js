import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import api from "../middlewares/api";
import rootReducer from "../reducers/index";
import questionCreator from "../middlewares/questionCreator";

const initialState = {};
export const history = createHistory();
const middleware = [thunk, questionCreator];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
