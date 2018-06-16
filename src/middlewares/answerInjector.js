import { updateQuestion } from "../actions/questionsActions";
import { UPDATE_ANSWER } from "../actions/answerActions";
import { selectQuestionCreate } from "../selectors";

const answerInjector = ({ dispatch, getState }) => next => action => {
  // Should inject an id if an object dont have it
  if (action.type !== UPDATE_ANSWER) {
    return next(action);
  }
  const answer = action.payload;
  // inject answer inside question answers
  let question = selectQuestionCreate(getState());
  if (!question.answers.includes(answer.id)) {
    const answers = [...question.answers, answer.id];
    question = { ...question, answers };
    dispatch(updateQuestion(question));
  }

  next(action);
};

export default answerInjector;
