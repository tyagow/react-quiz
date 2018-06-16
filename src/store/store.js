import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

// import api from "../middlewares/api";
import rootReducer from "../reducers/index";
import idInjector from "../middlewares/idInjector";
import answerInjector from "../middlewares/answerInjector";

const initialState = {};
export const history = createHistory();
const middleware = [thunk, idInjector, answerInjector];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
