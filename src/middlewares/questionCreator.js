import { UPDATE_QUESTION } from "../actions/questionsActions";
import { generateId } from "../utils";

const questionCreator = ({ dispatch, getState }) => next => action => {
  // Should inject an id if a question don't have it
  console.log(action);
  if (action.type !== UPDATE_QUESTION) {
    return next(action);
  }
  // Check if question has an id and inject one if it dosen't
  const question = action.payload;
  console.log(question);

  if (!question.id) {
    question.id = generateId();
    action.payload = question;
  }

  next(action);
};

export default questionCreator;
