import { combineReducers } from "redux";
import questions from "./questionsReducer";
import answers from "./answersReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  questions,
  answers,
  router: routerReducer
});
