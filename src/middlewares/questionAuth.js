import {
  LOAD_QUESTION,
  updateQuestionAction
} from "../actions/questionsActions";
import { push } from "react-router-redux";

const questionLoaderValidation = ({ dispatch, getState }) => next => action => {
  if (action.type !== LOAD_QUESTION) {
    return next(action);
  }
  const id = action.payload;
  if (!getState().questions.items.find(item => item.id === id)) {
    const question = { title: "", answers: [], correctAnswer: [] };
    dispatch(push("/question/new"));
    return next(updateQuestionAction(question));
  }
  return next(action);
};

export default questionLoaderValidation;
