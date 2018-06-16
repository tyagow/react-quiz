import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

// import api from "../middlewares/api";
import rootReducer from "../reducers/index";
import idInjector from "../middlewares/idInjector";
import answerInjector from "../middlewares/answerInjector";
import answerDelete from "../middlewares/answerDelete";
import questionLoaderValidation from "../middlewares/questionAuth";

const initialState = {};
export const history = createHistory();
const rmiddleware = routerMiddleware(history);
const middleware = [
  rmiddleware,
  thunk,
  questionLoaderValidation,
  idInjector,
  answerInjector,
  answerDelete
];

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
