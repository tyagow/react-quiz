import { updateQuestion } from "../actions/questionsActions";
import { DELETE_ANSWER } from "../actions/answerActions";
import { selectQuestionCreate } from "../selectors";

const answerDelete = ({ dispatch, getState }) => next => action => {
  // Should remove an id from list of answers of a question
  // reducer will handle remove from his own store/state
  // will update the Question
  if (action.type !== DELETE_ANSWER) {
    return next(action);
  }
  const answerId = action.payload;
  let question = selectQuestionCreate(getState());
  const answers = question.answers.filter(id => id !== answerId);
  question = { ...question, answers };
  dispatch(updateQuestion(question));

  next(action);
};

export default answerDelete;
