import { combineReducers } from "redux";
import questionCreator from "./questionCreatorReducer";
import answers from "./answersReducer";

export default combineReducers({
  questionCreator,
  answers
});
